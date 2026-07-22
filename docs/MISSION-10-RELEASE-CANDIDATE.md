# Mission 10 — Release Candidate avant mise en production

Date du contrôle : 22 juillet 2026  
Référence Git de départ : `ec84a08`  
Périmètre : corrections RC à faible risque, contrôles locaux et préparation de l’ouverture sélective. Aucun déploiement n’a été effectué.

## Décision

**NO GO** pour une publication publique.

La candidate est techniquement compilable et la bascule SEO est désormais préparée sans ouvrir l’indexation par défaut. Les blocages externes et réglementaires ne peuvent toutefois pas être levés sans données attestées, validation humaine et recette distante autorisée.

## Résultat par axe

| Axe | Résultat | Décision |
|---|---|---|
| Mentions légales | 25 occurrences `A fournir par Assuromieux` subsistent dans les deux pages | Bloquant |
| Données réglementaires | RCS, adresse et ORIAS sont affichés ailleurs, mais aucun justificatif ni validateur n’est conservé dans le dépôt | Bloquant |
| Formspree | Validation locale, états, honeypot et repli sans JavaScript améliorés ; envoi réel non autorisé | Bloquant |
| Cal.com | URL présente et chargée seulement après action ; propriétaire et paramètres non attestés | Bloquant |
| Conversion | CTA spécifiques avancés dans le premier écran et objet du premier échange explicité | Validé localement |
| UX responsive | 320, 768, 1280 et 1440 px contrôlés sans débordement | Validé localement |
| SEO | Meta, canonical, OpenGraph et JSON-LD contrôlés ; ouverture limitée à dix routes par variable | Prêt, non activé |
| Sitemap / robots | Génération filtrée testée ; mode privé restauré par défaut | Validé localement |
| Performance / dette | Quatre composants orphelins supprimés, CSS FAQ centralisé, aucune dépendance applicative ajoutée | Validé |
| Netlify distant | Configuration locale prête ; aucune URL privée ni accès Netlify disponible dans le dépôt | À contrôler |
| GitHub | Remote `origin` configuré vers le dépôt GitHub | Validé localement |

## 1. Vérification réglementaire

### Valeurs présentes mais non attestées

| Donnée | Valeur actuellement utilisée | État RC |
|---|---|---|
| Nom | `ASSUROMIEUX PARIS` | À attester |
| Adresse | `60 Rue Francois 1er`, `75008 Paris` | À attester et valider typographiquement |
| Identifiant présenté comme RCS | `489181032` | À rapprocher d’un justificatif SIREN/SIRET/RCS |
| ORIAS | `26003798` | À rapprocher d’une attestation en cours de validité et de la catégorie réelle |
| Téléphone | `06 95 69 96 74` | Autorisation de publication à confirmer |
| Email | `jules@assuromieuxparis.com` | Autorisation de publication à confirmer |

Une recherche sur le registre officiel ORIAS confirme que ce registre est la source de contrôle appropriée, mais la fiche spécifique n’a pas pu être obtenue de façon attestable pendant cette mission. La production historique ne constitue pas un justificatif.

### Cookies et données personnelles

- aucun analytics, pixel, publicité ou CMP n’est présent ;
- aucun cookie applicatif n’a été identifié ;
- `sessionStorage` mémorise temporairement le besoin choisi et est supprimé après succès ;
- Formspree reçoit les données seulement lors de l’envoi ;
- Cal.com est un lien externe, sans intégration automatique.

Dans cet état technique, aucun bandeau de consentement n’est ajouté. Cette conclusion doit être revue avant toute activation de GA4, pixel ou autre traceur. La politique de confidentialité reste bloquante tant que les bases, destinataires, durées et transferts ne sont pas validés.

Références de cadrage :

- <https://entreprendre.service-public.fr/P10025> ;
- <https://entreprendre.service-public.fr/vosdroits/F24270> ;
- <https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel>.

## 2. Validation des formulaires

Le dépôt contient un seul composant de formulaire, utilisé sur l’accueil et la démonstration interne.

Améliorations appliquées :

- validation HTML native réactivée en supprimant `novalidate` ;
- limites de longueur ajoutées sans changer les noms transmis à Formspree ;
- messages d’erreur par champ reliés par `aria-describedby` ;
- `aria-invalid` ajouté et retiré selon la validité ;
- statut global `aria-live` conservé ;
- focus sur le premier champ invalide conservé ;
- honeypot `_gotcha` et endpoint inchangés ;
- états d’envoi, erreur et succès inchangés ;
- aucun document confidentiel demandé au premier contact.

Recette locale : formulaire vide refusé, cinq erreurs visibles, focus sur `contact-first-name`, correction d’un champ effaçant son erreur et aucun envoi réseau déclenché.

Le test réel Formspree reste interdit tant que le propriétaire, le destinataire, la politique, les données synthétiques et leur suppression ne sont pas autorisés.

## 3. Quick wins conversion et crédibilité

- héros `PageHero` et `NeedHero` compactés sans changer leur architecture ;
- CTA de RC professionnelle : bas à 718 px dans un viewport 1280 × 720 ;
- CTA Création/reprise : bas à 716 px dans le même viewport ;
- bloc « Premier échange » ajouté au formulaire ;
- aucune promesse de délai, économie, placement ou rappel garanti ajoutée ;
- aucun témoignage, chiffre, partenaire ou label inventé.

## 4. SEO et passage en production

La variable non secrète `PUBLIC_SITE_INDEXABLE` pilote le build :

| Mode | Meta robots | `robots.txt` | Header Netlify | Sitemap |
|---|---|---|---|---|
| Absente ou `false` | 39/39 `noindex, nofollow` | `Disallow: /` | `X-Robots-Tag: noindex, nofollow, noarchive` | Absent |
| `true` | `index, follow` sur dix routes, `noindex` ailleurs | `Allow: /` | Verrou global omis | Dix URL exactes |

Les routes autorisées sont centralisées dans `src/data/indexing.mjs` et correspondent à `docs/PLAN-INDEXATION.md`. Le fichier protégé `public/robots.txt` n’est pas modifié ; seule la sortie `dist/` est adaptée après compilation.

OpenGraph a été complété avec largeur, hauteur et texte alternatif. Chaque page rendue conserve un title, une description, un canonical, un H1 et des JSON-LD valides.

La variable ne doit être définie à `true` que dans le contexte Netlify Production après GO signé. Les Deploy Previews et branch deploys doivent rester à `false` ou sans variable. Références :

- <https://docs.netlify.com/build/configure-builds/environment-variables/> ;
- <https://docs.netlify.com/manage/routing/headers/>.

## 5. Qualité et nettoyage

- scripts `lint`, `check`, `check:release` et `verify` ajoutés ;
- diagnostics Astro officiels activés avec `@astrojs/check`, TypeScript et types Node ;
- import Zod déprécié remplacé ;
- narrowing TypeScript corrigé dans le hub Ressources ;
- quatre composants sans aucune référence supprimés ;
- 21 duplications `.faq-layout` remplacées par une règle globale ;
- commentaire TODO du footer supprimé ;
- ancien `public/og.jpg` conservé : sa suppression demande encore une décision d’archivage ;
- aucun favicon créé faute d’actif officiel validé.

## 6. Intégrité

| Fichier protégé | Taille | SHA-256 | Résultat |
|---|---:|---|---|
| `index.html` | 59 244 octets | `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` | Intact |
| `source/index-production-reference.html` | 59 244 octets | `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0` | Intact |
| `public/robots.txt` | 99 octets | `4751b1a16fa5b470a934926d6cd14b3ffd7e94fbad31de9b26484a4c2a7df36b` | Intact |

## Points restant à fournir par le cabinet

La liste exhaustive et classée se trouve dans `docs/MISSION-10-VALIDATION.md`. Aucun de ces contenus n’a été inventé ou déduit de la seule production historique.
