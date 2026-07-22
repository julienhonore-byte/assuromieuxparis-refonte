# Mission 09 — Audit design

Date : 22 juillet 2026  
Périmètre : cohérence graphique, composants, responsive et actifs de marque

## Verdict

L'identité est cohérente, premium et immédiatement reconnaissable. Le bleu profond, le doré, les fonds clairs et la typographie dense sont maîtrisés. La principale faiblesse graphique se situe dans les héros internes : la taille des H1 et la hauteur de composition repoussent le contenu d'action, notamment sur les écrans de portable 1280 × 720.

## Cohérence du système

### Couleurs

Palette appliquée de façon cohérente :

- bleu encre `#071c33` ;
- bleu profond `#0b2747` ;
- bleu de marque `#12365f` ;
- doré `#c99a46` ;
- doré sombre `#8a6222` pour les textes ;
- fond principal `#eef4fa` ;
- blanc `#ffffff` ;
- texte `#162033` ;
- texte secondaire `#475467` et `#667085`.

Le doré reste un accent et non une surface dominante. Les contrastes documentés sont bons.

### Typographie

La hiérarchie est forte : H1 jusqu'à `5.25rem`, H2 jusqu'à `3.25rem`, graisse 850 et interlettrage serré. Cette direction crée une identité éditoriale premium.

Limites :

- certains H1 longs occupent cinq à six lignes ;
- les graisses 750/850 dépendent de la police réellement disponible ;
- `Inter` n'est pas auto-hébergée et peut être absente du poste, provoquant un rendu variable entre Avenir, Segoe UI, Roboto ou Arial.

Une police ne doit être ajoutée que si sa licence et son rôle de marque sont validés. La performance actuelle est excellente sans police distante.

## Héros

### Accueil

Le hero sombre, la grande typographie, les coordonnées parisiennes et les formes géométriques produisent une première impression distinctive sans fausse photographie. Il répond au brief « Paris élégant, non touristique ».

### Pages internes

Les schémas de produit et secteur évitent une répétition graphique totale. Ils sont propres, légers et cohérents. Toutefois, la grille 50/50 laisse une largeur limitée aux H1 très longs.

À 1280 × 720 :

- RC professionnelle : H1 de 441 px de haut, CTA à 898 px ;
- Multirisque, Flotte et Santé : H1 de 368 px, CTA entre 791 et 824 px ;
- Convoyage : CTA à 751 px ;
- hub Votre besoin : CTA à 791 px.

Recommandation : compacter le hero interne, ajuster la largeur ou l'échelle du H1 et garantir que le CTA propre à la page apparaisse avant 720 px de hauteur. Le schéma peut rester présent mais ne doit pas prendre priorité sur l'action.

## Cartes et compositions

Les rayons, bordures et ombres sont harmonisés. Les composants Produit, Risque, Revue, Besoin et Ressource donnent une bonne cohérence au site.

Le site évite globalement le « tout en cartes ». L'exception volontaire est le sélecteur de neuf produits. Le bloc d'accès par enjeu qui suit immédiatement crée néanmoins une seconde grille fonctionnelle et diminue l'effet de choix rapide.

Les six produits partagent une architecture très proche. Les diagrammes les différencient, mais les compositions de corps restent reconnaissables comme un même modèle. C'est acceptable pour l'usage ; il faut éviter d'ajouter encore des variations purement décoratives.

## Boutons

Les boutons pilules, hauteurs de 52/58 px et contrastes bleu/blanc sont cohérents. Les états hover, active, disabled et focus sont couverts. Les libellés métier sont un point fort.

La hiérarchie visuelle est parfois concurrencée par :

- CTA générique du header ;
- CTA spécifique du hero ;
- CTA secondaire du hero ;
- barre fixe mobile ;
- rappel final.

Cette répétition reste contrôlée, mais le CTA spécifique doit primer dans le premier écran.

## Header

Forces : topbar informative, logo clair, navigation courte, CTA visible sur grand écran, menu mobile simple.

Points de vigilance :

- deux niveaux occupent environ 130 px avant le contenu ;
- le CTA du header disparaît sous 1180 px alors que la navigation desktop reste jusqu'à 980 px ;
- le logo JPEG de 300 × 83 px est affiché jusqu'à environ 172 px de large, correct en usage courant mais inférieur à une vraie source 2× pour certains écrans haute densité ;
- aucun favicon ne prolonge la marque dans l'onglet.

## Footer

Le footer sombre clôt correctement le site et renforce la marque. Sa grille à quatre colonnes est équilibrée sur desktop. Sur mobile, les nombreuses destinations et deux blocs réglementaires produisent une longue zone de lecture.

Après validation légale, il faudra réduire les messages de statut de préproduction et hiérarchiser : action, coordonnées, navigation secondaire, mentions obligatoires.

## Responsive

Les recettes antérieures documentent 56 contrôles sur huit gabarits entre 320 et 1440 px, sans débordement. Les media queries sont cohérentes : 980 px pour la navigation, 768/640/560 px selon les compositions.

Le responsive structurel est bon. La réserve ne concerne pas le débordement mais la hauteur utile : sur un portable 1280 × 720, plusieurs héros internes consomment tout le premier écran.

## Images et partage

Actifs conformes :

- `og-homepage-03.jpg` : 1200 × 630, environ 165 Ko ;
- `og-homepage-04.jpg` : 1200 × 630, environ 180 Ko ;
- `og-produits-lot-02.jpg` : 1200 × 630, environ 214 Ko ;
- logo : 300 × 83, environ 11 Ko.

Réserves :

- `og.jpg` est non référencé ;
- la 404 n'a pas d'image sociale ;
- les balises OG n'indiquent ni largeur, ni hauteur, ni alternative ;
- favicon absent ;
- aucune source vectorielle du logo ;
- photographie Paris/Tour Eiffel toujours reportée faute de droits validés.

L'absence de photographie n'est pas un défaut. Les schémas et la typographie portent correctement le design. Une photo ne doit être intégrée que si elle est authentique, licenciée et réellement utile.

## Accessibilité visuelle

- focus doré de 3 px ;
- contraste fort sur les surfaces principales ;
- réduction de mouvement et contraste forcé prévus ;
- taille tactile suffisante ;
- information non transmise uniquement par la couleur.

À tester manuellement : zoom 200 %, focus près des zones rognées par `overflow: clip`, et lisibilité du footer mobile.

## Note design

**8,5 / 10.**

L'identité ne doit pas être refondue. Les prochains gains viennent d'une meilleure économie verticale, d'actifs de marque finalisés et d'une hiérarchie de conversion plus nette.
