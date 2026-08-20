# Mission 92 — Technical SEO P2

Date du contrôle : 20 août 2026

## 1. État Git initial

- branche : `main` ;
- `HEAD` : `965efc288088fc3c82943b4240372280f8f1fe7f` ;
- `origin/main` : `965efc288088fc3c82943b4240372280f8f1fe7f` ;
- fichiers suivis propres au démarrage ;
- rapports et dossiers `output/` non suivis antérieurs préservés.

## 2. Classement des recommandations externes

### P2-A — correction immédiate

| Sujet | Anomalie confirmée | Correction |
|---|---|---|
| Cohérence des gabarits | `/protection-dirigeant/` était la seule page du groupe RC Pro, Flotte, Cyber, Multirisque, Santé/Prévoyance et Protection sans le bandeau de confiance partagé | Réutilisation de `TrustBar` immédiatement après le Hero, au même emplacement que sur les pages comparables |

### P2-B — utile mais non urgente

- obtenir une mesure Lighthouse/CrUX lorsque l'outil ou des données terrain suffisantes seront disponibles ;
- confirmer le LCP réel par trace avant tout changement de preload ;
- surveiller les métriques terrain après consolidation du trafic Search Console.

### Non-problèmes ou recommandations rejetées

- dimensions d'images manquantes : aucune ;
- lazy loading généralisé : déjà différencié selon la position ;
- preload systématique des Hero : non justifié sans trace LCP ;
- `fetchpriority="high"` généralisé : rejeté ; déjà limité aux images Hero réellement prioritaires ;
- bouton WhatsApp : absent volontairement, aucun canal WhatsApp n'est prévu dans le projet ;
- création d'un nouveau manifeste PWA : inutile, un manifeste cohérent existe déjà ;
- refonte des CTA du header : logique actuelle cohérente avec l'intention de chaque page ;
- réécriture massive des ancres : les rares libellés courts disposent déjà d'un contexte visible ou d'un `aria-label` descriptif ;
- amélioration de la 404 : non nécessaire, la page renvoie un vrai HTTP 404 et propose Accueil, Assurances et Ressources ;
- ajout ou refonte de données structurées : hors nécessité, les schémas Mission 91 restent valides.

## 3. Audit des images

### Périmètre

Douze routes ont été auditées : Accueil, Assurances entreprises, RC professionnelle, Flotte, Transport, BTP, Cyber, Multirisque, Santé/Prévoyance, Protection du dirigeant, Ressources et un guide représentatif.

| Indicateur | Résultat |
|---|---:|
| Balises `<img>` contrôlées | 33 |
| Éléments `<picture>` | 9 |
| Sources AVIF | 9 |
| Sources WebP | 9 |
| Images sans `width` | 0 |
| Images sans `height` | 0 |
| Images sans `alt` | 0 |
| Images secondaires en lazy loading | 7 |
| Images Hero en eager + priorité haute | 2 dans ce périmètre |

Les images de contenu utilisent des dimensions intrinsèques correctes, un conteneur avec ratio réservé, `decoding="async"`, des sources AVIF avant WebP, `srcset` sur les `<source>` et `sizes`. Les logos ont également des dimensions explicites.

### Typologie et LCP

- Accueil : le Hero principal est actuellement texte/CSS, car les anciens fichiers optionnels `paris-tour-eiffel-hero` ne sont pas présents ; l'illustration éditoriale située dans la section suivante reste `lazy`. Aucun preload n'est justifié pour ce Hero.
- Transport et BTP : l'image Hero est au-dessus de la ligne de flottaison, `loading="eager"`, `fetchpriority="high"`, avec AVIF/WebP responsive et dimensions réservées.
- RC Pro, Flotte, Cyber, Multirisque, Santé/Prévoyance et Protection : Hero pédagogique en SVG/CSS ; l'illustration photographique de méthode est sous la ligne de flottaison et chargée en lazy.
- Ressources et guide représentatif : aucun visuel éditorial susceptible d'être LCP ; seuls les éléments de marque sont présents.

### CLS

Toutes les images participant au layout ont `width` et `height`. Les illustrations utilisent également un ratio ou une hauteur réservée. Aucune correction CLS n'a été nécessaire.

### Preload et priorité

Aucun preload n'a été ajouté. L'accueil n'a pas d'image Hero effective à précharger et les pages dont le Hero est photographique utilisent déjà la priorité réseau appropriée. Ajouter plusieurs preloads sans trace LCP risquerait de gaspiller la bande passante.

## 4. Core Web Vitals

- Lighthouse CLI : absent du projet et de l'environnement ; aucun score inventé.
- PageSpeed Insights mobile : tentative réelle effectuée, mais API indisponible avec réponse quota HTTP 429.
- CrUX / données terrain : aucune donnée exploitable obtenue pendant cette mission ; aucun LCP, INP ou CLS terrain inventé.
- Contrôles substitutifs : dimensions intrinsèques, priorité réseau, lazy loading, absence d'overflow, poids des bundles, absence d'erreurs navigateur et stabilité structurelle.

Les objectifs LCP < 2,5 s, INP < 200 ms et CLS < 0,1 restent les seuils de suivi, pas des résultats déclarés.

## 5. JavaScript et CSS

- aucun nouveau JavaScript client ;
- aucun script bloquant ajouté ;
- plus gros CSS généré observé : environ 32 Ko ;
- bundles Analytics et formulaire observés : environ 8 Ko chacun ;
- aucune dépendance ajoutée ;
- aucune ressource externe nouvelle ;
- GA4 reste conditionné au consentement.

Les fichiers dupliqués suffixés présents ponctuellement dans `dist` sont des artefacts locaux iCloud non référencés par le HTML final ; ils ne justifient pas une refactorisation source dans cette mission.

## 6. Cohérence des gabarits

Avant : RC Pro, Flotte, Cyber, Multirisque et Santé/Prévoyance utilisaient `TrustBar` immédiatement après le Hero ; Protection du dirigeant ne l'utilisait pas.

Après : Protection du dirigeant réutilise le composant existant au même emplacement. Aucun texte, CTA, formulaire, style global ou composant partagé n'est modifié.

## 7. CTA de header

La logique existante est cohérente : les pages transactionnelles transmettent leur CTA devis/étude au header, tandis que les pages conseil conservent une entrée audit. Aucune uniformisation mécanique n'a été appliquée.

## 8. Ancres internes

Les occurrences courtes « Découvrir » sont intégrées dans des cartes ou accompagnées d'un `aria-label` descriptif, par exemple « Découvrir l'expertise Transport et logistique ». Les CTA « Voir les assurances », « Voir les expertises » et « Découvrir l'audit » sont déjà compréhensibles. Aucune ancre n'a été modifiée afin d'éviter une sur-optimisation et de protéger les clusters existants.

## 9. Canaux de conversion

### WhatsApp

Absent. Cette absence est volontaire : aucune stratégie WhatsApp n'est documentée pour `assuromieuxparis.com`. Aucun bouton n'a été créé.

### Cal.com

- URL centralisée : `https://cal.com/juleshonore/rdv-assuromieux` ;
- contrôle HTTP : 200, destination finale inchangée ;
- détection `cal.com` et événement `booking_start` toujours présents dans la couche Analytics ;
- aucune modification du calendrier ou du tracking.

### Téléphone et e-mail

- téléphone central : `tel:+33695699674` ;
- e-mail central : `mailto:jules@assuromieuxparis.com` ;
- liens présents dans les emplacements prévus ;
- instrumentation déléguée `click_phone` et `click_email` inchangée ;
- seul `link_location` est transmis, aucune PII n'est ajoutée aux événements par cette mission.

## 10. Page 404

- page personnalisée existante ;
- test d'une URL inexistante en production : HTTP 404 réel ;
- `noindex, nofollow` ;
- lien principal vers l'Accueil ;
- liens vers Assurances et Ressources disponibles dans le footer ;
- design et contenu suffisants, aucune correction.

## 11. Favicons et manifeste

Favicons présents et valides : `favicon.ico`, PNG 16×16, 32×32, 48×48, 96×96 et Apple Touch Icon 180×180. Les variantes 192×192 et 512×512 existent également.

`site.webmanifest` existe, contient le nom, le thème, le `start_url`, le mode d'affichage et référence deux icônes existantes `android-chrome-192x192.png` et `android-chrome-512x512.png`. Aucun nouveau manifeste n'est nécessaire.

## 12. Open Graph et Twitter

Sur l'Accueil, une page produit et un guide :

- `og:title`, `og:description`, `og:url`, `og:type` et `og:image` présents ;
- `og:url` cohérent avec le canonical ;
- image OG publique accessible en HTTP 200, PNG 1200×630, environ 105 Ko ;
- `twitter:card`, `twitter:title`, `twitter:description` et `twitter:image` présents ;
- guides en type Open Graph `article` ;
- aucune correction nécessaire.

## 13. Accessibilité ciblée

- toutes les images auditées ont un `alt` ;
- dimensions et ratios limitent les déplacements ;
- ancres visuellement courtes complétées par un nom accessible lorsque nécessaire ;
- `TrustBar` existant réutilisé sans nouveau comportement interactif ;
- recette responsive de Protection du dirigeant : 390, 768, 1280 et 1440 px, aucun overflow, aucune image cassée, aucun message console ;
- un H1, canonical et robots inchangés.

## 14. Protections SEO, Schema, Analytics et CRO

- 41 URL dans le sitemap ;
- 14 routes restaurées Mission 90 toujours `index, follow` ;
- guide PME toujours `review-required`, `noindex, nofollow` et hors sitemap ;
- canonicals inchangés ;
- robots inchangés ;
- 202 blocs JSON-LD détectés dans le build propre, tous syntaxiquement valides ;
- Measurement ID `G-WWMFCQF196` inchangé ;
- consentement et liste d'événements inchangés ;
- Formspree, champs, validations, microcopy et CTA Mission 85 inchangés ;
- aucun faux lead envoyé ;
- cluster Flotte et maillage interne inchangés.

## 15. Fichiers modifiés

- `src/pages/protection-dirigeant.astro` ;
- `docs/MISSION_92_TECHNICAL_SEO_P2.md`.

## 16. Contrôles

- `pnpm verify` en configuration production : réussi ;
- Astro Check : 117 fichiers, 0 erreur, 0 avertissement, 0 hint ;
- build Astro : réussi, 47 pages générées ;
- liens internes : 47 pages, 0 lien cassé ;
- validation release : réussie ;
- sitemap : 41 URL ;
- recette responsive : 390, 768, 1280 et 1440 px ;
- images cassées sur la page modifiée : 0 ;
- overflow : 0 ;
- erreurs console : 0 ;
- `git diff --check` : réussi après création du présent rapport ;
- commit, push et déploiement : aucun.

## 17. Impact attendu et risques

La correction améliore la cohérence du gabarit et la présence homogène des signaux de confiance sans ajouter de poids JavaScript, de dépendance, de requête média ou de contenu SEO. L'impact direct sur les Core Web Vitals est neutre : `TrustBar` est statique et rendu côté serveur.

Risque résiduel principal : l'absence de mesure LAB/terrain pendant cette mission ne permet pas de quantifier LCP, CLS ou INP. Toute optimisation réseau future devra partir d'une trace mesurée et non d'une règle générique.
