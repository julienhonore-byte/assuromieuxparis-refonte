# Mission 91 — SEO Structure & Schema / P1

Date du contrôle : 20 août 2026

Périmètre : données structurées, sémantique des principales pages commerciales, hubs Ressources, cohérence ORIAS et non-régression Analytics/CRO. Aucun contrôle du domaine `assuromieux.fr`.

## Synthèse

La majorité des recommandations P1 externes étaient déjà correctement implémentées. Les 202 blocs JSON-LD générés sont syntaxiquement valides. Les pages commerciales possèdent chacune un `Service`, un `BreadcrumbList` et un `FAQPage` correspondant à une FAQ visible. L'accueil contient déjà un graphe cohérent `Organization` + `Person` + `WebSite` + `InsuranceAgency`, avec les coordonnées fiables centralisées dans le projet. Les dix pages auditées ont un H1 unique, une hiérarchie de titres sans saut et une correspondance sémantique naturelle avec leur intention commerciale.

Deux anomalies liées ont été confirmées dans le centre de ressources : le titre « Les six guides disponibles » était codé en dur alors que huit guides sont publiés ; les listes publiques incluaient également une neuvième ressource encore `review-required`. La correction filtre désormais les listes et compteurs sur `status === 'published'` et affiche dynamiquement le total de huit guides.

## 1. Données structurées

### Déjà conforme — aucune modification

#### Accueil

Le graphe contient :

- `Organization` avec `@id` stable, nom, raison légale, URL, logo, e-mail, téléphone, adresse, identifiants SIREN/SIRET/RCS/ORIAS et relation vers Jules HONORE ;
- `Person` pour Jules HONORE, reliée à l'organisation ;
- `WebSite` avec l'organisation comme éditeur ;
- `LocalBusiness` + `InsuranceAgency` avec nom, URL, logo, image, téléphone, e-mail, adresse et zone desservie France ;
- `ItemList` des services visibles ;
- `FAQPage` correspondant aux questions visibles.

Aucune latitude/longitude, aucun horaire, aucune fiche Google Business Profile et aucun profil social non vérifié ne sont ajoutés. La relation de l'agence avec Jules HONORE est déjà résolue par le graphe `InsuranceAgency` → `Organization` → `founder Person`; la dupliquer n'apporterait pas d'information supplémentaire.

#### Pages commerciales

Les neuf pages produits/piliers auditées contiennent toutes :

- `Organization` et `Person` communs ;
- un `BreadcrumbList` ;
- un `Service` avec URL, description, prestataire et zone desservie ;
- un `FAQPage` uniquement lorsque la FAQ correspondante est visible dans le HTML.

Le build ne révèle aucun doublon du même schéma métier sur une page.

#### Guides

Chaque guide généré contient :

- `Article` ;
- `datePublished` et `dateModified` issues du frontmatter ;
- `mainEntityOfPage` correspondant au canonical ;
- `publisher` relié à l'organisation ;
- `BreadcrumbList` ;
- `FAQPage` uniquement lorsqu'une FAQ visible existe ;
- `reviewedBy` de type `Person` pour les ressources publiées et validées par Jules HONORE.

L'auteur visible des guides est actuellement « Assuromieux Paris ». Le JSON-LD le représente donc fidèlement comme `Organization`. La recommandation externe d'imposer un auteur `Person` n'a pas été appliquée : Jules HONORE est documenté comme relecteur, pas comme auteur. Le transformer en auteur sans modification et validation éditoriales correspondantes créerait une attribution non démontrée et contredirait le contenu visible.

### Validation technique

- 202 scripts JSON-LD analysés ;
- 0 erreur de parsing JSON ;
- types attendus présents sur les dix pages principales ;
- aucune donnée structurée ajoutée ou modifiée pendant cette mission.

## 2. Audit sémantique des pages commerciales

| Page | Mot-clé principal attribué | Présence dans le Hero / premier bloc | H1 | Hiérarchie | Décision |
|---|---|---|---|---|---|
| `/` | assurance entreprise / courtier assurance entreprise Paris | « assurances d’entreprise » dans le H1, Paris et intervention nationale dans le Hero | Unique | Conforme | Aucune modification |
| `/assurances-entreprises/` | assurances entreprises | « assurances de l’entreprise » dans le H1 et programme d'assurances dans le lead | Unique | Conforme | Aucune modification |
| `/rc-professionnelle/` | RC professionnelle / responsabilité civile professionnelle | « responsabilité professionnelle » dans le H1, responsabilités et contrat dans le lead, libellé RC professionnelle dans le Hero | Unique | Conforme | Aucune modification |
| `/flotte-automobile/` | assurance flotte automobile | véhicules et usages dans le H1, parc/conducteurs/sinistralité dans le lead, libellé Flotte automobile dans le Hero | Unique | Conforme | Aucune modification |
| `/assurance-transport/` | assurance transport et logistique | transport et logistique dans le H1, chaîne de risques dans le lead | Unique | Conforme | Aucune modification |
| `/assurance-btp-decennale/` | assurance BTP et décennale | décennale dans le H1, activités/attestations/chantiers dans le lead | Unique | Conforme | Aucune modification |
| `/multirisque-professionnelle/` | multirisque professionnelle | locaux, biens et continuité dans le H1/lead, libellé Multirisque dans le Hero | Unique | Conforme | Aucune modification |
| `/cyberassurance/` | cyberassurance entreprise | incident numérique dans le H1, données/dépendances/scénarios de crise dans le lead, libellé Risque cyber | Unique | Conforme | Aucune modification |
| `/sante-prevoyance-entreprise/` | santé collective et prévoyance entreprise | protection sociale et équipes dans le H1/lead, Santé et garanties dans le Hero | Unique | Conforme | Aucune modification |
| `/protection-dirigeant/` | protection du dirigeant | dirigeant, personne, revenus et continuité dans le H1/lead | Unique | Conforme | Aucune modification |

La stratégie éditoriale actuelle privilégie des H1 orientés décision plutôt qu'une répétition mécanique des titles. Le couple H1 + lead + libellé métier remplit déjà la correspondance requête/page ; ajouter systématiquement « assurance » aurait créé une suroptimisation sans gain démontré.

## 3. Hub Ressources et catégories

### Anomalies confirmées

| Élément | Avant | Après |
|---|---|---|
| Total annoncé | Texte codé en dur : « Les six guides disponibles. » | Compteur dynamique : « Les 8 guides disponibles. » |
| Sélection du hub principal | Toute ressource non archivée, dont une `review-required` | Ressources `published` uniquement |
| Hub Guides | 9 cartes, dont le guide PME non validé | 8 cartes publiées |
| Catégories | Comptages incluant potentiellement des ressources non publiées | Comptages calculés uniquement sur les ressources publiées |

### Compteurs générés

- Assurance entreprise : 6 guides ;
- Transport & logistique : 1 guide ;
- BTP : 1 guide ;
- Dirigeants : 0 guide ;
- total : 8 guides publiés.

Le guide PME reste généré à son URL, en `review-required`, `noindex, nofollow` et hors sitemap. La correction ne modifie ni son statut documentaire ni sa règle d'indexation.

## 4. ORIAS

### Déjà conforme — aucune modification

- numéro central : `26003798` ;
- libellé public : `ORIAS 26003798` ;
- lien central : `https://orias.fr/home/showIntermediaire/489181032` ;
- aucune autre URL ORIAS détectée dans le HTML généré ;
- aucune autre valeur numérique ORIAS visible détectée sur `assuromieuxparis.com`.

## 5. Analytics, consentement et conversion

Aucun fichier Analytics, consentement, formulaire ou CRO n'est modifié. Les éléments suivants restent donc inchangés :

- Measurement ID `G-WWMFCQF196` ;
- blocage du tag avant consentement ;
- chargement après consentement ;
- événements existants, notamment `page_view` et `form_start` ;
- Formspree ;
- formulaires et règles Mission 85 ;
- CTA et parcours quote/audit.

Aucun faux lead et aucun événement `generate_lead` n'ont été envoyés.

## 6. Protections SEO

- URL : inchangées ;
- canonicals : inchangés et auto-référents ;
- logique d'indexation Mission 90 : inchangée ;
- sitemap : 41 URL, inchangé ;
- robots : `index, follow` sur les pages publiques concernées ;
- titles, meta descriptions et H1 : inchangés ;
- cluster Flotte et maillage interne : inchangés ;
- CTA, formulaires, GA4, consentement et design : inchangés.

## 7. Fichiers modifiés

- `src/pages/ressources/index.astro` ;
- `src/pages/ressources/guides/index.astro` ;
- `src/pages/ressources/assurance-entreprise/index.astro` ;
- `src/pages/ressources/transport-logistique/index.astro` ;
- `src/pages/ressources/btp/index.astro` ;
- `src/pages/ressources/dirigeants/index.astro` ;
- `docs/MISSION_91_SEO_STRUCTURE_SCHEMA.md`.

## 8. Contrôles réalisés

- `pnpm verify` en contexte de production : réussi ;
- Astro Check : 117 fichiers, 0 erreur, 0 avertissement, 0 hint ;
- build Astro : réussi, 47 pages générées ;
- liens internes : 47 pages contrôlées, 0 lien cassé ;
- validation release : réussie ;
- sitemap : 41 URL ;
- JSON-LD : 202 blocs valides, 0 erreur de parsing ;
- dix pages commerciales : un H1 chacune, hiérarchie Hn sans saut, canonical correct, `index, follow` ;
- recette `/ressources/` : 390, 768, 1280 et 1440 px, aucun overflow ;
- recette `/ressources/guides/` : 390 et 1440 px, huit cartes publiées, aucun overflow ;
- `git diff --check` : à confirmer dans le contrôle final après création du présent rapport ;
- commit, push et déploiement : aucun.
