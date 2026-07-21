# TODO détaillé et ordonné — Refonte Assuromieux Paris

Date : 21 juillet 2026  
Convention : chaque tâche possède un identifiant, des dépendances et un critère de validation. Une tâche n'est cochée que si son critère est vérifié et documenté.

## Statuts et ordre de passage

- `[ ]` à faire ; `[x]` validé.
- Priorité : P0 bloquante, P1 nécessaire au MVP, P2 amélioration/lot suivant.
- L'ordre normal suit les phases 0 à 10. Une tâche peut commencer plus tôt uniquement si toutes ses dépendances sont satisfaites.

## Phase 0 — Sécurisation et décisions structurantes

- [ ] **P0-01 — Mettre le projet sous contrôle de version.** Dépendances : aucune. Validation : dépôt Git actif, branche principale identifiée, premier commit incluant la base actuelle, `.gitignore` excluant `.DS_Store`, dépendances et builds.
- [ ] **P0-02 — Geler la référence de production.** Dépendances : P0-01. Validation : empreinte SHA-256 de `source/index-production-reference.html` documentée et test empêchant/modèle de revue interdisant sa modification.
- [ ] **P0-03 — Sauvegarder le site actuellement publié et son contexte.** Dépendances : P0-01. Validation : archive datée, URL, configuration DNS/Netlify, formulaires et redirections sauvegardés ; procédure de restauration testable.
- [ ] **P0-04 — Valider le socle technique.** Dépendances : audit et plan présents. Validation : décision signée « Astro statique » ou alternative, version Node, gestionnaire de paquets et stratégie de contenu consignés dans un ADR.
- [ ] **P0-05 — Valider domaine canonique et politique d'URL.** Dépendances : aucune. Validation : domaine HTTPS, trailing slash, slugs et table de redirections anciennes → nouvelles approuvés.
- [ ] **P0-06 — Valider le périmètre MVP.** Dépendances : P0-04, P0-05. Validation : liste des pages du premier lot, propriétaire de chaque contenu et date cible approuvés ; aucun lien prévu vers une page hors lot sans solution temporaire.
- [ ] **P0-07 — Valider la solution de formulaire.** Dépendances : P0-04. Validation : Formspree, Netlify Forms ou fonction dédiée choisi avec coûts, quotas, DPA, anti-spam, rétention et destinataires documentés.
- [ ] **P0-08 — Valider les exigences légales et de mesure.** Dépendances : aucune. Validation : responsable juridique/conformité désigné, analytics et consentement décidés, liste des sous-traitants établie.

**Critère de sortie de phase :** les huit décisions sont traçables ; la référence et le rollback sont sécurisés ; aucun développement structurel ne dépend d'une hypothèse non validée.

## Phase 1 — Contenus, marque et conformité

- [ ] **P1-01 — Collecter le logo source.** Dépendances : P0-06. Validation : SVG ou fichier vectoriel officiel, variantes claire/sombre, droits et règles d'usage reçus ; le JPEG actuel reste archivé.
- [ ] **P1-02 — Valider la police officielle.** Dépendances : P0-06. Validation : famille, licences web, graisses réellement disponibles et fichiers WOFF2 approuvés ; fallback documenté.
- [ ] **P1-03 — Valider les coordonnées et données réglementaires.** Dépendances : P0-08. Validation : raison sociale, RCS, ORIAS, adresse, téléphone, email, hébergeur et direction de publication confirmés sur sources officielles.
- [ ] **P1-04 — Corriger le lexique métier source.** Dépendances : P1-03. Validation : décision TPM/TMP, CMR, VUL, RC Pro/Exploitation et formulations réglementaires approuvées par l'expert métier.
- [ ] **P1-05 — Constituer l'inventaire de contenus MVP.** Dépendances : P0-06. Validation : pour chaque page, intention, H1, plan, CTA, preuves, auteur et statut de validation renseignés.
- [ ] **P1-06 — Collecter les preuves autorisées.** Dépendances : P0-08. Validation : partenaires, chiffres, témoignages et cas clients possèdent source, date, autorisation et périmètre d'utilisation ; sinon ils sont exclus.
- [ ] **P1-07 — Collecter les visuels métiers.** Dépendances : P0-06. Validation : originaux haute définition, droits, crédits, recadrages et alt provisoires inventoriés ; aucune image de stock générique non justifiée.
- [ ] **P1-08 — Rédiger les documents légaux.** Dépendances : P0-07, P0-08, P1-03. Validation : mentions légales et politique de confidentialité couvrant Formspree/Cal.com/Netlify/analytics validées juridiquement.

**Critère de sortie de phase :** identité, contenus critiques et conformité sont assez complets pour ne pas concevoir sur des données fictives.

## Phase 2 — Initialisation du socle

- [ ] **P2-01 — Initialiser le projet de génération statique.** Dépendances : P0-04. Validation : installation reproductible, scripts `dev`, `build`, `preview`, build vide réussi et versions verrouillées.
- [ ] **P2-02 — Créer l'arborescence `src`/`public`.** Dépendances : P2-01. Validation : dossiers layouts, components, pages, content, data, styles, scripts et assets conformes au plan.
- [ ] **P2-03 — Configurer Astro/TypeScript.** Dépendances : P2-01, P0-05. Validation : mode static, domaine canonique, TypeScript strict, alias utiles et sortie `dist` vérifiés.
- [ ] **P2-04 — Adapter Netlify au build.** Dépendances : P2-01. Validation : commande de build et dossier publié corrects, version Node verrouillée, preview fonctionnelle et production actuelle non affectée.
- [ ] **P2-05 — Mettre en place la qualité automatisée.** Dépendances : P2-01. Validation : formatage, lint HTML/CSS/TS, vérification de liens et commande de contrôle exécutables en CI.
- [ ] **P2-06 — Définir les budgets.** Dépendances : P2-01. Validation : seuils JS/CSS/images et objectifs LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 documentés.

**Critère de sortie de phase :** une preview statique minimale se construit automatiquement sans toucher aux deux HTML de référence.

## Phase 3 — Design system et composants globaux

- [ ] **P3-01 — Extraire les tokens de couleur.** Dépendances : P1-01, P2-02. Validation : palette actuelle codée en variables, variante dorée texte conforme AA mesurée, aucun changement arbitraire de marque.
- [ ] **P3-02 — Définir typographie et rythme.** Dépendances : P1-02, P2-02. Validation : échelle H1/H2/H3/corps responsive, graisses disponibles, interlignages et espacements comparés à la référence.
- [ ] **P3-03 — Définir rayons, ombres, conteneurs et grilles.** Dépendances : P3-01. Validation : tokens reproduisant 14/18/22/30/999 px, ombres bleutées et conteneur 1180 px ; exemples visuels approuvés.
- [ ] **P3-04 — Créer reset et styles globaux accessibles.** Dépendances : P3-01, P3-02. Validation : focus visible, liens, formulaires, réduction de mouvement, contraste forcé et zoom 200 % testés.
- [ ] **P3-05 — Créer `Button`, `Card`, `Tag`, `TrustPill`, `SectionHeader`.** Dépendances : P3-03, P3-04. Validation : variantes, hover/focus/active/disabled documentés et parité visuelle atteinte.
- [ ] **P3-06 — Créer le layout SEO de base.** Dépendances : P2-03, P0-05. Validation : title/description obligatoires, canonical, robots, OG, Twitter et favicons rendus correctement.
- [ ] **P3-07 — Créer le header desktop.** Dépendances : P3-05, P0-06. Validation : topbar + navigation + CTA, balises sémantiques, état actif et clavier conformes.
- [ ] **P3-08 — Créer la navigation mobile/tablette.** Dépendances : P3-07. Validation : aucun lien ne disparaît sous 980 px ; bouton accessible, `aria-expanded`, Escape, focus et cibles 44 px testés.
- [ ] **P3-09 — Créer le footer complet.** Dépendances : P1-03, P1-08, P3-05. Validation : marque, coordonnées, ORIAS, navigation et légal complets, responsive et lisibles.
- [ ] **P3-10 — Créer breadcrumbs et CTA global.** Dépendances : P3-05, P0-05. Validation : breadcrumbs visibles/JSON-LD cohérents et CTA paramétrable sans duplication.

**Critère de sortie de phase :** les composants globaux couvrent desktop/mobile, passent les contrôles clavier et reproduisent les marqueurs visuels de la landing.

## Phase 4 — Assets et performances de base

- [ ] **P4-01 — Externaliser et décliner le logo.** Dépendances : P1-01, P3-07, P3-09. Validation : aucun logo Base64 dans le nouveau build, SVG optimisé, fallback et dimensions présents, header/footer nets à 1×/2×.
- [ ] **P4-02 — Produire favicons et image sociale.** Dépendances : P1-01, P3-06. Validation : favicon, touch icon et OG 1200×630 testés sur preview.
- [ ] **P4-03 — Optimiser les images métier.** Dépendances : P1-07, P2-02. Validation : AVIF/WebP, srcset/sizes, dimensions, lazy-loading et alt validés ; budgets respectés.
- [ ] **P4-04 — Auto-héberger la police.** Dépendances : P1-02, P3-02. Validation : WOFF2, preload strictement nécessaire, `font-display`, licences et absence de requête tierce vérifiés.
- [ ] **P4-05 — Configurer le cache des assets.** Dépendances : P2-04. Validation : assets fingerprintés en cache long immutable et HTML en cache court sur preview.

**Critère de sortie de phase :** aucun asset critique n'est dupliqué en Base64, le CLS est maîtrisé et les ressources sont réutilisables entre pages.

## Phase 5 — Reconstruction de l'accueil à parité

- [ ] **P5-01 — Recréer le hero.** Dépendances : phase 3, P4-01. Validation : proposition de valeur, double CTA, trust pills et diagnostic fidèles aux marqueurs existants à 1440/1024/768/375 px.
- [ ] **P5-02 — Recréer constat et intervention.** Dépendances : P5-01, P1-05. Validation : cartes et cinq étapes utilisent les composants partagés, hiérarchie H2/H3 correcte.
- [ ] **P5-03 — Recréer le panneau transport.** Dépendances : P3-05, P1-04. Validation : dégradé, tags, cartes et terminologie TPM validée, sans « TMP » incohérent.
- [ ] **P5-04 — Recréer la méthode d'audit.** Dépendances : P3-05, P1-05. Validation : quatre étapes, ordre de lecture et numérotation accessibles sur tous viewports.
- [ ] **P5-05 — Ajouter preuves, secteurs, ressources et FAQ.** Dépendances : P1-05, P1-06. Validation : aucun contenu fictif ; chaque bloc possède une source/propriétaire et un CTA cohérent.
- [ ] **P5-06 — Intégrer le formulaire accessible.** Dépendances : P0-07, P1-08, P3-04. Validation : labels associés, autocomplete, erreurs par champ, pending/success/error live, focus, anti-spam et fallback sans JS testés.
- [ ] **P5-07 — Intégrer Cal.com comme lien secondaire.** Dépendances : P0-07, P1-08. Validation : URL, fuseau, données collectées, nouvel onglet et indisponibilité testés ; aucune soumission de données de test réelles.
- [ ] **P5-08 — Comparer à la référence.** Dépendances : P5-01 à P5-07. Validation : matrice de captures 320/375/640/768/980/1024/1280/1440, écarts intentionnels documentés et approuvés.

**Critère de sortie de phase :** l'accueil moderne conserve clairement l'identité actuelle, corrige mobile/accessibilité et ne dépend d'aucune page inexistante.

## Phase 6 — Pages MVP et navigation complète

- [ ] **P6-01 — Créer le layout des pages solutions.** Dépendances : phase 3, P3-10. Validation : hero, garanties, risques, méthode, FAQ, contenus liés et CTA paramétrables sans duplication.
- [ ] **P6-02 — Créer la page Audit assurance entreprise.** Dépendances : P6-01, P1-05. Validation : contenu métier validé, formulaire/CTA fonctionnel, title/H1/canonical uniques.
- [ ] **P6-03 — Créer Assurance transport.** Dépendances : P6-01, P1-05. Validation : URL cible, contenu, maillage et SEO validés.
- [ ] **P6-04 — Créer Flotte automobile.** Dépendances : P6-01, P1-05. Validation : mêmes critères que P6-03.
- [ ] **P6-05 — Créer TPM / marchandises transportées.** Dépendances : P6-01, P1-04. Validation : terminologie TPM/CMR approuvée, mêmes critères que P6-03.
- [ ] **P6-06 — Créer RC professionnelle.** Dépendances : P6-01, P1-04. Validation : distinction RC Pro/Exploitation claire, mêmes critères que P6-03.
- [ ] **P6-07 — Créer Santé entreprise.** Dépendances : P6-01, P1-05. Validation : contenu et obligations vérifiés, mêmes critères que P6-03.
- [ ] **P6-08 — Créer À propos.** Dépendances : P1-05, P1-06. Validation : présentation vérifiable, équipe/positionnement et CTA sans affirmation non sourcée.
- [ ] **P6-09 — Créer Contact.** Dépendances : P5-06, P5-07. Validation : coordonnées alternatives, formulaire, confidentialité et confirmation testés.
- [ ] **P6-10 — Brancher la navigation sans lien cassé.** Dépendances : P6-02 à P6-09. Validation : crawl interne à zéro 404 et menus desktop/mobile cohérents.

**Critère de sortie de phase :** toutes les destinations annoncées dans le MVP existent et les six anciennes URLs ont une cible canonique réelle.

## Phase 7 — Ressources et lots secondaires

- [ ] **P7-01 — Créer les layouts secteur et article.** Dépendances : P6-01, P3-10. Validation : métadonnées, breadcrumbs, related content et schema adaptés.
- [ ] **P7-02 — Mettre en place les collections de contenu.** Dépendances : P2-03, P7-01. Validation : schémas typés, brouillons exclus, dates/auteurs obligatoires et build en erreur sur métadonnée invalide.
- [ ] **P7-03 — Publier les premières pages secteurs.** Dépendances : P7-01, P1-05. Validation : transporteurs, logistique et flottes en priorité, contenus validés et maillage vers solutions.
- [ ] **P7-04 — Publier les premiers contenus éditoriaux.** Dépendances : P7-02, plan SEO. Validation : au moins trois contenus originaux, sourcés, relus et reliés aux pages commerciales.
- [ ] **P7-05 — Planifier les autres solutions/secteurs.** Dépendances : mesure des besoins et contenus. Validation : backlog priorisé par valeur métier et potentiel SEO, sans page mince créée pour remplir l'arborescence.
- [ ] **P7-06 — Créer calendrier éditorial et gouvernance.** Dépendances : P7-04. Validation : responsables, fréquence, revue conformité, mise à jour et archivage documentés.

**Critère de sortie de phase :** le centre de ressources est industrialisé et chaque page apporte une valeur propre.

## Phase 8 — SEO, légal, système et sécurité

- [ ] **P8-01 — Finaliser les métadonnées de toutes les pages.** Dépendances : phases 5–7. Validation : aucun title/description/canonical dupliqué ou absent ; OG/Twitter validés.
- [ ] **P8-02 — Ajouter les données structurées.** Dépendances : P1-03, P3-06. Validation : Organization/WebSite/Breadcrumb/Service/Article/FAQ selon page, test Schema sans erreur et aucune donnée inventée.
- [ ] **P8-03 — Générer le sitemap XML.** Dépendances : P0-05, pages finales. Validation : uniquement URL canoniques indexables, HTTP 200, génération automatique.
- [ ] **P8-04 — Créer robots.txt.** Dépendances : P8-03. Validation : sitemap référencé, assets non bloqués, comportements preview/production vérifiés.
- [ ] **P8-05 — Créer la page 404.** Dépendances : P3-07, P3-09. Validation : code HTTP 404 réel sur Netlify, navigation utile, responsive et indexation exclue.
- [ ] **P8-06 — Publier mentions légales et confidentialité.** Dépendances : P1-08, P3-09. Validation : textes approuvés, accessibles depuis toutes les pages, date de mise à jour affichée.
- [ ] **P8-07 — Configurer les redirections.** Dépendances : P0-05, P6-10. Validation : anciennes URLs `.html` → équivalents exacts en 301, pas de boucle/chaîne, `/index.html` → `/`.
- [ ] **P8-08 — Renforcer les headers.** Dépendances : JS/CSS externalisés, tiers connus. Validation : CSP, Permissions-Policy, nosniff, referrer, HSTS et cache testés sans casser Formspree/Cal.com/assets.
- [ ] **P8-09 — Configurer analytics/consentement si retenus.** Dépendances : P0-08, P1-08. Validation : aucun traceur non essentiel avant consentement, politique mise à jour, événements sans données personnelles.

**Critère de sortie de phase :** le site possède toutes les couches SEO, légales, système et sécurité nécessaires au lancement.

## Phase 9 — Recette et validation avant production

- [ ] **P9-01 — Valider build et code.** Dépendances : phases précédentes. Validation : build propre, lint/tests sans erreur, HTML valide, console sans erreur.
- [ ] **P9-02 — Crawler tous les liens.** Dépendances : P6-10, P8-07. Validation : zéro lien interne cassé, codes/redirections conformes, liens externes vérifiés.
- [ ] **P9-03 — Recette responsive.** Dépendances : pages finales. Validation : 320/375/640/768/980/1024/1280/1440 px, portrait/paysage, aucun overflow ou contenu masqué.
- [ ] **P9-04 — Recette accessibilité.** Dépendances : pages finales. Validation : clavier, VoiceOver/NVDA, axe, contraste, zoom 200/400 %, mouvement réduit ; aucun défaut critique/sérieux.
- [ ] **P9-05 — Recette formulaires.** Dépendances : P5-06, P6-09. Validation : succès, erreurs champ/réseau/serveur, double envoi, anti-spam, notification et fallback sans JS ; données de test synthétiques seulement.
- [ ] **P9-06 — Recette performance.** Dépendances : P4-05, pages finales. Validation : budgets respectés et Core Web Vitals cibles atteints sur preview mobile/desktop ou écarts acceptés par écrit.
- [ ] **P9-07 — Recette SEO.** Dépendances : phase 8. Validation : canonicals, robots, sitemap, JSON-LD, OG, H1 et indexabilité contrôlés avec outils dédiés.
- [ ] **P9-08 — Validation métier et juridique.** Dépendances : contenus finaux. Validation : approbation explicite des offres, promesses, ORIAS/RCS, mentions, confidentialité et partenaires.
- [ ] **P9-09 — Préparer rollback et monitoring.** Dépendances : P0-03, P2-04. Validation : procédure chronométrée, version précédente restaurable, alertes 404/formulaires/disponibilité prêtes.

**Critère de sortie de phase :** aucune anomalie bloquante/élevée ouverte ; validation métier, technique et juridique enregistrée.

## Phase 10 — Mise en production et suivi

- [ ] **P10-01 — Planifier la bascule.** Dépendances : phase 9 terminée. Validation : fenêtre, responsables, sauvegarde, DNS/Netlify, communication et retour arrière confirmés.
- [ ] **P10-02 — Déployer la version approuvée.** Dépendances : P10-01. Validation : commit/tag approuvé en production, HTTPS et domaine canonique corrects.
- [ ] **P10-03 — Exécuter le smoke test production.** Dépendances : P10-02. Validation : accueil, navigation, 404, redirections, formulaire, Cal.com, assets, headers et console testés.
- [ ] **P10-04 — Ouvrir l'indexation et soumettre le sitemap.** Dépendances : P10-03. Validation : production indexable, preview non indexable, sitemap soumis à Search Console.
- [ ] **P10-05 — Surveiller les 72 premières heures.** Dépendances : P10-02. Validation : disponibilité, 404, erreurs JS, formulaires, Core Web Vitals et indexation suivis ; incidents consignés.
- [ ] **P10-06 — Faire le bilan à 30 jours.** Dépendances : P10-05. Validation : conversions, requêtes SEO, pages d'entrée, qualité des leads et backlog d'optimisation analysés sans données trompeuses.

**Critère de sortie de phase :** production stable, indexée comme prévu, conversions vérifiées et prochaines améliorations priorisées.

## Chemin critique résumé

`P0-04 → P2-01 → P2-03 → phase 3 → phase 5 → phase 6 → phase 8 → phase 9 → phase 10`

En parallèle, `P0-07/P0-08 → phase 1 → formulaire/légal` et `P1-01/P1-02 → design system/assets` doivent aboutir avant la fin de la reconstruction de l'accueil.

## Trois prochaines tâches à lancer après validation du plan

1. P0-01/P0-02/P0-03 : contrôle de version, gel de la référence et sauvegarde.
2. P0-04 à P0-08 : atelier court de décisions structurantes et conformité.
3. P1-01 à P1-05 : collecte logo/police/données officielles et cadrage des contenus MVP.
