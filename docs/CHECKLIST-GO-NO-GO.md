# Checklist GO / NO GO — RC1

Date de décision : 22 juillet 2026.

Statuts : ✅ validé · ⚠️ réserve/non exécuté · ❌ bloquant.

## Technique

- ✅ `pnpm install --frozen-lockfile` réussit.
- ✅ `pnpm verify` réussit.
- ✅ `pnpm build` réussit : 37 pages.
- ✅ `pnpm check:links` : aucun lien interne cassé.
- ✅ Aucun title, description ou canonical dupliqué.
- ✅ Un H1 unique et un main sur chaque page.
- ✅ JSON-LD syntaxiquement valide.
- ✅ Références protégées intactes.

## Interface et accessibilité

- ✅ 56 contrôles responsive sur huit gabarits et sept largeurs, sans débordement.
- ✅ Menu mobile clavier, Échap et retour de focus.
- ✅ Formulaire étiqueté et états annoncés.
- ✅ Aucun avertissement console lors de la recette.
- ⚠️ Recette manuelle à 200 % non effectuée.
- ⚠️ Recette lecteur d'écran non effectuée.

## Contenus et métier

- ✅ Positionnement global préservé ; transport traité comme expertise.
- ✅ Secteurs transport validés sous réserve mineure.
- ✅ Parcours création/reprise validé sous réserve mineure.
- ❌ Six pages produit ont encore des validations métier bloquantes.
- ❌ Six guides sont encore en statut `review-required`.
- ⚠️ Les autres questions externes doivent rester documentées avant toute précision contractuelle supplémentaire.

## Légal et réglementaire

- ❌ Identité juridique, forme, SIREN/SIRET/RCS, adresse et ORIAS non attestés dans le dépôt.
- ❌ Statut d'intermédiation et formulation L521-2.II.b non validés.
- ❌ Mentions légales autonomes absentes.
- ❌ Politique de confidentialité autonome absente.
- ❌ Directeur de publication, hébergeur, médiation/réclamations et autres mentions applicables à fournir.
- ❌ Conditions Formspree/Cal.com et durées de conservation non documentées.

## Formulaire

- ✅ Endpoint, champs, préremplissage, honeypot et états techniques contrôlés.
- ❌ Propriétaire, destinataire et quota Formspree non confirmés.
- ❌ Aucune soumission réelle de test effectuée.
- ❌ Information RGPD complète absente.

## SEO et indexation

- ✅ Blocage `noindex, nofollow` présent sur 37 pages.
- ✅ `robots.txt` bloque toute exploration de préproduction.
- ✅ Maillage interne sans page éditoriale orpheline.
- ❌ Sitemap de production absent.
- ✅ Plan d'indexation sélective documenté.
- ⚠️ Canonical/réponse de la 404 à tester sur Netlify.

## Sécurité et performances

- ✅ Site statique, dépendance minimale, aucun secret requis.
- ✅ En-têtes nosniff, SAMEORIGIN et Referrer-Policy.
- ⚠️ CSP Report-Only, Permissions-Policy, HSTS et cache à tester.
- ⚠️ Lighthouse/Core Web Vitals non mesurés sur une URL Netlify.

## Hébergement et exploitation

- ✅ Configuration Netlify cohérente avec Astro statique.
- ✅ Procédures de production et rollback documentées.
- ❌ Compte, branche, responsables, domaine/DNS et déploiement précédent non renseignés.
- ⚠️ Aucun déploiement de préproduction réalisé dans cette mission.

## Conditions minimales pour requalifier le NO GO

1. Valider et archiver toutes les informations légales/réglementaires.
2. Créer et valider les pages Mentions légales et Politique de confidentialité.
3. Clore les six validations produit et les six revues de guides, ou maintenir leurs routes en noindex avec décision explicite.
4. Confirmer Formspree et réussir une soumission réelle de test.
5. Déployer une préproduction privée, tester headers, 404, Lighthouse, zoom 200 % et lecteur d'écran.
6. Créer le sitemap filtré et tester la levée sélective de l'indexation.
7. Renseigner les responsables, accès Netlify/DNS et la cible de rollback.

## Décision

# NO GO

Le RC1 est **techniquement stable mais non autorisé pour une mise en production**. Les blocages juridiques, réglementaires, métier et opérationnels sont explicites et vérifiables. Le noindex et le blocage robots doivent rester inchangés.

| Rôle | Nom | Décision | Date |
|---|---|---|---|
| Métier | À fournir par Assuromieux | — | — |
| Conformité/juridique | À fournir par Assuromieux | — | — |
| Technique | À fournir par Assuromieux | — | — |
| Décideur final | À fournir par Assuromieux | — | — |
