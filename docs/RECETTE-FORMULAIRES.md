# Recette des formulaires — RC1

Date : 22 juillet 2026. Aucun envoi réel n'a été effectué afin de ne pas transmettre de données à Formspree sans validation opérationnelle.

## Périmètre

Un seul formulaire public existe, sur l'accueil à l'ancre `/#contact`. Les autres routes redirigent vers ce formulaire, souvent avec le paramètre `?besoin=`. Cal.com est proposé après succès ; son URL n'a pas été modifiée.

## Contrôles réalisés

| Contrôle | Résultat | Statut |
|---|---|---|
| Action | `https://formspree.io/f/mnjlwzlp` | Conforme à la configuration existante, compte à confirmer |
| Méthode | POST | Conforme |
| Champs obligatoires | prénom, nom, entreprise, email, téléphone | Conforme |
| Champs facultatifs | besoin principal, message | Conforme |
| Labels | Associés aux contrôles | Conforme |
| Autocomplete | given-name, family-name, organization, email, tel | Conforme |
| Aides | Email, téléphone, message et champs requis | Conforme |
| Anti-spam | Honeypot `_gotcha` | Conforme, efficacité à confirmer côté Formspree |
| État asynchrone | `role="status"`, `aria-live="polite"` | Conforme |
| Préremplissage | `?besoin=creation-reprise` sélectionne « Création ou reprise d’entreprise » | Conforme |
| Confidentialité | Lien vers `#confidentialite` provisoire | Bloquant juridique |
| Cal.com | Ouverture externe après succès | Non testé, aucune soumission réelle |

## Parcours JavaScript

1. Le navigateur vérifie les champs et place le focus sur le premier champ invalide.
2. Le formulaire est transmis à Formspree avec `fetch`.
3. En cas de succès, le formulaire est masqué, un message est annoncé et le focus est déplacé vers son titre.
4. Un accès à Cal.com est alors proposé.
5. En cas d'erreur, un message explicite est annoncé dans la zone live.

Le comportement de repli sans JavaScript conserve un POST HTML vers Formspree. La présence de `novalidate` signifie toutefois que la validation native côté navigateur n'est pas garantie sans JavaScript ; la validation serveur Formspree doit donc rester active.

## Tests à exécuter avant GO

| ID | Test | Critère de validation | Dépendance |
|---|---|---|---|
| F-01 | Confirmer le propriétaire et le forfait du formulaire `mnjlwzlp` | Endpoint rattaché au bon compte, quota et destinataire validés | Assuromieux |
| F-02 | Envoyer une demande de test consentie | Email reçu, contenu complet, encodage correct, aucune fuite | F-01 + politique validée |
| F-03 | Tester chaque paramètre `besoin` | Valeur attendue sélectionnée et transmise | F-02 |
| F-04 | Provoquer une erreur contrôlée | Message d'erreur visible et annoncé, formulaire conservé | Environnement de test |
| F-05 | Vérifier l'anti-spam | Soumission honeypot rejetée ou filtrée | Accès Formspree |
| F-06 | Vérifier le parcours sans JavaScript | Demande reçue ou erreur serveur compréhensible | F-01 |
| F-07 | Vérifier Cal.com après succès | Lien exact, calendrier disponible, politique externe claire | Compte Cal.com |
| F-08 | Vérifier la rétention | Durée, destinataires, suppression et export documentés | Assuromieux + Formspree |

## Données et conformité

- Ne pas ajouter de case de consentement par défaut sans validation du fondement juridique ; une demande de contact peut relever d'une mesure précontractuelle ou d'un intérêt légitime selon le traitement réel.
- Le premier niveau d'information doit mentionner finalité, responsable, caractère obligatoire, destinataires et lien vers la politique complète.
- La politique complète doit couvrir Formspree et Cal.com, les transferts éventuels, la durée de conservation et les droits.
- Source de référence : [CNIL — droit d'être informé](https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-detre-informe-sur-lutilisation-de-vos-donnees).

## Verdict

**Fonctionnellement prêt sous réserve, opérationnellement non validé.** Le test réel Formspree et la politique de confidentialité sont des conditions bloquantes du GO.
