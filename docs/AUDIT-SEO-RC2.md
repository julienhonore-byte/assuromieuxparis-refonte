# Audit SEO — RC2

Date : 22 juillet 2026

## Périmètre

RC2 ajoute deux routes légales au socle RC1. Le contrôle automatisé porte donc sur **39 pages générées** : les 37 routes RC1 et les deux nouvelles pages.

## Résultats

| Contrôle | Résultat constaté |
|---|---|
| Titles | 39/39 présents, 0 doublon |
| Meta descriptions | 39/39 présentes, 0 doublon |
| Canonicals | 39/39 présents, 0 doublon |
| H1 | 39/39 pages avec exactement un H1 |
| Structure principale | 39/39 pages avec exactement un `main` |
| JSON-LD | 0 erreur de syntaxe ; 27 pages FAQ et 37 pages Breadcrumb |
| OpenGraph | bloc complet sur 38/39 pages ; la 404 n’a volontairement pas d’image sociale |
| Twitter Cards | 39/39 pages |
| Liens internes | 39 HTML contrôlés, aucun lien ni ancre cassés |
| Pages orphelines | pages légales reliées par le footer global ; aucune nouvelle orpheline |
| Cannibalisation technique | 0 title, description ou canonical dupliqué |
| Meta robots | `noindex, nofollow` conservé sur 39/39 pages |
| `robots.txt` | `Disallow: /` conservé |

## Pages légales

- `/mentions-legales/` : title, description, canonical, H1 et fil d’Ariane spécifiques ;
- `/politique-confidentialite/` : mêmes garanties et lien direct depuis le formulaire ;
- aucune donnée juridique non attestée n’est injectée dans leur JSON-LD ;
- elles devront rester non indexées tant que les placeholders subsistent.

## Sitemap

Le sitemap n’est volontairement pas généré dans RC2. Publier un sitemap de routes toutes bloquées serait sans bénéfice et risquerait de brouiller la bascule. Il sera créé dans la mission d’indexation, avec uniquement la première vague autorisée. La 404, les pages légales incomplètes, produits/guides non validés et autres routes différées devront en être exclus.

## Risque transversal restant

Le schéma Organization et plusieurs pages utilisent les valeurs de `src/data/site.ts` (adresse, identité et coordonnées). Leur cohérence technique est bonne, mais leur exactitude réglementaire n’est pas attestée. C’est un blocage de vérité des données, pas un défaut de balisage.

## Décision SEO

**Validé sous réserve.** RC2 ne crée aucune collision ni lien cassé et maintient la prévisualisation fermée. Toute levée de `noindex`, modification de `robots.txt` ou création de sitemap reste interdite sans mission explicite.

La recette navigateur des deux nouvelles routes à 320, 768 et 1440 px confirme un H1 unique, aucun débordement horizontal et aucune erreur ou alerte console.
