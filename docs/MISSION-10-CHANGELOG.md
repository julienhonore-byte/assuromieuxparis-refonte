# Mission 10 — Changelog RC

Date : 22 juillet 2026

## Ajouts

- `.env.example` : valeur privée par défaut et règle d’activation production.
- `src/data/indexing.mjs` : liste unique des dix routes de première vague.
- `scripts/lint-project.mjs` : contrôle des marqueurs de développement.
- `scripts/prepare-release-output.mjs` : robots, header et sitemap selon le contexte.
- `scripts/check-release-output.mjs` : contrôle de 39 pages, métadonnées, H1, JSON-LD et indexation sélective.
- `docs/MISSION-10-RELEASE-CANDIDATE.md`.
- `docs/MISSION-10-CHECKLIST.md`.
- `docs/MISSION-10-CHANGELOG.md`.
- `docs/MISSION-10-VALIDATION.md`.

## Modifications

- `package.json`, `pnpm-lock.yaml` : scripts RC et dépendances de diagnostic uniquement.
- `netlify.toml` : `X-Robots-Tag` privé généré par contexte de build ; autres headers conservés.
- `README-DEVELOPPEMENT.md` : commandes, variable d’indexation et statut du formulaire documentés.
- `src/layouts/BaseLayout.astro` : calcul du `noindex` selon la variable et la route autorisée.
- `src/components/SEOHead.astro` : meta robots explicite et métadonnées d’image OpenGraph.
- `src/components/ContactForm.astro` : repli natif, erreurs par champ, limites et réassurance du premier échange.
- `src/components/PageHero.astro`, `src/components/NeedHero.astro` : premier écran compacté.
- `src/components/Footer.astro` : commentaire TODO supprimé, contenu visible inchangé.
- `src/content.config.ts` : import Zod actuel et API URL non dépréciée.
- `src/pages/ressources/index.astro` : narrowing TypeScript explicite.
- `src/styles/global.css` et 21 pages : règle `.faq-layout` centralisée, rendu inchangé.

## Suppressions

Composants sans aucune importation ni utilisation :

- `src/components/ExpertiseCard.astro` ;
- `src/components/MediaPlaceholder.astro` ;
- `src/components/MethodStep.astro` ;
- `src/components/TrustBadge.astro`.

## Dépendances de développement ajoutées

- `@astrojs/check` `0.9.9` ;
- TypeScript `6.0.3` ;
- `@types/node` `26.1.1`.

Aucune dépendance applicative ou JavaScript client n’est ajoutée.

## Non modifié

- `index.html` ;
- `source/index-production-reference.html` ;
- `public/robots.txt` ;
- routes et architecture ;
- endpoint Formspree ;
- URL Cal.com ;
- contenus métier structurants ;
- images et identité graphique.

## Non réalisé faute de données ou d’autorisation

- remplacement des 25 placeholders réglementaires ;
- envoi réel Formspree ;
- contrôle distant Netlify ;
- ajout d’un favicon non fourni ;
- activation de l’indexation ;
- déploiement, DNS, Search Console, Bing ou analytics.
