# Recette — Produits lot 02

Date de recette : 21 juillet 2026

Statut : recette éditoriale, visuelle et technique terminée en local. Le lot est prêt pour validation humaine métier, mais pas pour publication ni indexation.

## Périmètre

| Page | Route | Identité narrative | Composition dominante |
|---|---|---|---|
| RC professionnelle | `/rc-professionnelle/` | Distinguer les responsabilités avant de comparer | Orbite, audience en deux colonnes, registre de risques, revue en deux volets |
| Multirisque professionnelle | `/multirisque-professionnelle/` | Relier biens déclarés et continuité | Axe, audience avec repères latéraux, risques en colonnes, revue inversée |
| Flotte automobile | `/flotte-automobile/` | Lire le parc comme un système en mouvement | Parcours, audience en bande, flux de risques, revue empilée |
| Santé et prévoyance | `/sante-prevoyance-entreprise/` | Clarifier le cadre collectif avant les niveaux | Schéma collectif, audience en deux colonnes, flux, revue inversée |
| Protection du dirigeant | `/protection-dirigeant/` | Séparer personne, revenus, responsabilité et continuité | Foyer dirigeant, audience avec repères, registre, revue empilée |
| Cyberassurance | `/cyberassurance/` | Analyser le scénario avant le transfert assurantiel | Étapes de crise, audience en bande, colonnes, revue en deux volets |

## Défauts détectés et corrections

| Page ou composant | Défaut constaté | Correction réalisée | Validation |
|---|---|---|---|
| Toutes les pages | Plusieurs formulations pouvaient être lues comme des garanties acquises | Ajout systématique des dépendances au contrat, aux activités, aux personnes assurées, au territoire ou aux règles applicables | Relecture phrase par phrase et build |
| RC professionnelle | « responsabilités assurées » trop affirmatif | Remplacement par « responsabilités exposées et garanties du contrat » | Hero contrôlé de 320 à 1 440 px |
| RC professionnelle | Immatériels, sous-traitance, territorialité et défense insuffisamment conditionnés | Définitions contractuelles, juridictions, assurés, exclusions et limites rendus explicites | Relecture métier préparatoire |
| Multirisque | Perte d'exploitation et valeurs déclarées trop générales | Ajout du fait que l'événement doit être garanti et que calcul, période et bases d'indemnisation relèvent du contrat | Relecture métier préparatoire |
| Flotte | Frontière insuffisante entre circulation, véhicule, marchandises et responsabilité professionnelle | Distinction renforcée et socle obligatoire de responsabilité civile séparé des garanties optionnelles | FAQ et points de contrôle revus |
| Santé et prévoyance | Cadre collectif trop synthétique | Ajout de la convention, des textes de mise en place, des catégories objectives et du régime applicable | Relecture réglementaire à obtenir |
| Protection du dirigeant | Protection personnelle et besoin de l'entreprise pouvaient sembler interchangeables | Dépendance au statut rendue explicite et séparation homme-clé/protection personnelle renforcée | Relecture métier préparatoire |
| Cyberassurance | Frais de crise, pertes directes, obligations et services pouvaient sembler uniformément couverts | Formulations conditionnées ; « hameçonnage » adopté ; prestataires mentionnés seulement lorsqu'ils sont prévus | Relecture métier préparatoire |
| Schéma Santé | Quatrième libellé étiré sur mobile par héritage de positionnement | Réinitialisation des propriétés de positionnement de la variante `collective` | Boîtes de 44 px sans chevauchement à 320 et 375 px |
| Schéma Dirigeant | Deux libellés presque superposés à 320 px et point final isolé dans un titre desktop | Positionnement et espacement mobile ajustés ; ponctuation du titre simplifiée | Aucun chevauchement ni débordement à 320 et 1 440 px |

## Éléments volontairement inchangés

- ordre sémantique commun : hero, public, risques, contrôle, erreurs, méthode, FAQ, liens, CTA ;
- identité bleu profond, doré et fonds clairs ;
- typographies, boutons, rayons, footer et header du système validé ;
- quatre questions de FAQ et données `FAQPage` correspondantes ;
- routes, navigation principale, page d'accueil et page pilier ;
- formulaires, Formspree et Cal.com ;
- `noindex, nofollow` et blocage intégral de `robots.txt` ;
- fichiers de production et référence HTML protégée.

## Recette responsive réelle

Les pages ont été rendues par WebKit avec une largeur de viewport exacte. Pour chaque capture, `innerWidth`, `clientWidth` et la largeur demandée sont identiques ; `scrollWidth` est égal à la largeur du viewport.

| Page | 320 | 375 | 768 | 1024 | 1280 | 1440 | Résultat |
|---|---:|---:|---:|---:|---:|---:|---|
| RC professionnelle | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Aucun débordement ; hero, tableaux visuels, CTA, FAQ et footer lisibles |
| Flotte automobile | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Parcours graphique et repli en une colonne cohérents |
| Protection du dirigeant | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Contrôlé | Espacement du schéma corrigé ; aucun libellé tronqué |
| Multirisque professionnelle | — | Contrôlé | — | — | — | Contrôlé | Mobile et desktop sans défaut ni débordement |
| Santé et prévoyance | Contrôlé | Contrôlé | — | — | — | Contrôlé | Schéma collectif corrigé et lisible |
| Cyberassurance | — | Contrôlé | — | — | — | Contrôlé | Chronologie, encadrés et FAQ lisibles |

Points examinés : hero et retours de ligne, longueur des paragraphes, encadrés, diagrammes, CTA, accordéons FAQ, navigation, footer, espacements, cibles tactiles et absence de débordement horizontal.

## Contrôles éditoriaux et visuels

- une idée principale par section ;
- paragraphes courts et listes réservées aux décisions ou contrôles ;
- pas de grille de cartes systématique ;
- CTA harmonisés sans texte générique ;
- six schémas de hero distincts ;
- alternance effective des variantes de public, risques et revue ;
- aucun contenu artificiellement ajouté pour atteindre une longueur ;
- aucun chiffre, résultat, témoignage, partenaire ou garantie inventé.

## Contrôles techniques finaux

| Contrôle | Résultat |
|---|---|
| Build Astro statique | Réussi : 13 pages générées, sans avertissement de build |
| Liens internes et ancres | Réussi : 13 pages contrôlées, aucun lien interne cassé |
| Métadonnées et canonical | Réussi dans le navigateur sur les six routes : titres, descriptions, canonical et routes propres |
| JSON-LD (`BreadcrumbList`, `Service`, `FAQPage`) | Réussi : JSON valide et types présents sur les six pages, en plus de `Organization` |
| Hiérarchie H1/H2/H3 | Réussi : un H1 par page, puis H2/H3 structurés |
| Navigation clavier et focus | Structure sémantique et styles `:focus-visible` conservés ; header, menu et FAQ natifs inchangés par cette mission |
| Console navigateur | Réussi : aucun message applicatif ; uniquement la connexion du serveur Vite |
| Contraste et performance | Contraste principal déjà mesuré à 12,22:1 ; aucun JavaScript fonctionnel ajouté ; CSS partagé du build inférieur à 55 Ko au total hors CSS de page |
| Fichiers protégés | Réussi : empreinte SHA-256 identique `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` pour les deux références |
| Indexation de prévisualisation | Réussi : `noindex, nofollow` sur les six pages et `Disallow: /` dans `robots.txt` |

## Statut par page

| Page | Statut technique | Statut visuel | Statut métier avant production |
|---|---|---|---|
| RC professionnelle | Conforme en prévisualisation | Conforme | Territorialité, sous-traitance, immatériels et déclenchement à valider |
| Multirisque professionnelle | Conforme en prévisualisation | Conforme | Valeurs, pertes d'exploitation et prévention à valider |
| Flotte automobile | Conforme en prévisualisation | Conforme | Usages, conducteurs, territorialité et garanties optionnelles à valider |
| Santé et prévoyance | Conforme en prévisualisation | Conforme après correction | Cadre collectif, catégories, participation, dispenses et portabilité bloquants avant production |
| Protection du dirigeant | Conforme en prévisualisation | Conforme après correction | Statut et dimensions sociale, fiscale, juridique et patrimoniale bloquants avant production |
| Cyberassurance | Conforme en prévisualisation | Conforme | Questionnaire, exigences techniques, données et obligations de notification bloquants avant production |

## Conclusion de recette

Le lot est techniquement et visuellement apte à rester en prévisualisation. Il ne peut pas être publié tant que la grille `VALIDATION-METIER-PRODUITS-LOT-02.md` n'est pas signée ou annotée par les référents compétents et que les contrôles finaux ci-dessus ne sont pas tous renseignés comme réussis.
