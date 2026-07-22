# Recette approfondie — Secteurs Transport, lot 01

Date de recette : 21 juillet 2026

Périmètre : `/secteurs/`, trois verticales Transport, `/assurance-transport/` et quatre guides directement liés.

Décision : la recette technique et éditoriale est terminée ; elle ne remplace pas les validations métier encore requises.

## Méthode

La relecture a vérifié, phrase par phrase :

- la séparation entre activité, produit d’assurance, responsabilité, contrat et garantie ;
- l’absence de promesse de prise en charge ou de conclusion juridique générale ;
- la cohérence avec Flotte automobile, RC professionnelle, RC exploitation et Audit ;
- la fonction propre de chaque route, son H1, son title, sa meta description, son canonical, ses données structurées, son maillage et ses CTA ;
- la présence d’informations utiles à la décision sans allongement artificiel ;
- les références officielles disponibles à la date du contrôle.

La recette a également corrigé une coquille commune au footer : `disponibilités` devient `dispositions` dans la mention renvoyant au Code des assurances. La validité réglementaire de l’ensemble de cette mention reste à confirmer avant publication, conformément au bandeau de prévisualisation.

## Décision par route

| Route | Formulations auditées | Corrections nécessaires réalisées | Points restant à valider humainement | Statut |
|---|---|---|---|---|
| `/secteurs/` | Positionnement du hub, frontières secteurs/produits, trois verticales publiées, CTA Audit | Aucune correction de fond nécessaire | Maintien du périmètre limité à trois verticales Transport | **Validée pour préproduction** |
| `/assurance-transport/` | H1, quatre familles de risques, sigle TPM, liens sectoriels, CTA | « Assurer l’ensemble » devient « Analyser l’ensemble » ; « Risques couverts » devient « Risques à coordonner » ; suppression du sigle TPM ; préremplissage Transport harmonisé | Périmètre exact des métiers accompagnés et vocabulaire commercial final | **Validée sous réserve mineure** |
| `/secteurs/transport-routier-marchandises/` | Compte propre/public, commission, affrètement, sous-traitance, véhicule, circulation, responsabilité transporteur, marchandises, donneur d’ordre, sites/outils | Rôles explicités ; six objets séparés ; assurance pour compte rendue conditionnelle ; marchandises particulières ajoutées ; sigle TPM retiré | Qualification des rôles, contrats types, limites de responsabilité, sous-traitance, stockage et pertes d’exploitation | **Validation métier requise** |
| `/secteurs/convoyage-vehicules/` | Propriétaire, souscripteur, conducteur, client, mandataire éventuel, salariés/indépendants, types de véhicules, France/international, dommages et frais | Absence de montage universel explicitée ; quatre questions visibles ; séparation RC circulation, garanties automobiles, véhicule confié, RC Pro, RC exploitation, frais annexes et sous-traitance ; CTA resserré | Montages réellement distribués, clauses et attestations utilisées, catégories/territoires acceptés, traitement du véhicule confié et des frais annexes | **Bloquée avant production** |
| `/secteurs/demenagement/` | Responsabilité contractuelle, biens confiés, véhicules, locaux/stockage, RC générale, matériels, pertes d’exploitation, valeurs, partenaires | Sept lectures séparées ; déclaration de valeur distinguée d’une assurance ; stockage non présumé ; valeurs globales/unitaires précisées ; sous-traitance déclarée non neutre | Documents utilisés, cadre clients particuliers/professionnels, responsabilité, garde-meubles, valeurs et pertes d’exploitation | **Validation métier requise** |

## Guides directement liés

| Guide | Contrôle | Décision |
|---|---|---|
| `responsabilite-transporteur-assurance-marchandises-differences` | Distingue responsabilité, assurance de responsabilité, biens, automobile, acteurs, contrat, valeurs et sous-traitance | Cohérent ; statut `review-required` maintenu |
| `flotte-automobile-points-analyser-avant-comparer` | Distingue RC automobile, dommages véhicule, matériel, marchandises, usages et conducteurs | Cohérent ; statut `review-required` maintenu |
| `rc-professionnelle-rc-exploitation-differences` | Refuse toute conclusion à partir du seul intitulé et isole biens confiés, temporalité, sous-traitance | Cohérent ; statut `review-required` maintenu |
| `comment-auditer-assurances-entreprise` | Méthode d’inventaire, lecture des clauses, écarts, calendrier et arbitrages | Cohérent ; statut `review-required` maintenu |

Les quatre guides restent soumis à revue humaine : la recette n’a pas modifié leur statut éditorial.

## Sources officielles consultées

Consultation : 21 juillet 2026.

- [Ministère chargé des Transports — accès et exercice de la profession de transporteur de marchandises](https://www.ecologie.gouv.fr/politiques-publiques/acces-exercice-profession-transporteur-marchandises) : distinction transport public/compte propre et accès à la profession ;
- [Ministère chargé des Transports — commissionnaires de transport routier](https://www.ecologie.gouv.fr/politiques-publiques/commissionnaires-transport-routier) : rôle du commissionnaire ;
- [Légifrance — décret n° 2017-461, contrat type général](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034330431) : opérations et responsabilités à lire selon le contrat applicable ;
- [Légifrance — chapitre sur la sous-traitance du transport routier](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000023086525/LEGISCTA000023071207/2026-06-27) : sous-traitance du transport public routier ;
- [Légifrance — décret n° 2020-845](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042079482) : porte-voitures et phases accessoires de convoyage, sans extension à tout convoyage ;
- [Légifrance — obligation d’assurance des véhicules terrestres à moteur](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006142795) : responsabilité civile liée à la circulation ;
- [Légifrance — articles R. 211-2 à R. 211-8 du Code des assurances](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006142818) : personnes concernées et limites du socle automobile ;
- [DGCCRF — déménagement](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/demenagement) : devis, déclaration de valeur, lettre de voiture et assurance dommages éventuelle.

Ces sources cadrent les formulations générales. Elles ne qualifient pas un dossier, ne garantissent pas l’application d’une clause et ne remplacent pas la lecture des contrats ni une consultation juridique lorsque nécessaire.

## Verdict du lot

Le lot est cohérent pour une prévisualisation locale. Le hub Secteurs et la page Transport générale peuvent poursuivre le circuit de préproduction. TRM et Déménagement attendent une validation métier documentée. Convoyage reste explicitement bloquée avant production.

## Contrôles techniques réalisés

- `pnpm verify` : build Astro statique réussi ;
- 30 pages générées, aucune route publique supplémentaire ;
- 30 pages HTML contrôlées, aucun lien interne cassé ;
- HTML statique : H1 et blocs sensibles présents sans exécution JavaScript ;
- responsive : cinq routes contrôlées à 320, 375, 390, 768, 1024, 1280 et 1440 px, sans débordement horizontal ;
- contrôle visuel : cinq pages en mobile et Convoyage en mobile, tablette et desktop ;
- accessibilité structurelle : un H1, aucun identifiant dupliqué, aucun lien vide et aucune image sans attribut `alt` sur les cinq routes ;
- menu mobile : ouverture, focus sur le premier lien, fermeture par Échap et retour du focus sur le bouton avec contour visible ;
- formulaire : `assurance-transport`, `transport-routier`, `convoyage` et `demenagement` préremplissent l’option générique `Transport / marchandises` ;
- SEO : title, description, canonical, Open Graph, fil d’Ariane, robots et types JSON-LD contrôlés sur les cinq routes ;
- références protégées : `index.html` et `source/index-production-reference.html` inchangés, SHA-256 identique `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` ;
- dépendances : `package.json` et le lockfile ne sont pas modifiés. La commande informative `pnpm list --depth 0` a rencontré une erreur locale d’ouverture de la base SQLite du store pnpm ; le build et le contrôle de liens, qui utilisent les dépendances installées, réussissent néanmoins.
