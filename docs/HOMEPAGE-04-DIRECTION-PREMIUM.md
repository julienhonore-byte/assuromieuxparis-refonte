# Homepage 04 — Direction premium

Date de l’itération : 21 juillet 2026

Périmètre : page d’accueil Astro, composants partagés strictement nécessaires, données produits et documentation.

Statut : implémentée en prévisualisation, non déployée et non indexable.

## 1. Objectif de l’itération

Cette version fait évoluer l’accueil vers une expression plus éditoriale, premium et mémorable, sans augmenter artificiellement sa longueur. Elle doit faire percevoir Assuromieux Paris comme un cabinet de conseil capable d’analyser une situation globale, et non comme un catalogue de contrats ou un spécialiste exclusivement centré sur le transport.

Les invariants conservés sont les suivants :

- H1 validé, inchangé ;
- accès immédiat aux neuf assurances ;
- audit comme porte d’entrée méthodologique ;
- identité bleu profond, or et fonds clairs ;
- ancrage Paris 8e et accompagnement national ;
- absence de portrait, de fausse photographie et de preuve inventée ;
- Formspree et Cal.com conservés ;
- Astro statique, JavaScript minimal et compatibilité Netlify ;
- `noindex, nofollow` et blocage `robots.txt` maintenus.

## 2. Direction visuelle et rythme

L’accueil alterne désormais des compositions distinctes afin d’éviter une succession de grilles de cartes :

| Ordre | Section | Composition | Rôle |
| --- | --- | --- | --- |
| 1 | Hero | composition éditoriale sombre avec média latéral ou fallback CSS | installer le positionnement et la conversion |
| 2 | Assurances | liste premium en deux colonnes, sans conteneur de cartes | donner un accès immédiat aux neuf produits |
| 3 | Manifeste | texte éditorial asymétrique | affirmer la posture de conseil |
| 4 | Vision globale | séquence verticale reliée | expliquer les quatre dimensions du programme |
| 5 | Méthode | frise horizontale sur fond bleu, verticale sur mobile | rendre les quatre étapes lisibles sans quatre cartes |
| 6 | Expertises sectorielles | deux lignes éditoriales sur fond doré clair | valoriser Transport et BTP sans les rendre dominants |
| 7 | Cabinet | composition asymétrique avec repère parisien abstrait | matérialiser Paris 8e, la relation directe et l’intervention nationale |
| 8 | Ressources | trois cartes éditoriales conservées | annoncer le futur centre de ressources |
| 9 | FAQ | accordéon court | lever les objections principales |
| 10 | Contact | bloc contrasté et formulaire simplifié | convertir sans demander de document confidentiel |

Les cartes arrondies restent présentes là où elles aident réellement à regrouper une information : ressources, FAQ et formulaire. Elles ont été retirées des produits, de la méthode, de la vision globale et des expertises sectorielles.

## 3. Éléments supprimés ou regroupés

Par rapport à Homepage 03 :

- le hero générique à deux colonnes et son panneau `ParisHeroVisual` ont été remplacés sur l’accueil par un hero éditorial dédié ;
- la promesse en trois cartes « Analyser / Comparer / Accompagner » a été remplacée par un manifeste court et une vision globale en quatre dimensions ;
- les deux grands panneaux « Assurances transversales / Expertises sectorielles » ont été supprimés ;
- les assurances transversales sont accessibles dans le sélecteur unique et dans la lecture par enjeu ;
- Transport et BTP sont regroupés dans une section sectorielle courte de deux entrées ;
- le composant générique `SolutionMethod` n’est plus utilisé sur l’accueil ; une frise spécifique plus compacte le remplace ;
- les composants utilisés par les pages internes conservent leur fonctionnement antérieur.

## 4. Hero et traitement de Paris

Le hero contient uniquement :

- le sourcil « Conseil & courtage en assurances d’entreprise » ;
- le H1 validé ;
- un texte d’introduction court ;
- les CTA « Demander un audit gratuit » et « Voir nos assurances » ;
- une ligne de contexte institutionnel validé : Paris 8e, accompagnement en France, interlocuteur direct.

Le composant `HomeHero.astro` détecte automatiquement les actifs suivants :

- `/public/images/paris-tour-eiffel-hero.webp` ;
- `/public/images/paris-tour-eiffel-hero-mobile.webp`.

Lorsque l’image desktop est absente, un fallback CSS abstrait est affiché. Il évoque Paris et la Tour Eiffel sans se présenter comme une photographie. Lorsqu’une photographie licenciée sera ajoutée, le hero utilisera un recadrage décentré, un voile bleu pour garantir le contraste et la variante mobile si elle est disponible.

Les deux fichiers photo attendus restent absents à la date de cette itération. Aucune image artificielle n’a été placée à leur emplacement.

Un visuel social abstrait distinct a été créé dans `public/og-homepage-04.jpg` au format 1200 × 630. Il ne contient ni personne, ni texte, ni logo tiers, ni preuve commerciale. Il est utilisé uniquement par les métadonnées sociales et les données structurées de l’accueil.

## 5. Sélecteur de produits

Les neuf produits restent définis une seule fois dans `src/data/products.ts` :

1. RC professionnelle ;
2. Multirisque professionnelle ;
3. Flotte automobile ;
4. Décennale et BTP ;
5. Transport et marchandises ;
6. Santé et prévoyance ;
7. Protection du dirigeant ;
8. Cyberassurance ;
9. Audit des contrats.

La variante `editorial` du composant `ProductSelector.astro` présente ces entrées comme une liste de décisions : index discret, titre, description courte et destination. Elle supprime l’effet de grille de grandes cartes tout en conservant une cible tactile suffisante.

La variante historique reste la valeur par défaut. Les pages internes qui utilisent le composant ne sont donc pas modifiées visuellement.

## 6. Lecture par enjeu

La lecture par enjeu est placée sous le sélecteur principal sous la forme de liens éditoriaux légers, et non d’une seconde grille :

- protéger mon activité ;
- protéger mes locaux ;
- protéger mes véhicules ;
- protéger mes marchandises ;
- protéger mes équipes ;
- protéger le dirigeant ;
- sécuriser un risque sectoriel ;
- analyser mes contrats.

La configuration est centralisée dans `src/data/products.ts` et réutilise les destinations des produits existants. L’entrée sectorielle pointe vers la section courte Transport / BTP de l’accueil.

## 7. Préremplissage du formulaire

Un JavaScript progressif et sans dépendance mémorise le produit sélectionné dans la session du navigateur. Lorsque l’utilisateur revient au formulaire, le champ « Besoin principal » reprend automatiquement le produit concerné.

Le parcours fonctionne également avec le paramètre d’URL `?besoin=<slug-produit>`. En l’absence de stockage ou de JavaScript, tous les liens et le formulaire restent fonctionnels. La valeur envoyée à Formspree reste un libellé lisible, et non un identifiant technique.

Aucune demande réelle n’a été envoyée à Formspree pendant les contrôles.

## 8. Manifesto, vision globale et méthode

Le manifeste affirme que le cabinet ne se limite pas à distribuer des contrats. Il relie l’activité, les risques, les garanties et le marché pour éclairer une décision cohérente.

La vision globale est limitée aux quatre dimensions validées :

1. activité réelle ;
2. contrats existants ;
3. risques ;
4. solutions du marché.

La méthode conserve les quatre verbes structurants :

1. comprendre ;
2. analyser ;
3. consulter ;
4. recommander.

Ces deux ensembles utilisent des séquences reliées, et non des grilles de quatre grandes cartes identiques.

## 9. Place des expertises sectorielles

La section sectorielle contient uniquement :

- Transport et logistique ;
- BTP et décennale.

Le texte précise qu’il s’agit de deux lectures métier au sein d’une offre plus large. La section est volontairement compacte et n’occupe pas davantage d’espace que la vision transversale ou la méthode d’audit.

## 10. SEO technique et données structurées

Les éléments suivants sont conservés ou contrôlés :

- un seul H1, identique au texte validé ;
- une hiérarchie H2 / H3 continue ;
- title, meta description et canonical inchangés ;
- quatre blocs JSON-LD valides : Organization, LocalBusiness / InsuranceAgency, ItemList et FAQPage ;
- `ItemList` toujours générée à partir des neuf produits visibles ;
- FAQ structurée strictement identique à la FAQ visible ;
- image sociale et image `LocalBusiness` mises à jour vers `og-homepage-04.jpg` uniquement sur l’accueil ;
- maillage descriptif vers la page pilier, l’audit, Transport, BTP et le cabinet ;
- `noindex, nofollow` maintenu ;
- `robots.txt` maintenu avec blocage de la prévisualisation.

## 11. Accessibilité, responsive et performance

Principes appliqués :

- HTML sémantique avec régions nommées, titres ordonnés, listes et navigation dédiée aux enjeux ;
- lien d’évitement et focus visible doré de 3 px ;
- cibles interactives d’au moins 44 px ;
- libellés de liens explicites et destinations conservées sans JavaScript ;
- formulaire avec labels, aides, statut `aria-live` et focus sur le premier champ invalide ;
- contraste vérifié sur les principales combinaisons, avec des ratios mesurés de 7,08:1 à 17,17:1 ;
- aucun débordement horizontal mesuré à 320, 768, 1024 et 1440 px ;
- menu mobile ouvert et refermé correctement ;
- première action du hero visible à 320 × 800 avant le CTA mobile fixe ;
- aucune animation ajoutée, uniquement des transitions courtes déjà couvertes par `prefers-reduced-motion: reduce` ;
- aucun nouveau paquet JavaScript ;
- média hero chargé en priorité uniquement lorsqu’un actif réel est présent ;
- fallback CSS sans requête réseau ;
- visuel social JPEG limité à environ 180 Ko et non chargé dans le rendu visible.

## 12. Contrôles réalisés

| Contrôle | Résultat |
| --- | --- |
| Build Astro statique | réussi, 7 pages générées |
| Liens et ancres internes | réussi, aucun lien cassé |
| Largeurs 320 / 768 / 1024 / 1440 px | aucun débordement |
| Navigation mobile | panneau visible après activation, `aria-expanded=true` |
| Sélecteur | 9 entrées, destinations présentes |
| Préremplissage | « Flotte automobile » repris dans le formulaire |
| Validation locale du formulaire vide | message affiché, focus placé sur le prénom, aucune transmission |
| Focus | lien d’évitement avec outline doré 3 px |
| Contrastes échantillonnés | conformes AA, minimum mesuré 7,08:1 |
| Métadonnées | canonical, `noindex, nofollow` et image sociale présents |
| Données structurées | 4 blocs JSON-LD, aucun JSON invalide |
| Console navigateur | aucun avertissement ni erreur |
| Références protégées | SHA-256 inchangé : `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` |

## 13. Validations encore nécessaires

Avant toute mise en production, il reste à :

1. sélectionner, licencier et documenter une photographie premium de Paris correspondant au brief ;
2. produire ses variantes WebP desktop et mobile aux chemins attendus, puis valider le recadrage et l’alternative textuelle définitive ;
3. effectuer une revue humaine finale du rendu sur appareils physiques et des contenus réglementaires ;
4. publier de vraies pages ressources avant de rendre les cartes « Ressources » cliquables ;
5. effectuer un essai Formspree autorisé avec une adresse de test avant la production ;
6. ne lever `noindex` et le blocage `robots.txt` qu’au cours d’une mission de mise en production explicitement validée.

## 14. Fichiers de production protégés

Les fichiers suivants n’ont pas été modifiés :

- `index.html` à la racine ;
- `source/index-production-reference.html`.

Leur empreinte SHA-256 commune reste :

```text
cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0
```
