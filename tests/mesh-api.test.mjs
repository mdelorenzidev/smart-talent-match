import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync,rmSync} from 'node:fs';
import path from 'node:path';
import {openLocalDatabase} from '../server/local-database.mjs';
import {handleAPI} from '../server/api.mjs';
import {filterSchema,DEFAULT_MODEL} from '../server/gemini.mjs';

const base='http://localhost';
const emptyFilters={q:'',city:'',mode:'',contract:'',noWeekend:false,min:0};
const request=(url,{cookie,body,method=body?'POST':'GET',origin}={})=>new Request(base+url,{method,headers:{...(cookie?{cookie}:{}),...(body?{'Content-Type':'application/json'}:{}),...(origin?{origin}:{})},body:body?JSON.stringify(body):undefined});
async function setup(extra={}){const DB=openLocalDatabase(':memory:');const env={DB,...extra};const response=await handleAPI(request('/api/bootstrap'),env);assert.equal(response.status,200);const cookie=response.headers.get('set-cookie').split(';')[0];return {DB,env,cookie,...await response.json()}}
const generated=value=>new Response(JSON.stringify({candidates:[{finishReason:'STOP',content:{parts:[{text:JSON.stringify(value)}]}}]}),{status:200});

test('catalogo reale, condizioni demo e benchmark espliciti nel database',async()=>{
 const x=await setup();try{assert.deepEqual(x.catalog.companies.map(c=>c.name),['Accenture','IBM','Enel','IKEA','Leonardo','DHL']);assert.equal(x.catalog.jobs.length,8);assert.equal(x.catalog.candidates.length,4);assert.equal(x.catalog.jobs[0].benchmarkInfo.simulated,true);assert.equal(x.catalog.jobs[0].benchmarkInfo.sampleSize,0);assert.equal(x.ai.enabled,false);assert.equal((await x.DB.prepare('SELECT COUNT(*) AS n FROM offers').first()).n,8)}finally{x.DB.close()}
});
test('profilo salvato e riletto dal server, con revisioni e conflitti',async()=>{
 const x=await setup();try{x.state.profile.bio='Salvataggio nel database';let r=await handleAPI(request('/api/state',{cookie:x.cookie,method:'PUT',body:{state:x.state,revision:0}}),x.env);assert.equal(r.status,200);r=await handleAPI(request('/api/bootstrap',{cookie:x.cookie}),x.env);const value=await r.json();assert.equal(value.state.profile.bio,'Salvataggio nel database');assert.equal(value.revision,1);r=await handleAPI(request('/api/state',{cookie:x.cookie,method:'PUT',body:{state:x.state,revision:0}}),x.env);assert.equal(r.status,409)}finally{x.DB.close()}
});
test('sessioni senza login isolate e cookie HttpOnly',async()=>{
 const x=await setup();try{x.state.profile.name='Profilo sessione A';await handleAPI(request('/api/state',{cookie:x.cookie,method:'PUT',body:{state:x.state,revision:0}}),x.env);const r=await handleAPI(request('/api/bootstrap'),x.env);assert.match(r.headers.get('set-cookie'),/HttpOnly; SameSite=Strict/);const value=await r.json();assert.equal(value.state.profile.name,'Giulia Romano');assert.notEqual(r.headers.get('set-cookie').split(';')[0],x.cookie)}finally{x.DB.close()}
});
test('scritture senza sessione, cross origin e offerte malformate respinte',async()=>{
 const x=await setup();try{assert.equal((await handleAPI(request('/api/state',{method:'PUT',body:{state:x.state,revision:0}}),x.env)).status,401);assert.equal((await handleAPI(request('/api/state',{cookie:x.cookie,origin:'https://untrusted.invalid',method:'PUT',body:{state:x.state,revision:0}}),x.env)).status,403);x.state.customJobs=[{id:'custom-1',company:'accenture',salary:[50000,1000]}];assert.equal((await handleAPI(request('/api/state',{cookie:x.cookie,method:'PUT',body:{state:x.state,revision:0}}),x.env)).status,400)}finally{x.DB.close()}
});
test('ricerca demo applica solo criteri supportati e non chiama Gemini',async()=>{
 const x=await setup();try{let calls=0;const r=await handleAPI(request('/api/ai/search',{cookie:x.cookie,body:{message:'Design a Salerno senza weekend',filters:emptyFilters}}),x.env,{fetch:()=>{calls++;throw new Error('Non deve chiamare Google')}});const out=await r.json();assert.equal(r.status,200);assert.equal(out.source,'demo');assert.deepEqual(out.resultIds,['j1']);assert.equal(out.filters.noWeekend,true);assert.equal(calls,0)}finally{x.DB.close()}
});
test('salario ambiguo richiede chiarimenti e conserva tutti i filtri',async()=>{
 const x=await setup();try{const prior={...emptyFilters,city:'Napoli',mode:'Ibrido'};const r=await handleAPI(request('/api/ai/search',{cookie:x.cookie,body:{message:'Vorrei 2000 euro al mese a Salerno',filters:prior}}),x.env);const out=await r.json();assert.equal(out.needsClarification,true);assert.deepEqual(out.filters,prior)}finally{x.DB.close()}
});
test('Gemini riceve chiave solo in header server e output strutturato',async()=>{
 const x=await setup({GEMINI_API_KEY:'fake-key-only-in-test'});try{let seen;const r=await handleAPI(request('/api/ai/search',{cookie:x.cookie,body:{message:'Frontend a Napoli',filters:emptyFilters}}),x.env,{fetch:async(url,options)=>{seen={url,options};return generated({message:'Ecco i criteri.',needsClarification:false,filters:{...emptyFilters,q:'Developer',city:'Napoli'}})}});const out=await r.json();assert.equal(out.source,'gemini');assert.deepEqual(out.resultIds,['j2']);assert.match(seen.url,new RegExp(DEFAULT_MODEL));assert.equal(seen.options.headers['x-goog-api-key'],'fake-key-only-in-test');const payload=JSON.parse(seen.options.body);assert.deepEqual(payload.generationConfig.responseJsonSchema.properties.filters,filterSchema);assert.equal(JSON.stringify(out).includes('fake-key'),false);assert.equal(seen.options.body.includes('giulia@example.test'),false)}finally{x.DB.close()}
});
test('filtri arbitrari restituiti da Gemini non vengono applicati',async()=>{
 const x=await setup({GEMINI_API_KEY:'fake-key'});try{const r=await handleAPI(request('/api/ai/search',{cookie:x.cookie,body:{message:'Un lavoro',filters:emptyFilters}}),x.env,{fetch:async()=>generated({message:'OK',needsClarification:false,filters:{...emptyFilters,sql:'DROP TABLE offers'}})});assert.equal(r.status,502)}finally{x.DB.close()}
});
test('un errore Gemini non viene mascherato come risposta demo',async()=>{
 const x=await setup({GEMINI_API_KEY:'fake-key'});try{const r=await handleAPI(request('/api/ai/search',{cookie:x.cookie,body:{message:'Un lavoro',filters:emptyFilters}}),x.env,{fetch:async()=>new Response('secret provider detail',{status:429})});assert.equal(r.status,502);const out=await r.json();assert.match(out.error,/Quota Gemini/);assert.equal(JSON.stringify(out).includes('secret provider'),false)}finally{x.DB.close()}
});
test('CV resta una bozza e rifiuta competenze non dichiarate',async()=>{
 const x=await setup();try{const r=await handleAPI(request('/api/ai/cv',{cookie:x.cookie,body:{story:'Ho curato contenuti con Canva',aspirations:'Design',salary:'30k RAL',availability:'Full time'}}),x.env);const out=await r.json();assert.equal(out.source,'demo');assert.ok(out.skills.includes('Canva'));assert.equal((await (await handleAPI(request('/api/bootstrap',{cookie:x.cookie}),x.env)).json()).state.cvDraft,null);const live={...x.env,GEMINI_API_KEY:'fake-key'};const invalid=await handleAPI(request('/api/ai/cv',{cookie:x.cookie,body:{story:'Uso Canva'}}),live,{fetch:async()=>generated({summary:'Profilo',skills:['Chirurgia'],questions:[]})});assert.equal(invalid.status,502)}finally{x.DB.close()}
});
test('limite richieste AI e nessuna chiave esposta da bootstrap',async()=>{
 const x=await setup({GEMINI_API_KEY:'private-test-key'});try{assert.equal(JSON.stringify({state:x.state,ai:x.ai}).includes('private-test-key'),false);const id=x.cookie.split('=')[1];await x.DB.prepare('INSERT INTO ai_usage (workspace_id,hour,requests) VALUES (?,?,?)').bind(id,new Date().toISOString().slice(0,13),30).run();const r=await handleAPI(request('/api/ai/cv',{cookie:x.cookie,body:{story:'Esperienza con Excel'}}),x.env,{fetch:()=>{throw new Error('Quota deve bloccare')}});assert.equal(r.status,429)}finally{x.DB.close()}
});
test('SQLite conserva il profilo dopo chiusura e riapertura del database',async()=>{
 const filename=path.resolve('outputs/test-persistence-'+crypto.randomUUID()+'.sqlite');mkdirSync(path.dirname(filename),{recursive:true});let DB=openLocalDatabase(filename);
 try{const r=await handleAPI(request('/api/bootstrap'),{DB});const cookie=r.headers.get('set-cookie').split(';')[0],value=await r.json();value.state.profile.bio='Persistenza verificata';assert.equal((await handleAPI(request('/api/state',{cookie,method:'PUT',body:{state:value.state,revision:0}}),{DB})).status,200);DB.close();DB=openLocalDatabase(filename);const loaded=await (await handleAPI(request('/api/bootstrap',{cookie}),{DB})).json();assert.equal(loaded.state.profile.bio,'Persistenza verificata')}finally{DB.close();for(const suffix of ['','-wal','-shm'])rmSync(filename+suffix,{force:true})}
});
