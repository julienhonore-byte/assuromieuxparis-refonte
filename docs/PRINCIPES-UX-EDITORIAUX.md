# Principes UX et éditoriaux — Assuromieux Paris

Date : 21 juillet 2026

## 1. Principe directeur

Chaque page doit aider le visiteur à répondre rapidement à trois questions :

1. Suis-je concerné ?
2. Que va analyser ou proposer le cabinet ?
3. Quelle est la prochaine action utile ?

La clarté prime sur la quantité de contenu et sur la démonstration graphique.

## 2. Une idée forte par section

Une section porte un seul message principal. Son titre doit pouvoir résumer ce que le visiteur doit retenir. Si une section traite simultanément du public, des garanties, de la méthode et du cabinet, elle doit être divisée ou simplifiée.

Structure recommandée :

- un repère ou kicker facultatif ;
- un H2 direct ;
- un paragraphe d'introduction court ;
- un seul format principal : texte, liste, étapes, visuel ou cartes ;
- un CTA seulement lorsqu'il existe une suite logique.

## 3. Paragraphes et titres

- Deux à quatre phrases par paragraphe.
- Une seule idée par paragraphe.
- Titres courts, spécifiques et orientés vers une décision.
- Éviter les titres abstraits comme « Une approche innovante ».
- Développer les acronymes à leur première occurrence.
- Utiliser les listes pour comparer ou préparer, pas pour fractionner artificiellement un texte.
- Placer l'information essentielle avant les nuances et détails.

## 4. Priorité au besoin client

Commencer par la situation du dirigeant : activité, contrat, risque, échéance ou difficulté. Présenter ensuite la méthode et seulement après le produit ou la solution.

Préférer : « Votre activité a évolué et les contrats ne la décrivent plus précisément. »

Éviter : « Nous proposons une gamme complète de solutions performantes. »

## 5. Accès rapide aux produits

La page d'accueil doit conserver un accès visible aux besoins prioritaires immédiatement après le hero. Les noms, descriptions courtes, cibles et statuts proviennent de `src/data/products.ts`.

Chaque produit mène vers :

- une page publiée ;
- une ancre valide d'une page pilier ;
- ou, exceptionnellement, un formulaire préqualifié clairement identifié.

Aucun lien mort, faux CTA ou page vide ne doit être affiché.

## 6. Limitation des cartes

Les cartes sont adaptées à une sélection réelle d'éléments comparables. Elles ne sont pas le format par défaut.

- Éviter les successions de grilles de six ou neuf grandes cartes.
- Limiter une grille éditoriale à trois ou quatre éléments lorsque possible.
- Le sélecteur de produits peut afficher neuf entrées si elles restent compactes et immédiatement actionnables.
- Regrouper les éléments secondaires dans une liste, un tableau ou un bloc éditorial.
- Ne pas utiliser une carte pour un contenu qui tient en une ligne.

## 7. Alternance des compositions

Alterner avec mesure :

- texte et visuel ;
- bloc éditorial et liste courte ;
- étapes ;
- FAQ ;
- CTA final.

Ne pas alterner uniquement pour décorer. Chaque composition doit rendre une relation plus facile à comprendre. Les surfaces claires et sombres servent la hiérarchie, pas un rythme artificiel.

## 8. CTA harmonisés

### CTA principaux

- `Demander un audit gratuit`
- `Demander mon audit`
- `Échanger sur mon besoin`

### CTA de découverte

- `Voir nos assurances`
- `Découvrir l'audit`
- `Voir cette assurance`
- `Découvrir le cabinet`

### Règles

- Un CTA principal par écran ou section décisionnelle.
- Un CTA secondaire seulement s'il répond à une intention différente.
- Libellé explicite et destination prévisible.
- Même action, même formulation sur l'ensemble du site.
- Éviter « En savoir plus » lorsqu'un libellé métier est possible.
- Conserver des cibles tactiles d'au moins 44 × 44 px.

## 9. Rôle de chaque type de page

### Page d'accueil

Synthétique. Elle présente le positionnement, permet de choisir un produit, résume la méthode et conduit vers l'audit ou les pages spécialisées. Elle ne doit pas devenir un dossier complet.

### Page pilier Assurances entreprises

Elle explique l'articulation des protections. Elle distribue vers les pages produits sans les remplacer ni répéter tout leur contenu.

### Page produit

Orientée décision. Structure recommandée : hero, public concerné, risques ou besoins, points à vérifier, méthode, FAQ courte et CTA. Elle répond à une intention précise et limite le jargon contractuel.

### Page sectorielle

Elle montre la compréhension d'une activité, de ses responsabilités et de ses flux. Elle relie plusieurs produits sans faire du secteur l'identité globale du cabinet.

### Guide ou article

Plus approfondi, pédagogique et durable. Il répond à une question réelle, développe des exemples prudents, cite ses sources lorsque nécessaire et renvoie vers la page commerciale pertinente.

### Page Cabinet

Elle établit le rôle, la méthode, l'ancrage parisien, l'intervention nationale et la relation directe. Elle ne contient aucun portrait personnel ni biographie artificiellement développée.

## 10. Longueur et profondeur

La longueur dépend de l'intention, pas d'un quota :

- accueil : lecture synthétique et accès rapide ;
- produit ou secteur : profondeur suffisante pour décider et préparer un échange ;
- guide : développement plus complet lorsque le sujet le justifie ;
- FAQ : trois à cinq questions réellement fréquentes.

Ne jamais ajouter des paragraphes répétitifs, des variantes synonymiques ou des listes génériques pour atteindre un nombre de mots.

## 11. Lisibilité et accessibilité

- Un H1 unique.
- Hiérarchie H2/H3 sans saut.
- Largeur de lecture maîtrisée.
- Contraste WCAG 2.2 AA.
- Zoom 200 % sans perte d'information.
- Navigation clavier complète et focus visible.
- Liens compréhensibles hors contexte.
- Alternatives textuelles décrivant le visuel réel.
- Formulaires avec labels, messages explicites et statut annoncé.
- Aucun sens transmis uniquement par la couleur.
- Mouvement réduit respecté.

## 12. Contrôle éditorial avant validation

Pour chaque page, vérifier :

1. l'intention principale est identifiable en moins de trente secondes ;
2. le besoin client apparaît avant la liste des produits ;
3. chaque section porte une idée ;
4. aucune affirmation ne dépasse les preuves disponibles ;
5. les détails ont été placés sur la page appropriée ;
6. les CTA sont cohérents et fonctionnels ;
7. le SEO découle naturellement du contenu ;
8. aucune phrase n'existe uniquement pour augmenter la longueur.
