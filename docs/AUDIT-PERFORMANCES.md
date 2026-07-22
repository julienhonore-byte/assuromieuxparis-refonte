# Audit de performances — RC1

Date : 22 juillet 2026. Audit statique local, sans Lighthouse ajouté au projet et sans dépendance supplémentaire.

## Résultat exécutif

L'architecture Astro statique est légère et sans framework client. Le build complet prend moins d'une seconde dans le runtime de contrôle et produit 37 pages. Aucun JavaScript applicatif lourd ni image de contenu volumineuse n'est chargé. Les Core Web Vitals réels restent à mesurer sur une URL Netlify de préproduction.

## Mesures de sortie

| Élément | Mesure | Lecture |
|---|---:|---|
| Pages générées | 37 | Conforme |
| Build Astro seul | 37 pages en 477 ms | Très bon en local |
| HTML cumulé | 1 306 001 octets | Environ 35 Ko/page en moyenne |
| CSS global principal | 22,8 Ko | Léger |
| Plus gros CSS de page | 22,4 Ko | Léger |
| CSS spécialisés | 4,3 à 10 Ko | Chargement par gabarit |
| Logo JPEG | 11,7 Ko | Très léger |
| Images Open Graph | 168 à 219 Ko chacune | Non affichées dans le corps de page |
| JavaScript externe généré | Aucun fichier JS dans `_astro` | Scripts courts intégrés aux composants |
| Dépendances runtime | Astro uniquement | Surface minimale |

## LCP

- Le hero est principalement HTML/CSS et le logo est léger ; aucune photographie lourde n'est nécessaire au rendu initial.
- Les polices utilisent la pile système : pas de fichier webfont bloquant.
- Risque résiduel : la complexité CSS de certains diagrammes et le volume HTML des pages sectorielles peuvent affecter des appareils modestes.
- Validation requise : Lighthouse mobile sur Netlify et observation du LCP p75 dans Search Console après lancement.

## CLS

- Les visuels sont construits avec des dimensions et des conteneurs prévisibles.
- Aucun chargement publicitaire, widget embarqué ou police distante n'a été détecté.
- Le CTA mobile fixe est prévu dans la mise en page.
- CLS attendu faible, mais non certifié sans mesure lab/terrain.

## INP

- Interactions limitées au menu, FAQ natives, sélecteur de produit et formulaire.
- Aucun framework hydraté ni traitement long n'a été détecté.
- INP attendu faible ; le réseau Formspree n'intervient qu'après une action explicite.
- Validation requise : mesure terrain après mise en ligne, sans installer d'analytics avant décision de conformité.

## Images et cache

- Le logo est optimisé en taille mais reste en JPEG ; son rendu et sa netteté doivent être contrôlés sur écrans haute densité.
- Les images OG sont adaptées au partage et non au contenu de page.
- `netlify.toml` ne définit pas encore de politique de cache pour les assets immuables. Prévoir `Cache-Control: public, max-age=31536000, immutable` pour `/_astro/*` et un cache plus court pour les images non fingerprintées.
- Ne pas appliquer de cache long à `robots.txt`, au sitemap ou aux documents HTML.

## Core Web Vitals : critères GO

| Indicateur | Cible de contrôle | Méthode |
|---|---:|---|
| LCP mobile | ≤ 2,5 s | Lighthouse Netlify + données terrain ultérieures |
| CLS | ≤ 0,1 | Lighthouse + observation visuelle |
| INP | ≤ 200 ms | Données terrain dès volume suffisant |
| TBT lab | ≤ 200 ms | Lighthouse mobile |

## Actions

1. Déployer uniquement sur une URL de préproduction protégée et bloquée à l'indexation.
2. Lancer Lighthouse mobile/desktop sur au moins six gabarits.
3. Ajouter les en-têtes de cache après test Netlify.
4. Conserver Astro sans hydratation inutile et sans dépendance de suivi avant validation.

## Verdict

**Architecture favorable aux performances. Mesures réelles manquantes mais absence de risque bloquant identifié dans le code.**
