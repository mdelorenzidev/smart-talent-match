import {seedDatabase,getCatalog,getWorkspace,putWorkspace,consumeAIQuota} from './database.mjs';
import {DEFAULT_MODEL,searchAssistant,cvAssistant} from './gemini.mjs';

const response=(body,status=200,headers={})=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers}});
const fail=(message,status=400)=>Object.assign(new Error(message),{status});
async function readJSON(request) {
  if(!request.headers.get('content-type')?.startsWith('application/json'))throw fail('Formato richiesta non supportato',415);
  if(Number(request.headers.get('content-length'))>200000)throw fail('Richiesta troppo grande',413);
  const reader=request.body?.getReader();if(!reader)throw fail('Richiesta vuota');
  const parts=[];let size=0;
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>200000){await reader.cancel();throw fail('Richiesta troppo grande',413)}parts.push(value)}
  const bytes=new Uint8Array(size);let offset=0;for(const p of parts){bytes.set(p,offset);offset+=p.length}
  try{return JSON.parse(new TextDecoder().decode(bytes))}catch{throw fail('JSON non valido')}
}
export function validateState(state,catalog) {
  if(!state||state.version!==2||!state.profile||typeof state.profile!=='object'||Array.isArray(state.profile))throw fail('Archivio non valido');
  for(const k of ['name','title','city','email','bio','experience','education','aspirations','salary','availability'])if(typeof state.profile[k]!=='string'||state.profile[k].length>8000)throw fail('Profilo non valido');
  if(typeof state.profile.visible!=='boolean'||!Array.isArray(state.profile.skills)||state.profile.skills.length>60||state.profile.skills.some(s=>typeof s!=='string'||s.length>100))throw fail('Competenze non valide');
  for(const key of ['saved','hidden','applications','threads','customJobs','searchMessages','cvMessages','calendar'])if(!Array.isArray(state[key])||state[key].length>300)throw fail('Archivio troppo grande o incompleto');
  for(const key of ['companyStatuses','feedbacks','professional','companyProfile','employment'])if(!state[key]||typeof state[key]!=='object'||Array.isArray(state[key]))throw fail('Archivio incompleto');
  if(typeof state.companyProfile.about!=='string'||state.companyProfile.about.length>8000||typeof state.boost!=='boolean'||typeof state.heart!=='boolean')throw fail('Dati demo non validi');
  for(const j of state.customJobs){
    if(!/^custom-\d+$/.test(j.id)||!catalog.companies.some(c=>c.id===j.company)||!Array.isArray(j.salary)||j.salary.length!==2||j.salary.some(n=>!Number.isFinite(n)||n<1000||n>500000)||j.salary[1]<j.salary[0]||!Array.isArray(j.benchmark)||j.benchmark.length!==2||j.benchmark.some(n=>!Number.isFinite(n)))throw fail('Offerta non valida');
    for(const k of ['title','category','city','mode','contract','level','description','shift','posted'])if(typeof j[k]!=='string'||j[k].length>8000)throw fail('Condizioni offerta non valide');
    if(!Number.isFinite(j.hours)||j.hours<1||j.hours>48||typeof j.weekend!=='boolean')throw fail('Orario offerta non valido');
    for(const k of ['skills','tags','tasks'])if(!Array.isArray(j[k])||j[k].length>60||j[k].some(s=>typeof s!=='string'||s.length>8000))throw fail('Requisiti offerta non validi');
    if(!Array.isArray(j.growth)||j.growth.length>10||j.growth.some(row=>!Array.isArray(row)||row.length!==3||row.some(s=>typeof s!=='string'||s.length>1000)))throw fail('Percorso di crescita non valido');
  }
  const ids=new Set([...catalog.jobs,...state.customJobs].map(j=>j.id));
  for(const id of [...state.saved,...state.hidden])if(!ids.has(id))throw fail('Riferimento offerta non valido');
  for(const a of state.applications)if(typeof a.id!=='string'||!ids.has(a.jobId)||!['Da valutare','Inviata','Colloquio','Proposta','Assunta','Non selezionata','Ritirata'].includes(a.status)||!Array.isArray(a.history)||a.history.some(h=>typeof h!=='string'))throw fail('Candidatura non valida');
  for(const t of state.threads)if(typeof t.id!=='string'||!catalog.companies.some(c=>c.id===t.company)||!Array.isArray(t.messages)||t.messages.length>300||t.messages.some(m=>!['company','candidate'].includes(m.from)||typeof m.text!=='string'||m.text.length>8000||typeof m.time!=='string'))throw fail('Conversazione non valida');
  for(const m of state.searchMessages)if(!['assistant','user'].includes(m.role)||typeof m.text!=='string'||m.text.length>8000)throw fail('Messaggio assistente non valido');
  if(state.cvMessages.some(s=>typeof s!=='string'||s.length>8000))throw fail('Racconto non valido');
  if(state.cvDraft!==null&&(typeof state.cvDraft?.summary!=='string'||!Array.isArray(state.cvDraft.skills)||state.cvDraft.skills.some(s=>typeof s!=='string')||['aspirations','salary','availability'].some(k=>typeof state.cvDraft[k]!=='string')))throw fail('Bozza CV non valida');
  return state;
}

export async function handleAPI(request,env,dependencies={}) {
  const url=new URL(request.url),path=url.pathname;
  if(!path.startsWith('/api/'))return null;
  try{
    if(!env.DB)throw fail('Database non disponibile. Avvia il server MESH completo.',503);
    if(!['GET','PUT','POST'].includes(request.method))return response({error:'Metodo non supportato'},405);
    const origin=request.headers.get('origin');
    if(origin&&origin!==url.origin)throw fail('Origine non consentita',403);
    await seedDatabase(env.DB);
    const rawCookie=request.headers.get('cookie')||'';
    let id=rawCookie.match(/(?:^|;\s*)mesh_demo=([a-f0-9-]{36})(?:;|$)/)?.[1];
    const isNew=!id;
    if(isNew&&!(path==='/api/bootstrap'&&request.method==='GET'))throw fail('Apri prima MESH per iniziare la sessione demo.',401);
    if(!id)id=crypto.randomUUID();
    const {state,revision}=await getWorkspace(env.DB,id);
    const catalog=await getCatalog(env.DB);
    if(path==='/api/bootstrap'&&request.method==='GET')return response({state,revision,catalog,storage:'database',ai:{enabled:!!env.GEMINI_API_KEY,model:env.GEMINI_MODEL||DEFAULT_MODEL}},200,isNew?{'Set-Cookie':`mesh_demo=${id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=2592000${url.protocol==='https:'?'; Secure':''}`} : {});
    if(path==='/api/state'&&request.method==='PUT'){
      const body=await readJSON(request);
      if(!Number.isInteger(body.revision)||body.revision<0)throw fail('Versione archivio non valida');
      validateState(body.state,catalog);
      if(!await putWorkspace(env.DB,id,body.state,body.revision))throw fail('La demo è stata aggiornata in un’altra scheda. Ricarica la pagina prima di salvare.',409);
      return response({ok:true,revision:body.revision+1});
    }
    if(['/api/ai/search','/api/ai/cv'].includes(path)&&request.method==='POST'){
      const body=await readJSON(request);
      if(body.history!==undefined&&(!Array.isArray(body.history)||body.history.length>30))throw fail('Cronologia non valida');
      if(env.GEMINI_API_KEY&&!await consumeAIQuota(env.DB,id,30))throw fail('Hai raggiunto il limite demo di 30 richieste AI all’ora. Riprova più tardi.',429);
      const liveCatalog={...catalog,jobs:[...state.customJobs,...catalog.jobs]};
      try{return response(path.endsWith('/search')?await searchAssistant(env,body,liveCatalog,dependencies.fetch):await cvAssistant(env,body,state.profile,dependencies.fetch))}catch(error){throw fail(error.message,env.GEMINI_API_KEY?502:400)}
    }
    return response({error:'Percorso non trovato'},404);
  }catch(error){return response({error:error.status?error.message:'Impossibile completare l’operazione nel database. Riprova.'},error.status||500)}
}
