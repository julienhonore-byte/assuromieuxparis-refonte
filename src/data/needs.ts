export interface NeedNavigationItem {
  href: string;
  title: string;
  text: string;
  prefill: string;
}

export const needNavigation: NeedNavigationItem[] = [
  { href: '/votre-besoin/auditer-mes-assurances/', title: 'Auditer mes assurances', text: 'Faire le point sur les contrats, déclarations, limites et priorités.', prefill: 'audit-contrats' },
  { href: '/votre-besoin/comparer-mes-assurances/', title: 'Comparer mes assurances', text: 'Comparer les protections, conditions et services avant la prime seule.', prefill: 'comparaison-assurances' },
  { href: '/votre-besoin/creer-reprendre-entreprise/', title: 'Créer ou reprendre une entreprise', text: 'Identifier les obligations éventuelles et les protections à arbitrer.', prefill: 'creation-reprise' },
  { href: '/votre-besoin/entreprise-evolue/', title: 'Mon entreprise évolue', text: 'Faire suivre les contrats après un changement d’activité ou d’organisation.', prefill: 'evolution-entreprise' },
  { href: '/votre-besoin/assurer-flotte-vehicules/', title: 'Assurer une flotte de véhicules', text: 'Structurer le parc, les usages, les conducteurs et la sinistralité.', prefill: 'flotte' },
  { href: '/votre-besoin/assurer-activite-transport/', title: 'Assurer une activité de transport', text: 'Choisir le bon parcours selon les flux, véhicules et responsabilités.', prefill: 'activite-transport' },
];
