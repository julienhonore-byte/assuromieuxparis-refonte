# Plan de refonte — Assuromieux Paris

Date : 21 juillet 2026  
Statut : proposition à valider avant toute modification de la landing de référence.

## 1. Objectif et principes directeurs

Transformer la landing actuelle en un site statique multipage premium, rapide, accessible, éditorial et optimisé pour la conversion et le référencement. L'identité existante reste la référence : bleus profonds, doré, cartes aux grands rayons, surfaces claires, typographie dense et positionnement de cabinet de conseil.

Principes : contenu utile avant effets visuels ; HTML sémantique ; rendu statique ; JavaScript progressif ; composants partagés ; URL propres ; données vérifiées ; accessibilité WCAG 2.2 AA ; aucune rupture de la production pendant la migration.

## 2. Décision d'architecture recommandée

### 2.1 Solution proposée : Astro en génération statique

Astro est recommandé pour produire des pages HTML statiques à partir de layouts et composants partagés, avec zéro JavaScript client par défaut et hydratation uniquement des rares composants interactifs. Il répond au besoin multipage/SEO tout en évitant la duplication d'un site HTML manuel.

Socle proposé :

- Astro, TypeScript strict pour les utilitaires et données structurées ;
- CSS global et CSS de composants, sans framework utilitaire dans un premier temps ;
- contenus éditoriaux en Markdown/MDX via collections typées ;
- JavaScript client limité au menu mobile, au formulaire et aux accordéons ;
- build statique vers `dist/` ;
- déploiement Netlify sans serveur applicatif.

Alternative si aucun outil de build n'est accepté : HTML/CSS/JS statiques avec includes exécutés au build par Eleventy. Un ensemble de fichiers HTML copiés manuellement n'est pas recommandé, car header, footer, SEO et composants divergeraient rapidement.

### 2.2 Décisions à valider avant implémentation

1. Adoption d'Astro et d'un build npm, ou exigence stricte « sans build ».
2. Domaine canonique, règles d'URL et redirections depuis les anciennes URLs `.html`.
3. Arborescence MVP et pages à publier au premier lot.
4. Conservation de Formspree ou migration vers Netlify Forms/une fonction contrôlée.
5. Police officielle, logo vectoriel et droits sur les visuels.
6. Données réglementaires, politique de confidentialité et responsable du traitement.
7. Outil de mesure d'audience et gestion du consentement, le cas échéant.

## 3. Arborescence technique recommandée

```text
/
├── public/
│   ├── favicon.ico
│   ├── icons/
│   ├── images/
│   │   ├── brand/
│   │   ├── services/
│   │   ├── sectors/
│   │   └── social/
│   ├── fonts/
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── global/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── forms/
│   │   └── seo/
│   ├── content/
│   │   ├── articles/
│   │   ├── guides/
│   │   ├── case-studies/
│   │   └── config.ts
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── sectors.ts
│   │   └── company.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServiceLayout.astro
│   │   ├── SectorLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   ├── scripts/
│   │   ├── mobile-nav.ts
│   │   └── lead-form.ts
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       ├── global.css
│       ├── utilities.css
│       └── components/
├── source/
│   └── index-production-reference.html
├── docs/
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

La référence de production reste hors de `src/` et n'est jamais transformée par le build.

## 4. Arborescence fonctionnelle et URL

### Niveau principal

- `/` — Accueil.
- `/audit-assurance-entreprise/` — Audit gratuit.
- `/solutions/` — Vue d'ensemble des solutions.
- `/secteurs/` — Vue d'ensemble des secteurs.
- `/ressources/` — Centre de ressources.
- `/a-propos/` — Cabinet, méthode et équipe.
- `/contact/` — Contact et demande d'analyse.

### Solutions

- `/solutions/assurance-transport/`
- `/solutions/flotte-automobile/`
- `/solutions/tpm-marchandises-transportees/`
- `/solutions/rc-professionnelle/`
- `/solutions/multirisque-professionnelle/`
- `/solutions/assurance-decennale/`
- `/solutions/cyberassurance/`
- `/solutions/sante-entreprise/`
- `/solutions/prevoyance-entreprise/`
- `/solutions/protection-dirigeant/`

### Secteurs

- `/secteurs/transporteurs-routiers/`
- `/secteurs/logistique-entrepots/`
- `/secteurs/convoyage/`
- `/secteurs/demenagement/`
- `/secteurs/btp-construction/`
- `/secteurs/artisans/`
- `/secteurs/pme-services/`
- `/secteurs/flottes-professionnelles/`

### Ressources

- `/ressources/guides/`
- `/ressources/articles/`
- `/ressources/etudes-de-cas/`
- `/ressources/faq/`
- `/ressources/lexique/`
- `/ressources/comparatifs/`
- `/ressources/actualites-reglementaires/`
- `/ressources/[slug]/` pour chaque contenu.

### Légal et système

- `/mentions-legales/`
- `/politique-de-confidentialite/`
- `/cookies/` seulement si nécessaire selon les traceurs retenus.
- `/merci/` ou confirmation accessible dans la page.
- `/404.html`.

Les anciennes URLs (`/assurance-transport.html`, `/flotte-auto.html`, `/rc-pro.html`, `/tpm.html`, `/sante-entreprise.html`, `/contact.html`, `/index.html`) devront rediriger en 301 vers les nouvelles URL après validation.

## 5. Stratégie de composants

### Composants globaux

- `SEOHead` : title, description, canonical, robots, Open Graph, Twitter Card, favicons et JSON-LD.
- `SiteHeader` : topbar, logo, navigation desktop, menu mobile et CTA.
- `SiteFooter` : identité, liens solutions/secteurs/ressources, coordonnées, ORIAS et légal.
- `Container`, `Section`, `SectionHeader`, `Button`, `Breadcrumbs`.

### Composants de contenu

- `Hero`, `DiagnosticCard`, `TrustPill`, `ServiceCard`, `SectorCard`, `MethodSteps`.
- `ProofBlock`, `CaseStudyCard`, `Testimonial` uniquement avec preuves validées.
- `FAQ`, `ArticleCard`, `GuideCard`, `RelatedContent`, `CTASection`.
- `LeadForm`, `FormStatus`, `AppointmentLink`.

Chaque composant reçoit des propriétés simples, produit du HTML sémantique et n'ajoute du JavaScript que s'il existe une interaction réelle. Les contenus métier ne doivent pas être enfouis dans le composant ; ils proviennent des pages, collections ou fichiers de données.

## 6. Stratégie CSS et design system

### 6.1 Tokens

Formaliser dans `tokens.css` :

- couleurs actuelles (`#12365f`, `#0b2747`, `#c99a46`, `#eef4fa`, `#162033`, `#667085`, `#d9e3ee`) ;
- variante dorée accessible pour les petits textes ;
- échelle typographique responsive ;
- espace basé sur 4/8 px ;
- rayons 14/18/22/30/999 px ;
- ombres faibles, moyennes et CTA ;
- conteneurs 760/1180 px ;
- durées et courbes d'animation ;
- z-index documentés.

### 6.2 Organisation

- reset minimal moderne ;
- styles globaux pour typographie, liens, focus et formulaires ;
- composants isolés avec classes lisibles ;
- pas de styles inline ;
- pas de `!important` sauf exception documentée ;
- CSS critique léger, reste mutualisé et minifié ;
- `prefers-reduced-motion`, `:focus-visible`, contraste forcé et impression ;
- approche mobile-first avec breakpoints dictés par le contenu.

Conserver visuellement les grands titres, boutons pilules, cartes arrondies, bordures fines, ombres bleutées et panneaux en dégradé. L'évolution premium doit venir de la cohérence, des preuves, de la photographie et de la qualité éditoriale, pas d'animations lourdes.

## 7. Stratégie JavaScript

- HTML et navigation utilisables sans JavaScript.
- Module `mobile-nav.ts` : ouverture/fermeture, `aria-expanded`, focus trap raisonné, fermeture Escape, restauration du focus et blocage du scroll contrôlé.
- Module `lead-form.ts` : validation progressive, état pending/success/error accessible, timeout, prévention du double envoi et fallback natif.
- Accordéon FAQ avec `<details>/<summary>` si possible, donc sans JS.
- Aucun bundle client global ni SPA.
- Pas d'embed Cal.com par défaut ; préférer le lien externe léger.
- Tests unitaires des utilitaires et tests end-to-end des parcours critiques.

## 8. Gestion des images, du logo et des polices

1. Obtenir le logo source vectoriel officiel et ses variantes.
2. Conserver le JPEG 300 × 83 comme référence, mais retirer à terme les copies Base64.
3. Produire SVG optimisé, PNG/WebP de secours, favicon, Apple touch icon et image Open Graph.
4. Déclarer largeur/hauteur ou ratio pour éviter le CLS.
5. Générer AVIF/WebP et `srcset/sizes` pour les photos ; lazy-loading sous la ligne de flottaison.
6. Définir une convention de nommage, textes alternatifs et droits/licences.
7. Auto-héberger la police officielle en WOFF2, sous-ensemble latin si pertinent, avec `font-display: swap`.

## 9. Structure type des pages

### Accueil

Header → hero → preuves vérifiées → enjeux → solutions → secteurs → méthode d'audit → cas clients → ressources → FAQ → CTA → footer.

### Page solution

Breadcrumbs → hero avec H1/intention → risques couverts → garanties/exclusions → méthode d'analyse → secteurs concernés → cas/preuves → FAQ → contenus liés → CTA audit.

### Page secteur

Breadcrumbs → enjeux du métier → cartographie des risques → solutions pertinentes → méthode → preuves → FAQ → CTA.

### Article/guide

Breadcrumbs → H1, auteur/date/mise à jour → sommaire → contenu → sources et avertissement → auteur → contenus liés → CTA non intrusif.

### Contact/audit

Promesse claire → étapes et délais → formulaire → coordonnées alternatives → confidentialité → prise de rendez-vous → FAQ.

## 10. Navigation desktop et mobile

Desktop : conserver topbar + barre claire. Prévoir liens Accueil, Solutions, Secteurs, Ressources, À propos et Contact, avec CTA « Audit gratuit ». Les menus déroulants doivent fonctionner au clavier, au survol et au clic, sans mega-menu excessif.

Mobile/tablette : bouton menu visible sous le breakpoint réel, libellé accessible, panneau ou drawer contenant tous les liens et le CTA. Cibles ≥ 44 px, niveau actif, sous-menus simples, fermeture Escape/clic extérieur, focus géré. Aucun lien ne doit disparaître sans alternative.

Le header peut devenir sticky si les tests montrent un bénéfice et si son encombrement mobile reste acceptable.

## 11. Footer

Conserver le fond bleu profond. Organiser en quatre zones selon l'espace : marque et positionnement ; solutions ; secteurs/ressources ; contact/légal. Ajouter coordonnées cliquables, ORIAS lié au registre, mentions légales, confidentialité, préférences cookies si nécessaires, copyright et rappel de zone d'intervention. Les mentions réglementaires doivent être validées et lisibles, sans duplication confuse.

## 12. Formulaires et conversion

Décider entre :

- Formspree conservé, avec plan, DPA, domaines autorisés, anti-spam et rétention validés ;
- Netlify Forms, plus intégré au déploiement mais à évaluer de la même manière ;
- fonction serverless/API contrôlée, plus flexible mais plus coûteuse à maintenir.

Exigences communes : labels/IDs, autocomplete, erreurs par champ, résumé d'erreurs, `aria-live`, focus de confirmation, honeypot, limitation anti-abus, mentions RGPD et lien confidentialité, collecte minimale, journalisation sans données sensibles, test de délivrabilité, page/fallback de confirmation et suivi de conversion respectueux du consentement.

Cal.com reste un lien secondaire vérifié avec `rel="noopener noreferrer"`. Documenter les données collectées par Cal.com dans la politique de confidentialité.

## 13. SEO technique

Pour chaque page : title et description uniques, canonical absolue, un H1, URL propre, Open Graph/Twitter, image sociale, breadcrumbs, maillage contextuel et données structurées adaptées. Centraliser les valeurs par défaut dans `SEOHead`, mais obliger chaque page à fournir title/description.

Mettre en place :

- `site` canonique dans la configuration Astro ;
- trailing slash cohérent ;
- redirections 301 des anciennes URLs ;
- sitemap XML généré au build ;
- `robots.txt` avec lien vers le sitemap ;
- 404 utile avec recherche/liens principaux ;
- vérification Search Console après mise en ligne ;
- aucune indexation de prévisualisation/staging ;
- dates de publication/modification fiables pour les contenus.

## 14. Données structurées

Générer du JSON-LD à partir d'une source de données société unique et validée :

- `Organization` et type local/assurance le plus exact disponible ;
- `WebSite` sur l'accueil ;
- `BreadcrumbList` sur les pages profondes ;
- `Service` sur les pages solutions ;
- `Article` pour articles/guides ;
- `FAQPage` uniquement lorsque les questions/réponses sont visibles et éligibles.

Inclure nom légal, URL, logo, adresse, téléphone, zone servie et références seulement si exacts. Ne jamais inventer `aggregateRating`, partenaires ou résultats.

## 15. Sitemap, robots.txt et 404

Le sitemap doit contenir uniquement les URL canoniques indexables et être régénéré à chaque build. Exclure 404, confirmation, brouillons et pages `noindex`. `robots.txt` doit autoriser les assets nécessaires, référencer le sitemap et ne pas servir de mécanisme de confidentialité.

La page 404 doit renvoyer réellement HTTP 404 sur Netlify, reprendre le header/footer, expliquer simplement l'erreur et proposer Accueil, Solutions, Ressources et Contact. Ajouter des redirections seulement pour des équivalents réels, jamais toutes les erreurs vers l'accueil.

## 16. Politique de confidentialité et légal

Faire valider par une personne compétente : responsable du traitement, finalités, bases légales, catégories de données, destinataires Formspree/Cal.com/Netlify/analytics, transferts éventuels, durées de conservation, sécurité, droits, contact et réclamation CNIL. Les mentions légales doivent contenir éditeur, hébergeur, direction de publication, données société/courtier et propriété intellectuelle.

Une bannière cookies n'est nécessaire que selon les traceurs réellement déployés. Privilégier une mesure sans cookies ou attendre le consentement avant tout traceur non essentiel.

## 17. Compatibilité Netlify

Configuration cible indicative : commande de build `npm run build`, dossier publié `dist`, version Node verrouillée, previews de déploiement, redirections et headers dans `netlify.toml`/`_redirects`.

Ajouter progressivement :

- cache long `immutable` pour assets fingerprintés ;
- cache court pour HTML ;
- `nosniff`, `Referrer-Policy`, HSTS au domaine et `Permissions-Policy` ;
- Content-Security-Policy après suppression des styles/scripts inline et inventaire des tiers ;
- secrets uniquement dans les variables Netlify, jamais dans le dépôt ;
- contexte de preview en `noindex` et URL canonique de production.

## 18. Migration depuis la landing actuelle

1. Geler et hasher la référence actuelle ; ne jamais la modifier.
2. Initialiser le nouveau socle à côté de la référence.
3. Extraire les tokens graphiques, composants globaux et assets.
4. Reproduire l'accueil à parité visuelle dans le nouveau système.
5. Corriger sémantique, accessibilité, mobile et formulaire sans changer le positionnement.
6. Valider la parité par captures aux viewports de référence.
7. Créer les pages MVP avec contenus validés.
8. Ajouter SEO, légal, sitemap, robots, 404 et redirections.
9. Déployer une preview Netlify protégée/noindex.
10. Tester, faire valider métier/juridique, puis basculer le domaine.
11. Surveiller erreurs 404, formulaires, Core Web Vitals et indexation après lancement.

La landing actuelle reste déployable jusqu'à la validation de la preview. Aucun remplacement « big bang » sans plan de retour arrière.

## 19. Contrôles avant mise en production

- Build reproductible et sans avertissement bloquant.
- Validation HTML, liens internes et absence de 404 involontaire.
- Test responsive 320–1440 px, zoom 200 %, portrait/paysage.
- Clavier, lecteurs d'écran, axe et contraste WCAG 2.2 AA.
- Formulaire réel en environnement contrôlé : succès, erreur, spam, notification et confidentialité.
- Cal.com, téléphone, email et tous les CTA vérifiés.
- Titles, descriptions, canonicals, OG, JSON-LD et breadcrumbs contrôlés.
- Sitemap/robots/404/redirections testés avec codes HTTP.
- Lighthouse mobile/desktop et budgets LCP/INP/CLS validés.
- Images optimisées, dimensions déclarées et textes alternatifs pertinents.
- Données légales, ORIAS, RCS, adresse, promesses et contenus approuvés.
- CSP/headers/cookies testés sans erreur console.
- Preview `noindex`, production indexable au moment convenu.
- Sauvegarde, procédure de rollback et surveillance post-lancement prêtes.

## 20. Définition du MVP recommandé

Premier lot : accueil, audit, transport, flotte, TPM, RC Pro, santé entreprise, contact, à propos, mentions légales, confidentialité, 404, sitemap et robots. Les autres solutions, secteurs et ressources peuvent suivre par lots à condition que la navigation ne promette pas des pages absentes.

Le MVP doit déjà être complet du point de vue accessibilité, légal, SEO technique et conversion ; seule l'étendue éditoriale peut être progressive.
