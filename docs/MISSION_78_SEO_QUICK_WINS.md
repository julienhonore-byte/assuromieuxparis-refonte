# Mission 78 — SEO Quick Wins

Date d’intervention : **15 août 2026**
Source unique de décision : **Mission 76**, données Search Console du **24 juillet au 7 août 2026**.

## Décision exécutive

Le cluster Flotte est le seul ensemble qui cumule plusieurs requêtes qualifiées entre les positions 11 et 30, deux guides déjà visibles autour de la position 21 et une première traction commerciale. L’intervention est donc volontairement limitée à la page Flotte et à ses deux guides.

L’échantillon ne couvre que quinze jours. Les changements restent réversibles, ciblés et sans création d’URL. Aucun title n’est modifié sur les pages déjà en première page avec un bon CTR.

## Opportunités retenues

| Catégorie | Requête ou page observée | Clics | Impressions | Position | Décision |
|---|---|---:|---:|---:|---|
| A — 4 à 10 | `assurance entreprise paris` | 3 | 10 | 7,30 | Maintien : CTR déjà élevé à 30 %, aucune modification précipitée. |
| A — 4 à 10 | `/secteurs/transport-routier-marchandises/` | 0 | 2 | 9,50 | Surveillance : échantillon insuffisant. |
| B — 11 à 20 | `sinistralité automobile` | 0 | non détaillé | 11,67 | Renforcement du guide Sinistralité. |
| B — 11 à 20 | `sinistralité flotte automobile` | 0 | 7 | 15,57 | Renforcement du guide Sinistralité. |
| B — 11 à 20 | `calcul fréquence sinistre automobile` | 0 | 9 | 16,56 | Réponse et formule rendues immédiatement repérables. |
| B — 11 à 20 | `audit contrat flotte` | 0 | 6 | 18,67 | FAQ ciblée ajoutée à la page commerciale Flotte. |
| B — 11 à 20 | `comparatif assurance flotte véhicules` | 0 | non détaillé | 19,00 | Snippet du guide Comparaison clarifié. |
| C — 21 à 30 | `comparer assurance flotte véhicules` | 0 | 12 | 24,67 | Snippet du guide Comparaison clarifié. |
| C — 21 à 30 | `comparer assurance flotte automobile` | 0 | 16 | 27,25 | Snippet du guide Comparaison clarifié. |

Les pages `/multirisque-professionnelle/` (position moyenne 28,50) et `/cyberassurance/` (23,00) ne sont pas modifiées : quatre et deux impressions ne suffisent pas à identifier une requête ni une action fiable.

## Modifications appliquées

### Guide « Assurance flotte automobile : les points à analyser avant de comparer »

- SEO title précisé : `Assurance flotte automobile : 10 points à comparer`.
- Meta description formulée comme une réponse à l’intention de comparaison.
- Date de mise à jour portée au 15 août 2026.
- Lien éditorial réciproque ajouté vers le guide Sinistralité via les ressources associées.
- H1, corps du guide, FAQ, canonical et URL conservés.

### Guide « Sinistralité flotte automobile »

- Intertitre rendu explicite sur le calcul du taux de fréquence.
- Formule simple ajoutée avec un exemple pédagogique et ses limites.
- FAQ ajoutée sur le calcul de la fréquence ; le balisage FAQPage est généré depuis le même contenu visible.
- Date de mise à jour portée au 15 août 2026.
- Title, meta description, H1, canonical et URL conservés.

### Page commerciale `/flotte-automobile/`

- FAQ ajoutée : « Que vérifie un audit de contrat flotte automobile ? ».
- Réponse limitée au périmètre réel de l’analyse et sans promesse de changement, d’économie ou d’acceptation.
- FAQPage automatiquement aligné sur le contenu visible.
- Title, meta description, H1, canonical, CTA, formulaire, maillage et contenu principal conservés.

## Analyse de cannibalisation Audit

La requête `audit assurance entreprise` a produit 45 impressions à la position moyenne 65,91. La page commerciale a reçu 34 impressions et le guide 16 ; leurs intentions restent distinctes :

- `/audit-assurances-entreprise/` : prestation, cadrage et prise de contact ;
- `/ressources/guides/comment-auditer-assurances-entreprise/` : méthode autonome et préparation documentaire.

Le chevauchement de diffusion est réel, mais aucune perte de position attribuable à une concurrence interne n’est démontrée. **Décision : aucune fusion, redirection, modification de canonical ou réécriture.** Le maillage réciproque existant suffit pour le prochain cycle de mesure.

## Contrôle CTR

- `assurance entreprise paris` : aucune action, car le CTR de 30 % est déjà satisfaisant en position 7,30.
- Requêtes Flotte en positions 11 à 30 : les CTR nuls justifient surtout une amélioration de classement. Le nouveau snippet du guide comparatif améliore néanmoins la correspondance entre requête et résultat sans promesse commerciale.
- Audit et RC en positions 50 à 80 : aucune optimisation de snippet, car leur faible CTR découle d’abord du classement.

## État des invariants

- aucune URL, redirection, canonical, robots ou règle d’indexation modifié ;
- sitemap et nombre d’URL indexables inchangés ;
- aucun CTA, formulaire, événement GA4 ou mécanisme de consentement modifié ;
- aucun composant, style, image ou diagramme modifié ;
- aucun nouveau contenu ou cluster créé ;
- page et guide Audit inchangés.

## Mesure après publication éventuelle

Comparer sur un cycle complet de 28 jours, URL et requête par URL et requête :

1. impressions et positions des cinq requêtes Flotte ciblées ;
2. CTR du guide Comparaison ;
3. position du guide Sinistralité sur `calcul fréquence sinistre automobile` ;
4. position de la page Flotte sur `audit contrat flotte` ;
5. stabilité de la séparation entre page Flotte, guide Comparaison et guide Sinistralité.

Seuil de décision recommandé : ne pas effectuer une seconde réécriture avant un cycle complet, sauf anomalie technique ou chute nette confirmée.

## Risques et limites

- seulement quinze jours de données Search Console ;
- volumes par requête faibles et positions encore volatiles ;
- certaines impressions peuvent concerner plusieurs URL du domaine ;
- l’effet d’un ajustement ne peut pas être isolé de la maturation naturelle du domaine ;
- la formule de fréquence est volontairement pédagogique et ne remplace pas la convention de calcul retenue par l’entreprise ou l’assureur.

## Contrôles techniques

- `pnpm verify` : réussi ; lint validé, Astro Check **0 erreur, 0 avertissement, 0 hint**, build et contrôles de publication réussis.
- `pnpm build` : réussi ; **47 pages générées**.
- Liens internes : **47 pages contrôlées, aucun lien cassé**.
- `git diff --check` : réussi.
- HTTP local : **200** pour la page Flotte, le guide Comparaison et le guide Sinistralité.
- Responsive : largeurs **390, 768, 1280 et 1440 px** contrôlées sur les trois routes ; aucun débordement horizontal.
- Images : aucune image chargée cassée ; l’illustration de méthode reste correctement différée par `loading="lazy"` et son asset répond en HTTP 200.
- HTML : un H1 par route ; canonicals auto-référents ; JSON-LD `Article`, `BreadcrumbList` et `FAQPage` valides sur les guides ; FAQPage valide sur la page Flotte.
- Build privé : `noindex, nofollow` conforme au mécanisme de prévisualisation. Les règles de production et `src/data/indexing.mjs` sont inchangés.
- Conversion : CTA, formulaire Formspree, identifiant GA4 `G-WWMFCQF196`, consentement et événements Analytics inchangés dans le diff.
- Référence protégée `source/index-production-reference.html` : empreinte attendue `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` intacte.
- Aucun commit, push ou déploiement effectué.
