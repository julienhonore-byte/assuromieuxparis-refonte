# Audit légal et réglementaire — RC1

Date : 22 juillet 2026. Ce document est un inventaire de conformité technique et documentaire, pas un avis juridique. Toute information non attestée est marquée **À fournir par Assuromieux**.

## Verdict

**Blocage de production.** Les ancres provisoires du footer ne constituent pas des mentions légales ni une politique de confidentialité complètes. Les informations réglementaires sont affichées et intégrées aux JSON-LD sans preuve de validation conservée dans le dépôt.

## État constaté

| Élément | Valeur actuellement affichée | État RC1 |
|---|---|---|
| Nom commercial | Assuromieux Paris | À confirmer |
| Nom / raison juridique | `ASSUROMIEUX PARIS` | À fournir par Assuromieux |
| Forme juridique | Non indiquée | À fournir par Assuromieux |
| SIREN | `489181032`, présenté comme numéro RCS | À confirmer sur justificatif officiel |
| SIRET | Non indiqué | À fournir par Assuromieux |
| RCS | « RCS de Paris sous le numéro 489181032 » | Formulation à valider |
| Adresse | 60 Rue Francois 1er, 75008 Paris, France | À confirmer et corriger typographiquement si validé |
| ORIAS | 26003798 | À confirmer sur attestation ORIAS en cours de validité |
| Statut d'intermédiaire | Référence à l'article L521-2.II.b | À valider par le conseil conformité |
| Directeur de publication | Absent | À fournir par Assuromieux |
| Contact de publication | Email et téléphone présents | À confirmer |
| Hébergeur | Netlify prévu, aucune mention complète | À fournir / confirmer après choix du compte et de l'entité contractante |
| Médiateur / réclamations | Absents | À fournir selon obligations applicables |
| RCP / garantie financière | Absentes | À fournir si applicable |
| TVA intracommunautaire | Absente | À fournir si applicable |

Une recherche publique non officielle corrobore certaines données, mais elle ne remplace pas un extrait officiel ni une validation interne. L'ORIAS n'a pas pu être attesté par une fiche officielle accessible pendant cette mission : conserver le statut « À confirmer ».

## Pages obligatoires manquantes

### Mentions légales

Créer une page autonome et validée contenant, selon la forme réelle et les obligations applicables : identité de l'éditeur, adresse, moyens de contact, immatriculation, capital si société, TVA si applicable, directeur de publication, hébergeur, propriété intellectuelle, responsabilité et informations réglementaires du courtier.

### Politique de confidentialité

Créer une page autonome accessible depuis l'accueil et le formulaire. Elle doit notamment préciser : responsable de traitement, finalités, bases juridiques, champs obligatoires, destinataires, Formspree et Cal.com, transferts éventuels, durées de conservation, droits, point de contact, réclamation CNIL et prospection éventuelle.

La CNIL rappelle qu'une politique accessible sous un intitulé clair doit expliquer comment et pourquoi les données sont utilisées et comment exercer les droits : [CNIL — droit d'être informé](https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-detre-informe-sur-lutilisation-de-vos-donnees). Le portail officiel Entreprendre indique qu'un formulaire peut comporter un premier niveau d'information renvoyant vers une page dédiée : [Obligations RGPD](https://entreprendre.service-public.fr/vosdroits/F24270).

## Cookies et stockage local

- Aucun outil analytics, pixel publicitaire ou CMP n'est installé.
- Le site utilise `sessionStorage` uniquement pour conserver temporairement le besoin sélectionné ; aucun profilage n'est observé.
- Aucun bandeau cookie n'est nécessaire uniquement « par principe » en l'absence de traceur soumis au consentement. La situation doit être réévaluée avant tout ajout de GA4, LinkedIn Insight Tag, Brevo, Lemlist ou autre traceur.
- La CNIL précise que les traceurs non strictement nécessaires doivent pouvoir être refusés et que l'exemption de mesure d'audience est soumise à des conditions strictes : [CNIL — cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi).

## Formspree et Cal.com

Pour chaque prestataire, Assuromieux doit documenter : compte contractant, finalités, rôle RGPD, données transférées, lieu d'hébergement, sous-traitants, durée de conservation, modalités de suppression, garanties de transfert hors EEE et lien vers les conditions applicables.

Cal.com n'est appelé qu'après action de l'utilisateur ; Formspree reçoit les données lors de l'envoi. La politique provisoire du footer ne couvre pas suffisamment ces traitements.

## Actions bloquantes

1. Fournir les justificatifs officiels de l'identité juridique, du SIREN/SIRET/RCS, de l'adresse et de l'ORIAS.
2. Faire valider la formulation réglementaire du statut de courtier, les obligations de conseil, la médiation, les réclamations, la RCP et la garantie financière.
3. Fournir le directeur de publication et les coordonnées légales de l'hébergeur.
4. Rédiger et valider les mentions légales et la politique de confidentialité.
5. Valider le premier niveau d'information du formulaire et les conditions Formspree/Cal.com.
6. Corriger les JSON-LD et le footer seulement après validation des valeurs.

## Décision

Tant que ces six actions ne sont pas closes par une preuve conservée dans `docs/`, la publication est **NO GO**.
