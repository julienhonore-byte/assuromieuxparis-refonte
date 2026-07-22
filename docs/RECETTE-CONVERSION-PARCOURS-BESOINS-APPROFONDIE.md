# Recette conversion approfondie — Parcours par besoin

Date : 22 juillet 2026
Statut : conforme en prévisualisation locale, sous les décisions métier indiquées

## Revue par parcours

| Parcours | Cible et compréhension | Objection traitée | CTA | Friction | Préremplissage | Documents demandés | Maillage | Conversion principale / secondaire | Anomalie et correction | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| Hub | Dirigeant qui connaît sa situation mais pas le produit ; six choix visibles immédiatement | Tous les besoins ne nécessitent pas un audit | `Choisir ma situation` | Faible | Aucun sur le choix ; aucun Audit imposé au besoin libre | Aucun | Six parcours, puis produits/BTP/dirigeant/ressources | Choix du parcours / description libre finale | CTA Audit trop précoce et deux H2 avec le même identifiant : corrigés | Validée pour préproduction |
| Audit | Entreprise avec contrats accumulés, changement, sinistre ou échéance | Un audit n’oblige ni à changer ni à économiser | `Demander une analyse de mes contrats` | Modérée et justifiée | `Audit de contrats` | Pièces proposées après cadrage | Pilier Audit, Assurances entreprises, RC, deux guides | Cadrage / préparation des pièces | Clarification absente des issues : ajoutée | Validée sous réserve mineure |
| Comparaison | Dirigeant avec renouvellement, hausse ou proposition concurrente | Prix inférieur et intitulé proche ne suffisent pas | `Faire comparer ma situation` | Modérée : il faut disposer de documents comparables | `Comparaison d’assurances` | Contrat actuel, proposition, activité, sinistralité, après cadrage | Quatre produits, guide Audit, parcours voisins | Comparaison / compréhension de la méthode | CTA secondaire imprécis et obligations peu visibles : corrigés | Validée sous réserve mineure |
| Création/reprise | Créateur avant ou après immatriculation, ou repreneur | Pas de liste universelle, de placement garanti ni de continuité automatique | `Présenter mon projet` | Modérée : projet parfois incomplet | `Création ou reprise d’entreprise` | Informations générales d’abord, pièces selon l’avancement ensuite | Pilier, RC, multirisque, dirigeant, deux guides | Présentation du projet / préparation | Exigences, accompagnement avant démarrage et continuité de reprise précisés après validation humaine | Validée sous réserve mineure pour préproduction |
| Évolution | Entreprise dont activité, moyens ou organisation changent | Tout changement ne crée pas un nouveau contrat | `Faire vérifier l’évolution de mon entreprise` | Faible à modérée | `Évolution d’entreprise` | Avant/après et pièces concernées seulement | Audit, pilier, multirisque, flotte, deux guides | Description du changement / inventaire | Absence de modification et plusieurs situations non explicites : corrigées | Validée sous réserve mineure |
| Flotte | Entreprise qui structure ou renouvelle son parc | Ni seuil, ni contrat unique, ni conducteur ou objet automatiquement couvert | `Faire analyser mon parc automobile` | Modérée : état de parc requis | `Flotte automobile` | Parc, usages, conducteurs, territoires, mouvements et sinistres | Produit Flotte, Audit, RC, multirisque, deux guides | Analyse du parc / préparation de l’état | Regroupement, éligibilité, convoyage et protection juridique insuffisamment explicites : corrigés | Validée sous réserve mineure |
| Transport | Entreprise qui doit qualifier une opération ou plusieurs activités | Il n’existe pas une assurance transport unique | `Décrire mon activité de transport` | Modérée : opération type nécessaire | `Activité de transport` | Opérations, rôle, biens, véhicules, territoires, sous-traitance et sinistralité | Hub Transport, Flotte, RC, Audit, trois verticales, deux guides | Qualification / orientation sectorielle | Compte propre, logistique, frais et territorialité incomplets ; identifiant des deux blocs liés dupliqué : corrigés | Validée sous réserve mineure |

## Matrice détaillée des CTA

| Route | CTA principal | CTA secondaire | Position | Destination | Préremplissage | Friction | Risque de confusion | Décision |
|---|---|---|---|---|---|---|---|---|
| Hub | `Choisir ma situation` | Aucun dans le hero | Hero | `#parcours` | Aucun | Nulle | Faible après correction | Confirmé |
| Hub | `Décrire mon besoin` | `Comprendre la méthode` | Fin | `/#contact` / `/audit-assurances-entreprise/` | Aucun | Faible | Ne force plus Audit | Corrigé |
| Audit | `Demander une analyse de mes contrats` | `Voir les documents utiles` | Hero et fin | `/?besoin=audit-contrats#contact` / `#documents` | Audit de contrats | Faible | Aucun résultat promis | Confirmé |
| Comparaison | `Faire comparer ma situation` | `Voir les critères de comparaison` puis `Comprendre la méthode` | Hero / fin | formulaire / `#comparaison` / Audit | Comparaison d’assurances | Modérée | Ne promet pas une offre | Corrigé puis confirmé |
| Création/reprise | `Présenter mon projet` | `Préparer les informations` | Hero et fin | formulaire / `#informations` | Création ou reprise d’entreprise | Faible | Ne présume aucune obligation | Confirmé |
| Évolution | `Faire vérifier l’évolution de mon entreprise` | `Identifier les changements` ou `Voir les éléments utiles` | Hero / fin | formulaire / ancres | Évolution d’entreprise | Faible | Ne promet pas un avenant | Confirmé |
| Flotte | `Faire analyser mon parc automobile` | `Préparer l’état du parc` | Hero et fin | formulaire / `#parc` | Flotte automobile | Modérée | Ne promet ni regroupement ni acceptation | Confirmé |
| Transport | `Décrire mon activité de transport` | `Qualifier les opérations` ou `Voir les contrats à articuler` | Hero / fin | formulaire / ancres | Activité de transport | Modérée | Ne devient pas un devis Transport | Confirmé |

## Proportion des informations demandées

| Étape | Informations appropriées | Informations à différer |
|---|---|---|
| Premier contact | Activité, situation, échéance, priorité, coordonnées et message libre | Contrats complets, sinistralité détaillée, listes nominatives, données confidentielles |
| Cadrage | Périmètre, contrats concernés, documents disponibles, interlocuteurs et calendrier | Pièces sans rapport avec le périmètre retenu |
| Analyse | Conditions, avenants, inventaires, historique utile et éléments opérationnels nécessaires | Données personnelles ou sensibles non nécessaires |

Le formulaire générique ne collecte pas les listes documentaires des pages. Elles servent à préparer l’échange et sont explicitement conditionnées au périmètre.

## Résultats techniques de conversion

- six paramètres non sensibles contrôlés avec leur libellé exact ;
- sélecteur modifiable après chargement ;
- endpoint Formspree et méthode `POST` inchangés ;
- bouton d’envoi générique `Envoyer ma demande`, cohérent avec les six valeurs ;
- aucun envoi réel ;
- qualification maintenue par le message libre et le cadrage humain ;
- contenu principal présent dans le HTML statique sans JavaScript ; le préremplissage automatique constitue une amélioration progressive.

## Recette UX et accessibilité

- 49 combinaisons contrôlées : sept routes à 320, 375, 390, 768, 1024, 1280 et 1440 px ;
- aucun débordement horizontal, H1 multiple, repère manquant ou identifiant dupliqué après correction ;
- menu mobile : ouverture, focus sur le premier lien, fermeture par Échap et retour du focus conformes ;
- CTA global du hub aligné sur `Choisir ma situation` dans le header et la barre fixe mobile ;
- aperçu mobile contrôlé ; à 768 px, hero replié sur une colonne et checklist maintenue sur deux colonnes sans collision ;
- associations de couleurs inchangées et ratios des tokens utilisés compris entre 4,92:1 et 17,17:1 ;
- aucune erreur d’exécution visible pendant les interactions ; les journaux de build sont exempts d’erreur.
