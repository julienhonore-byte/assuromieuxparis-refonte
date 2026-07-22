# Mission 09 — Audit qualité technique

Date : 22 juillet 2026  
Base : commit `ec84a08`

## Verdict

Le projet est simple, performant et maintenable. Astro statique, une seule dépendance de développement, données centralisées et composants partagés forment un bon socle. La dette identifiée est légère et ne justifie aucun changement d'architecture.

## Build et liens

Nouveau contrôle exécuté :

```sh
pnpm verify
```

Résultat :

- build Astro réussi ;
- 39 pages générées ;
- aucun avertissement de build ;
- aucun lien ou ancre interne cassé ;
- génération totale inférieure à une seconde dans l'environnement contrôlé.

## Dépendances

Le projet utilise uniquement :

- `astro@7.1.3` en dépendance de développement ;
- Node 24 et pnpm 11.9.0 dans Netlify ;
- Formspree et Cal.com comme services distants, chargés seulement après action utilisateur.

Aucun framework client, bibliothèque CSS, police distante, analytics, CMP ou SDK tiers n'est chargé. C'est favorable aux performances et à la sécurité.

Le contrôle de vulnérabilités du registre n'a pas été relancé dans cette mission, car il nécessiterait une interrogation réseau distincte. Le lockfile et le build sont reproductibles.

## Performance statique

### Atouts

- HTML statique ;
- aucun bundle JavaScript externe ;
- scripts client courts pour menu, sélection produit et formulaire ;
- logo léger ;
- images sociales non chargées dans les pages ;
- assets Astro fingerprintés et cache immutable préparé ;
- aucune photographie LCP.

### Poids observés

- HTML cumulé des 39 pages : environ 1,35 Mo non compressé ;
- plus gros HTML : Convoyage, environ 54 Ko ;
- accueil : environ 51 Ko ;
- principal CSS partagé : environ 23 Ko ;
- CSS accueil : environ 22 Ko ;
- CSS spécialisés : 4 à 10 Ko ;
- plus grand asset : image OG produits, environ 214 Ko.

Les performances devraient être très bonnes. Une mesure Lighthouse distante reste nécessaire sur Netlify, car le rendu local ne mesure ni TLS, ni CDN, ni cache, ni latence réelle.

## Composants inutilisés

Quatre composants n'ont aucune référence dans `src/` :

- `ExpertiseCard.astro` ;
- `MediaPlaceholder.astro` ;
- `MethodStep.astro` ;
- `TrustBadge.astro`.

`Card.astro` est utilisé uniquement par la démonstration interne. `Hero.astro` est utilisé par la 404 et la démonstration. Ils ne sont donc pas inutilisés.

Les quatre composants orphelins ne dégradent pas le build final, car Astro ne les bundle pas. Ils constituent seulement une dette de compréhension. Leur suppression ou archivage doit faire l'objet d'une mission de nettoyage distincte après confirmation qu'ils ne servent pas de référence au design system.

## Imports inutilisés

Aucun import manifestement inutilisé n'a été identifié par lecture des composants centraux. Le projet ne possède cependant ni ESLint, ni règle TypeScript dédiée aux imports inutilisés. Le build Astro ne constitue pas un contrôle exhaustif sur ce point.

Recommandation future : ajouter un contrôle léger seulement si la dette augmente. Une dépendance de lint ne se justifie pas uniquement pour quatre composants orphelins.

## Duplications

### CSS

La règle `.faq-layout { max-width: 58rem; }` apparaît dans 21 pages. Elle est parfois répétée seule dans une balise `<style>`. C'est une duplication faible mais facilement centralisable lors d'une future mission de maintenance.

Les pages Mentions légales et Politique de confidentialité partagent aussi une structure et des styles proches. Tant que leur contenu reste provisoire, créer un composant légal abstrait n'apporterait pas de valeur immédiate.

### Contenu et structure

Les six produits partagent les composants `ProductAudience`, `ProductRiskOverview`, `ProductReview`, `SolutionMethod`, `FAQ`, `RelatedLinks` et `PageCTA`. C'est une réutilisation saine, pas une duplication technique.

Les six parcours « Votre besoin » répètent une structure comparable. Les composants sont mutualisés, mais les pages restent rédigées séparément. Le risque est une divergence éditoriale plus qu'une dette de code.

## Données centralisées

Points positifs :

- navigation et identité dans `site.ts` ;
- produits dans `products.ts` ;
- besoins dans `needs.ts` ;
- ressources et lexique dans leurs sources dédiées ;
- schémas SEO dans `seo.ts` ;
- collection Astro typée.

Risque majeur : `site.ts` centralise aussi des données non attestées — nom légal, adresse, ORIAS et RCS — utilisées dans le footer et le JSON-LD. La centralisation est techniquement bonne, mais elle propage rapidement une valeur inexacte. Il faut ajouter une validation de gouvernance, pas dupliquer ou masquer ces données.

## Formulaire

Le JavaScript est lisible et progressif dans son intention. Il gère validité, chargement, succès, erreur, focus et sessionStorage.

Dette :

- le formulaire porte `novalidate` ; sans JavaScript, le navigateur peut envoyer des champs incomplets au endpoint ;
- pas de timeout ni annulation réseau ;
- erreurs uniquement globales ;
- pas de tests automatisés ;
- endpoint et campagne codés en dur dans les données/composant ;
- aucune vérification réelle du compte et de la délivrabilité.

La correction doit préserver le POST natif et ne pas changer Formspree sans décision explicite.

## Tests et assurance qualité

Automatisé aujourd'hui :

- build statique ;
- contrôle des liens et ancres internes.

Documenté mais non automatisé dans le dépôt :

- métadonnées, JSON-LD, responsive, menu, console, clavier, formulaire ;
- captures multi-viewport ;
- Lighthouse ;
- lecteur d'écran et zoom 200 % ;
- headers Netlify ;
- test Formspree réel.

Le projet n'a pas besoin d'une suite lourde. Trois tests légers à forte valeur seraient suffisants : métadonnées/H1/JSON-LD sur le build, smoke test menu/formulaire sans envoi, et vérification des headers/404 sur l'URL Netlify privée.

## Configuration Netlify

La configuration est cohérente : build `pnpm build`, publication `dist`, versions verrouillées, headers anti-indexation et cache immutable des assets.

À contrôler à distance :

- application réelle de `X-Robots-Tag` ;
- protection Team login ou mot de passe ;
- réponse HTTP de la 404 ;
- HTTPS ;
- slash final ;
- cache des HTML et assets ;
- absence de domaine de production associé.

HSTS et CSP peuvent rester différés jusqu'à un environnement HTTPS final et une recette des scripts inline/Formspree.

## Assets et dette

- favicon absent ;
- `og.jpg` non référencé ;
- quatre composants orphelins ;
- répertoire `public/images/` vide avec `.gitkeep` ;
- logo JPEG sans source vectorielle ;
- aucun manifest, non nécessaire pour ce site vitrine ;
- aucun sitemap, volontaire pendant `noindex`.

## Références protégées

Empreinte contrôlée pour les deux fichiers :

```text
cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0
```

`index.html` et `source/index-production-reference.html` restent intacts.

## Note qualité technique

**8,3 / 10.**

La dette est faible. Les priorités sont un contrôle distant reproductible, un repli formulaire robuste et la suppression future des éléments réellement orphelins, sans ajouter de dépendance lourde.
