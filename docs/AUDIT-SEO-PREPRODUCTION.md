# Audit SEO de préproduction — RC1

Date : 22 juillet 2026. Périmètre : les 37 fichiers HTML générés par Astro.

## Résultat exécutif

Le socle on-page est propre et cohérent. Le site n'est toutefois pas publiable ni indexable : le blocage volontaire `noindex, nofollow` et `robots.txt` doit rester en place, aucun sitemap n'existe, les pages légales sont absentes et plusieurs contenus attendent une validation humaine.

## Contrôles automatisés

| Contrôle | Résultat | Statut |
|---|---:|---|
| Pages HTML | 37 | Conforme au périmètre RC1 |
| Title présents et uniques | 37 / 37, aucun doublon | Conforme |
| Meta descriptions présentes et uniques | 37 / 37, aucun doublon | Conforme |
| Canonicals présents et uniques | 37 / 37, aucun doublon | Conforme sous réserve 404 |
| H1 | Un H1 unique sur 37 / 37 | Conforme |
| Langue du document | `fr` sur 37 / 37 | Conforme |
| IDs dupliqués | Aucun | Conforme |
| JSON-LD analysable | Aucun JSON invalide | Conforme syntaxiquement |
| Liens internes cassés | Aucun selon `pnpm check:links` | Conforme |
| Pages orphelines | Aucune page éditoriale ; la 404 n'a volontairement aucun lien entrant | Conforme |
| Meta robots | `noindex, nofollow` partout | Conforme à la préproduction |
| Twitter Card | Présente partout | Conforme |
| Open Graph complet | 36 / 37 | Réserve mineure sur la 404 |

## Titles et descriptions

- Tous les titles et descriptions sont uniques et alignés sur l'intention principale de leur route.
- Les descriptions du lexique (157 caractères) et du guide RC (159 caractères) sont légèrement longues. Il s'agit d'une optimisation secondaire, pas d'un blocage.
- Aucun contenu final ne doit être allongé artificiellement pour atteindre une longueur SEO.

## Canonicals et URL

- Les canonicals utilisent `https://www.assuromieuxparis.com` et des URL propres avec slash terminal.
- La 404 utilise `https://www.assuromieuxparis.com/404` alors que la sortie physique est `404.html`. Comme la page est `noindex, nofollow`, l'impact est faible ; la cohérence de l'URL d'erreur devra néanmoins être testée sur Netlify.
- Aucun canonical dupliqué n'a été détecté.

## Hiérarchie éditoriale

- Chaque page a exactement un H1.
- Les H2 et H3 structurent les sections sans saut critique observé dans les gabarits.
- Les hubs utilisent des H2/H3 de sélection ; les guides ont une table des matières et une structure plus profonde adaptée à la lecture longue.
- Le fil d'Ariane est présent sur toutes les pages internes, sauf l'accueil et la 404 où il n'est pas nécessaire.

## Open Graph et partage social

- Toutes les pages éditoriales ont `og:title`, `og:description`, `og:url`, `og:image` et une Twitter Card.
- La 404 n'a pas d'image Open Graph et utilise une carte `summary`. C'est acceptable pour une page non indexable.
- Les quatre images OG sont locales et raisonnables (168 à 219 Ko).

## Données structurées

| Famille | Schémas observés |
|---|---|
| Accueil | Organization, LocalBusiness, InsuranceAgency, ItemList, FAQPage |
| Services et secteurs | Organization, BreadcrumbList, Service, FAQPage |
| Parcours besoin | Organization, BreadcrumbList, WebPage, FAQPage |
| Guides | Organization, BreadcrumbList, Article, FAQPage |
| Hubs | Organization, BreadcrumbList, CollectionPage |
| Lexique | Organization, BreadcrumbList, DefinedTermSet |
| Cabinet | Organization, BreadcrumbList, AboutPage, FAQPage |

Les FAQ visibles et les FAQ structurées sont construites depuis les mêmes données. La syntaxe JSON-LD est valide. En revanche, le schéma Organization réplique sur presque toutes les pages des informations réglementaires non encore attestées ; sa validité factuelle est donc bloquante, même si sa syntaxe est correcte.

## Maillage interne

- Toutes les pages éditoriales reçoivent au moins deux liens entrants ; la plupart des pages commerciales en reçoivent 36 via la navigation et le footer.
- Les guides reçoivent entre 4 et 18 liens internes selon leur thème.
- Les hubs `/ressources/`, `/secteurs/` et `/votre-besoin/` jouent correctement leur rôle de distribution.
- Le footer pointe actuellement vers des ancres provisoires pour les mentions légales et la confidentialité. Ces liens ne remplacent pas des pages légales autonomes.

## Indexation et sitemap

- `public/robots.txt` contient un blocage global `Disallow: /`.
- Toutes les pages ont `noindex, nofollow`.
- Aucun sitemap n'est présent.
- Ces trois points sont cohérents en préproduction. Ils deviennent bloquants au moment du GO production.
- Le sitemap de production devra être généré à partir de la liste d'URL autorisées dans `PLAN-INDEXATION.md`, puis déclaré dans `robots.txt` et Search Console.

## Anomalies et actions

| Priorité | Anomalie | Action |
|---|---|---|
| Bloquante | Données Organization non validées | Confirmer toutes les informations réglementaires avant publication |
| Bloquante | Pages mentions légales et confidentialité absentes | Créer et faire valider ces pages lors d'une mission autorisant de nouvelles routes |
| Bloquante | Sitemap absent | Générer seulement après validation de la liste indexable |
| Bloquante | Six guides `review-required` | Validation métier, auteur/relecteur/date, puis passage en statut publiable |
| Bloquante | Six produits avec validations métier ouvertes | Clore les points documentés dans `VALIDATION-METIER-PRODUITS-LOT-02.md` |
| Mineure | Canonical 404 à tester sur Netlify | Vérifier la réponse 404 et l'URL effectivement servie |
| Mineure | Deux descriptions légèrement longues | Ajuster seulement si le sens reste intact |

## Conclusion SEO

**Techniquement sain, non indexable et non publiable en l'état.** La levée du noindex ne doit intervenir qu'après la checklist GO, la création du sitemap filtré et la validation des données légales, produits et guides.
