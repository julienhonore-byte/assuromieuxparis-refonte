# Réalisation — Pages produits lot 02

Date : 21 juillet 2026

Statut : réalisation technique terminée en prévisualisation, sous réserve de validation métier et éditoriale. Aucun déploiement n'a été effectué.

## Périmètre réalisé

Six routes statiques ont été ajoutées :

- `/rc-professionnelle/` ;
- `/multirisque-professionnelle/` ;
- `/flotte-automobile/` ;
- `/sante-prevoyance-entreprise/` ;
- `/protection-dirigeant/` ;
- `/cyberassurance/`.

Chaque page comporte un hero, un bloc de public concerné, une lecture des risques, les points à vérifier, les erreurs fréquentes, la méthode Assuromieux, une FAQ courte, des liens connexes et un CTA. La longueur visible du contenu principal se situe entre 838 et 952 mots, dans la cible de 800 à 1 300 mots utiles.

## Système de composants

Quatre composants partagés ont été créés uniquement pour les répétitions réelles :

- `ProductHeroDiagram.astro` : illustration CSS accessible, sans image décorative distante ni JavaScript ;
- `ProductAudience.astro` : public concerné, avec variantes `split`, `aside` et `band` ;
- `ProductRiskOverview.astro` : lecture des risques, avec variantes `ledger`, `columns` et `flow` ;
- `ProductReview.astro` : points à vérifier, erreurs et encadré de distinction, avec variantes `split`, `reverse` et `stacked`.

Ces variantes changent la composition sans modifier l'ordre sémantique. Elles limitent les grilles de cartes et conservent une lecture linéaire sur mobile.

## Décisions éditoriales

- La page pilier `/assurances-entreprises/` reste synthétique et globale.
- Les pages produits partent des situations et décisions du client avant de nommer les garanties.
- Les formulations restent conditionnelles : aucun tarif, résultat, partenaire, délai ou niveau de garantie n'est affirmé.
- Les différences structurantes sont rendues visibles : RC Pro/RC exploitation, biens/pertes d'exploitation, véhicule/transport, santé/prévoyance, personne/entreprise, prévention/assurance cyber.
- Les sujets réglementaires, juridiques, fiscaux ou techniques qui dépassent le courtage sont explicitement signalés comme devant être validés.

## Navigation et maillage

Le menu principal n'a pas été surchargé. Les six pages sont accessibles depuis :

- le sélecteur produits de l'accueil ;
- le sélecteur de la page `/assurances-entreprises/` ;
- les entrées par enjeu ;
- une colonne « Assurances » dans le footer ;
- les blocs `RelatedLinks` des pages produits ;
- des liens contextuels depuis les pages Transport et BTP.

Les anciennes ancres provisoires du hub ont été supprimées du sélecteur et les destinations sont centralisées dans `src/data/products.ts`.

## SEO technique préparé

Chaque page dispose de :

- `title`, description, canonical, Open Graph et H1 propres ;
- fil d'Ariane visible ;
- données structurées `BreadcrumbList`, `Service` et `FAQPage` ;
- FAQ visible cohérente avec le JSON-LD ;
- liens vers le pilier, l'audit et des pages complémentaires ;
- CTA contextualisé vers le formulaire de l'accueil.

La carte sociale partagée du lot est enregistrée dans `public/og-produits-lot-02.jpg`, au format 1200 × 630. Elle conserve le bleu profond, les touches dorées et une représentation abstraite d'un programme d'assurances coordonné, sans portrait, statistique ni promesse.

## Contrôles techniques

- Build Astro statique : réussi, 13 pages générées.
- Liens internes et ancres : 13 pages HTML contrôlées par `pnpm check:links`, aucun lien interne cassé.
- Fichiers protégés : aucun changement prévu ; les empreintes sont contrôlées avant commit.
- Indexation : `noindex` et blocage de `robots.txt` maintenus.
- JavaScript : aucun nouveau script fonctionnel ajouté aux pages produits ; illustrations et mises en page en CSS.
- Responsive : vue large contrôlée dans le navigateur à 1280 px sans débordement ; bascules auditées à 1180, 980, 860, 768, 760, 640, 540 et 420 px, avec repli en une colonne jusqu'à 320 px.
- Accessibilité : un H1 par page, hiérarchie H2/H3 cohérente, repères sémantiques, figures labellisées, liens explicites, styles `:focus-visible` et préférence `prefers-reduced-motion` conservés.
- SEO : canonical, Open Graph, description, H1 et schémas contrôlés dans le navigateur pour les six routes.
- Console : aucune erreur ni alerte applicative observée ; seuls les messages de connexion du serveur de développement sont présents.
- Contraste : bouton principal blanc sur bleu profond mesuré à 12,22:1.

## Points à faire valider avant publication

1. Les définitions et exemples RC selon les activités effectivement accompagnées.
2. La méthode d'estimation et de réévaluation des valeurs en multirisque.
3. Les distinctions entre flotte, marchandises transportées et responsabilité transporteur.
4. Les mentions relatives aux conventions collectives, catégories, dispenses et portabilité.
5. Les sujets sociaux, fiscaux, juridiques et patrimoniaux liés au dirigeant.
6. Les exigences techniques, questionnaires, exclusions et services des contrats cyber réellement consultés.
7. Les titres, descriptions et CTA avant ouverture à l'indexation.

## Hors périmètre volontaire

- Aucune modification de `index.html` ou de `source/index-production-reference.html`.
- Aucun changement de l'identité graphique validée de l'accueil.
- Aucun sous-menu produits dans le header.
- Aucun contenu long artificiel, guide généraliste ou page locale supplémentaire.
- Aucun analytics, cookie manager, outil tiers ou nouvelle dépendance.
- Aucun déploiement, redirection ou ouverture de l'indexation.
