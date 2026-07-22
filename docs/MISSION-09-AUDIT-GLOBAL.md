# Mission 09 — Audit global UX, conversion et qualité

Date : 22 juillet 2026  
Base auditée : `main`, commit `ec84a08`  
Nature de la mission : audit exclusivement documentaire, sans correction du site

## Décision synthétique

**NO GO pour une production publique.**  
**GO pour le maintien en préproduction privée avec `noindex`, `robots.txt` bloquant et `X-Robots-Tag`.**

Le site dispose d'un socle technique, éditorial et graphique nettement supérieur à une simple landing : architecture Astro statique, 39 pages, parcours cohérents, maillage riche, responsive documenté, positionnement conseil lisible et aucune dépendance lourde. Il est techniquement stable et crédible dans sa méthode.

Le NO GO ne vient pas d'une défaillance de l'interface. Il vient de quatre blocages de publication encore ouverts :

1. pages légales comportant encore de nombreux « A fournir par Assuromieux » ;
2. identité juridique, ORIAS, RCS, adresse, statut d'intermédiation et JSON-LD non attestés dans le dépôt ;
3. test réel Formspree et paramètres RGPD des prestataires non validés ;
4. contenus produits/guides encore soumis à des validations humaines, notamment santé/prévoyance, dirigeant, cyber, décennale et les six guides `review-required`.

## Périmètre et méthode

L'audit repose sur :

- la lecture d'`AGENTS.md`, `TODO.md`, `ROADMAP-SITE-SEO.md` et de tous les livrables demandés des familles Architecture, Audit, Checklist, Cohérence, Décision, Levée, Matrice, Plan, Préproduction, Procédure, Questions, Réalisation, Recette, Release Candidate et Validation ;
- la lecture du code Astro, des données centrales, des layouts, des composants, des styles et de la configuration Netlify ;
- un nouveau `pnpm verify` sur le commit courant ;
- l'analyse des 39 fichiers HTML générés ;
- une inspection navigateur des gabarits Accueil, Produit, Secteur, Guide, Votre besoin, Cabinet et Légal ;
- un contrôle de la ligne de flottaison à 1280 × 720 px ;
- une analyse des composants, répétitions CSS, assets, métadonnées et données structurées ;
- la vérification de l'intégrité des deux références protégées.

L'URL Netlify privée n'est pas inscrite dans le dépôt et aucune URL authentifiée n'a été fournie à cette mission. La recette visuelle a donc été reproduite sur le rendu local du même commit. Les headers et le contrôle d'accès Netlify ne sont pas requalifiés à distance dans ce rapport. Aucun formulaire n'a été envoyé.

## Résultats vérifiables

| Contrôle | Résultat |
|---|---:|
| Pages statiques générées | 39 |
| Liens ou ancres internes cassés | 0 |
| Pages avec un H1 unique | 39/39 |
| Titles présents et uniques | 39/39 |
| Meta descriptions présentes et uniques | 39/39 |
| Canonicals présents et uniques | 39/39 |
| Pages avec `noindex, nofollow` | 39/39 |
| JSON-LD invalide | 0 |
| FAQ structurées | 27 pages |
| Breadcrumbs structurés | 37 pages |
| Dépendances applicatives | Astro uniquement |
| Composants de production non référencés | 4 |
| Occurrences de la règle `.faq-layout` dans les pages | 21 |
| Guides encore `review-required` | 6/6 |
| Favicon | absent |
| Sitemap | absent volontairement pendant la préproduction |

`pnpm verify` réussit : 39 pages sont générées et le contrôle des liens ne trouve aucune erreur.

## Lecture par profil

### Dirigeant de PME

Le positionnement est compris rapidement : analyse des contrats, vision globale, consultation du marché et arbitrage. Le visiteur trouve ses produits dès le début. Il lui manque cependant une preuve concrète de la forme du livrable, du déroulement du premier échange et de ce qu'il obtient réellement après une demande d'audit.

### Artisan du BTP

Le vocabulaire activités déclarées, attestations, chantiers et décennale est pertinent et prudent. La page évite les promesses automatiques. La crédibilité est toutefois affaiblie tant que les informations réglementaires générales du cabinet et les formulations spécialisées n'ont pas de validation humaine identifiable.

### Transporteur

Le site démontre une forte compréhension des flux, rôles, véhicules, biens confiés et responsabilités. C'est le profil le mieux servi. La profondeur devient parfois une friction : Convoyage atteint environ 1 640 mots visibles et onze sections ; TRM et Déménagement dépassent également 1 250 mots. Une synthèse de décision plus tôt dans la page améliorerait l'efficacité commerciale.

### Dirigeant de TPE

Les textes sont accessibles et les produits identifiables. L'expression « programme d'assurances » et la profondeur de certaines pages peuvent néanmoins paraître plus adaptées à une PME structurée. Le formulaire exige simultanément entreprise, email et téléphone, ce qui peut sembler élevé pour un premier contact froid.

### Prospect découvrant Assuromieux

Il comprend ce que fait le cabinet et constate une interface premium. Il comprend moins clairement pourquoi il doit choisir ce cabinet plutôt qu'un autre courtier : les preuves autorisées ne sont pas encore matérialisées et les mentions provisoires visibles contredisent le niveau de finition graphique.

## Audit par famille de pages

### Accueil

La proposition de valeur est compréhensible en moins de dix secondes : cabinet de conseil et courtage, assurances d'entreprise, audit, analyse des risques et consultation du marché. L'accès aux neuf besoins arrive immédiatement après le hero, conformément aux arbitrages.

Forces :

- H1 distinctif et orienté stratégie ;
- produits accessibles rapidement ;
- audit et assurances comme deux actions différentes ;
- transport et BTP correctement ramenés au rang d'expertises ;
- téléphone, email, Paris et intervention nationale visibles ;
- rythme graphique premium et cohérent.

Limites :

- environ 920 mots, neuf H2 et dix sections : l'accueil reste lisible, mais n'est plus réellement synthétique ;
- neuf produits puis huit accès « par enjeu » créent deux systèmes de choix consécutifs ;
- le CTA principal arrive à la limite basse du viewport 1280 × 720 ;
- aucune démonstration réelle du livrable, du niveau d'accompagnement ou de la suite donnée ;
- l'argument de confiance repose surtout sur la méthode et le numéro ORIAS non attesté dans le dépôt.

### Pages produits

Les six pages produit ont une moyenne d'environ 950 mots, huit H2 et huit sections. Elles sont structurées, prudentes et différenciées par leurs schémas. Le langage ne promet ni prix, ni acceptation, ni couverture automatique.

Le point faible principal est la conversion dans le premier écran. À 1280 × 720, les CTA spécifiques de RC professionnelle, Multirisque, Flotte et Santé/prévoyance commencent entre 791 et 898 px : ils ne sont pas visibles sans scroll. Le CTA générique du header reste visible, mais il ne reprend pas l'intention exacte de la page.

Les objections contractuelles sont bien traitées. Les objections commerciales le sont moins : pourquoi Assuromieux, quel livrable, quel délai de retour, quelle implication demandée au dirigeant et quelle différence concrète avec son courtier actuel ?

### Pages secteurs

Le vocabulaire métier est le meilleur actif éditorial du site. TRM, Convoyage et Déménagement possèdent des frontières correctes avec Flotte, RC, Multirisque et le hub Transport.

Le risque est la densité : les trois verticales longues comprennent dix à onze sections et jusqu'à 26 H3. Convoyage est particulièrement complet mais demande beaucoup d'effort avant la décision. Il faut préserver la précision tout en faisant remonter un résumé des quatre ou cinq vérifications décisives.

### Guides

Les six guides sont pédagogiques, sourcés, correctement structurés et reliés aux pages commerciales. Leur longueur moyenne, autour de 1 140 mots, est cohérente avec leur intention. Les sommaires, dates, auteur, FAQ et liens améliorent l'usage.

Leur principale limite est de gouvernance : les six restent `review-required`. L'auteur visible est l'organisation, sans relecteur ni date de revue métier. La conversion est volontairement discrète ; elle pourrait s'appuyer sur un livrable réel ou une checklist vérifiée, sans multiplier les CTA.

### Parcours « Votre besoin »

Le modèle situation → vérifications → décision → accompagnement est pertinent et différenciant. Les six préremplissages sont simples, non sensibles et modifiables. Le hub évite de pousser immédiatement un produit.

La navigation est logique, mais le lot ajoute un deuxième mode de découverte à côté des produits et secteurs. Le risque est le chevauchement perçu entre « auditer mes assurances » et la page Audit, ou entre « assurer une flotte » et la page Flotte. Les frontières éditoriales existent ; elles devront être confirmées par des données réelles après lancement.

À 1280 × 720, le CTA spécifique du hub et celui de Création/reprise sont sous la ligne de flottaison, même si le CTA contextuel du header est présent.

### Contact

Le contact est une section de l'accueil, non une route autonome. Le formulaire est court pour un contexte B2B, bien étiqueté, prérempli selon le parcours et accompagné de téléphone/email.

Frottements :

- cinq champs obligatoires, dont email et téléphone simultanément ;
- aucun délai de réponse ou déroulement du premier échange validé ;
- aucune option de canal de réponse ;
- erreurs annoncées globalement, sans `aria-invalid` ni message par champ ;
- `novalidate` neutralise la validation native sans JavaScript, alors que le formulaire reste soumis directement à Formspree ;
- Cal.com n'est proposé qu'après succès, ce qui peut contrarier les visiteurs déjà prêts à prendre rendez-vous ;
- la politique liée est encore incomplète.

## Principaux risques

### Bloquants

1. données légales et réglementaires non attestées ;
2. pages légales incomplètes visibles ;
3. informations non validées réutilisées dans le footer et le JSON-LD ;
4. traitement Formspree/Cal.com/Netlify et envoi réel non validés ;
5. ouverture impossible tant que `noindex`, `robots.txt` et `X-Robots-Tag` ne sont pas levés dans une mission explicitement autorisée.

### Forts mais non bloquants pour la préproduction

1. déficit de preuves réelles face à une promesse de conseil premium ;
2. CTA spécifiques sous la ligne de flottaison sur plusieurs pages ;
3. densité des verticales Transport ;
4. validation humaine non achevée sur les contenus les plus sensibles ;
5. formulaire exigeant pour un premier contact et bénéfice post-envoi peu explicite.

## Notes

| Axe | Note /10 | Motif principal |
|---|---:|---|
| UX | **8,1** | Parcours clairs et stables ; densité et premiers écrans à optimiser |
| Conversion | **6,8** | CTA nombreux et formulaire fonctionnel ; preuve et réassurance insuffisantes |
| SEO | **8,2** | Socle très complet ; indexation, validations et quelques optimisations restent ouvertes |
| Crédibilité | **6,2** | Méthode et design convaincants ; légal provisoire et preuves absentes |
| Lisibilité | **8,1** | Bonne typographie ; certaines pages et certains H1 sont trop longs |
| Accessibilité | **8,0** | Bonne structure ; lecteur d'écran, zoom et erreurs de formulaire à finaliser |
| Design | **8,5** | Identité premium cohérente ; héros internes trop hauts et actifs de marque incomplets |
| Qualité technique | **8,3** | Build propre et minimal ; dette légère, tests automatisés limités |

## Note globale

**7,8 / 10**

Le site est une excellente préproduction, mais pas encore une production publique défendable. La priorité n'est pas d'ajouter des fonctionnalités ou des pages : elle est de fermer les blocages de confiance, rendre la valeur de l'audit plus tangible et raccourcir le chemin visuel vers l'action.

## Conclusion

**NO GO Production.**

Le passage à « GO sous réserve » deviendra raisonnable lorsque les actions P1-01 à P1-06 de `MISSION-09-PLAN-ACTIONS.md` seront validées et que la recette distante privée aura confirmé les mêmes résultats sur Netlify.
