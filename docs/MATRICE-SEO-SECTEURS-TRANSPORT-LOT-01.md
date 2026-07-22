# Matrice SEO — Secteurs Transport, lot 01

Date : 21 juillet 2026
Statut global : prévisualisation technique, `noindex` maintenu, validation métier requise avant toute publication.

## Frontières du lot

- `/secteurs/` oriente vers les seules expertises actuellement rédigées ; il ne liste aucun secteur futur.
- `/assurance-transport/` reste la page pilier générale Transport et logistique.
- les trois verticales décrivent une activité et la coordination de ses risques ; elles ne redéfinissent pas les produits d’assurance ;
- les guides répondent à une question documentaire ou pédagogique plus étroite ;
- aucune page Logistique/entrepôts ni nouvelle page BTP n’est créée dans ce lot.

## Synthèse des URL

| URL | Intention principale | Risque de cannibalisation | Statut |
|---|---|---|---|
| `/secteurs/` | Choisir une expertise d’assurance selon l’activité | Faible si le hub reste synthétique | Prévisualisation |
| `/secteurs/transport-routier-marchandises/` | Comprendre et auditer les assurances d’une entreprise de transport routier | Moyen avec `/assurance-transport/` et le guide transport ; frontière explicitée | Prévisualisation, validation métier requise |
| `/secteurs/convoyage-vehicules/` | Comprendre la coordination assurance d’une mission de convoyage | Moyen avec Flotte et Transport ; frontière explicitée | Prévisualisation, validation métier requise |
| `/secteurs/demenagement/` | Comprendre les assurances d’une entreprise de déménagement sur toute la mission | Moyen avec Transport et Multirisque ; frontière explicitée | Prévisualisation, validation métier requise |

## `/secteurs/`

| Champ | Décision |
|---|---|
| Intention | Découverte et orientation vers une expertise sectorielle publiée |
| Title | `Assurances par secteur d’activité \| Assuromieux Paris` |
| Meta description | `Découvrez l’approche Assuromieux par activité : transport routier, convoyage, déménagement, transport-logistique et BTP.` |
| H1 | `Comprendre le métier avant de lire les contrats.` |
| H2 | Lecture sectorielle ; trois verticales Transport ; expertises générales Transport et BTP |
| Pages produits liées | Audit, Transport et logistique, BTP et décennale |
| Guides liés | Aucun lien direct : le hub reste une porte d’entrée synthétique |
| CTA | Voir les expertises ; découvrir/demander un audit |
| Données structurées | `Organization`, `BreadcrumbList`, `CollectionPage` |
| Canonical / OG | Canonical absolue `/secteurs/`, OG hérité du socle du site |
| Risque de cannibalisation | Faible : le hub n’explique ni garanties ni contrats en profondeur |
| Validation | Vérifier que les seules expertises visibles sont effectivement maintenues |
| Statut | Prévisualisation technique |

## `/secteurs/transport-routier-marchandises/`

| Champ | Décision |
|---|---|
| Intention | Audit et coordination des risques d’une activité de transport routier de marchandises |
| Title | `Assurance transport routier de marchandises \| Assuromieux Paris` |
| Meta description | `Analyse des assurances d’un transporteur routier : responsabilités, marchandises, flotte, sous-traitance, sites et continuité d’activité.` |
| H1 | `Coordonner les risques d’une activité de transport de marchandises.` |
| H2 | Flux ; expositions ; coordination contrats/responsabilités ; vigilances ; erreurs ; méthode ; ressources ; FAQ |
| Produits liés | Transport, Flotte, RC professionnelle, Multirisque, Audit |
| Guides liés | Responsabilité transporteur/marchandises ; Flotte ; Audit |
| CTA | Audit transport avec données d’activité, flux, valeurs, parc et sous-traitance |
| Données structurées | `Organization`, `BreadcrumbList`, `Service`, `FAQPage` visible |
| Canonical / OG | Canonical absolue propre ; `og:type=website`, title/description propres |
| Risque de cannibalisation | Page Transport générale : évité par l’entrée « exploitation TRM ». Guide : évité par l’intention de coordination complète plutôt que définition de notions. Flotte : véhicule traité comme une composante seulement. |
| Validations | Rôles ; activités déclarées ; portée des contrats types ; responsabilité transporteur ; sous-traitance ; valeurs ; marchandises exclues ; pertes d’exploitation |
| Statut | Prévisualisation, validation métier requise |

## `/secteurs/convoyage-vehicules/`

| Champ | Décision |
|---|---|
| Intention | Audit d’une activité de convoyage où le véhicule est conduit et confié |
| Title | `Assurance convoyage de véhicules \| Assuromieux Paris` |
| Meta description | `Analyse des assurances d’une entreprise de convoyage : véhicule confié, circulation, mission, conducteurs, dommages et responsabilités.` |
| H1 | `Comprendre une mission où le véhicule circule et reste confié.` |
| H2 | Chaîne de mission ; interfaces ; circulation/prestation/dommage ; contrôles ; confusions ; méthode ; ressources ; FAQ |
| Produits liés | Transport, Flotte, RC professionnelle, Audit |
| Guides liés | Flotte ; RC Pro/Exploitation ; Audit |
| CTA | Analyse des contrats clients, missions, véhicules, conducteurs, remise/restitution et sinistralité |
| Données structurées | `Organization`, `BreadcrumbList`, `Service`, `FAQPage` visible |
| Canonical / OG | Canonical absolue propre ; OG title/description propres |
| Risque de cannibalisation | Flotte : le véhicule confié n’est pas traité comme parc propre. Transport : le mode d’exécution et la chaîne de garde sont centraux. RC : la page ne définit pas la garantie mais coordonne les interfaces. |
| Validations | Qualification des rôles ; assurance automobile du véhicule ; véhicule confié ; conducteurs ; catégories acceptées ; frais annexes ; sous-traitance ; territorialité |
| Statut | Prévisualisation, validation métier requise |

## `/secteurs/demenagement/`

| Champ | Décision |
|---|---|
| Intention | Audit des assurances d’un déménageur de la préparation à la restitution |
| Title | `Assurance entreprise de déménagement \| Assuromieux Paris` |
| Meta description | `Analyse des assurances d’un déménageur : biens confiés, manutention, transport, stockage, flotte, locaux, responsabilités et sinistres.` |
| H1 | `Suivre le risque du premier objet manipulé jusqu’à la restitution.` |
| H2 | Chaîne de mission ; risques ; coordination ; informations ; angles morts ; méthode ; ressources ; FAQ |
| Produits liés | Transport, Flotte, RC professionnelle, Multirisque, Audit |
| Guides liés | Responsabilité/marchandises ; Flotte ; Audit |
| CTA | Audit des prestations, documents, valeurs, parc, locaux, matériels, partenaires et sinistralité |
| Données structurées | `Organization`, `BreadcrumbList`, `Service`, `FAQPage` visible |
| Canonical / OG | Canonical absolue propre ; OG title/description propres |
| Risque de cannibalisation | Transport : la manutention et la continuité de la mission structurent la page. Multirisque : les locaux ne sont qu’une composante. Guide : la page reste orientée métier et décision. |
| Validations | Périmètre client professionnel/particulier ; documents utilisés ; valeurs ; responsabilité ; manutention ; monte-meubles ; stockage ; sous-traitance ; réserves/réclamations |
| Statut | Prévisualisation, validation métier requise |

## Ancres et maillage

- les ancres privilégient l’activité : `Transport routier de marchandises`, `Convoyage de véhicules`, `Déménagement` ;
- les liens produits utilisent le nom exact du produit ;
- les guides renvoient vers les verticales dans un contexte explicatif, sans répétition mécanique ;
- le hub Transport présente les trois verticales dans un bloc éditorial dédié ;
- le menu principal conserve sept entrées : son lien existant `Secteurs` mène désormais au hub ;
- le footer ajoute une seule entrée `Secteurs` et ne liste pas les trois verticales.

## Contrôles avant indexation

1. obtenir une validation métier nominative sur chaque ligne sensible de la grille dédiée ;
2. confirmer les activités réellement accompagnées par le cabinet ;
3. revalider les sources officielles et leur date ;
4. contrôler les titles et descriptions dans les résultats de recherche réels après autorisation ;
5. vérifier l’absence de cannibalisation avec des données Search Console suffisantes ;
6. ne retirer `noindex` et le blocage `robots.txt` que dans une décision globale de mise en production.

## Mise à jour — recette 6A

- les URL, titles, H1, descriptions et intentions restent inchangés ;
- la page Transport générale a été rendue moins promissive sans déplacer son intention ;
- le convoyage renforce son intention de cadrage par les quatre questions préalables ;
- les CTA transport utilisent un préremplissage léger, sans nouvelle route ni formulaire sectoriel ;
- le risque de cannibalisation reste maîtrisé par les frontières documentées dans `RECETTE-CONVERSION-SECTEURS-TRANSPORT.md`.
