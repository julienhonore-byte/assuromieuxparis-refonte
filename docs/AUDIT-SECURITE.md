# Audit de sécurité — RC1

Date : 22 juillet 2026. Périmètre : dépôt, sortie statique, configuration Netlify, formulaire et liens externes. Aucun test intrusif n'a été réalisé.

## Surface d'attaque

- Site Astro statique : aucun serveur applicatif, aucune base de données et aucune authentification.
- Une dépendance de production : Astro.
- Scripts limités au menu mobile, au sélecteur de besoin et au formulaire.
- Services externes : Formspree, Cal.com et ORIAS par navigation.
- Données structurées injectées depuis des objets contrôlés dans le dépôt.

## Contrôles conformes

- Aucun secret, token ou clé API nécessaire au build.
- Aucun contenu mixte détecté ; les URL externes et canonicals utilisent HTTPS.
- Liens externes ouverts dans un nouvel onglet protégés par `noopener noreferrer` lorsqu'ils utilisent `target="_blank"`.
- Formulaire protégé par un honeypot et validation client ; la validation serveur doit rester la référence.
- Aucun chargement tiers automatique de Cal.com ou Formspree avant action utilisateur.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` et `Referrer-Policy: strict-origin-when-cross-origin` sont configurés.

## En-têtes manquants ou à renforcer

| En-tête | État | Recommandation |
|---|---|---|
| Content-Security-Policy | Absent | Tester d'abord en Report-Only ; prévoir `default-src 'self'`, `connect-src 'self' https://formspree.io`, images locales et traitement des JSON-LD inline |
| Permissions-Policy | Absent | Ajouter au minimum `camera=(), microphone=(), geolocation=()` |
| Strict-Transport-Security | Non contrôlable localement | Activer après confirmation du domaine HTTPS et des sous-domaines |
| Cache-Control | Non spécialisé | Cache immuable pour `/_astro/*`, prudent pour HTML et fichiers SEO |
| frame-ancestors | Couvert seulement par X-Frame-Options | Migrer vers CSP après recette |

Une CSP ne doit pas être ajoutée sans test : les JSON-LD sont inline et nécessitent une stratégie de hash, de nonce impossible en statique, ou une exception strictement limitée. Ne pas utiliser une CSP permissive uniquement pour « cocher » le contrôle.

## Formspree et données

- Le navigateur transmet prénom, nom, entreprise, email, téléphone et message à Formspree.
- Le compte, les destinataires, la rétention, les accès, le DPA et les transferts doivent être confirmés par Assuromieux.
- Aucun document confidentiel n'est demandé ; le formulaire avertit de ne pas en envoyer.
- Le test réel ne doit utiliser que des données de test consenties.

## Dépendances et chaîne de build

- Le lockfile est présent et `pnpm install --frozen-lockfile` réussit.
- Node 24 et pnpm 11.9.0 sont épinglés dans Netlify ; le package accepte Node ≥ 22.12.
- Aucun audit de vulnérabilités réseau n'a été exécuté dans cette mission. Avant GO, lancer l'outil de sécurité approuvé par l'équipe sans modifier automatiquement les versions.
- Ne jamais utiliser une mise à jour majeure automatique en phase RC.

## Secrets et configuration

- Aucun `.env` requis actuellement.
- Si des variables sont ajoutées, elles doivent résider dans Netlify, jamais dans Git.
- L'ID Formspree est un identifiant public d'endpoint et non un secret, mais son usage doit être surveillé contre le spam.

## Risques classés

| Niveau | Risque | Traitement |
|---|---|---|
| Haut | Traitement de données via Formspree sans politique validée | Bloquer la production jusqu'à validation juridique et opérationnelle |
| Moyen | CSP et Permissions-Policy absentes | Ajouter et tester sur préproduction |
| Moyen | En-têtes de cache absents | Ajouter après recette Netlify |
| Moyen | Endpoint public exposé au spam | Confirmer protections Formspree, quotas et alertes |
| Faible | Pas de HSTS vérifiable localement | Contrôler après association du domaine |

## Verdict

**Surface technique faible, mais publication bloquée par la gouvernance des données et les en-têtes à tester.**
