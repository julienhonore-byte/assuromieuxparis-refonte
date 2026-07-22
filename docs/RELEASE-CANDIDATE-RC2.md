# Release Candidate RC2 — levée des blocages de publication

Date : 22 juillet 2026

Base : `3863c0e docs: audit release candidate rc1`

## Décision RC2

**GO SOUS CONDITIONS pour poursuivre vers une préproduction privée ; aucun GO de publication publique à ce stade.**

RC2 lève ce qui pouvait l’être dans le dépôt : pages légales autonomes, liens permanents, information du formulaire, reclassification précise des produits/guides et plan de première vague. Les conditions restantes nécessitent des données ou accès Assuromieux et ne peuvent être simulées.

## Changements

- création de `/mentions-legales/` et `/politique-confidentialite/` ;
- footer et formulaire reliés aux pages légales ;
- placeholders explicites sans invention ;
- six produits revus, avec santé/prévoyance maintenue en validation humaine ;
- six guides revus, frontmatter `review-required` conservé ;
- critères RC1 séparés entre blocages, conditions de bascule et réserves ;
- plan d’indexation et checklist GO/NO GO mis à jour.

## Périmètre généré

- 39 pages statiques : 37 pages RC1 + 2 pages légales ;
- aucune nouvelle page métier, aucun nouveau guide, aucune fonctionnalité ;
- aucun endpoint Formspree/Cal.com modifié ;
- aucun changement de `noindex`, `robots.txt` ou déploiement.

## Contrôles exécutés

- `pnpm install --frozen-lockfile` : réussi ;
- `pnpm verify` : réussi avec le runtime Node du workspace ;
- `pnpm build` : réussi, 39 pages ;
- liens internes : 0 cassé ;
- titles, descriptions, canonicals : 39 présents, 0 doublon ;
- H1 et `main` : 39 conformes ;
- JSON-LD : 0 erreur ;
- responsive des pages légales : 320, 768 et 1440 px, 0 débordement ;
- console navigateur : 0 avertissement/erreur ;
- Formspree et Cal.com : URL inchangées, aucune soumission ;
- `robots.txt` et `noindex` : inchangés.

Avertissement local : le premier `pnpm verify` ne trouvait pas `node` dans le `PATH`; la relance avec le runtime Node configuré du workspace a réussi. Ce point ne concerne pas le dépôt.

## Conditions impératives avant publication

1. remplacer/valider tous les `A fournir par Assuromieux` et attester les valeurs globales ;
2. faire valider le cadre réglementaire du courtage et la confidentialité ;
3. confirmer Formspree et réussir un envoi réel autorisé ;
4. exécuter la recette sur une préproduction Netlify privée ;
5. autoriser la première vague et réaliser dans un commit séparé le sitemap filtré et la levée sélective de l’indexation ;
6. renseigner responsables, DNS et rollback.

## Routes différées

Les six produits, les parcours besoins, le centre de ressources, le lexique et les six guides restent hors première vague. Les pages légales restent non indexées tant qu’elles portent des placeholders. La 404 reste toujours non indexée.

## Intégrité

`index.html` et `source/index-production-reference.html` doivent conserver l’empreinte SHA-256 `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0`.

## Interdictions maintenues

Aucun déploiement, aucune ouverture de robots, aucun retrait de `noindex`, aucune redirection production et aucun test Formspree réel sans autorisation explicite.
