import {companies,jobs,candidates,initialDB} from './data.js';
let revision=0,online=false,queue=Promise.resolve(),status='Collegamento al database…';
const cacheKey='mesh-demo-v2-cache';
const update=text=>{status=text;document.querySelectorAll('[data-storage-status]').forEach(el=>{el.textContent=text;el.classList.toggle('storage-error',!online)})};
async function json(url,options){const result=await fetch(url,{signal:AbortSignal.timeout(url.includes('/ai/')?35000:8000),...options,headers:{'Content-Type':'application/json',...options?.headers}});let body;try{body=await result.json()}catch{throw new Error('Il server MESH non risponde. Avvia il server completo.')}if(!result.ok)throw new Error(body.error||'Operazione non riuscita');return body}
export const storage={
  get status(){return status},
  async load(){try{const result=await json('/api/bootstrap');revision=result.revision;online=true;update('Database collegato · dati demo');localStorage.setItem(cacheKey,JSON.stringify(result.state));return result}catch{online=false;update('Offline · modifiche solo in questo browser');let state;try{state=JSON.parse(localStorage.getItem(cacheKey))}catch{}return {state:state?.version===2?state:initialDB(),catalog:{companies,jobs,candidates},ai:{enabled:false}}}},
  save(state){const snapshot=JSON.parse(JSON.stringify(state));localStorage.setItem(cacheKey,JSON.stringify(snapshot));if(!online){update('Offline · ricarica per collegare il database');return Promise.resolve(false)}update('Salvataggio nel database…');queue=queue.then(async()=>{if(!online)return false;try{const result=await json('/api/state',{method:'PUT',body:JSON.stringify({state:snapshot,revision})});revision=result.revision;update('Salvato nel database · dati demo');return true}catch(error){online=false;update('Salvataggio non riuscito · ricarica la pagina');document.dispatchEvent(new CustomEvent('mesh-storage-error',{detail:error.message}));return false}});return queue},
  async ai(kind,payload){await queue;if(!online)throw new Error('Il database non è collegato. Ricarica MESH prima di usare l’assistente.');return json('/api/ai/'+kind,{method:'POST',body:JSON.stringify(payload)})}
};
