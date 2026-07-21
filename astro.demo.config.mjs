import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  srcDir: './src/demo',
  publicDir: './public',
  outDir: './.demo-dist',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  trailingSlash: 'always',
});
