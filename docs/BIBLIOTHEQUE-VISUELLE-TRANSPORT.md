# Bibliothèque visuelle Transport — spécifications finales

Date : 8 août 2026  
Statut : intégration préparée ; aucune image produite, téléchargée ou sélectionnée.

## 1. Principe d’intégration

La page `/assurance-transport/` est prête à activer automatiquement chaque visuel lors d’un build, sans nouvelle modification de code. Un visuel ne remplace son placeholder que lorsque son jeu complet d’exports AVIF et WebP est présent dans `public/images/transport/`. Si un seul export manque, le placeholder CSS reste affiché et aucun chemin d’image n’est rendu dans le HTML.

Ce verrou empêche les médias cassés et impose une livraison responsive complète. Les fichiers doivent être ajoutés seulement après validation humaine de la scène, des droits, du cadrage, de la cohérence métier et des poids.

## 2. Signature commune de la série

Les quatre images appartiennent à une seule série documentaire premium : lumière naturelle latérale de matin clair légèrement couvert, température de 5 200 K, saturation réduite d’environ 10 %, contraste modéré, noirs détaillés, hautes lumières conservées, palette gris acier, bleu ardoise, blanc cassé et bois neutre. Le rendu simule un même boîtier plein format, une colorimétrie sRGB et une retouche non destructive.

Les Hero, Méthode et Audit utilisent une profondeur de champ moyenne : le sujet principal est net et l’environnement reste compréhensible. La Texture emploie une profondeur de champ plus faible mais conserve des matières réalistes. Les verticales sont corrigées, les horizons sont droits et aucun effet HDR, halo, vignettage, flare ou netteté artificielle n’est admis.

Interdictions communes : marque, enseigne, plaque, document ou écran lisible ; personne identifiable ; regard caméra ; poignée de main ; pose publicitaire ; scène dangereuse ; accident ; marchandise sensible ; texte généré ; incohérence physique ou métier ; esthétique de banque d’images.

## 3. Matrice définitive

| Usage | Base | Ratio | Master | Overlay | Chargement | Poids cible |
|---|---|---:|---:|---|---|---:|
| Hero | `hero-transport-logistique` | 16:9 | 3 200 × 1 800 | `brand` | `eager`, `fetchpriority=high` | AVIF ≤ 260 Ko ; WebP ≤ 300 Ko |
| Méthode | `methode-transport-analyse-documentaire` | 3:2 | 2 400 × 1 600 | `light` | `lazy` | AVIF ≤ 180 Ko ; WebP ≤ 220 Ko |
| Audit | `audit-transport-entrepot` | 4:3 | 2 400 × 1 800 | `light` | `lazy` | AVIF ≤ 180 Ko ; WebP ≤ 220 Ko |
| Texture | `texture-transport-logistique` | 21:9 | 2 520 × 1 080 | `brand` discret | `lazy` | AVIF ≤ 110 Ko ; WebP ≤ 140 Ko |

## 4. Fichiers attendus

### Hero

- `hero-transport-logistique.avif` — master web 3 200 px ;
- `hero-transport-logistique.webp` — repli master 3 200 px ;
- `hero-transport-logistique-960.avif` et `.webp` ;
- `hero-transport-logistique-1280.avif` et `.webp` ;
- `hero-transport-logistique-1600.avif` et `.webp` ;
- `hero-transport-logistique-2000.avif` et `.webp`.

### Méthode

- `methode-transport-analyse-documentaire.avif` — master web 2 400 px ;
- `methode-transport-analyse-documentaire.webp` — repli master 2 400 px ;
- variantes AVIF et WebP `-640`, `-960`, `-1280` et `-1600`.

### Audit

- `audit-transport-entrepot.avif` — master web 2 400 px ;
- `audit-transport-entrepot.webp` — repli master 2 400 px ;
- variantes AVIF et WebP `-640`, `-960`, `-1280` et `-1600`.

### Texture

- `texture-transport-logistique.avif` — master web 2 520 px ;
- `texture-transport-logistique.webp` — repli master 2 520 px ;
- variantes AVIF et WebP `-768`, `-1280` et `-1600`.

Tous les exports sont en profil sRGB, sans métadonnée sensible. Les dimensions annoncées dans les noms doivent correspondre à la largeur réelle. Aucun fichier temporaire, master de retouche ou format supplémentaire ne doit être placé dans `public/`.

## 5. Alternatives textuelles définitives

- Hero : `Flotte de poids lourds stationnée sur une plateforme logistique contemporaine.`
- Méthode : `Analyse de contrats d’assurance transport sur une tablette et des documents de travail.`
- Audit : `Quai logistique en activité avec palettes, remorques et entrepôt en profondeur.`
- Texture : `Texture graphique discrète inspirée des lignes d’un quai logistique.`

Ces alternatives doivent être confirmées une dernière fois à partir des images effectivement retenues. Si la texture ne porte aucune information, son alternative pourra être rendue vide lors d’une validation d’accessibilité distincte ; le code actuel conserve volontairement une description tant que le cadrage final n’existe pas.

## 6. Ordre d’intégration et de recette

1. Faire valider ensemble les quatre masters afin de contrôler la continuité de la série.
2. Documenter la provenance, les droits commerciaux, l’auteur, les modèles éventuels et les modifications autorisées.
3. Retoucher les masters avec un réglage colorimétrique commun.
4. Produire tous les exports responsive AVIF et WebP.
5. Contrôler dimensions, poids, profil sRGB, métadonnées et noms.
6. Déposer le jeu complet dans `public/images/transport/`.
7. Lancer le build : chaque série complète s’active automatiquement ; une série incomplète reste en placeholder.
8. Contrôler les cadrages à 390, 768, 1 280 et 1 440 px, notamment le Hero à `object-position: 58% 50%`.
9. Mesurer LCP, CLS, contraste et poids transféré avant toute publication.

## 7. Prompts définitifs harmonisés

Les prompts décrivent la direction artistique. Toute image produite devra encore faire l’objet d’une validation humaine et d’un contrôle des droits avant intégration.

### Hero — `hero-transport-logistique`

Photographie documentaire française très haut de gamme d’une plateforme logistique moderne en activité maîtrisée, flotte récente de poids lourds neutres stationnée devant un entrepôt contemporain, vue à hauteur humaine avec perspective large et lignes de fuite précises, même boîtier plein format que toute la série, objectif 32 mm, ouverture simulée f/5.6, profondeur de champ moyenne à grande, netteté naturelle du premier camion jusqu’au quai, lumière naturelle latérale de matin clair légèrement couvert venant de la gauche, température 5 200 K, ombres ouvertes, hautes lumières préservées, palette désaturée d’environ 10 % composée de gris acier, bleu ardoise, blanc cassé et bois neutre, contraste modéré, horizon droit, verticales corrigées, tiers droit occupé par la flotte et l’activité, espace visuel calme suffisant pour l’interface, activité crédible sans dramatisation, aucune personne identifiable, aucun logo, aucune enseigne, aucune plaque lisible, aucun texte, aucune marque, aucune marchandise sensible, aucune scène dangereuse, aucun accident, aucun ciel spectaculaire, aucun HDR, aucun flare, aucune vignette, aucune netteté artificielle, aucune apparence publicitaire, de banque d’images ou générée ; cadrage horizontal 16:9, master 3 200 × 1 800 px, rendu sRGB naturel et cohérent avec un cabinet de conseil premium.

### Méthode — `methode-transport-analyse-documentaire`

Photographie documentaire premium d’une analyse de programme d’assurance transport dans un environnement professionnel contemporain, contrats fictifs strictement non lisibles, attestations neutres, carnet, stylo et tablette sans marque affichant seulement des formes abstraites, même boîtier plein format et même traitement colorimétrique que la série Transport, objectif 50 mm, ouverture simulée f/4, vue oblique à 40 degrés, profondeur de champ moyenne avec point net sur le rapprochement entre documents et tablette, lumière naturelle latérale de matin clair légèrement couvert venant de la gauche, température 5 200 K, ombres souples et détaillées, palette désaturée d’environ 10 % en bleu ardoise, gris acier, papier blanc cassé et bois neutre, contraste modéré, composition calme et précise, espace négatif maîtrisé, mains éventuelles cadrées uniquement si elles sont anatomiquement crédibles et sans personne identifiable, aucun écran ni document exploitable, aucune donnée, aucun logo, aucune marque, aucun texte généré, aucune poignée de main, aucune pose commerciale, aucun effet de studio, aucun HDR, aucun flare, aucune saturation excessive, aucune apparence artificielle ; cadrage horizontal 3:2, master 2 400 × 1 600 px, rendu sRGB appartenant clairement à la même série que le Hero, l’Audit et la Texture.

### Audit — `audit-transport-entrepot`

Photographie documentaire réaliste d’un entrepôt logistique contemporain et de ses quais de chargement, palettes homogènes et correctement stabilisées, remorques neutres, profondeur d’activité lisible et circulation visuellement maîtrisée, même boîtier plein format et même signature colorimétrique que toute la série Transport, objectif 40 mm, ouverture simulée f/5.6, cadrage à hauteur humaine légèrement décentré, profondeur de champ moyenne à grande permettant de comprendre les interfaces entre quai, palettes, remorques et entrepôt, lumière naturelle latérale filtrée par les ouvertures venant de la gauche, température 5 200 K, ombres ouvertes, palette désaturée d’environ 10 % en gris acier, bleu ardoise, blanc cassé et bois neutre, contraste doux, verticales corrigées, détails métier crédibles, aucun employé identifiable, aucun logo, aucune enseigne, aucune plaque, aucune donnée, aucune marchandise sensible, aucune marque, aucune charge instable, aucune scène dangereuse, aucun accident, aucun texte, aucun HDR, aucun flare, aucune netteté artificielle, aucune esthétique publicitaire ou générée ; cadrage 4:3, master 2 400 × 1 800 px, rendu sRGB parfaitement cohérent avec le Hero et la scène de Méthode.

### Texture — `texture-transport-logistique`

Photographie panoramique abstraite et discrète inspirée d’une plateforme logistique réelle, détail de lignes de quai, marquages au sol, métal brossé et ombres géométriques naturelles, aucun élément dominant ni véhicule reconnaissable, même boîtier plein format, même lumière et même palette que la série Transport, objectif 85 mm, ouverture simulée f/4, point de vue rapproché, profondeur de champ modérément faible mais matières physiquement réalistes, lumière naturelle latérale douce venant de la gauche, température 5 200 K, palette désaturée d’environ 10 % en bleu ardoise et gris neutre, contraste volontairement bas pour accepter un voile de marque discret, rythme horizontal calme, aucune personne, aucun logo, aucune enseigne, aucune plaque, aucun texte, aucune marchandise, aucun symbole publicitaire, aucun effet industriel agressif, aucun HDR, aucun flare, aucune vignette, aucune texture synthétique ni artefact génératif ; cadrage panoramique 21:9, master 2 520 × 1 080 px, rendu sRGB appartenant sans ambiguïté à la même série que les trois photographies documentaires.

## 8. Impact Lighthouse attendu

Avant dépôt des images, l’impact est nul : les placeholders n’effectuent aucune requête média. Après dépôt, le Hero devient le candidat LCP et bénéficie de `loading="eager"`, `fetchpriority="high"`, dimensions intrinsèques et `sizes` adaptés. Les trois autres médias restent en `lazy`. Les ratios CSS et dimensions fixes visent un CLS nul.

Sous réserve du respect des budgets, l’impact attendu est limité au coût normal du nouveau LCP et des images chargées au défilement. La recette finale devra comparer le LCP et le poids transféré avant/après ; aucun score n’est garanti avant la présence des fichiers réels.
