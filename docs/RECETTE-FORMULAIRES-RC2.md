# Recette formulaires — RC2

Date : 22 juillet 2026

## Résultat technique

| Contrôle | Résultat |
|---|---|
| Action POST | `https://formspree.io/f/mnjlwzlp`, inchangée |
| Champs obligatoires | prénom, nom, entreprise, email, téléphone |
| Champs facultatifs | besoin principal, message |
| Aides et labels | présents et reliés |
| Validation | `checkValidity()`, focus du premier champ invalide, message `aria-live` |
| Anti-spam | honeypot `_gotcha` présent |
| Succès/erreur | états distincts, bouton réactivé sur erreur |
| Repli sans JavaScript | POST HTML conservé; validation serveur nécessaire du fait de `novalidate` |
| Information RGPD | lien vers `/politique-confidentialite/` |
| Cal.com | affiché uniquement après réponse Formspree positive |

La recette navigateur locale confirme en outre : paramètre `?besoin=cyber` prérempli en « Cyberassurance », lien vers la politique autonome, refus d’un formulaire vide, focus replacé sur `contact-first-name`, état d’erreur annoncé et aucune soumission réseau. Aucun avertissement ni erreur console n’a été relevé pendant ce parcours.

## Préremplissage contrôlé

Les paramètres historiques et alias (`audit`, `audit-contrats`, `comparaison-assurances`, `creation-reprise`, `evolution-entreprise`, `flotte`, `assurer-flotte-vehicules`, `transport`, `transport-routier`, `convoyage`, `demenagement`, `cyber`, `sante-prevoyance`, `protection-dirigeant`) correspondent à une option visible et restent modifiables par l’utilisateur. Le stockage de session est tolérant à l’échec et supprimé après succès.

## Test réel

**Non exécuté.** Aucune URL de préproduction privée ni preuve de propriété du compte Formspree n’est disponible dans le dépôt. Envoyer une donnée, même synthétique, aurait créé un traitement externe non autorisé.

## Protocole de levée

1. confirmer propriétaire, destinataire, quota, anti-spam et domaines autorisés ;
2. valider la politique de confidentialité et les paramètres de rétention/transfert ;
3. sur préproduction privée, envoyer uniquement `TEST RC2` avec une adresse dédiée ;
4. constater réception, horodatage, tous les champs et absence de fuite ;
5. tester une erreur réseau contrôlée et un honeypot ;
6. supprimer le message de test de Formspree et de la boîte destinataire ;
7. archiver date, testeur et résultat sans donnée personnelle.

## Décision

Formulaire **techniquement validé sous réserve**, mais **bloquant pour ouverture publique** jusqu’à réussite du test réel et validation des paramètres RGPD.
