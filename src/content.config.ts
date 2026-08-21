import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { firstWaveIndexablePaths } from './data/indexing.mjs';

const canonicalOrigin = 'https://www.assuromieuxparis.com';

const faqItem = z.object({
  question: z.string().min(8),
  answer: z.string().min(24),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string().min(20),
    seoTitle: z.string().min(20).max(65).optional(),
    description: z.string().min(80).max(190),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    author: z.enum(['Assuromieux Paris', 'Cabinet Assuromieux Paris']),
    articleAuthorType: z.enum(['Organization', 'Person']).default('Organization'),
    category: z.enum(['assurance-entreprise', 'transport-logistique', 'btp', 'dirigeants']),
    tags: z.array(z.string()).min(1),
    keywords: z.array(z.string()).min(1),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonical: z.url(),
    status: z.enum(['published', 'review-required', 'archived']),
    featured: z.boolean().default(false),
    readingTime: z.number().int().positive(),
    relatedProducts: z.array(z.string()).min(1),
    relatedSectors: z.array(z.enum([
      'transport-logistique',
      'transport-routier-marchandises',
      'convoyage-vehicules',
      'demenagement',
      'btp',
    ])).default([]),
    relatedArticles: z.array(z.string()).max(3).default([]),
    primaryCtaHref: z.string().optional(),
    primaryCtaLabel: z.string().optional(),
    secondaryCtaHref: z.string().optional(),
    secondaryCtaLabel: z.string().optional(),
    reviewedBy: z.string().min(2).optional(),
    reviewDate: z.coerce.date().optional(),
    faq: z.array(faqItem).max(6).default([]),
    draft: z.boolean().default(false),
  }).superRefine((data, context) => {
    const resourcePath = `/ressources/guides/${data.slug}/`;
    const expectedCanonical = new URL(resourcePath, `${canonicalOrigin}/`).toString();

    if (data.image && !data.imageAlt) {
      context.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Une image éditoriale exige un texte alternatif.' });
    }

    if (data.updatedDate < data.publishDate) {
      context.addIssue({ code: 'custom', path: ['updatedDate'], message: 'La date de mise à jour ne peut pas précéder la date de publication.' });
    }

    if (data.status === 'published' && !data.reviewedBy) {
      context.addIssue({ code: 'custom', path: ['reviewedBy'], message: 'Une ressource publiée exige un relecteur documenté.' });
    }

    if (data.status === 'published' && !data.reviewDate) {
      context.addIssue({ code: 'custom', path: ['reviewDate'], message: 'Une ressource publiée exige une date de relecture documentée.' });
    }

    if ((data.reviewedBy && !data.reviewDate) || (!data.reviewedBy && data.reviewDate)) {
      context.addIssue({ code: 'custom', path: ['reviewDate'], message: 'Le relecteur et la date de relecture doivent être renseignés ensemble.' });
    }

    if (data.reviewDate && data.reviewDate < data.publishDate) {
      context.addIssue({ code: 'custom', path: ['reviewDate'], message: 'La date de relecture ne peut pas précéder la date de publication.' });
    }

    if (data.canonical !== expectedCanonical) {
      context.addIssue({ code: 'custom', path: ['canonical'], message: `Le canonical attendu pour ce slug est ${expectedCanonical}.` });
    }

    if (firstWaveIndexablePaths.includes(resourcePath) && data.status !== 'published') {
      context.addIssue({ code: 'custom', path: ['status'], message: 'Une ressource indexable doit avoir le statut published.' });
    }
  }),
});

export const collections = { resources };
