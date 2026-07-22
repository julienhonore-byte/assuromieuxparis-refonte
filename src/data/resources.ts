export const resourceCategories = {
  'assurance-entreprise': {
    name: 'Assurance entreprise',
    href: '/ressources/assurance-entreprise/',
    description: 'Auditer les contrats, organiser les besoins et vérifier les responsabilités de l’entreprise.',
  },
  'transport-logistique': {
    name: 'Transport & logistique',
    href: '/ressources/transport-logistique/',
    description: 'Distinguer véhicules, marchandises, responsabilités et continuité de l’exploitation.',
  },
  btp: {
    name: 'BTP',
    href: '/ressources/btp/',
    description: 'Rapprocher activités, attestations, chantiers et organisation de la sous-traitance.',
  },
  dirigeants: {
    name: 'Dirigeants',
    href: '/ressources/dirigeants/',
    description: 'Mettre en perspective le programme d’assurances, les équipes et la continuité de décision.',
  },
} as const;

export type ResourceCategory = keyof typeof resourceCategories;

export const productLinks: Record<string, { label: string; href: string }> = {
  audit: { label: 'Audit des assurances', href: '/audit-assurances-entreprise/' },
  assurances: { label: 'Assurances entreprises', href: '/assurances-entreprises/' },
  transport: { label: 'Assurance transport', href: '/assurance-transport/' },
  flotte: { label: 'Flotte automobile', href: '/flotte-automobile/' },
  rc: { label: 'RC professionnelle', href: '/rc-professionnelle/' },
  btp: { label: 'Assurance BTP et décennale', href: '/assurance-btp-decennale/' },
  multirisque: { label: 'Multirisque professionnelle', href: '/multirisque-professionnelle/' },
  sante: { label: 'Santé et prévoyance', href: '/sante-prevoyance-entreprise/' },
  dirigeant: { label: 'Protection du dirigeant', href: '/protection-dirigeant/' },
  cyber: { label: 'Cyberassurance', href: '/cyberassurance/' },
};

export const resourcePath = (slug: string) => `/ressources/guides/${slug}/`;

export const formatDate = (date: Date) => new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(date);
