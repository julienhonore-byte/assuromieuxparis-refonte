# Mission 33 — Mesure des conversions et pilotage commercial

Date du contrôle : 31 juillet 2026

Statut : **architecture de mesure préparée — collecte non activée**.

## 1. État initial constaté

- Aucun identifiant GA4 réel n'est présent dans le dépôt ou sa configuration documentée.
- Aucun script Google Analytics, Google Tag Manager, `dataLayer`, pixel publicitaire ou bibliothèque analytics n'est chargé.
- Aucun mécanisme de consentement analytics n'est installé.
- Les politiques de confidentialité et Cookies indiquent qu'aucun outil de mesure d'audience n'est actif.
- Le formulaire utilise Formspree et ne montre son succès qu'après une réponse HTTP positive.
- Cal.com est un lien externe après succès ; le site ne reçoit aucune confirmation de réservation.
- Le seul stockage navigateur est `sessionStorage`, sous la clé fonctionnelle `assuromieux:selected-product`.

## 2. Architecture préparée

Le module `src/lib/analytics.ts` centralise la nomenclature, filtre les paramètres et délègue les clics commerciaux. Il ne charge aucun outil tiers.

Un événement ne peut être envoyé à GA4 que si les trois conditions suivantes sont réunies :

1. `PUBLIC_GA_MEASUREMENT_ID` contient un identifiant valide de forme `G-…` ;
2. un mécanisme approuvé a défini `window.assuromieuxAnalyticsConsent` à `granted` après le choix de l'utilisateur ;
3. le chargeur GA4 approuvé a rendu `window.gtag` disponible.

Ces conditions ne sont pas réunies dans la version actuelle. Définir uniquement la variable d'environnement ne charge pas GA4 et n'active pas la collecte.

## 3. Événements et paramètres

| Événement | Action réelle | Paramètres non personnels | Conversion GA4 recommandée | Limite |
|---|---|---|---|---|
| `audit_cta_click` | Clic sur un CTA explicite vers le formulaire ou l'audit | `page_path`, `page_title`, `cta_location`, `cta_label`, `service_interest`, `source_component` | Non | Ne prouve pas une demande |
| `form_start` | Première modification réelle d'un champ ou d'une sélection | `page_path`, `page_title`, `form_context`, `source_component` | Non | Une seule fois par affichage du formulaire |
| `audit_form_submit_success` | Réponse positive réelle de Formspree | `page_path`, `page_title`, `form_context`, `service_interest`, `source_component` | **Oui, principale** | Ne prouve pas que la demande est qualifiée |
| `audit_form_submit_error` | Validation locale, erreur réseau ou refus du service | `page_path`, `page_title`, `form_context`, `error_type`, `source_component` | Non | `error_type` reste générique |
| `phone_click` | Activation d'un lien `tel:` | `page_path`, `page_title`, `link_location`, `source_component` | Secondaire éventuelle | Ne prouve pas qu'un appel a abouti |
| `email_click` | Activation d'un lien `mailto:` | `page_path`, `page_title`, `link_location`, `source_component` | Non | Ne prouve pas l'envoi d'un message |
| `cal_click` | Ouverture d'un lien Cal.com | `page_path`, `page_title`, `link_location`, `form_context`, `source_component` | Secondaire éventuelle | Ne prouve pas une réservation |

Valeurs autorisées pour `error_type` : `validation`, `network`, `server`, `unknown`.

Ne sont jamais transmis : prénom, nom, entreprise, e-mail, téléphone, message libre, document, numéro de contrat, endpoint Formspree ou valeur saisie librement.

## 4. Tunnel mesuré et limites commerciales

```text
Visite / page d'entrée
→ audit_cta_click
→ form_start
→ audit_form_submit_success
→ cal_click
→ rendez-vous réellement confirmé
→ devis
→ contrat signé
```

GA4 peut fournir la page d'entrée et la page d'origine lorsque son chargement standard est ultérieurement autorisé. Les trois dernières étapes exigent une confirmation Cal.com, un CRM ou un suivi manuel. Aucun événement `cal_booking_success` n'est créé sans signal technique fiable.

## 5. Activation future

Actions humaines obligatoires avant toute collecte :

1. confirmer la propriété GA4 et fournir son identifiant de mesure réel ;
2. faire valider la base légale et le besoin de consentement ;
3. choisir et valider un mécanisme de consentement accessible, refusé par défaut lorsque requis ;
4. mettre à jour puis valider séparément les politiques de confidentialité et Cookies ;
5. valider la durée de conservation, les signaux Google, le partage de données et l'exclusion du trafic interne ;
6. intégrer une seule fois le chargeur GA4 après consentement ;
7. tester le refus, l'acceptation, la révocation et les Deploy Previews ;
8. marquer `audit_form_submit_success` comme conversion principale dans GA4 ;
9. décider si `phone_click` et `cal_click` doivent être des conversions secondaires.

## 6. Mode de débogage

- En développement, les événements normalisés sont affichés dans la console sans donnée personnelle.
- Pour un build de recette explicite, définir temporairement `PUBLIC_ANALYTICS_DEBUG=true`.
- Laisser cette variable à `false` en production.
- Le mode debug ne charge pas GA4, n'écrit aucun cookie et n'envoie aucune donnée.

Procédure : ouvrir la console, déclencher un CTA, commencer le formulaire, provoquer une validation locale puis vérifier le nom de l'événement et ses seuls paramètres autorisés. Un refus serveur peut être testé sur un environnement contrôlé sans donnée réelle. Une soumission de production ne doit pas être faite sans autorisation.

Après activation future de GA4 : utiliser DebugView et le rapport Temps réel uniquement avec un trafic de test identifié, puis rapprocher mensuellement les succès Formspree, clics Cal.com et demandes qualifiées enregistrées hors Analytics.

## 7. Contrôles d'acceptation

- Un succès est déclenché uniquement après `response.ok` de Formspree et au maximum une fois par envoi réussi.
- Une erreur Formspree ne déclenche jamais de succès.
- Les liens natifs `tel:` et `mailto:` ne sont pas bloqués.
- Un clic Cal.com reste nommé `cal_click`.
- Le chemin de page exclut volontairement les paramètres de requête afin d'éviter toute donnée identifiable.
- La liste des paramètres est limitée par événement et les valeurs de contexte utilisent des codes stables.
- Sans identifiant, consentement et `gtag`, chaque appel de mesure est sans effet réseau.

## 8. Limites actuelles

- Collecte GA4 : inactive.
- Réservation Cal.com confirmée : non mesurable depuis le site actuel.
- Prospect qualifié, devis et contrat : suivi CRM ou manuel requis.
- Les textes juridiques n'ont pas été modifiés, conformément au scénario sans activation.

## 9. Impact technique mesuré

- Build public contrôlé : 43 pages, 17 indexables, 26 en `noindex` et 17 URL dans le sitemap, sans changement par rapport à l'état validé.
- JavaScript de la page d'accueil avant la mission : 4 283 octets intégrés, aucun fichier JavaScript externe.
- JavaScript de la page d'accueil après la mission : 7 845 octets au total, soit +3 562 octets non compressés. L'ajout reste inférieur à 3,5 Kio et n'ajoute aucune dépendance.
- CSS : aucun fichier modifié et volume généré inchangé.
- Build sans configuration Analytics : aucun script Google, aucune requête Analytics, aucun cookie et aucun événement transmis.
- Le mode développement permet de vérifier localement les événements ; le build de production reste silencieux tant que les prérequis d'activation ne sont pas réunis.
