import { rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { firstWaveIndexablePaths, isPublicIndexingEnabled } from '../src/data/indexing.mjs';

const outputRoot = resolve('dist');
const siteUrl = 'https://www.assuromieuxparis.com';
const publicIndexing = isPublicIndexingEnabled(process.env.PUBLIC_SITE_INDEXABLE, process.env.CONTEXT);

const robotsPrivate = `User-agent: *\nDisallow: /\n\n# Prévisualisation privée : indexation bloquée.\n`;
const robotsPublic = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
const privateHeaders = `/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n`;

const sitemapEntries = firstWaveIndexablePaths
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

await writeFile(resolve(outputRoot, 'robots.txt'), publicIndexing ? robotsPublic : robotsPrivate, 'utf8');

if (publicIndexing) {
  await writeFile(resolve(outputRoot, 'sitemap.xml'), sitemap, 'utf8');
  await rm(resolve(outputRoot, '_headers'), { force: true });
  console.log(`Sortie de production préparée : ${firstWaveIndexablePaths.length} route(s) indexable(s).`);
} else {
  await rm(resolve(outputRoot, 'sitemap.xml'), { force: true });
  await writeFile(resolve(outputRoot, '_headers'), privateHeaders, 'utf8');
  console.log('Sortie privée préparée : robots, meta et X-Robots-Tag bloquent l’indexation.');
}
