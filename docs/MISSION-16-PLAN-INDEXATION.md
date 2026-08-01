# Mission 16 — Plan d’indexation

Date : 24 juillet 2026

Origine canonique : `https://www.assuromieuxparis.com/`

## Règle actuelle

Le site génère 43 routes HTML. En production, dix routes sont autorisées à l’indexation et intégrées au sitemap. Les trente-trois autres routes restent accessibles mais portent `noindex, nofollow` et sont absentes du sitemap.

L’ouverture reste contrôlée à deux niveaux :

1. `PUBLIC_SITE_INDEXABLE=true` et `CONTEXT=production` ;
2. présence explicite de la route dans `firstWaveIndexablePaths`.

La priorité ci-dessous est une priorité de pilotage, pas une valeur `priority` XML. Le sitemap actuel ne contient volontairement aucune balise de priorité.

## Inventaire des 43 routes

| Route | État actuel | Sitemap actuel | Priorité | Décision / vague | Justification |
|---|---|---:|---:|---|---|
| `/` | index | Oui | P1 | Vague 1 — ouverte | Page d’entrée de marque et commerciale |
| `/404.html` | noindex | Non | P4 | Jamais indexer | Page technique |
| `/assurance-btp-decennale/` | index | Oui | P1 | Vague 1 — ouverte | Expertise sectorielle validée |
| `/assurance-transport/` | index | Oui | P1 | Vague 1 — ouverte | Hub sectoriel principal |
| `/assurances-entreprises/` | index | Oui | P1 | Vague 1 — ouverte | Page pilier transverse |
| `/audit-assurances-entreprise/` | index | Oui | P1 | Vague 1 — ouverte | Point d’entrée commercial prioritaire |
| `/cabinet/` | index | Oui | P1 | Vague 1 — ouverte | Confiance, méthode et marque |
| `/conditions-generales-utilisation/` | noindex | Non | P4 | Rester noindex | Information juridique utile, sans objectif d’acquisition |
| `/cyberassurance/` | noindex | Non | P2 | Vague 2 | Intention produit propre ; validation métier préalable |
| `/flotte-automobile/` | noindex | Non | P2 | Vague 2 | Intention produit forte ; cohérence à confirmer avec transport |
| `/jules-honore/` | noindex | Non | P2 | Vague 2 | Signal d’autorité et d’identité, après contrôle final |
| `/lexique/` | noindex | Non | P3 | Vague 3 | À ouvrir lorsque la gouvernance de mise à jour est active |
| `/mentions-legales/` | noindex | Non | P4 | Rester noindex | Obligatoire pour la confiance, faible intention de recherche |
| `/multirisque-professionnelle/` | noindex | Non | P2 | Vague 2 | Intention produit distincte ; validation métier préalable |
| `/politique-confidentialite/` | noindex | Non | P4 | Rester noindex | Page de conformité, sans objectif d’acquisition |
| `/politique-cookies/` | noindex | Non | P4 | Rester noindex | Page de conformité, sans objectif d’acquisition |
| `/politique-editoriale/` | noindex | Non | P2 | Vague 2 | Renforce EEAT et gouvernance des contenus |
| `/protection-dirigeant/` | noindex | Non | P2 | Vague 2 | Intention produit propre ; validation métier préalable |
| `/rc-professionnelle/` | noindex | Non | P2 | Vague 2 | Intention commerciale prioritaire |
| `/ressources/assurance-entreprise/` | noindex | Non | P3 | Vague 3 | Hub utile après publication d’un corpus validé |
| `/ressources/btp/` | noindex | Non | P3 | Vague 3 | Hub utile après validation des ressources BTP |
| `/ressources/dirigeants/` | noindex | Non | P3 | Vague 3 | Hub à ouvrir avec une profondeur éditoriale suffisante |
| `/ressources/guides/assurance-decennale-coherence-activites-attestation/` | noindex | Non | P3 | Vague 3 | Guide encore `review-required` |
| `/ressources/guides/comment-auditer-assurances-entreprise/` | noindex | Non | P3 | Vague 3 | Guide encore `review-required` ; surveiller le chevauchement avec la page Audit |
| `/ressources/guides/flotte-automobile-points-analyser-avant-comparer/` | noindex | Non | P2 | Vague 2 | Guide publié et relu ; fort soutien à la page Flotte |
| `/ressources/guides/` | noindex | Non | P3 | Vague 3 | À ouvrir lorsque plusieurs guides sont publiés |
| `/ressources/guides/quelles-assurances-prevoir-pme/` | noindex | Non | P3 | Vague 3 | Guide encore `review-required` ; frontière avec la page pilier à contrôler |
| `/ressources/guides/rc-professionnelle-rc-exploitation-differences/` | noindex | Non | P3 | Vague 3 | Guide encore `review-required` |
| `/ressources/guides/responsabilite-transporteur-assurance-marchandises-differences/` | noindex | Non | P3 | Vague 3 | Guide encore `review-required` ; validation transport requise |
| `/ressources/` | noindex | Non | P3 | Vague 3 | Centre éditorial à ouvrir avec ses contenus, pas seul |
| `/ressources/transport-logistique/` | noindex | Non | P3 | Vague 3 | Hub à ouvrir avec les guides transport validés |
| `/sante-prevoyance-entreprise/` | noindex | Non | P2 | Vague 2 | Intention produit propre ; relecture spécialisée préalable |
| `/secteurs/convoyage-vehicules/` | index | Oui | P1 | Vague 1 — ouverte | Verticale transport validée avec prudence |
| `/secteurs/demenagement/` | index | Oui | P1 | Vague 1 — ouverte | Verticale transport validée avec prudence |
| `/secteurs/` | index | Oui | P1 | Vague 1 — ouverte | Hub distribuant Transport et BTP |
| `/secteurs/transport-routier-marchandises/` | index | Oui | P1 | Vague 1 — ouverte | Verticale sectorielle prioritaire |
| `/votre-besoin/assurer-activite-transport/` | noindex | Non | P3 | Vague 3 | Ouvrir après données sur la demande et contrôle de cannibalisation |
| `/votre-besoin/assurer-flotte-vehicules/` | noindex | Non | P3 | Vague 3 | Chevauchement potentiel avec Flotte et Transport |
| `/votre-besoin/auditer-mes-assurances/` | noindex | Non | P3 | Vague 3 | Chevauchement potentiel avec la page Audit |
| `/votre-besoin/comparer-mes-assurances/` | noindex | Non | P3 | Vague 3 | À ouvrir seulement si l’intention se distingue de l’Audit |
| `/votre-besoin/creer-reprendre-entreprise/` | noindex | Non | P3 | Vague 3 | Validation prudente acquise ; potentiel à confirmer par les données |
| `/votre-besoin/entreprise-evolue/` | noindex | Non | P3 | Vague 3 | Intention utile mais proche de l’Audit |
| `/votre-besoin/` | noindex | Non | P3 | Vague 3 | Hub à ouvrir avec une sélection de parcours confirmés |

## Vague 1 — maintenir et mesurer

Routes : les dix URL déjà indexables.

Actions :

1. corriger le Primary domain Netlify vers `www` ;
2. soumettre le sitemap de dix URL ;
3. inspecter chaque URL dans Search Console ;
4. suivre l’indexation, les impressions, les requêtes et les canonical choisis ;
5. ne modifier aucun title ou contenu pendant la période d’état zéro, sauf anomalie majeure.

Critère de sortie : domaine cohérent, sitemap lu sans erreur, aucune URL avec canonical alternatif inattendu, quatre semaines de données exploitables.

## Vague 2 — produits et autorité

Routes candidates :

- `/rc-professionnelle/` ;
- `/multirisque-professionnelle/` ;
- `/flotte-automobile/` ;
- `/cyberassurance/` ;
- `/sante-prevoyance-entreprise/` ;
- `/protection-dirigeant/` ;
- `/jules-honore/` ;
- `/politique-editoriale/` ;
- `/ressources/guides/flotte-automobile-points-analyser-avant-comparer/`.

Conditions avant ouverture :

1. validation métier et réglementaire documentée pour chaque produit ;
2. aucun conflit de title, H1, intention ou canonical ;
3. maillage entrant depuis une page déjà indexée ;
4. guide Flotte relié clairement à la page produit sans la remplacer ;
5. ajout explicite aux routes approuvées et au sitemap ;
6. recette de production et inspection Search Console.

Ordre recommandé : RC professionnelle, Flotte, Multirisque, Cyber, Jules HONORE, Politique éditoriale, guide Flotte, puis Santé/prévoyance et Protection du dirigeant après relecture spécialisée.

## Vague 3 — centre de ressources et parcours

Périmètre :

- hubs et catégories Ressources ;
- cinq guides encore `review-required` ;
- Lexique ;
- hub Votre besoin et ses six parcours.

Conditions :

1. guides relus, datés et passés au statut publié ;
2. catégories disposant de plusieurs contenus réellement utiles ;
3. frontière de recherche vérifiée avec les pages commerciales ;
4. données Search Console montrant une intention ou une opportunité ;
5. capacité de maintenance et de revue éditoriale confirmée ;
6. ouverture progressive, jamais en bloc par défaut.

## Routes à conserver hors index

- `/404.html` ;
- `/mentions-legales/` ;
- `/politique-confidentialite/` ;
- `/politique-cookies/` ;
- `/conditions-generales-utilisation/`.

Ces pages doivent rester accessibles, liées lorsque nécessaire et techniquement correctes, mais leur présence dans l’index ou le sitemap n’apporte pas de valeur d’acquisition.

## Contrôle à chaque ouverture

- décision humaine documentée ;
- `PUBLIC_SITE_INDEXABLE=true` uniquement en production ;
- route ajoutée explicitement à la liste approuvée ;
- sitemap régénéré sans URL `noindex` ;
- réponse 200 sur l’hôte `www` ;
- canonical auto-référent ;
- un H1, title et description uniques ;
- maillage entrant et sortant cohérent ;
- JSON-LD conforme au contenu visible ;
- aucune cannibalisation majeure ;
- inspection en direct réussie avant demande d’indexation.
