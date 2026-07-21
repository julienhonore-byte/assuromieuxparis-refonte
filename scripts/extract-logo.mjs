import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const sourcePath = resolve('source/index-production-reference.html');
const outputPath = resolve('public/logo/assuromieux-paris.jpeg');
const expectedHash = 'c4edf17f2674eafa155a9b92da65a222d26e4376386369395a5ad3da81200d52';

const html = await readFile(sourcePath, 'utf8');
const match = html.match(/data:image\/jpeg;base64,([^\"]+)/);

if (!match) {
  throw new Error('Logo JPEG Base64 introuvable dans la référence de production.');
}

const image = Buffer.from(match[1], 'base64');
const hash = createHash('sha256').update(image).digest('hex');

if (hash !== expectedHash) {
  throw new Error(`Empreinte inattendue pour le logo extrait : ${hash}`);
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, image);

console.log(`Logo extrait : ${outputPath}`);
console.log(`SHA-256 : ${hash}`);
