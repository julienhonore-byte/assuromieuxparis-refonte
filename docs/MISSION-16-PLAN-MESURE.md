# Mission 16 — Plan de mesure SEO et conversion

Date : 24 juillet 2026

Statut : conception uniquement, aucune balise analytics ni aucun événement installé.

## 1. Principes

Le pilotage doit distinguer :

1. la visibilité : impressions, clics, position et pages indexées ;
2. l’engagement : consultation d’un produit, d’un guide ou d’un CTA ;
3. la conversion numérique : succès du formulaire ou rendez-vous confirmé ;
4. la conversion commerciale : demande qualifiée, rendez-vous tenu, opportunité ;
5. la qualité : pertinence du besoin, domaine d’assurance et origine de la demande.

Un clic n’est pas une demande. Un clic vers Cal.com n’est pas un rendez-vous confirmé. Un clic téléphone ne prouve pas qu’un appel a abouti.

## 2. Conversion principale

### Indicateur numérique principal

`audit_submit_success`

Déclenchement recommandé : uniquement après réponse positive confirmée par Formspree, jamais au clic sur le bouton d’envoi.

### Indicateur commercial principal

**Demande d’audit qualifiée**

Source : qualification manuelle dans un registre commercial ou CRM. Une demande est qualifiée lorsque le cabinet confirme qu’elle correspond à une entreprise, un besoin réel et un périmètre accompagné.

Les deux indicateurs doivent être rapprochés chaque mois. Le premier mesure le fonctionnement du site ; le second mesure la valeur commerciale réelle.

## 3. Événements recommandés

| Événement | Niveau | Déclencheur recommandé | Paramètres utiles | Limite d’interprétation |
|---|---|---|---|---|
| `audit_form_start` | Micro-conversion | Première interaction avec le formulaire | `page_path`, `form_context` | Ne pas envoyer la valeur saisie |
| `audit_submit_attempt` | Diagnostic | Soumission locale valide déclenchée | `page_path`, `form_context` | N’est pas un succès |
| `audit_submit_success` | Conversion | Réponse positive Formspree | `page_path`, `form_context`, `need_code` | À rapprocher des demandes reçues |
| `audit_submit_error` | Qualité | Échec réseau ou réponse Formspree négative | `page_path`, `error_type` | Aucun message ou champ personnel |
| `phone_click` | Micro-conversion | Activation d’un lien `tel:` | `page_path`, `cta_location` | Ne prouve ni appel ni qualification |
| `email_click` | Micro-conversion | Activation d’un lien `mailto:` | `page_path`, `cta_location` | Ne prouve pas l’envoi d’un email |
| `cal_outbound_click` | Micro-conversion | Ouverture du lien Cal.com | `page_path`, `cta_location` | Ne doit pas être nommé `cal_booking` |
| `cal_booking_confirmed` | Conversion | Confirmation Cal.com ou webhook autorisé | `booking_source`, `page_path` si disponible | Nécessite une intégration distincte |
| `cta_primary_click` | Micro-conversion | Clic sur le CTA principal | `page_path`, `cta_location`, `link_url`, `link_text` | Éviter le doublon avec un événement de destination |
| `cta_secondary_click` | Micro-conversion | Clic sur le CTA secondaire | mêmes paramètres | Même règle de déduplication |
| `product_open` | Navigation | Accès à une page produit depuis un sélecteur | `page_path`, `product_slug`, `link_location` | Utile pour comparer les besoins |
| `sector_open` | Navigation | Accès à une expertise sectorielle | `page_path`, `sector_slug`, `link_location` | Diagnostic, pas conversion |
| `resource_open` | Engagement | Accès à un guide ou hub depuis une autre page | `page_path`, `resource_slug`, `link_location` | Dédupliquer des pages vues |
| `guide_read_50` | Engagement | 50 % du contenu principal réellement parcouru | `page_path`, `resource_slug` | Déclencher une seule fois par vue |
| `guide_read_90` | Engagement | 90 % du contenu principal réellement parcouru | `page_path`, `resource_slug` | Ne signifie pas compréhension |
| `external_link_click` | Diagnostic | Ouverture d’une source externe autorisée | `page_path`, `link_domain`, `link_location` | Exclure Formspree et Cal si déjà suivis |

## 4. Paramètres communs

| Paramètre | Exemple de format | Usage |
|---|---|---|
| `page_path` | `/audit-assurances-entreprise/` | Page d’origine |
| `page_title` | valeur rendue automatiquement | Contrôle éditorial |
| `content_group` | `product`, `sector`, `resource`, `need`, `institutional` | Regroupement |
| `cta_location` | `hero`, `body`, `sticky_mobile`, `footer` | Comparaison des emplacements |
| `link_url` | chemin ou domaine | Destination |
| `link_text` | libellé visible | Cohérence des CTA |
| `form_context` | `audit`, `transport`, `btp`, `fleet` | Contexte non personnel |
| `need_code` | code interne stable | Besoin sélectionné |
| `product_slug` | `rc-professionnelle` | Produit consulté |
| `sector_slug` | `transport-routier-marchandises` | Secteur consulté |
| `resource_slug` | slug du guide | Ressource consultée |
| `link_location` | `homepage_selector`, `related_content`, `footer` | Origine du lien |
| `error_type` | `network`, `validation`, `provider` | Diagnostic technique |

Ne jamais transmettre :

- prénom ou nom ;
- email ;
- téléphone ;
- entreprise ;
- message libre ;
- contenu d’un champ de formulaire ;
- identifiant Formspree propre à un prospect ;
- URL contenant des données personnelles.

## 5. Sources de données

| Besoin | Source minimale | Source complémentaire éventuelle |
|---|---|---|
| Impressions, clics, CTR, position | Google Search Console | Bing Webmaster Tools |
| Indexation et sitemap | Search Console | Contrôles HTTP mensuels |
| Pages vues et événements | Outil analytics à choisir | Journaux Netlify agrégés, si disponibles et validés |
| Formulaires réussis | Formspree | Événement `audit_submit_success` |
| Rendez-vous confirmés | Cal.com | Événement serveur/webhook autorisé |
| Appels et emails qualifiés | Registre manuel ou CRM | Tracking dédié après décision |
| Opportunités et résultats | CRM ou tableau commercial | Aucun événement navigateur ne suffit |

## 6. Plan de marquage par parcours

### Audit

```text
page_view
→ cta_primary_click
→ audit_form_start
→ audit_submit_attempt
→ audit_submit_success
→ demande qualifiée (registre commercial)
```

### Rendez-vous

```text
cta_secondary_click
→ cal_outbound_click
→ cal_booking_confirmed (uniquement si confirmation disponible)
→ rendez-vous tenu (registre commercial)
```

### Téléphone et email

```text
phone_click ou email_click
→ contact reçu (registre manuel)
→ demande qualifiée
```

### Ressource vers conversion

```text
resource_open
→ guide_read_50 / guide_read_90
→ cta_primary_click
→ audit_submit_success
```

## 7. UTM

Nomenclature :

- `utm_source` : `google`, `linkedin`, `partenaire`, `newsletter` ;
- `utm_medium` : `organic`, `cpc`, `social`, `referral`, `email` ;
- `utm_campaign` : nom court, stable et daté ;
- `utm_content` : variante réelle du lien ou de la création ;
- minuscules, tirets simples, aucune donnée personnelle.

Tenir un registre des campagnes avec : date, responsable, URL, source, medium, campagne, contenu, objectif et date de fin.

Ne jamais ajouter d’UTM aux liens internes : ils écraseraient l’attribution de session.

## 8. Qualité et validation

Avant activation future :

1. choisir l’outil et son propriétaire ;
2. valider la base légale, le consentement éventuel et les politiques ;
3. documenter la durée de conservation ;
4. implémenter dans un lot séparé ;
5. tester sur une préproduction non indexable ;
6. vérifier qu’aucune donnée personnelle n’est envoyée ;
7. dédupliquer les événements ;
8. tester le refus de consentement si applicable ;
9. exclure le trafic interne documenté ;
10. rapprocher chaque mois événements, Formspree, Cal.com et registre commercial.

## 9. Contrôles d’acceptation futurs

- un envoi Formspree réussi produit exactement un `audit_submit_success` ;
- un échec produit `audit_submit_error`, jamais un succès ;
- un clic Cal.com ne produit pas `cal_booking_confirmed` ;
- chaque événement de lecture ne se déclenche qu’une fois par page vue ;
- aucun paramètre ne contient de PII ;
- les Deploy Previews n’alimentent pas la propriété de production ;
- les conversions de test sont identifiables et exclues ;
- la politique de confidentialité décrit l’outil réellement activé.
