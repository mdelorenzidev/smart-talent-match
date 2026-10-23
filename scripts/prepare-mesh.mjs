import { cpSync, mkdirSync } from 'node:fs';
import path from 'node:path';
const root=process.cwd();
mkdirSync(path.join(root,'dist'),{recursive:true});
cpSync(path.join(root,'mesh'),path.join(root,'dist'),{recursive:true});
console.log('MESH: static assets prepared in dist/');
