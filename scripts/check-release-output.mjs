import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import { firstWaveIndexablePaths, isPublicIndexingEnabled } from '../src/data/indexing.mjs';

const outputRoot = resolve('dist');
const siteUrl = 'https://www.assuromieuxparis.com';
const canonicalHostname = new URL(siteUrl).hostname;
const publicIndexing = isPublicIndexingEnabled(process.env.PUBLIC_SITE_INDEXABLE, process.env.CONTEXT);

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const htmlPath = (path) => path === '/' ? join(outputRoot, 'index.html') : join(outputRoot, path, 'index.html');
const robots = await readFile(join(outputRoot, 'robots.txt'), 'utf8');
const failures = [];
const htmlFiles = [];
const approvedPaths = new Set(firstWaveIndexablePaths);
const titles = new Map();
const descriptions = new Map();

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.isFile() && extname(path) === '.html') htmlFiles.push(path);
  }
}

const routeFromFile = (file) => {
  const outputPath = relative(outputRoot, file).split(sep).join('/');
  if (outputPath === 'index.html') return '/';
  if (outputPath.endsWith('/index.html')) return `/${outputPath.slice(0, -'index.html'.length)}`;
  return `/${outputPath}`;
};

const registerUniqueValue = (registry, value, path, label) => {
  if (!value) return;
  const existingPath = registry.get(value);
  if (existingPath) failures.push(`${path} partage ${label} avec ${existingPath}.`);
  else registry.set(value, path);
};

await walk(outputRoot);

for (const file of htmlFiles) {
  const path = routeFromFile(file);
  const html = await readFile(file, 'utf8');
  const expected = publicIndexing && approvedPaths.has(path) ? 'index, follow' : 'noindex, nofollow';
  if (!html.includes(`<meta name="robots" content="${expected}">`)) failures.push(`${path} n'a pas la directive robots attendue : ${expected}`);
  if ((html.match(/<title>/g) ?? []).length !== 1) failures.push(`${path} doit contenir un seul title.`);
  if ((html.match(/<meta name="description"/g) ?? []).length !== 1) failures.push(`${path} doit contenir une seule meta description.`);
  if ((html.match(/<link rel="canonical"/g) ?? []).length !== 1) failures.push(`${path} doit contenir un seul canonical.`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) failures.push(`${path} doit contenir un seul H1.`);

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]*)">/)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1]?.trim();
  registerUniqueValue(titles, title, path, 'son title');
  registerUniqueValue(descriptions, description, path, 'sa meta description');

  if (canonical) {
    try {
      const canonicalUrl = new URL(canonical);
      if (canonicalUrl.protocol !== 'https:' || canonicalUrl.hostname !== canonicalHostname) {
        failures.push(`${path} utilise un hostname canonical incohérent : ${canonicalUrl.origin}.`);
      }
    } catch {
      failures.push(`${path} contient un canonical invalide : ${canonical}.`);
    }
  }

  for (const match of html.matchAll(/https?:\/\/(?:www\.)?assuromieuxparis\.com(?=[/"'<\s]|$)/g)) {
    if (match[0] !== siteUrl) {
      failures.push(`${path} contient une URL Assuromieux avec un hostname non canonique.`);
      break;
    }
  }

  if (html.includes('property="og:image"')) {
    for (const property of ['og:image:width', 'og:image:height', 'og:image:alt']) {
      if (!html.includes(`property="${property}"`)) failures.push(`${path} ne contient pas ${property}.`);
    }
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      failures.push(`${path} contient un JSON-LD invalide.`);
    }
  }
}

for (const path of firstWaveIndexablePaths) {
  if (!(await exists(htmlPath(path)))) failures.push(`${path} est absente du build.`);
}

if (publicIndexing) {
  const sitemapPath = join(outputRoot, 'sitemap.xml');
  if (!(await exists(sitemapPath))) failures.push('sitemap.xml est absent en mode production.');
  else {
    const sitemap = await readFile(sitemapPath, 'utf8');
    const locations = sitemap.match(/<loc>/g) ?? [];
    if (locations.length !== firstWaveIndexablePaths.length) failures.push(`sitemap.xml contient ${locations.length} URL au lieu de ${firstWaveIndexablePaths.length}.`);
    for (const path of firstWaveIndexablePaths) {
      if (!sitemap.includes(`<loc>${siteUrl}${path}</loc>`)) failures.push(`${path} manque dans sitemap.xml.`);
    }
  }
  if (!robots.includes('Allow: /') || !robots.includes('Sitemap:')) failures.push('robots.txt de production est incohérent.');
  if (await exists(join(outputRoot, '_headers'))) failures.push('_headers privé est présent en mode production.');
} else {
  if (!robots.includes('Disallow: /')) failures.push('robots.txt ne bloque pas la prévisualisation.');
  if (await exists(join(outputRoot, 'sitemap.xml'))) failures.push('Un sitemap est exposé en mode privé.');
  const headersPath = join(outputRoot, '_headers');
  if (!(await exists(headersPath))) failures.push('_headers privé est absent.');
  else if (!(await readFile(headersPath, 'utf8')).includes('X-Robots-Tag: noindex')) failures.push('X-Robots-Tag privé est absent.');
}

if (failures.length) {
  console.error('Sortie de release invalide :');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Sortie ${publicIndexing ? 'production sélective' : 'privée'} validée.`);
}
