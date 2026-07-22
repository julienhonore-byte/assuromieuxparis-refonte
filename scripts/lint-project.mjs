import { readFile, readdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const roots = ['src', 'scripts'];
const extensions = new Set(['.astro', '.css', '.js', '.mjs', '.ts']);
const forbidden = [
  { pattern: /\bTODO\b/, label: 'TODO' },
  { pattern: /\bFIXME\b/, label: 'FIXME' },
  { pattern: /\bHACK\b/, label: 'HACK' },
  { pattern: /\bdebugger\b/, label: 'debugger' },
  { pattern: /console\.log\(/, label: 'console.log' },
];
const allowedConsoleFiles = new Set([
  resolve('scripts/check-links.mjs'),
  resolve('scripts/check-release-output.mjs'),
  resolve('scripts/extract-logo.mjs'),
  resolve('scripts/prepare-release-output.mjs'),
  resolve('scripts/lint-project.mjs'),
]);
const lintFile = resolve('scripts/lint-project.mjs');
const failures = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.isFile() && extensions.has(extname(path))) {
      const absolutePath = resolve(path);
      if (absolutePath === lintFile) continue;
      const lines = (await readFile(path, 'utf8')).split('\n');
      lines.forEach((line, index) => {
        for (const rule of forbidden) {
          if (rule.label === 'console.log' && allowedConsoleFiles.has(absolutePath)) continue;
          if (rule.pattern.test(line)) failures.push(`${path}:${index + 1} contient ${rule.label}`);
        }
      });
    }
  }
}

for (const root of roots) await walk(root);

if (failures.length) {
  console.error('Marqueurs de développement interdits :');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('Lint RC validé : aucun marqueur de développement interdit.');
}
