# Référence de production immuable

Contrôle effectué le 21 juillet 2026 à 12:35:45 (UTC−06:00).

| Propriété | Valeur |
|---|---|
| Chemin relatif | `source/index-production-reference.html` |
| Chemin absolu contrôlé | `/Users/julienhonore/Library/Mobile Documents/com~apple~CloudDocs/Assuromieux/assuromieuxparis-refonte/source/index-production-reference.html` |
| Taille | 59 244 octets |
| SHA-256 | `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` |

## Règle d'intégrité

Ce fichier est la référence visuelle et technique de la production historique. Il est **strictement interdit de le modifier, le reformater, le déplacer, le renommer, le supprimer ou de l'écraser**.

Toute extraction doit être réalisée en lecture seule vers un nouveau fichier. Toute évolution doit être développée dans le socle Astro. L'actuel `index.html` reste lui aussi en place jusqu'à la validation explicite de la nouvelle page d'accueil.

## Commandes de contrôle

```sh
stat -f '%z' source/index-production-reference.html
shasum -a 256 source/index-production-reference.html
```

Le contrôle est valide uniquement si la taille et l'empreinte correspondent exactement aux valeurs ci-dessus.
