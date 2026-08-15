# Mission 77 BIS — Activation GA4, consentement et conversions

Date de mise à jour : 14 août 2026  
Statut : **implémentation locale terminée — déploiement non réalisé**

## 1. Configuration retenue

| Élément | Configuration |
|---|---|
| Propriété | Assuromieux Paris — Site web |
| Flux Web | `https://www.assuromieuxparis.com` |
| Measurement ID | `G-WWMFCQF196` |
| Intégration | Google tag manuel, sans GTM ni package Analytics |
| Mode de consentement | Mode basique : aucun appel Google avant accord |
| Environnements émetteurs | Domaine public de production uniquement |
| Environnements silencieux | Local, build statique, Deploy Preview et autres domaines |
| Key Event principal | `generate_lead` |

Le Measurement ID est un identifiant public de flux, jamais une clé secrète. Le module refuse néanmoins de charger le tag sur un autre hôte que `assuromieuxparis.com` ou `www.assuromieuxparis.com`.

## 2. Consentement

Le bandeau propose deux actions visuellement équivalentes : **Refuser** et **Accepter**. Le site reste utilisable dans les deux cas.

- Avant tout choix : aucune requête vers Google Analytics.
- Après refus : aucune requête Analytics et aucun événement envoyé.
- Après acceptation : chargement asynchrone du Google tag et mesure des seuls événements autorisés.
- Retrait : le bouton permanent « Gérer les cookies » dans le pied de page permet de modifier le choix ; la collecte cesse immédiatement après refus.
- Durée du choix local : 180 jours maximum.
- Publicité : `ad_storage`, `ad_user_data` et `ad_personalization` restent refusés.
- Google Signals et personnalisation publicitaire : désactivés dans la configuration du site.

Le mécanisme suit le **mode de consentement basique** : les tags sont bloqués jusqu’à l’accord et aucune donnée n’est transmise lorsqu’il est refusé. Références : [mode de consentement Google](https://support.google.com/analytics/answer/10000067?hl=fr), [règles CNIL sur le refus](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ).

## 3. Événements implémentés

| Événement | Déclencheur exact | Paramètres autorisés | Key Event |
|---|---|---|---|
| `generate_lead` | Une seule fois après un `response.ok` de Formspree | `form_name`, `form_location`, `page_path`, `page_title`, `lead_type`, `insurance_product` | **Oui** |
| `quote_start` | Clic réel sur un CTA devis ouvrant le formulaire | `page_path`, `page_title`, `cta_location`, `insurance_product` | Non |
| `audit_start` | Clic réel sur un CTA audit ouvrant le formulaire | `page_path`, `page_title`, `cta_location`, `insurance_product` | Non |
| `form_start` | Première interaction réelle avec le formulaire, une fois par chargement | `form_name`, `form_location`, `page_path`, `lead_type`, `insurance_product` | Non |
| `form_error` | Erreur de validation, réseau ou serveur | `form_name`, `form_location`, `page_path`, `error_type` | Non |
| `click_phone` | Clic sur un lien `tel:` | `page_path`, `page_title`, `link_location` | À observer |
| `click_email` | Clic sur un lien `mailto:` | `page_path`, `page_title`, `link_location` | Non |
| `booking_start` | Clic sur un lien Cal.com | `page_path`, `page_title`, `link_location` | Non |

Le `page_view` est émis manuellement après consentement. Sa localisation exclut la query string et le fragment.

## 4. Protection des données

Les valeurs envoyées sont limitées par une liste blanche et normalisées sous forme de codes contrôlés. Sont explicitement exclus :

- nom, prénom, e-mail, téléphone et entreprise ;
- message et réponses libres du formulaire ;
- URL `tel:`, `mailto:` ou Formspree ;
- query string et fragment ;
- document, identifiant de dossier ou valeur saisie par l’utilisateur.

Le succès du formulaire n’est jamais déduit d’un clic sur le bouton : `generate_lead` intervient exclusivement après confirmation positive de Formspree et possède un verrou anti-doublon. Google interdit l’envoi d’informations permettant d’identifier une personne : [règles relatives aux données personnelles](https://support.google.com/analytics/answer/6366371?hl=fr).

## 5. Configuration à réaliser dans GA4

Après le premier déploiement autorisé :

1. Vérifier que le flux Web `https://www.assuromieuxparis.com` porte bien l’identifiant `G-WWMFCQF196`.
2. Dans **Administration → Événements clés**, marquer uniquement `generate_lead` comme événement clé principal.
3. Dans la mesure améliorée du flux, désactiver les interactions de formulaire afin d’éviter des doublons avec `form_start` et `generate_lead`.
4. Conserver Google Signals et la personnalisation publicitaire désactivés.
5. Créer une règle de trafic interne et la laisser d’abord en mode test.
6. Ne pas marquer `quote_start`, `audit_start`, `form_start`, `form_error`, `click_email` ou `booking_start` comme événements clés au lancement.
7. Observer `click_phone` avant toute éventuelle classification secondaire : un clic ne prouve pas un appel abouti.

Google documente `generate_lead` comme événement recommandé pour la génération de prospects : [événements recommandés GA4](https://support.google.com/analytics/answer/9267735?hl=fr).

## 6. Liaison Search Console

Dans GA4 :

1. Administration → Associations de produits → Liens Search Console.
2. Sélectionner `sc-domain:assuromieuxparis.com`.
3. Associer le flux Web `https://www.assuromieuxparis.com`.
4. Vérifier ultérieurement l’apparition des rapports de requêtes et de trafic naturel.

Cette liaison exige une propriété Search Console vérifiée et un flux Web : [documentation officielle](https://support.google.com/analytics/answer/10737381?hl=fr).

## 7. Recette DebugView après déploiement

1. Ouvrir un navigateur de test sans consentement mémorisé.
2. Confirmer dans l’onglet Réseau qu’aucun appel `googletagmanager.com` ou `google-analytics.com` n’existe avant le choix.
3. Refuser, naviguer et confirmer que l’absence d’appel persiste.
4. Rouvrir « Gérer les cookies », accepter, puis vérifier le chargement unique du Google tag.
5. Activer le mode debug uniquement pour le navigateur de recette et ouvrir GA4 → DebugView.
6. Tester une fois `quote_start`, `audit_start`, `click_phone`, `click_email` et `booking_start`.
7. Interagir deux fois avec le formulaire et confirmer un seul `form_start`.
8. Provoquer une erreur locale et vérifier `form_error`, sans valeur saisie dans ses paramètres.
9. Après autorisation d’une soumission de test Formspree, confirmer un seul `generate_lead` après succès.
10. Retirer le consentement et confirmer l’arrêt immédiat de la collecte.

DebugView affiche les événements de test en temps réel : [documentation DebugView](https://support.google.com/analytics/answer/7201382?hl=fr).

## 8. Limites et responsabilités

- Une réservation Cal.com n’est pas confirmée au site : `booking_start` mesure uniquement le départ vers Cal.com.
- Un clic téléphone ou e-mail n’atteste pas d’un échange abouti.
- Une conversion Formspree de recette ne doit pas être envoyée sans autorisation explicite.
- Les politiques Cookies et confidentialité ont été alignées techniquement avec le dispositif ; une validation juridique humaine reste recommandée avant déploiement.
- La recette locale prouve l’absence d’appel Google hors production. La réception effective dans GA4 et DebugView ne pourra être confirmée qu’après un déploiement explicitement autorisé.

## 9. Pilotage mensuel

Rapprocher chaque mois :

- Search Console : clics, impressions, requêtes et pages d’entrée ;
- GA4 : `generate_lead`, parcours `quote_start`/`audit_start`, démarrages et erreurs de formulaire ;
- Formspree : soumissions réellement reçues ;
- Cal.com : rendez-vous réellement confirmés ;
- suivi commercial : qualification, devis et clients.

Les écarts entre clics, événements et résultats commerciaux doivent être conservés : ils mesurent les frictions réelles du parcours au lieu de gonfler artificiellement les conversions.
