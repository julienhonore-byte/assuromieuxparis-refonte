import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

type VisualKind = 'hero' | 'method' | 'audit' | 'texture';

const profiles: Record<VisualKind, { widths: number[]; masterWidth: number; sizes: string }> = {
  hero: { widths: [960, 1280, 1600, 2000], masterWidth: 3200, sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 44vw, 576px' },
  method: { widths: [640, 960, 1280, 1600], masterWidth: 2400, sizes: '(max-width: 768px) 100vw, 1180px' },
  audit: { widths: [640, 960, 1280, 1600], masterWidth: 2400, sizes: '(max-width: 768px) 100vw, 1180px' },
  texture: { widths: [768, 1280, 1600], masterWidth: 2520, sizes: '(max-width: 768px) 100vw, 1180px' },
};

const assetExists = (publicPath: string) => existsSync(
  resolve(process.cwd(), 'public', publicPath.replace(/^\//, '')),
);

export const prepareVisual = (directory: string, baseName: string, kind: VisualKind) => {
  const root = `/images/${directory}`;
  const { widths, masterWidth, sizes } = profiles[kind];
  const variants = (format: 'avif' | 'webp') => [
    ...widths.map((width) => `${root}/${baseName}-${width}.${format}`),
    `${root}/${baseName}.${format}`,
  ];
  const avifFiles = variants('avif');
  const webpFiles = variants('webp');
  const ready = [...avifFiles, ...webpFiles].every(assetExists);
  const srcset = (files: string[]) => files
    .map((file, index) => `${file} ${index < widths.length ? widths[index] : masterWidth}w`)
    .join(', ');

  return {
    image: ready ? `${root}/${baseName}.webp` : undefined,
    responsive: ready ? {
      avifSrcset: srcset(avifFiles),
      webpSrcset: srcset(webpFiles),
      sizes,
    } : undefined,
  };
};
