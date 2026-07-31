export const firstWaveIndexablePaths = Object.freeze([
  '/',
  '/audit-assurances-entreprise/',
  '/assurances-entreprises/',
  '/assurance-transport/',
  '/assurance-btp-decennale/',
  '/rc-professionnelle/',
  '/flotte-automobile/',
  '/multirisque-professionnelle/',
  '/protection-dirigeant/',
  '/sante-prevoyance-entreprise/',
  '/cyberassurance/',
  '/cabinet/',
  '/secteurs/',
  '/secteurs/transport-routier-marchandises/',
  '/secteurs/convoyage-vehicules/',
  '/secteurs/demenagement/',
  '/ressources/guides/flotte-automobile-points-analyser-avant-comparer/',
  '/ressources/guides/comment-auditer-assurances-entreprise/',
  '/ressources/guides/rc-professionnelle-rc-exploitation-differences/',
]);

export const isPublicIndexingEnabled = (value, context) => value === 'true' && context === 'production';
