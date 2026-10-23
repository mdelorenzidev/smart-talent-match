import {DatabaseSync} from 'node:sqlite';
import {mkdirSync,readFileSync} from 'node:fs';
import path from 'node:path';

export function openLocalDatabase(filename=path.resolve('.mesh-data/mesh-demo.sqlite')) {
  if(filename!==':memory:')mkdirSync(path.dirname(filename),{recursive:true});
  const sqlite=new DatabaseSync(filename);
  sqlite.exec('PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL;');
  sqlite.exec('CREATE TABLE IF NOT EXISTS _mesh_migrations (name TEXT PRIMARY KEY NOT NULL)');
  const migration='0000_mesh_demo';
  if(!sqlite.prepare('SELECT name FROM _mesh_migrations WHERE name=?').get(migration)){
    sqlite.exec('BEGIN');
    try{sqlite.exec(readFileSync(new URL(`../drizzle/${migration}.sql`,import.meta.url),'utf8'));sqlite.prepare('INSERT INTO _mesh_migrations (name) VALUES (?)').run(migration);sqlite.exec('COMMIT')}catch(error){sqlite.exec('ROLLBACK');throw error}
  }
  const prepare=(sql,values=[])=>({bind:(...args)=>prepare(sql,args),async first(){return sqlite.prepare(sql).get(...values)||null},async all(){return {results:sqlite.prepare(sql).all(...values)}},async run(){const result=sqlite.prepare(sql).run(...values);return {meta:{changes:Number(result.changes)}}}});
  return {prepare,async batch(statements){sqlite.exec('BEGIN');try{const result=[];for(const s of statements)result.push(await s.run());sqlite.exec('COMMIT');return result}catch(error){sqlite.exec('ROLLBACK');throw error}},close:()=>sqlite.close()};
}
