# Mission 09 — Audit SEO

Date : 22 juillet 2026  
État : préproduction intégralement non indexable

## Verdict SEO

Le socle SEO est solide et techniquement prêt pour une ouverture sélective future. Il ne doit pas être ouvert maintenant. Les blocages sont principalement éditoriaux, réglementaires et opérationnels, non structurels.

## Inventaire technique

| Élément | Résultat |
|---|---:|
| Pages HTML | 39 |
| Titles présents | 39/39 |
| Titles dupliqués | 0 |
| Descriptions présentes | 39/39 |
| Descriptions dupliquées | 0 |
| Canonicals absolus HTTPS | 39/39 |
| Canonicals dupliqués | 0 |
| H1 uniques | 39/39 |
| `noindex, nofollow` | 39/39 |
| OpenGraph title/description/URL | 39/39 |
| Twitter Cards | 39/39 |
| JSON-LD invalide | 0 |
| `FAQPage` | 27 pages |
| `BreadcrumbList` | 37 pages |
| Liens internes cassés | 0 |

Les deux pages sans breadcrumb sont l'accueil et la 404, ce qui est cohérent.

## Titles

Les titles sont uniques et alignés avec les intentions. Treize dépassent 60 caractères. Ce seuil n'est pas une erreur technique ni une limite imposée par Google, mais signale un risque de troncature et de dilution de la marque dans les résultats.

Pages à réviser en priorité éditoriale :

- cinq guides dont les titles vont de 70 à 107 caractères ;
- `Cyberassurance entreprise et risques numériques` ;
- `Transport routier de marchandises` ;
- hub et trois parcours `Votre besoin` ;
- centre de ressources.

La révision doit conserver l'intention et ne pas modifier les URL. Les deux guides aux titles de 100 et 107 caractères sont les premiers candidats.

## Meta descriptions

Toutes les descriptions sont uniques. Aucune ne dépasse 160 caractères dans le build courant. Les descriptions de la 404 et des pages légales sont plus courtes, ce qui n'est pas bloquant.

Les descriptions sont descriptives et prudentes. Elles pourraient gagner en bénéfice décisionnel sur certaines pages produit, sans ajouter de promesse de couverture ou de résultat.

## H1, H2 et H3

La structure sémantique est correcte : un H1 par page, H2/H3 logiques, FAQ visibles et sections nommées.

Risques qualitatifs :

- plusieurs H1 internes sont très longs visuellement ;
- les trois verticales Transport comptent 23 à 26 H3 ;
- les guides comportent 13 à 16 H2 ;
- le nombre élevé de sous-titres facilite le scan mais peut fragmenter excessivement le sujet.

Il ne faut pas supprimer des titres pour une raison purement SEO. Il faut vérifier qu'ils correspondent à de vraies étapes de décision.

## Canonical et URL

Les URL sont propres, avec slash final et sans extension. Les canonicals pointent vers `https://www.assuromieuxparis.com/`, y compris depuis la préproduction. C'est le comportement attendu pour éviter de canoniser l'URL Netlify.

La 404 utilise un canonical vers la future URL 404. Elle reste `noindex` et exclue du futur sitemap.

Les anciennes URL candidates ne sont pas redirigées. C'est volontaire tant qu'un inventaire réel de production n'a pas validé chaque origine et destination.

## JSON-LD

Types observés :

- `Organization` sur le socle ;
- `LocalBusiness` + `InsuranceAgency`, `ItemList` et `FAQPage` sur l'accueil ;
- `Service` sur les pages commerciales ;
- `WebPage` sur les parcours ;
- `Article` sur les guides ;
- `CollectionPage` sur les hubs ;
- `DefinedTermSet` sur le lexique ;
- `BreadcrumbList` sur les pages internes.

Le balisage est syntaxiquement valide et correspond au contenu visible. Le risque est la donnée source : `legalName`, adresse, RCS et autres informations de l'organisation sont utilisées avant attestation. Il faut considérer ce point comme bloquant pour l'ouverture, car une donnée structurée inexacte est plus difficile à détecter visuellement qu'un texte provisoire.

Les guides déclarent un auteur organisationnel. Pour renforcer expertise et gouvernance, le futur passage à `published` doit renseigner un relecteur et une date de revue, sans inventer de qualification.

## FAQ

Les 27 schémas `FAQPage` correspondent à des FAQ visibles. C'est conforme. Il ne faut pas attendre systématiquement un extrait enrichi : l'intérêt principal reste la structure et l'aide au lecteur.

La répétition d'une FAQ de quatre questions sur de nombreuses pages est acceptable si les réponses restent réellement propres au sujet. Une revue éditoriale doit prévenir les questions génériques dupliquées uniquement pour le balisage.

## Breadcrumbs

Les fils d'Ariane visibles et structurés sont cohérents. Les libellés sont descriptifs. Les parcours Ressources et Secteurs ont une profondeur claire.

Sur les guides, le fil peut devenir long. Le titre complet dans le breadcrumb reste compréhensible mais occupe beaucoup de place à 1280 px. Une version abrégée peut être envisagée si elle conserve le sens et si le JSON-LD correspond au visible.

## Maillage interne

Le maillage est dense et sans lien cassé :

- accueil vers produits, audit, secteurs, cabinet, ressources et besoins ;
- pages produits vers audit et produits complémentaires ;
- verticales vers hub, produits et guides ;
- guides vers produit principal, compléments, audit et guides liés ;
- parcours vers produits, ressources et situations voisines ;
- footer vers toutes les familles principales.

Risques :

1. pages très maillées avec 20 à 27 liens dans le `main`, surtout les guides ;
2. concurrence perçue entre parcours Audit et page Audit, parcours Flotte et page Flotte ;
3. concurrence entre hub Transport, verticales et guide marchandises ;
4. poids du footer, qui uniformise beaucoup de liens sur toutes les pages.

Les frontières sont bien documentées. Il faudra les confirmer avec Search Console après un volume suffisant, sans fusion préventive.

## OpenGraph et partage

Conformes : `og:locale`, type, site name, title, description, URL, image sur 38 pages ; Twitter title, description et image correspondants.

Réserves :

- 404 sans image OG, non bloquant ;
- aucune balise `og:image:width`, `og:image:height` ou `og:image:alt` ;
- trois visuels seulement pour 38 pages, créant une forte répétition sociale ;
- disponibilité des images sur le domaine canonique à contrôler après bascule ;
- ancien `og.jpg` non référencé.

La création d'images spécifiques n'est utile que pour les pages stratégiques ou les guides réellement partagés. Il ne faut pas produire 39 variantes génériques.

## Indexation, robots et sitemap

État correct de préproduction :

- `meta robots` : `noindex, nofollow` ;
- `public/robots.txt` : `Disallow: /` ;
- header Netlify : `X-Robots-Tag: noindex, nofollow, noarchive` ;
- aucun sitemap ;
- aucune soumission Search Console ou Bing.

L'absence de sitemap n'est pas une anomalie dans cet état. Lors du GO explicite, le sitemap doit être filtré selon `PLAN-INDEXATION.md`, puis robots, headers et meta doivent être coordonnés. Une levée partielle est dangereuse : garder un seul verrou suffit à empêcher l'indexation attendue, retirer tous les verrous trop tôt expose les pages différées.

## Guides et qualité éditoriale

Les six guides sont utiles, sourcés et reliés à une intention. Leur longueur moyenne d'environ 1 140 mots est raisonnable. Aucun contenu n'est allongé artificiellement.

Blocage : les six ont encore `status: review-required`. Le guide décennale requiert une relecture métier/juridique renforcée. Aucun de ces guides ne doit entrer dans le sitemap ou perdre son `noindex` avant signature.

## SEO local et national

Le site articule bien Paris et intervention nationale. Il évite les pages locales clonées. Le schéma local et l'adresse soutiennent le signal parisien, sous réserve d'attestation.

Avant ouverture :

- confirmer l'adresse officielle et sa typographie ;
- confirmer l'entité et le numéro ORIAS ;
- vérifier la cohérence du domaine avec les propriétés Google/Bing ;
- ne pas créer de pages villes sans présence ou contenu distinct.

## Priorités SEO

1. attester toutes les données d'organisation utilisées dans le visible et le JSON-LD ;
2. signer les contenus de la première vague ;
3. définir le sitemap filtré et tester la levée coordonnée seulement après GO ;
4. raccourcir les titles les plus longs sans changer les intentions ;
5. ajouter les attributs OG image utiles ;
6. observer la cannibalisation réelle dans Search Console avant toute fusion ;
7. maintenir une cadence éditoriale soutenable plutôt qu'ajouter des pages.

## Note SEO

**8,2 / 10 en qualité de préproduction.**

La note ne signifie pas que le site est indexable aujourd'hui. Elle évalue la qualité du socle préparé. L'état de publication reste NO GO jusqu'à la fermeture des blocages transversaux.
