# Développement de la refonte Assuromieux Paris

## Prérequis

- Node.js 24 recommandé, minimum 22.12.
- pnpm 11.9 recommandé, minimum 7.1.

Astro 7.1.3 est l'unique dépendance applicative directe du projet. `@astrojs/check`, TypeScript et les types Node sont installés uniquement pour les diagnostics de développement. Aucun analytics, gestionnaire de cookies ou framework CSS/JavaScript n'est installé.

La télémétrie de l'outil Astro est désactivée dans les commandes du projet et dans la configuration Netlify. pnpm autorise uniquement le script d'installation d'`esbuild`, dépendance transitive nécessaire à la compilation Astro.

## Installation

```sh
pnpm install --frozen-lockfile
```

## Commandes

```sh
pnpm dev          # socle principal sur http://localhost:4321
pnpm dev:demo     # démonstration interne du design system
pnpm lint         # marqueurs de développement interdits
pnpm check        # diagnostics Astro et TypeScript
pnpm build        # build Netlify dans dist/
pnpm preview      # prévisualisation du dernier build principal
pnpm check:links  # contrôle des liens et assets internes du build
pnpm check:release # contrôle SEO et indexation de la sortie
pnpm verify       # chaîne complète de contrôle RC
```

La démonstration se trouve dans `src/demo/pages/index.astro`. Elle utilise une configuration et une sortie séparées (`astro.demo.config.mjs`, `.demo-dist/`) : elle n'entre pas dans le build principal et ne doit pas être déployée.

## Fichiers protégés

Ne jamais modifier :

- `source/index-production-reference.html` ;
- `index.html` tant que la nouvelle page d'accueil Astro n'est pas validée.

L'empreinte de référence est consignée dans `docs/REFERENCE-PRODUCTION.md`.

## Indexation

`public/robots.txt` reste la source privée protégée. Sans autorisation complète, le build produit `robots.txt` bloquant, `noindex, nofollow` sur toutes les pages et un header `X-Robots-Tag` global, sans sitemap.

L’indexation exige simultanément `PUBLIC_SITE_INDEXABLE=true` et `CONTEXT=production`. Netlify fournit `CONTEXT` automatiquement. Cette double condition ouvre uniquement les dix routes de première vague définies dans `src/data/indexing.mjs`, maintient les autres routes en `noindex` et génère un sitemap filtré. Une Deploy Preview ou un branch deploy reste bloqué même si `PUBLIC_SITE_INDEXABLE` vaut accidentellement `true`.

## Structure

- `src/components/` : composants partagés.
- `src/layouts/` : layouts de pages.
- `src/pages/` : routes incluses dans le build principal.
- `src/styles/` : tokens et styles globaux.
- `src/content/` : futurs contenus structurés.
- `src/demo/` : démonstration interne exclue du build principal.
- `public/images/` et `public/logo/` : ressources publiques.

## Formulaire

Formspree est conservé provisoirement avec l'endpoint existant. Le composant fournit validation native sans JavaScript, erreurs reliées aux champs, statut global, honeypot et états asynchrones. La propriété du compte, les paramètres RGPD et un envoi réel autorisé restent obligatoires avant ouverture publique.

## Netlify

Netlify exécute `pnpm build` et publie uniquement `dist/`. Les deploy previews doivent rester non indexables. `PUBLIC_SITE_INDEXABLE=true` ne doit être défini que pour le contexte Production après validation de la checklist ; aucun déploiement n'est automatisé par les scripts locaux.
