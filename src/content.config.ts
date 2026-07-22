import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faqItem = z.object({
  question: z.string().min(8),
  answer: z.string().min(24),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string().min(20),
    description: z.string().min(80).max(190),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    author: z.enum(['Assuromieux Paris', 'Cabinet Assuromieux Paris']),
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
    reviewedBy: z.string().optional(),
    reviewDate: z.coerce.date().optional(),
    faq: z.array(faqItem).max(6).default([]),
    draft: z.boolean().default(false),
  }).superRefine((data, context) => {
    if (data.image && !data.imageAlt) {
      context.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Une image éditoriale exige un texte alternatif.' });
    }
  }),
});

export const collections = { resources };
