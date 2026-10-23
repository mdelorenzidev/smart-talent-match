import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {handleAPI} from '../server/api.mjs';
import {openLocalDatabase} from '../server/local-database.mjs';
try{process.loadEnvFile('.env')}catch(error){if(error.code!=='ENOENT')throw error}
const root=path.resolve('mesh');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json'};
const db=openLocalDatabase();
const env={DB:db,GEMINI_API_KEY:process.env.GEMINI_API_KEY||'',GEMINI_MODEL:process.env.GEMINI_MODEL||undefined};
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://127.0.0.1:4173');
  if(url.pathname.startsWith('/api/')){
   let body;const chunks=[];let size=0;
   for await(const chunk of req){size+=chunk.length;if(size>200000){res.writeHead(413);return res.end('Request too large')}chunks.push(chunk)}
   if(chunks.length)body=Buffer.concat(chunks);
   const request=new Request(url,{method:req.method,headers:req.headers,body:!['GET','HEAD'].includes(req.method)?body:undefined});
   const response=await handleAPI(request,env);
   res.writeHead(response.status,Object.fromEntries(response.headers));return res.end(Buffer.from(await response.arrayBuffer()));
  }
  const pathname=decodeURIComponent(url.pathname);
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)||!(await stat(file)).isFile()){res.writeHead(404);return res.end('Not found')}
  const body=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(body);
 }catch{res.writeHead(500);res.end('MESH non riesce a completare la richiesta')}
});
server.listen(4173,'127.0.0.1',()=>console.log('MESH: http://127.0.0.1:4173 · SQLite collegato · Gemini '+(env.GEMINI_API_KEY?'configurato':'non configurato')));
const stop=()=>server.close(()=>{db.close();process.exit(0)});
process.on('SIGINT',stop);process.on('SIGTERM',stop);
