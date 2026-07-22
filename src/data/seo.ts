import { organizationSchema, personSchema, site } from './site';

interface Crumb {
  name: string;
  path: string;
}

export const pageUrl = (path: string) => new URL(path, site.canonicalUrl).toString();

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: pageUrl(crumb.path),
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: pageUrl(path),
  provider: { '@id': `${site.canonicalUrl}#organization` },
  areaServed: { '@type': 'Country', name: 'France' },
});

export const webPageSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: pageUrl(path),
  publisher: { '@id': `${site.canonicalUrl}#organization` },
});

export const faqSchema = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const baseSchemas = [organizationSchema, personSchema];
