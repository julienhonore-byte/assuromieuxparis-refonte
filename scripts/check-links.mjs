import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const outputRoot = resolve('dist');
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    if (entry.isFile() && extname(entry.name) === '.html') htmlFiles.push(path);
  }
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function targetPath(url) {
  const pathname = url.split('#')[0].split('?')[0];
  const relative = decodeURIComponent(pathname.replace(/^\//, ''));
  if (!relative) return join(outputRoot, 'index.html');
  if (extname(relative)) return join(outputRoot, relative);
  return join(outputRoot, relative, 'index.html');
}

await walk(outputRoot);

const failures = [];
const checked = new Set();
const attributePattern = /(?:href|src)=["']([^"']+)["']/g;

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  for (const match of html.matchAll(attributePattern)) {
    const url = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    const key = `${htmlFile}:${url}`;
    if (checked.has(key)) continue;
    checked.add(key);
    const destination = targetPath(url);
    if (!(await exists(destination))) failures.push(`${htmlFile} → ${url}`);
  }
}

if (failures.length) {
  console.error('Liens ou assets internes introuvables :');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`${htmlFiles.length} page(s) HTML contrôlée(s), aucun lien interne cassé.`);
}
