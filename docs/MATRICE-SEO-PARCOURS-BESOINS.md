# Matrice SEO — Parcours par besoin

Date : 22 juillet 2026
Statut : prévisualisation technique, `noindex` maintenu

## Intentions et métadonnées

| Route | Intention principale | Title | H1 | Frontière anti-cannibalisation |
|---|---|---|---|---|
| `/votre-besoin/` | Choisir un parcours selon une situation d’entreprise | `Choisir son parcours d’assurance entreprise \| Assuromieux Paris` | `Partir de votre situation pour décider.` | Hub court : ne traite aucun contrat en profondeur |
| `/votre-besoin/auditer-mes-assurances/` | Savoir comment faire le point sur ses contrats | `Auditer ses assurances professionnelles \| Assuromieux Paris` | `Faire le point sur vos assurances professionnelles` | Oriente l’audit ; `/audit-assurances-entreprise/` décrit la prestation complète |
| `/votre-besoin/comparer-mes-assurances/` | Comparer des assurances sur une base homogène | `Comparer ses assurances professionnelles \| Assuromieux Paris` | `Comparer sans réduire la décision au prix` | Méthode de décision, sans devenir une page produit ni un comparateur |
| `/votre-besoin/creer-reprendre-entreprise/` | Préparer les assurances d’une création ou reprise | `Assurances pour créer ou reprendre une entreprise \| Assuromieux Paris` | `Structurer les assurances autour du projet réel` | Situation de projet ; la page Assurances entreprises conserve le rôle de pilier produits |
| `/votre-besoin/entreprise-evolue/` | Adapter les contrats à un changement d’entreprise | `Adapter ses assurances quand l’entreprise évolue \| Assuromieux Paris` | `Faire suivre les contrats quand l’entreprise change` | Chronologie du changement, sans réécrire les garanties de chaque produit |
| `/votre-besoin/assurer-flotte-vehicules/` | Préparer et décider l’assurance d’un parc | `Assurer une flotte de véhicules d’entreprise \| Assuromieux Paris` | `Assurer un parc selon ses usages réels` | Part du parc et de sa gestion ; `/flotte-automobile/` reste la page produit |
| `/votre-besoin/assurer-activite-transport/` | Qualifier une activité avant d’articuler ses assurances | `Assurer une activité de transport \| Assuromieux Paris` | `Qualifier l’activité avant d’articuler les contrats` | Oriente entre opérations et contrats ; le hub Transport et les verticales gardent leurs intentions propres |

## Descriptions et données structurées

| Route | Meta description résumée | JSON-LD |
|---|---|---|
| Hub | choix entre audit, comparaison, projet, évolution, flotte et transport | `Organization`, `BreadcrumbList`, `CollectionPage` |
| Audit | activités déclarées, garanties, franchises, plafonds, exclusions, articulation | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |
| Comparaison | garanties, limites, franchises, exclusions, services et conditions | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |
| Création/reprise | activité, contrats, locaux, équipes et calendrier réel | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |
| Évolution | activité, équipe, locaux, véhicules, CA et territoire | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |
| Flotte | véhicules, usages, conducteurs, territoires, mouvements et sinistres | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |
| Transport | responsabilités, véhicules, marchandises, biens confiés et continuité | `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage` |

Chaque route possède un canonical absolu propre, `og:title`, `og:description` et `og:url` alignés sur la page. Les fils d’Ariane visibles correspondent au `BreadcrumbList`. Les FAQ structurées reprennent exactement les questions et réponses visibles.

## Stratégie d’ancres

- ancres de situation : `Auditer mes assurances`, `Mon entreprise évolue`, `Assurer une flotte de véhicules` ;
- ancres produits : nom exact de la page produit, sans sur-optimisation ;
- ancres ressources : titre éditorial du guide ;
- CTA : verbes précis et proportionnés — analyser, présenter, décrire, vérifier ;
- pas de répétition mécanique d’une expression cible dans les titres et liens.

## Risques suivis

1. cannibalisation Audit/parcours Audit : contenue par l’opposition orientation/prestation ;
2. cannibalisation Flotte/parcours Flotte : contenue par l’opposition données du parc/explication produit ;
3. cannibalisation Transport : contenue par la qualification initiale, puis l’orientation vers le bon niveau ;
4. page Création trop générique : contenue par une qualification opérationnelle et l’absence de liste universelle ;
5. dilution du menu : évitée par une entrée footer et des liens contextuels ;
6. surproduction SEO : aucun nouveau guide, produit, secteur ou page locale dans ce lot.

## Contrôles avant indexation

- validation métier des formulations et de la capacité réelle d’accompagnement ;
- revue des titles et descriptions avec l’ensemble du site ;
- maintien d’un seul H1 et de FAQ visibles ;
- contrôle des pages orphelines et du maillage après ajout du sitemap final ;
- retrait de `noindex` et du blocage `robots.txt` uniquement lors de la décision globale de production.
