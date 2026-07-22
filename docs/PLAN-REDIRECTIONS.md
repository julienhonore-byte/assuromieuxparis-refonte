# Plan de redirections — préparation RC1

Ce plan ne crée et n'active aucune redirection. Une redirection ne sera ajoutée qu'après validation de l'ancienne URL par un crawl de production, les journaux ou Search Console.

## Sources obligatoires

À fournir par Assuromieux : export des URL actuelles, sitemap historique, principales pages Search Console, backlinks connus et éventuelles campagnes utilisant des URL anciennes.

Le fichier immuable `source/index-production-reference.html` contient des candidats historiques. Ils ne sont pas considérés comme des URL actives sans contrôle externe.

## Candidats observés dans la référence

| Ancienne URL candidate | Destination proposée | État | Justification |
|---|---|---|---|
| `/index.html` | `/` | À confirmer | Normaliser l'accueil |
| `/assurance-transport.html` | `/assurance-transport/` | À confirmer | Même intention |
| `/flotte-auto.html` | `/flotte-automobile/` | À confirmer | Même produit |
| `/rc-pro.html` | `/rc-professionnelle/` | À confirmer | Même produit |
| `/sante-entreprise.html` | `/sante-prevoyance-entreprise/` | À confirmer | Destination la plus proche, contenu à valider |
| `/contact.html` | `/#contact` | À confirmer | Aucun route Contact autonome dans RC1 |
| `/tpm.html` | À fournir par Assuromieux | Bloqué | Acronyme/ancienne intention non fiable ; problème historique TMP/TPM |
| `/index.html#process` | `/#methode` ou section équivalente | À confirmer | L'ancre finale doit exister avant redirection |

## Règles

- Utiliser 301 uniquement pour un remplacement permanent à intention équivalente.
- Ne pas rediriger toutes les anciennes URL vers l'accueil.
- Préserver query strings utiles et éviter les chaînes de redirection.
- Ne jamais rediriger une 404 sans destination sémantiquement proche.
- Tester chaque origine et destination sur Netlify avant production.
- Conserver le plan daté, le responsable et la preuve de l'ancienne URL.

## Format Netlify futur

Les règles pourront être ajoutées à `netlify.toml` ou `_redirects` après validation humaine. Aucune règle n'est activée dans RC1.

## Recette

Pour chaque ligne validée : réponse 301, un seul saut, destination 200, canonical de destination cohérent, absence de boucle, maintien des paramètres nécessaires et mise à jour des liens internes pour pointer directement vers la nouvelle URL.
