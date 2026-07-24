export interface NavigationItem {
  href: string;
  label: string;
}

const canonicalOrigin = 'https://www.assuromieuxparis.com';
const absoluteSiteUrl = (path: string) => new URL(path, `${canonicalOrigin}/`).toString();

export const site = {
  name: 'Assuromieux Paris',
  legalName: 'Jules HONORE',
  personName: 'Jules HONORE',
  canonicalOrigin,
  canonicalUrl: absoluteSiteUrl('/'),
  logoUrl: absoluteSiteUrl('/favicon-512x512.png'),
  ogImageUrl: absoluteSiteUrl('/og-assuromieux-paris.png'),
  phoneDisplay: '06 95 69 96 74',
  phoneHref: 'tel:+33695699674',
  email: 'jules@assuromieuxparis.com',
  addressStreet: '60 Rue Francois 1er',
  addressLocality: '75008 Paris',
  addressCountry: 'France',
  orias: '26003798',
  oriasCategory: 'COA',
  siren: '489181032',
  siret: '48918103200033',
  rcs: '489181032',
  formspreeUrl: 'https://formspree.io/f/mnjlwzlp',
  calUrl: 'https://cal.com/juleshonore/rdv-assuromieux',
} as const;

export const mainNavigation: NavigationItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/assurances-entreprises/', label: 'Nos assurances' },
  { href: '/audit-assurances-entreprise/', label: 'Audit' },
  { href: '/secteurs/', label: 'Secteurs' },
  { href: '/cabinet/', label: 'Cabinet' },
  { href: '/ressources/', label: 'Ressources' },
  { href: '/#contact', label: 'Contact' },
];

export const footerProductLinks: NavigationItem[] = [
  { href: '/rc-professionnelle/', label: 'RC professionnelle' },
  { href: '/multirisque-professionnelle/', label: 'Multirisque professionnelle' },
  { href: '/flotte-automobile/', label: 'Flotte automobile' },
  { href: '/sante-prevoyance-entreprise/', label: 'Santé et prévoyance' },
  { href: '/protection-dirigeant/', label: 'Protection du dirigeant' },
  { href: '/cyberassurance/', label: 'Cyberassurance' },
];

export const footerAdviceLinks: NavigationItem[] = [
  { href: '/votre-besoin/', label: 'Votre besoin' },
  { href: '/audit-assurances-entreprise/', label: 'Audit des assurances' },
  { href: '/assurances-entreprises/', label: 'Assurances entreprises' },
  { href: '/secteurs/', label: 'Secteurs' },
  { href: '/assurance-transport/', label: 'Transport et logistique' },
  { href: '/assurance-btp-decennale/', label: 'BTP et décennale' },
  { href: '/cabinet/', label: 'Le cabinet' },
  { href: '/ressources/', label: 'Centre de ressources' },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.canonicalUrl}#organization`,
  name: site.name,
  legalName: site.legalName,
  description: `Cabinet de conseil et de courtage en assurances d’entreprise, inscrit à l’ORIAS en catégorie ${site.oriasCategory}.`,
  url: site.canonicalUrl,
  logo: site.logoUrl,
  image: site.ogImageUrl,
  brand: {
    '@type': 'Brand',
    name: 'Assuromieux Paris',
    logo: site.logoUrl,
  },
  email: site.email,
  telephone: '+33695699674',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: site.siren },
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: site.siret },
    { '@type': 'PropertyValue', propertyID: 'RCS', value: `Paris ${site.rcs}` },
    { '@type': 'PropertyValue', propertyID: 'ORIAS', value: site.orias },
  ],
  founder: { '@id': `${site.canonicalUrl}#jules-honore` },
  sameAs: [`https://orias.fr/home/showIntermediaire/${site.siren}`],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressStreet,
    postalCode: '75008',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.canonicalUrl}#jules-honore`,
  name: site.personName,
  jobTitle: 'Courtier en assurance',
  email: site.email,
  telephone: '+33695699674',
  address: organizationSchema.address,
  worksFor: { '@id': `${site.canonicalUrl}#organization` },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.canonicalUrl}#website`,
  url: site.canonicalUrl,
  name: site.name,
  inLanguage: 'fr-FR',
  publisher: { '@id': `${site.canonicalUrl}#organization` },
};
