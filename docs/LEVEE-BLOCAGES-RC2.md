# Levée des blocages — RC2

Date : 22 juillet 2026

Cette revue distingue un blocage réel de publication, une condition de bascule et une réserve d’amélioration. Elle ne transforme pas une absence de validation humaine en validation implicite.

## Suivi des blocages RC1

| Blocage | Origine | Impact | Bloquant réel | Action | Responsable | Statut | Décision |
|---|---|---|---|---|---|---|---|
| Pages légales autonomes absentes | Architecture RC1 | Navigation et information incomplètes | Oui | Créer les deux routes et leurs liens permanents | Technique | Validé sous réserve | Structure levée ; données à compléter |
| Identité juridique et données réglementaires non attestées | Information externe absente | Risque légal et données structurées potentiellement inexactes | Oui | Fournir justificatifs et validation écrite | Assuromieux / conformité | Bloquant | Maintenu |
| Six pages produits en validation | Revue métier RC1 | Risque local aux routes | Non pour le noyau | Relecture page par page et indexation différée | Assuromieux / métier | Validé sous réserve | Reclassé par route |
| Six guides `review-required` | Workflow éditorial | Risque local aux ressources | Non pour le noyau | Conserver le statut et obtenir une signature humaine | Assuromieux / éditorial | Validé sous réserve | Reclassé par route |
| Formspree non confirmé et non testé réellement | Accès tiers absent | Réception non prouvée et traitement RGPD incomplet | Oui pour le formulaire public | Confirmer le compte et exécuter le protocole réel | Assuromieux / technique | Bloquant | Maintenu |
| Sitemap absent | Blocage d’indexation volontaire | Aucun impact en prévisualisation | Non | Générer un sitemap filtré dans la mission d’ouverture | SEO / technique | Validé sous réserve | Différé |
| Préproduction Netlify, Lighthouse, zoom et lecteur d’écran non exécutés | URL privée indisponible | Validation de plateforme incomplète | Oui avant publication, non pour RC2 local | Exécuter sur deploy preview autorisé | Technique | À fournir | Condition de bascule |
| Responsables, DNS et rollback non renseignés | Gouvernance externe | Bascule et retour arrière non maîtrisés | Oui avant publication | Renseigner accès, rôles et cible stable | Assuromieux / technique | À fournir | Condition de bascule |

## Reclassifications motivées

- Les six produits et six guides ne bloquent plus le lancement du noyau : le plan d’indexation les maintient en vague différée.
- L’absence de sitemap n’est pas une anomalie pendant une prévisualisation intégralement `noindex` et bloquée par `robots.txt`. Le sitemap devra être filtré au moment de la bascule autorisée.
- CSP, HSTS, cache, Permissions-Policy et optimisation de deux descriptions sont des réserves utiles, pas des motifs autonomes de NO GO.
- L’absence de photographie, d’analytics ou de gestionnaire de consentement n’est pas bloquante dans la version actuelle.

## Blocages restant réellement ouverts

1. validation et fourniture des informations juridiques, réglementaires et de médiation ;
2. validation des paramètres RGPD et des sous-traitants Formspree, Cal.com et Netlify ;
3. confirmation du compte Formspree et réussite d’un envoi réel autorisé ;
4. contrôle d’une préproduction privée sur l’infrastructure cible ;
5. autorisation explicite de la première vague, puis bascule sélective `noindex`/robots/sitemap dans une mission distincte.

## Conclusion

La RC2 lève les blocages structurels que le dépôt pouvait résoudre sans inventer d’informations. Elle est **techniquement admissible comme release candidate**, mais la publication reste soumise aux conditions externes ci-dessus.
