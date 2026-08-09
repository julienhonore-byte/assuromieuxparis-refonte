# Design system visuel — Assuromieux Paris

Date : 8 août 2026  
Statut : architecture et direction artistique préparées ; aucune photographie définitive intégrée.

## 1. Rôle du système

Le système visuel doit faire percevoir Assuromieux Paris comme un cabinet de conseil et de courtage qui observe l’activité réelle, analyse les contrats et aide le dirigeant à décider. Les images documentent un environnement, un flux, un geste de contrôle ou une matière. Elles ne décorent pas une page et ne simulent jamais un client, un résultat ou une relation commerciale.

La série doit rester reconnaissable par cinq constantes : perspective structurée, lumière naturelle latérale, palette bleu-gris légèrement chaude, détail métier crédible et espace négatif maîtrisé. L’accent doré appartient à l’interface ; il ne doit pas être artificiellement ajouté dans les photographies.

## 2. Principes artistiques

- Montrer le terrain avant le produit d’assurance.
- Préférer les vues larges et les détails techniques aux portraits.
- Représenter l’analyse par des documents fictifs non lisibles, une tablette neutre, des plans ou des éléments de flux.
- Conserver des lignes architecturales nettes et une composition calme.
- Éviter toute dramatisation du risque : pas d’accident, de dommage spectaculaire, de danger ou d’urgence fabriquée.
- Ne jamais suggérer qu’un modèle est un client réel du cabinet.
- Ne pas utiliser de marque, plaque, enseigne, écran lisible ou document confidentiel.

## 3. Charte photographique

### Colorimétrie

| Paramètre | Règle |
|---|---|
| Dominantes | bleu ardoise, gris acier, blanc cassé, béton neutre, bois clair ponctuel |
| Saturation | naturelle, réduite de 8 à 15 % par rapport à une prise de vue standard |
| Contraste | modéré, noirs jamais bouchés, hautes lumières conservées |
| Température | 4 900 à 5 500 K ; neutralité légèrement chaude, jamais orange |
| Compatibilité interface | bleu profond `#071c33`, bleu `#12365f`, doré `#c99a46`, surfaces `#eef4fa` |
| Peaux | naturelles lorsque des personnes non identifiables apparaissent ; aucune dominante artificielle |

### Prise de vue simulée

- **Hero :** équivalent 28–35 mm, appareil à hauteur humaine, perspective large sans déformation excessive, profondeur de champ moyenne à grande.
- **Méthode :** équivalent 50 mm, vue oblique à 30–45°, distance courte, profondeur de champ modérée, point net sur l’objet analysé.
- **Audit terrain :** équivalent 35–50 mm, cadrage documentaire, niveau de détail élevé, arrière-plan lisible sans surcharge.
- **Texture :** équivalent 70–85 mm, détail de matière ou de lignes, faible contraste, utilisable sous un voile bleu.

### Lumière et ombres

- Lumière naturelle latérale ou ciel couvert lumineux.
- Ombres ouvertes et détaillées ; pas de clair-obscur dramatique.
- Aucune lumière de studio publicitaire visible.
- Reflets contrôlés sur tablette, métal, verre et carrosseries.
- Pas de HDR, halo, lens flare, vignettage marqué ou netteté artificielle.

### Composition

- Sujet principal placé sur un tiers, avec 28 à 40 % d’espace calme.
- Lignes de fuite utilisées pour exprimer le processus, le flux ou la maîtrise.
- Horizon droit et verticales corrigées.
- Personnes éventuelles vues de dos, de trois quarts ou cadrées sur les mains ; aucun regard caméra.
- Aucun élément de sécurité incohérent avec la scène.

## 4. Interdictions

Ne jamais utiliser : poignée de main, dirigeant souriant face caméra, centre d’appel, casque micro, bureau vide générique, pose corporate, groupe aligné, faux tableau de bord, texte généré dans l’image, logo inventé, marque tierce, véhicule immatriculé lisible, document lisible, scène dangereuse, accident, effet HDR, saturation excessive, ciel spectaculaire, rendu plastique ou détail anatomique incertain.

Toute image manifestement générée, présentant une incohérence physique ou une sécurité métier douteuse est rejetée, même si sa composition est attractive.

## 5. Architecture technique

Le composant `src/components/SectionIllustration.astro` centralise l’affichage. Il accepte :

- `image` : fichier final de repli, absent pendant la phase placeholder ;
- `alt` : description factuelle de l’image finale ;
- `ratio` : `16:9`, `3:2`, `4:3`, `4:5` ou `21:9` ;
- `caption` : légende utile et facultative ;
- `priority` : réservé au visuel hero réellement utilisé comme LCP ;
- `loading` : `lazy` par défaut, `eager` uniquement avec `priority` ;
- `overlay` : `none`, `light`, `dark` ou `brand` ;
- `responsive` : `avifSrcset`, `webpSrcset` et `sizes` ;
- `position` : valeur d’`object-position` contrôlant le recadrage ;
- `width` et `height` : dimensions intrinsèques obligatoires ;
- `filename` et `imageType` : informations du placeholder ;
- `variant` : `hero-xxl`, `standard`, `half-width`, `full-width-banner` ou `panoramic-texture` ;
- `layout` : `image-left`, `image-right`, `full-width`, `content-centered`, `text-overlay` ou `background` ;
- `overlayEyebrow` et `overlayText` : texte superposé facultatif ; le slot par défaut accepte un contenu éditorial déjà structuré.

Le HTML final repose sur `<picture>`, des sources AVIF/WebP, un `<img>` dimensionné, `decoding="async"`, `srcset` et `sizes`. Le ratio CSS et les dimensions intrinsèques réservent l’espace avant le chargement : objectif CLS nul.

## 6. Ratios, dimensions et chargement

| Usage | Ratio | Master minimum | Exports recommandés | Chargement | Budget cible |
|---|---:|---:|---|---|---:|
| Hero desktop | 16:9 | 3 200 × 1 800 | 960, 1 280, 1 600, 2 000 px | `eager`, priorité haute si LCP | ≤ 300 Ko |
| Hero mobile | 4:5 | 1 600 × 2 000 | 640, 768, 960 px | source responsive du hero | ≤ 220 Ko |
| Méthode | 3:2 | 2 400 × 1 600 | 640, 960, 1 280, 1 600 px | `lazy` | ≤ 220 Ko |
| Audit terrain | 4:3 | 2 400 × 1 800 | 640, 960, 1 280, 1 600 px | `lazy` | ≤ 220 Ko |
| Texture de transition | 21:9 | 2 520 × 1 080 | 768, 1 280, 1 600 px | `lazy` | ≤ 140 Ko |

Les exports sont en profil sRGB. L’AVIF est proposé en premier, puis WebP. Aucun PNG/JPEG n’est nécessaire sauf contrainte de production documentée. Les métadonnées sensibles doivent être supprimées.

## 7. Convention de nommage

Format : `{usage}-{univers}-{scene}-{largeur}.{format}`.

Exemples :

- `hero-transport-logistique-1600.avif` ;
- `hero-transport-logistique-1600.webp` ;
- `methode-btp-plans-tablette-1280.webp` ;
- `audit-cyber-supervision-960.avif` ;
- `texture-multirisque-locaux-1600.webp`.

Règles : minuscules, tirets, caractères ASCII, aucun numéro de version dans le nom public. Les masters de travail restent hors de `public/`. Une variante mobile porte le suffixe `-mobile` avant la largeur lorsqu’elle utilise un cadrage distinct.

## 8. Architecture des univers

| Univers | Hero | Méthode | Audit terrain | Texture |
|---|---|---|---|---|
| Transport | flotte et plateforme | contrats et tablette | quai et entrepôt | lignes de quai |
| BTP | chantier tertiaire | plans et casque | béton et ferraillage | structure chantier |
| Flotte | parc d’entreprise | tableau de parc neutre | inspection et usages | marquage au sol |
| Cyber | infrastructure contemporaine | cartographie des dépendances | salle technique | trame réseau abstraite |
| Santé | environnement de travail réel | documents collectifs | échange RH non identifiable | matière claire structurée |
| Prévoyance | continuité d’activité | analyse de scénarios | organisation des protections | lignes de continuité |
| Multirisque | locaux en activité | inventaire et plan | stock, matériel et flux | matière architecturale |
| Protection dirigeant | décision dans l’entreprise | synthèse des priorités | continuité et gouvernance | lignes de décision |
| Audit | programme de contrats | lecture croisée | restitution structurée | grille d’analyse |
| Accueil | Paris institutionnel | méthode du cabinet | diversité des activités | architecture parisienne |

## 9. Prompts complets de génération

Chaque prompt ci-dessous est autonome. Une image n’est retenue qu’après contrôle humain des détails métier, des droits d’utilisation et de l’absence d’apparence artificielle.

### Transport

**`hero-transport-logistique.webp` — 16:9.** Photographie documentaire haut de gamme d’une flotte récente de poids lourds stationnée sur une plateforme logistique contemporaine, perspective large depuis une hauteur humaine, objectif simulé 32 mm, lignes de fuite vers un entrepôt moderne, lumière naturelle douce de matin clair, palette gris acier et bleu ardoise, carrosseries sans logo ni plaque lisible, aucun conducteur identifiable, activité ordonnée et crédible, espace négatif calme sur le tiers gauche, contraste modéré, profondeur de champ moyenne, détails réalistes, sans texte, sans HDR, sans saturation excessive, sans apparence de banque d’images ou d’IA.

**`methode-transport-analyse-documentaire.webp` — 3:2.** Photographie premium d’une analyse documentaire transport sur un bureau contemporain, contrats fictifs non lisibles, tablette neutre affichant uniquement des formes abstraites, carnet et stylo, vue oblique à 40 degrés, objectif simulé 50 mm, lumière naturelle latérale, ombres ouvertes, palette bleu-gris et papier blanc cassé, mains éventuelles cadrées sans personne identifiable, composition précise avec espace calme, aucun logo, aucune donnée, aucun texte lisible, aucun effet publicitaire, rendu photographique naturel et cohérent avec un cabinet de conseil.

**`audit-transport-entrepot.webp` — 4:3.** Vue documentaire réaliste d’un quai logistique en activité, palettes homogènes, remorques et profondeur d’entrepôt, objectif simulé 40 mm, cadrage légèrement décentré, lumière naturelle filtrée par les ouvertures, tons gris, bleu froid et bois neutre, circulation visuellement maîtrisée, aucun employé identifiable, aucune marque ni marchandise sensible, niveau de détail élevé sur les flux et les interfaces, contraste doux, verticales corrigées, sans scène dangereuse, sans texte, sans HDR ni rendu artificiel.

**`texture-transport-logistique.webp` — 21:9.** Photographie abstraite et discrète des lignes d’un quai logistique, marquages au sol, métal et ombres géométriques, objectif simulé 85 mm, cadrage horizontal très large, faible profondeur de champ contrôlée, lumière diffuse, palette bleu ardoise et gris neutre, contraste faible pour accepter un voile bleu, aucun véhicule reconnaissable, aucun logo, aucun texte, aucune personne, rendu matière naturel, sans effet dramatique ni génération visible.

### BTP

**`hero-btp-chantier-tertiaire.webp` — 16:9.** Photographie documentaire haut de gamme d’un chantier tertiaire moderne avec grue et bâtiment contemporain en construction, chef de chantier vu de dos au second plan avec équipements de protection cohérents, objectif simulé 32 mm, perspective large et verticales corrigées, lumière naturelle claire légèrement voilée, palette béton gris, bleu ardoise et bois neutre, espace négatif sur le tiers gauche, aucune marque, aucun visage identifiable, aucun geste dangereux, détail réaliste, contraste modéré, sans HDR, sans saturation excessive, sans esthétique publicitaire ou artificielle.

**`methode-btp-plans-tablette.webp` — 3:2.** Photographie premium de plans fictifs non lisibles, casque de chantier neutre, tablette sans marque et détails techniques disposés sur une table de travail, vue oblique à 40 degrés, objectif simulé 50 mm, lumière naturelle latérale, ombres souples, palette blanc cassé, bleu-gris et béton clair, mise au point sur le rapprochement entre plans et contrôle, aucune personne identifiable, aucun logo, aucun texte exploitable, composition calme de cabinet de conseil, sans rendu 3D ni effet IA.

**`audit-btp-structure-beton.webp` — 4:3.** Photographie documentaire d’un détail de structure béton et de ferraillage sur un chantier sécurisé, objectif simulé 45 mm, point de vue à hauteur humaine, lignes constructives nettes, lumière naturelle diffuse, matière réaliste, tons gris minéraux et bleu froid discret, arrière-plan lisible mais non dominant, aucun travailleur identifiable, aucune situation non conforme, aucune marque, aucun texte, contraste maîtrisé, netteté naturelle, sans dramatisation, sans HDR et sans artefact génératif.

**`texture-btp-chantier.webp` — 21:9.** Texture photographique horizontale inspirée d’une structure de chantier, répétition sobre de coffrage, acier et ombres linéaires, objectif simulé 85 mm, cadrage rapproché, lumière diffuse, palette béton neutre et bleu ardoise, faible contraste, aucune personne, aucun logo, aucun texte ni bâtiment identifiable, composition abstraite mais crédible, destinée à recevoir un voile bleu, sans effet industriel agressif ou rendu synthétique.

### Flotte automobile

**`hero-flotte-parc-entreprise.webp` — 16:9.** Photographie documentaire premium d’un parc de véhicules d’entreprise récents et variés, alignement non promotionnel sur un site d’exploitation propre, objectif simulé 35 mm, hauteur humaine, lumière naturelle de matin couvert, tons bleu-gris, carrosseries neutres sans logo ni plaque lisible, aucun conducteur identifiable, espace négatif sur un tiers, profondeur de champ moyenne, perspective structurée, sans concession automobile, sans HDR, sans saturation ni aspect généré.

**`methode-flotte-tableau-parc.webp` — 3:2.** Analyse d’un parc automobile sur tablette neutre et documents fictifs, silhouettes simples de véhicules sans marque, carnet, clé générique et calendrier non lisible, vue oblique, objectif 50 mm, lumière latérale douce, palette papier clair et bleu ardoise, mains cadrées facultatives, aucune donnée réelle, aucun texte lisible, composition précise et réaliste de travail, sans mise en scène commerciale ni artefact IA.

**`audit-flotte-inspection-usages.webp` — 4:3.** Inspection visuelle d’un véhicule utilitaire sur site d’entreprise, détail des usages et équipements sans plaque ni marque, objectif 45 mm, cadrage documentaire de trois quarts, lumière naturelle diffuse, sol et arrière-plan ordonnés, personne éventuelle vue de dos et non identifiable, sécurité cohérente, tons gris et bleu, contraste modéré, sans dommage spectaculaire, sans texte, sans rendu publicitaire.

**`texture-flotte-marquage-sol.webp` — 21:9.** Détail abstrait de marquages de stationnement et d’ombres de véhicules, objectif 85 mm, cadrage horizontal large, palette gris minéral et bleu ardoise, lumière douce, contraste faible, aucune plaque, aucun logo, aucune personne, texture utilisable sous un voile de marque, sans HDR ni saturation.

### Cyber

**`hero-cyber-infrastructure.webp` — 16:9.** Photographie premium d’une infrastructure numérique contemporaine dans un environnement d’entreprise réel, baie technique sobre et postes non identifiables, objectif 35 mm, perspective architecturale, lumière naturelle complétée par un éclairage blanc neutre, palette bleu ardoise et gris, aucun écran lisible, aucun code vert, aucun cadenas graphique, aucune personne identifiable, espace négatif, contraste modéré, rendu réaliste et non futuriste, sans néon, sans HDR, sans esthétique de film ou d’IA.

**`methode-cyber-cartographie.webp` — 3:2.** Table de travail avec cartographie abstraite de dépendances numériques sur papier fictif et tablette neutre, objectif 50 mm, vue oblique, lumière latérale naturelle, formes simples non lisibles, palette blanc cassé, bleu-gris et accent matériel neutre, aucune donnée, aucun logo, mains cadrées possibles, profondeur de champ modérée, photographie de conseil crédible, sans interfaces futuristes ni texte généré.

**`audit-cyber-salle-technique.webp` — 4:3.** Vue documentaire d’une petite salle technique professionnelle, câblage ordonné, équipements sans marque, objectif 40 mm, verticales corrigées, éclairage neutre et doux, tons bleu-gris, niveau de détail réaliste, aucune personne identifiable, aucun écran lisible, aucune alarme visuelle, aucune dramatisation d’attaque, sans saturation, sans HDR ni artefact IA.

**`texture-cyber-trame-reseau.webp` — 21:9.** Texture photographique abstraite de câbles ordonnés et perforations métalliques, objectif macro simulé 85 mm, cadrage horizontal, faible profondeur de champ, lumière diffuse, bleu ardoise et gris neutre, contraste bas, aucun logo, aucun voyant spectaculaire, aucun texte, rendu matière naturel destiné à une transition discrète.

### Santé entreprise

**`hero-sante-environnement-travail.webp` — 16:9.** Photographie documentaire haut de gamme d’un environnement de travail contemporain occupé sans mise en scène, collaborateurs flous ou vus de dos, aucun regard caméra, objectif 35 mm, lumière naturelle généreuse, palette claire bleu-gris et bois neutre, espace négatif, atmosphère calme et professionnelle, aucune blouse médicale ni symbole hospitalier, aucune marque, aucun texte, diversité naturelle non surjouée, sans banque d’images ni effet IA.

**`methode-sante-documents-collectifs.webp` — 3:2.** Documents collectifs fictifs non lisibles, tableau comparatif abstrait et tablette neutre sur une table, objectif 50 mm, vue oblique, lumière latérale douce, palette blanc cassé et bleu ardoise, mise au point sur la lecture des critères, aucune donnée médicale, aucun nom, aucun logo, mains cadrées possibles, rendu de travail sobre et crédible, sans pose commerciale.

**`audit-sante-echange-rh.webp` — 4:3.** Échange de travail entre deux personnes non identifiables autour d’une synthèse RH fictive, cadrage sur les mains et documents, objectif 50 mm, lumière naturelle, profondeur de champ modérée, tons neutres, aucune donnée personnelle ou médicale, aucune poignée de main, aucun sourire caméra, composition documentaire et calme, sans texte lisible ni apparence publicitaire.

**`texture-sante-surface-claire.webp` — 21:9.** Texture horizontale de papier structuré, verre dépoli et ombres douces, objectif 85 mm, palette blanc cassé et bleu très pâle, contraste faible, lumière naturelle, aucune personne, aucun symbole médical, aucun texte, matière réelle destinée à une transition éditoriale légère.

### Prévoyance

**`hero-prevoyance-continuite.webp` — 16:9.** Photographie premium d’une activité d’entreprise qui se poursuit de manière organisée, espace de production ou de service contemporain, personnes non identifiables au second plan, objectif 35 mm, lumière naturelle, perspective structurée, palette bleu-gris et neutres chauds, aucun symbole dramatique, aucune absence mise en scène, espace négatif, rendu documentaire crédible, sans logo, sans texte, sans esthétique publicitaire.

**`methode-prevoyance-scenarios.webp` — 3:2.** Analyse de scénarios de continuité sur documents fictifs et tablette neutre, lignes temporelles abstraites non lisibles, objectif 50 mm, vue oblique, lumière latérale, tons bleu ardoise et blanc cassé, profondeur de champ moyenne, aucune donnée personnelle ou médicale, aucune marque, photographie de travail précise, sans infographie artificielle ni texte généré.

**`audit-prevoyance-organisation.webp` — 4:3.** Vue documentaire d’une réunion de préparation cadrée sur les supports de travail et les gestes, participants vus de dos ou hors champ, objectif 50 mm, lumière naturelle, composition calme, palette neutre, documents illisibles, aucune promesse visuelle, aucune poignée de main, aucun regard caméra, sans rendu corporate générique.

**`texture-prevoyance-continuite.webp` — 21:9.** Texture abstraite de lignes continues sur une matière architecturale claire, objectif 85 mm, lumière douce, palette bleu-gris, contraste bas, aucune personne, aucun texte, aucun symbole d’urgence, rendu photographique naturel et discret.

### Multirisque professionnelle

**`hero-multirisque-locaux-activite.webp` — 16:9.** Photographie documentaire premium de locaux professionnels en activité, atelier, commerce ou entrepôt contemporain sans marque, objectif 32 mm, perspective large, lumière naturelle, palette bleu-gris et matériaux neutres, personnes éventuelles non identifiables, espace négatif, détail crédible des biens et flux, aucune scène de dommage, aucun logo, aucun texte, sans HDR ni aspect de banque d’images.

**`methode-multirisque-inventaire.webp` — 3:2.** Inventaire préparatoire sur tablette neutre, plan simplifié et documents fictifs non lisibles, objectif 50 mm, vue oblique, lumière naturelle latérale, couleurs sobres, point net sur le rapprochement locaux-matériel-stock, aucune donnée, aucun logo, mains cadrées possibles, composition méthodique et haut de gamme, sans interface artificielle.

**`audit-multirisque-stock-materiel.webp` — 4:3.** Vue documentaire de stocks et matériels organisés dans un local professionnel, objectif 40 mm, profondeur lisible, lumière diffuse, tons gris et bleu, aucun produit ou marque identifiable, sécurité cohérente, aucune personne reconnaissable, niveau de détail élevé, sans dégât, sans texte, sans dramatisation.

**`texture-multirisque-locaux.webp` — 21:9.** Détail horizontal d’une façade intérieure, rayonnage ou matière de local professionnel, objectif 85 mm, lignes répétées, lumière douce, palette bleu-gris, faible contraste, aucune marque, aucun texte, aucune personne, texture réelle destinée à un voile de marque.

### Protection du dirigeant

**`hero-dirigeant-decision.webp` — 16:9.** Photographie premium d’une situation de décision dans une entreprise, dirigeant non identifiable vu de dos devant des documents ou un espace d’activité, objectif 35 mm, lumière naturelle, composition architecturale, palette bleu-gris et neutres chauds, aucune pose héroïque, aucun regard caméra, aucun signe de luxe ostentatoire, espace négatif, rendu humain et sobre, sans logo, sans texte, sans banque d’images.

**`methode-dirigeant-synthese.webp` — 3:2.** Synthèse de priorités sur documents fictifs non lisibles, carnet et tablette neutre, objectif 50 mm, vue oblique, lumière latérale douce, palette blanc cassé et bleu ardoise, mise au point précise, aucune donnée personnelle, aucun logo, mains cadrées facultatives, photographie de conseil crédible, sans effet publicitaire.

**`audit-dirigeant-gouvernance.webp` — 4:3.** Réunion de gouvernance cadrée sur la table, les documents et les gestes, participants vus de dos ou hors champ, objectif 50 mm, lumière naturelle, profondeur de champ modérée, ambiance calme, aucun regard caméra, aucune poignée de main, aucun texte lisible, aucun signe de crise, rendu documentaire réaliste.

**`texture-dirigeant-lignes-decision.webp` — 21:9.** Texture abstraite de lignes architecturales convergentes, objectif 85 mm, lumière naturelle douce, bleu ardoise et gris, contraste bas, aucune personne, aucun texte, aucune symbolique de pouvoir, rendu matériel élégant et discret.

### Audit

**`hero-audit-programme-contrats.webp` — 16:9.** Photographie documentaire haut de gamme d’un programme de contrats en cours d’analyse, documents fictifs non lisibles répartis avec méthode, tablette neutre et carnet, objectif 35 mm, vue légèrement surélevée, lumière naturelle latérale, palette bleu-gris et papier blanc cassé, espace négatif, aucune donnée ni marque, aucune personne identifiable, composition précise de cabinet de conseil, sans texte généré, sans effet artificiel.

**`methode-audit-lecture-croisee.webp` — 3:2.** Lecture croisée de plusieurs documents fictifs, repères visuels abstraits et tablette neutre, objectif 50 mm, angle de 40 degrés, profondeur de champ modérée, lumière douce, tons bleu ardoise et gris, mains cadrées possibles, aucune donnée réelle, aucun logo, structure rigoureuse, sans interface futuriste ni mise en scène commerciale.

**`audit-restitution-dirigeant.webp` — 4:3.** Restitution structurée autour d’une table, synthèse fictive tournée vers un interlocuteur non identifiable, cadrage sur les supports et les gestes, objectif 50 mm, lumière naturelle, palette calme, aucune promesse de résultat, aucune poignée de main, aucun regard caméra, aucun texte lisible, rendu professionnel réel et non publicitaire.

**`texture-audit-grille-analyse.webp` — 21:9.** Texture horizontale de grille imprimée abstraite, papier et ombres fines, objectif 85 mm, lumière douce, bleu-gris et blanc cassé, contraste faible, aucune donnée, aucun texte lisible, aucune personne, matière naturelle utilisable sous un voile bleu.

### Accueil

**`hero-accueil-paris-institutionnel.webp` — 16:9.** Vue photographique premium de Paris avec la Tour Eiffel secondaire et décentrée, perspective institutionnelle contemporaine, objectif 35 mm, lumière naturelle claire, ciel doux, palette bleu-gris peu saturée, espace négatif important pour le contenu, aucune foule identifiable, aucune adresse suggérée, aucune enseigne, aucun effet carte postale, verticales maîtrisées, contraste modéré, sans HDR ni apparence générée.

**`methode-accueil-cabinet.webp` — 3:2.** Environnement de travail contemporain illustrant la méthode du cabinet, documents fictifs et tablette neutre, objectif 50 mm, lumière naturelle latérale, composition calme, bleu ardoise, blanc cassé et matière bois clair, aucune personne identifiable, aucune donnée, aucun logo, aucun bureau vide stéréotypé, rendu photographique précis et humain.

**`audit-accueil-activites.webp` — 4:3.** Composition documentaire montrant plusieurs indices d’activités d’entreprise dans un même environnement cohérent, flux, plans, véhicules ou matériels suggérés sans collage artificiel, objectif 40 mm, lumière naturelle, palette commune bleu-gris, aucun logo, aucune personne identifiable, aucune promesse, détail réaliste, sans photomontage visible ni artefact IA.

**`texture-accueil-architecture-paris.webp` — 21:9.** Détail horizontal d’architecture parisienne contemporaine, pierre claire, métal et ombres géométriques, objectif 85 mm, lumière naturelle douce, palette neutre compatible avec le bleu profond, aucune adresse ou enseigne identifiable, aucune personne, aucun texte, contraste faible, sans cliché touristique.

## 10. Alternatives textuelles

L’alternative décrit uniquement ce qui est réellement visible. Elle ne reprend ni le mot-clé SEO ni le nom du fichier. Une texture purement décorative reçoit `alt=""` lors de son intégration finale. Les placeholders emploient aujourd’hui un libellé explicite d’emplacement réservé et ne prétendent pas représenter une photographie existante.

Exemples acceptables :

- `Flotte de poids lourds stationnée sur une plateforme logistique contemporaine.`
- `Chef de chantier vu de dos devant un bâtiment tertiaire en construction.`
- `Plans de construction, casque et tablette disposés sur une table de travail.`

## 11. Contrôle avant intégration d’une image

1. Vérifier les droits commerciaux, l’auteur, la date, le lieu, les modèles et les marques visibles.
2. Contrôler la crédibilité métier et la sécurité de la scène.
3. Rejeter tout artefact ou détail manifestement artificiel.
4. Produire les cadrages desktop et mobile à partir du master validé.
5. Exporter AVIF puis WebP, profil sRGB, métadonnées sensibles supprimées.
6. Mesurer le poids et renseigner `srcset`, `sizes`, `width`, `height` et `alt`.
7. Précharger uniquement le hero qui constitue réellement le LCP.
8. Tester 390, 768, 1280 et 1440 px, zoom 200 %, contrastes et CLS.
9. Vérifier Lighthouse avant/après et documenter l’écart.

## 12. Intégration préparatoire de la Mission 56

Seules les pages `/assurance-transport/` et `/assurance-btp-decennale/` utilisent le composant à ce stade. Chaque page présente quatre placeholders : hero, audit terrain, méthode et texture de transition finale. Aucun fichier image, appel réseau ou poids LCP n’est ajouté. Les futures illustrations ne devront remplacer ces placeholders qu’après validation séparée.

## 13. Variantes natives du composant

| Variante | Usage | Hauteur recommandée | Espacement recommandé | À éviter |
|---|---|---:|---|---|
| `hero-xxl` | ouverture d’une page pilier ou d’une page sectorielle lorsque l’image porte réellement la première impression | 560 à 680 px desktop ; ratio naturel sur mobile | 48 à 80 px avant la section suivante | plusieurs Hero XXL sur une même page |
| `standard` | illustration de méthode, preuve visuelle ou respiration au sein d’une section | 360 à 560 px selon le ratio | 32 à 56 px au-dessus et au-dessous | employer une image générique sans information métier |
| `half-width` | composition éditoriale à deux colonnes, image opposée à un texte court | 360 à 520 px | gouttière de 40 à 72 px avec le contenu | texte long ou tableau face à l’image |
| `full-width-banner` | transition forte entre deux séquences ou ouverture d’un chapitre majeur | 240 à 448 px | 56 à 96 px entre séquences | l’utiliser comme simple décoration répétitive |
| `panoramic-texture` | ponctuation discrète, transition finale, matière sous un voile | 128 à 224 px | 40 à 72 px | sujet humain, scène complexe ou texte détaillé |

Le Hero est réservé au premier message visuel d’une page. Une illustration standard doit expliquer un geste, un environnement ou une méthode. Une texture ne porte jamais une information indispensable. Un bandeau doit séparer deux moments du récit et non compenser un manque de hiérarchie éditoriale.

## 14. Compositions et superposition

- `image-left` : visuel à gauche et contenu associé à droite ; adapté à une méthode ou un inventaire concret.
- `image-right` : visuel à droite ; adapté à une séquence qui poursuit une lecture déjà engagée.
- `full-width` : image sur toute la largeur disponible du conteneur ; réservée aux paysages métier et aux transitions.
- `content-centered` : composant centré dans son conteneur ; valeur par défaut des illustrations autonomes.
- `text-overlay` : contenu court superposé. Limite : un sur-titre et 8 à 14 mots principaux.
- `background` : média de fond avec contenu fourni par le slot ; uniquement si l’information reste parfaitement lisible sans l’image.

Les alternances gauche/droite sont limitées à trois séquences consécutives. Sur mobile, toutes les compositions reviennent à une colonne et le texte superposé reste aligné à gauche. Aucun texte courant long, formulaire, liste complexe ou donnée réglementaire ne doit être superposé à une image.

## 15. Overlays et palette exacte

| Mode | Traitement | Usage |
|---|---|---|
| `none` | aucune couche | photographie naturellement calme sans texte superposé |
| `light` | blanc `#ffffff` à 30 %, bleu clair `#eef4fa` à 8 % | uniformiser une photographie claire ou préserver un rendu éditorial léger |
| `dark` | bleu encre `#071c33` de 72 % à 8 % | assurer la lecture d’un texte blanc sur une scène détaillée |
| `brand` | bleu encre `#071c33` à 46 %, bleu profond `#12365f` à 12 %, doré `#c99a46` à 10 % | Hero ou bandeau de marque, avec un voile volontairement discret |

Palette de référence : encre `#071c33`, bleu profond `#12365f`, doré `#c99a46`, doré clair `#f4e3bf`, surface bleutée `#eef4fa`, blanc chaud `#fbfaf7`, gris acier `#617184`. Les overlays ne modifient jamais une photographie au point de masquer la crédibilité du terrain.

Pour toute superposition, le contraste du texte est contrôlé sur les zones les plus claires et les plus sombres de l’image. Une opacité plus forte n’est pas une correction acceptable d’une composition mal cadrée : il faut d’abord choisir un cadrage avec espace négatif.

## 16. Harmonie entre les univers

Tous les univers partagent la même température de couleur, le même contraste modéré, la même lumière latérale et le même niveau de saturation. Leur distinction vient des matières, des échelles et des gestes : flux pour le Transport, structure pour le BTP, alignement pour la Flotte, dépendances pour le Cyber, continuité humaine pour Santé et Prévoyance, inventaire pour Multirisque, décision pour le Dirigeant, lecture croisée pour l’Audit et ancrage institutionnel pour l’Accueil.

Une page peut employer au maximum un Hero, deux illustrations documentaires fortes et une texture panoramique. Deux images successives doivent différer par l’échelle de plan ou par le geste observé. Les accents dorés restent principalement dans l’interface ; une présence dorée dans la photographie doit provenir naturellement de la lumière ou d’une matière réelle.
