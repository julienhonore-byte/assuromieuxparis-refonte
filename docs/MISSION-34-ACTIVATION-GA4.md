# Mission 34 — Activation GA4 et conformité

Date du contrôle : 31 juillet 2026

Statut : **aucun identifiant GA4 réel découvert — activation interdite et collecte maintenue désactivée**.

Ce document prépare une activation future. Il ne constitue ni une validation juridique, ni une autorisation de collecte.

## 1. Résultat de l'audit

### Conclusion

Aucun identifiant exploitable de type `G-…`, `UA-…`, `GTM-…` ou `AW-…` n'a été trouvé dans le projet.

La variable `PUBLIC_GA_MEASUREMENT_ID` existe seulement dans `.env.example`, avec une valeur vide. Aucun script Google Analytics ou Google Tag Manager n'est chargé. La couche `src/lib/analytics.ts` reste sans effet réseau en l'absence d'identifiant, de consentement accordé et de fonction `gtag` disponible.

### Périmètre contrôlé

| Zone | Résultat |
|---|---|
| Fichiers suivis et non suivis | Aucun identifiant réel |
| Fichiers cachés et ignorés | Seul `.env.example` existe ; aucun `.env`, `.env.local` ou fichier équivalent |
| `netlify.toml` | Aucun identifiant ni variable Analytics |
| État Netlify local | Dossier `.netlify` et fichier `.netlify/state.json` absents |
| README et documentation | GA4 seulement mentionné comme outil futur ou interdit avant validation |
| Scripts, configuration et build | Aucun chargeur Google, GTM ou `dataLayer` |
| Historique Git, toutes les références et reflog | Aucun identifiant réel dans les commits accessibles |
| Sorties `dist` et `.demo-dist` | Aucun identifiant réel |
| PDF non suivi de la Mission 30 | Deux suites courtes ressemblant par hasard à un préfixe `G-` apparaissent uniquement dans un flux PDF compressé ; elles sont absentes des sources et du texte éditorial et ne constituent pas des identifiants GA4 |

Le dépôt ne contient pas de Netlify CLI, de jeton Netlify ou d'état de site local permettant de lire les variables configurées dans l'interface distante. Le propriétaire du site doit donc contrôler séparément : **Netlify → Site configuration → Environment variables**, dans chaque contexte. Une valeur trouvée uniquement dans cette interface devra être rapprochée du flux Web GA4 avant toute utilisation.

## 2. Architecture existante à conserver

La Mission 33 a préparé les événements suivants sans activer de collecte :

- `audit_cta_click` ;
- `form_start` ;
- `audit_form_submit_success` ;
- `audit_form_submit_error` ;
- `phone_click` ;
- `email_click` ;
- `cal_click`.

Les paramètres autorisés sont limités à des chemins, titres et codes de contexte contrôlés. Les prénom, nom, entreprise, e-mail, téléphone, message, documents et valeurs libres ne doivent jamais être envoyés à Google. Google interdit par ailleurs l'envoi d'informations permettant d'identifier directement une personne : [bonnes pratiques Google relatives aux données personnelles](https://support.google.com/analytics/answer/6366371?hl=fr).

## 3. Création recommandée de la propriété GA4

### Gouvernance du compte

1. Utiliser un compte Google détenu et administré par Jules HONORE ou par l'organisation Assuromieux Paris, pas un compte appartenant exclusivement à un prestataire.
2. Si un compte Analytics Assuromieux Paris existe déjà, créer la propriété dans ce compte plutôt que de multiplier les comptes.
3. Conserver au moins deux administrateurs de confiance et attribuer aux intervenants externes le niveau d'accès minimal nécessaire.
4. Accepter les conditions Analytics et l'avenant relatif au traitement des données uniquement au nom du responsable habilité.

Google recommande, pour une entreprise exploitant un seul site, une propriété GA4 et un flux Web : [structure des comptes Analytics](https://support.google.com/analytics/answer/9679158?hl=fr).

### Paramètres proposés

| Paramètre | Valeur recommandée |
|---|---|
| Nom du compte | `Assuromieux Paris` si aucun compte approprié n'existe |
| Nom de la propriété | `Assuromieux Paris — Site web` |
| Fuseau horaire | `France — Paris` |
| Devise | `EUR — Euro` |
| Objectif métier | Génération de prospects et analyse de l'engagement |
| Type de flux | Web |
| URL du site | `https://www.assuromieuxparis.com` |
| Nom du flux | `Assuromieux Paris — Web` |

Procédure officielle : [configurer Analytics pour un site Web](https://support.google.com/analytics/answer/14183469?hl=fr).

### Création pas à pas

1. Ouvrir [analytics.google.com](https://analytics.google.com/) avec le compte propriétaire.
2. Aller dans **Administration → Créer → Propriété**.
3. Renseigner le nom, le fuseau `France — Paris` et la devise `EUR`.
4. Choisir la catégorie d'activité et la taille correspondant réellement au cabinet.
5. Sélectionner les objectifs liés à la génération de prospects et à l'analyse de l'engagement.
6. Accepter les conditions applicables après lecture par la personne habilitée.
7. Choisir **Flux de données → Web**.
8. Renseigner `https://www.assuromieuxparis.com` et le nom `Assuromieux Paris — Web`.
9. Créer le flux sans installer immédiatement la balise.
10. Dans **Administration → Collecte et modification des données → Flux de données**, ouvrir le flux Web et copier le **Measurement ID** commençant par `G-`.
11. Consigner séparément l'identifiant de propriété numérique et le Measurement ID ; seul le Measurement ID `G-…` doit alimenter `PUBLIC_GA_MEASUREMENT_ID`.

## 4. Réglages de minimisation recommandés

Ces réglages doivent être confirmés dans l'interface GA4 avant le premier trafic réel.

| Réglage | Recommandation initiale | Motif |
|---|---|---|
| Mesure améliorée — pages vues | Activer, avec URL nettoyée des paramètres dans l'intégration future | Mesure d'audience de base sans transmettre les requêtes |
| Mesure améliorée — défilements | Activer si le besoin éditorial est confirmé | Indicateur agrégé utile pour les guides |
| Interactions de formulaire | Désactiver | Évite les doublons avec les événements contrôlés et réduit le risque sur les métadonnées du formulaire |
| Clics sortants | Désactiver au lancement | `cal_click`, `email_click` et les autres clics utiles sont déjà nommés explicitement |
| Recherche sur le site | Désactiver | Le site ne possède pas de moteur de recherche interne |
| Vidéos et téléchargements | Désactiver tant que ces fonctions n'existent pas | Principe de minimisation |
| Google Signals | Désactiver | Aucun besoin publicitaire ou multi-appareil validé |
| Personnalisation publicitaire | Désactiver | Aucun usage publicitaire demandé |
| Liens Google Ads | Ne pas créer | Hors périmètre actuel |
| Partage « Produits et services Google » | Désactiver au démarrage | Élargit les usages des données ; nécessite une décision distincte |
| Autres partages facultatifs | Désactiver sauf besoin documenté | Limitation des destinataires |
| Conservation des données événementielles | 14 mois, sous réserve de validation | Permet une comparaison sur un cycle annuel d'assurance ; documenter cette nécessité, sinon retenir 2 mois |

Google précise que la mesure améliorée envoie des événements dès son activation et doit être réglée option par option : [événements de mesure améliorée](https://support.google.com/analytics/answer/9216061?hl=fr). Pour une propriété standard, la conservation des données au niveau utilisateur/événement est configurable à 2 ou 14 mois.

### URL et campagnes

- Ne jamais placer d'e-mail, de téléphone, de nom, de numéro de dossier ou d'autre donnée personnelle dans une URL ou un paramètre UTM.
- Le futur chargeur doit désactiver l'envoi automatique initial de `page_view`, puis émettre une page vue avec l'origine, le chemin et le titre, sans query string ni fragment.
- Les paramètres `besoin` utilisés par le site sont des codes fonctionnels, mais ils ne doivent pas être transmis comme URL complète.

### Trafic interne

1. Définir les IP internes uniquement si elles sont stables et connues.
2. Créer d'abord le filtre en mode **Testing**.
3. Vérifier plusieurs jours la dimension de test avant de rendre l'exclusion active.
4. Ne jamais activer un filtre irréversible sans vérification : les données exclues ne peuvent pas être récupérées.

Procédure officielle : [filtrer le trafic interne dans GA4](https://support.google.com/analytics/answer/10104470?hl=fr).

### Domaines tiers

- Ne pas ajouter Formspree ou Cal.com à la mesure multidomaine dans l'architecture actuelle.
- Formspree reçoit le formulaire par `fetch` et ne constitue pas une page du parcours Analytics.
- Cal.com reste une destination externe ; `cal_click` mesure seulement l'ouverture du lien, jamais une réservation.
- Une exclusion de parrainage ou une mesure multidomaine ne devra être étudiée que si un véritable retour Cal.com vers le site est ultérieurement mis en place et validé.

## 5. Événements et événements clés

Google nomme désormais « événements clés » les événements importants pour l'activité : [gérer les événements clés](https://support.google.com/analytics/answer/13128484?hl=fr).

| Événement | Statut recommandé | Justification |
|---|---|---|
| `audit_form_submit_success` | **Événement clé principal** | Correspond à une réponse positive réelle de Formspree |
| `phone_click` | Événement observé ; événement clé secondaire seulement après décision | Un clic ne prouve pas qu'un appel a abouti |
| `cal_click` | Événement observé ; événement clé secondaire seulement après décision | Un clic ne prouve pas qu'un rendez-vous a été réservé |
| `email_click` | Ne pas marquer comme événement clé au lancement | Un clic ne prouve pas qu'un e-mail a été envoyé |
| `audit_cta_click` | Ne pas marquer comme événement clé | Mesure une intention amont |
| `form_start` | Ne pas marquer comme événement clé | Mesure une étape du tunnel |
| `audit_form_submit_error` | Ne pas marquer comme événement clé | Événement de qualité technique |

Recommandation initiale : marquer uniquement `audit_form_submit_success` comme événement clé, avec une méthode de comptage cohérente avec une demande unique. Évaluer `phone_click` et `cal_click` dans un rapport secondaire avant de modifier leur statut.

## 6. État de conformité actuel

### Écarts avant GA4

| Sujet | Situation actuelle | Écart à traiter avant activation |
|---|---|---|
| Politique Cookies | Déclare correctement qu'aucun analytics n'est actif | Devrait décrire GA4, les finalités, traceurs, durées, responsable, destinataires et retrait du consentement |
| Politique de confidentialité | Déclare correctement l'absence d'analytics | Devrait documenter les données de navigation, finalités, base légale, Google, transferts, conservation et droits |
| Consentement | Aucun mécanisme, cohérent avec l'absence de traceur | Mécanisme accessible obligatoire avant tout chargement soumis au consentement |
| Retrait du consentement | Inutile dans la version actuelle | Ajouter un accès permanent « Gérer mes cookies » et arrêter la collecte après retrait |
| Preuve du choix | Aucune, car aucun choix demandé | Mémoriser acceptation et refus sans donnée personnelle, avec version et date du dispositif |
| Formspree | Envoi volontaire après validation du formulaire ; politique existante | Confirmer compte, rôle contractuel, DPA, transferts, rétention et test réel autorisé |
| Cal.com | Simple lien externe après succès ; politique existante | Confirmer compte, paramètres, données demandées, sous-traitance et conservation |
| Netlify | Hébergement décrit | Vérifier variables distantes et journaux réellement activés |
| GA4 | Architecture locale inactive | Propriété, ID, consentement, textes et chargeur restent absents |

L'activation de GA4 rendrait immédiatement inexactes les affirmations publiques indiquant qu'aucun outil d'analytics ou de mesure d'audience n'est utilisé. Les textes doivent donc être validés et publiés **avant ou dans le même déploiement atomique** que l'activation.

### Exigences minimales du consentement

- aucun script Google, appel réseau, cookie ou ping Analytics avant acceptation ;
- mode de consentement **basique** recommandé : aucune collecte, même sans cookie, après refus ;
- boutons « Accepter » et « Refuser » au même niveau et avec une facilité équivalente ;
- absence d'acceptation implicite par la poursuite de navigation ;
- possibilité de retirer le consentement depuis toutes les pages ;
- conservation du choix d'acceptation ou de refus pendant une durée proportionnée ; six mois constitue une bonne pratique générale selon la CNIL ;
- journalisation de la version du texte et du choix sans créer un profil utilisateur ;
- fonctionnement intégral du site et du formulaire après refus.

Références CNIL : [mettre un site en conformité](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite), [règles relatives aux cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi), [retirer son consentement](https://www.cnil.fr/fr/cnil-direct/question/cookies-est-il-possible-de-finalement-refuser-les-cookies-dun-site-web-apres).

Une éventuelle exemption de consentement ne doit pas être présumée pour GA4. Elle exige une analyse et une configuration répondant à toutes les conditions applicables. En l'absence de validation juridique spécialisée, le scénario retenu doit rester le consentement préalable sans collecte après refus.

## 7. Placement futur du Measurement ID

Une fois les validations obtenues :

1. Dans Netlify, créer `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` avec le véritable ID du flux.
2. Limiter la variable au contexte **Production** ; ne pas l'exposer aux Deploy Previews ni aux branch deploys.
3. Conserver `PUBLIC_ANALYTICS_DEBUG=false` en production.
4. Ne jamais écrire l'identifiant réel dans `.env.example`, une documentation ou un patch de démonstration.
5. Vérifier que l'identifiant appartient bien au flux `https://www.assuromieuxparis.com`.
6. Déployer seulement le patch validé associant textes juridiques, consentement et chargeur.

Le Measurement ID est public par nature lorsqu'une balise fonctionne, mais sa gestion par variable évite les erreurs de contexte et les activations accidentelles.

## 8. Patch d'activation proposé — non appliqué

Le futur patch minimal devrait :

1. ajouter un composant de consentement léger, accessible et sans dépendance externe ;
2. mémoriser `granted` ou `denied` avec la version du dispositif et une durée validée ;
3. définir `window.assuromieuxAnalyticsConsent` avant toute tentative de chargement ;
4. ne charger `https://www.googletagmanager.com/gtag/js?id=…` qu'après consentement explicite et uniquement en Production ;
5. initialiser `gtag` une seule fois, avec personnalisation publicitaire et Google Signals désactivés ;
6. empêcher la page vue automatique et transmettre une URL nettoyée des paramètres et fragments ;
7. réutiliser exclusivement `src/lib/analytics.ts` pour les événements de la Mission 33 ;
8. ajouter un lien permanent de gestion des cookies dans le footer ;
9. supprimer les cookies GA4 et arrêter les événements après retrait ;
10. mettre à jour les politiques Cookies et confidentialité après validation humaine ;
11. ajouter des contrôles automatiques garantissant l'absence de requête Google avant consentement et dans les Deploy Previews.

Aucun de ces changements n'est réalisé dans cette mission, faute d'identifiant réel et de validation juridique du dispositif.

## 9. Test avec DebugView

Après activation sur un environnement de recette juridiquement autorisé :

1. ouvrir GA4 → **Administration → Affichage des données → DebugView** ;
2. activer `debug_mode` seulement pour le navigateur ou la session de test ;
3. accepter explicitement la mesure sur le bandeau de recette ;
4. vérifier la réception de `page_view`, `audit_cta_click`, `form_start` et d'une erreur de validation locale ;
5. effectuer une soumission Formspree synthétique uniquement avec autorisation, vérifier un seul `audit_form_submit_success`, puis supprimer les données de test ;
6. vérifier `phone_click`, `email_click` et `cal_click` sans les interpréter comme appels, e-mails ou rendez-vous confirmés ;
7. contrôler chaque événement : aucun nom, e-mail, téléphone, entreprise, message, query string ou fragment ;
8. refuser puis retirer le consentement et confirmer l'absence totale de requête vers Google ;
9. vérifier le rapport Temps réel, puis attendre jusqu'à 24 heures pour les rapports standards.

Documentation officielle : [surveiller les événements dans DebugView](https://support.google.com/analytics/answer/7201382?hl=fr).

## 10. Checklist d'autorisation

- [ ] Propriété et flux Web créés par le propriétaire habilité.
- [ ] Measurement ID réel communiqué et rapproché du domaine exact.
- [ ] Variables Netlify contrôlées dans tous les contextes.
- [ ] Finalités, base légale et transferts validés par une personne compétente.
- [ ] Politique de confidentialité validée et mise à jour.
- [ ] Politique Cookies validée et mise à jour.
- [ ] Consentement accessible testé : accepter, refuser, retirer.
- [ ] Aucun appel Google avant consentement ou après refus.
- [ ] Google Signals, publicité, partages et liens Ads désactivés.
- [ ] Conservation décidée et documentée.
- [ ] Filtres internes testés avant activation.
- [ ] Absence de PII vérifiée dans URL, UTM, titres, événements et paramètres.
- [ ] `audit_form_submit_success` testé puis marqué comme événement clé.
- [ ] Deploy Previews et branch deploys sans balise ni collecte.
- [ ] Recette Formspree autorisée et données synthétiques supprimées.
- [ ] Validation humaine finale et procédure de retour arrière signées.

## 11. Décision de la Mission 34

**GA4 reste désactivé.**

La prochaine mission d'implémentation ne pourra commencer qu'après fourniture du Measurement ID réel et validation explicite du mécanisme de consentement et des textes juridiques adaptés.
