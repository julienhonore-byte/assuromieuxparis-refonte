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
  { href: '#top', label: 'Accueil' },
  { href: '#assurances-entreprises', label: 'Assurances entreprises' },
  { href: '#transport-logistique', label: 'Transport' },
  { href: '#expertise-btp', label: 'BTP' },
  { href: '#methode', label: 'Audit' },
  { href: '#ressources', label: 'Ressources' },
  { href: '#contact', label: 'Contact' },
];

export const footerExpertiseLinks: NavigationItem[] = [
  { href: '#expertises', label: 'Assurance transport' },
  { href: '#expertises', label: 'Flotte automobile' },
  { href: '#expertises', label: 'RC professionnelle' },
  { href: '#expertise-btp', label: 'Assurance décennale' },
];

export const footerSectorLinks: NavigationItem[] = [
  { href: '#transport-logistique', label: 'Transport et logistique' },
  { href: '#assurances-entreprises', label: 'PME et entreprises' },
  { href: '#expertise-btp', label: 'BTP et artisans' },
  { href: '#paris', label: 'Paris et intervention nationale' },
];
