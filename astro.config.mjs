import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.assuromieuxparis.com',
  output: 'static',
  outDir: './dist',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  trailingSlash: 'always',
});
