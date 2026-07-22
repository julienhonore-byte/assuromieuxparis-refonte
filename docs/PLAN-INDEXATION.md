# Plan d’indexation — RC2

Date : 22 juillet 2026

Le site reste intégralement `noindex, nofollow` et `robots.txt` bloque tout. Cette classification prépare la bascule ; elle ne l’autorise pas.

## Première vague — GO après conditions RC2

- `/`
- `/audit-assurances-entreprise/`
- `/assurances-entreprises/`
- `/assurance-transport/`
- `/assurance-btp-decennale/`
- `/cabinet/`
- `/secteurs/`
- `/secteurs/transport-routier-marchandises/`
- `/secteurs/convoyage-vehicules/`
- `/secteurs/demenagement/`

Conditions communes : données réglementaires et pages légales validées, formulaire réel validé, préproduction privée contrôlée et GO signé.

## GO différé

### Produits

`/rc-professionnelle/`, `/multirisque-professionnelle/`, `/flotte-automobile/`, `/sante-prevoyance-entreprise/`, `/protection-dirigeant/`, `/cyberassurance/`.

Condition : validation métier humaine documentée ; la santé/prévoyance et les sujets juridiques associés exigent une relecture spécialisée.

### Parcours besoins

Le hub `/votre-besoin/` et ses six routes détaillées restent en deuxième vague malgré leurs validations sous réserve.

### Ressources

Le hub `/ressources/`, ses quatre catégories, `/ressources/guides/`, les six guides et `/lexique/` restent différés. Le passage de `review-required` à un statut publié exige un relecteur identifié.

## Accessibles mais non indexées

- `/mentions-legales/` et `/politique-confidentialite/` : nécessaires à la navigation, non indexées tant que les données ne sont pas finalisées ;
- `/404.html` : toujours `noindex, nofollow` et exclue du sitemap.

## Sitemap de production

1. le générer uniquement dans la mission d’ouverture ;
2. inclure exclusivement les dix routes de première vague ;
3. exclure 404, pages légales incomplètes et toutes les routes différées ;
4. vérifier domaine/canonicals sur Netlify ;
5. déclarer le sitemap dans `robots.txt` au même moment que l’ouverture ;
6. contrôler les réponses HTTP avant soumission Search Console.

Toute levée globale est interdite. Les vagues ultérieures nécessitent chacune une validation documentaire et un ajout explicite au sitemap.
