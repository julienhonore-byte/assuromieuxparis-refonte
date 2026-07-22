# Réalisation — Parcours par besoin

Date : 22 juillet 2026
Lot : Mission 7

## Périmètre réalisé

- sept routes statiques sous `/votre-besoin/` ;
- cinq composants de composition dédiés et réutilisables ;
- une source de navigation centralisée ;
- schémas `WebPage` et `FAQPage` ajoutés au module SEO existant ;
- six valeurs de préremplissage visibles dans le formulaire existant ;
- entrée `Votre besoin` dans le footer ;
- maillage depuis l’accueil, les pages Audit, Assurances entreprises, Transport, Flotte, Ressources et les trois verticales Transport ;
- cinq livrables d’architecture, SEO, conversion, réalisation et recette.

## Choix de réalisation

Les pages ne réutilisent pas une grille commerciale uniforme. Elles alternent un hero éditorial, une séquence chronologique, deux tableaux de vérification, un bloc de décision sombre, une FAQ et des liens complémentaires. Les composants restent sobres, sans animation et utilisent uniquement les variables graphiques existantes.

Les contenus enfants comportent entre 840 et 936 mots visibles dans leur élément `main` après génération statique. Ils restent dans la cible de 700 à 1 200 mots utiles sans recourir à des paragraphes SEO artificiels.

## Fichiers de code créés

- `src/components/NeedHero.astro`
- `src/components/NeedPath.astro`
- `src/components/NeedChecklist.astro`
- `src/components/NeedDecision.astro`
- `src/components/NeedNavigation.astro`
- `src/data/needs.ts`
- `src/pages/votre-besoin/index.astro`
- `src/pages/votre-besoin/auditer-mes-assurances/index.astro`
- `src/pages/votre-besoin/comparer-mes-assurances/index.astro`
- `src/pages/votre-besoin/creer-reprendre-entreprise/index.astro`
- `src/pages/votre-besoin/entreprise-evolue/index.astro`
- `src/pages/votre-besoin/assurer-flotte-vehicules/index.astro`
- `src/pages/votre-besoin/assurer-activite-transport/index.astro`

## Fichiers de code modifiés

- `src/components/ContactForm.astro`
- `src/data/seo.ts`
- `src/data/site.ts`
- `src/pages/index.astro`
- `src/pages/audit-assurances-entreprise.astro`
- `src/pages/assurances-entreprises.astro`
- `src/pages/assurance-transport.astro`
- `src/pages/flotte-automobile.astro`
- `src/pages/ressources/index.astro`
- `src/pages/secteurs/transport-routier-marchandises/index.astro`
- `src/pages/secteurs/convoyage-vehicules/index.astro`
- `src/pages/secteurs/demenagement/index.astro`

## Hors périmètre confirmé

- aucune nouvelle page HTML hors des sept routes demandées ;
- aucune nouvelle dépendance ;
- aucune modification du menu principal, de Formspree, Cal.com, Netlify, `robots.txt` ou de la stratégie `noindex` ;
- aucun analytics, cookie, visuel externe ou formulaire supplémentaire ;
- aucun déploiement ;
- `index.html` et `source/index-production-reference.html` restent protégés.
