# Plan d'indexation — RC1

Le site reste intégralement bloqué en préproduction. Cette classification indique l'ordre futur ; elle n'autorise pas la levée actuelle de `noindex` ou du blocage `robots.txt`.

## Indexation immédiate après GO

Ces dix routes constituent le noyau marque, conseil et expertises déjà validées sous formulations prudentes :

- `/`
- `/audit-assurances-entreprise/`
- `/assurances-entreprises/`
- `/assurance-transport/`
- `/assurance-btp-decennale/`
- `/cabinet/`
- `/secteurs/`
- `/secteurs/transport-routier-marchandises/`
- `/secteurs/convoyage-vehicules/`
- `/secteurs/demenagement/`

Condition commune : données réglementaires, pages légales, formulaire réel, sitemap et checklist GO validés.

## Indexation différée

### Produits — après validation métier

- `/rc-professionnelle/`
- `/multirisque-professionnelle/`
- `/flotte-automobile/`
- `/sante-prevoyance-entreprise/`
- `/protection-dirigeant/`
- `/cyberassurance/`

### Parcours besoins — deuxième vague

- `/votre-besoin/`
- `/votre-besoin/auditer-mes-assurances/`
- `/votre-besoin/comparer-mes-assurances/`
- `/votre-besoin/creer-reprendre-entreprise/`
- `/votre-besoin/entreprise-evolue/`
- `/votre-besoin/assurer-flotte-vehicules/`
- `/votre-besoin/assurer-activite-transport/`

### Ressources — après revue éditoriale

- `/ressources/`
- `/ressources/guides/`
- `/ressources/assurance-entreprise/`
- `/ressources/transport-logistique/`
- `/ressources/btp/`
- `/ressources/dirigeants/`
- les six routes sous `/ressources/guides/`
- `/lexique/`

## Toujours non indexée

- `/404.html` avec `noindex, nofollow`.

## Sitemap

1. Générer un sitemap contenant uniquement les routes autorisées à l'indexation.
2. Exclure la 404 et toute route restant en validation métier.
3. Utiliser les canonicals HTTPS définitifs.
4. Déclarer le sitemap dans `robots.txt` seulement au GO.
5. Soumettre le sitemap à Search Console et surveiller les exclusions.

## Séquence de levée

1. Valider le domaine et les canonicals sur Netlify.
2. Vérifier les dix routes du noyau en préproduction.
3. Générer le sitemap noyau.
4. Retirer leur `noindex` dans une modification dédiée et revue.
5. Ouvrir `robots.txt` lors du même release contrôlé.
6. Vérifier les réponses HTTP et le HTML déployé avant soumission.
7. Ajouter les vagues différées seulement après leur validation documentaire.

Toute levée globale non sélective est interdite tant que les 26 routes différées n'ont pas toutes été validées.
