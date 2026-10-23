import {companies, jobs, candidates, initialDB} from '../mesh/data.js';

export async function seedDatabase(db) {
  const statements = [
    ...companies.map(c => db.prepare('INSERT OR IGNORE INTO companies (id,payload) VALUES (?,?)').bind(c.id,JSON.stringify(c))),
    ...jobs.map(j => db.prepare('INSERT OR IGNORE INTO offers (id,company_id,payload) VALUES (?,?,?)').bind(j.id,j.company,JSON.stringify(j))),
    ...candidates.map(c => db.prepare('INSERT OR IGNORE INTO candidates (id,payload) VALUES (?,?)').bind(c.id,JSON.stringify(c))),
    ...jobs.map(j => db.prepare('INSERT OR IGNORE INTO salary_benchmarks (offer_id,payload) VALUES (?,?)').bind(j.id,JSON.stringify({range:j.benchmark,currency:'EUR',unit:'RAL annua lorda',region:'Campania',date:'2026-10-23',source:'Dataset MESH dimostrativo',sampleSize:0,simulated:true})))
  ];
  await db.batch(statements);
}

export async function getCatalog(db) {
  const read = async table => (await db.prepare(`SELECT payload FROM ${table} ORDER BY rowid`).all()).results.map(r=>JSON.parse(r.payload));
  const [companyList,offerList,candidateList] = await Promise.all([read('companies'),read('offers'),read('candidates')]);
  const benchmarks=(await db.prepare('SELECT offer_id,payload FROM salary_benchmarks').all()).results;
  const byOffer=new Map(benchmarks.map(row=>[row.offer_id,JSON.parse(row.payload)]));
  return {companies:companyList,jobs:offerList.map(j=>({...j,benchmark:byOffer.get(j.id)?.range||j.benchmark,benchmarkInfo:byOffer.get(j.id)})),candidates:candidateList};
}

export async function getWorkspace(db,id) {
  const value=initialDB();
  await db.prepare('INSERT OR IGNORE INTO demo_workspaces (id,payload,revision,updated_at) VALUES (?,?,0,?)').bind(id,JSON.stringify(value),new Date().toISOString()).run();
  const row=await db.prepare('SELECT payload,revision FROM demo_workspaces WHERE id=?').bind(id).first();
  return {state:JSON.parse(row.payload),revision:row.revision};
}

export async function putWorkspace(db,id,state,revision) {
  const result=await db.prepare('UPDATE demo_workspaces SET payload=?,revision=revision+1,updated_at=? WHERE id=? AND revision=?').bind(JSON.stringify(state),new Date().toISOString(),id,revision).run();
  return result.meta.changes>0;
}

export async function consumeAIQuota(db,id,limit=30) {
  const hour=new Date().toISOString().slice(0,13);
  await db.prepare('INSERT INTO ai_usage (workspace_id,hour,requests) VALUES (?,?,1) ON CONFLICT(workspace_id,hour) DO UPDATE SET requests=requests+1').bind(id,hour).run();
  const row=await db.prepare('SELECT requests FROM ai_usage WHERE workspace_id=? AND hour=?').bind(id,hour).first();
  return row.requests<=limit;
}
