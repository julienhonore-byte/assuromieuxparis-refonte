# Validation des pages légales — RC2

Date : 22 juillet 2026

Statut : **créées et techniquement validées, contenu réglementaire à compléter**.

## Pages créées

| Route | Objet | État |
|---|---|---|
| `/mentions-legales/` | Éditeur, direction de publication, activité réglementée, hébergeur, propriété intellectuelle, portée des informations | **Validé sous réserve** |
| `/politique-confidentialite/` | Responsable, formulaire, prestataires, stockage de session, droits, mise à jour | **Validé sous réserve** |

Les deux pages utilisent exclusivement la formule `A fournir par Assuromieux` quand une donnée non attestée manque. Elles contiennent un avertissement de préproduction explicite. Elles héritent du `noindex, nofollow` global.

## Contrôles réalisés

- title, meta description, canonical et H1 propres ;
- fil d’Ariane et structure H2/H3 cohérents ;
- lien permanent depuis toutes les pages via le footer ;
- lien de second niveau depuis le formulaire vers la politique ;
- aucune valeur SIREN, SIRET, RCS, ORIAS, forme, capital, médiateur ou durée inventée ;
- aucun chargement automatique de Formspree, Cal.com ou Netlify ;
- absence de cookie publicitaire ou de mesure dans la version contrôlée ; seul le stockage de session fonctionnel du besoin est décrit ;
- source CNIL officielle pour la voie de réclamation.

## Données bloquantes

Restent à fournir : identité juridique complète, directeur de publication, identité/coordonnées d’hébergement, statut et catégorie d’intermédiation, ORIAS attesté, réclamations et médiation, responsable de traitement, base juridique, destinataires, conservation, transferts éventuels et contact d’exercice des droits.

Les valeurs présentes ailleurs dans `src/data/site.ts` n’ont pas été considérées comme attestées. Elles devront être rapprochées des justificatifs avant toute publication.

## Conditions générales d’utilisation

Aucune page de CGU n’est créée. Pour le site vitrine statique actuel, sans compte ni service contractuel en ligne, elle n’est pas nécessaire à la levée des blocages identifiés. Cette décision devra être revue si un espace client, un service transactionnel ou des fonctionnalités contributives sont ajoutés.

## Références officielles de cadrage

- Service Public Entreprendre, mentions légales et identification de l’éditeur/hébergeur : <https://entreprendre.service-public.fr/P10025> ;
- CNIL, information lors de la collecte : <https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel> ;
- CNIL, article 13 du RGPD : <https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3>.

Ces références ne remplacent pas une validation juridique adaptée à la structure réelle du cabinet.
