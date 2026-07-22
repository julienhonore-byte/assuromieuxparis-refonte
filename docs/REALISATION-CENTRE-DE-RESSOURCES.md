# Réalisation du centre de ressources

Date : 21 juillet 2026
Mission : centre de ressources et architecture éditoriale.

## Réalisé

- collection Astro typée `resources` avec exclusion des brouillons et archives ;
- six guides datés du jour, attribués au cabinet et marqués `review-required` ;
- hub principal, inventaire des guides, quatre parcours et lexique de 17 termes ;
- composants de lecture, sommaire sans JavaScript, métadonnées, statut de relecture, FAQ visible et maillage ;
- données structurées `CollectionPage`, `Article`, `BreadcrumbList`, `FAQPage` conditionnel et `DefinedTermSet` ;
- lien Ressources du menu redirigé vers le hub, footer complété et trois cartes de l’accueil reliées ;
- blocs de ressources ajoutés uniquement aux pages Assurances entreprises, Transport et BTP.

## Sources de cadrage utilisées

- Ministère de l’Économie, assurances obligatoires des professionnels, version du 7 juillet 2026 ;
- Service Public, obligation d’assurance automobile, vérifié le 10 avril 2026 ;
- Ministère chargé des Transports, accès et exercice du transport de marchandises ;
- Légifrance, Code des transports et contrat type général ;
- Service Public, garantie décennale des constructeurs, vérifié le 10 avril 2026.

Les textes ne sont pas reproduits. Ils soutiennent des faits limités et ne valident ni un contrat ni la situation d’une entreprise.

## Éléments restant à valider

- formulations métier RC, Flotte et Transport ;
- articulation responsabilité transporteur / assurance marchandises ;
- qualifications et formulations juridiques du guide décennale ;
- attribution finale de la relecture ;
- passage éventuel de `review-required` à `published` ;
- opportunité et contenu des prochaines publications.

## Protections respectées

Aucune page sectorielle TRM, Convoyage ou Déménagement n’est créée. Formspree, Cal.com, `robots.txt`, le `noindex`, les fichiers de référence et la configuration de déploiement ne sont pas modifiés. Aucun déploiement n’est effectué.

## Procédure de contrôle

1. `pnpm build` ;
2. `pnpm check:links` ;
3. contrôle du nombre de routes et de l’absence de brouillon ;
4. inspection des H1, titles, descriptions, canonicals et JSON-LD ;
5. recette navigateur de 320 à 1 440 px ;
6. vérification SHA-256 des fichiers protégés ;
7. revue du diff et commit distinct.

## Résultats de recette

- `pnpm verify` : réussi ; 26 pages statiques générées et aucun lien interne ou ancre cassé ;
- périmètre éditorial : 13 routes contrôlées, dont exactement 6 guides ;
- métadonnées : un H1, un title, une description, un canonical, `noindex` et `BreadcrumbList` présents sur chaque route éditoriale ;
- données guides : schéma `Article` présent sur les six guides ; FAQ structurée accompagnée de la FAQ visible ;
- brouillons : aucune entrée `draft: true` ou `archived` générée ;
- responsive réel : contrôles à 320, 375, 768, 1 024, 1 280 et 1 440 px, sans débordement horizontal ;
- navigation mobile : ouverture, état `aria-expanded`, fermeture par `Escape` et retour du focus validés ;
- sommaire mobile : position statique et ancres disponibles ;
- console : aucune erreur ni alerte observée sur les pages contrôlées ;
- références : les deux fichiers protégés conservent l’empreinte `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` ;
- serveur principal : prévisualisation active sur `http://127.0.0.1:4321/`.
