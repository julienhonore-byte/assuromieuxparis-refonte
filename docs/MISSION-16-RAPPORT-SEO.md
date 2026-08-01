# Mission 16 — Rapport SEO et mise en production pilotable

Date du contrôle : 24 juillet 2026

Commit audité : `284727d8f7607556ab5069dd74e0ba40c26c4724`

Périmètre : configuration Astro, sortie Netlify publique, domaine, canonical, robots, sitemap et préparation Search Console.

## Synthèse

Le socle SEO du dépôt est cohérent avec un domaine canonique en `www` :

- `astro.config.mjs` déclare `https://www.assuromieuxparis.com` ;
- `src/data/site.ts` centralise la même origine ;
- les canonical rendus utilisent cette origine ;
- `scripts/prepare-release-output.mjs` génère un sitemap sur cette origine ;
- le `robots.txt` public annonce ce même sitemap ;
- dix routes approuvées sont actuellement indexables et présentes dans le sitemap ;
- les trente-trois autres routes restent `noindex, nofollow` et hors sitemap.

Une incohérence de production demeure cependant au niveau du domaine principal Netlify : le serveur publie actuellement `https://assuromieuxparis.com/` et redirige `www` vers l’apex. Les canonical et le sitemap demandent donc aux moteurs une URL différente de l’URL finale servie.

**Domaine canonique retenu :**

```text
https://www.assuromieuxparis.com/
```

Ce choix est déjà validé dans le projet. Il est aussi adapté à la configuration DNS actuelle, gérée chez Cloudflare, Netlify recommandant le sous-domaine `www` comme domaine principal lorsqu’un fournisseur DNS externe est utilisé.

## 1. État observé en production

### DNS

| Élément | Valeur observée | Conclusion |
|---|---|---|
| Serveurs DNS | `kip.ns.cloudflare.com`, `fatima.ns.cloudflare.com` | DNS externe à Netlify |
| Apex | A vers `75.2.60.5` | Pointe vers Netlify |
| `www` | CNAME vers `assuromieuxparis.netlify.app` | Pointe vers le même site Netlify |
| Serveur HTTP | `server: Netlify` | La publication est bien assurée par Netlify |

Les enregistrements DNS permettent déjà de servir les deux hôtes. Aucun changement DNS n’est requis pour inverser le domaine principal.

### Matrice de redirection actuelle

Contrôle effectué avec `curl`, sans cache applicatif ni authentification.

| URL demandée | Première réponse | Destination finale | Nombre de sauts | État |
|---|---:|---|---:|---|
| `http://assuromieuxparis.com/` | 301 vers `https://assuromieuxparis.com/` | apex HTTPS, 200 | 1 | Cohérent avec l’apex actuel, pas avec le canonical retenu |
| `http://www.assuromieuxparis.com/` | 301 vers `https://www.assuromieuxparis.com/` | apex HTTPS, 200 | 2 | Double redirection |
| `https://assuromieuxparis.com/` | 200 | apex HTTPS | 0 | Domaine principal réellement servi |
| `https://www.assuromieuxparis.com/` | 301 vers `https://assuromieuxparis.com/` | apex HTTPS, 200 | 1 | Inverse du canonical déclaré |

### Canonical, robots et sitemap

| Contrôle | Résultat |
|---|---|
| Canonical de l’accueil | `https://www.assuromieuxparis.com/` |
| Meta robots de l’accueil | `index, follow` |
| Balise Search Console | Présente dans le HTML public |
| URL demandée pour `robots.txt` | `https://www.assuromieuxparis.com/robots.txt` |
| URL finale de `robots.txt` | `https://assuromieuxparis.com/robots.txt` après 1 redirection |
| Directive sitemap dans robots | `https://www.assuromieuxparis.com/sitemap.xml` |
| URL finale du sitemap | `https://assuromieuxparis.com/sitemap.xml` après 1 redirection |
| URL déclarées dans le sitemap | 10, toutes en `https://www.assuromieuxparis.com/` |

Il n’existe ni boucle ni erreur HTTP. Le défaut est une divergence d’hôte : Netlify impose l’apex alors que tout le HTML et le sitemap déclarent `www`.

## 2. Cause exacte

Netlify considère actuellement `assuromieuxparis.com` comme **Primary domain** et `www.assuromieuxparis.com` comme alias. Netlify redirige automatiquement l’alias vers le domaine principal.

Cette conclusion est démontrée par :

1. la réponse 200 directe de l’apex ;
2. la réponse 301 Netlify de `www` vers l’apex ;
3. l’absence de règle `[[redirects]]` dans `netlify.toml` ;
4. l’absence de fichier `_redirects` dans le projet ;
5. les canonical et le sitemap du dépôt, tous orientés vers `www`.

La cause n’est donc ni Astro, ni le fichier `index.html` historique, ni le build `dist`, ni une règle de redirection versionnée.

## 3. Correction minimale

### Action à effectuer dans Netlify

Cette action nécessite un compte Netlify autorisé ; aucun accès authentifié n’était disponible pendant la mission.

1. Ouvrir le projet Assuromieux Paris dans Netlify.
2. Aller dans **Domain management** puis **Production domains**.
3. Repérer `www.assuromieuxparis.com`.
4. Ouvrir **Options**.
5. Choisir **Set as primary domain**.
6. Vérifier que `assuromieuxparis.com` devient l’alias redirigé.
7. Ne pas supprimer l’apex et ne pas modifier les enregistrements Cloudflare déjà fonctionnels.

Netlify documente que l’hôte alternatif est automatiquement redirigé vers le domaine principal :

<https://docs.netlify.com/manage/domains/manage-domains/manage-multiple-domains/>

<https://docs.netlify.com/manage/domains/configure-domains/add-a-domain-alias/>

### Pourquoi aucune règle n’est ajoutée au dépôt

Une redirection d’hôte forcée dans `netlify.toml` concurrencerait la redirection automatique liée au Primary domain. Tant que l’apex reste principal, une règle apex vers `www` peut provoquer une boucle `www → apex → www`.

La correction correcte consiste à changer le domaine principal dans Netlify, puis à laisser Netlify gérer automatiquement l’alias. Aucune modification d’Astro, des canonical, du sitemap ou de `robots.txt` n’est nécessaire.

### Matrice cible à valider après correction

| URL demandée | Destination attendue | Statut attendu | Sauts acceptés |
|---|---|---:|---:|
| `https://www.assuromieuxparis.com/` | identique | 200 | 0 |
| `https://assuromieuxparis.com/` | `https://www.assuromieuxparis.com/` | 301 puis 200 | 1 |
| `http://www.assuromieuxparis.com/` | `https://www.assuromieuxparis.com/` | 301 puis 200 | 1 |
| `http://assuromieuxparis.com/` | `https://www.assuromieuxparis.com/` | 301 puis 200 | idéalement 1, maximum 2 si la couche TLS précède la normalisation d’hôte |

Commandes de recette :

```bash
for url in \
  http://assuromieuxparis.com/ \
  http://www.assuromieuxparis.com/ \
  https://assuromieuxparis.com/ \
  https://www.assuromieuxparis.com/
do
  curl -sS -L -o /dev/null \
    -w "$url -> %{url_effective} | %{http_code} | %{num_redirects} redirection(s)\n" \
    --max-redirs 10 "$url"
done
```

Critères :

- aucune boucle ;
- toutes les variantes finissent sur `https://www.assuromieuxparis.com/` ;
- `www` HTTPS répond directement en 200 ;
- l’apex HTTPS effectue une 301 unique ;
- canonical, OpenGraph, robots et sitemap restent en `www`.

## 4. Google Search Console

### Accès

Aucun accès Google ou Search Console n’a été utilisé et aucun état de propriété, de couverture ou de performance n’est affirmé.

### Propriétés à vérifier

| Propriété | Type | Rôle | Méthode recommandée |
|---|---|---|---|
| `assuromieuxparis.com` | Domaine | Vue globale de tous les protocoles et sous-domaines | DNS TXT dans Cloudflare |
| `https://www.assuromieuxparis.com/` | Préfixe d’URL | Vue isolée du domaine canonique | Balise HTML existante ou DNS |
| `https://assuromieuxparis.com/` | Préfixe d’URL, facultative | Suivi temporaire de l’ancien hôte principal et de sa migration | DNS ou méthode proposée par Google |

La propriété Domaine est prioritaire : elle couvre `http`, `https`, l’apex et `www`. Google impose une validation DNS pour ce type de propriété. La propriété Préfixe `www` complète utilement le diagnostic du seul hôte canonique.

Documentation officielle :

<https://support.google.com/webmasters/answer/34592>

<https://support.google.com/webmasters/answer/9008080>

### Procédure pas à pas

1. Se connecter à Search Console avec le compte propriétaire choisi par Assuromieux.
2. Ajouter la propriété **Domaine** `assuromieuxparis.com`.
3. Copier exactement le jeton TXT fourni par Google.
4. Dans Cloudflare, ajouter le TXT sur l’apex (`@`) sans supprimer les autres jetons.
5. Attendre la propagation, puis cliquer sur **Valider**.
6. Ajouter ensuite la propriété **Préfixe d’URL** `https://www.assuromieuxparis.com/`.
7. Utiliser la balise HTML déjà rendue :

```html
<meta name="google-site-verification" content="5xYVOzuFko4e25GHcZOfDe9HFcrS2E8TFy3sobPorU0" />
```

8. Vérifier que le domaine principal Netlify a d’abord été corrigé : Google doit atteindre directement la page `www`.
9. Dans le rapport **Sitemaps**, soumettre uniquement :

```text
https://www.assuromieuxparis.com/sitemap.xml
```

10. Confirmer le statut « Réussi » et dix URL découvertes.
11. Utiliser **Inspection de l’URL** sur les dix URL prioritaires ci-dessous.
12. Demander l’indexation seulement après un test en direct réussi ; ne pas soumettre les routes `noindex`.

Google précise qu’un sitemap est soumis par son URL, qu’il doit être accessible, et que l’Inspection d’URL permet de tester une page en direct :

<https://support.google.com/webmasters/answer/7451001>

<https://support.google.com/webmasters/answer/9012289>

### URL prioritaires à inspecter

Ordre recommandé :

1. `https://www.assuromieuxparis.com/`
2. `https://www.assuromieuxparis.com/audit-assurances-entreprise/`
3. `https://www.assuromieuxparis.com/assurances-entreprises/`
4. `https://www.assuromieuxparis.com/assurance-transport/`
5. `https://www.assuromieuxparis.com/assurance-btp-decennale/`
6. `https://www.assuromieuxparis.com/cabinet/`
7. `https://www.assuromieuxparis.com/secteurs/`
8. `https://www.assuromieuxparis.com/secteurs/transport-routier-marchandises/`
9. `https://www.assuromieuxparis.com/secteurs/convoyage-vehicules/`
10. `https://www.assuromieuxparis.com/secteurs/demenagement/`

Pour chaque URL, contrôler :

- URL finale en `www` ;
- exploration autorisée ;
- indexation autorisée ;
- canonical déclaré égal au canonical sélectionné ;
- page détectée dans le sitemap ;
- HTML et données structurées rendus sans erreur critique.

## 5. Garde-fous existants

L’indexation publique n’est activée que si les deux conditions suivantes sont réunies :

```text
PUBLIC_SITE_INDEXABLE=true
CONTEXT=production
```

Même dans ce contexte, seules les routes déclarées dans `firstWaveIndexablePaths` deviennent `index, follow`. Les Deploy Previews et branch deploys restent bloqués.

Le sitemap est généré après le build et contient uniquement les routes approuvées. Le contrôle de release vérifie notamment :

- meta robots attendue sur chaque page ;
- un title, une description, un canonical et un H1 ;
- unicité des titles et descriptions ;
- hostname canonical `www` ;
- JSON-LD syntaxiquement valide ;
- présence exacte des dix routes dans le sitemap public.

## 6. État de la mission

### Effectivement modifié

- six documents de pilotage ajoutés dans `docs/` ;
- aucun fichier Astro, TypeScript, CSS, configuration, route, guide, contenu métier ou texte SEO modifié ;
- aucune variable Netlify, règle DNS, propriété Google ou redirection de production modifiée.

### Nécessite un accès externe

1. Netlify : passer `www.assuromieuxparis.com` en Primary domain.
2. Search Console : confirmer ou créer les propriétés, valider le DNS et soumettre le sitemap.
3. Cloudflare : ajouter uniquement le TXT fourni par Google si la propriété Domaine n’est pas déjà validée.
4. Les futures mesures de conversion : accès Formspree, Cal.com et, après décision séparée, à l’outil analytics retenu.

### Reste à réaliser

1. Corriger le Primary domain Netlify.
2. Rejouer la matrice des quatre variantes et archiver les résultats.
3. Valider Search Console et soumettre le sitemap `www`.
4. Collecter un mois de données avant d’élargir l’indexation.
5. Décider séparément de l’outil de mesure, de la conformité et de son implémentation.
