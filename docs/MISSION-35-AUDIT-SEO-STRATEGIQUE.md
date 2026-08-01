# Mission 35 — Audit SEO stratégique

Date du contrôle : 31 juillet 2026  
Domaine audité : `https://www.assuromieuxparis.com/`  
Périmètre : dépôt Astro, build statique disponible, 43 sorties générées, 19 URL indexables, site public, résultats de recherche publics et sites officiels des concurrents cités.

## 1. Synthèse exécutive

Le socle technique public est sain : les 19 URL déclarées indexables répondent en HTTP 200, produisent `index, follow`, possèdent un canonical auto-référent sur le domaine `www`, un H1 unique et des blocs JSON-LD syntaxiquement valides. Le sitemap public contient exactement ces 19 URL et le `robots.txt` autorise l’exploration.

La principale limite de cet audit est l’absence d’une session Search Console authentifiée et d’un export Search Console dans le dépôt. Le nombre réellement indexé par Google, les impressions, les clics, le CTR, la position moyenne, les requêtes, les motifs d’exclusion Google, les rapports Core Web Vitals et les améliorations structurées ne peuvent donc pas être établis sans les inventer. Les tableaux correspondants distinguent explicitement :

- les faits vérifiés dans le HTML public ;
- les états attendus d’après la configuration du site ;
- les données privées encore à exporter.

Trois priorités dominent :

1. obtenir l’export Search Console qui manque à toute décision fondée sur la performance réelle ;
2. résoudre la concurrence entre `assuromieuxparis.com` et les pages « Paris » publiées sur `assuromieux.fr` ;
3. consolider l’autorité par des preuves réelles, des citations locales cohérentes et un premier cas d’usage documenté, avant d’augmenter le volume de pages.

### Évaluation globale

| Axe | Note | Lecture |
|---|---:|---|
| Technique indexable | 9/10 | Production cohérente, sitemap propre, canonicals corrects, faible poids JavaScript. |
| Architecture de contenu | 8/10 | Clusters Audit, Flotte, RC et Transport déjà structurés. Trois guides publiés. |
| Maillage interne | 8/10 | Réseau dense et contextuel, mais quelques réciprocités et hubs restent à corriger. |
| SEO local | 5/10 | NAP présent sur le site, mais Google Business Profile non auditable et conflit fort avec `assuromieux.fr`. |
| EEAT | 6,5/10 | Expertise et fiabilité éditoriale solides ; expérience démontrée et autorité externe encore faibles. |
| Mesure | 2/10 | Architecture de conversion préparée, mais aucune donnée Search Console/GA4 exploitable dans cette mission. |

## 2. Méthode et limites

### Sources contrôlées

- liste centrale `src/data/indexing.mjs` ;
- HTML du build `dist` ;
- HTML réellement servi pour les 19 URL indexables ;
- `https://www.assuromieuxparis.com/robots.txt` ;
- `https://www.assuromieuxparis.com/sitemap.xml` ;
- redirections des quatre variantes HTTP/HTTPS et avec/sans `www` ;
- composants, données structurées, contenus et documents SEO du dépôt ;
- recherche publique de marque et pages publiques de concurrents.

### Limites de preuve

La session Search Console disponible n’était pas authentifiée. Aucun fichier CSV, Google Sheets, XLSX ou export API de Search Console n’est présent dans le projet. En conséquence :

- `ND` signifie « non disponible », et non zéro ;
- aucune page n’est déclarée « sans impression » ou « sans clic » ;
- aucune requête n’est qualifiée de faible concurrence sur la base d’une donnée non observée ;
- les potentiels SEO sont des évaluations éditoriales et structurelles, pas des mesures de trafic ;
- une recherche publique `site:` est utilisée uniquement comme signal indicatif, jamais comme compteur d’indexation.

Google précise que le rapport Performances est la source des clics, impressions, CTR et positions, et que le rapport Indexation des pages recense les URL connues de Google, indexées ou non. Voir la [documentation Performances](https://support.google.com/webmasters/answer/7576553?hl=fr) et la [documentation Indexation des pages](https://support.google.com/webmasters/answer/10264824?hl=fr).

## 3. État technique réellement vérifié

### Inventaire

| Élément | Résultat |
|---|---:|
| Sorties générées | 43 : 42 pages HTML routables et une page 404 |
| URL approuvées pour l’indexation | 19 |
| URL présentes dans le sitemap public | 19 |
| Pages routables en `noindex, nofollow` | 23 |
| Page 404 en `noindex, nofollow` | 1 |
| Total attendu hors index | 24 |
| URL indexables testées en production | 19/19 |
| HTTP 200 sans redirection sur ces URL | 19/19 |
| `index, follow` dans le HTML public | 19/19 |
| Canonical auto-référent | 19/19 |
| Un seul H1 | 19/19 |
| JSON-LD syntaxiquement lisible | 19/19 |
| Sitemap public | HTTP 200, 19 URL |
| Robots public | HTTP 200, `Allow: /`, sitemap déclaré |

### Domaine et redirections

| Variante demandée | Chaîne observée | Résultat |
|---|---|---|
| `http://assuromieuxparis.com/` | HTTP apex → HTTPS apex → HTTPS `www` | 2 redirections 301 |
| `https://assuromieuxparis.com/` | HTTPS apex → HTTPS `www` | 1 redirection 301 |
| `http://www.assuromieuxparis.com/` | HTTP `www` → HTTPS `www` | 1 redirection 301 |
| `https://www.assuromieuxparis.com/` | aucune | HTTP 200 |

Le domaine canonique est désormais cohérent : `https://www.assuromieuxparis.com/`. La double redirection depuis `http://assuromieuxparis.com/` est une amélioration mineure possible, pas un blocage. Une redirection directe vers HTTPS `www` réduirait un aller-retour si la configuration DNS/Netlify le permet sans risque.

### Indexation volontaire

Les 19 URL du sitemap sont :

1. `/`
2. `/audit-assurances-entreprise/`
3. `/assurances-entreprises/`
4. `/assurance-transport/`
5. `/assurance-btp-decennale/`
6. `/rc-professionnelle/`
7. `/flotte-automobile/`
8. `/multirisque-professionnelle/`
9. `/protection-dirigeant/`
10. `/sante-prevoyance-entreprise/`
11. `/cyberassurance/`
12. `/cabinet/`
13. `/secteurs/`
14. `/secteurs/transport-routier-marchandises/`
15. `/secteurs/convoyage-vehicules/`
16. `/secteurs/demenagement/`
17. `/ressources/guides/flotte-automobile-points-analyser-avant-comparer/`
18. `/ressources/guides/comment-auditer-assurances-entreprise/`
19. `/ressources/guides/rc-professionnelle-rc-exploitation-differences/`

Les contenus éditoriaux restant volontairement bloqués sont :

- `/ressources/guides/quelles-assurances-prevoir-pme/` — `review-required` ;
- `/ressources/guides/responsabilite-transporteur-assurance-marchandises-differences/` — `review-required` ;
- `/ressources/guides/assurance-decennale-coherence-activites-attestation/` — `review-required`.

Les hubs Ressources, les parcours « Votre besoin », les pages juridiques, la page Jules HONORE, la politique éditoriale, le lexique et la 404 restent également hors sitemap et en `noindex, nofollow` selon la stratégie actuelle.

## 4. Audit Search Console

### Tableau de couverture

| Contrôle demandé | Fait vérifié | Donnée Search Console | Conclusion/action |
|---|---|---|---|
| Nombre réel de pages indexées | 19 URL sont techniquement indexables | ND | Exporter le rapport Indexation des pages ; ne pas confondre 19 URL éligibles avec 19 URL déjà indexées. |
| Pages non indexées | 24 sorties sont volontairement en `noindex` | ND | Vérifier que Google classe les 24 exclusions attendues sous la cause appropriée et qu’aucune des 19 URL cibles n’y figure. |
| Explorée, actuellement non indexée | Aucun blocage technique public constaté | ND | Exporter la ligne de motif et les exemples ; vérifier en priorité les trois guides récents. |
| Détectée, actuellement non indexée | Sitemap et maillage rendent les URL découvrables | ND | Contrôler le rapport ; distinguer délai de découverte et problème de qualité. |
| Exclues | 24 exclusions volontaires attendues | ND | Comparer les exclusions Google à la liste attendue du dépôt. |
| Canonical Google | Canonicals déclarés cohérents sur 19/19 | ND | Dans l’Inspection d’URL, comparer canonical déclaré et canonical choisi par Google. |
| Redirections | HTTPS/apex convergent vers HTTPS `www` | ND | Surveiller les anciennes URL apex et l’ancien HTML ; aucune nouvelle redirection à créer sans besoin. |
| Sitemap | HTTP 200, 19 URL canoniques | ND pour « lu le » et erreurs | Confirmer dans Search Console : succès, dernière lecture et 19 URL découvertes. |
| Données structurées | Syntaxe JSON valide sur 19/19 | ND pour les améliorations Google | Tester un échantillon avec le Rich Results Test et exporter les rapports d’améliorations. |
| Core Web Vitals | Socle statique léger ; pas de donnée terrain locale | ND | Exporter Mobile et Ordinateur. Le rapport repose sur les données réelles CrUX et peut rester vide sur un nouveau site ou un site peu fréquenté. |
| HTTPS | Toutes les variantes aboutissent en HTTPS `www` | ND pour le rapport GSC | Confirmer zéro URL HTTP indexée dans le rapport HTTPS. |
| Mobile | CSS responsive présent ; aucun diagnostic GSC disponible | ND | Vérifier les groupes CWV mobiles et réaliser un test Lighthouse/PSI sur un échantillon représentatif. |

Le rapport Core Web Vitals utilise des données terrain CrUX et n’affiche pas nécessairement de données pour un nouveau domaine ou un trafic encore faible. Voir la [documentation Google sur les Core Web Vitals](https://support.google.com/webmasters/answer/9205520?hl=fr).

### Export indispensable pour compléter l’état réel

Exporter depuis la propriété Domaine et, si elle existe, la propriété préfixe `https://www.assuromieuxparis.com/` :

1. **Performances > Résultats de recherche** : périodes « depuis le lancement », 28 derniers jours et comparaison des 28 jours précédents ; onglets Requêtes, Pages, Pays, Appareils et Apparence dans les résultats.
2. **Indexation > Pages** : graphiques et tableau complet des motifs, avec exemples exportés.
3. **Sitemaps** : statut, dernière lecture, nombre d’URL découvertes.
4. **Expérience > Signaux Web essentiels** : Mobile et Ordinateur.
5. **HTTPS** : totaux HTTPS/HTTP.
6. **Améliorations** : rapports disponibles pour les données structurées détectées.
7. **Inspection d’URL** : accueil, Audit, RC, Flotte, les trois guides publiés et les pages sectorielles.

Search Console masque certaines requêtes anonymisées et tronque les lignes visibles ; les totaux peuvent donc être supérieurs à la somme des requêtes exportées. Google recommande de suivre en priorité les tendances de clics et d’impressions plutôt que la position seule. Voir les [limites des dimensions](https://support.google.com/webmasters/answer/17011259?hl=fr) et les [usages du rapport Performances](https://support.google.com/webmasters/answer/17010961?hl=fr).

## 5. Audit des performances organiques

### Résultats mesurés

| Indicateur | Valeur |
|---|---:|
| Pages avec impressions | ND — export Search Console absent |
| Pages avec clics | ND — export Search Console absent |
| Impressions totales | ND |
| Clics totaux | ND |
| CTR moyen | ND |
| Position moyenne | ND |

Aucune conclusion du type « page sans trafic » ne peut être tirée. Plusieurs ouvertures à l’indexation datent du 25 juillet 2026 et deux guides ont été publiés le 31 juillet 2026 ; les données seront mécaniquement immatures à la date de l’audit.

### Potentiel structurel des 19 pages

Ce classement est une estimation d’opportunité fondée sur l’intention, la profondeur, la différenciation et le maillage, pas sur les performances Search Console.

| Groupe | Pages | Potentiel | Motif |
|---|---|---|---|
| A — piliers commerciaux | Accueil, Audit, RC professionnelle, Flotte, Transport, BTP | Très élevé | Intentions commerciales fortes et cohérentes avec le positionnement du cabinet. |
| A — guides publiés | Guide Audit, Guide Flotte, Guide RC/RC exploitation | Très élevé | Répondent à une intention informationnelle distincte et renforcent les pages commerciales. |
| A — différenciation sectorielle | Transport routier, Convoyage, Déménagement | Élevé | Expertise spécifique, longue traîne et faible banalité éditoriale. |
| B — produits transversaux | Multirisque, Cyber, Santé/Prévoyance, Protection du dirigeant | Élevé | Besoins réels, mais concurrence et besoin de preuves d’expertise plus importants. |
| B — hubs | Assurances entreprises, Secteurs | Moyen à élevé | Forte fonction de distribution interne ; intention autonome moins nette pour `/secteurs/`. |
| B — confiance | Cabinet | Moyen | Essentiel à la conversion et à l’EEAT, moins susceptible de générer seul un volume non-marque. |

### Signal public indicatif

La recherche publique a encore fait remonter un ancien extrait de la version historique sur le domaine apex, alors que le site public redirige aujourd’hui correctement vers `www`. Elle fait également remonter la page réseau [Assuromieux Paris sur assuromieux.fr](https://www.assuromieux.fr/courtier-assurance-paris). Ce signal ne donne ni le nombre réel de pages indexées ni leur position, mais il indique que Google ou d’autres index publics peuvent encore associer la marque à des contenus anciens ou concurrents. L’Inspection d’URL Search Console doit confirmer la version canonique effectivement retenue.

## 6. Audit des requêtes

### Requêtes visibles

Aucune requête Search Console n’est accessible dans cette mission. Il est donc impossible de livrer honnêtement une liste « exhaustive » avec impressions, clics, CTR et position.

| Requête | Impressions | Clics | CTR | Position |
|---|---:|---:|---:|---:|
| Données Search Console non accessibles | ND | ND | ND | ND |

### Carte d’intentions à confronter à l’export

| Intention cible | Page attendue | Type | Opportunité hypothétique |
|---|---|---|---|
| courtier assurance entreprise Paris | `/` ou `/assurances-entreprises/` | Commerciale locale | Prioritaire, mais conflit avec `assuromieux.fr`. |
| audit assurance entreprise | `/audit-assurances-entreprise/` | Commerciale | Pilier différenciant. |
| comment auditer les assurances d’une entreprise | guide Audit | Informationnelle | Longue traîne qualifiée. |
| assurance RC professionnelle entreprise | `/rc-professionnelle/` | Commerciale | Marché concurrentiel, valeur élevée. |
| RC professionnelle ou RC exploitation | guide RC | Informationnelle | Réponse précise, potentiel de premier écran. |
| assurance flotte automobile entreprise | `/flotte-automobile/` | Commerciale | Forte cohérence sectorielle. |
| comparer assurance flotte | guide Flotte | Informationnelle | Longue traîne décisionnelle. |
| assurance transport et logistique | `/assurance-transport/` | Commerciale | Cœur sectoriel. |
| assurance transporteur routier marchandises | page Transport routier | Sectorielle | Intention spécifique et qualifiée. |
| assurance convoyage de véhicules | page Convoyage | Sectorielle | Différenciation forte ; demande à mesurer. |
| assurance entreprise déménagement | page Déménagement | Sectorielle | Différenciation forte ; demande à mesurer. |
| assurance BTP décennale | `/assurance-btp-decennale/` | Commerciale | Concurrentielle ; nécessite autorité métier. |
| cyberassurance entreprise | `/cyberassurance/` | Commerciale | Sujet en croissance, forte concurrence éditoriale. |
| multirisque professionnelle Paris | `/multirisque-professionnelle/` | Commerciale locale | Conflit direct avec une page réseau. |

Les expressions « convoyage de véhicules », « RC professionnelle ou RC exploitation » et les formulations liées à l’analyse avant comparaison sont des opportunités de longue traîne plausibles. Elles ne peuvent toutefois pas être qualifiées de « faible concurrence » sans export Search Console et outil de marché complémentaire.

### Règle d’analyse dès réception des données

- position 4 à 15 + impressions significatives : priorité d’optimisation de la page existante ;
- position 1 à 10 + CTR inférieur au CTR moyen du site à position comparable : tester title et description ;
- plusieurs URL visibles sur la même requête : contrôler la cannibalisation ;
- requête longue traîne pertinente sans page dédiée : enrichir d’abord la meilleure page existante ;
- requête de marque servie par `assuromieux.fr` : traiter la gouvernance inter-domaines avant l’optimisation on-page.

## 7. Audit des contenus publics indexables

Les nombres de mots sont des estimations automatisées du contenu principal rendu, incluant les FAQ et libellés de CTA. La note sur 10 est une appréciation éditoriale et stratégique.

| Page | Intention | Mots | Profondeur / structure | Maillage contextuel entrant | Conversion / FAQ | Richesse | Note | Priorité |
|---|---|---:|---|---:|---|---|---:|---|
| `/` | Courtier assurance entreprise Paris | 915 | 9 H2, proposition complète | 18 | CTA Audit + téléphone, 4 FAQ | Forte, multi-produit | 8,7 | Mesurer CTR de marque/non-marque ; régler le conflit inter-domaines. |
| `/audit-assurances-entreprise/` | Demande d’audit | 610 | 8 H2, méthode et pièces | 18 | CTA contextualisé, 4 FAQ | Forte et claire | 8,8 | Pilier à suivre en premier dans GSC. |
| `/assurances-entreprises/` | Vue globale des assurances | 589 | 9 H2, hub produits | 12 | CTA, 3 FAQ | Large mais synthétique | 8,3 | Clarifier avec les requêtes réelles si le hub mérite davantage de profondeur. |
| `/assurance-transport/` | Conseil assurance transport/logistique | 668 | 11 H2, rôles et risques | 9 | CTA Transport, 3 FAQ | Forte | 8,5 | Renforcer par le futur guide Transport après validation spécialisée. |
| `/assurance-btp-decennale/` | Assurance BTP/décennale | 660 | 10 H2, activités et attestations | 6 | CTA BTP, 3 FAQ | Bonne, prudente | 8,4 | Publier le guide BTP seulement après validation métier. |
| `/rc-professionnelle/` | Assurance RC professionnelle | 1 022 | 8 H2, limites et scénarios | 13 | CTA RC, 4 FAQ | Très forte | 8,8 | Ajouter la réciprocité manquante vers le guide RC publié. |
| `/flotte-automobile/` | Assurance flotte entreprise | 966 | 8 H2, parc et sinistralité | 10 | CTA Flotte, 4 FAQ | Très forte | 8,8 | Cluster le plus complet avec guide réciproque. |
| `/multirisque-professionnelle/` | Assurance multirisque | 895 | 8 H2, biens et continuité | 11 | CTA dédié, 4 FAQ | Forte | 8,4 | Résoudre d’abord la page concurrente du réseau. |
| `/protection-dirigeant/` | Protection du dirigeant | 1 038 | 8 H2, personne/revenus/continuité | 4 | CTA dédié, 4 FAQ | Forte | 8,2 | Faible nombre de liens entrants contextuels ; renforcer depuis contenus pertinents. |
| `/sante-prevoyance-entreprise/` | Santé et prévoyance collective | 956 | 8 H2, cadre et garanties | 4 | CTA dédié, 4 FAQ | Forte et prudente | 8,2 | Renforcer l’autorité par sources et relectures documentées. |
| `/cyberassurance/` | Cyberassurance entreprise | 923 | 8 H2, crise et dépendances | 5 | CTA dédié, 4 FAQ | Forte | 8,3 | Title à 67 caractères : n’agir que si GSC montre un CTR faible ou une troncature défavorable. |
| `/cabinet/` | Confiance et méthode | 648 | 9 H2, rôle et engagements | 5 | Contact direct, 3 FAQ | Bonne | 8,2 | L’autorité est limitée par les pages Auteur et Politique éditoriale en noindex. |
| `/secteurs/` | Hub sectoriel | 284 | 4 H2 | 4 | CTA, aucune FAQ | Faible à moyenne | 6,8 | Page la plus mince ; enrichir seulement si les impressions justifient une intention autonome. |
| `/secteurs/transport-routier-marchandises/` | Assurance transporteur routier | 1 266 | 10 H2, risques et rôles | 3 | CTA sectoriel, 4 FAQ | Très forte | 8,8 | Renforcer les liens entrants ; suivre la longue traîne. |
| `/secteurs/convoyage-vehicules/` | Assurance convoyage | 1 610 | 11 H2, mission détaillée | 4 | CTA sectoriel, 4 FAQ | Très forte et différenciante | 9,0 | Candidat à forte différenciation ; mesurer la demande réelle. |
| `/secteurs/demenagement/` | Assurance déménageur | 1 323 | 10 H2, chaîne complète | 4 | CTA sectoriel, 4 FAQ | Très forte | 8,8 | Renforcer l’autorité sectorielle et les liens entrants. |
| Guide Flotte | Analyse avant comparaison | 1 196 | 16 H2, méthode en 10 points | 5 | CTA, 4 FAQ | Excellente | 9,0 | Suivre requêtes informationnelles et passage vers la page commerciale. |
| Guide Audit | Méthode d’audit | 1 330 | 14 H2, grille et sources | 8 | CTA, 4 FAQ | Excellente | 9,2 | Meilleur actif éditorial transversal. |
| Guide RC | Différence RC pro/exploitation | 1 306 | 12 H2, scénarios et grille | 4 | CTA, 4 FAQ | Excellente | 9,0 | Ajouter un lien depuis la page RC ; publication trop récente pour juger la performance. |

### Forces éditoriales

- intentions commerciales et informationnelles séparées ;
- formulations prudentes adaptées à l’assurance B2B ;
- méthode d’analyse visible sur les principales pages ;
- FAQ sur 17 des 19 URL indexables ;
- pages sectorielles transport nettement plus précises qu’un catalogue produit générique ;
- contenus lisibles, sans inflation vers des milliers de mots inutiles ;
- trois guides validés avec `reviewedBy` et `reviewDate`.

### Faiblesses éditoriales

- peu de preuves d’expérience réelles : aucun cas client documenté, résultat autorisé ou exemple de livrable anonymisé ;
- page `/secteurs/` courte et principalement distributive ;
- l’auteur et la politique éditoriale existent mais restent hors index ;
- la profondeur BTP repose encore sur un guide non validé ;
- la profondeur Transport juridique repose encore sur un guide `review-required` ;
- le contenu du réseau `assuromieux.fr` peut contredire le ton prudent et les données réglementaires du site principal.

## 8. Audit du maillage interne

### État mesuré

Les comptes ci-dessous portent sur les liens contextuels du `<main>` entre les 19 URL indexables ; ils excluent le header et le footer.

| Cible | Pages sources distinctes | Lecture |
|---|---:|---|
| Accueil | 18 | Naturellement centrale. |
| Audit | 18 | Meilleure page receveuse ; cohérent avec le positionnement. |
| RC professionnelle | 13 | Très bien renforcée. |
| Assurances entreprises | 12 | Bon hub produit. |
| Multirisque | 11 | Bon niveau. |
| Flotte | 10 | Bon cluster et réciprocité avec le guide. |
| Transport | 9 | Bon niveau sectoriel. |
| Guide Audit | 8 | Très bon pour un guide récent. |
| BTP | 6 | Correct, à renforcer avec le futur guide validé. |
| Cyber | 5 | À renforcer modérément. |
| Cabinet | 5 | Correct pour une page de confiance. |
| Guide Flotte | 5 | Correct et réciproque. |
| Protection du dirigeant | 4 | Insuffisant au regard de sa profondeur. |
| Santé/Prévoyance | 4 | Insuffisant au regard de sa profondeur. |
| Secteurs | 4 | Hub accessible par navigation, faible contextualisation. |
| Convoyage | 4 | À renforcer depuis Transport et contenus associés. |
| Déménagement | 4 | À renforcer depuis Transport et contenus associés. |
| Guide RC | 4 | Réciprocité commerciale manquante. |
| Transport routier | 3 | Plus faible nombre de sources malgré un contenu stratégique. |

Aucune des 19 URL n’est orpheline. Les pages restent généralement accessibles en un ou deux niveaux grâce à la navigation globale et aux hubs.

### Anomalies et opportunités

1. **Guide RC non réciproque** : le guide renvoie vers `/rc-professionnelle/`, mais la page commerciale RC ne renvoie pas vers le guide publié. Un seul lien naturel dans « Poursuivre votre lecture » est recommandé.
2. **Pages humaines à faible renforcement** : Protection du dirigeant et Santé/Prévoyance ont seulement quatre sources contextuelles. Ajouter des liens depuis Cabinet, Assurances entreprises, Audit ou un futur contenu dirigeant lorsqu’ils sont utiles.
3. **Pages sectorielles profondes** : Transport routier n’a que trois sources distinctes ; Convoyage et Déménagement en ont quatre. Un lien contextuel depuis le hub Transport, le hub Secteurs et les guides concernés doit rester visible et descriptif.
4. **Hub Secteurs mince** : la page joue son rôle de distribution, mais son faible volume limite son autonomie sémantique. Avant enrichissement, vérifier si elle reçoit des impressions sur une intention générique.
5. **Hubs Ressources en `noindex, nofollow`** : ils ne peuvent pas jouer pleinement le rôle de hubs SEO. Les guides indexables restent découverts par le sitemap et les pages commerciales, mais une future décision devra choisir entre indexer un hub mature ou conserver `noindex` avec une politique de suivi adaptée. Toute évolution exige une validation explicite de la stratégie d’indexation.
6. **Liens vers pages volontairement noindex** : plusieurs pages indexables pointent vers les parcours « Votre besoin » et les hubs Ressources. Ces liens sont utiles au lecteur ; ils ne doivent pas être supprimés mécaniquement. Il faut seulement éviter que les seuls chemins vers un guide indexable passent par un hub `nofollow`.

### Plan d’amélioration du maillage

| Priorité | Action | Effort | Impact attendu |
|---|---|---:|---|
| P1 | Ajouter un lien contextuel de `/rc-professionnelle/` vers le guide RC | Très faible | Consolide le cluster et accélère la circulation entre intention commerciale et informationnelle. |
| P1 | Vérifier dans GSC les pages à impressions mais faible position, puis leur fournir 1 à 2 liens depuis les pages les plus pertinentes | Faible | Renforcement fondé sur la demande réelle. |
| P2 | Renforcer Transport routier, Convoyage et Déménagement depuis les contenus Transport réellement connexes | Faible | Meilleure compréhension du cocon sectoriel. |
| P2 | Renforcer Santé/Prévoyance et Protection du dirigeant depuis le futur parcours éditorial Dirigeants | Moyen | Rééquilibrage des pages actuellement moins soutenues. |
| P2 | Décider du statut futur des hubs Ressources | Moyen | Architecture éditoriale plus lisible pour les moteurs. |
| P3 | Auditer les ancres avec les requêtes Search Console | Faible | Variation naturelle et précision sémantique sans suroptimisation. |

## 9. Audit SEO local

### Cohérence observée sur `assuromieuxparis.com`

| Signal | État | Commentaire |
|---|---|---|
| Nom commercial | Cohérent | Assuromieux Paris / ASSUROMIEUX PARIS. |
| Personne | Cohérent | Jules HONORE. |
| Téléphone | Cohérent | 06 95 69 96 74. |
| Email | Cohérent | `jules@assuromieuxparis.com`. |
| Adresse | Cohérente sur le fond | 60 rue François-Ier, 75008 Paris ; variation typographique sans accent dans `site.ts`. |
| ORIAS | Cohérent sur le domaine principal | 26003798. |
| Zone | Cohérente | Paris, Île-de-France et accompagnement national. |
| Données structurées locales | Présentes | Organization, Person et LocalBusiness/InsuranceAgency sur l’accueil. |
| Google Business Profile | ND | Aucun accès propriétaire ni export du profil. |
| Avis Google | ND | Ne pas inventer de note ni de volume. |

### Risque critique : coexistence avec `assuromieux.fr`

Le réseau publie une [page Assuromieux Paris](https://www.assuromieux.fr/courtier-assurance-paris) visant la même marque, la même ville, le même interlocuteur, le même téléphone, le même email et les mêmes produits. Il publie aussi une [page Multirisque professionnelle Paris](https://www.assuromieux.fr/courtier-assurance-paris/assurance-multirisque-professionnelle-paris) qui concurrence directement `/multirisque-professionnelle/`.

Cette seconde page expose des signaux incompatibles avec les règles du site principal : ORIAS différent, statistiques et avis non documentés, promesses de délai, économies moyennes et formulations commerciales plus agressives. Même si ces pages relèvent du réseau, Google peut les associer à la même entité locale à cause du NAP et de Jules HONORE.

Risques :

- cannibalisation sur « courtier assurance Paris », « assurance entreprise Paris » et « multirisque professionnelle Paris » ;
- dilution du domaine canonique que le cabinet souhaite construire ;
- incohérence d’entité entre deux numéros ORIAS ;
- perte de confiance si un prospect compare les deux pages ;
- difficulté à attribuer le Google Business Profile au bon site web ;
- snippets de marque contrôlés par le réseau plutôt que par le domaine principal.

Décision recommandée : `assuromieuxparis.com` doit être le domaine SEO principal et unique d’Assuromieux Paris. Les pages Paris sur `assuromieux.fr` doivent devenir des fiches réseau concises pointant clairement vers le domaine principal, ou être redirigées en 301 vers les URL correspondantes après accord du réseau. Un canonical cross-domain est moins robuste qu’une 301 lorsque la page réseau n’a pas d’utilité autonome.

### Google Business Profile : contrôles à réaliser

1. confirmer le propriétaire et la catégorie principale exacte ;
2. utiliser le nom réel, sans ajout de mots-clés ;
3. utiliser `https://www.assuromieuxparis.com/` comme site principal ;
4. aligner téléphone, adresse et horaires avec les données publiques ;
5. ajouter le lien de rendez-vous Cal.com seulement dans le champ prévu ;
6. vérifier que la fiche réseau n’emploie pas une URL concurrente ;
7. publier des photos réelles du cabinet ou de l’environnement autorisé, jamais de faux visuels ;
8. demander des avis authentiques sans script imposé ni incitation ;
9. répondre aux avis en respectant la confidentialité ;
10. suivre appels, clics site et demandes d’itinéraire dans le tableau mensuel.

## 10. Audit EEAT

| Critère | Note /10 | Forces | Manques prioritaires |
|---|---:|---|---|
| Expertise | 8,5 | Pages détaillées, distinctions contractuelles prudentes, trois guides validés, expertise Transport/BTP/Flotte. | Sources primaires plus visibles sur certaines pages ; validation des trois guides restants. |
| Expérience | 4,5 | Méthode opérationnelle décrite, pièces et étapes concrètes. | Aucun cas réel documenté, extrait anonymisé de livrable ou retour d’expérience vérifiable. |
| Autorité | 4,5 | Identité réglementaire, réseau Assuromieux, présence LinkedIn publique. | Peu de publications externes, backlinks, citations professionnelles ou interventions signées. |
| Fiabilité | 8,5 | Mentions légales, ORIAS, SIREN/SIRET, auteur, dates de relecture, politique éditoriale, formulations prudentes. | Conflit d’informations sur `assuromieux.fr` ; Auteur et Politique éditoriale en noindex. |

Score EEAT global : **65/100**.

### Actions EEAT à fort impact

- publier une étude de cas réelle, anonymisée et autorisée, décrivant le contexte, les vérifications, les arbitrages et les limites, sans résultat inventé ;
- montrer un exemple anonymisé de grille ou de synthèse d’audit, si juridiquement et commercialement autorisé ;
- conserver les auteurs, dates de mise à jour et validations humaines sur chaque guide ;
- obtenir des citations et liens depuis partenaires réels : experts-comptables, avocats, fédérations, réseaux transport/BTP ;
- documenter les sources primaires en bas de guide ;
- décider humainement si `/jules-honore/` et `/politique-editoriale/` doivent devenir indexables une fois leur contenu définitivement validé ;
- aligner le réseau `assuromieux.fr` sur l’identité et les mentions réelles du cabinet.

## 11. Audit concurrentiel

La comparaison porte sur les sites officiels, pas sur un classement SERP mesuré.

| Concurrent | Structure et contenu observés | Force distinctive | Opportunité pour Assuromieux Paris |
|---|---|---|---|
| Verspieren | Hubs risques/produits, méthode en étapes, FAQ, contenus de prévention, livres blancs et cas clients. Voir [Risques en entreprise](https://www.verspieren.com/fr/entreprise/assurez-votre-entreprise/associations-fondations) et [Transport de marchandises](https://www.verspieren.com/fr/entreprise/assurez-votre-entreprise/transport-de-marchandises). | Profondeur produit, preuves chiffrées, cas clients, ressources. | Être plus clair et plus direct pour PME/TPE ; produire quelques preuves réelles plutôt qu’imiter le volume. |
| Filhet-Allard | Architecture par métiers, risques d’entreprise, protection sociale, transport, risk management, secteurs et actualités d’experts. Voir [l’accueil Filhet-Allard](https://www.filhetallard.com/) et les [expertises sectorielles](https://www.filhetallard.com/nos-expertises-sectorielles/). | Ancienneté, équipes, couverture internationale, prises de parole expertes. | Mettre en avant l’interlocuteur direct et l’analyse accessible ; signer et dater chaque expertise. |
| Gras Savoye / WTW | Conseil global, risques, capital humain, études et réseau international. Voir [WTW France](https://www.wtwco.com/fr-fr/about-us/overview). | Autorité de marque, recherche, implantation et grands comptes. | Ne pas rivaliser sur la largeur ; gagner sur la proximité, la pédagogie et l’utilité immédiate pour le dirigeant. |
| Marsh | Pages services/risques, Risk Consulting, Risk Analytics, nombreux rapports et contenus multi-formats. Voir [Marsh France](https://www.marsh.com/fr/locations/france.html) et [Analyse des risques](https://www.marsh.com/fr/services/risk-analytics.html). | Données, rapports, outils, couverture mondiale. | Développer des grilles pratiques et des cas réels à taille PME, plus directement actionnables. |
| Siaci Saint Honoré / Diot-Siaci | Groupe multi-spécialiste, IARD, transport, protection sociale, publications et livres blancs, expertise cyber. Un exemple est le rapport [Intelligence artificielle, risques et assurance](https://www.diot-siaci.com/wp-content/uploads/2025/04/IA_Risques-et-Assurance_Avril2025.pdf). | Expertise corporate, livres blancs, spécialistes, distribution externe. | Occuper les questions très concrètes des dirigeants et valoriser une ligne éditoriale plus lisible. |
| Bessé | Pages de méthode, secteurs très spécialisés, experts nommés, actualités, preuves métier et outils. Voir [Notre métier](https://www.besse.fr/fr/qui-sommes-nous/notre-metier), [L’expertise Bessé Conseil](https://www.besse.fr/fr/notre-approche/lexpertise-besse-conseil) et [Maritime et logistique](https://www.besse.fr/fr/vos-secteurs-dactivites/maritime-et-logistique). | Positionnement conseil affirmé, spécialisation sectorielle, expérience démontrée. | Renforcer les preuves d’expérience Transport tout en conservant un ton plus sobre et une cible PME. |

### Conclusion concurrentielle

Assuromieux Paris n’a pas intérêt à reproduire la couverture éditoriale de groupes nationaux ou mondiaux. Son espace stratégique est plus précis :

- interlocuteur direct identifié ;
- audit comme point d’entrée ;
- décisions d’assurance expliquées en langage dirigeant ;
- expertises Transport, Flotte et BTP concrètes ;
- contenus courts à moyens, mais denses ;
- capacité nationale depuis Paris ;
- prudence contractuelle et éditoriale visible.

Le principal écart concurrentiel ne concerne pas la longueur des pages : il concerne la preuve. Les concurrents exposent équipes, cas clients, études, chiffres, publications et retours d’expérience. Assuromieux Paris doit construire cette preuve progressivement à partir de dossiers réels.

## 12. Opportunités de contenus

Les opportunités sont classées en tenant compte du site existant. La priorité va à l’enrichissement ou à la validation d’actifs déjà créés avant l’ouverture de nouvelles routes.

### Priorité 1

| Contenu | Forme recommandée | Pourquoi | Dépendance |
|---|---|---|---|
| Cas réel d’audit Transport | Nouvelle étude de cas seulement si dossier réel autorisé | Renforce Expérience, Transport et Audit ; différenciation forte. | Accord client, anonymisation et validation métier. |
| Guide PME déjà existant | Valider puis publier l’existant | Soutient `/assurances-entreprises/` sans créer de route. | Relecture humaine et levée de `review-required`. |
| Guide Transport déjà existant | Valider puis publier l’existant après délai d’observation | Soutient Transport, Déménagement et Transport routier. | Avis transport spécialisé indispensable. |
| Guide BTP déjà existant | Valider puis publier l’existant | Soutient la page BTP/décennale. | Relecture spécialiste construction. |
| Exemple de grille d’audit | Enrichissement du guide Audit ou ressource téléchargeable légère | Rend la méthode tangible et convertible. | Validation du format réellement remis. |
| Checklist renouvellement assurance entreprise | D’abord une section/encadré du guide Audit | Intention utile, transverse, proche de la décision. | Vérifier la demande GSC avant route distincte. |

### Priorité 2

| Contenu | Forme recommandée | Pourquoi | Dépendance |
|---|---|---|---|
| Commissionnaire de transport | Nouvelle route possible | Intention et responsabilités distinctes du transporteur. | Données GSC + validation transport/juridique. |
| Assurance marchandises transportées | Nouvelle route possible | Intention commerciale propre et conflit fréquent avec RC transporteur. | Distinguer clairement du guide existant. |
| Flotte poids lourds | Enrichir d’abord Flotte/Transport | Potentiel sectoriel, mais risque de doublon. | Requêtes et impressions réelles. |
| RC Pro BTP | Enrichir d’abord BTP et RC | Croisement commercial cohérent. | Éviter cannibalisation avec deux pages piliers. |
| Réduire le coût de l’assurance professionnelle | Guide prudent | Demande probable, mais forte sensibilité aux promesses. | Cas réels, sources et langage non promotionnel. |
| Savoir si l’entreprise est correctement assurée | Enrichissement du guide Audit | Très cohérent avec la proposition de valeur. | Données GSC pour choisir l’angle. |

### Priorité 3

| Contenu | Forme recommandée | Pourquoi | Dépendance |
|---|---|---|---|
| RCMS | Page ou guide futur | Produit dirigeant stratégique. | Validation métier et demande mesurée. |
| Homme clé | Page ou guide futur | Complète Protection du dirigeant. | Séparer personne-clé, prévoyance et continuité. |
| Mutuelle entreprise | Guide futur | Soutient Santé/Prévoyance. | Forte concurrence ; besoin d’un angle décisionnel. |
| Prévoyance entreprise | Guide futur | Soutient Santé/Prévoyance. | Validation sociale/réglementaire. |
| Décennale par métier | Seulement métiers réellement servis | Potentiel longue traîne. | Interdire les pages locales/métiers faibles et répétitives. |
| Glossaire enrichi | Enrichir le lexique existant | Utile au maillage et à la pédagogie. | Décider si le hub mérite ensuite l’indexation. |

## 13. Les freins prioritaires

1. **Absence de données Search Console accessibles** : impossible de prioriser titres, pages et requêtes selon impressions/clics.
2. **Cannibalisation et incohérence d’entité avec `assuromieux.fr`** : risque SEO local, réglementaire et de confiance.
3. **Indexation très récente** : la majorité des pages commerciales a été ouverte le 25 juillet et deux guides le 31 juillet ; toute conclusion de performance serait prématurée.
4. **Autorité externe faible** : peu de liens, mentions, publications tierces et preuves sectorielles documentées.
5. **Expérience peu démontrée** : méthodologie décrite, mais sans cas réel ni exemple de résultat autorisé.
6. **Pages de confiance hors index** : Jules HONORE et Politique éditoriale renforcent l’EEAT humainement, mais pas directement dans les résultats de recherche.
7. **Hubs Ressources en `noindex, nofollow`** : architecture éditoriale visible aux utilisateurs mais moins efficace comme réseau de découverte SEO.
8. **Réciprocité manquante du guide RC** : petit défaut concret et rapide à corriger.
9. **Page Secteurs mince** : intention autonome à confirmer avant enrichissement.
10. **Double redirection HTTP apex** : coût technique faible, amélioration secondaire.

## 14. Priorisation des actions

| Rang | Action | Impact SEO | Effort | Décision humaine |
|---:|---|---|---|---|
| 1 | Exporter GSC : Performances, Indexation, Sitemap, CWV, HTTPS, améliorations | Très élevé | Faible | Accès Google requis |
| 2 | Décider du sort des pages Paris sur `assuromieux.fr` | Très élevé | Moyen | Accord du réseau requis |
| 3 | Aligner toutes les données réglementaires/NAP du réseau avec le cabinet | Très élevé | Moyen | Validation Jules + réseau |
| 4 | Inspecter les 19 URL dans GSC, en priorité les trois guides et les piliers | Élevé | Faible | Accès Google requis |
| 5 | Ajouter le lien réciproque RC commerciale → guide RC | Élevé | Très faible | Lot technique ultérieur |
| 6 | Établir le tableau de bord mensuel avec un état zéro daté | Élevé | Faible | Export requis |
| 7 | Auditer et normaliser le Google Business Profile | Élevé | Faible à moyen | Accès GBP requis |
| 8 | Produire un premier cas réel d’audit Transport | Élevé | Moyen | Autorisation et validation métier |
| 9 | Obtenir 3 à 5 liens/citations sectoriels réels | Élevé | Moyen à élevé | Relations partenaires |
| 10 | Valider les trois guides restants, un par un | Élevé | Moyen | Relecteurs spécialisés |
| 11 | Optimiser les titles uniquement sur pages à impressions/CTR faible | Moyen à élevé | Faible | Données GSC requises |
| 12 | Renforcer les liens entrants vers Transport routier, Santé et Protection | Moyen | Faible | Après lecture GSC |
| 13 | Décider du statut SEO des hubs Ressources | Moyen | Moyen | Arbitrage d’indexation |
| 14 | Décider du statut SEO de Jules HONORE et Politique éditoriale | Moyen | Faible | Arbitrage EEAT/indexation |
| 15 | Tester les données structurées dans Rich Results Test | Moyen | Faible | Aucun, lecture seule |
| 16 | Mesurer PSI/Lighthouse sur Accueil, produit, secteur et guide | Moyen | Faible | Aucun |
| 17 | Réduire la double redirection HTTP apex | Faible | Faible | Configuration Netlify/DNS |
| 18 | Normaliser la forme typographique de l’adresse | Faible | Très faible | Confirmer l’écriture officielle |
| 19 | Enrichir `/secteurs/` si les impressions confirment une intention | Moyen | Moyen | Données GSC requises |
| 20 | Créer de nouvelles routes seulement après preuve d’une demande distincte | Variable | Élevé | Validation éditoriale et métier |

## 15. Feuille de route 30 / 60 / 90 jours

### Jours 1 à 30 — mesurer et assainir

| Action | Livrable | Impact attendu |
|---|---|---|
| Export GSC complet et état zéro | Tableau pages/requêtes/indexation daté | Très élevé : rend toutes les décisions suivantes mesurables. |
| Inspection manuelle des 19 URL | Canonical Google, dernière exploration, statut réel | Élevé : détecte les écarts entre éligibilité et indexation. |
| Gouvernance `assuromieux.fr` | Décision 301, fiche réseau ou désindexation pour chaque page Paris | Très élevé : réduit cannibalisation et confusion de marque. |
| Audit Google Business Profile | NAP, catégorie, URL, avis, photos, services | Élevé sur le local. |
| Lien RC vers guide RC | Modification minimale dans un lot séparé | Moyen à élevé sur le cluster RC. |
| Baseline Core Web Vitals/PSI | 4 modèles de pages, mobile et desktop | Moyen : prévention des régressions. |

Objectif à 30 jours : disposer d’une vérité mesurée et d’un domaine Paris clairement prioritaire.

### Jours 31 à 60 — exploiter les premiers signaux

| Action | Livrable | Impact attendu |
|---|---|---|
| Analyse pages position 4–15 | Liste de quick wins par page/requête | Élevé. |
| Analyse impressions sans clic | Tests de titles/descriptions ciblés | Élevé si volume suffisant. |
| Premier cas réel autorisé | Étude de cas Audit/Transport | Élevé sur EEAT et conversion. |
| Validation d’un seul guide restant | Publication espacée et contrôlée | Moyen à élevé. |
| Liens internes guidés par GSC | 1–2 liens utiles vers les pages sous-soutenues | Moyen. |
| Premières citations partenaires | 2–3 liens ou mentions de qualité | Élevé sur autorité. |

Objectif à 60 jours : améliorer les pages déjà visibles plutôt que multiplier les URL.

### Jours 61 à 90 — consolider l’autorité

| Action | Livrable | Impact attendu |
|---|---|---|
| Comparaison 28 jours vs période précédente | Tendances impressions, clics et conversion | Élevé pour le pilotage. |
| Deuxième actif de preuve | Cas réel, grille ou publication experte | Élevé sur EEAT. |
| Décision Auteur/Politique éditoriale | Maintien noindex ou ouverture justifiée | Moyen. |
| Décision hubs Ressources | Architecture éditoriale cible | Moyen à élevé. |
| Sélection d’une nouvelle intention | Brief unique fondé sur requêtes et absence de doublon | Variable, mais maîtrisé. |
| Revue locale et citations | Cohérence NAP et progression de la présence locale | Moyen à élevé. |

Objectif à 90 jours : établir une boucle mensuelle durable « données → décision → modification limitée → mesure ».

## 16. Tableau de pilotage recommandé

À compléter chaque mois avec les exports Search Console et les conversions disponibles :

| Mois | URL indexées | URL non indexées inattendues | Impressions | Clics | CTR | Position moyenne | Demandes d’audit | Appels | Emails | Cal.com | Pages gagnantes | Requêtes gagnantes | Actions |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| État zéro — à renseigner | ND | ND | ND | ND | ND | ND | ND | ND | ND | ND | ND | ND | Export GSC/mesure requis |

### Seuils de décision

- ne pas modifier une page sans suffisamment d’impressions pour interpréter son CTR ;
- comparer le CTR à des positions comparables, pas au CTR global seul ;
- attendre au moins une fenêtre cohérente après publication avant de juger une URL ;
- traiter toute URL commerciale en `noindex`, canonical divergent ou redirection inattendue comme prioritaire ;
- enrichir une page existante avant de créer une page concurrente ;
- documenter chaque modification et mesurer son effet sur 28 jours.

## 17. Conclusion

Le site possède déjà un niveau éditorial et technique supérieur à ce que son jeune historique d’indexation permet probablement de refléter dans Google. Le frein immédiat n’est pas un manque de pages. Il est triple : manque de données accessibles, collision avec les pages Paris du réseau et manque de preuves externes.

La prochaine mission ne devrait donc pas être une nouvelle vague de contenus. Elle devrait être :

1. **collecte et intégration de l’export Search Console** ;
2. **plan de résolution URL par URL avec `assuromieux.fr`** ;
3. **quick wins mesurés**, à commencer par la réciprocité du guide RC et les pages réellement proches de la première page.

Une fois ces trois étapes réalisées, les guides déjà présents et validables offrent suffisamment de matière pour développer les clusters pendant plusieurs semaines sans créer de pages faibles.

