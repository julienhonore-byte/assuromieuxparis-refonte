# Mission 10 — Validation et décision de publication

Date : 22 juillet 2026

## Résultats techniques

| Contrôle | Résultat |
|---|---|
| `pnpm lint` | Vert |
| `pnpm check` | Vert, 100 fichiers, 0 erreur, 0 avertissement, 0 hint |
| `pnpm verify` | Vert |
| `pnpm build` | Vert, 39 pages |
| Liens internes | 39 pages, 0 lien ou asset cassé |
| Mode privé | 39 pages `noindex`, robots bloquant, header bloquant, aucun sitemap |
| Mode production simulé | 10 pages `index`, 29 pages `noindex`, sitemap de 10 URL |
| JSON-LD | Tous les blocs rendus analysables |
| Références protégées | Empreintes inchangées |

## Recette navigateur locale

| Scénario | Résultat |
|---|---|
| 320 px | Aucun débordement ; héros et formulaire utilisables |
| 768 px | Aucun débordement ; CTA visibles |
| 1280 × 720 | CTA RC à 718 px ; CTA Création/reprise à 716 px |
| 1440 px | Aucun débordement |
| Menu mobile | Ouverture, focus, Échap et restitution du focus conformes |
| Formulaire vide | Refusé, cinq messages par champ, focus premier champ |
| Correction d’un champ | `aria-invalid` et message retirés |
| Console | Aucun warning ni erreur pendant la recette |

## Limites du contrôle

- aucune URL Netlify privée ni accès n’est enregistré dans le dépôt ;
- aucun envoi Formspree réel n’a été autorisé ;
- aucune vérification de réception email ni de suppression n’est possible ;
- aucune attestation réglementaire ou validation juridique n’est jointe ;
- aucun test lecteur d’écran, Lighthouse distant ou header HTTP Netlify réel n’a été produit ;
- aucun déploiement, changement DNS ou ouverture d’indexation n’a été effectué.

## Points bloquants exhaustifs

### Identité et mentions légales

1. Fournir la dénomination juridique exacte, le nom commercial, la forme et le capital social si applicable.
2. Attester l’adresse du siège et valider sa graphie publique.
3. Fournir SIREN, SIRET, RCS avec ville d’immatriculation et justificatif officiel.
4. Fournir le numéro de TVA intracommunautaire ou confirmer formellement sa non-applicabilité.
5. Confirmer le téléphone et l’email autorisés à la publication.
6. Fournir le nom et la qualité du directeur de publication.
7. Fournir l’identité et les coordonnées légales de l’entité Netlify contractante/hébergeur applicable.
8. Confirmer le titulaire et le périmètre des droits sur logo, textes et visuels.

### Statut réglementé

9. Fournir une attestation ORIAS en cours de validité et confirmer le numéro `26003798`.
10. Confirmer la ou les catégories exactes d’intermédiation.
11. Valider l’autorité de contrôle et la formulation réglementaire, notamment la référence à l’article L521-2.II.b.
12. Fournir la procédure de réclamation, ses coordonnées et délais.
13. Fournir le médiateur compétent et ses coordonnées.
14. Valider les mentions RCP et garantie financière selon le statut réel et leur applicabilité.

### Données personnelles et prestataires

15. Identifier le responsable de traitement et ses coordonnées.
16. Identifier le DPO ou confirmer sa non-applicabilité.
17. Valider les finalités et bases juridiques du formulaire et du suivi commercial.
18. Valider les destinataires internes et externes.
19. Fixer les durées de conservation et la procédure de suppression.
20. Fournir l’adresse d’exercice des droits et le délai interne de traitement.
21. Documenter Formspree : compte contractant, rôle, sous-traitance, localisation, transferts, rétention et suppression.
22. Documenter Cal.com : compte contractant, données, sous-traitance, localisation, transferts et conservation.
23. Documenter Netlify : journaux, localisation, sous-traitants, transferts et conservation.
24. Fournir la date d’entrée en vigueur et le responsable de validation de la politique.

### Parcours de conversion et hébergement

25. Attester le propriétaire, le destinataire, le quota, les domaines autorisés et l’anti-spam du formulaire `mnjlwzlp`.
26. Autoriser puis réussir un envoi Formspree synthétique, confirmer sa réception et supprimer les données de test.
27. Attester le propriétaire et le paramétrage du lien Cal.com.
28. Fournir l’URL Netlify privée et son mode de contrôle d’accès.
29. Contrôler à distance HTTPS, headers, 404, cache, assets, robots, meta et parcours.
30. Exécuter Lighthouse mobile/desktop, zoom 200 % et un contrôle lecteur d’écran sur la candidate distante.

### Validation métier, SEO et gouvernance

31. Obtenir une validation de production signée des dix routes de première vague, notamment des pages sectorielles encore validées seulement pour préproduction.
32. Maintenir les produits et guides différés en `noindex` et obtenir une décision explicite avant chaque indexation future.
33. Nommer les responsables métier, conformité, technique, DNS et rollback.
34. Faire signer la checklist GO/NO GO et autoriser explicitement `PUBLIC_SITE_INDEXABLE=true` pour le seul contexte Production.
35. Créer et approuver le commit de release, puis contrôler le déploiement Netlify correspondant.

## Réserves non bloquantes à clore

1. Fournir un favicon officiel carré et confirmer ses droits.
2. Décider de l’archivage de l’ancien `public/og.jpg` non référencé.
3. Obtenir un logo vectoriel ou raster haute densité si disponible.
4. Soumettre le sitemap à Search Console et Bing seulement après ouverture et contrôle du domaine final.

## Signatures requises

| Rôle | Nom | Décision | Date |
|---|---|---|---|
| Direction / métier | À fournir | Non signée | — |
| Conformité / juridique | À fournir | Non signée | — |
| Responsable technique | À fournir | Non signée | — |
| Décideur GO / rollback | À fournir | Non signée | — |

## Conclusion impérative

# NO GO

La qualité technique locale ne compense pas l’absence de mentions légales complètes, de preuve Formspree, de recette distante et de signatures de production. Le mode privé doit rester actif.
