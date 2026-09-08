# Mission 99 — Tracking commercial, conversions et attribution SEO

Date du contrôle local : 7 septembre 2026
Périmètre : instrumentation interne GA4 et formulaire, sans modification distante de GA4, sans envoi Formspree réel.

## 1. Tracking avant Mission 99

| Événement | Déclencheur existant | Composant | Paramètres principaux | Consentement | État avant | Risque de doublon |
|---|---|---|---|---|---|---|
| `quote_start` | CTA vers `#contact` avec `intent=quote` | délégation globale | page, emplacement, produit | requis | opérationnel | faible |
| `audit_start` | CTA vers `#contact` avec `intent=audit` | délégation globale | page, emplacement, produit | requis | opérationnel | faible |
| `form_start` | première interaction avec le formulaire | `ContactForm` | formulaire, emplacement, produit | requis | opérationnel, garde locale | faible |
| `form_error` | validation, réponse serveur ou réseau | `ContactForm` | formulaire, type d’erreur | requis | opérationnel | validation regroupée par cycle |
| `generate_lead` | réponse HTTP Formspree réussie | `ContactForm` | formulaire, type de lead, produit | requis | logique correcte mais contexte d’attribution incomplet | garde locale présente |
| `whatsapp_click` | clic sur le contact flottant | délégation globale | page, emplacement, contexte | requis | opérationnel sous consentement ; l’absence observée peut aussi signifier zéro clic consenti | faible |
| `click_phone` | lien `tel:` | délégation globale | page, emplacement | requis | événement existant mais nomenclature non conforme | faible |
| `click_email` | lien `mailto:` | délégation globale | page, emplacement | requis | événement existant mais nomenclature non conforme | faible |
| `booking_start` | lien Cal.com | délégation globale | page, emplacement | requis | ne prouve pas un rendez-vous ; nom ambigu | faible |

Un seul formulaire applicatif est utilisé : `ContactForm.astro`, action `https://formspree.io/f/mnjlwzlp`, méthode POST AJAX, validation HTML native, états chargement/succès/erreur et lien Cal.com affiché après succès. Aucun envoi automatique ni redirection Formspree.

Le constat GA4 `form_start`/`quote_start` sans `generate_lead` ne prouvait pas un défaut unique : abandon, refus/absence de consentement, erreur réseau/Formspree, ou lead reçu par un autre canal restent possibles. La garde `response.ok` était déjà correcte ; le manque principal était l’attribution exploitable et homogène.

## 2. Architecture après Mission 99

L’instrumentation demeure centralisée dans `src/lib/analytics.ts`. Les clics sont observés par un seul listener délégué. Le formulaire appelle la même API interne. Le tag Google reste chargé uniquement sur les hôtes de production après consentement.

| Événement | Déclencheur exact | Consentement | Paramètres autorisés | Anti-doublon |
|---|---|---|---|---|
| `generate_lead` | uniquement après `fetch` et `response.ok` | oui | page, landing page, formulaire, lead, intention, produit, UTM | `successTracked` |
| `whatsapp_click` | clic volontaire sur le lien WhatsApp | oui | page, landing page, emplacement, contexte, intention, UTM | listener global unique |
| `phone_click` | clic sur `tel:` | oui | page, landing page, emplacement, contexte, intention, UTM | listener global unique |
| `email_click` | clic sur `mailto:` | oui | page, landing page, emplacement, contexte, intention, UTM | listener global unique |
| `appointment_click` | clic vers Cal.com | oui | page, landing page, emplacement, contexte, intention, UTM | listener global unique |
| `quote_start` | CTA de devis réellement activé | oui | page, landing page, emplacement, produit, contexte, UTM | listener global unique |
| `audit_start` | CTA d’audit réellement activé | oui | page, landing page, emplacement, produit, contexte, UTM | listener global unique |
| `form_start` | première interaction avec le formulaire | oui | page, landing page, formulaire, intention, produit, UTM | garde `formStarted` |
| `form_error` | erreur de validation, serveur ou réseau | oui | formulaire, type d’erreur | regroupement des erreurs de validation |

Les anciennes appellations `click_phone`, `click_email` et `booking_start` deviennent respectivement `phone_click`, `email_click` et `appointment_click`. Aucun événement distinct de rendez-vous confirmé n’est émis.

## 3. Nomenclature commerciale

`product_context` accepte uniquement :

`decennale`, `rc-pro`, `transport`, `flotte`, `cyber`, `multirisque`, `sante`, `prevoyance`, `dirigeant`, `audit`, `assurances-entreprises`, `generic`.

Les alias historiques et les chemins sont normalisés au moment du tracking. Les intentions sont : `quote`, `audit`, `contact`, `appointment`, `whatsapp`, `phone`, `email`.

## 4. Paramètres autorisés et PII interdites

Paramètres autorisés selon l’événement : `page_path`, `page_title`, `landing_page`, `form_name`, `form_id`, `form_location`, `lead_type`, `insurance_product`, `product_context`, `intent`, `cta_location`, `link_location`, `traffic_source`, `traffic_medium`, `traffic_campaign`, `utm_content`, `utm_term`, `error_type`.

Sont interdits : nom, prénom, e-mail, téléphone, adresse, entreprise identifiable, message libre, SIREN et toute donnée personnelle. Une valeur contenant `@` est rejetée ; chemins, codes internes et longueurs sont filtrés. Le numéro, l’adresse e-mail et le contenu libre ne sont jamais lus par le module analytics.

## 5. Consentement et attribution

Sans consentement, les formulaires et liens WhatsApp, téléphone, e-mail et Cal.com conservent leur comportement natif ; aucun événement GA4 n’est transmis. Après consentement, le tag existant `G-WWMFCQF196` est chargé et les événements deviennent éligibles.

La première page utile et les UTM présents (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) sont conservés dans `sessionStorage` seulement après consentement. `landing_page` reste distinct de la page de conversion. Aucune source n’est inventée et l’attribution native GA4 n’est pas remplacée. Limite assumée : si le consentement est accordé après plusieurs navigations, la première page mémorisable est la page du consentement, afin de ne rien stocker à finalité analytics avant accord.

## 6. Anti-doublon et debug

Un seul listener délégué couvre les liens. `form_start` et `generate_lead` possèdent chacun une garde par instance de formulaire. Les erreurs de validation simultanées sont regroupées. Le debug n’est actif qu’en développement : il expose l’événement, les paramètres nettoyés, l’état du consentement et l’état de transmission, via une trace de développement et l’événement DOM `assuromieux:analytics-debug`. Aucun debug n’est affiché en production.

## 7. Tests locaux

Les scénarios à valider sans lead réel sont :

- succès Formspree simulé : un seul `generate_lead` après réponse OK ;
- erreur serveur/réseau simulée : zéro `generate_lead`, un `form_error` ;
- validation front-end : zéro `generate_lead`, un `form_error` regroupé ;
- clics WhatsApp, téléphone, e-mail et rendez-vous : navigation native indépendante du consentement ; transmission GA4 uniquement avec consentement ;
- contextes contrôlés sur Accueil, RC Pro, Agent immobilier, Décennale, Maçon, Transport, Flotte, guide Sinistralité, guide Prix Décennale et guide Prix RC Pro.

Les résultats détaillés et les contrôles techniques sont consignés dans le rapport final de la mission. Aucun faux lead de production n’a été envoyé.

## 8. Recommandations GA4 après déploiement

- Événement clé principal : `generate_lead`.
- Événement clé secondaire à évaluer : `whatsapp_click`.
- Micro-conversions : `appointment_click`, `quote_start`, `audit_start`, `phone_click`, `email_click`.
- Ne pas marquer `form_start` ou `form_error` comme événements clés.
- Contrôler dans DebugView puis Temps réel que chaque événement apparaît une seule fois avec consentement, avant toute analyse de tendance.

Aucune configuration distante GA4 n’est modifiée par cette mission et aucune réception en production n’est revendiquée avant déploiement.

## 9. Contrôle après déploiement

1. Accepter Analytics sur une session de recette dédiée.
2. Vérifier un clic par canal sans envoyer de message ou de rendez-vous.
3. Soumettre un lead réel uniquement lors d’une demande légitime, puis rapprocher l’heure Formspree et `generate_lead`.
4. Contrôler `landing_page`, `page_path`, `product_context`, `intent` et les UTM dans GA4.
5. Refuser Analytics dans une nouvelle session et confirmer l’absence de tag et d’événement, tout en vérifiant le fonctionnement des liens.

## 10. Rapprochement commercial anonymisé

Le modèle `docs/LEAD_TRACKING_TEMPLATE.csv` permet un rapprochement mensuel agrégé SEO → lead → devis → contrat. Il exclut volontairement toute identité ou coordonnée. Utiliser une ligne par conversion commerciale anonymisée, comparer les volumes avec GA4 et Formspree, puis documenter les écarts de consentement ou de canal sans tenter d’identifier un visiteur.
