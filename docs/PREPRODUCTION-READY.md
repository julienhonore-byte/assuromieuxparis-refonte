# Préproduction privée — état de préparation

Date : 22 juillet 2026  
Base contrôlée : RC2, commit `a05a4d8cad4b497f5342ee487c969ce085a3f343`

## Décision

**PRÊTE À ÊTRE DÉPLOYÉE SUR UNE PRÉPRODUCTION NETLIFY PRIVÉE SOUS CONDITIONS.**

Cette décision ne signifie ni que le site a été déployé, ni qu'il est publiable. Aucun déploiement n'a été réalisé pendant la mission. Le premier déploiement est interdit tant que le contrôle d'accès Netlify n'a pas été activé et vérifié dans l'interface du site cible.

## Conditions avant le premier déploiement

| Condition | Responsable | Critère vérifiable | Statut |
|---|---|---|---|
| Site Netlify distinct de la production | Assuromieux / technique | Aucun domaine de production associé | À fournir |
| Forfait et mode de protection confirmés | Propriétaire Netlify | Team login ou Password Protection disponible | À fournir |
| Protection activée avant déploiement | Propriétaire Netlify | Visiteur non authentifié bloqué, testeur autorisé admis | Bloquant |
| Branche privée et responsables nommés | Assuromieux | Branche, déployeur et décideur consignés | À fournir |
| Données légales et réglementaires | Assuromieux / conformité | Éléments de `INFORMATIONS-REQUISES-ASSUROMIEUX.md` validés | Bloquant pour publication, non pour recette privée |
| Test Formspree autorisé | Propriétaire du formulaire | Compte, destinataire, suppression et données de test validés | Bloquant pour le test réel |

Netlify précise que les URL de Deploy Preview et branch deploy sont partageables avec toute personne disposant du lien tant qu'une protection par mot de passe ou connexion d'équipe n'est pas activée. La confidentialité ne peut donc pas reposer sur une URL « difficile à deviner » : <https://docs.netlify.com/manage/security/secure-access-to-sites/password-protection/>.

## Configuration Netlify préparée

`netlify.toml` est syntaxiquement valide et conserve le même build que la future production :

- commande : `pnpm build` ;
- sortie : `dist` ;
- Node 24 et pnpm 11.9.0 ;
- Astro statique, URL propres et slash final ;
- télémétrie Astro désactivée ;
- aucune fonction, Edge Function ou dépendance Netlify ajoutée.

### Headers préparés

| Périmètre | Header | Valeur / objectif |
|---|---|---|
| Toutes les réponses | `X-Robots-Tag` | `noindex, nofollow, noarchive` |
| Toutes les réponses | `Cache-Control` | revalidation systématique |
| Toutes les réponses | `X-Content-Type-Options` | `nosniff` |
| Toutes les réponses | `X-Frame-Options` | `SAMEORIGIN` |
| Toutes les réponses | `Referrer-Policy` | `strict-origin-when-cross-origin` |
| Toutes les réponses | `Permissions-Policy` | désactivation des capacités non utilisées |
| `/_astro/*` | `Cache-Control` | un an, `immutable`, uniquement pour les assets fingerprintés |

Les headers Netlify ne peuvent être certifiés par `astro preview`. Après le déploiement privé, les contrôler avec `curl -I` sur une session autorisée. HSTS et CSP ne sont pas activés : HSTS doit être arbitré avec le domaine final ; une CSP nécessite une recette des styles/scripts inline et de Formspree.

Documentation officielle : <https://docs.netlify.com/manage/routing/headers/>.

## Variables d'environnement

Le build actuel ne lit aucune variable d'environnement. Aucun secret n'est nécessaire et aucune valeur n'a été ajoutée au dépôt.

| Variable préparée | Statut | Scope futur | Règle |
|---|---|---|---|
| `PUBLIC_GA_MEASUREMENT_ID` | Non créée, non consommée | Builds, uniquement production autorisée | Identifiant public ; interdit avant décision GA4/CMP/politique |
| Jeton Google Search Console | Non créé | DNS recommandé, hors dépôt | Ne jamais inventer ni commiter le jeton |
| Jeton Bing Webmaster | Non créé | DNS ou méthode validée, hors dépôt | Ne jamais inventer ni commiter le jeton |
| Formspree | URL publique existante dans `src/data/site.ts` | Aucun secret | Ne pas modifier avant validation du compte |
| Cal.com | URL publique existante dans `src/data/site.ts` | Aucun secret | Ne pas modifier avant validation du compte |

Les futures valeurs sensibles doivent être créées dans l'interface Netlify avec le scope et le contexte minimaux, conformément à <https://docs.netlify.com/build/environment-variables/overview/>.

## Redirections

Aucune redirection n'est activée. C'est l'état correct pour la préproduction initiale : les anciennes URL candidates ne sont pas encore attestées par un crawl de production, Search Console ou les journaux.

Le plan prêt à instruire reste `docs/PLAN-REDIRECTIONS.md`. Après validation de chaque origine : ajouter une règle 301 explicite dans `netlify.toml`, contrôler un seul saut, destination 200, canonical cohérent, query string utile et absence de boucle. Aucun catch-all vers l'accueil n'est autorisé.

## Robots et sitemap futur

### État privé

- 39/39 pages contiennent `noindex, nofollow` ;
- `public/robots.txt` répond avec `Disallow: /` ;
- `X-Robots-Tag` ajoute un troisième verrou au niveau Netlify ;
- aucun sitemap n'est généré ni exposé ;
- aucune demande d'indexation ne doit être envoyée.

### Sitemap préparé, non créé

Le futur sitemap de première vague contiendra exclusivement :

```text
https://www.assuromieuxparis.com/
https://www.assuromieuxparis.com/audit-assurances-entreprise/
https://www.assuromieuxparis.com/assurances-entreprises/
https://www.assuromieuxparis.com/assurance-transport/
https://www.assuromieuxparis.com/assurance-btp-decennale/
https://www.assuromieuxparis.com/cabinet/
https://www.assuromieuxparis.com/secteurs/
https://www.assuromieuxparis.com/secteurs/transport-routier-marchandises/
https://www.assuromieuxparis.com/secteurs/convoyage-vehicules/
https://www.assuromieuxparis.com/secteurs/demenagement/
```

La 404, les pages légales incomplètes, les produits différés, les parcours et les ressources doivent rester exclus jusqu'à leur GO propre. Le fichier ne sera créé que pendant la mission explicite d'ouverture de l'indexation.

## Métadonnées et OpenGraph

| Contrôle du build | Résultat |
|---|---|
| Titles | 39 présents, 0 doublon |
| Descriptions | 39 présentes, 0 doublon |
| Canonicals | 39 présents, uniques, HTTPS |
| H1 | 39/39 avec un H1 |
| `main` | 39/39 avec un élément principal |
| Meta robots | 39/39 `noindex, nofollow` |
| OpenGraph essentiel | 39/39 avec title, description et URL |
| Twitter Cards | présentes sur toutes les pages |
| JSON-LD | 0 erreur de syntaxe |
| FAQPage | 27 pages |
| BreadcrumbList | 37 pages |

Les canonicals et URL OpenGraph utilisent volontairement le futur domaine de production. Aucune URL Netlify ne doit devenir canonical.

## Images, logo et favicon

| Asset | Dimensions | Poids approximatif | Usage | Résultat |
|---|---:|---:|---|---|
| `og-homepage-03.jpg` | 1200×630 | 165 Ko | partage par défaut | Conforme visuellement |
| `og-homepage-04.jpg` | 1200×630 | 180 Ko | accueil | Conforme visuellement |
| `og-produits-lot-02.jpg` | 1200×630 | 214 Ko | six produits | Conforme visuellement |
| `og.jpg` | 1200×630 | 207 Ko | ancien asset non référencé | À conserver jusqu'à décision d'archivage |
| `logo/assuromieux-paris.jpeg` | 300×83 | 11 Ko | header/footer/schema | Présent, dimensions déclarées |
| Favicon | — | — | onglet/signets | **Absent : `/favicon.ico` répond 404** |

Le favicon est une réserve visuelle réelle. Aucun pictogramme ou recadrage de marque n'a été inventé. Assuromieux doit fournir ou valider un actif carré SVG/PNG/ICO avant production. Son absence ne bloque pas une recette privée.

Le répertoire `public/images/` ne contient encore aucune photographie. Le chemin attendu `/images/paris-tour-eiffel-hero.webp` reste un indicateur de futur asset avec fallback graphique ; il n'est pas chargé comme image et ne crée aucun lien cassé.

## Liens absolus

Huit destinations HTTP externes apparaissent dans les pages rendues. ORIAS, CNIL, Écologie, Service Public et Cal.com répondent correctement. Économie.gouv.fr et Légifrance renvoient un 403 aux requêtes automatisées, mais leurs URL officielles sont valides et accessibles en navigation. Formspree renvoie 405 sur GET, attendu pour l'endpoint POST.

Les trois URL d'images OpenGraph correspondent à des fichiers locaux présents. Leur disponibilité sur le domaine canonique devra être contrôlée après la future bascule, pas depuis la préproduction protégée.

## CTA et parcours

- 263 occurrences de liens d'action dans les 39 HTML, aucune sans destination ;
- aucun lien ou asset interne cassé ;
- 15 paramètres et alias de besoin préremplissent le libellé attendu ;
- parcours contrôlés : accueil → RC professionnelle → formulaire prérempli ; création/reprise → formulaire ; transport → audit ; ressources → guide ;
- navigation mobile ouverte puis fermée avec Échap, `aria-expanded` correct et retour du focus ;
- 18 contrôles responsive sur six gabarits à 320, 768 et 1440 px, sans débordement ;
- aucune erreur ou alerte console pendant la recette.

## Formulaire

Un seul formulaire est présent dans le build principal.

| Contrôle | Résultat |
|---|---|
| Action | `https://formspree.io/f/mnjlwzlp`, inchangée |
| Méthode | POST |
| Repli sans JavaScript | HTML POST présent |
| Champs obligatoires | prénom, nom, entreprise, email, téléphone |
| Validation locale | formulaire vide bloqué, focus sur le premier champ, état annoncé |
| Préremplissages | 15/15 conformes |
| Politique | lien vers `/politique-confidentialite/` |
| Cal.com | URL inchangée, visible après succès uniquement |
| Envoi réel | Non exécuté |

Un test réel exige une URL Netlify déjà protégée, la confirmation du propriétaire/destinataire Formspree, une politique validée, des données synthétiques autorisées et une procédure de suppression. Sans ces éléments, une soumission aurait constitué un traitement externe non autorisé.

## Search Console, GA4 et Bing

### Google Search Console

Préparer une propriété Domaine pour `assuromieuxparis.com` et privilégier la vérification DNS par un propriétaire identifié. Ne pas ajouter de balise ou fichier de vérification fictif. Ne soumettre aucun sitemap et ne demander aucune indexation pendant la préproduction. Google précise que la vérification HTML exige une page d'accueil non authentifiée, donc cette méthode n'est pas adaptée à l'environnement privé : <https://support.google.com/webmasters/answer/9008080>.

### GA4

Aucun tag, conteneur, script ou identifiant GA4 n'est installé. La préparation se limite à la nomenclature de `docs/PLAN-MESURE.md`. Avant activation : propriétaire du compte, Measurement ID, finalités, politique de confidentialité, règle de consentement/CMP, paramètres de rétention, exclusions du trafic interne et recette sans donnée personnelle. Ne jamais transmettre nom, email, téléphone, entreprise ou message.

### Bing Webmaster Tools

Préparer le propriétaire, le domaine et la méthode de vérification. Ne déposer aucun jeton fictif et ne soumettre aucun sitemap avant le GO d'indexation. Après ouverture, contrôler le sitemap filtré, les erreurs de crawl et les 404. Documentation : <https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf>.

## Procédure de déploiement privé

1. Créer ou sélectionner un site Netlify distinct, sans domaine de production.
2. Avant de connecter/déployer la branche, activer Team login ou Password Protection pour **tous les deploys concernés**.
3. Vérifier le contrôle d'accès avec un visiteur non authentifié et un Reviewer autorisé.
4. Configurer racine, `pnpm build`, `dist`, Node 24 et pnpm 11.9.0.
5. Déployer uniquement le commit approuvé sur la branche de préproduction.
6. Contrôler HTTPS, 39 pages, 404, liens, headers, assets, robots et `noindex` depuis l'URL privée.
7. Exécuter la recette responsive, clavier, zoom 200 % et lecteur d'écran.
8. Exécuter le test Formspree réel uniquement après autorisation, puis supprimer les données de test.
9. Archiver hash, URL privée, date, testeur, résultats et cible de rollback.
10. Ne jamais associer le domaine, créer de redirection production, soumettre un sitemap ou ouvrir l'indexation dans cette mission.

## Contrôles exécutés

```sh
pnpm install --frozen-lockfile
pnpm verify
pnpm build
python3 -c 'import tomllib; tomllib.load(open("netlify.toml", "rb"))'
git diff --check
shasum -a 256 index.html source/index-production-reference.html
```

Résultats : installation réussie, build réussi, 39 pages, zéro lien interne cassé et TOML valide.

## Limites et prochaine autorisation nécessaire

La base est prête à être raccordée à une préproduction privée, mais la préproduction Netlify n'existe pas encore dans ce dépôt. Sa création nécessite les accès et le choix du mécanisme de protection Assuromieux. Une fois ce contrôle d'accès confirmé, la prochaine mission peut être : **déployer sur le site Netlify privé autorisé et exécuter la recette distante complète, sans ouverture d'indexation**.
