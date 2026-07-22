# Matrice de conversion — Parcours par besoin

Date : 22 juillet 2026

## Parcours et préremplissage

| Route | CTA principal | Paramètre non sensible | Valeur visible et modifiable dans le formulaire | Informations proposées au premier échange |
|---|---|---|---|---|
| Audit | `Demander une analyse de mes contrats` | `besoin=audit-contrats` | `Audit de contrats` | activité, contrat prioritaire, échéance |
| Comparaison | `Faire comparer ma situation` | `besoin=comparaison-assurances` | `Comparaison d’assurances` | périmètre, offres disponibles, date de décision |
| Création/reprise | `Présenter mon projet` | `besoin=creation-reprise` | `Création ou reprise d’entreprise` | activité, calendrier, moyens et exigences connues |
| Évolution | `Faire vérifier l’évolution de mon entreprise` | `besoin=evolution-entreprise` | `Évolution d’entreprise` | changement, date, contrats potentiellement concernés |
| Flotte | `Faire analyser mon parc automobile` | `besoin=flotte` | `Flotte automobile` | état de parc, usages, conducteurs, sinistralité |
| Transport | `Décrire mon activité de transport` | `besoin=activite-transport` | `Activité de transport` | opération type, rôle, biens, véhicules, territoires |

Le paramètre ne contient aucune identité, coordonnée, donnée contractuelle ou information confidentielle. Il choisit une option existante du formulaire générique. L’utilisateur peut la modifier avant envoi.

## Principes de conversion

- un CTA principal dans le hero et un rappel final ;
- un CTA secondaire orienté lecture ou préparation, jamais un second engagement concurrent ;
- pas de formulaire intermédiaire, de pop-in, de compte à rebours ou d’étape cachée ;
- collecte inchangée : prénom, nom, entreprise, email, téléphone, besoin et message libre, avec information de confidentialité ;
- Formspree conservé sans modification d’action ni de méthode ;
- Cal.com conservé dans les emplacements globaux existants ;
- aucun envoi automatique provoqué par le préremplissage.

## Décision et absence de promesse

Chaque parcours présente plusieurs issues possibles : maintien, avenant, ajustement, coordination, nouveau contrat ou consultation ciblée. Le changement d’assureur n’est jamais la conclusion imposée. Les textes excluent les garanties d’économie, d’acceptation, de couverture universelle et de résultat.

## Maillage de décision

- le hub permet de changer de point de départ sans revenir au menu principal ;
- les parcours voisins évitent les impasses lorsque le besoin initial est mal qualifié ;
- les liens produits apportent le niveau contractuel ;
- les ressources approfondissent une question sans allonger artificiellement la page ;
- les pages sectorielles ne sont proposées que lorsque l’activité modifie réellement la lecture.

## Critères de validation

1. les six paramètres sélectionnent l’option visible exacte ;
2. l’option reste modifiable au clavier et à la souris ;
3. aucune donnée supplémentaire n’est ajoutée à l’URL ;
4. les CTA mènent à `/#contact` sans redirection externe ;
5. le formulaire conserve son endpoint Formspree et son message d’information ;
6. les pages restent entièrement lisibles sans JavaScript ; seul le préremplissage automatique dépend du script existant.

## Mise à jour 7A

- le hub ne présente plus un CTA Audit concurrent des six choix : `Choisir ma situation` conduit à `#parcours` ;
- le CTA générique final `Décrire mon besoin` n’impose aucun préremplissage ;
- `Faire comparer ma situation` remplace toute formulation plus proche d’une promesse de comparaison de produits ;
- les CTA secondaires nomment désormais précisément leur destination ;
- aucun CTA ne promet devis, économie, acceptation, prix ou couverture ;
- les six préremplissages restent inchangés et la qualification ne repose pas uniquement sur eux.
- le bouton d’envoi générique `Envoyer ma demande` remplace le libellé Audit qui contredisait cinq des six préremplissages.

La matrice complète des positions, destinations, frictions et risques figure dans `RECETTE-CONVERSION-PARCOURS-BESOINS-APPROFONDIE.md`.
