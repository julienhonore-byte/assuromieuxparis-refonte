# Réalisation — Secteurs Transport, lot 01

Date : 21 juillet 2026
Statut : réalisation technique terminée ; réserves éditoriales levées sous réserve mineure pour préproduction ; autorisation de production non acquise.

## Pages créées

| Route | Fonction | Composition dominante |
|---|---|---|
| `/secteurs/` | Hub court des expertises publiées | Intro, approche, liste éditoriale des trois verticales, deux expertises générales, CTA Audit |
| `/secteurs/transport-routier-marchandises/` | Coordonner flux, responsabilités, biens, flotte, sous-traitance et sites | Parcours linéaire, carte de six expositions, coordination de cinq familles, audit des interfaces |
| `/secteurs/convoyage-vehicules/` | Analyser une mission où le véhicule circule et reste confié | Chaîne de garde en diamant, lecture par interfaces, distinction circulation/prestation/véhicule, procédure de mission |
| `/secteurs/demenagement/` | Suivre biens et responsabilités de la préparation à la restitution | Schéma de chaîne descendante, sept familles de risques, coordination des protections, lecture par étape |

## Différences éditoriales

- Transport routier part des flux, des marchandises, de l’affrètement et des responsabilités de transport.
- Convoyage part de l’ordre de mission, du véhicule confié, du conducteur et de la preuve de restitution.
- Déménagement part de la continuité de l’opération : emballage, manutention, transport, stockage et restitution.
- Chaque verticale possède son H1, ses H2, sa FAQ, ses exemples, ses contrôles et son CTA.
- Les pages produits expliquent une famille d’assurance ; les pages sectorielles expliquent comment plusieurs objets de risque se rencontrent dans une activité.

## Composants créés

| Composant | Rôle | Motif de mutualisation |
|---|---|---|
| `SectorHeroDiagram.astro` | Trois schémas CSS accessibles : flux fret, chaîne de garde, parcours déménagement | Une structure graphique légère avec trois géométries réellement distinctes |
| `SectorActivityJourney.astro` | Décrire les étapes opérationnelles d’une activité | La notion de chaîne est commune, les étapes et variantes diffèrent |
| `SectorCoverageCoordination.astro` | Séparer responsabilités et familles de contrats dans un bloc sombre | Le message de coordination est structurant sur les trois pages |

Composants existants réutilisés : `PageHero`, `ProductRiskOverview`, `ProductReview`, `SolutionMethod`, `RelatedResources`, `RelatedLinks`, `FAQ`, `PageCTA`, `Breadcrumbs` et le socle SEO.

## Maillage réalisé

- l’entrée existante `Secteurs` du menu principal mène au nouveau hub ;
- le footer contient une seule entrée supplémentaire `Secteurs` ;
- aucune verticale n’est ajoutée directement au menu principal ou au footer ;
- `/assurance-transport/` présente les trois verticales dans une liste éditoriale dédiée ;
- les verticales pointent vers Transport, Flotte, RC professionnelle, Multirisque lorsque pertinente et Audit ;
- quatre guides existants ont reçu des liens contextuels vers les verticales ;
- les blocs Ressources contiennent exactement trois guides par verticale.

## Sources utilisées

Les formulations ont été cadrées avec des sources officielles : ministère chargé des Transports, Légifrance, Service Public et DGCCRF. Les URL et points sensibles sont consignés dans `VALIDATION-METIER-SECTEURS-TRANSPORT-LOT-01.md`.

## Arbitrages

1. Le hub ne montre que les trois verticales publiées et les deux expertises générales existantes.
2. Aucun secteur futur n’est teasé.
3. La navigation principale n’a pas reçu de sous-menu ni de nouvelle entrée.
4. Les schémas sont en HTML/CSS, sans photographie, dépendance, script ou animation.
5. Le terme TPM est absent des pages publiques auditées et conservé uniquement dans la documentation de contrôle terminologique.
6. Le convoyage n’est pas assimilé au transport sur porte-voitures ni à une flotte propre.
7. La page Déménagement ne fournit aucun délai, plafond ou conseil juridique définitif.
8. Les FAQ sont visibles et correspondent exactement aux données `FAQPage`.
9. Toutes les pages restent `noindex` par défaut et `robots.txt` continue de bloquer l’exploration.

## Ce qui n’est pas affirmé

- qu’un contrat donné couvre automatiquement une responsabilité ou un dommage ;
- que la RC professionnelle couvre les véhicules confiés ;
- que l’assurance du propriétaire suffit au convoyage ;
- que la flotte couvre les marchandises ou l’ensemble de l’exploitation ;
- que la sous-traitance transfère toutes les responsabilités ;
- qu’une valeur déclarée équivaut à une indemnité ;
- qu’une perte d’exploitation sera indemnisée ;
- qu’un contrat type s’applique automatiquement à toute mission ;
- qu’un secteur, un assureur, un résultat ou une statistique non vérifiée constitue une preuve.

## Contrôles techniques

| Contrôle | Résultat au 21 juillet 2026 |
|---|---|
| Build Astro statique | Réussi, 30 pages générées |
| Liens internes | Réussi, aucun lien cassé |
| Routes du lot | Quatre routes générées avec slash final |
| H1 | Un H1 par page |
| Canonical / OG | Présents et propres à chaque route |
| JSON-LD | Breadcrumb + CollectionPage ou Service + FAQPage visible |
| JavaScript ajouté | Aucun |
| Dépendance ajoutée | Aucune |
| Noindex / robots | Maintenus |
| Production | Aucun déploiement, aucune redirection |
| Densité des verticales | Contenu métier structuré, sans nouvelle section SEO ni allongement artificiel lors de la levée 6B |
| Responsive | Hub, trois verticales et hub Transport contrôlés à 320, 375, 768, 1024, 1280 et 1440 px |
| Débordement horizontal | Aucun aux 30 combinaisons route/largeur contrôlées |
| Schémas | Lisibles et contenus dans le viewport de 320 à 1440 px ; libellé accessible présent |
| Navigation mobile | Ouverture, `aria-expanded`, affichage du panneau et fermeture par `Escape` contrôlés |
| Contrastes clés | 17,17:1 texte bleu nuit ; 7,69:1 texte secondaire ; 10,34:1 texte clair sur fond nuit ; 5,45:1 doré foncé sur blanc |
| Console | Aucun avertissement ni erreur applicative ; messages de connexion Vite uniquement |
| FAQ | Quatre questions visibles et quatre entités JSON-LD correspondantes sur chaque verticale |

Une première capture tablette a nécessité une réinitialisation de l’outil de viewport ; le DOM indiquait déjà une largeur correcte et aucun débordement. La capture reprise après réinitialisation est conforme. Aucun correctif de page n’a été requis.

## Points à valider

Les formulations publiques ont reçu une décision. Les seules validations externes encore utiles portent sur les contrats et pratiques réels : montages Convoyage, catégories de véhicules, territoires, dommages au véhicule, frais, indépendants, pratiques documentaires du déménagement et vocabulaire commercial du cabinet. Les questions directement exploitables figurent dans `QUESTIONS-VALIDATION-EXTERNE-TRANSPORT.md`.

## Recette approfondie complémentaire

Le 21 juillet 2026, une seconde recette a resserré les formulations sans refondre les pages :

- suppression du sigle `TPM` dans les pages publiques ;
- séparation explicite des six objets TRM et des sept objets Déménagement ;
- ajout du bloc visible « Les quatre questions à vérifier avant toute proposition » sur Convoyage ;
- séparation des sept lectures Convoyage, dont RC circulation, RC Pro, RC exploitation et véhicule confié ;
- harmonisation prudente des CTA et du préremplissage Transport.
- correction de la coquille `disponibilités`/`dispositions` dans la mention réglementaire commune du footer, sans lever son statut de validation requise.

Les résultats détaillés figurent dans `RECETTE-SECTEURS-TRANSPORT-LOT-01.md`, `VALIDATION-FINALE-CONVOYAGE.md`, `COHERENCE-COUVERTURES-TRANSPORT.md` et `RECETTE-CONVERSION-SECTEURS-TRANSPORT.md`.

## Levée des réserves 6B

Corrections publiques limitées au périmètre autorisé :

- Convoyage : rôles complétés, quatre questions alignées, autorisation séparée de la garantie, contrats et dommages clarifiés, véhicules/territoires/sous-traitance rendus explicitement variables, CTA non promissif ;
- TRM : formulation des six objets alignée sur entreprise, véhicule, circulation, responsabilité, marchandises, sites et continuité ;
- Déménagement : passage de six à sept familles, séparation du stockage/garde-meubles et précision de l’effet non automatique des réserves ;
- Assurance transport et quatre guides : aucune modification nécessaire ;
- routes, composants, dépendances, Formspree, Cal.com, `noindex` et `robots.txt` : inchangés.
