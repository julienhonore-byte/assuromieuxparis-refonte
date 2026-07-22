# Recette — Parcours par besoin

Date : 22 juillet 2026
Statut : recette locale conforme ; validation métier et production non acquises

## Périmètre

La recette couvre les sept routes, les six préremplissages, le maillage ajouté et les invariants du projet. Elle n’envoie aucune donnée à Formspree et ne déclenche aucun rendez-vous Cal.com.

## Contrôles automatisés

| Contrôle | Résultat |
|---|---|
| Build Astro statique | Conforme — 37 pages générées |
| Nombre de nouvelles routes | Conforme — 7 exactement |
| Contenu des six pages enfants | Conforme — 840 à 936 mots visibles dans `main` |
| Liens internes et ancres | Conforme — 37 pages contrôlées, aucun lien cassé |
| H1, title, description, canonical et Open Graph | Conforme sur les 7 routes |
| JSON-LD, breadcrumbs et FAQ visibles | Conforme — JSON valide ; 3 FAQ visibles sur chaque page enfant |
| Préremplissages | Conforme — 6 valeurs exactes, visibles et modifiables |
| `noindex` et `robots.txt` | Conforme — `noindex, nofollow` et `Disallow: /` maintenus |
| Formspree et Cal.com | Conforme sans soumission — URL et comportement existants conservés |
| Empreintes des références | Conforme — les deux fichiers protégés portent le SHA-256 documenté |
| Dépendances | Conforme — installation figée à jour, aucun changement de manifeste ou lockfile |
| Diff Git | Conforme — `git diff --check` sans erreur |

## Matrice responsive prévue

Les sept routes ont été contrôlées à 320, 375, 390, 768, 1024, 1280 et 1440 px, soit 49 combinaisons. Aucun débordement horizontal n’a été mesuré. Chaque rendu conserve son H1 unique, le `main`, le footer, les CTA et les blocs de contenu. L’aperçu mobile à 390 px confirme le repli du hero, des boutons et des grilles.

## Accessibilité prévue

- un H1 unique et hiérarchie H2/H3 ordonnée ;
- lien d’évitement, fil d’Ariane et repères `main`/`nav` ;
- navigation mobile utilisable au clavier : ouverture vers le premier lien, fermeture par Échap, retour du focus sur le bouton et contour de focus visible ;
- boutons et liens avec libellé explicite ;
- contraste des nouveaux blocs fondé sur les tokens existants : ratios contrôlés de 4,92:1 à 17,17:1 pour les associations de texte utilisées ;
- contenu statique présent dans les fichiers HTML générés et donc lisible sans JavaScript ; le script n’est requis que pour le préremplissage et les interactions progressives.

## SEO et données structurées

- un seul H1 sur chacune des sept routes ;
- title, description, canonical, `og:title`, `og:description` et `og:url` propres ;
- canonical absolue alignée sur l’URL publique prévue ;
- `Organization` et `BreadcrumbList` présents partout ;
- `CollectionPage` sur le hub ; `WebPage` et `FAQPage` sur les six enfants ;
- JSON-LD parsé sans erreur et FAQ visible correspondante ;
- CTA principaux contrôlés vers les six paramètres prévus.

## Formulaire

| Paramètre | Valeur obtenue | Verdict |
|---|---|---|
| `audit-contrats` | `Audit de contrats` | Conforme |
| `comparaison-assurances` | `Comparaison d’assurances` | Conforme |
| `creation-reprise` | `Création ou reprise d’entreprise` | Conforme |
| `evolution-entreprise` | `Évolution d’entreprise` | Conforme |
| `flotte` | `Flotte automobile` | Conforme |
| `activite-transport` | `Activité de transport` | Conforme |

Le sélecteur a ensuite été modifié manuellement de `Audit de contrats` vers `Autre besoin`, ce qui confirme son caractère éditable. L’action reste `https://formspree.io/f/mnjlwzlp` en méthode `POST`. Aucun formulaire n’a été soumis.

## Journaux et erreurs

Les journaux du serveur local montrent des réponses HTTP 200 pour toutes les routes testées et aucune erreur de compilation ou d’exécution. L’échec intermédiaire du contrôle de liens venait de trois slugs de guides inexacts ; ils ont été corrigés puis `pnpm verify` a réussi.

## Critères bloquants

Sont bloquants avant commit : erreur de build, route manquante, lien interne cassé, débordement horizontal, H1 multiple, métadonnée manquante, préremplissage erroné, modification d’une référence protégée ou perte du blocage d’indexation.

Les validations métier globales, le test d’envoi Formspree réel et l’autorisation d’indexation restent des tâches externes à ce lot.
