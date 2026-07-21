# Simplification Homepage 03 — Assuromieux Paris

Date : 21 juillet 2026
Statut : implémentée en prévisualisation, sans déploiement.

## Objectif

Transformer l'accueil en porte d'entrée rapide vers les assurances, réduire la densité des pages MVP et conserver le positionnement de conseil en assurance entreprise à Paris.

## Sections supprimées de l'accueil

- bandeau de cinq arguments sous le hero ;
- cartographie circulaire du programme d'assurance ;
- section séparée des trois signaux de renouvellement ;
- grille de sept grandes cartes d'expertises ;
- preuve de méthode et livrable en section autonome ;
- méthode détaillée en six étapes ;
- présentation personnelle et emplacement de portrait ;
- cinquième question de FAQ.

Les informations utiles n'ont pas été effacées : elles ont été regroupées dans le sélecteur de produits, la promesse, les pages internes et la méthode courte.

## Sections regroupées ou raccourcies

- la vision globale, les signaux d'alerte et la promesse de conseil deviennent trois verbes : analyser, comparer, accompagner ;
- les sept assurances transversales sont accessibles dans le sélecteur et résumées dans un seul bloc éditorial ;
- transport/logistique et BTP/décennale forment un seul bloc sectoriel équilibré ;
- la méthode passe de six étapes à quatre : comprendre, analyser, consulter, recommander ;
- le cabinet est présenté par son implantation, sa relation directe et son périmètre national, sans biographie ;
- les ressources sont limitées à un guide, une analyse et une question ;
- la FAQ est limitée à quatre questions.

## Nouvelle hiérarchie de l'accueil

1. Topbar et header.
2. Hero avec proposition de valeur, deux CTA et emplacement Paris.
3. Sélecteur « Quelle assurance recherchez-vous ? ».
4. Promesse du cabinet en trois axes.
5. Deux blocs : assurances transversales et expertises sectorielles.
6. Méthode d'audit en quatre étapes.
7. Cabinet parisien et intervention nationale.
8. Trois ressources.
9. Quatre questions fréquentes.
10. Formulaire simplifié et footer.

## Accès aux produits

La source unique est `src/data/products.ts`. Chaque produit possède un nom, un slug, une description courte, une catégorie, une cible, un CTA et un statut.

Les neuf besoins visibles depuis l'accueil conduisent vers :

- une page existante pour l'audit, le transport et le BTP ;
- une ancre valide de la page Assurances entreprises pour les protections transversales.

Le composant `ProductSelector.astro` affiche ces données sans dupliquer les contenus. Le contrôle automatique vérifie les pages et les fragments.

## Évolution du hero

Le titre validé et son sous-titre court sont conservés. Le hero ne contient plus de cartographie de risques, de liste d'arguments ni de troisième niveau d'information. Il propose uniquement :

- « Demander un audit gratuit » ;
- « Voir nos assurances » ;
- un emplacement visuel Paris/Tour Eiffel.

## Traitement du visuel Paris

Aucune photographie licenciée n'est disponible dans le projet. Aucune image externe n'a donc été téléchargée.

La prévisualisation utilise une composition CSS clairement non photographique. Le futur fichier attendu est `public/images/paris-tour-eiffel-hero.webp`, accompagné d'une variante mobile. Les dimensions, le cadrage, le poids, les filtres et le texte alternatif sont définis dans `docs/BRIEF-PHOTOS-ET-VISUELS.md`.

## Page Cabinet sans portrait

Tout emplacement et toute recommandation de portrait personnel ont été supprimés. La page présente désormais :

- Assuromieux Paris et son approche conseil ;
- la méthode en quatre temps ;
- les engagements ;
- Jules Honoré uniquement comme interlocuteur, avec son rôle et ses coordonnées ;
- l'adresse, Paris 8e, l'intervention nationale et l'ORIAS déjà présent dans le projet.

## Simplification des pages MVP

Les pages Audit, Assurances entreprises, Transport et BTP suivent une structure commune : hero, public concerné, risques/besoins, points à vérifier, méthode, FAQ et CTA. Les grilles de neuf ou dix cartes ont été remplacées par quatre ensembles maximum, des listes courtes et des liens connexes.

## Impact SEO

- titles, descriptions, canonical et données structurées sont conservés ;
- les FAQ des pages internes possèdent un balisage `FAQPage` ;
- l'accueil ajoute un `ItemList` de services à partir des données centralisées ;
- les expressions principales restent présentes dans les titres, descriptions, liens et textes courts ;
- le maillage vers les pages Audit, Assurances, Transport, BTP et Cabinet est conservé ;
- aucun bloc artificiel de mots-clés n'a été ajouté.

## Points à valider

1. Choix et licence de la photographie Paris/Tour Eiffel.
2. Recadrages desktop et mobile du visuel final.
3. Contraste du texte après intégration de la photographie réelle.
4. Validation métier des formulations Transport, TPM et BTP.
5. Validation réglementaire des informations du cabinet.
6. Réception réelle d'une demande Formspree avant mise en production.
