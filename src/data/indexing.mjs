export const firstWaveIndexablePaths = Object.freeze([
  '/',
  '/audit-assurances-entreprise/',
  '/assurances-entreprises/',
  '/assurance-transport/',
  '/assurance-btp-decennale/',
  '/cabinet/',
  '/secteurs/',
  '/secteurs/transport-routier-marchandises/',
  '/secteurs/convoyage-vehicules/',
  '/secteurs/demenagement/',
]);

export const isPublicIndexingEnabled = (value, context) => value === 'true' && context === 'production';
