export type ProductCategory = 'transversal' | 'sector' | 'audit';
export type ProductStatus = 'available' | 'coming-soon';

export interface InsuranceProduct {
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  href: string;
  cta: string;
  status: ProductStatus;
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    name: 'RC professionnelle',
    slug: 'rc-professionnelle',
    description: 'Protéger les responsabilités liées à votre activité.',
    category: 'transversal',
    href: '/rc-professionnelle/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Multirisque professionnelle',
    slug: 'multirisque',
    description: 'Couvrir vos locaux, matériels et votre continuité.',
    category: 'transversal',
    href: '/multirisque-professionnelle/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Flotte automobile',
    slug: 'flotte',
    description: 'Adapter les garanties à votre parc et à ses usages.',
    category: 'transversal',
    href: '/flotte-automobile/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Décennale et BTP',
    slug: 'assurance-btp-decennale',
    description: 'Relier activités, attestations et risques de chantier.',
    category: 'sector',
    href: '/assurance-btp-decennale/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Transport et marchandises',
    slug: 'assurance-transport',
    description: 'Analyser les flux, responsabilités et véhicules.',
    category: 'sector',
    href: '/assurance-transport/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Santé et prévoyance',
    slug: 'sante-prevoyance',
    description: 'Structurer la protection collective de vos équipes.',
    category: 'transversal',
    href: '/sante-prevoyance-entreprise/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Protection du dirigeant',
    slug: 'protection-dirigeant',
    description: 'Préserver le décideur et la continuité de l’entreprise.',
    category: 'transversal',
    href: '/protection-dirigeant/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Cyberassurance',
    slug: 'cyber',
    description: 'Préparer la réponse aux incidents numériques.',
    category: 'transversal',
    href: '/cyberassurance/',
    cta: 'Voir cette assurance',
    status: 'available',
  },
  {
    name: 'Audit des contrats',
    slug: 'audit-assurances-entreprise',
    description: 'Obtenir une lecture claire de votre programme actuel.',
    category: 'audit',
    href: '/audit-assurances-entreprise/',
    cta: 'Découvrir l’audit',
    status: 'available',
  },
];

export const transversalProducts = insuranceProducts.filter((product) => product.category === 'transversal');
export const sectorProducts = insuranceProducts.filter((product) => product.category === 'sector');
