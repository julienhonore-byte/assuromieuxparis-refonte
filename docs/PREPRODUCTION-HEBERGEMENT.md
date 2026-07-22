# Préproduction et hébergement Netlify — RC1

Ce document prépare un déploiement futur. Aucun déploiement n'a été effectué.

## Configuration actuelle

- Générateur : Astro 7.1.3, sortie statique.
- Commande Netlify : `pnpm build`.
- Répertoire publié : `dist`.
- Node : 24.
- pnpm : 11.9.0.
- URL canonique configurée : `https://www.assuromieuxparis.com`.
- Format : URL propres avec slash terminal.
- Aucun secret ou variable d'environnement requis au build.

## Environnement de préproduction recommandé

- Site Netlify distinct ou deploy preview non rattaché au domaine de production.
- Accès restreint lorsque l'offre Netlify le permet.
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
| Production branch | À fournir par Assuromieux |
| Deploy previews | Activés, noindex conservé |
| Domaine | Ne pas associer avant GO |
| HTTPS | Certificat Netlify à vérifier après association |

## Variables d'environnement

Aucune aujourd'hui. Toute future variable doit être documentée, ajoutée dans Netlify et jamais commitée. Si Formspree ou Cal.com deviennent configurables, distinguer les valeurs de préproduction et de production.

## En-têtes

Les trois en-têtes actuels doivent être conservés. Tester en préproduction une CSP Report-Only, Permissions-Policy, HSTS après domaine, et les règles de cache décrites dans les audits sécurité/performance.

## Contrôles de préproduction

1. `pnpm install --frozen-lockfile`, `pnpm verify`, `pnpm build`.
2. 37 réponses attendues, 404 réelle incluse.
3. Aucun lien interne cassé.
4. Headers, HTTPS, redirections slash et 404.
5. Noindex HTML et blocage robots confirmés depuis l'URL distante.
6. Formulaire sans envoi, puis envoi réel seulement après autorisation.
7. Lighthouse sur six gabarits.
8. Recette clavier, mobile et 200 %.

## Informations à fournir

- Organisation et propriétaire du compte Netlify.
- Branche de production.
- Personnes autorisées à déployer et restaurer.
- Domaine/DNS actuels et TTL.
- Ancien hébergement et procédure de sauvegarde.
- Notification d'incident et interlocuteur technique.
