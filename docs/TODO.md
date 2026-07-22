# TODO — Refonte Assuromieux Paris

Date de mise à jour : 21 juillet 2026
Convention : chaque tâche indique ses dépendances et son critère de validation. `[x]` signifie contrôlé dans la prévisualisation locale ; `[ ]` exige encore une décision ou une action.

## Phase 0 — Socle et protections

- [x] **P0-01 — Initialiser Astro statique et Netlify.** Dépendances : aucune. Validation : installation et build reproductibles.
- [x] **P0-02 — Geler les deux références HTML.** Dépendances : P0-01. Validation : `index.html` et `source/index-production-reference.html` inchangés, empreinte SHA-256 documentée.
- [x] **P0-03 — Bloquer l'indexation de la prévisualisation.** Dépendances : P0-01. Validation : `robots.txt` contient `Disallow: /` et toutes les pages rendent `noindex, nofollow`.
- [x] **P0-04 — Conserver Formspree et Cal.com.** Dépendances : P0-01. Validation : URL Formspree et lien Cal.com présents, sans ajout d'analytics ni de cookies.

**Sortie de phase :** socle prêt, production et référence protégées.

## Phase 1 — Design system et navigation

- [x] **P1-01 — Extraire les tokens de marque.** Dépendances : P0-02. Validation : couleurs, typographie, espacements, rayons, ombres, boutons et conteneurs centralisés.
- [x] **P1-02 — Créer les composants globaux.** Dépendances : P1-01. Validation : header, topbar, menus, CTA, cartes, formulaire, footer, breadcrumbs et SEO réutilisables.
- [x] **P1-03 — Rendre la navigation responsive et accessible.** Dépendances : P1-02. Validation : menu clavier/mobile, Escape, focus visible et cibles tactiles contrôlés.
- [x] **P1-04 — Simplifier la navigation principale.** Dépendances : Homepage 03. Validation : Accueil, Nos assurances, Audit, Secteurs, Cabinet, Ressources et Contact mènent vers des cibles existantes.

**Sortie de phase :** identité conservée et navigation sans lien cassé.

## Phase 2 — Accueil simplifié Homepage 03

- [x] **P2-01 — Réduire le hero.** Dépendances : P1-02. Validation : un titre, un sous-titre, deux CTA et un emplacement Paris ; aucun argument secondaire superflu.
- [x] **P2-02 — Centraliser les produits.** Dépendances : P1-02. Validation : `src/data/products.ts` contient nom, slug, description, catégorie, cible, CTA et statut.
- [x] **P2-03 — Créer le sélecteur de neuf besoins.** Dépendances : P2-02. Validation : grille compacte responsive, toutes les pages et ancres cibles existent.
- [x] **P2-04 — Réduire la promesse à trois axes.** Dépendances : P2-01. Validation : analyser, comparer et accompagner sont les seuls axes visibles.
- [x] **P2-05 — Regrouper les offres.** Dépendances : P2-02. Validation : un bloc transversal et un bloc sectoriel ; transport et BTP ont le même niveau.
- [x] **P2-06 — Réduire la méthode à quatre étapes.** Dépendances : P1-02. Validation : comprendre, analyser, consulter, recommander.
- [x] **P2-07 — Retirer tout portrait.** Dépendances : décision utilisateur. Validation : aucune attente de photographie personnelle dans l'accueil, Cabinet ou le brief.
- [x] **P2-08 — Réduire ressources, FAQ et formulaire.** Dépendances : P1-02. Validation : trois ressources, quatre FAQ et uniquement les champs prioritaires.

**Sortie de phase :** l'accueil fonctionne comme porte d'entrée et présente les produits immédiatement.

## Phase 3 — Pages MVP simplifiées

- [x] **P3-01 — Standardiser la page Audit.** Dépendances : P1-02. Validation : hero, public, besoins, contrôles, méthode, FAQ et CTA.
- [x] **P3-02 — Standardiser Assurances entreprises.** Dépendances : P2-02. Validation : produits issus de la source centrale et ancres valides.
- [x] **P3-03 — Standardiser Assurance transport.** Dépendances : P1-02. Validation : quatre ensembles de risques, transport traité comme expertise sectorielle.
- [x] **P3-04 — Standardiser Assurance BTP et décennale.** Dépendances : P1-02. Validation : quatre ensembles de risques et limite juridique conservée.
- [x] **P3-05 — Refaire Cabinet sans portrait.** Dépendances : P2-07. Validation : méthode, engagements, ancrage parisien, relation directe et coordonnées uniquement.
- [x] **P3-06 — Conserver le socle SEO.** Dépendances : P3-01 à P3-05. Validation : title, description, canonical, H1, breadcrumbs, Service/AboutPage et FAQPage selon le cas.
- [x] **P3-07 — Réaliser la recette approfondie des six pages produits du lot 02.** Dépendances : P3-02 et matrice SEO du lot. Validation : relecture phrase par phrase, diversité des compositions, densité utile et CTA contrôlés ; résultats documentés dans `RECETTE-PRODUITS-LOT-02.md`.
- [x] **P3-08 — Contrôler le responsive réel du lot 02.** Dépendances : P3-07. Validation : RC, Flotte et Dirigeant testés à 320, 375, 768, 1024, 1280 et 1440 px ; les trois autres pages testées au minimum en mobile et desktop ; aucun débordement horizontal.
- [x] **P3-09 — Préparer la validation métier du lot 02.** Dépendances : P3-07. Validation : chaque formulation sensible est classée avec risque, motif, question, décision et statut dans `VALIDATION-METIER-PRODUITS-LOT-02.md`.

**Sortie de phase :** six pages compréhensibles rapidement, avec une structure cohérente et sans longues grilles.

## Phase 3B — Architecture sectorielle future

- [x] **P3B-01 — Auditer les opportunités sectorielles.** Dépendances : P3-03, P3-04 et P3-09. Validation : 21 secteurs et sujets analysés, dix chevauchements arbitrés, architecture et maillage documentés dans `AUDIT-OPPORTUNITE-PAGES-SECTORIELLES.md` et `MATRICE-OPPORTUNITE-SECTORIELLE.md`.
- [x] **P3B-02 — Clôturer les décisions éditoriales des trois verticales prioritaires Transport.** Dépendances : P3B-01 et sources officielles. Validation : chaque ligne ouverte de `VALIDATION-METIER-SECTEURS-TRANSPORT-LOT-01.md` possède une décision explicite, une justification et une date ; aucune validation humaine n’est simulée.
- [x] **P3B-03 — Préparer le hub Secteurs.** Dépendances : P3B-01 et première verticale prête. Validation : le hub reste court, relie Transport et BTP, ne surcharge pas le menu et n'est jamais publié vide.
- [x] **P3B-04 — Produire Transport routier de marchandises en prévisualisation.** Dépendances : P3B-01 et P3B-03. Validation : intention propre, distinction Flotte/RC/marchandises, trois ressources, maillage et points métier consignés ; `noindex` maintenu.
- [x] **P3B-05 — Produire Convoyage de véhicules en prévisualisation.** Dépendances : P3B-01 et P3B-03. Validation : mode d'exploitation, véhicules confiés, conducteurs, chaîne de garde, trois ressources et points de territorialité documentés ; `noindex` maintenu.
- [x] **P3B-06 — Produire Déménagement en prévisualisation.** Dépendances : P3B-01 et P3B-03. Validation : biens confiés, manutention, valeurs, stockage, flotte et équipements traités sans promesse de garantie ; `noindex` maintenu.
- [ ] **P3B-07 — Réévaluer les deux opportunités de priorité 2.** Dépendances : centre de ressources actif et données réelles après lancement. Validation : Logistique/entrepôts et Entreprises générales BTP ne sont créées que si expertise, demande et contenu distinct sont démontrés.
- [x] **P3B-08 — Documenter le lot Secteurs Transport 01.** Dépendances : P3B-03 à P3B-06. Validation : matrice SEO, validation métier et réalisation décrivent routes, frontières, sources, risques, maillage et contrôles.
- [x] **P3B-09 — Réaliser la recette approfondie métier, éditoriale et conversion.** Dépendances : P3B-04 à P3B-08. Validation : cinq routes et quatre guides relus, distinctions TRM/Convoyage/Déménagement explicites, CTA et préremplissage contrôlés, quatre livrables de recette créés.
- [x] **P3B-10 — Lever le blocage éditorial Convoyage pour la préproduction.** Dépendances : P3B-09 et revue 6B. Validation : rôles, circulation, dommages, contrats, véhicules, territoires, sous-traitance, quatre questions et CTA sont prudents ; `VALIDATION-FINALE-CONVOYAGE.md` porte la décision « validée sous réserve mineure pour préproduction ».
- [x] **P3B-11 — Aligner TRM et Déménagement et documenter la levée 6B.** Dépendances : P3B-09. Validation : six objets TRM, sept objets Déménagement, réserves documentaires et terminologie harmonisés ; trois livrables 6B créés et les documents de suivi mis à jour.
- [ ] **P3B-12 — Obtenir les validations contractuelles externes utiles.** Dépendances : P3B-10 et P3B-11. Validation : les seules questions nécessaires de `QUESTIONS-VALIDATION-EXTERNE-TRANSPORT.md` reçoivent une réponse datée du type d’interlocuteur indiqué avant toute affirmation publique plus précise. **Non bloquant pour la préproduction prudente ; bloquant pour toute promesse contractuelle.**

**Sortie de phase :** une profondeur sectorielle limitée aux intentions réellement distinctes, sans doublon des pages produits ou des hubs existants.

## Phase 4 — Visuels à valider

- [x] **P4-01 — Documenter le hero Paris/Tour Eiffel.** Dépendances : P2-01. Validation : nom, dimensions, ratio, cadrage, compression, filtre, overlay, alt et variante mobile consignés.
- [x] **P4-02 — Utiliser un placeholder CSS honnête.** Dépendances : absence d'image licenciée. Validation : aucune fausse photographie, aucun téléchargement externe et aucun poids d'image LCP.
- [ ] **P4-03 — Sélectionner la photographie définitive.** Dépendances : droits confirmés. Validation : licence commerciale, auteur, source, durée, territoires et modifications autorisées documentés.
- [ ] **P4-04 — Produire les exports responsive.** Dépendances : P4-03. Validation : WebP desktop < 300 Ko, variante mobile, dimensions et `srcset`.
- [ ] **P4-05 — Intégrer et tester le visuel réel.** Dépendances : P4-04. Validation : contraste AA, LCP, CLS, cadrages 320–1440 px et alternative textuelle validés.

**Sortie de phase :** photographie réelle intégrée sans risque de droits ni régression de performance.

## Phase 4B — Centre de ressources

- [x] **P4B-01 — Définir l’architecture éditoriale.** Dépendances : matrices SEO et audit sectoriel. Validation : sept routes structurelles, frontières et maillage documentés dans `ARCHITECTURE-CENTRE-DE-RESSOURCES.md`.
- [x] **P4B-02 — Créer la collection Astro typée.** Dépendances : P4B-01. Validation : schéma complet, statuts contrôlés, brouillons et archives exclus des routes publiques.
- [x] **P4B-03 — Produire les six guides initiaux.** Dépendances : P4B-02 et sources officielles. Validation : six contenus exactement, 800–1 300 mots visés, auteurs/dates/limites/sources/liens présents, statut `review-required`.
- [x] **P4B-04 — Créer hubs et lexique.** Dépendances : P4B-02. Validation : hub principal, guides, quatre parcours et 17 définitions accessibles sans page sectorielle nouvelle.
- [x] **P4B-05 — Mettre en place le maillage.** Dépendances : P4B-03. Validation : accueil relié, menu et footer cohérents, pages Assurances entreprises/Transport/BTP enrichies sans surcharge.
- [ ] **P4B-06 — Valider les contenus métier.** Dépendances : P4B-03 et référents compétents. Validation : chaque guide reçoit une décision, un `reviewedBy`, une `reviewDate` et un statut de publication cohérent.
- [ ] **P4B-07 — Autoriser l’indexation éditoriale.** Dépendances : P4B-06 et validation générale de production. Validation : retrait coordonné du blocage uniquement avec l’ensemble du site. **Interdit dans la mission actuelle.**

**Sortie de phase :** centre éditorial limité, structuré et prêt pour validation métier, sans indexation ni déploiement.

## Phase 5 — Contenus, conformité et mise en ligne future

- [ ] **P5-01 — Valider les formulations métier.** Dépendances : pages MVP et P3-09. Validation : RC, multirisque, flotte, santé/prévoyance, dirigeant, cyber, TPM, transport, BTP et décennale relus ; toutes les lignes sensibles et bloquantes disposent d'une décision et d'un valideur.
- [ ] **P5-02 — Valider les informations réglementaires.** Dépendances : sources officielles. Validation : raison sociale, ORIAS, RCS, adresse et rôle de l'interlocuteur confirmés.
- [ ] **P5-03 — Finaliser mentions légales et confidentialité.** Dépendances : P5-02 et validation juridique. Validation : textes approuvés et reliés depuis toutes les pages.
- [ ] **P5-04 — Tester une soumission Formspree réelle.** Dépendances : accord du destinataire. Validation : réception, confirmation, erreurs réseau, anti-spam et données de test supprimées.
- [ ] **P5-05 — Réaliser la recette finale.** Dépendances : P4-05, P5-01 à P5-04. Validation : build, liens, HTML, accessibilité, performance, SEO et responsive sans anomalie bloquante.
- [ ] **P5-06 — Autoriser l'indexation.** Dépendances : validation explicite de production. Validation : retrait coordonné du blocage uniquement après bascule approuvée.
- [ ] **P5-07 — Déployer.** Dépendances : P5-05 et validation explicite. Validation : déploiement Netlify, smoke test et procédure de retour arrière. **Interdit dans la mission actuelle.**

## Prochaines actions recommandées

1. Faire répondre les interlocuteurs compétents aux seules questions prioritaires de `QUESTIONS-VALIDATION-EXTERNE-TRANSPORT.md` avant d’ajouter une affirmation contractuelle précise.
2. Faire statuer les référents métier, social et juridique sur `VALIDATION-METIER-PRODUITS-LOT-02.md` et compléter les champs de revue des guides.
3. Sélectionner et documenter la licence de la photographie Paris/Tour Eiffel avant la recette globale.
