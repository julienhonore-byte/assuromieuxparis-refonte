# Mission 90 — Technical SEO P0 : indexation et sitemap

Date du contrôle : 20 août 2026

Périmètre : code source, build statique de production et production publique avant correction.
État Git de départ : `HEAD = origin/main = 4ce3ca117bb2ad01861a142946177780714606e1` ; fichiers suivis propres ; fichiers non suivis antérieurs préservés.

## Synthèse exécutive

L'anomalie signalée est confirmée. Quatorze pages publiques utiles étaient générées en HTTP 200 avec un canonical auto-référent, mais recevaient `noindex, nofollow` en production et étaient absentes du sitemap. La cause unique était leur absence de la liste centrale `firstWaveIndexablePaths` dans `src/data/indexing.mjs`. Cette liste pilote simultanément la meta robots et la génération du sitemap.

La correction ajoute uniquement ces quatorze routes à cette source de vérité. Le sitemap passe de 27 à 41 URL. Les 47 pages générées ne doivent pas toutes être indexées : six exclusions restent volontaires et cohérentes (404, quatre pages juridiques et un guide encore `review-required`). Aucun `lastmod` n'est ajouté, faute de date fiable et homogène pour toutes les routes ; une date artificielle serait moins correcte que son absence.

## Cause racine et correction

- Production avant correction : les hubs `/ressources/`, `/ressources/guides/`, les quatre catégories de ressources, `/lexique/` et tout l'univers `/votre-besoin/` répondaient en HTTP 200 mais affichaient `noindex, nofollow`.
- En-tête HTTP : aucun `X-Robots-Tag` contradictoire détecté.
- `public/robots.txt` : correct en production (`Allow: /`) avec déclaration du sitemap public.
- Canonicals : auto-référents et cohérents ; aucune correction nécessaire.
- Cause : `BaseLayout.astro` autorise l'indexation uniquement lorsque la route appartient à `firstWaveIndexablePaths`; `prepare-release-output.mjs` utilise la même liste pour le sitemap.
- Correction : ajout des quatorze routes validées dans `src/data/indexing.mjs`, sans modifier le layout, le générateur de sitemap, les contenus ou les métadonnées.

## Différence entre 47 pages générées et 41 URL sitemap

| Groupe | Nombre | Décision |
|---|---:|---|
| Pages indexables validées | 41 | `index, follow`, présentes dans le sitemap |
| Page 404 | 1 | `noindex, nofollow`, hors sitemap |
| Pages juridiques (`mentions-legales`, confidentialité, cookies, CGU) | 4 | `noindex, nofollow`, hors sitemap |
| Guide PME `review-required` | 1 | `noindex, nofollow`, hors sitemap jusqu'à validation documentaire |
| **Total généré** | **47** | **41 indexables + 6 exclusions volontaires** |

## Routes ouvertes par la correction

1. `/ressources/`
2. `/ressources/guides/`
3. `/ressources/assurance-entreprise/`
4. `/ressources/transport-logistique/`
5. `/ressources/btp/`
6. `/ressources/dirigeants/`
7. `/lexique/`
8. `/votre-besoin/`
9. `/votre-besoin/auditer-mes-assurances/`
10. `/votre-besoin/comparer-mes-assurances/`
11. `/votre-besoin/assurer-activite-transport/`
12. `/votre-besoin/assurer-flotte-vehicules/`
13. `/votre-besoin/creer-reprendre-entreprise/`
14. `/votre-besoin/entreprise-evolue/`

## Inventaire final des 47 routes

Toutes les lignes ont été contrôlées dans le build produit avec `PUBLIC_SITE_INDEXABLE=true` et `CONTEXT=production`. Le statut HTTP local est 200 pour les 47 fichiers générés, y compris la page 404 consultée directement comme fichier statique de recette ; Netlify continuera naturellement à la servir comme réponse 404 lorsqu'une URL inexistante est demandée.

| URL | Robots final | Sitemap | Canonical | Décision |
|---|---|---|---|---|
| `/` | index, follow | Oui | auto-référent | INDEX |
| `/404/` | noindex, nofollow | Non | `/404` | NOINDEX |
| `/assurance-btp-decennale/` | index, follow | Oui | auto-référent | INDEX |
| `/assurance-transport/` | index, follow | Oui | auto-référent | INDEX |
| `/assurances-entreprises/` | index, follow | Oui | auto-référent | INDEX |
| `/audit-assurances-entreprise/` | index, follow | Oui | auto-référent | INDEX |
| `/cabinet/` | index, follow | Oui | auto-référent | INDEX |
| `/conditions-generales-utilisation/` | noindex, nofollow | Non | auto-référent | NOINDEX |
| `/cyberassurance/` | index, follow | Oui | auto-référent | INDEX |
| `/flotte-automobile/` | index, follow | Oui | auto-référent | INDEX |
| `/jules-honore/` | index, follow | Oui | auto-référent | INDEX |
| `/lexique/` | index, follow | Oui | auto-référent | INDEX |
| `/mentions-legales/` | noindex, nofollow | Non | auto-référent | NOINDEX |
| `/multirisque-professionnelle/` | index, follow | Oui | auto-référent | INDEX |
| `/politique-confidentialite/` | noindex, nofollow | Non | auto-référent | NOINDEX |
| `/politique-cookies/` | noindex, nofollow | Non | auto-référent | NOINDEX |
| `/politique-editoriale/` | index, follow | Oui | auto-référent | INDEX |
| `/protection-dirigeant/` | index, follow | Oui | auto-référent | INDEX |
| `/rc-professionnelle/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/assurance-entreprise/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/btp/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/dirigeants/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/assurance-decennale-coherence-activites-attestation/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/comment-auditer-assurances-entreprise/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/flotte-automobile-points-analyser-avant-comparer/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/mutuelle-entreprise-prevoyance-collective-differences/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/quelles-assurances-prevoir-pme/` | noindex, nofollow | Non | auto-référent | NOINDEX — `review-required` |
| `/ressources/guides/rc-professionnelle-obligatoire-qui-est-concerne/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/rc-professionnelle-rc-exploitation-differences/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/responsabilite-transporteur-assurance-marchandises-differences/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/guides/sinistralite-flotte-automobile-indicateurs-prevention/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/methodes/audit-assurance-transport-optimisation-garanties/` | index, follow | Oui | auto-référent | INDEX |
| `/ressources/transport-logistique/` | index, follow | Oui | auto-référent | INDEX |
| `/sante-prevoyance-entreprise/` | index, follow | Oui | auto-référent | INDEX |
| `/secteurs/` | index, follow | Oui | auto-référent | INDEX |
| `/secteurs/convoyage-vehicules/` | index, follow | Oui | auto-référent | INDEX |
| `/secteurs/demenagement/` | index, follow | Oui | auto-référent | INDEX |
| `/secteurs/transport-routier-marchandises/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/assurer-activite-transport/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/assurer-flotte-vehicules/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/auditer-mes-assurances/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/comparer-mes-assurances/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/creer-reprendre-entreprise/` | index, follow | Oui | auto-référent | INDEX |
| `/votre-besoin/entreprise-evolue/` | index, follow | Oui | auto-référent | INDEX |

## Contrôles exécutés

- `pnpm verify` en configuration de production : réussi.
- Astro Check : 117 fichiers, 0 erreur, 0 avertissement, 0 hint.
- Build Astro : réussi, 47 pages générées.
- Contrôle des liens : 47 pages HTML, aucun lien interne cassé.
- Contrôle de sortie production : réussi.
- Sitemap généré : 41 URL uniques, toutes indexables et approuvées.
- Meta robots : 41 pages `index, follow`; 6 pages `noindex, nofollow`.
- HTTP local : 47/47 routes générées accessibles, aucun échec.
- Canonicals : auto-référents sur toutes les routes indexables.
- `git diff --check` : à exécuter dans la recette finale après création de ce rapport.
- Références de production protégées : inchangées.

## Limites et suite de déploiement

La production publique reste inchangée tant que cette mission n'est pas validée, commitée et déployée. Après déploiement, il faudra contrôler les 14 URL ouvertes, vérifier le sitemap public à 41 URL, le soumettre de nouveau dans Search Console si nécessaire, puis demander prioritairement l'inspection de `/ressources/`, `/ressources/guides/`, `/lexique/` et `/votre-besoin/`.

Le guide `/ressources/guides/quelles-assurances-prevoir-pme/` ne doit être ouvert qu'après passage documentaire de `review-required` à `published`, avec `reviewedBy` et `reviewDate` conformes au workflow du projet.
