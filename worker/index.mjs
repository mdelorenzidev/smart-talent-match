import {handleAPI} from '../server/api.mjs';
import {assets} from './assets.generated.mjs';

export default {
 async fetch(request,env){
  const api=await handleAPI(request,env);if(api)return api;
  if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});
  const url=new URL(request.url),file=url.pathname==='/'?'/index.html':url.pathname;
  if(!Object.hasOwn(assets,file))return new Response('Not found',{status:404});
  const type=file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':file.endsWith('.svg')?'image/svg+xml':'text/plain; charset=utf-8';
  return new Response(request.method==='HEAD'?null:assets[file],{headers:{'Content-Type':type,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Permissions-Policy':'camera=(), microphone=(), geolocation=()'}});
 }
};
