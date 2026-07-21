# Développement de la refonte Assuromieux Paris

## Prérequis

- Node.js 24 recommandé, minimum 22.12.
- pnpm 11.9 recommandé, minimum 7.1.

Astro 7.1.3 est l'unique dépendance directe du projet. Aucun analytics, gestionnaire de cookies ou framework CSS/JavaScript n'est installé.

La télémétrie de l'outil Astro est désactivée dans les commandes du projet et dans la configuration Netlify. pnpm autorise uniquement le script d'installation d'`esbuild`, dépendance transitive nécessaire à la compilation Astro.

## Installation

```sh
pnpm install --frozen-lockfile
```

## Commandes

```sh
pnpm dev          # socle principal sur http://localhost:4321
pnpm dev:demo     # démonstration interne du design system
pnpm build        # build Netlify dans dist/
pnpm preview      # prévisualisation du dernier build principal
pnpm check:links  # contrôle des liens et assets internes du build
pnpm verify       # build puis contrôle des liens
```

La démonstration se trouve dans `src/demo/pages/index.astro`. Elle utilise une configuration et une sortie séparées (`astro.demo.config.mjs`, `.demo-dist/`) : elle n'entre pas dans le build principal et ne doit pas être déployée.

## Fichiers protégés

Ne jamais modifier :

- `source/index-production-reference.html` ;
- `index.html` tant que la nouvelle page d'accueil Astro n'est pas validée.

L'empreinte de référence est consignée dans `docs/REFERENCE-PRODUCTION.md`.

## Indexation

`public/robots.txt` bloque temporairement toute indexation. Ce verrou ne pourra être levé qu'au moment d'une mise en production validée. Aucune redirection vers la production n'est configurée.

## Structure

- `src/components/` : composants partagés.
- `src/layouts/` : layouts de pages.
- `src/pages/` : routes incluses dans le build principal.
- `src/styles/` : tokens et styles globaux.
- `src/content/` : futurs contenus structurés.
- `src/demo/` : démonstration interne exclue du build principal.
- `public/images/` et `public/logo/` : ressources publiques.

## Formulaire

Formspree est conservé provisoirement avec l'endpoint existant. Le composant actuel est un socle accessible minimal ; la validation métier, RGPD, anti-spam et les états JavaScript seront traités avant toute ouverture publique.

## Netlify

Netlify exécute `pnpm build` et publie uniquement `dist/`. Les deploy previews doivent rester non indexables. Aucun déploiement n'est effectué par cette phase technique.
