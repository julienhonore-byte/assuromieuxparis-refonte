# Mission 97 — Silo SEO RC professionnelle

Date de contrôle : 23 août 2026
Statut : prêt pour validation locale — aucun commit, push ou déploiement

## Périmètre livré

Le silo RC professionnelle ajoute cinq URL comme un lot unique :

1. `/rc-professionnelle-auto-entrepreneur/`
2. `/rc-professionnelle-consultant-freelance/`
3. `/rc-professionnelle-agent-immobilier/`
4. `/rc-professionnelle-agence-web-developpeur/`
5. `/ressources/guides/prix-rc-professionnelle-facteurs-tarif/`

La page pilier `/rc-professionnelle/` reçoit uniquement le bloc descendant « RC professionnelle par métier / statut » et ses quatre liens. Aucun autre contenu de cette page, aucune métadonnée et aucun CTA existant n'ont été modifiés.

## Fichiers créés

- `src/pages/rc-professionnelle-auto-entrepreneur.md`
- `src/pages/rc-professionnelle-consultant-freelance.md`
- `src/pages/rc-professionnelle-agent-immobilier.md`
- `src/pages/rc-professionnelle-agence-web-developpeur.md`
- `src/content/resources/prix-rc-professionnelle-facteurs-tarif.md`
- `docs/MISSION_97_RC_PRO_SILO.md`

## Fichiers modifiés

- `src/pages/rc-professionnelle.astro` : ajout du seul bloc descendant autorisé.
- `src/data/indexing.mjs` : ajout des cinq nouvelles routes à la liste centrale.
- `src/layouts/DecennialTradeLayout.astro` : paramètres optionnels pour réutiliser le gabarit métier sur le silo RC professionnelle ; les valeurs par défaut et le rendu des pages Décennale restent inchangés.

Les hubs Ressources, Guides et Assurance entreprise n'ont pas été modifiés : leur collecte Astro dynamique fait apparaître automatiquement le guide publié dans la mécanique normale.

## Intégration éditoriale et visuelle

- Les H1, chapeaux, sections métier, FAQ et maillage proviennent des contenus fournis.
- Les descriptions ont uniquement été raccourcies pour rester adaptées aux résultats de recherche.
- Les dates éditoriales et de relecture sont fixées au 23 août 2026.
- Les pages métier utilisent le visuel RC professionnelle déjà licencié et optimisé dans le dépôt, avec AVIF, WebP, `srcset`, `sizes`, dimensions fixes et un texte alternatif fidèle à l'image réellement affichée. Aucun média tiers ou fictif n'a été ajouté.
- Le guide utilise le gabarit Ressource existant avec Article, BreadcrumbList et FAQPage.
- L'auteur Article est une Person reliée à Jules HONORE ; `reviewedBy` et `reviewDate` sont renseignés.
- `dateModified` est alimentée par `updatedDate`, donc exploitable par la logique `lastmod` déterministe de la Mission 93 TER.

## Résultats avant / après

| Indicateur | Avant | Après |
|---|---:|---:|
| Pages générées | 55 | 60 |
| URL indexables | 49 | 54 |
| URL uniques dans le sitemap | 49 | 54 |
| Balises `lastmod` fiables | 10 | 11 |

## Contrôles techniques

| Contrôle | Résultat |
|---|---|
| `pnpm verify` | Réussi |
| Astro Check | 0 erreur, 0 avertissement, 0 hint |
| Build statique | Réussi, 60 pages générées |
| Liens internes | 60 pages contrôlées, 0 lien cassé |
| Build production d'indexation | 54 routes indexables |
| Sitemap | 54 URL uniques, cinq nouvelles URL présentes |
| `git diff --check` | Réussi |
| HTTP local | 200 sur les cinq nouvelles routes via la prévisualisation Astro |
| H1 | Un H1 sur chaque nouvelle page |
| Canonical | Auto-référent sur les cinq nouvelles routes |
| Robots | `index, follow` sur les cinq nouvelles routes dans le build production |
| JSON-LD | Tous les blocs analysés sont syntaxiquement valides |
| Images des nouvelles pages | Aucune image cassée |
| Responsive | Aucun overflow à 390, 768, 1280 et 1440 px |

Les quatre pages métier exposent Service, BreadcrumbList et FAQPage en plus des entités globales. Le guide expose Article, BreadcrumbList et FAQPage. Les CTA conservent l'instrumentation et les paramètres de contexte prévus ; GA4, consentement et Formspree n'ont pas été modifiés.

## Protections confirmées

- Le guide PME `quelles-assurances-prevoir-pme` reste `review-required`, `noindex, nofollow` et absent du sitemap.
- Aucun title, H1, canonical, CTA ou contenu existant n'a été modifié hors du bloc descendant autorisé sur la page pilier.
- Aucun composant global, formulaire, code GA4, règle de consentement, fichier robots ou sitemap source n'a été modifié.
- Aucun commit, push ou déploiement n'a été effectué.
- Les fichiers non suivis antérieurs et les dossiers `output/` ont été préservés.

## Risques et suivi après déploiement

- Les quatre pages métier réutilisent volontairement un visuel RC professionnelle générique déjà présent et licencié. Des photographies propres à chaque métier ne devront être envisagées qu'avec des droits documentés ; aucun ALT trompeur n'a été utilisé pour simuler une scène absente.
- Le composant WhatsApp reste présent avec son contexte générique existant `assurances-entreprises`. La Mission 97 ne modifie ni ce composant ni son tracking `whatsapp_click`.
- Après publication validée, contrôler dans Search Console l'exploration des cinq URL, inspecter en priorité la page pilier et le guide Prix, puis suivre séparément impressions, CTR et requêtes longue traîne. Aucune demande d'indexation n'a été envoyée pendant cette mission.

## Point de contrôle de référence

`source/index-production-reference.html` conserve l'empreinte documentée `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0`. Le fichier racine `index.html`, déjà différent de cette empreinte dans l'état Git de départ, n'a pas été modifié par la Mission 97.
