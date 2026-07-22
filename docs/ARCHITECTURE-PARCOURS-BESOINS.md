# Architecture des parcours par besoin

Date : 22 juillet 2026
Statut : revu en Mission 7A, prévisualisation et indexation bloquée

## Rôle dans le site

Le répertoire `/votre-besoin/` offre un point d’entrée fondé sur la situation du dirigeant. Il ne remplace ni les pages produits, qui expliquent un objet d’assurance, ni les pages sectorielles, qui décrivent une activité, ni les guides, qui répondent à une question informationnelle.

Chaque parcours suit la même logique : **point de départ → situation → vérifications → décision → accompagnement**. Cette identité rend la navigation prévisible sans transformer les pages en tunnel commercial.

## Arborescence

| Route | Point de départ | Destination principale |
|---|---|---|
| `/votre-besoin/` | Le dirigeant connaît sa situation, pas nécessairement le produit | Sélection d’un des six parcours |
| `/votre-besoin/auditer-mes-assurances/` | Contrats à relire ou échéance à préparer | Cadrage d’un audit |
| `/votre-besoin/comparer-mes-assurances/` | Offres ou renouvellement à comparer | Comparaison homogène et décision documentée |
| `/votre-besoin/creer-reprendre-entreprise/` | Création ou reprise à assurer | Programme initial ordonné selon le projet |
| `/votre-besoin/entreprise-evolue/` | Activité, moyens ou organisation qui changent | Identification des contrats et déclarations concernés |
| `/votre-besoin/assurer-flotte-vehicules/` | Parc automobile à structurer ou revoir | Analyse du parc, des usages et de son administration |
| `/votre-besoin/assurer-activite-transport/` | Activité de transport à qualifier | Articulation des responsabilités, biens, véhicules et continuité |

Aucun parcours BTP autonome n’est créé. Le hub peut orienter vers `/assurance-btp-decennale/`, qui conserve l’intention existante.

## Composants communs

- `NeedHero.astro` : fil d’Ariane, H1, promesse, CTA et repère visuel des cinq étapes ;
- `NeedPath.astro` : séquence chronologique propre à la situation ;
- `NeedChecklist.astro` : vérifications ou documents en blocs lisibles ;
- `NeedDecision.astro` : décisions possibles sans pousser au changement systématique ;
- `NeedNavigation.astro` : passerelles éditoriales vers les parcours voisins ;
- `src/data/needs.ts` : source unique des six destinations et de leurs paramètres de formulaire.

Les composants existants `FAQ`, `RelatedLinks`, `RelatedResources`, `PageCTA`, `SectionHeader` et `SiteLayout` sont réutilisés. Aucune dépendance n’est ajoutée.

## Frontières éditoriales

- **Parcours** : part d’un événement ou d’une situation et conduit à une décision.
- **Produit** : explique les risques et points de contrat associés à une famille d’assurance.
- **Secteur** : montre les interfaces propres au déroulement d’un métier.
- **Guide** : approfondit une question précise et durable.
- **Formulaire** : recueille uniquement les informations générales existantes ; le besoin est visible et modifiable.

La page Transport présente exceptionnellement trois liens sectoriels — TRM, Convoyage et Déménagement — car sa fonction explicite est de qualifier entre ces trois activités déjà publiées. Aucune autre destination sectorielle n’y est ajoutée et les autres parcours restent sous la limite de deux liens sectoriels.

## Navigation et maillage

Le menu principal n’est pas alourdi. Une entrée `Votre besoin` est ajoutée au footer. L’accueil, les pages Audit, Assurances entreprises, Transport, Flotte, les trois verticales Transport et le centre de ressources disposent d’un lien contextuel vers le hub ou le parcours pertinent.

Chaque page enfant contient :

- deux à quatre liens vers des pages produits ou méthodes ;
- une à deux ressources éditoriales ;
- deux ou trois parcours voisins ;
- un CTA principal vers le formulaire existant ;
- un CTA secondaire de lecture interne.

## Contraintes permanentes

- aucune promesse d’économie, d’acceptation, de couverture exhaustive ou de résultat ;
- aucun seuil universel inventé pour la flotte ;
- aucune collecte sensible dans la chaîne de requête ;
- aucune page locale, BTP ou sectorielle supplémentaire ;
- aucune modification de Formspree, Cal.com, `robots.txt`, du blocage `noindex` ou des références de production ;
- aucun déploiement dans ce lot.

## Revue 7A

- le hero du hub oriente désormais vers les six situations avant toute conversion ;
- le besoin libre conduit au formulaire sans imposer le préremplissage Audit ;
- les deux instances de navigation du hub et les deux blocs de liens Transport utilisent des identifiants accessibles distincts ;
- le CTA global du header et le CTA fixe mobile du hub reprennent `Choisir ma situation` au lieu de concurrencer l’orientation ;
- Audit ajoute la clarification d’un contrat parmi les résultats possibles ;
- Comparaison explicite les obligations et conserve le maintien du contrat comme issue ;
- Création/reprise sépare les catégories d’exigences et distingue les informations initiales des pièces ultérieures ;
- Évolution inclut explicitement l’absence de modification et exclut tout délai universel ;
- Flotte sépare regroupement, conducteurs, véhicules, territoires et objets transportés ;
- Transport conserve son rôle d’orientation et reprend les objets validés en 6A/6B.

Les statuts détaillés figurent dans `DECISION-PREPRODUCTION-PARCOURS-BESOINS.md`. Aucune route n’a été ajoutée.
