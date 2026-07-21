export interface NavigationItem {
  href: string;
  label: string;
}

export const site = {
  name: 'Assuromieux Paris',
  legalName: 'ASSUROMIEUX PARIS',
  canonicalUrl: 'https://www.assuromieuxparis.com/',
  phoneDisplay: '06 95 69 96 74',
  phoneHref: 'tel:+33695699674',
  email: 'jules@assuromieuxparis.com',
  addressStreet: '60 Rue Francois 1er',
  addressLocality: '75008 Paris',
  addressCountry: 'France',
  orias: '26003798',
  rcs: '489181032',
  formspreeUrl: 'https://formspree.io/f/mnjlwzlp',
  calUrl: 'https://cal.com/juleshonore/rdv-assuromieux',
} as const;

export const mainNavigation: NavigationItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/assurances-entreprises/', label: 'Nos assurances' },
  { href: '/audit-assurances-entreprise/', label: 'Audit' },
  { href: '/#secteurs', label: 'Secteurs' },
  { href: '/cabinet/', label: 'Cabinet' },
  { href: '/#ressources', label: 'Ressources' },
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
  { href: '/audit-assurances-entreprise/', label: 'Audit des assurances' },
  { href: '/assurances-entreprises/', label: 'Assurances entreprises' },
  { href: '/assurance-transport/', label: 'Transport et logistique' },
  { href: '/assurance-btp-decennale/', label: 'BTP et décennale' },
  { href: '/cabinet/', label: 'Le cabinet' },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.canonicalUrl}#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.canonicalUrl,
  logo: `${site.canonicalUrl}logo/assuromieux-paris.jpeg`,
  email: site.email,
  telephone: '+33695699674',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressStreet,
    postalCode: '75008',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
};
