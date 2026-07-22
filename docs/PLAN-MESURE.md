# Plan de mesure — Assuromieux Paris

Version RC1 du 22 juillet 2026. Aucun outil de mesure ni traceur n'est installé dans cette mission.

## Objectifs

1. Mesurer les demandes d'audit réellement qualifiées, pas seulement les clics.
2. Relier les canaux d'acquisition aux appels, emails, formulaires et rendez-vous.
3. Suivre la visibilité organique sans dégrader la confidentialité ni les performances.
4. Conserver une nomenclature stable et exploitable par une petite équipe.

## Conversions

| Niveau | Conversion | Signal | Priorité |
|---|---|---|---|
| Primaire | Formulaire envoyé avec succès | Événement après réponse positive Formspree | Haute |
| Primaire | Rendez-vous Cal.com confirmé | Webhook ou confirmation Cal.com, jamais simple clic | Haute |
| Primaire | Appel qualifié | Journal manuel/CRM ; tracking téléphonique seulement après décision | Haute |
| Primaire | Email qualifié | Journal manuel/CRM | Haute |
| Secondaire | Clic téléphone | `contact_phone_click` | Moyenne |
| Secondaire | Clic email | `contact_email_click` | Moyenne |
| Secondaire | Début de formulaire | `contact_form_start` sans contenu saisi | Moyenne |
| Secondaire | Clic Cal.com | `calendar_click` | Moyenne |
| Diagnostic | Parcours/produit consulté | Page et groupe de contenu | Faible |

## Nomenclature proposée

Événements en anglais, minuscules et stables : `contact_form_start`, `contact_form_submit`, `contact_form_error`, `contact_phone_click`, `contact_email_click`, `calendar_click`, `resource_read`, `product_cta_click`.

Paramètres non personnels : `page_path`, `content_group`, `cta_location`, `need_code`, `campaign_source`, `campaign_medium`, `campaign_name`. Ne jamais envoyer nom, email, téléphone, entreprise ou message dans un outil analytics.

## UTM

- `utm_source` : google, linkedin, brevo, lemlist, partenaire.
- `utm_medium` : organic, cpc, social, email, referral.
- `utm_campaign` : nom court, daté et documenté.
- `utm_content` : variante de message, si nécessaire.
- Conserver les UTM dans le formulaire seulement après validation RGPD et sans les exposer comme données personnelles.
- Tenir un registre partagé des valeurs autorisées pour éviter les doublons de casse et d'orthographe.

## Canaux

| Canal | Mise en œuvre recommandée | Condition préalable |
|---|---|---|
| Search Console | Vérification du domaine et sitemap filtré | GO indexation |
| GA4 | Optionnel ; plan de marquage minimal | Politique validée, consentement/CMP si requis |
| LinkedIn | UTM d'abord ; Insight Tag seulement si nécessaire | Consentement préalable et politique mise à jour |
| Brevo | Liens UTM et statut CRM | Contrat, base juridique et politique validés |
| Lemlist | Liens UTM et rapprochement CRM | Gouvernance de prospection validée |
| Téléphone | Saisie manuelle du canal au départ | Process commercial |
| Email | Saisie manuelle du canal au départ | Process commercial |
| Formulaire | Champs source/campagne et succès Formspree | Test réel et information RGPD |

## Tableau de bord minimal

Mensuellement : impressions/clics organiques, demandes par canal, taux demande → rendez-vous, rendez-vous → opportunité, pages d'entrée, requêtes principales, erreurs formulaire. Ne pas produire de statistiques commerciales publiques à partir de ces données sans validation.

## Vie privée

- Search Console peut être préparé sans déposer un traceur visiteur.
- Tout traceur non strictement nécessaire doit être bloqué avant consentement lorsque la réglementation l'exige.
- La CNIL rappelle les conditions strictes d'exemption de certaines mesures d'audience : [solutions pour les outils de mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience).
- Aucun outil ne doit être activé avant la mise à jour de la politique et la décision documentée sur le consentement.

## Ordre de mise en œuvre

1. Process CRM manuel et registre UTM.
2. Search Console après GO.
3. Mesure des succès Formspree/Cal.com côté outils, si possible sans traceur.
4. Décision séparée sur GA4 et LinkedIn.
5. Recette et documentation avant activation.
