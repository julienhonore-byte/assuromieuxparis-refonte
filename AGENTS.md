# Cadre permanent de travail — Assuromieux Paris

Ce fichier s'applique à l'ensemble du dépôt et doit être lu avant toute analyse, modification, génération de contenu ou opération Git.

## 1. Lecture obligatoire avant intervention

Tout agent doit commencer par lire, dans cet ordre :

1. `AGENTS.md` ;
2. `docs/POSITIONNEMENT-DE-MARQUE.md` ;
3. `docs/PRINCIPES-UX-EDITORIAUX.md` ;
4. `docs/VISION-SITE-CIBLE.md` ;
5. `docs/MATRICE-SEO-PAGES-MVP.md` ;
6. `docs/TODO.md`.

Lire ensuite uniquement les documents techniques utiles à la mission, notamment `docs/REFERENCE-PRODUCTION.md`, `docs/DESIGN-SYSTEM.md`, `docs/AUDIT-TECHNIQUE.md` et `docs/BRIEF-PHOTOS-ET-VISUELS.md` lorsque le périmètre le justifie.

Avant d'écrire, contrôler `git status`, le dernier commit et les fichiers déjà modifiés. Les changements existants qui ne relèvent pas de la mission appartiennent à l'utilisateur et doivent être préservés.

## 2. Positionnement obligatoire

Assuromieux Paris est un cabinet de conseil et de courtage spécialisé dans l'audit, l'optimisation et la sécurisation des assurances des entreprises.

Le site doit présenter le cabinet comme :

- un interlocuteur conseil pour les dirigeants ;
- un spécialiste de l'analyse des contrats et des risques ;
- un cabinet capable de comprendre l'activité réelle avant de proposer une solution ;
- un cabinet capable de consulter et négocier le marché ;
- un expert des assurances professionnelles ;
- un acteur parisien intervenant à l'échelle nationale.

L'audit est la porte d'entrée méthodologique. Le courtage permet de consulter, négocier et mettre en œuvre lorsque cela est pertinent. Les produits répondent à des besoins identifiés. Le transport, la logistique et le BTP sont des expertises sectorielles fortes, mais ne doivent jamais dominer le positionnement général.

## 3. Règles graphiques

Conserver l'identité existante :

- bleus profonds, notamment `#071c33`, `#0b2747` et `#12365f` ;
- touches dorées, notamment `#c99a46`, utilisées avec mesure ;
- fonds blancs, bleu très clair et surfaces aérées ;
- logo Assuromieux Paris ;
- rendu sobre, premium, professionnel et accessible ;
- ancrage parisien visible ;
- Tour Eiffel élégante, secondaire et non touristique ;
- cartes arrondies seulement lorsqu'elles clarifient un ensemble ;
- alternance de compositions pour éviter les successions de grilles ;
- excellente lisibilité, contrastes WCAG 2.2 AA et focus visible ;
- responsive sans débordement de 320 à 1440 px ;
- animations rares, utiles et désactivables avec `prefers-reduced-motion`.

Ne pas changer la palette, la typographie, les rayons, les ombres ou le langage visuel sans mission explicite. Réutiliser les tokens et composants existants avant d'en créer de nouveaux.

## 4. Règles éditoriales

- Une idée forte par section.
- Paragraphes courts, titres directs et listes limitées.
- Priorité au besoin du dirigeant, puis à la méthode, puis au produit.
- Expliquer les arbitrages et les limites autant que les bénéfices.
- Employer un ton professionnel, naturel, précis et accessible.
- Éviter les promesses absolues, le jargon gratuit et les formulations de comparateur.
- Ne pas allonger artificiellement un texte pour le SEO.
- Réserver les développements longs aux guides réellement utiles.
- Conserver une page d'accueil synthétique et des pages produits orientées décision.
- Ne jamais inventer de preuve, chiffre, partenaire, témoignage, client, résultat, économie ou qualification.
- Signaler explicitement toute information métier, juridique ou réglementaire qui reste à valider.

## 5. Contraintes techniques

- Architecture : Astro en génération statique.
- Hébergement cible : Netlify.
- Gestionnaire de paquets : `pnpm` ; conserver `pnpm-lock.yaml`.
- URL propres avec slash final et sans extension `.html`.
- JavaScript client minimal et progressif.
- Formspree conservé provisoirement pour le formulaire.
- Cal.com conservé comme lien de prise de rendez-vous.
- Aucun analytics, traceur ou gestionnaire de cookies sans décision explicite.
- Données de produits centralisées dans `src/data/products.ts` ; ne pas les dupliquer dans les pages.
- Préserver la compatibilité du build statique et Netlify.
- Ne jamais déployer sans instruction explicite de production.

## 6. Fichiers et réglages protégés

Ne jamais modifier, supprimer, déplacer, régénérer ou reformater sans autorisation explicite :

- `source/index-production-reference.html` ;
- `index.html` à la racine ;
- l'empreinte documentée dans `docs/REFERENCE-PRODUCTION.md` ;
- `public/robots.txt` tant que la prévisualisation doit rester bloquée ;
- le comportement `noindex, nofollow` tant que la mise en production n'est pas validée ;
- les informations réglementaires non validées.

Empreinte de référence connue pour les deux fichiers HTML protégés :

```text
cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0
```

Une mission de mise en production doit confirmer explicitement la levée de `noindex` et du blocage `robots.txt`. Le déploiement seul ne vaut pas autorisation d'indexation.

## 7. Commandes de contrôle

Utiliser les commandes proportionnées à la mission :

```bash
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 4321
pnpm run verify
pnpm run build:demo
git diff --check
git status --short
shasum -a 256 index.html source/index-production-reference.html
```

`pnpm run verify` doit compiler le site et contrôler les pages, liens et ancres internes. Pour toute modification visuelle ou interactive, ajouter une recette navigateur de 320 à 1440 px, incluant navigation mobile, clavier, focus, formulaire, absence de débordement et contrastes. Ne pas envoyer de vraie demande Formspree sans autorisation.

Une mission exclusivement documentaire n'exige pas de rebuild si aucun fichier de code, configuration ou dépendance n'a changé. Elle exige néanmoins `git diff --check`, le contrôle du périmètre et la vérification des références protégées.

## 8. Règles Git

- Commencer par un dépôt propre ou identifier précisément les changements préexistants.
- Ne jamais effacer ni écraser une modification de l'utilisateur.
- Ne pas utiliser `git reset --hard`, `git clean`, `git checkout --` ou une commande destructive sans demande explicite.
- Créer un commit distinct par mission lorsque cela est demandé.
- Mettre en staging uniquement les fichiers appartenant à la mission.
- Exécuter `git diff --check` avant le commit.
- Vérifier `git status --short` après le commit.
- Ne pas réécrire ou amender un commit existant sans demande explicite.
- Communiquer le hash et le message du commit dans le compte rendu.

## 9. Règles SEO

- Une intention de recherche principale par page.
- Un `title`, une meta description, un canonical et un H1 uniques.
- Hiérarchie H1, H2 et H3 logique, sans saut artificiel.
- Contenu utile et spécifique avant volume de mots.
- Maillage interne descriptif entre pages piliers, produits, secteurs et ressources.
- Données structurées uniquement lorsqu'elles correspondent au contenu visible et vérifié.
- Page Assurances entreprises conservée comme page pilier ; les futures pages produits apportent une profondeur propre.
- Pages Transport et BTP conservées comme expertises sectorielles, sans cannibaliser le positionnement général.
- Aucun bloc de mots-clés, aucune page locale artificielle et aucune page mince créée pour remplir une arborescence.
- Sitemap, indexation et redirections uniquement avec des URL finales validées.
- Maintenir `noindex, nofollow` et `Disallow: /` pendant la prévisualisation.

## 10. Interdictions permanentes

- Aucun portrait personnel de Jules Honoré.
- Aucune fausse photographie ou image présentée comme réelle.
- Aucune photographie sans licence et droits documentés.
- Aucune statistique, preuve, étude de cas, référence client, note ou témoignage inventé.
- Aucun partenaire ou logo tiers non autorisé.
- Aucun résultat ou niveau d'économie garanti.
- Aucun faux badge de confiance ou fausse urgence commerciale.
- Aucune animation décorative lourde.
- Aucune dépendance lourde sans bénéfice démontré.
- Aucun déploiement, redirection de production ou ouverture d'indexation implicite.
- Aucune modification des références protégées.

## 11. Définition d'une mission terminée

Une mission est terminée lorsque :

1. le périmètre demandé est entièrement traité, sans extension non autorisée ;
2. le positionnement, l'identité et les règles éditoriales sont respectés ;
3. les pages, données et composants ne sont pas inutilement dupliqués ;
4. les contrôles adaptés au risque passent sans erreur ;
5. aucun lien ou ancre interne ajouté n'est cassé ;
6. le responsive, l'accessibilité, le SEO et les performances sont contrôlés si l'interface a changé ;
7. Formspree, Cal.com, `noindex` et `robots.txt` restent conformes au périmètre ;
8. `index.html` et `source/index-production-reference.html` conservent leur empreinte ;
9. le diff ne contient que les fichiers autorisés ;
10. le dépôt est propre après le commit demandé ;
11. le compte rendu liste les changements, les tests, les limites, les validations restantes et le hash du commit.

En cas de conflit entre une mission et ce cadre, demander une décision explicite avant de modifier un invariant, un fichier protégé ou une règle de production.
