# Itération accueil 02 — Positionnement et rythme éditorial

Date : 21 juillet 2026

Point de comparaison : commit `c99c0cd`, première page d'accueil premium validée.

## 1. Objectif

La première version installait correctement le design system, mais la succession de cartes et la place du grand bloc transport pouvaient suggérer une spécialisation dominante. Cette itération conserve l'identité visuelle et réorganise le discours autour de trois priorités : vision globale de l'entreprise, méthode d'audit et accompagnement du dirigeant.

Répartition visée :

- 50 % assurances entreprises et approche globale ;
- 25 % audit, analyse et conseil ;
- 15 % expertises transport/logistique et BTP ;
- 10 % cabinet, Paris et ressources.

## 2. Comparaison des titres de hero

### Proposition 1

`Vos assurances d'entreprise méritent une stratégie, pas un simple renouvellement.`

Atouts : conserve la filiation avec le titre validé, oppose clairement stratégie et automatisme, reste centré sur l'entreprise et installe le rôle de conseil.

Vigilance : titre long, qui demande un contrôle précis des retours de ligne sur mobile.

### Proposition 2

`Nous analysons vos risques avant de vous proposer une assurance.`

Atouts : concrète, directe et très lisible. Elle met l'analyse en premier.

Vigilance : formulation plus commerciale et plus proche d'une promesse de processus ; elle réduit la dimension d'optimisation d'un programme existant.

### Proposition 3

`Reprendre le contrôle de vos assurances d'entreprise.`

Atouts : courte, orientée dirigeant et facilement mémorisable.

Vigilance : plus générique et moins spécifique à la méthode du cabinet.

### Choix appliqué

La proposition 1 est retenue. Elle est la plus cohérente avec le design éditorial et le positionnement de cabinet de conseil. Le sous-titre explicite le processus : activité, contrats et risques sont étudiés avant la consultation du marché et la recommandation.

## 3. Modifications apportées

### Hero

- remplacement de « méritent mieux » par l'opposition plus stratégique « méritent une stratégie » ;
- sous-titre rendu plus concret, sans accumulation de verbes marketing ;
- repères remplacés par « vision globale », « conseil au dirigeant » et « Paris & France entière » ;
- composition graphique renommée autour de comprendre, analyser, arbitrer et suivre.

### Assurances entreprises

- remontée immédiatement après la zone de confiance ;
- remplacement du simple bloc de publics par une cartographie du programme : responsabilités, biens, mobilité, équipes, dirigeant, numérique et continuité ;
- double parcours vers la page Assurances entreprises et la page Audit.

### Constat

- passage de six cartes à trois signaux courts ;
- suppression des répétitions autour des exclusions, du temps et de la fragmentation ;
- maintien uniquement des déclencheurs les plus structurants : activité, empilement et coûts.

### Expertises

- conservation des neuf domaines ;
- création de deux niveaux visuels et sémantiques ;
- sept offres transversales placées en premier ;
- transport/logistique et BTP/décennale présentés dans deux panneaux sectoriels distincts ;
- chaque destination active renvoie vers une page ou une ancre existante.

### Méthode

- maintien des six étapes, devenues l'axe central après l'offre globale ;
- ajout d'une preuve de méthode présentant cartographie, diagnostic et recommandation ;
- formulation prudente : aucun résultat économique ou assurantiel n'est promis.

### Cabinet et humanisation

- ajout d'une section « Le cabinet » ;
- intégration initiale d'un emplacement CSS pour le futur portrait de Jules Honoré, supprimé depuis par la décision validée dans l'itération Homepage 03 ;
- présentation volontairement factuelle et provisoire ;
- fusion de l'ancrage parisien et de l'intervention nationale dans cette section ;
- création de la page `/cabinet/` pour développer le rôle du cabinet.

### Ressources et FAQ

- ressources conservées en trois cartes mais réorientées vers l'approche globale ;
- FAQ réduite de huit à cinq questions prioritaires ;
- réponses clarifiant que le cabinet n'est pas exclusivement spécialisé dans le transport.

## 4. Sections déplacées ou regroupées

- le grand bloc Transport de l'accueil est remplacé par un panneau sectoriel et développé sur `/assurance-transport/` ;
- le bloc Paris autonome est intégré à la section Cabinet ;
- les trois cas pratiques sont retirés de l'accueil pour éviter une nouvelle séquence de cartes ; la logique de restitution est couverte par la preuve de méthode et les pages internes ;
- le détail des difficultés et documents d'audit est déplacé vers `/audit-assurances-entreprise/` ;
- le détail des protections est déplacé vers `/assurances-entreprises/`.

## 5. Enrichissements visuels

- formes plus organiques dans le hero et les placeholders ;
- cartographie circulaire du programme d'assurances ;
- panneaux sectoriels de grande taille au lieu de cartes identiques ;
- preuve de méthode sous forme de trois documents décalés ;
- effets hover limités à l'élévation et à un déplacement de 3 à 5 px ;
- toutes les transitions sont neutralisées par `prefers-reduced-motion`.

## 6. Différences avec la version précédente

| Sujet | Version 01 | Itération 02 |
|---|---|---|
| Promesse | Optimiser et comparer | Construire une stratégie d'assurance |
| Ordre | Constat puis expertises | Vision globale puis constat réduit |
| Transport | Grande section dédiée | Un des deux secteurs de niveau 2 |
| Expertises | Neuf cartes uniformes | Sept offres transversales + deux panneaux sectoriels |
| Cabinet | Ancrage Paris abstrait | Section humaine et page Cabinet |
| Preuve | Trois cas pratiques | Livrable méthodologique sans résultat inventé |
| Parcours | Ancres temporaires | Cinq pages internes actives |

## 7. Points restant à valider

1. Portrait professionnel, photographie du cabinet et visuels sectoriels.
2. Formulation définitive de la présentation de Jules Honoré.
3. Validation métier des textes des cinq pages internes.
4. Coordonnées, ORIAS, RCS et formulation réglementaire.
5. Domaine canonique avant ouverture de l'indexation.
6. Pages légales définitives et traitement Formspree/Cal.com.
7. Futures pages RC Pro, flotte, cyber, santé/prévoyance et protection du dirigeant.
