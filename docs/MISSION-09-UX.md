# Mission 09 — Audit UX

Date : 22 juillet 2026  
Périmètre : 39 pages de la préproduction RC2, sans modification

## Synthèse

L'expérience est cohérente, lisible et prévisible. Le visiteur peut entrer par un produit, un secteur, une situation ou une ressource. La navigation ne présente aucun lien interne cassé. Le principal problème UX est la hiérarchie verticale : plusieurs pages internes utilisent un H1 très ample et repoussent l'action spécifique sous le premier écran.

## Compréhension initiale

### Ce qui est compris en moins de dix secondes

- Assuromieux Paris travaille sur les assurances d'entreprise.
- Le cabinet analyse avant de comparer ou consulter.
- L'audit est la porte d'entrée.
- Paris est l'ancrage ; l'intervention est nationale.
- Le site ne se limite ni au transport ni au BTP.

### Ce qui demande encore un effort

- ce que contient concrètement l'audit gratuit ;
- ce que le prospect reçoit après le premier échange ;
- le délai et le canal de réponse ;
- la différence démontrée avec un courtier déjà en place ;
- le niveau d'implication nécessaire pour commencer.

## Homepage

### Hero

Le H1 est fort, lisible et différenciant. Le sous-titre explique analyse, risques, marché et cohérence. Les deux CTA répondent à deux intentions distinctes. Les trois repères Paris, France et interlocuteur direct renforcent le cadrage.

À 1280 × 720, le CTA principal commence à 672 px et se termine à 730 px : il est visible mais partiellement placé sous la ligne de flottaison. Une réduction modérée du vide vertical ou du titre améliorerait la perception de l'action sans refaire le design.

### Sélection des produits

L'accès rapide aux neuf besoins est excellent. La présence immédiate des assurances respecte l'objectif commercial. En revanche, les neuf cartes sont suivies de huit liens « Accéder par enjeu ». Ces deux modes de sélection consécutifs peuvent produire une hésitation : dois-je choisir un produit, un enjeu ou un parcours ?

Recommandation : maintenir les neuf entrées compactes, mais mesurer si le bloc « par enjeu » apporte réellement des clics distincts avant de lui conserver le même poids.

### Rythme

L'accueil contient environ 920 mots, neuf H2 et dix sections. Chaque section reste courte, mais l'ensemble approche une page pilier. Les blocs « parti pris », « vision globale » et « méthode » portent trois idées proches. Une future optimisation pourra tester une fusion ou une réduction sans supprimer le positionnement conseil.

## Pages produits

### Points forts

- même ordre de lecture d'une page à l'autre ;
- public concerné visible ;
- risques, contrôles, erreurs, méthode et FAQ clairement séparés ;
- schémas propres à chaque produit ;
- CTA contextualisés ;
- absence de promesse contractuelle.

### Frictions

- moyenne d'environ 950 mots et huit sections ;
- H1 parfois trop longs pour la largeur disponible ;
- l'illustration occupe la moitié du hero alors que le CTA spécifique n'est pas encore visible ;
- répétition de la même séquence sur six pages, avec un risque de perception « template » ;
- les objections commerciales apparaissent moins que les objections contractuelles.

### Mesure de la ligne de flottaison à 1280 × 720

| Page | Bas du H1 | Début du CTA spécifique | Visible sans scroll |
|---|---:|---:|---|
| RC professionnelle | 739 px | 898 px | Non |
| Multirisque | 665 px | 824 px | Non |
| Flotte | 665 px | 791 px | Non |
| Santé/prévoyance | 665 px | 824 px | Non |
| Assurance transport | 592 px | 718 px | Partiellement |

Le CTA générique du header reste visible sur desktop. L'écart porte donc sur la continuité entre l'intention de la page et l'action proposée, pas sur une absence totale d'action.

## Pages secteurs

### Vocabulaire et pertinence

Les pages utilisent les objets métier attendus : flux, rôles, sous-traitance, biens confiés, véhicules, sites, territorialité, manutention, stockage et chaîne de garde. La crédibilité sémantique est forte.

### Charge de lecture

| Page | Mots visibles approximatifs | Sections | H3 |
|---|---:|---:|---:|
| TRM | 1 290 | 10 | 23 |
| Convoyage | 1 640 | 11 | 24 |
| Déménagement | 1 350 | 10 | 26 |

Le contenu n'est pas artificiel, mais la densité ralentit un visiteur commercial. La page Convoyage doit conserver sa prudence juridique tout en faisant remonter un résumé opérationnel : situation, quatre questions, documents et prochaine action.

## Guides

Les guides fonctionnent bien comme lecture approfondie : sommaire, réponse directe, étapes, sources, produits liés, FAQ et ressources associées. La largeur de lecture et la taille de corps sont confortables.

Frottements possibles :

- entre 13 et 16 H2, ce qui donne un sommaire très long ;
- 21 à 27 liens dans le contenu principal, pouvant disperser la fin de lecture ;
- statut de relecture non final, qui limite la confiance ;
- CTA seulement en fin de contenu, adapté à la pédagogie mais peu visible pour un lecteur qui s'arrête à mi-parcours.

Une simple passerelle contextuelle discrète après la « réponse directe » peut être testée, à condition de ne pas transformer le guide en page commerciale.

## Parcours « Votre besoin »

Le hub répond à un vrai problème : le dirigeant connaît souvent sa situation avant de connaître le produit. Les six situations sont compréhensibles et le formulaire reprend le choix sans collecter de donnée sensible dans l'URL.

Les pages enfants sont fluides, mais reprennent toutes neuf sections en moyenne. Les passerelles vers produits, guides et parcours voisins sont nombreuses. Elles préviennent les impasses, mais peuvent détourner du CTA principal.

À 1280 × 720, le CTA spécifique du hub commence à 791 px ; celui de Création/reprise à 751 px. Le CTA contextuel du header compense partiellement cette situation.

## Contact et formulaire

### Forces

- un seul formulaire dans le site ;
- intitulés et aides explicites ;
- sélection du besoin facultative et préremplie ;
- aucun document confidentiel demandé ;
- téléphone et email accessibles en alternative ;
- succès avec prise de rendez-vous ;
- honeypot présent.

### Frictions

1. prénom, nom, entreprise, email et téléphone sont obligatoires ;
2. le téléphone ne peut pas être remplacé par une préférence de contact ;
3. aucun délai de réponse vérifié ;
4. le bouton « Envoyer ma demande » ne rappelle pas la gratuité ni la nature du prochain échange ;
5. l'erreur est globale et le champ invalide reçoit le focus sans message local ;
6. `novalidate` rend le repli sans JavaScript moins robuste ;
7. Cal.com n'est accessible qu'après envoi réussi.

La priorité n'est pas d'ajouter des champs. Il faut d'abord clarifier ce qui se passe après l'envoi et mesurer si l'obligation du téléphone exclut des prospects qualifiés.

## Navigation, header et footer

### Header

La double structure topbar + navigation apporte contact et réassurance. Le menu principal reste limité à sept entrées. Le menu mobile est accessible au clavier, ferme avec Échap et rend le focus.

À 981–1180 px, le CTA desktop est masqué tandis que la navigation desktop reste affichée. Cette zone intermédiaire est fonctionnelle mais doit rester surveillée, car elle concentre les sept liens avec le logo.

### Footer

Le footer est complet, mais dense : six liens produits, huit liens conseil, coordonnées, deux paragraphes réglementaires et trois liens/états de bas de page. Sur mobile, il devient une longue seconde navigation. Après validation légale, il sera pertinent de distinguer information obligatoire et navigation prioritaire.

## Accessibilité UX

Conforme structurellement : langue, skip link, landmarks, H1 unique, focus visible, labels, autocomplete, FAQ natives, cibles tactiles, réduction de mouvement et contraste forcé.

À finaliser avant production :

- test VoiceOver/NVDA/TalkBack ;
- zoom texte 200 % ;
- annonces de changement de contexte pour ORIAS et Cal.com ;
- erreurs de formulaire par champ avec `aria-invalid` ;
- contrôle du focus proche des bords en raison de `main { overflow: clip; }` ;
- repli formulaire sans JavaScript.

## Éléments inutiles ou à réduire

- duplication du choix entre neuf produits et huit enjeux sur l'accueil ;
- certaines répétitions méthode/audit entre pages ;
- liens de poursuite trop nombreux dans quelques pages longues ;
- footer de préproduction trop chargé par les alertes réglementaires ;
- quatre composants non utilisés en production, traités dans l'audit qualité.

## Verdict UX

**8,1 / 10.**

La structure est saine. Les gains les plus importants viendront d'une action spécifique visible plus tôt, d'une réduction sélective des pages sectorielles et d'une meilleure explication du résultat de l'audit.
