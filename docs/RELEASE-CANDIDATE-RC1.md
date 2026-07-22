# Release Candidate RC1 — audit global de préproduction

Date : 22 juillet 2026

Branche contrôlée : `main`

Base avant mission : `a654539 fix: validate creation and takeover journey`

## Décision RC1

**NO GO pour la production.**

Cette décision ne remet pas en cause la qualité technique du socle : l'application s'installe, se vérifie et se compile correctement. Elle signifie que les prérequis de publication n'ont pas encore été validés par Assuromieux : cadre légal/réglementaire, contenus métier, formulaire réel, indexation et exploitation Netlify.

## Périmètre contrôlé

- 37 routes statiques.
- 37 titles, descriptions, canonicals, H1 et meta robots.
- Liens internes et pages orphelines.
- Données structurées, Open Graph et Twitter Cards.
- Formulaire Formspree et parcours Cal.com sans soumission.
- Huit gabarits à sept largeurs, soit 56 contrôles responsive.
- Menu mobile au clavier.
- Assets, CSS, JavaScript, dépendances et en-têtes Netlify.
- Documents de validation métier et réglementaire existants.

## Résultats techniques

| Indicateur | Résultat |
|---|---|
| Installation figée | Réussie |
| `pnpm verify` | Réussi |
| `pnpm build` | Réussi |
| Pages générées | 37 |
| Liens internes cassés | 0 |
| Titles dupliqués | 0 |
| Descriptions dupliquées | 0 |
| Canonicals dupliqués | 0 |
| H1 incorrects | 0 |
| JSON-LD invalide | 0 |
| IDs dupliqués | 0 |
| Débordements sur l'échantillon responsive | 0 / 56 |
| Avertissements console | 0 |

## Routes

- **Prêtes pour publication immédiate : 0**, à cause du blocage réglementaire transversal.
- **En validation métier : 12** — six produits et six guides.
- **En validation réglementaire : 25** — toutes les autres routes.
- **Exclues : 0** ; la 404 reste naturellement non indexée.

Après levée des blocages transversaux, dix routes peuvent former le noyau d'indexation initial défini dans `PLAN-INDEXATION.md`.

## Points satisfaisants

- Architecture Astro statique et Netlify cohérente.
- URL propres et canonicals uniques.
- Maillage interne dense sans lien cassé.
- Responsive robuste sur les gabarits testés.
- Navigation mobile accessible au clavier.
- Formulaire techniquement bien structuré et préremplissage fonctionnel.
- Aucune dépendance lourde, police distante, tracker ou cookie publicitaire.
- Identité visuelle et positionnement conservés.
- Références historiques inchangées.

## Blocages

1. Mentions légales et politique de confidentialité autonomes absentes.
2. Identité juridique, ORIAS, SIREN/SIRET/RCS, adresse, statut et autres mentions non attestés.
3. Six pages produit avec validations métier ouvertes.
4. Six guides encore `review-required`.
5. Compte/destination Formspree non confirmés et aucun envoi réel testé.
6. Sitemap absent et stratégie d'indexation non implémentée — volontairement.
7. Préproduction Netlify, Lighthouse, zoom 200 % et lecteur d'écran non exécutés.
8. Responsables de production, DNS et rollback non renseignés.

## Réserves non bloquantes après résolution des points ci-dessus

- Ajouter/tester CSP, Permissions-Policy, HSTS et cache.
- Contrôler le canonical et la réponse 404 sur Netlify.
- Éventuellement raccourcir deux meta descriptions.
- Améliorer les erreurs de formulaire par champ si la recette d'assistance le demande.
- Ajouter une indication explicite sur les ouvertures externes.

## Modifications de cette mission

Seuls les quinze documents RC1 demandés ont été créés. Aucune page Astro, aucun fichier de production, aucune référence protégée, aucun endpoint Formspree/Cal.com et aucune règle d'indexation n'ont été modifiés.

## Commandes de contrôle

```sh
pnpm install --frozen-lockfile
pnpm verify
pnpm build
shasum -a 256 source/index-production-reference.html index.html
pnpm dev --host 127.0.0.1 --port 4321
```

Le premier appel à `pnpm verify` dans le shell Codex ne trouvait pas `node`. La commande a été relancée avec le runtime Node configuré du workspace et a réussi ; ce point est un avertissement d'environnement local, pas une erreur du dépôt.

## Intégrité

Au contrôle du 22 juillet 2026 :

- `source/index-production-reference.html` : SHA-256 `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0`.
- `index.html` : même SHA-256.
- Empreinte conforme à `docs/REFERENCE-PRODUCTION.md`.

## Prochaine mission recommandée

**Mission 9 — levée des blocages de publication** : collecter et valider les informations légales/réglementaires, créer les deux pages légales, clore les validations produits/guides, puis exécuter une vraie recette Formspree sur une préproduction Netlify privée. La levée de l'indexation doit rester une mission séparée et explicitement autorisée.
