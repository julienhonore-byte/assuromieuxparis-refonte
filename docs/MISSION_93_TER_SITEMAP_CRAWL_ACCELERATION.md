# Mission 93 TER — Sitemap Freshness & Crawl Acceleration

Date du contrôle : 20 août 2026

## Conclusion

La décision technique retenue est **OPTION B** : ajouter `lastmod` uniquement aux URL qui exposent déjà une vraie `Article.dateModified` éditoriale dans leur HTML généré.

Le sitemap final contient 41 URL et 9 balises `lastmod` stables : les huit guides publiés et la méthode d'audit Transport. Les autres familles ne reçoivent aucune date, faute de source éditoriale fiable. Aucune date de build, de déploiement, de filesystem ou calculée par `Date.now()` n'est publiée.

Les 14 routes Mission 90 sont techniquement conformes et correctement maillées : profondeur maximale de deux clics, aucune route orpheline, aucun maillage faible démontré. Aucun lien interne n'a été ajouté.

## 1. État Git initial

- branche : `main` ;
- dernier commit : `d5d33fc design: align protection dirigeant trust signals` ;
- `HEAD` : `d5d33fc01b37543fc7dfd4438ab2f3b5ca2b7af2` ;
- `origin/main` : `d5d33fc01b37543fc7dfd4438ab2f3b5ca2b7af2` ;
- fichiers suivis propres au démarrage ;
- tous les fichiers non suivis antérieurs et dossiers `output/` préservés.

## 2. Architecture du sitemap

### Mécanisme existant

- `src/data/indexing.mjs` contient `firstWaveIndexablePaths`, liste centrale des 41 routes autorisées à l'indexation ;
- `BaseLayout.astro` utilise cette autorisation pour produire `index, follow` uniquement en contexte public ;
- `scripts/prepare-release-output.mjs`, exécuté après le build Astro, transforme la liste en `dist/sitemap.xml`, publie le `robots.txt` adapté et retire l'en-tête privé ;
- `scripts/check-release-output.mjs` vérifie le nombre d'URL et leur présence ;
- aucun plugin `@astrojs/sitemap` n'est installé ;
- les ressources de contenu sont générées par la collection Astro, mais l'autorisation finale reste dans la liste centrale ;
- le guide PME est généré en HTML, mais son absence de `firstWaveIndexablePaths` le maintient `noindex` et hors sitemap.

### Pourquoi la génération reste semi-automatique

Le fichier XML est automatiquement reconstruit à chaque build, mais son inventaire est maintenu manuellement dans `firstWaveIndexablePaths`. L'ajout d'une route Astro ne suffit donc pas à l'ajouter au sitemap. Cette barrière explicite protège le workflow documentaire, notamment les ressources `review-required`, mais impose une maintenance de la liste.

Une automatisation intégrale demanderait de dériver toutes les routes et leur statut depuis plusieurs sources hétérogènes. Elle n'est pas nécessaire pour traiter la fraîcheur et pourrait ouvrir involontairement une page non validée. Le mécanisme reste donc volontairement semi-automatique.

## 3. Audit des sources de date

| Famille | Source observée | Classement | Décision |
|---|---|---|---|
| Pages commerciales Astro | Aucune métadonnée éditoriale de modification | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Hub Ressources | Pas de date propre ; contenu agrégé dynamique | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Catégories Ressources | Pas de date propre ; contenu agrégé | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Guides publiés | `updatedDate` validée par le schéma de collection et rendue en `Article.dateModified` | DATE FIABLE DISPONIBLE | `lastmod` ajouté |
| Méthode Audit Transport | `updatedDate` explicite et rendue en `Article.dateModified` | DATE FIABLE DISPONIBLE | `lastmod` ajouté |
| Lexique | Aucune date éditoriale | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Parcours Votre besoin | Aucune date éditoriale | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Pages institutionnelles | Aucune date éditoriale homogène | AUCUNE DATE FIABLE | Aucun `lastmod` |
| Git | Date de dernier commit possible, mais ne distingue pas automatiquement modification éditoriale et changement technique | DATE PARTIELLEMENT FIABLE | Non utilisée |
| Filesystem / build | `mtime` recréé par build ou copie | AUCUNE DATE FIABLE | Interdit |

## 4. Décision et implémentation `lastmod`

### OPTION B

`scripts/prepare-release-output.mjs` lit le HTML statique déjà généré pour chaque route autorisée. Lorsqu'un script JSON-LD contient un objet `Article` avec une `dateModified` valide et non future, cette date est normalisée en `YYYY-MM-DD` et publiée comme `lastmod`. Sans `Article.dateModified`, aucun élément n'est produit.

Cette méthode :

- réutilise la source éditoriale qui alimente déjà le contenu et le JSON-LD ;
- évite une seconde table de dates ;
- reste stable entre deux builds ;
- échoue explicitement si une date Article est invalide ou future ;
- n'ajoute aucune date aux pages sans source fiable ;
- ne change ni les 41 URL ni la logique d'indexation.

### Dates publiées

| URL | `lastmod` |
|---|---|
| Guide Flotte avant comparaison | 2026-08-15 |
| Guide Audit | 2026-07-24 |
| Guide RC Pro / RC Exploitation | 2026-07-24 |
| Guide RC Pro obligatoire | 2026-08-01 |
| Guide Responsabilité transporteur | 2026-08-01 |
| Guide Décennale | 2026-08-01 |
| Guide Santé / Prévoyance | 2026-08-01 |
| Guide Sinistralité Flotte | 2026-08-15 |
| Méthode Audit Transport | 2026-08-01 |

## 5. Les 14 routes restaurées

La matrice détaillée est disponible dans [`MISSION_93_TER_CRAWL_MATRIX.csv`](./MISSION_93_TER_CRAWL_MATRIX.csv).

Contrôle production commun aux 14 routes :

- HTTP 200 ;
- `index, follow` ;
- canonical auto-référent ;
- présente dans le sitemap ;
- aucun `X-Robots-Tag` contradictoire ;
- aucun `lastmod`, car ces hubs et parcours ne disposent pas d'une date éditoriale fiable.

## 6. État Google connu

Les données individuelles réutilisent les inspections réelles de Mission 93. Aucune nouvelle information postérieure n'était disponible pendant cette mission ; les statuts inconnus restent donc inconnus.

| État | Nombre | Routes |
|---|---:|---|
| INDEXÉE | 4 | `/ressources/`, `/ressources/transport-logistique/`, `/lexique/`, `/votre-besoin/` |
| DÉCOUVERTE / NON INDEXÉE | 1 | `/ressources/guides/` |
| EXPLORÉE / NON INDEXÉE | 1 | `/ressources/assurance-entreprise/` |
| INCONNUE | 8 | Deux catégories et six parcours, dont `entreprise-evolue` dont la dernière inspection reflétait encore l'ancien `noindex` |

Le statut Google ne modifie pas le diagnostic technique : les 14 URL sont explorables, autorisées et maillées.

## 7. Profondeur et maillage interne

Le graphe a été construit à partir des liens HTML des 41 URL du sitemap, fragments exclus et liens normalisés sur le domaine canonique.

| Groupe | Profondeur | Liens entrants internes | Force |
|---|---|---:|---|
| `/ressources/` | 1 clic | 40 | FORT |
| `/votre-besoin/` | 1 clic | 40 | FORT |
| `/ressources/guides/` | 2 clics | 7 | SUFFISANT |
| Catégories Ressources | 2 clics | 7 à 12 | SUFFISANT |
| `/lexique/` | 2 clics | 7 | SUFFISANT |
| Parcours Votre besoin | 2 clics | 2 à 6 | SUFFISANT |

### Liens depuis les pages fortes

- Accueil, Assurances entreprises, Transport, Flotte, BTP et Audit pointent vers `/ressources/` et `/votre-besoin/` via le footer ou des liens éditoriaux ;
- BTP pointe directement vers la catégorie BTP ;
- Transport pointe directement vers le parcours Transport ;
- Flotte pointe directement vers le parcours Flotte ;
- Ressources distribue l'autorité vers les catégories, Guides, Lexique et parcours ;
- les parcours se relient entre eux lorsque l'intention est voisine.

Le parcours Création/reprise ne reçoit que deux liens, mais ils sont logiques — hub Votre besoin et parcours Entreprise évolue — et la profondeur reste de deux clics. Il n'est pas faible au sens du cahier.

### Corrections

- routes orphelines : 0 ;
- routes au maillage faible : 0 ;
- ajouts de liens appliqués : 0.

Ajouter des liens supplémentaires aurait privilégié la quantité au détriment du contexte.

## 8. Hubs prioritaires

| Hub | Technique | Google connu | Profondeur | Maillage |
|---|---|---|---|---|
| `/ressources/` | Conforme | Indexé | 1 clic | Fort |
| `/ressources/transport-logistique/` | Conforme | Indexé | 2 clics | Suffisant |
| `/ressources/assurance-entreprise/` | Conforme | Exploré, non indexé | 2 clics | Suffisant |
| `/lexique/` | Conforme | Indexé | 2 clics | Suffisant |
| `/votre-besoin/` | Conforme | Indexé | 1 clic | Fort |

Les cinq hubs prioritaires sont techniquement conformes. Quatre sont déjà indexés selon les dernières inspections disponibles.

## 9. Robots et sitemap final

`robots.txt` de production :

- `User-agent: *` ;
- `Allow: /` ;
- sitemap déclaré à `https://www.assuromieuxparis.com/sitemap.xml` ;
- aucune nouvelle règle bloquante.

Sitemap local de production après implémentation :

- 41 URL ;
- 41 URL uniques ;
- 9 balises `lastmod` ;
- 0 date future ;
- 0 URL `noindex` ;
- 0 lien interne cassé ;
- guide PME `review-required` absent et toujours `noindex, nofollow`.

La production publique reste inchangée tant que la mission n'est ni validée, ni commitée, ni déployée.

## 10. Validation du double build

Deux builds de production successifs sans modification intermédiaire ont produit le même sitemap :

`SHA-256 39a33769bc372abed3aa9b724a833b877cd8e160c8a6a74b5389a14933162d8b`

Les 9 valeurs `lastmod` sont strictement identiques entre les deux builds. Le guide Sinistralité Flotte publie bien `2026-08-15`, valeur correspondant à son `updatedDate` éditorial et à son `Article.dateModified`.

## 11. Validation technique

- `pnpm verify` : réussi après chargement du runtime workspace ;
- Astro Check : 117 fichiers, 0 erreur, 0 avertissement, 0 hint ;
- build Astro : réussi, 47 pages générées ;
- double `pnpm build` en contexte production : réussi ;
- liens internes : 47 pages HTML, 0 lien cassé ;
- validation release : réussie ;
- sitemap : 41 URL, 9 `lastmod`, guide PME absent ;
- `git diff --check` : à confirmer après création des livrables.

Le premier lancement de `pnpm verify` n'avait pas trouvé `node` dans le PATH de la session. Il a été relancé avec le runtime workspace fourni par Codex et a réussi intégralement ; ce premier arrêt n'était pas une erreur du projet.

## 12. Actions humaines Search Console

Ne pas demander l'indexation des 41 URL ni resoumettre les quatre hubs déjà indexés. Trois actions ponctuelles seulement sont justifiées :

1. `/ressources/guides/` — découverte mais non encore explorée lors de Mission 93 ;
2. `/ressources/assurance-entreprise/` — explorée, techniquement conforme, non encore indexée ;
3. `/votre-besoin/entreprise-evolue/` — demander une nouvelle exploration afin de remplacer l'ancienne inspection antérieure à Mission 90.

Après une demande unique, laisser sitemap et maillage assurer le cycle normal de découverte.

## 13. Risques et limites

- `lastmod` ne couvre volontairement que 9 URL ; étendre les dates aux pages Astro sans métadonnée éditoriale créerait un faux signal ;
- la lecture du JSON-LD suppose que le schéma Article continue d'être rendu dans le HTML statique ; une date invalide ou future fait échouer le build plutôt que de publier une valeur incorrecte ;
- Search Console peut conserver temporairement des états antérieurs au déploiement Mission 90 ;
- `lastmod` est un indice de crawl, pas une garantie d'indexation ou de positionnement ;
- aucun lien n'a été ajouté parce qu'aucune faiblesse démontrée ne le justifiait.

## 14. Fichiers de la mission

Fichier applicatif modifié :

- `scripts/prepare-release-output.mjs`.

Fichiers documentaires créés :

- `docs/MISSION_93_TER_SITEMAP_CRAWL_ACCELERATION.md` ;
- `docs/MISSION_93_TER_CRAWL_MATRIX.csv`.

Aucun title, meta description, H1/H2, contenu éditorial, Schema, GA4, consentement, formulaire, CTA, CSS ou design n'est modifié.
