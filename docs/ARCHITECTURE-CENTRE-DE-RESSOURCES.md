# Architecture du centre de ressources

Date : 21 juillet 2026
Statut : architecture implémentée dans la prévisualisation, indexation interdite.

## Objectif

Le centre de ressources transforme l’expertise du cabinet en réponses durables, sans devenir un blog générique. Il aide le dirigeant à comprendre une question, à préparer ses documents et à rejoindre la page produit ou l’audit pertinent.

## Routes

```text
/ressources/                         hub principal
├── /guides/                         inventaire éditorial des guides
│   └── /[slug]/                     six guides générés par la collection Astro
├── /assurance-entreprise/           audit, PME, RC et flotte
├── /transport-logistique/           marchandises, responsabilités et flotte
├── /btp/                            activités, attestations et décennale
└── /dirigeants/                     parcours de décision du dirigeant
/lexique/                            17 définitions contractuellement prudentes
```

Les routes sectorielles TRM, convoyage et déménagement ne sont pas créées. Les hubs Transport et BTP existants conservent leur rôle commercial.

## Collection Astro

La collection `resources` est définie dans `src/content.config.ts` et chargée depuis `src/content/resources/`. Le schéma contrôle : titre, description, slug, dates, auteur, catégorie, tags, mots-clés, image et alternative éventuelles, canonical, statut, mise en avant, temps de lecture, relations produits/secteurs/articles, relecture, FAQ et brouillon.

Les statuts autorisés sont `published`, `review-required` et `archived`. Une entrée `draft: true` ou `status: archived` est exclue de `getStaticPaths()` et des hubs. Les six contenus actuels portent `review-required` : ils sont visibles en prévisualisation mais ne sont pas considérés comme validés pour l’indexation.

## Composants

- `ResourceHub` : structure éditoriale des hubs de catégorie ;
- `ResourceCard` : résumé d’un guide avec catégorie et temps de lecture ;
- `ResourceHeader` et `ResourceMeta` : titre, fil d’Ariane, auteur et dates ;
- `ResourceTableOfContents` : sommaire issu des H2, statique et sans JavaScript ;
- `ResourceLayout` : mise en page de lecture, produits liés, FAQ visible et CTA ;
- `RelatedResources` : maillage entre guides et depuis les pages produits ;
- `ExpertReview` : statut explicite de la relecture métier ;
- `CategoryNavigation` : accès aux parcours ;
- `LexiconEntry` : définition ancrée et réutilisable.

## Principes de navigation

L’entrée `Ressources` existante du menu pointe vers `/ressources/` ; aucune entrée supplémentaire n’est ajoutée. Le footer reçoit un lien vers le centre. L’accueil conserve sa structure et remplace seulement trois cartes sans destination par trois liens réels.

## Maillage

Chaque guide renvoie vers :

1. son produit principal ;
2. un à trois produits complémentaires ;
3. l’audit ;
4. deux guides associés lorsque la relation est utile.

Les pages `/assurances-entreprises/`, `/assurance-transport/` et `/assurance-btp-decennale/` reçoivent un bloc discret « Ressources pour approfondir ». Les autres pages ne sont pas surchargées dans cette mission.

## SEO et données structurées

Les hubs ont un title, une description, un canonical, un H1, `BreadcrumbList` et `CollectionPage`. Les guides ont `Article`, `BreadcrumbList`, dates, auteur organisationnel et `mainEntityOfPage`. `FAQPage` est produit uniquement lorsque la FAQ existe aussi visiblement dans la page. Le lexique utilise `DefinedTermSet`.

Le `noindex, nofollow` global et le `robots.txt` bloquant restent inchangés.

## Gouvernance

Un guide ne passe à `published` qu’après validation des formulations sensibles, des sources, des liens, de l’auteur, des dates et de son produit principal. Une mise à jour modifie `updatedDate`. Une ressource obsolète est corrigée, redirigée lors d’une future phase de production ou classée `archived` ; elle ne reste pas publiée silencieusement.
