// Adapted from the dependency-free Sites Worker ESM validator.
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {openLocalDatabase} from '../server/local-database.mjs';
const source=await readFile(new URL('../dist/server/index.js',import.meta.url),'utf8');
const manifest=JSON.parse(await readFile(new URL('../dist/.openai/hosting.json',import.meta.url),'utf8'));
assert.equal(manifest.project_id,'appgprj_6adb4bdacf788191a92754386b58e1e3');assert.equal(manifest.d1,'DB');assert.equal(manifest.static,undefined);
const worker=(await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'))).default;
assert.equal(typeof worker.fetch,'function');
const DB=openLocalDatabase(':memory:');
try{
 for(const asset of ['/','/app.js','/data.js','/storage.js','/styles.css','/business.css'])assert.equal((await worker.fetch(new Request('http://localhost'+asset),{DB})).status,200);
 const response=await worker.fetch(new Request('http://localhost/api/bootstrap'),{DB});assert.equal(response.status,200);const body=await response.json();assert.equal(body.catalog.companies[0].name,'Accenture');assert.equal(body.storage,'database');assert.equal(body.ai.enabled,false);
 assert.equal((await worker.fetch(new Request('http://localhost/.env'),{DB})).status,404);
 console.log('MESH: Worker ESM, asset, D1 adapter e API verificati');
}finally{DB.close()}
