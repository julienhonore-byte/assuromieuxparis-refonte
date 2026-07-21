# Audit technique — Assuromieux Paris

Date de l'audit : 21 juillet 2026  
Périmètre : `index.html`, `source/index-production-reference.html`, `netlify.toml`, documentation et ressources présentes dans le projet.  
Méthode : analyse statique exhaustive du HTML, du CSS et du JavaScript. Le contrôle visuel automatisé multi-viewport n'a pas pu être exécuté, le navigateur de test refusant l'accès direct au fichier local. Il reste donc à confirmer sur une prévisualisation HTTP/Netlify.

## 1. Synthèse exécutive

La base actuelle est une landing page statique monofichier de 833 lignes et 59 244 octets. Le HTML, le CSS, deux copies Base64 du logo et le JavaScript sont regroupés dans `index.html`. La page de travail est strictement identique à `source/index-production-reference.html` : même taille, même empreinte SHA-256 (`cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0`) et aucune différence textuelle ou binaire.

La landing constitue une bonne référence visuelle : palette cohérente, hiérarchie de titres lisible, cartes premium, espacements généreux et positionnement conseil. Elle ne constitue pas encore une base technique suffisante pour un site multipage : navigation mobile absente, six liens cassés, styles et scripts non mutualisés, SEO limité, formulaire dépendant d'un tiers, accessibilité incomplète et pages légales manquantes.

Priorités critiques avant toute mise en production d'une refonte : valider l'arborescence et les URL, choisir l'architecture de génération statique, sécuriser et rendre accessible le formulaire, créer les destinations des liens et valider les informations réglementaires.

## 2. État et intégrité des fichiers de référence

- `index.html` : copie de travail actuelle.
- `source/index-production-reference.html` : référence obligatoire, à conserver en lecture seule.
- Les deux fichiers sont exactement identiques au moment de l'audit.
- Le dépôt ne contient pas d'historique Git exploitable dans ce dossier ; la traçabilité des changements repose actuellement sur les copies de fichiers et leurs dates.
- Aucun système de build, gestionnaire de paquets, framework ou bibliothèque externe n'est présent.

## 3. Structure HTML actuelle

### 3.1 Document et landmarks

Le document déclare correctement `<!DOCTYPE html>`, `<html lang="fr">`, UTF-8 et le viewport mobile. Le `<body>` contient une racine `.am-landing`, un bloc `<style>`, la page et un `<script>` final.

Structure fonctionnelle :

1. topbar d'information ;
2. barre de navigation ;
3. hero avec proposition de valeur et carte de diagnostic ;
4. section « Constat marché » ;
5. section « Notre intervention » ;
6. section « Expertise sectorielle » ;
7. section « Méthode » ;
8. section de contact et formulaire ;
9. footer réglementaire ;
10. script de soumission asynchrone.

Le document comporte six éléments `<section>` et un `<footer>`, mais aucun `<header>`, `<nav>` ni `<main>`. La navigation est un `<div class="am-nav">`, ce qui réduit la qualité sémantique et l'efficacité des technologies d'assistance. Il n'existe pas de lien d'évitement « Aller au contenu ».

### 3.2 Hiérarchie des titres

- H1 : un seul, « Réduisez vos coûts d’assurance sans fragiliser vos garanties. » ; c'est correct pour une page d'accueil.
- H2 : six au total, un dans la carte de diagnostic puis un par grande section.
- H3 : seize au total, utilisés pour les cartes de problèmes, les cinq étapes d'intervention, les expertises transport et les quatre étapes de méthode.
- Aucun saut direct H1 → H3 n'est constaté dans les blocs principaux.

La hiérarchie est globalement cohérente. Le H2 de la carte de diagnostic se trouve dans le hero et précède les H2 de sections : c'est acceptable, mais il faudra conserver une structure logique indépendante de la mise en page dans les futurs composants. Chaque nouvelle page devra garder exactement un H1 descriptif et des H2/H3 ordonnés.

### 3.3 Qualité du balisage

Points positifs : langue déclarée, attributs `alt` présents sur les deux logos, boutons et liens natifs, champs dotés d'un type pertinent (`email`, `tel`), champs obligatoires signalés par `required`.

Points à corriger :

- absence de landmarks `header`, `nav` et `main` ;
- labels de formulaire non associés aux contrôles : les `<label>` ne possèdent pas de `for`, les champs n'ont pas d'`id` et les contrôles ne sont pas imbriqués dans les labels ;
- absence de `autocomplete`, `inputmode`, descriptions d'aide et indication explicite des champs obligatoires ;
- pas de zone `aria-live` pour les états d'envoi, de réussite et d'erreur ;
- le message de réussite est injecté en HTML et remplace le formulaire sans gestion du focus ;
- aucune navigation au clavier spécifique pour un menu mobile, puisqu'il n'existe pas ;
- aucun état de page active (`aria-current="page"`) ;
- l'adresse et les données légales sont placées dans un `<div>` sans `<address>` ni liens cliquables vers ORIAS, téléphone ou email ;
- `overflow:hidden` sur la racine peut masquer un débordement réel ou couper certains éléments/focus.

## 4. CSS intégré et dette de structure

Le CSS est encapsulé sous `.am-landing`, ce qui limite les collisions dans un environnement d'embed Carrd/Tiiny. Cette décision est adaptée au contexte historique mais devient inutilement contraignante pour un site autonome. Tous les styles se trouvent dans le HTML ; aucune feuille n'est mise en cache ou partagée entre pages.

### 4.1 Palette existante à préserver

| Rôle | Variable / valeur | Usage actuel |
|---|---|---|
| Bleu principal | `--am-blue: #12365f` | boutons, numéros, focus, dégradés |
| Bleu profond | `--am-blue-dark: #0b2747` | titres, topbar, footer |
| Doré | `--am-gold: #c99a46` | accents, kickers, numérotation |
| Doré clair | `--am-gold-soft: #f4e3bf` | marque alternative |
| Fond bleu pâle | `--am-bg: #eef4fa` | fond général et sections |
| Blanc | `--am-white: #ffffff` | cartes et surfaces |
| Texte principal | `--am-text: #162033` | corps principal |
| Texte atténué | `--am-muted: #667085` | descriptions et mentions |
| Bordure | `--am-border: #d9e3ee` | cartes et champs |
| Surface douce | `--am-soft: #f7fbff` | surfaces secondaires |

Couleurs supplémentaires : `#344054` et `#475467` pour les textes secondaires, `#e8f1fb` et `#dce9f6` sur fonds sombres, `#f8fbff`/`#fbfdff` pour les cartes et champs, et `#eef5fb`/`#e6eef7` dans le hero.

Le doré `#c99a46` utilisé en petit texte sur fond blanc ou très clair est susceptible de ne pas atteindre le contraste WCAG AA de 4,5:1. Les combinaisons doivent être mesurées et une variante dorée plus foncée prévue pour le texte, tout en conservant le doré actuel pour les éléments décoratifs.

### 4.2 Typographies

Pile actuelle : `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`.

Inter n'est ni importée ni fournie localement. Elle ne s'affiche donc que si elle est déjà installée sur l'appareil ; sinon le rendu bascule vers la police système. Les graisses atypiques `750`, `850`, `900` et `950` ne sont pas garanties par toutes les polices de repli et peuvent être arrondies par le navigateur.

Échelle actuelle :

- H1 : `clamp(42px, 6vw, 72px)`, ligne `0.98`, interlettrage `-0.06em`, graisse `900` ; forcé à `48px` sous 980 px et `40px` sous 640 px.
- H2 principal : `clamp(31px, 4vw, 48px)`, ligne `1.06`, interlettrage `-0.045em`, graisse `900`.
- H2 de carte : `25px`, ligne `1.12`.
- H3 de carte : `21px`, ligne `1.2`.
- Lead : `19px`, puis `17px` sur mobile.
- Texte de section : `18px`.
- Texte de carte : `15.5px`.
- Navigation : `14px` ; topbar `13px` ; kicker `12px`.

Recommandation : conserver cette personnalité typographique, mais charger une police validée (auto-hébergée en WOFF2 si Inter est retenue), limiter les graisses aux fichiers réellement disponibles et formaliser l'échelle en tokens.

### 4.3 Largeurs, espacements et grilles

- Conteneur principal : `min(100% - 40px, 1180px)` ; gouttière mobile de 14 px par côté via `100% - 28px`.
- Largeur maximale des introductions de section : 760 px ; lead du hero : 680 px.
- Navigation : hauteur minimale 78 px.
- Hero : padding vertical 86/64 px ; 58 px sur mobile.
- Sections : 82 px vertical ; 60 px sur mobile.
- Grilles : 2, 3, 4 ou 5 colonnes avec espaces de 18 à 22 px.
- Grands espacements : hero 56 px, split 44 px, formulaire 40 px, header de section 38 px.
- Espacements internes des cartes : 24, 28, 30, 34 ou 42 px ; réduits à 24 px sur mobile pour les grands panneaux.

La densité est cohérente et premium, mais les valeurs sont nombreuses et non tokenisées. Une échelle commune de 4/8 px simplifierait la maintenance sans changer visiblement le rendu.

### 4.4 Rayons, ombres et surfaces

- Pilules et boutons : `999px`.
- Champs : `14px`.
- Petits repères : 13–14 px.
- Cartes : `18px` ou `22px`.
- Grands panneaux : `30px` ; bordure intérieure du diagnostic : `24px`.
- Ombre globale : `0 22px 60px rgba(12,42,78,0.16)`.
- Cartes : `0 14px 34px rgba(12,42,78,0.07)`.
- Bouton principal : `0 18px 34px rgba(12,42,78,0.25)`.
- CTA navigation : `0 14px 28px rgba(12,42,78,0.22)`.
- Submit/CTA Cal.com : `0 16px 30px rgba(12,42,78,0.22)`.

Les grands rayons, ombres bleutées et bordures fines sont des marqueurs forts de l'identité à conserver.

### 4.5 Boutons et cartes

Le bouton standard est une pilule de 52 px minimum, padding horizontal 26 px, graisse 850 et transition de 0,2 s. Le primaire est bleu avec texte blanc et ombre ; le secondaire est blanc avec bordure. Seul `:hover` est défini (`translateY(-2px)`). Il manque des états `:focus-visible`, `:active`, `:disabled` cohérents et une règle `prefers-reduced-motion`.

Les cartes utilisent fond blanc, bordure bleu-gris, rayon 22 px, padding 28 px et ombre faible. Les variantes pertinentes sont : diagnostic, value card, sector panel bleu, tags, step card, form box et trust pill. Ces variantes doivent devenir des composants/tokens et non être recopiées page par page.

### 4.6 Code CSS à rationaliser

- `--am-white` et `--am-soft` sont définies mais certains usages restent codés en dur (`white`, `#fff`, `#f7fbff`).
- Les styles du message de confirmation et du bouton Cal.com sont intégralement inline dans le template JavaScript.
- `.am-brand-mark` existe mais n'est pas utilisée dans le DOM.
- Les valeurs `font-weight: 850` et `950` sont fragiles sans variable font chargée.
- Le préfixe `.am-landing` protège l'embed, mais la future application autonome devrait utiliser une architecture de classes explicite et des composants partagés.

## 5. Responsive

### 5.1 Desktop (> 980 px)

Le hero, le bloc transport et le bloc formulaire utilisent deux colonnes. Les offres sont présentées en cinq colonnes, les constats en trois et la méthode en quatre. La navigation complète est visible. Le conteneur plafonné à 1180 px limite correctement les très grands écrans.

Risques : cinq cartes sur 1180 px donnent des colonnes étroites ; certains libellés peuvent produire des hauteurs irrégulières. La topbar se replie avec `flex-wrap` mais sa hauteur peut varier.

### 5.2 Tablette (641–980 px)

À 980 px ou moins, les grands splits passent sur une colonne et les grilles 3/5/4 passent à deux colonnes. Le H1 est fixé à 48 px. La navigation `.am-nav-links` est entièrement masquée.

Défaut bloquant : aucun bouton hamburger, drawer ou alternative n'apparaît. Sur tablette et mobile, l'utilisateur ne dispose plus que du logo pour naviguer ; les destinations principales et le CTA du header deviennent inaccessibles.

### 5.3 Mobile (≤ 640 px)

Toutes les grilles ciblées passent sur une colonne, y compris formulaire et footer. La gouttière devient 14 px, les sections 60 px, le hero 58 px, le H1 40 px, le lead 17 px et les grands panneaux 24 px de padding. Le logo passe de 180 à 145 px et « Paris » à 16 px.

La logique est simple et robuste, mais les points suivants doivent être vérifiés visuellement : largeur combinée logo + « Paris », topbar sur plusieurs lignes, cibles tactiles, longueur des mentions légales, champs avec clavier mobile, absence de débordement horizontal et ordre des cartes. Une plage très étroite (320–360 px) n'a pas de traitement spécifique.

### 5.4 Exigences de validation responsive

Tester au minimum 320, 375, 640, 768, 980, 1024, 1280 et 1440 px, orientation portrait/paysage, zoom navigateur à 200 %, navigation clavier et appareils tactiles. Aucun défilement horizontal, texte tronqué ou contrôle inférieur à 44 × 44 px ne doit subsister.

## 6. Header et navigation

Structure actuelle : topbar bleu profond avec positionnement et ORIAS, puis barre blanche translucide avec logo JPEG, libellé « Paris », six liens métiers et CTA « Analyse gratuite ».

Atouts à préserver : double niveau topbar/nav, logo à gauche, CTA bleu en pilule à droite, bleu profond et effet translucide discret.

Problèmes :

- absence de balise `<nav>` et de nom accessible ;
- menu masqué sans remplacement sous 980 px ;
- pas d'état actif, de sous-navigation, ni de gestion clavier ;
- aucun lien direct vers « À propos », « Ressources » ou les pages légales ;
- URLs commençant par `/`, ce qui suppose un déploiement à la racine du domaine ;
- le lien de méthode pointe vers `/index.html#process` au lieu d'une URL canonique propre ;
- aucun comportement sticky n'est défini, malgré le `backdrop-filter`.

### 6.1 Six liens internes absents

Les destinations suivantes sont référencées mais n'existent pas dans le projet :

1. `/assurance-transport.html` ;
2. `/flotte-auto.html` ;
3. `/rc-pro.html` ;
4. `/tpm.html` ;
5. `/sante-entreprise.html` ;
6. `/contact.html`.

Conséquence : sept éléments cliquables au total sont cassés, car `/contact.html` est utilisé à la fois dans le CTA de navigation et dans le hero. Le formulaire existe pourtant dans `index.html#contact`. Avant création des pages, les CTA pourraient temporairement pointer vers cette ancre, mais aucune modification n'est faite dans cette phase.

## 7. Formulaire Formspree

Le formulaire envoie en POST vers `https://formspree.io/f/mnjlwzlp`. Champs obligatoires : prénom, nom, entreprise, secteur, email professionnel et téléphone. Champs facultatifs : contrat prioritaire, échéance et message. Deux champs cachés décrivent la source et la campagne.

Le JavaScript intercepte `submit`, désactive le bouton, affiche « Envoi en cours... », envoie `FormData` avec `fetch` et l'en-tête `Accept: application/json`, puis remplace le formulaire par un bloc de confirmation si `response.ok`. En cas d'échec HTTP ou réseau, il restaure le bouton et affiche une alerte native.

Points positifs : méthode POST, validation HTML native de base, bouton protégé contre le double clic pendant la requête, retour d'erreur simple, fonctionnement natif possible si JavaScript est absent puisque l'action et la méthode sont présentes.

Risques et corrections nécessaires :

- dépendance au service, au compte, au quota et à la configuration Formspree ;
- endpoint public facilement identifiable ; vérifier anti-spam, domaine autorisé et destination email ;
- aucun honeypot, CAPTCHA conditionnel ou limitation documentée ;
- labels inaccessibles faute de `for`/`id` ;
- absence d'autocomplétion et de format guidé pour le téléphone/échéance ;
- pas de validation métier ni message d'erreur par champ ;
- `alert()` est intrusif et peu contextualisé ;
- aucune zone live, aucun déplacement du focus vers la confirmation ;
- la phrase de confidentialité n'est pas un lien vers une politique complète et ne documente ni responsable, ni finalité, ni durée, ni droits ;
- aucune preuve de consentement/obligation légale adaptée au contexte n'est définie ; à valider juridiquement ;
- aucun suivi de conversion ni conservation sécurisée des paramètres de campagne n'est prévu ;
- les données sont transmises à un tiers : vérifier DPA, localisation, rétention et conformité RGPD avant production.

Ne jamais tester ce formulaire avec de vraies données personnelles sans validation de l'environnement et de la destination.

## 8. Lien Cal.com

Le lien `https://cal.com/juleshonore/rdv-assuromieux` n'est affiché qu'après une soumission Formspree réussie. Il s'ouvre dans un nouvel onglet avec `target="_blank"` et `rel="noopener"`, ce qui est correct contre l'accès à `window.opener`.

À valider : URL et propriétaire du calendrier, disponibilités, fuseau horaire, questions collectées, politique de confidentialité, cohérence de marque, suivi de conversion et comportement si Cal.com est indisponible. Il serait utile de rendre la prise de rendez-vous disponible ailleurs sans la rendre concurrente du CTA d'audit. Si un embed est envisagé, il faudra mesurer son impact performance, cookies et accessibilité ; un lien externe reste techniquement plus léger.

## 9. Logo Base64 et images

Le même JPEG est intégré deux fois sous forme de data URI, dans le header et le footer. Chaque URI mesure 15 671 caractères. Après décodage, les deux images possèdent la même empreinte que `assets/logo/logo_assuromieux_insigne_centre-2.jpeg` (`c4edf17f…200d52`). Le fichier est un JPEG sRGB de 300 × 83 px et 11 735 octets.

Conséquences :

- duplication d'environ 31 Ko de texte Base64 dans le HTML ;
- surcoût Base64 par rapport au binaire ;
- impossibilité de mettre le logo en cache indépendamment ;
- HTML plus difficile à relire, modifier et analyser ;
- JPEG peu adapté à la transparence et moins net qu'un SVG sur écran haute densité ;
- absence de variantes claire/sombre, favicon et icône sociale.

Recommandation : conserver ce JPEG comme référence, obtenir le logo source vectoriel, produire SVG optimisé et fallback PNG/WebP, utiliser un fichier externe avec dimensions explicites, et prévoir variantes header/footer/favicon/OG. Ne pas convertir automatiquement un logo compressé en « faux SVG ».

Aucune photo métier n'est présente ; `assets/images/` est vide.

## 10. JavaScript et dépendances

Le seul JavaScript métier est un listener `DOMContentLoaded` pour le formulaire. Il n'existe aucune dépendance npm, CDN ou bibliothèque. Le code est court et compréhensible, mais le template HTML de succès contient des styles inline dupliquant le design system.

Risques : absence de timeout/annulation réseau, erreurs non journalisées, aucune protection contre une réponse inattendue, logique non testée automatiquement, dépendance totale à la classe `.am-form`, accessibilité de la confirmation incomplète et politique CSP future compliquée par les styles/scripts inline.

Stratégie recommandée : JavaScript progressif et minimal, modules dédiés seulement aux composants interactifs (menu, formulaire, éventuels accordéons), HTML fonctionnel sans JS, états rendus dans le DOM plutôt qu'injectés sous forme de chaîne, aucun framework client global.

Dépendances externes actuelles :

- Formspree pour la collecte du formulaire ;
- Cal.com pour la prise de rendez-vous ;
- disponibilité locale éventuelle d'Inter, qui n'est pas réellement une dépendance chargée ;
- Netlify pour l'hébergement/configuration prévue.

## 11. Performances

Atouts : page statique, aucun framework, aucune police distante, aucun script tiers au chargement, peu de JavaScript et aucune photo lourde.

Faiblesses :

- CSS, JS et logo dupliqué/encodé dans le document, donc faible réutilisation du cache sur un futur multipage ;
- deux décodages du même JPEG Base64 ;
- absence de cache explicite pour les futurs assets ;
- absence de minification/build et de budgets performance ;
- `backdrop-filter` et grandes ombres potentiellement coûteux sur appareils modestes ;
- aucune dimension HTML `width`/`height` sur les logos, même si le CSS limite l'affichage ; risque de décalage à contrôler ;
- aucune stratégie responsive/lazy pour les futures images ;
- aucun préchargement de police critique si une fonte est ajoutée.

Objectifs proposés : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 au 75e percentile mobile ; HTML par page raisonnable, CSS critique compact, JS initial proche de zéro et images AVIF/WebP correctement dimensionnées. Mesurer Lighthouse et WebPageTest sur une URL de prévisualisation, pas seulement localement.

## 12. Accessibilité

Niveau cible recommandé : WCAG 2.2 AA.

Écarts prioritaires : navigation mobile absente ; landmarks incomplets ; labels non associés ; absence de skip link ; absence de styles `:focus-visible` explicites sur liens/boutons ; confirmation de formulaire non annoncée ; contraste du doré à vérifier ; absence de gestion `prefers-reduced-motion`; mentions très denses ; nouvel onglet Cal.com non signalé visuellement ; aucune politique de titres de page/état actif ; risques liés au zoom et à `overflow:hidden`.

Les boutons principaux ont des hauteurs de 52/54 px favorables au tactile. Les champs natifs et la structure de titres sont de bonnes bases. Les tests à prévoir : clavier seul, VoiceOver/NVDA, axe, contraste, zoom 200/400 %, modes sombre/contraste forcé et réduction des animations.

## 13. SEO technique et balises meta

Balises présentes :

- `charset="UTF-8"` ;
- viewport ;
- title : « Assuromieux Paris | Analyse gratuite de vos assurances entreprise » ;
- meta description descriptive ;
- `lang="fr"`.

Le title contient une formulation grammaticale à revoir (« assurances entreprise » pourrait devenir « assurances d'entreprise » ou « assurances professionnelles »). La description est pertinente mais devra être rendue unique par page.

Éléments absents :

- URL canonique ;
- meta robots explicite ;
- Open Graph (`og:title`, description, URL, image, type, locale) ;
- Twitter/X Card ;
- favicon, Apple touch icon et manifest éventuel ;
- `theme-color` ;
- données structurées JSON-LD ;
- sitemap XML ;
- robots.txt ;
- breadcrumbs sur pages profondes ;
- pages 404 et redirections ;
- politique d'URL canonique et trailing slash ;
- métadonnées sociales et image OG ;
- balisage organisation/adresse/liens réglementaires exploitable.

Les données structurées à envisager, uniquement avec des données vérifiées : `Organization` ou `InsuranceAgency`/type Schema.org pertinent, `WebSite`, `BreadcrumbList`, `Service`, `Article` pour les ressources et `FAQPage` seulement si la FAQ est visible et conforme aux règles des moteurs. Ne pas ajouter d'avis, notes ou chiffres non vérifiés.

## 14. Liens internes et maillage

Outre les six pages absentes, le maillage est très limité : navigation uniquement vers cinq solutions et contact ; pas de pages secteurs, ressources, audit, à propos ou légales. Le lien `/index.html#process` fonctionne à la racine mais expose le nom de fichier. Le logo pointe vers `/index.html`.

La future stratégie doit employer des URL propres, stables et canoniques (`/`, `/solutions/assurance-transport/`, etc.), des breadcrumbs sur les pages profondes, des liens contextuels entre solutions/secteurs/ressources et un CTA pertinent sans sur-optimisation d'ancres.

## 15. Contenu, terminologie et conformité

Anomalies identifiées :

- « TMP » dans « Responsabilité civile, flotte, multirisque, convoyage, TMP… » est incohérent avec « TPM / CMR », `/tpm.html` et tous les documents du projet. Le terme attendu semble être **TPM**, à confirmer avec l'expert métier avant correction.
- « Rue Francois 1er » devrait typographiquement être « rue François-Ier » ou suivre exactement la forme officielle de l'adresse ; à valider juridiquement.
- « en application des disponibilités de l’article L521-2.II.b » semble probablement devoir employer « dispositions » ; le texte réglementaire et la référence doivent être validés par le responsable conformité.
- « grandes compagnies » et les promesses d'économies/résultats doivent rester démontrables et non trompeuses.
- La topbar affiche ORIAS 26003798 ; le numéro, la raison sociale, le RCS 489181032, l'adresse et le statut doivent être vérifiés sur les sources officielles avant publication.
- Le footer ne remplace pas des mentions légales et une politique de confidentialité complètes.
- Les sigles TPM, CMR, VUL, RC Pro et RC Exploitation devront être définis au premier usage ou via un lexique.

## 16. Configuration Netlify et sécurité

`netlify.toml` publie la racine du projet sans commande de build. Trois en-têtes sont définis : `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` et `Referrer-Policy: strict-origin-when-cross-origin`.

C'est une base utile mais incomplète. À étudier après choix d'architecture : redirections propres, page 404, cache immutable des assets versionnés, headers HTML courts, HSTS géré au domaine, Content-Security-Policy compatible avec Formspree/Cal.com, Permissions-Policy et éventuellement remplacement progressif de `X-Frame-Options` par `frame-ancestors` dans CSP. Les styles/scripts inline actuels imposeraient `unsafe-inline` ou des hashes/nonces, d'où l'intérêt de les externaliser.

## 17. Risques techniques classés

### Critiques

- Navigation principale supprimée sous 980 px sans menu de remplacement.
- Six destinations internes absentes, dont le contact utilisé par deux CTA.
- Informations réglementaires et traitement de données non encore validés.

### Élevés

- Architecture monofichier non maintenable pour un site multipage.
- Formulaire tiers sans dispositif accessibilité/RGPD/anti-spam documenté.
- Pas de dépôt Git/historique exploitable constaté dans le dossier.
- SEO technique incomplet et absence de pages système/légales.

### Moyens

- Logo Base64 dupliqué, CSS/JS non mutualisés, pas de stratégie d'assets.
- Contraste du doré et focus clavier à vérifier/corriger.
- Inter non chargée et graisses non garanties.
- `overflow:hidden`, effets graphiques et responsive à confirmer sur appareils réels.

### Faibles

- Valeurs CSS dupliquées, classe inutilisée, URL `/index.html` peu élégante.
- Messages d'erreur natifs et styles de confirmation inline.

## 18. Éléments graphiques à conserver impérativement

- Le couple bleu profond `#0b2747` / bleu `#12365f` comme socle de confiance.
- Le doré `#c99a46` comme accent premium, avec variante accessible si utilisé pour du texte.
- Les fonds clairs bleutés `#eef4fa` et les surfaces blanches.
- Les grands titres denses, fortement graissés et à interlettrage négatif.
- Les boutons pilules bleus et secondaires blancs bordés.
- Les cartes blanches à bordure fine, grands rayons et ombres bleutées légères.
- Le panneau métier en dégradé bleu et les tags translucides.
- La topbar réglementaire et le header clair orienté conversion.
- Le conteneur large de 1180 px, les espaces généreux et la mise en page aérée.
- La structure narrative : constat → audit/intervention → expertise transport → méthode → conversion.
- Le ton de cabinet de conseil et d'analyse, à distinguer d'un comparateur grand public.

## 19. Composants réutilisables identifiés

`SiteHeader`, `Topbar`, `DesktopNav`, `MobileNav`, `Container`, `Hero`, `Eyebrow`, `Button`, `TrustPill`, `SectionHeader`, `DiagnosticCard`, `Card`, `ValueCard`, `SectorPanel`, `TagList`, `StepList`, `LeadForm`, `SuccessMessage`, `AppointmentLink`, `SiteFooter`, `LegalIdentity`, `Breadcrumbs`, `SEOHead` et, pour la suite, `FAQ`, `Testimonial`, `CaseStudyCard` et `ArticleCard`.

## 20. Conclusion

La landing est une référence graphique solide et une preuve de concept fonctionnelle, mais pas encore un socle multipage industrialisé. La refonte doit préserver ses tokens, ses cartes, son rythme et son positionnement tout en séparant contenu, composants, styles, scripts et assets. Le plan associé recommande une génération statique avec JavaScript progressif, une navigation accessible, des URL propres et une couche SEO/légale complète.
