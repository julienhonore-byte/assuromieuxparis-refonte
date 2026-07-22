# Préproduction privée et hébergement Netlify — Mission A / RC2

Ce document prépare un déploiement futur. Aucun déploiement n'a été effectué. Une URL Netlify non protégée n'est pas considérée comme une préproduction privée.

## Configuration actuelle

- Générateur : Astro 7.1.3, sortie statique.
- Commande Netlify : `pnpm build`.
- Répertoire publié : `dist`.
- Node : 24.
- pnpm : 11.9.0.
- URL canonique configurée : `https://www.assuromieuxparis.com`.
- Format : URL propres avec slash terminal.
- Aucun secret ni variable applicative requis au build.

## Environnement de préproduction recommandé

- Site Netlify distinct ou branch deploy non rattaché au domaine de production.
- Accès restreint **avant le premier déploiement** par Team login ou Password Protection dans l'interface Netlify.
- Si le forfait ne permet pas la protection requise, le déploiement est interdit : ne pas considérer le caractère non communiqué de l'URL comme un contrôle d'accès.
- `robots.txt` bloquant et `noindex, nofollow` conservés sur toutes les pages.
- Aucun alias de domaine public communiqué avant recette.
- Aucun formulaire réel testé avant validation du compte et des données de test.

## Paramètres Netlify

| Paramètre | Valeur / action |
|---|---|
| Base directory | Racine du dépôt |
| Build command | `pnpm build` |
| Publish directory | `dist` |
| Node | 24 |
| pnpm | 11.9.0 |
| Branche de préproduction | À fournir par Assuromieux ; distincte de la production |
| Deploy previews / branch deploy | Même build que la production, `noindex` conservé |
| Contrôle d'accès | Team login recommandé, mot de passe partagé à défaut selon le forfait |
| Domaine | Ne pas associer avant GO |
| HTTPS | Certificat Netlify à vérifier après association |

## Variables d'environnement

Aucune variable n'est lue par le code actuel. Les valeurs sensibles ne doivent jamais être inscrites dans `netlify.toml` ou `.env.example`. Toute future variable doit être créée dans l'interface Netlify, avec le scope `Builds` et le contexte minimal nécessaire.

Variables seulement préparées, non créées et non consommées :

- `PUBLIC_GA_MEASUREMENT_ID` : interdit tant que GA4, consentement et politique ne sont pas validés ;
- jetons Google/Bing : préférer une validation DNS gérée hors dépôt ;
- Formspree et Cal.com : restent actuellement centralisés dans `src/data/site.ts`, sans secret.

## En-têtes

Les en-têtes du dépôt ajoutent un verrou `X-Robots-Tag`, une `Permissions-Policy`, une revalidation globale et un cache immutable pour les assets Astro fingerprintés. HSTS et CSP restent à tester après création de l'environnement HTTPS ; aucune politique CSP ne doit être activée sans vérifier les scripts/styles inline et Formspree.

## Contrôles de préproduction

1. `pnpm install --frozen-lockfile`, `pnpm verify`, `pnpm build`.
2. 39 pages statiques attendues, 404 incluse.
3. Aucun lien interne cassé.
4. Headers, HTTPS, redirections slash et 404.
5. Noindex HTML et blocage robots confirmés depuis l'URL distante.
6. Formulaire sans envoi, puis envoi réel seulement après autorisation, validation RGPD et confirmation du compte destinataire.
7. Lighthouse sur six gabarits.
8. Recette clavier, mobile et 200 %.

## Informations à fournir

- Organisation et propriétaire du compte Netlify.
- Branche de production.
- Personnes autorisées à déployer et restaurer.
- Domaine/DNS actuels et TTL.
- Ancien hébergement et procédure de sauvegarde.
- Notification d'incident et interlocuteur technique.
- Forfait Netlify et mode de protection privée disponible.
