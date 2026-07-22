# Mission 09 — Plan d'actions

Date : 22 juillet 2026  
Principe : aucune action de ce plan n'est exécutée par la Mission 09

## Règles de priorisation

- **Priorité 1** : impact fort, effort faible.
- **Priorité 2** : impact fort, effort moyen.
- **Priorité 3** : amélioration utile.
- **Priorité 4** : optionnelle ou à décider après données réelles.

Les priorités ne valent pas autorisation de modifier le site. Chaque action doit recevoir un périmètre explicite et préserver les URL, l'architecture, `noindex` et les références protégées tant que la production n'est pas validée.

## Priorité 1 — Impact fort / effort faible

| ID | Action | Impact attendu | Dépendances | Critère de validation |
|---|---|---|---|---|
| P1-01 | Fournir et attester identité juridique, adresse, SIREN/SIRET/RCS, ORIAS, catégorie, médiation, directeur de publication et hébergeur | Supprime le principal déficit de confiance et le blocage légal | Assuromieux, conformité, justificatifs officiels | Chaque valeur est datée, sourcée et approuvée ; aucun placeholder légal restant |
| P1-02 | Aligner `site.ts`, footer, topbar, pages légales et JSON-LD sur les seules données attestées | Évite une divergence visible/structurée | P1-01 | Les cinq emplacements présentent exactement les mêmes valeurs validées |
| P1-03 | Exécuter un test Formspree réel autorisé et documenter Cal.com | Prouve la réception et sécurise le parcours principal | Propriétaire Formspree, politique validée, URL privée protégée | Succès, erreur, notification, suppression des données test et lien Cal.com contrôlés |
| P1-04 | Compacter les héros internes pour rendre le CTA spécifique visible à 1280 × 720 | Réduit le délai avant action sur produits, secteurs et besoins | Validation design, aucun changement d'identité | CTA spécifique entièrement visible sans scroll sur les pages prioritaires, sans débordement 320–1440 px |
| P1-05 | Expliquer près du CTA et du formulaire ce que comprend le premier échange et ce qui suit | Réduit l'ambiguïté de « l'audit gratuit » | Validation du processus réel et du délai opérationnel | Trois informations vérifiées : objet du premier échange, suite, délai seulement s'il est tenable |
| P1-06 | Ajouter un favicon officiel carré | Renforce la finition et la reconnaissance de marque | Actif fourni ou validé, droits confirmés | Favicon visible, non déformé, présent dans le head et réponse 200 |

### Condition de sortie P1

Le site ne contient plus d'information provisoire visible, les données structurées sont attestées, le formulaire est éprouvé et l'action spécifique est visible dès le premier écran des pages commerciales clés.

## Priorité 2 — Impact fort / effort moyen

| ID | Action | Impact attendu | Dépendances | Critère de validation |
|---|---|---|---|---|
| P2-01 | Produire un extrait réel, anonymisé et autorisé d'un livrable d'audit | Rend la valeur du conseil tangible | Document réel, anonymisation, autorisation, validation métier | Aucune donnée client ; document représentatif ; limites expliquées |
| P2-02 | Publier une première preuve authentique : cas, témoignage ou méthode documentée | Augmente crédibilité et différenciation | Preuve réelle, accord écrit, contexte | Source, date, périmètre et limites conservés ; aucune extrapolation |
| P2-03 | Raccourcir et rehiérarchiser Convoyage, TRM et Déménagement | Accélère la décision sans perdre la précision métier | Relecture Transport et conformité | Résumé décisionnel tôt ; aucune promesse ajoutée ; baisse mesurable de la longueur ou des sections |
| P2-04 | Faire valider humainement les six produits et les six guides | Permet leur future indexation et renforce l'expertise | Référents métier/juridique | Décision, nom/rôle du relecteur et date consignés ; statuts mis à jour selon validation |
| P2-05 | Évaluer l'obligation du téléphone et la préférence de contact | Réduit la friction du formulaire | Processus commercial réel, données ou test utilisateur | Décision documentée ; qualité des demandes préservée ; aucun champ ajouté par défaut |
| P2-06 | Tester une prise de rendez-vous directe comme action secondaire | Capte les prospects prêts sans forcer un envoi préalable | Paramètres Cal.com et confidentialité validés | Test mesuré, pas de concurrence avec le CTA principal, pas d'embed lourd |
| P2-07 | Préparer la bascule SEO sélective : sitemap filtré, robots, headers, meta et Search Console | Rend la première vague indexable sans exposer les routes différées | P1, validations métier, GO explicite | Liste des URL identique au plan ; aucun verrou contradictoire ; pages différées toujours `noindex` |
| P2-08 | Réaliser la recette distante complète Netlify | Valide l'environnement réellement publié | URL privée et accès | HTTPS, headers, 404, cache, responsive, clavier, zoom, Lighthouse et liens conformes |

### Condition de sortie P2

La proposition de valeur possède au moins une preuve vérifiée, les contenus prioritaires sont signés, les pages longues offrent une synthèse rapide et la future ouverture SEO est testée de bout en bout.

## Priorité 3 — Améliorations utiles

| ID | Action | Bénéfice | Dépendances | Critère de validation |
|---|---|---|---|---|
| P3-01 | Raccourcir les titles les plus longs, surtout les guides à 100–107 caractères | Réduit le risque de troncature | Revue SEO sans changement d'URL | Title unique, intention conservée, aperçu SERP relu |
| P3-02 | Ajouter `og:image:width`, `og:image:height` et `og:image:alt` | Améliore la robustesse du partage | Textes alternatifs validés | Balises présentes et cohérentes avec les images 1200 × 630 |
| P3-03 | Décider du statut de `og.jpg` et d'une image 404 | Réduit les actifs ambigus | Direction artistique | Asset soit référencé, soit archivé dans une mission dédiée |
| P3-04 | Obtenir un logo vectoriel ou une version raster 2× | Améliore la netteté haute densité | Source de marque et droits | Dimensions, variantes et fallback documentés |
| P3-05 | Ajouter erreurs de formulaire par champ et `aria-invalid` | Améliore accessibilité et correction | Recette clavier/lecteur d'écran | Message lié au champ, focus cohérent, statut global conservé |
| P3-06 | Corriger le repli sans JavaScript du formulaire | Évite les envois incomplets avec `novalidate` | Conservation du POST Formspree | Validation native active ou repli explicitement testé sans JS |
| P3-07 | Centraliser `.faq-layout` utilisée dans 21 pages | Réduit la duplication CSS | Mission de maintenance | Une seule règle partagée, rendu inchangé, build vert |
| P3-08 | Qualifier les quatre composants orphelins | Réduit la dette de compréhension | Confirmation design system | Chaque composant est réutilisé, archivé ou supprimé dans un commit dédié |
| P3-09 | Tester annonces de nouvel onglet et `main { overflow: clip; }` | Ferme les réserves accessibilité | Test lecteur d'écran et clavier | Cal.com/ORIAS annoncés ; aucun focus rogné |
| P3-10 | Réduire le footer mobile après finalisation légale | Diminue la longueur de fin de page | P1-01 et validation conformité | Liens prioritaires accessibles, mentions obligatoires intactes |

## Priorité 4 — Optionnelles

| ID | Action | Condition préalable | Critère de décision |
|---|---|---|---|
| P4-01 | Installer une mesure d'audience respectueuse du consentement | GO analytics, politique, propriétaire, rétention | Besoin de décision démontré ; aucune donnée personnelle transmise |
| P4-02 | Tester la suppression ou réduction du bloc « Accéder par enjeu » de l'accueil | Données de clics ou test utilisateur | Le bloc n'apporte pas une orientation distincte des neuf produits |
| P4-03 | Ajouter une photographie Paris/Tour Eiffel | Licence commerciale et cadrages validés | Gain de marque supérieur au coût LCP et aux risques de droits |
| P4-04 | Auto-héberger une police officielle | Police de marque et licence confirmées | Gain visuel mesurable, poids maîtrisé, fallback stable |
| P4-05 | Produire des images sociales spécifiques | Pages réellement partagées identifiées | Priorité limitée aux pages à forte diffusion ; pas de série générique |
| P4-06 | Automatiser davantage la QA | Fréquence de changement justifiant l'investissement | Tests stables sur métadonnées, menu, formulaire sans envoi et headers |
| P4-07 | Ajouter CSP et HSTS | Domaine final HTTPS et inventaire des tiers | Aucun blocage Formspree/Cal.com/style ; rollback documenté |
| P4-08 | Réévaluer de nouvelles pages sectorielles | Données Search Console et demandes commerciales suffisantes | Intention distincte, expertise prouvée, contenu et propriétaire métier |

## Ordre recommandé

1. **Confiance et conformité** : P1-01, P1-02, P1-03.
2. **Premier écran et promesse** : P1-04, P1-05, P1-06.
3. **Preuves et validations** : P2-01 à P2-04.
4. **Conversion et recette réelle** : P2-05, P2-06, P2-08.
5. **Ouverture SEO distincte** : P2-07, uniquement après GO explicite.
6. **Dette et finitions** : P3 puis P4 selon données.

## Trois prochaines missions recommandées

### Mission 10A — Conformité et preuves de confiance

Collecter les justificatifs, finaliser les pages légales, aligner les données visibles/structurées et documenter le traitement Formspree/Cal.com. Cette mission nécessite les informations Assuromieux ; elle ne doit rien inventer.

### Mission 10B — Optimisation des premiers écrans et du formulaire

Compacter les héros internes, rendre les CTA spécifiques visibles à 1280 × 720, clarifier le premier échange et améliorer le repli/les erreurs du formulaire. Aucune route, URL ou architecture ne change.

### Mission 10C — Recette privée distante et décision GO/NO GO

Tester le commit validé sur l'URL Netlify privée : headers, protection, 404, Formspree autorisé, responsive, zoom, lecteur d'écran et Lighthouse. La levée de l'indexation reste une mission séparée.

## Définition de fin

Le plan est suffisamment traité pour demander un GO sous réserve lorsque :

- toutes les actions P1 sont validées ;
- les validations humaines de la première vague sont signées ;
- le test distant Netlify et le test Formspree réussissent ;
- les références protégées conservent leur empreinte ;
- aucune page différée n'est accidentellement indexable ;
- le décideur métier, la conformité et le responsable technique signent la checklist.
