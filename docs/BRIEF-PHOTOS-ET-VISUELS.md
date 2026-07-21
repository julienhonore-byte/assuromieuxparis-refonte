# Brief photos et visuels — Assuromieux Paris

Date : 21 juillet 2026

Statut : brief de production. Aucun visuel générique, faux portrait ou photographie sans droits confirmés ne doit être intégré.

## 1. Direction générale

Les images doivent prolonger le positionnement de cabinet de conseil : précision, disponibilité, compréhension de l'entreprise et qualité de relation. Elles ne doivent pas évoquer un comparateur, une plateforme d'appel ou une banque d'images d'assurance.

Principes communs :

- lumière naturelle ou éclairage très doux ;
- palette compatible avec le bleu profond, les fonds clairs et les accents dorés ;
- cadrages avec espace négatif pour permettre l'intégration de texte ;
- situations réelles et sobres, sans poignée de main mise en scène ;
- vêtements et environnements professionnels, sans surjeu commercial ;
- détails métier crédibles, sans marque tierce visible ;
- diversité des entreprises représentées sans fabriquer de faux client ;
- droits d'utilisation web, réseaux sociaux et communication commerciale documentés.

## 2. Absence de portrait personnel — décision validée

Aucune photographie personnelle de Jules Honoré n'est attendue pour le site. L'accueil, la page Cabinet, les contenus éditoriaux et les futures pages ne doivent pas réserver d'emplacement à un portrait.

La dimension humaine repose sur :

- le nom et le rôle de l'interlocuteur ;
- des coordonnées directes ;
- un ton accessible et précis ;
- une méthode expliquée simplement ;
- l'ancrage parisien du cabinet ;
- des visuels de lieu, d'architecture ou de situations de travail réellement autorisés.

Une éventuelle évolution de cette règle nécessiterait une validation explicite distincte.

## 3. Cabinet ou bureau

### Intention

Montrer un environnement de travail crédible : bureau parisien, espace de rendez-vous, détail de matière ou vue de travail. Aucun écran ou document ne doit exposer de données client.

### Cadrages

- horizontal 16:9 avec lignes architecturales simples ;
- détail vertical 4:5 pour une section éditoriale ;
- plan large avec espace négatif pour texte.

### Dimensions

- master horizontal minimum 3200 × 1800 px ;
- variante verticale minimum 1600 × 2000 px ;
- export cible web 1600 px et 960 px de large.

### Texte alternatif envisagé

`Espace de rendez-vous du cabinet Assuromieux Paris.`

À utiliser uniquement si le lieu photographié est effectivement celui du cabinet.

## 4. Visuel hero Paris et Tour Eiffel

### Intention

Établir immédiatement l'implantation parisienne avec une photographie premium de Paris et de la Tour Eiffel, traitée de manière institutionnelle et contemporaine. La Tour Eiffel doit rester un repère secondaire dans la composition, jamais un sujet touristique central.

### Fichiers attendus

- desktop : `public/images/paris-tour-eiffel-hero.webp` ;
- mobile : `public/images/paris-tour-eiffel-hero-mobile.webp` ;
- aucun de ces fichiers ne doit être ajouté avant validation écrite de la licence et des droits d'usage.

### Contraintes

- format WebP, profil sRGB ;
- largeur du master desktop : au moins 2 000 px ;
- ratio desktop proche de 16:9, cadrage horizontal ;
- Tour Eiffel visible mais décentrée, idéalement dans le tiers droit ;
- espace calme suffisant pour le titre et les CTA ;
- ciel clair ou lumière naturelle, couleurs douces et peu saturées ;
- éviter les foules, enseignes, véhicules reconnaissables et effets de carte postale ;
- ne pas faire apparaître d'adresse différente de l'adresse validée ;
- ne pas suggérer que le cabinet occupe un bâtiment reconnaissable si ce n'est pas vérifié ;
- appliquer un filtre CSS léger : saturation entre 75 et 90 %, contraste entre 85 et 95 % ;
- ajouter un voile clair ou bleu très léger permettant un contraste AA du texte ;
- viser un poids inférieur à 300 Ko pour le hero desktop.

### Dimensions

- master recommandé : 2 400 × 1 350 px minimum ;
- export desktop : 2 000 × 1 125 px, inférieur à 300 Ko ;
- export intermédiaire : 1 280 × 720 px ;
- version mobile : ratio 4:5, 960 × 1 200 px minimum, cadrage distinct ;
- déclarer les dimensions et utiliser `srcset`/`sizes` lors de l'intégration ;
- précharger uniquement la variante réellement utilisée comme LCP.

### Texte alternatif envisagé

`Vue de Paris avec la Tour Eiffel en arrière-plan, ville d'implantation d'Assuromieux Paris.`

Le texte alternatif final devra décrire le cadrage réellement retenu. Sur mobile, la Tour Eiffel doit rester visible sans réduire la lisibilité du texte. Si le recadrage automatique échoue, utiliser impérativement le fichier mobile dédié.

### Placeholder actuel

Faute d'image licenciée disponible dans le projet, le hero utilise une composition CSS temporaire représentant Paris. Elle :

- ne déclenche aucune requête d'image ;
- ne se présente pas comme une photographie ;
- expose dans le code le chemin attendu `/images/paris-tour-eiffel-hero.webp` ;
- doit être remplacée uniquement après validation de la licence, du poids, des recadrages et du contraste.

## 5. Entreprises et accompagnement des dirigeants

### Intention

Documenter une situation de travail ou de conseil sans prétendre représenter un client réel. Les participants doivent être identifiés comme modèles ou membres autorisés de l'équipe.

### Scènes possibles

- échange autour d'une table avec documents fictifs non lisibles ;
- dirigeant examinant une synthèse ou un schéma ;
- détail de carnet, stylo et documents de travail ;
- préparation d'une réunion, sans poignée de main ni sourire publicitaire.

### Cadrages et dimensions

- horizontal 3:2, minimum 3000 × 2000 px ;
- plan rapproché 4:5, minimum 1600 × 2000 px ;
- espace négatif d'au moins 30 % sur une variante.

### Textes alternatifs envisagés

- `Échange de travail autour de l'analyse d'un programme d'assurances d'entreprise.`
- `Dirigeant examinant une synthèse de risques et de contrats.`

Les termes devront correspondre à la scène réelle et ne pas laisser entendre qu'un modèle est un client.

## 6. Transport et logistique

### Intention

Montrer l'exploitation et les flux plutôt qu'un camion isolé. Les images doivent permettre de comprendre la pluralité des risques : véhicules, quai, chargement, entrepôt ou coordination logistique.

### Visuels à produire

- parc ou véhicule en contexte d'exploitation ;
- quai ou entrepôt avec profondeur et circulation maîtrisée ;
- détail de chargement ou de sécurisation, conforme aux règles de sécurité ;
- variante logistique sans marque ou plaque lisible.

### Dimensions

- hero horizontal 16:9, minimum 3200 × 1800 px ;
- carte sectorielle 4:3, minimum 1600 × 1200 px ;
- mobile 4:5, minimum 1200 × 1500 px.

### Texte alternatif envisagé

`Opération de transport et de logistique sur un site d'exploitation.`

Le texte final précisera le véhicule ou l'opération réellement visible.

## 7. BTP

### Intention

Représenter une activité de chantier crédible, avec équipements de protection adaptés. Éviter les scènes dangereuses, les gestes techniques faux et les bâtiments identifiables sans autorisation.

### Visuels à produire

- professionnel ou équipe en situation de chantier sécurisée ;
- détail de procédé ou de préparation non confidentiel ;
- véhicule ou dépôt d'artisan ;
- vue structurée de chantier avec espace négatif.

### Dimensions

- hero 16:9, minimum 3200 × 1800 px ;
- carte 4:3, minimum 1600 × 1200 px ;
- mobile 4:5, minimum 1200 × 1500 px.

### Texte alternatif envisagé

`Professionnels du BTP intervenant sur un chantier sécurisé.`

À adapter précisément au métier et à l'action visibles.

## 8. Illustrations originales

Les illustrations peuvent compléter les photographies pour expliquer :

- cartographie des contrats ;
- relation entre activité, risques et garanties ;
- déroulement de l'audit ;
- articulation des responsabilités ;
- restitution au dirigeant.

Style recommandé : lignes fines, cercles, réseaux et repères inspirés de la cartographie actuelle. Utiliser le bleu `#12365f`, le bleu profond `#071c33`, le doré `#c99a46` et les fonds clairs. Éviter les pictogrammes génériques de bouclier, cadenas, poignée de main ou tirelire.

Formats : SVG produit par un designer, avec titres HTML séparés ; PNG/WebP uniquement pour les textures. Les illustrations doivent rester compréhensibles sans animation.

## 9. Qualité, livraison et performance

- fournir les originaux et une sélection retouchée non destructive ;
- conserver une colorimétrie naturelle et des carnations réalistes ;
- limiter la retouche à la lumière, au contraste et aux éléments parasites ;
- supprimer métadonnées sensibles lors de l'export web ;
- documenter auteur, date, lieu, personnes et autorisations ;
- prévoir `srcset` 480, 768, 1200 et 1600 px selon le visuel ;
- viser ≤ 180 Ko pour une image de carte et ≤ 300 Ko pour un hero en AVIF/WebP ;
- toujours déclarer largeur et hauteur pour éviter les décalages de mise en page ;
- charger les images hors premier écran en différé ;
- ne précharger que le visuel LCP réellement utilisé.

## 10. Placeholders actuels

Les emplacements temporaires sont des compositions CSS neutres. Ils ne contiennent aucune personne et ne doivent pas être exportés comme photographies. Leur remplacement nécessite :

1. validation du visuel et de ses droits ;
2. rédaction de l'alternative textuelle à partir de l'image finale ;
3. génération des formats responsives ;
4. contrôle du contraste si du texte est superposé ;
5. mesure du poids et du LCP après intégration.
