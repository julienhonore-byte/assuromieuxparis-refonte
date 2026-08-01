# Mission 41 — Conversion SEO et génération de leads

Date : 31 juillet 2026

Périmètre : Audit, Transport, RC professionnelle, BTP/décennale, Flotte, Santé/prévoyance, Multirisque et Cyber

Nature : audit CRO et plan d’exécution, sans modification du site

## Synthèse exécutive

Le site ne souffre pas d’un manque de CTA. Chaque page business possède sept points de conversion dans son HTML, auxquels s’ajoutent un ou deux CTA de découverte. Le frein principal est la transformation de l’intérêt en confiance puis en action.

Les cinq blocages les plus importants sont :

1. **La preuve reste déclarative.** La méthode est convaincante, mais aucun livrable anonymisé, cas client réel, avis authentique ou exemple d’analyse ne matérialise encore son exécution.
2. **Le passage vers le formulaire crée une rupture.** Tous les CTA business chargent l’accueil puis descendent vers `#contact`. Le besoin est prérempli, mais le visiteur quitte la page qui l’a convaincu.
3. **Les libellés globaux ne reprennent pas toujours l’intention de la page.** Audit, Transport et BTP transmettent un libellé contextualisé au header et au mobile. RC Pro, Flotte, Santé/prévoyance, Multirisque et Cyber conservent « Demander un audit gratuit » dans plusieurs emplacements globaux alors que leurs CTA de corps disent « Échanger sur… ».
4. **Le formulaire exige simultanément cinq champs personnels ou professionnels, dont le téléphone.** Cette exigence est acceptable pour un prospect chaud, mais augmente la friction d’un prospect encore en phase d’évaluation.
5. **Le choix du canal est contraint.** Le téléphone et l’email sont visibles, mais Cal.com n’apparaît qu’après un envoi réussi. Il n’existe pas de parcours explicite « préparer une étude/devis » pour le visiteur déjà décidé.

Le levier 80/20 consiste à : harmoniser les CTA contextualisés, expliquer la suite en trois étapes, tester le téléphone facultatif, publier une preuve réelle et proposer un second chemin vers une consultation/devis qualifié sans promettre une réponse immédiate.

## Méthode et limites

L’analyse repose sur :

- les composants Astro et les huit routes business réellement présentes ;
- le formulaire Formspree, son préremplissage et son état de succès ;
- les missions 35 à 40, utilisées comme acquis sans refaire l’audit SEO ou concurrentiel ;
- le contenu public servi le 31 juillet 2026 ;
- un contrôle HTTP des huit routes, toutes en `200` sur le domaine `www`.

La liste demandée distingue Santé et Prévoyance. Le site ne possède toutefois qu’une route commune : `/sante-prevoyance-entreprise/`. Les deux intentions sont donc évaluées séparément dans le même parcours, sans inventer une page Prévoyance autonome.

Le taux de conversion réel ne peut pas être déduit du code ni d’un audit visuel. La mesure GA4 préparée n’est pas active et aucun export Formspree/CRM n’est disponible dans cette mission. Les mentions « faible », « moyenne » ou « forte » ci-dessous sont des diagnostics de propension, pas des taux observés.

## 1. Audit complet des CTA

### Définition du comptage

Chaque page business rend cinq points globaux :

1. lien « Analyse gratuite » de la topbar ;
2. CTA desktop du header ;
3. CTA du menu mobile ;
4. CTA mobile fixe après sortie du hero ;
5. CTA Audit du footer.

Le corps de page ajoute :

- un CTA principal dans le hero ;
- un CTA principal final ;
- un CTA de découverte dans le hero ;
- sur cinq pages, un second CTA de découverte dans le bloc final.

Il y a donc **7 instances de conversion dans le DOM par page**, mais elles ne sont pas toutes visibles simultanément : certaines sont réservées au desktop ou au mobile. Le tableau sépare les conversions des liens de découverte.

### Barème

| Critère | Points |
|---|---:|
| pertinence du libellé avec l’intention | 25 |
| visibilité au premier écran et au fil du scroll | 20 |
| cohérence entre hero, header, mobile et CTA final | 20 |
| continuité de destination et faible friction | 20 |
| réassurance immédiate autour de l’action | 15 |

### Tableau par page

| Page | CTA conversion / découverte | Emplacements | Visibilité | Diagnostic | Score |
|---|---:|---|---|---|---:|
| Audit | 7 / 1 | topbar, header desktop, menu mobile, sticky mobile, hero, fin, footer ; découverte dans le hero | excellente | libellé spécifique transmis aux emplacements principaux ; préremplissage correct ; manque de preuve et de définition du premier échange | 85/100 |
| Transport | 7 / 1 | mêmes emplacements | excellente | meilleur alignement entre intention, libellé et page ; destination toujours externe à la page ; aucune preuve sectorielle réelle | 87/100 |
| RC Pro | 7 / 2 | mêmes emplacements ; découverte hero + lien Audit final | excellente | hero et fin spécifiques, mais header/menu/sticky restent génériques ; « Échanger » est doux mais ne précise pas le bénéfice | 76/100 |
| Décennale/BTP | 7 / 1 | mêmes emplacements | excellente | libellé BTP cohérent dans les emplacements principaux ; manque d’un résultat concret autour de l’attestation et des activités | 86/100 |
| Flotte | 7 / 2 | mêmes emplacements ; découverte hero + lien Audit final | excellente | CTA métier clair dans le corps ; rupture avec les libellés globaux génériques ; pas d’aperçu du travail sur parc/sinistralité | 77/100 |
| Santé collective | 7 / 2 | route commune Santé/prévoyance ; lien Protection dirigeant final | excellente | « protection collective » est prudent, mais trop large pour un visiteur venu pour la mutuelle ; libellés globaux génériques | 72/100 |
| Prévoyance collective | 7 / 2 | même route et mêmes emplacements que Santé | bonne mais non différenciée | aucune action ne permet d’indiquer directement « prévoyance » ; risque que le prospect pense le service secondaire ou trop général | 63/100 |
| Multirisque | 7 / 2 | mêmes emplacements ; découverte hero + lien Audit final | excellente | CTA corps contextualisé ; global générique ; le bénéfice après clic n’est pas explicité | 76/100 |
| Cyber | 7 / 2 | mêmes emplacements ; découverte hero + lien Audit final | excellente | bon libellé métier ; absence de preuve sur la méthode de lecture d’un incident et des services ; global générique | 76/100 |

### CTA idéal par intention

| Page | CTA principal recommandé | Microcopie de réassurance | CTA secondaire recommandé |
|---|---|---|---|
| Audit | **Demander une première analyse de mes contrats** | « Activité, contrat prioritaire et échéance suffisent pour commencer. » | Appeler le cabinet |
| Transport | **Faire analyser mon programme transport** | « Flotte, responsabilités, marchandises et flux sont étudiés ensemble. » | Préparer les informations utiles |
| RC Pro | **Faire analyser ma RC professionnelle** | « Décrivez vos prestations, clients et prochaine échéance. » | Vérifier les points du contrat |
| Décennale/BTP | **Vérifier mes activités et mon attestation** | « Un premier échange identifie les documents et écarts à examiner. » | Voir les vérifications BTP |
| Flotte | **Faire analyser ma flotte** | « Parc, usages et sinistralité permettent de cadrer l’analyse. » | Préparer mon état de parc |
| Santé | **Faire analyser mon régime santé collectif** | « Indiquez l’effectif, la convention collective et le dispositif actuel. » | Comprendre santé et prévoyance |
| Prévoyance | **Faire analyser mon régime de prévoyance** | « Le statut des salariés et le cadre collectif doivent être précisés. » | Distinguer les deux protections |
| Multirisque | **Faire analyser ma multirisque** | « Sites, valeurs et conséquences d’un arrêt sont les premiers repères. » | Préparer les informations |
| Cyber | **Faire analyser mon exposition cyber** | « Outils essentiels, sauvegardes et dépendances suffisent pour cadrer l’échange. » | Voir les scénarios à vérifier |

### Architecture CTA recommandée

Pour chaque page, conserver trois niveaux :

1. **Hero :** un CTA principal vers le formulaire contextualisé et un CTA secondaire vers la section de vérification.
2. **Après la preuve ou la méthode :** un lien textuel contextuel, sans créer une nouvelle rangée de boutons.
3. **Fin de page :** le même CTA principal, avec une alternative de canal — téléphone ou Cal.com selon le test retenu.

Le header, le menu mobile et le sticky mobile doivent reprendre le même libellé contextualisé que le hero. La topbar peut rester générique, mais « Premier échange » est plus clair et moins ambigu que « Analyse gratuite » tant que le périmètre gratuit n’est pas défini publiquement.

## 2. Analyse psychologique du parcours

### Pourquoi un dirigeant quitte la page

| Moment | Pensée probable | Cause de sortie | Réponse attendue |
|---|---|---|---|
| après le hero | « Est-ce réellement adapté à mon entreprise ? » | public visé large et absence d’exemple concret | trois situations typiques et une preuve métier |
| après les risques | « Je savais déjà que le sujet était complexe. » | diagnostic sans matérialisation du résultat | montrer ce que le cabinet vérifie et restitue |
| après la méthode | « Est-ce du conseil ou un appel de vente ? » | méthode déclarée, pas de livrable visible | aperçu anonymisé d’une grille ou synthèse réelle |
| avant le CTA | « Que se passe-t-il si je clique ? » | aucun déroulé court autour de la prise de contact | « demande reçue → cadrage → pièces utiles / rendez-vous » |
| arrivée sur l’accueil | « Pourquoi ai-je quitté la page RC/Flotte/BTP ? » | rupture de contexte vers le formulaire central | conserver le contexte visible et la sélection préremplie |
| devant le téléphone obligatoire | « Je veux d’abord une réponse écrite. » | contrôle perçu sur le canal de relance | rendre le téléphone facultatif ou demander une préférence |
| après envoi | « Quand serai-je recontacté ? » | aucun délai validé | engagement de délai uniquement après validation opérationnelle |

### Objections encore insuffisamment traitées

| Objection | Pages concernées | Réponse à apporter sans promesse |
|---|---|---|
| « Est-ce vraiment un audit ou un devis déguisé ? » | Audit, toutes pages | expliquer les issues possibles : conserver, ajuster, consulter ou changer |
| « Que vais-je recevoir ? » | toutes | décrire une synthèse adaptée : contrats étudiés, cohérences, vigilances, priorités et options |
| « Combien cela coûte-t-il ? » | toutes | distinguer premier échange, analyse éventuelle et courtage ; publier uniquement une règle commerciale validée |
| « Allez-vous forcément changer mes contrats ? » | toutes | rappeler que le maintien peut être pertinent |
| « Travaillez-vous avec mon secteur et ma taille ? » | Transport, BTP, TPE/PME | montrer cas ou situations réelles, sans faux client ni seuil universel |
| « Avec quels assureurs travaillez-vous ? » | toutes | expliquer le périmètre de consultation réel ; logos uniquement avec autorisation |
| « Qui va traiter mon dossier ? » | toutes | relier Jules HONORE, son rôle et la page Cabinet |
| « Mes informations seront-elles protégées ? » | formulaire | rappeler l’absence de document confidentiel, le rôle de Formspree et la politique de confidentialité |
| « Puis-je obtenir un devis rapidement ? » | produits | proposer « préparer une consultation » sous réserve des informations et de l’acceptation des assureurs |
| « Pourquoi vous plutôt qu’un courtier déjà connu ? » | toutes | matérialiser analyse, méthode, livrable, relecture et suivi |

### Ce qui rassurerait davantage

Par ordre d’impact :

1. un exemple anonymisé de synthèse ou de grille d’audit ;
2. une étude de cas réelle et autorisée sur le secteur de la page ;
3. des avis Google authentiques et récents ;
4. un bloc « Après votre demande » en trois étapes ;
5. un lien visible vers Jules HONORE, l’ORIAS et la méthode ;
6. une indication de délai uniquement si le cabinet peut la tenir ;
7. une explication factuelle du rôle du réseau Assuromieux, si l’usage public est autorisé ;
8. des partenaires/compagnies uniquement lorsque la relation et l’autorisation d’usage sont vérifiées.

### Ce qui manque pour demander un devis immédiatement

Le site ne doit pas promettre un devis immédiat. Il peut en revanche rendre la **demande d’étude** immédiatement compréhensible :

- distinguer « faire analyser mon contrat actuel » de « préparer une consultation/devis » ;
- préciser les informations minimales : activité, échéance, contrat ou besoin, données sectorielles ;
- expliquer qu’une consultation dépend de la qualité du dossier et des décisions des assureurs ;
- annoncer les étapes après la demande ;
- laisser le prospect choisir email, téléphone ou rendez-vous ;
- confirmer le périmètre du premier échange et, si possible, le délai de rappel.

## 3. EEAT — preuves d’expertise absentes ou insuffisantes

### Preuves déjà présentes

- identité publique Jules HONORE ;
- inscription ORIAS affichée et reliée au registre ;
- adresse, téléphone, email, SIREN/RCS et pages légales ;
- page Cabinet, page Jules HONORE et politique éditoriale ;
- méthode d’audit décrite ;
- trois guides publiés avec relecture documentée ;
- ancrage parisien et intervention nationale ;
- formulations prudentes et absence de preuve inventée.

### Matrice des preuves à construire

| Élément | État actuel | Impact SEO | Impact commercial | Effort | Condition de publication |
|---|---|---:|---:|---:|---|
| avis Google authentiques | non visibles sur le site | moyen | très fort | moyen | avis spontanés ou sollicités loyalement ; aucune sélection trompeuse |
| étude de cas réelle | absente | fort | très fort | élevé | autorisation, anonymisation, méthode et limites |
| extrait de livrable d’audit | absent | moyen | très fort | moyen | document réel anonymisé, sans donnée contractuelle sensible |
| exemple de grille d’analyse | absent | moyen | très fort | moyen | grille réellement utilisée, expurgée des informations sensibles |
| témoignage client | absent | faible à moyen | très fort | moyen | texte authentique, accord écrit, contexte précis |
| logos clients | absents | faible | fort | moyen | autorisation explicite et relation exacte |
| compagnies consultées ou partenaires | non présentées | faible | fort | faible à moyen | relation vérifiée, libellé exact, autorisation des marques |
| rôle du réseau Assuromieux | peu matérialisé | moyen | fort | faible | formulation contractuellement validée, sans exagérer l’indépendance ou la couverture marché |
| spécialisations documentées | déclarées, peu prouvées | fort | très fort | moyen | guides relus, cas réels, interventions ou publications |
| années d’expérience | non publiées | moyen | fort | faible | donnée exacte, sourçable et autorisée ; sinon ne rien afficher |
| certifications et formations | non publiées | moyen | fort | faible | uniquement titres valides, dates et organismes vérifiables |
| interventions, conférences, webinaires | absents | moyen | moyen à fort | élevé | événement réel, support et date |
| interviews et presse | absentes | fort | fort | élevé | publication externe réelle et lien direct |
| profil LinkedIn | non relié clairement dans les pages business | moyen | moyen à fort | faible | profil actif et cohérent avec l’identité publique |
| vidéo de méthode | absente | moyen | fort | élevé | contenu réel, sobre, sous-titré, sans autoplay |
| photo du cabinet / environnement de travail | absente ou visuel générique | faible | moyen | moyen | droits, lieu réel et cohérence avec l’interdiction de portrait personnel |
| politique de mise à jour visible sur les guides | présente via page éditoriale, discrète | moyen | moyen | faible | dates et relecteurs réels uniquement |
| délai de réponse | non annoncé | nul | fort | faible | engagement opérationnel mesuré et tenable |
| taux de satisfaction, économies ou nombre de clients | absent | potentiel fort | potentiel fort | élevé | ne publier qu’avec source, période, périmètre et méthode ; sinon rester absent |

### Ordre d’acquisition des preuves

1. **Preuve de méthode :** extrait de grille et aperçu de synthèse.
2. **Preuve d’expérience :** première étude de cas réelle.
3. **Preuve sociale :** avis Google authentiques puis un témoignage contextualisé.
4. **Preuve personnelle :** profil LinkedIn, rôle éditorial, interventions réelles.
5. **Preuve de réseau :** partenaires et compagnies uniquement après validation des droits et du libellé.

Les logos de compagnies ou de clients ne doivent jamais être utilisés comme décoration. Un logo sans explication peut faire croire à une recommandation, un partenariat exclusif ou une couverture de marché qui n’existe pas.

## 4. Stratégie d’études de cas

### Volume recommandé

Publier **quatre études de cas sur six mois**, puis réévaluer. Cette cadence suffit à couvrir les principales objections sans industrialiser des récits faibles.

| Ordre | Secteur / situation | Pourquoi | Page business cible | CTA |
|---:|---|---|---|---|
| 1 | Transport : articulation flotte, responsabilité et marchandises | expertise sectorielle forte et besoin complexe | `/assurance-transport/` | Faire analyser mon programme transport |
| 2 | BTP : activités exercées et attestation décennale | preuve très concrète de la méthode | `/assurance-btp-decennale/` | Vérifier mes activités et mon attestation |
| 3 | Flotte : état de parc, usages et sinistralité | permet de montrer une analyse structurée sans promettre une économie | `/flotte-automobile/` | Faire analyser ma flotte |
| 4 | Programme entreprise : RC, multirisque et évolution d’activité | démontre la vision globale et l’audit | `/audit-assurances-entreprise/` | Demander une première analyse |

Une cinquième étude Santé/prévoyance est pertinente seulement lorsqu’un dossier réel peut être présenté sans révéler d’informations sociales sensibles.

### Structure type

1. **Contexte** — activité, taille en fourchette large et situation déclenchante.
2. **Question du dirigeant** — ce qui devait être compris ou décidé.
3. **Périmètre** — contrats et informations effectivement examinés.
4. **Constats** — cohérences, vigilances et informations manquantes, sans transformer le cas en règle générale.
5. **Méthode** — collecte, rapprochement, consultation éventuelle et arbitrages.
6. **Décision** — maintien, clarification, modification ou consultation, uniquement si réellement intervenu.
7. **Limites** — éléments hors périmètre et dépendance aux contrats/assureurs.
8. **À retenir** — trois enseignements transférables avec prudence.
9. **CTA** — page business cible puis Audit.

Longueur cible : **800 à 1 200 mots utiles**, avec un tableau ou schéma simple si le dossier le justifie. La longueur reste secondaire par rapport à la preuve.

### Données à anonymiser

- nom, marque, domaine et identité des personnes ;
- adresse exacte et zone trop identifiable ;
- chiffre d’affaires, masse salariale ou effectif précis ;
- primes, franchises et montants de sinistres sans accord explicite ;
- assureurs, courtiers précédents et partenaires ;
- numéros de contrats, immatriculations, clients et donneurs d’ordre ;
- dates exactes, itinéraires, marchandises ou chantiers permettant une réidentification ;
- données de santé, RH ou sinistralité personnelle ;
- toute pièce contractuelle non expressément autorisée.

Préserver uniquement les informations nécessaires pour comprendre la méthode. Lorsque l’anonymisation détruit la valeur du cas, mieux vaut ne pas publier.

### Variantes de CTA dans une étude de cas

- milieu de page : lien textuel « Comprendre la méthode d’audit » ;
- fin : CTA métier vers la page business ;
- secondaire : « Présenter une situation comparable » vers le formulaire prérempli ;
- aucun CTA après chaque section ni formulaire bloquant la lecture.

## 5. Audit des formulaires

### Inventaire réel

Le site public possède **un seul formulaire de production**, rendu sur l’accueil dans `#contact` et traité par Formspree. Le formulaire de démonstration interne est hors production et hors audit commercial.

Le formulaire public comprend :

- 7 champs visibles ;
- 5 champs obligatoires : prénom, nom, entreprise, email professionnel, téléphone ;
- 2 champs facultatifs : besoin principal et message ;
- 1 honeypot anti-spam masqué ;
- 2 champs techniques masqués ;
- une mention RGPD avec lien vers la politique de confidentialité ;
- un état de succès qui propose ensuite Cal.com.

### Évaluation

| Critère | État actuel | Effet psychologique | Note |
|---|---|---|---:|
| nombre de champs | raisonnable mais dense pour un premier échange | effort perçu supérieur à une simple prise de contact | 12/20 |
| ordre | identité avant besoin | le prospect donne ses données avant d’exprimer son problème | 11/20 |
| préremplissage | besoin sélectionné depuis le CTA | réduit la répétition et conserve partiellement le contexte | 18/20 |
| téléphone obligatoire | oui | rassure le cabinet, mais retire au prospect le choix du canal | 8/20 |
| message facultatif | oui, avec aide claire | faible friction et bonne prudence sur les documents | 18/20 |
| confiance | RGPD, Formspree documenté, aucun document confidentiel | solide, mais encore éloignée de la preuve commerciale | 16/20 |
| erreurs et succès | erreurs par champ, statut accessible, succès clair | expérience robuste et accessible | 18/20 |
| prochaine étape | Cal.com après succès | bon enchaînement, mais tardif pour ceux qui veulent réserver directement | 13/20 |

**Score de préparation à la conversion du formulaire : 71/100.**

### Taux de conversion probable

Sans données de sessions, de `form_start`, de succès Formspree et de qualité commerciale, aucun pourcentage sérieux ne peut être attribué. La propension estimée est :

- visite page business → clic CTA : **moyenne à forte** ;
- clic CTA → début de formulaire : **moyenne**, en raison du changement de page ;
- début de formulaire → envoi réussi : **moyenne**, avec risque principal sur le téléphone obligatoire ;
- envoi → clic Cal.com : **non observable** ;
- demande → devis/client : **non mesurable sans suivi commercial**.

Ces cinq étapes doivent être mesurées avant toute annonce d’un taux ou d’un gain.

### Version optimale à tester

Ordre recommandé :

1. **Besoin principal** — prérempli et modifiable ;
2. **Entreprise** — obligatoire ;
3. **Nom et prénom** — un champ unique si le traitement commercial l’accepte, sinon conserver les deux champs ;
4. **Email professionnel** — obligatoire ;
5. **Téléphone** — facultatif, avec mention « si vous souhaitez être rappelé » ;
6. **Préférence de réponse** — email, téléphone ou rendez-vous ;
7. **Contexte / échéance** — facultatif.

Le bouton doit reprendre l’intention : « Envoyer ma demande d’analyse » ou « Préparer ma demande d’étude », plutôt que rester toujours générique.

### Tests CRO recommandés

| Test | Hypothèse | KPI principal | Garde-fou |
|---|---|---|---|
| téléphone facultatif | davantage de prospects exploratoires terminent le formulaire | succès / début de formulaire | qualité et joignabilité des demandes |
| besoin en premier | le visiteur comprend immédiatement que le formulaire est contextualisé | début / arrivée au formulaire | taux d’erreur et choix « Autre » |
| libellé de bouton contextualisé | l’action paraît plus prévisible | succès / début | aucune promesse de devis ou d’audit complet |
| bloc « Après votre demande » | la réduction d’incertitude augmente l’envoi | succès / arrivée | délai annoncé uniquement s’il est validé |
| Cal.com secondaire sur Audit | les prospects chauds préfèrent réserver directement | clic Cal + rendez-vous confirmé manuellement | qualité des rendez-vous et absence de double comptage |

Un seul test doit être mené à la fois sur une période ou un volume suffisant. Sans analytics actif, utiliser un journal hebdomadaire Formspree/Cal.com/CRM et noter la source déclarée.

## 6. Lead magnets

### Principe

Un lead magnet doit aider le dirigeant avant la vente et préqualifier une demande. Il ne doit pas masquer derrière un formulaire un contenu qui gagnerait à être indexable. La meilleure architecture est :

- version HTML publique pour le SEO et la confiance ;
- version PDF ou modèle téléchargeable pour l’usage opérationnel ;
- téléchargement direct sans collecte par défaut ;
- proposition facultative d’un échange contextualisé après le téléchargement ;
- collecte d’email uniquement si la valeur supplémentaire et le cadre RGPD sont validés.

L’« audit gratuit » n’est pas un lead magnet : c’est une prestation ou un premier échange dont le périmètre doit être défini.

### Priorisation

| Rang | Ressource | Cible | Valeur lead | Effort | Priorité | CTA après usage |
|---:|---|---|---:|---:|---:|---|
| 1 | Check-list de renouvellement des assurances d’entreprise | dirigeants avant échéance | 5/5 | moyen | P1 | Faire analyser les contrats prioritaires |
| 2 | Trame de collecte Transport : rôles, flux, marchandises, parc et sinistralité | transporteurs/logisticiens | 5/5 | moyen | P1 | Faire analyser mon programme transport |
| 3 | Grille de vérification d’une attestation décennale | entreprises BTP/donneurs d’ordre | 5/5 | moyen, validation spécialisée | P1 | Vérifier mes activités et mon attestation |
| 4 | Modèle d’état de parc Flotte | responsables de flotte/dirigeants | 5/5 | moyen | P1 | Faire analyser ma flotte |
| 5 | Check-list RC Pro : activité, plafonds, exclusions, sous-traitance | PME/services/BTP | 4/5 | moyen | P1 | Faire analyser ma RC professionnelle |
| 6 | Comparatif pédagogique RC Pro / RC exploitation / décennale | dirigeants et BTP | 4/5 | moyen | P2 | Identifier les contrats à vérifier |
| 7 | Check-list de changement Santé/prévoyance | employeurs/DAF/RH | 5/5 | élevé, validation juridique | P2 | Faire analyser le régime collectif |
| 8 | Carte des dépendances cyber essentielles | PME avec outils critiques | 4/5 | moyen | P2 | Faire analyser mon exposition cyber |
| 9 | Inventaire Multirisque : sites, valeurs et arrêt d’activité | PME multi-sites | 4/5 | moyen | P2 | Faire analyser ma multirisque |
| 10 | Exemple anonymisé de synthèse d’audit | tous dirigeants | 5/5 | moyen | P1 | Demander une première analyse |

### Données à demander si une version est « gated »

Maximum recommandé : email professionnel et entreprise. Le consentement à une newsletter doit être séparé et facultatif. Ne jamais conditionner un document essentiel à l’acceptation d’une prospection future. Aucun nom, téléphone, message ou information contractuelle n’est nécessaire pour remettre un PDF.

### Mesure

- ouverture de la ressource ;
- téléchargement ;
- clic vers la page business ;
- demande d’analyse issue de la ressource ;
- qualité commerciale du lead ;
- aucune transmission à GA4 du nom du fichier s’il révèle un besoin sensible propre à une personne.

## 7. Optimisation des landing pages business

### Structure commune recommandée

1. Hero : H1 existant, sous-titre orienté résultat, CTA spécifique, microcopie.
2. Bande de confiance : Jules HONORE, ORIAS, Paris, intervention nationale, lien Cabinet.
3. Situations déclenchantes : trois à quatre scénarios concrets.
4. Ce qui est analysé : points de contrôle hiérarchisés.
5. Ce que le prospect obtient : synthèse, vigilances, priorités et options, avec limites.
6. Preuve : extrait de méthode, étude de cas ou guide relu.
7. Processus en trois ou quatre étapes.
8. FAQ d’objections.
9. CTA final et choix de canal.

La longueur idéale n’est pas un quota. Une page commerciale doit pouvoir être comprise en quatre à six minutes, avec une réponse directe dans les deux premiers écrans.

### Audit

- **Hero :** conserver « Décider avec une vision claire de ses contrats. »
- **Sous-titre :** préciser que l’analyse rapproche activité, contrats, échéances et priorités avant toute consultation.
- **Arguments :** vision consolidée ; écarts et informations manquantes ; scénarios de maintien, ajustement ou consultation.
- **Preuve prioritaire :** extrait anonymisé d’une synthèse d’audit.
- **FAQ :** périmètre du premier échange ; livrable ; changement d’assureur ; coût ; documents ; délai si validé.
- **CTA :** « Demander une première analyse de mes contrats ».
- **Ordre :** Hero → situations → résultat concret → preuve → méthode → documents → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots utiles ; réduire toute répétition de la méthode déjà présente dans le guide.

### Transport

- **Hero :** conserver le H1 actuel et faire apparaître immédiatement flotte, responsabilités, marchandises et flux.
- **Sous-titre :** indiquer que le rôle exercé et la chaîne d’opérations structurent l’analyse.
- **Arguments :** activités et rôles ; marchandises/valeurs/zones ; flotte et sinistralité ; sous-traitance et donneurs d’ordre.
- **Preuve prioritaire :** étude de cas Transport ou trame de collecte réelle.
- **FAQ :** flotte vs activité de transport ; responsabilité vs assurance marchandises ; documents ; compte propre/autrui ; consultation du marché.
- **CTA :** « Faire analyser mon programme transport ».
- **Ordre :** Hero → preuve sectorielle courte → trois métiers → rôles → contrôles → résultat → méthode → FAQ → CTA.
- **Longueur cible :** 1 000 à 1 400 mots, sans répéter les pages TRM, Convoyage et Déménagement.

### RC professionnelle

- **Hero :** conserver le H1, avec une ligne plus courte visuellement.
- **Sous-titre :** prestations, clients, sous-traitants, plafonds et exclusions sont rapprochés du contrat.
- **Arguments :** activité déclarée ; faits générateurs ; dommages immatériels ; après livraison/travaux ; territorialité.
- **Preuve prioritaire :** extrait anonymisé d’une grille de lecture RC ou attestation.
- **FAQ :** obligation ; RC exploitation ; sous-traitance ; attestation ; prix ; mise en jeu temporelle.
- **CTA :** « Faire analyser ma RC professionnelle ».
- **Ordre :** Hero → situations de responsabilité → ce qui est lu → preuve → méthode → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots ; le comparatif RC Pro/RC exploitation reste dans le guide dédié.

### Décennale et BTP

- **Hero :** conserver « Relier la décennale aux activités réellement exercées. »
- **Sous-titre :** préciser activités, procédés, périodes, sous-traitance et autres contrats du programme BTP.
- **Arguments :** activité réelle/déclarée ; attestation et dates ; procédés ; activités multiples ; RC, matériels, véhicules et locaux.
- **Preuve prioritaire :** exemple anonymisé de rapprochement activité/attestation.
- **FAQ :** attestation suffisante ; obligations ; nouvelle activité ; sous-traitance ; multi-activité ; documents.
- **CTA :** « Vérifier mes activités et mon attestation ».
- **Ordre :** Hero → erreur coûteuse à éviter sans dramatisation → contrôles → preuve → programme BTP → méthode → FAQ → CTA.
- **Longueur cible :** 1 000 à 1 300 mots, avec validation construction.

### Flotte automobile

- **Hero :** conserver le H1 et souligner que le parc est un ensemble en mouvement.
- **Sous-titre :** parc, usages, conducteurs et sinistralité précèdent la comparaison.
- **Arguments :** inventaire ; conducteurs/usages ; sinistralité/prévention ; garanties/franchises ; entrées/sorties.
- **Preuve prioritaire :** modèle d’état de parc ou étude de cas Flotte.
- **FAQ :** seuil de flotte ; mouvements ; relevé de sinistralité ; marchandises ; assistance ; véhicules de remplacement.
- **CTA :** « Faire analyser ma flotte ».
- **Ordre :** Hero → données nécessaires → résultat attendu → preuve → points de contrôle → méthode → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots ; conserver le guide pour la comparaison détaillée.

### Santé collective

- **Hero :** conserver le positionnement collectif mais permettre de choisir immédiatement « Santé ».
- **Sous-titre :** relier garanties, catégories, convention collective, financement et situations d’affiliation.
- **Arguments :** dispositif existant ; catégories ; garanties ; participation ; dispenses ; évolution des effectifs.
- **Preuve prioritaire :** check-list de revue d’un régime, après validation juridique.
- **FAQ :** obligation ; dispenses ; catégories ; changement ; information des salariés ; dirigeant.
- **CTA :** « Faire analyser mon régime santé collectif ».
- **Ordre :** Hero → choix Santé/Prévoyance → situations → contrôles Santé → processus → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots pour la route commune.

### Prévoyance collective

- **Hero :** sur la route commune, proposer un accès visuel distinct « Prévoyance » sans créer immédiatement une nouvelle URL.
- **Sous-titre :** incapacité, invalidité et décès sont examinés selon le statut, la catégorie et le cadre applicable.
- **Arguments :** bénéficiaires ; catégories ; prestations ; assiettes ; maintien ; situations en cours.
- **Preuve prioritaire :** grille de comparaison réelle et expurgée.
- **FAQ :** obligation ; cadres/non-cadres ; refus ; articulation avec santé ; changement ; portabilité.
- **CTA :** « Faire analyser mon régime de prévoyance ».
- **Ordre :** même page, avec une bifurcation claire vers le bloc Prévoyance puis CTA prérempli distinct.
- **Longueur cible :** pas d’allongement automatique ; créer une page autonome seulement avec intention et contenu propres validés.

### Multirisque professionnelle

- **Hero :** conserver le H1 et rendre immédiatement visibles sites, valeurs et interruption.
- **Sous-titre :** les capitaux et scénarios doivent suivre l’évolution réelle de l’entreprise.
- **Arguments :** sites ; matériels/stock ; événements ; valeurs ; pertes d’exploitation ; prévention.
- **Preuve prioritaire :** exemple d’inventaire ou étude de cas d’évolution de site.
- **FAQ :** valeurs ; sous-assurance ; perte d’exploitation ; franchise ; multi-sites ; matériel hors locaux.
- **CTA :** « Faire analyser ma multirisque ».
- **Ordre :** Hero → situations déclenchantes → valeurs/scénarios → preuve → garanties/limites → méthode → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots.

### Cyberassurance

- **Hero :** conserver le H1 et identifier les outils et dépendances essentiels.
- **Sous-titre :** garanties, services de crise, sauvegardes, exclusions et responsabilités sont examinés ensemble.
- **Arguments :** dépendances ; prévention ; réponse à incident ; restauration ; responsabilité ; sous-traitants.
- **Preuve prioritaire :** carte de dépendances ou scénario d’analyse réel, sans prétendre à une certification cyber.
- **FAQ :** conditions de garantie ; sauvegardes ; assistance ; rançongiciel ; données ; prestataires ; articulation RC.
- **CTA :** « Faire analyser mon exposition cyber ».
- **Ordre :** Hero → scénarios concrets → points de contrôle → ressource → méthode → FAQ → CTA.
- **Longueur cible :** 900 à 1 200 mots, avec mises à jour datées.

## 8. Trust — plan de confiance immédiate

### Signaux présents à conserver

| Signal | Emplacement actuel | Valeur | Optimisation possible |
|---|---|---|---|
| ORIAS | topbar, footer, légal | vérification réglementaire | relier clairement le numéro au registre sans transformer l’inscription en label qualitatif |
| Jules HONORE | pages dédiées, légal, données éditoriales | interlocuteur identifié | lien contextuel depuis les blocs de preuve et guides relus |
| Paris / intervention nationale | topbar, contenus, Cabinet | proximité et portée | conserver la formulation cohérente sur toutes les pages |
| téléphone et email | topbar, footer, accueil | contact direct | proposer le canal au moment de la décision, pas seulement dans le footer |
| méthode | pages business et Audit | différenciation | matérialiser un livrable ou une grille |
| politiques légales et éditoriales | footer | transparence | ne pas surcharger les héros ; conserver l’accès permanent |

### Signaux à ajouter après preuve

| Signal | Placement idéal | Impact immédiat | Risque / garde-fou |
|---|---|---|---|
| bloc « Après votre demande » | près du CTA final et du formulaire | réduit l’incertitude | ne pas annoncer de délai non validé |
| extrait de livrable | Audit puis pages business | rend la méthode tangible | anonymisation et accord |
| avis Google | Cabinet, accueil, proximité du formulaire | preuve sociale forte | avis authentiques ; pas de faux carrousel ni note structurée trompeuse |
| étude de cas | page business correspondante | expertise et identification | dossier réel uniquement |
| lien LinkedIn Jules HONORE | Cabinet, page Jules, signature éditoriale | vérification de l’identité et activité | profil cohérent et maintenu |
| rôle du réseau Assuromieux | Cabinet / footer institutionnel | taille perçue et accès au réseau | formulation validée sur indépendance, rôle et périmètre |
| compagnies consultées | bloc méthodologique, pas dans le hero | rassure sur l’accès au marché | logos et verbes autorisés ; ne pas laisser croire à l’exhaustivité |
| partenaires professionnels | Cabinet / études de cas pertinentes | autorité et recommandation | relation réelle et autorisation |
| certifications/formations | page Jules HONORE | compétence vérifiable | intitulé, organisme et validité exacts |
| interview ou intervention | page Jules / ressources | autorité externe | lien vers la publication ou l’événement réel |
| engagement de réponse | CTA/formulaire | réduit l’attente perçue | mesurer d’abord la capacité opérationnelle |
| sécurité et confidentialité | formulaire | rassure avant l’envoi | langage clair, sans badge de sécurité inventé |

### Ce qui est déconseillé

- logo d’une compagnie sans autorisation ou sans expliquer la relation ;
- logo client sans accord écrit ;
- compteur de clients, économies ou dossiers non vérifié ;
- badge « expert », « n°1 », « meilleur courtier » ou équivalent ;
- widget d’avis lourd qui dégrade les performances ;
- données structurées d’avis qui ne correspondent pas à des avis visibles et éligibles ;
- photographie de banque d’images présentée comme équipe ou client réel.

## 9. Plan d’action priorisé

| Action | Temps estimé | Impact SEO | Impact conversion | Priorité | ROI |
|---|---:|---:|---:|---:|---:|
| harmoniser le `ctaLabel` global sur RC, Flotte, Santé/prévoyance, Multirisque et Cyber | 1 à 2 h | faible | très fort | P1 | très élevé |
| remplacer « Analyse gratuite » par « Premier échange » ou définir précisément la gratuité | 30 min + validation | faible | fort | P1 | très élevé |
| ajouter une microcopie sous chaque CTA principal | 1 à 2 h | faible | fort | P1 | très élevé |
| ajouter « Après votre demande » en trois étapes | 2 à 4 h | faible | très fort | P1 | très élevé |
| tester le téléphone facultatif | 1 à 2 h + observation | nul | très fort | P1 | très élevé |
| placer le besoin principal en premier dans le formulaire | 1 à 2 h | nul | fort | P1 | élevé |
| contextualiser le bouton d’envoi selon le besoin | 2 à 4 h | nul | fort | P1 | élevé |
| publier un extrait anonymisé de synthèse d’audit | 0,5 à 1 jour | moyen | très fort | P1 | très élevé |
| publier la première étude de cas Transport | 1 à 3 jours | fort | très fort | P1 | très élevé |
| publier la grille de vérification Décennale | 1 à 2 jours | fort | très fort | P1 | élevé |
| créer le modèle d’état de parc Flotte | 0,5 à 1 jour | moyen | très fort | P1 | élevé |
| proposer un CTA direct Cal.com sur Audit à titre de test | 1 à 2 h | nul | fort | P2 | élevé |
| créer deux choix « analyser l’existant » / « préparer une consultation » | 0,5 à 1 jour | faible | très fort | P2 | élevé |
| séparer les préremplissages Santé et Prévoyance sur la route commune | 2 à 4 h | faible | fort | P1 | élevé |
| relier LinkedIn depuis la page Jules et les signatures éditoriales | 30 min après validation | moyen | moyen | P2 | élevé |
| intégrer des avis Google authentiques sans widget lourd | 0,5 jour | moyen | très fort | P1 | élevé |
| préciser le rôle réel du réseau Assuromieux | 1 à 2 h + validation | moyen | fort | P2 | élevé |
| créer la check-list de renouvellement Audit | 1 à 2 jours | fort | très fort | P1 | élevé |
| tester un formulaire contextuel sur une seule page prioritaire | 0,5 à 1 jour | nul | fort | P3 | moyen |
| activer la mesure uniquement après consentement et validation juridique | 1 à 3 jours selon solution | indirect | indispensable au pilotage | P1 | très élevé |
| rapprocher mensuellement Formspree, Cal.com, devis et clients | 1 h/mois | nul | très fort | P1 | très élevé |
| obtenir et documenter les autorisations de logos/partenaires | variable | faible | moyen à fort | P3 | variable |

### Priorités immédiates

Les cinq actions à lancer avant tout chantier lourd :

1. harmoniser les libellés globaux ;
2. expliquer la suite après clic ;
3. décider si le téléphone doit rester obligatoire ;
4. préparer un extrait réel de livrable ;
5. choisir le premier dossier client publiable.

## 10. Roadmap conversion

### Dans les 7 jours

| Action | Responsable | Résultat attendu |
|---|---|---|
| définir le périmètre du « premier échange » et de la gratuité | Jules HONORE | formulation publique validée |
| décider de l’obligation du téléphone | Jules HONORE | règle de qualification claire |
| valider les neuf libellés CTA cibles | Jules HONORE + UX | dictionnaire unique par page |
| documenter le parcours actuel : page → clic → formulaire → succès → Cal → devis | commercial | état zéro sans outil supplémentaire |
| identifier un livrable anonymisable | Jules HONORE | preuve P1 disponible |
| sélectionner deux dossiers candidats pour cas client | Jules HONORE | autorisation à solliciter |
| relever manuellement demandes, appels, emails, rendez-vous et source | commercial | première semaine de référence |

### Dans les 30 jours

- déployer dans une mission distincte les libellés contextualisés et microcopies ;
- ajouter le bloc « Après votre demande » ;
- tester le téléphone facultatif ou la préférence de contact ;
- rendre visible un extrait de livrable réel ;
- publier ou préparer la première étude de cas Transport ;
- demander des avis Google à des clients éligibles selon la stratégie Mission 36 ;
- tester Cal.com comme alternative sur la page Audit seulement ;
- créer la check-list de renouvellement et le modèle de collecte Transport ;
- vérifier chaque semaine la qualité des demandes, pas seulement leur volume.

### Dans les 90 jours

- publier trois études de cas : Transport, BTP et Flotte ;
- disposer de trois lead magnets opérationnels et de leur version HTML ;
- distinguer les intentions Santé et Prévoyance dans le formulaire et la page commune ;
- tester le chemin « préparer une consultation/devis » sur une page produit ;
- relier les avis authentiques, LinkedIn et preuves éditoriales ;
- analyser les événements préparés par la Mission 33 si GA4 est légalement activé ;
- mesurer par page : clic CTA, début, succès, canal, rendez-vous, devis, client ;
- arrêter les variantes sans gain ou qui diminuent la qualité des demandes.

### Dans les 6 mois

- publier quatre à six études de cas réelles maximum ;
- maintenir une bibliothèque limitée de lead magnets à forte valeur ;
- disposer d’une base régulière d’avis Google authentiques, sans quota artificiel ;
- documenter les partenaires/compagnies pouvant être cités avec autorisation ;
- optimiser les pages selon les données de conversion et non selon des préférences ;
- comparer la contribution de l’Audit, du téléphone, de l’email et de Cal.com ;
- calculer le taux de transformation en devis puis en client par secteur et produit ;
- concentrer les investissements sur les pages générant des demandes qualifiées.

## Tableau de pilotage CRO

| Étape | KPI | Source | Fréquence | Décision associée |
|---|---|---|---|---|
| exposition | sessions par page business | GA4 après activation conforme ou estimation serveur | mensuelle | pages à prioriser |
| intérêt | clics CTA / sessions | événement `audit_cta_click` | mensuelle | message et visibilité |
| intention | débuts formulaire / clics CTA | `form_start` | mensuelle | continuité de destination |
| conversion | succès / débuts | `audit_form_submit_success` | hebdomadaire/mensuelle | friction des champs |
| canal | téléphone, email, Cal.com | événements + journal manuel | hebdomadaire | canal à mettre en avant |
| qualité | demandes qualifiées / succès | suivi commercial | mensuelle | ciblage et lead magnets |
| opportunité | devis / demandes qualifiées | suivi commercial | mensuelle | pertinence de l’offre |
| business | clients / devis | suivi commercial | mensuelle | efficacité commerciale |
| valeur | CA et marge par source | comptabilité/CRM | trimestrielle | allocation de l’effort |

Ne jamais envoyer à GA4 le nom, l’entreprise, l’email, le téléphone, le message, le numéro de contrat ou toute donnée libre.

## Protocole de test

1. Définir une hypothèse unique.
2. Choisir une page ou un segment prioritaire.
3. Noter l’état initial pendant une période comparable.
4. Modifier un seul levier : libellé, microcopie, champ ou canal.
5. Mesurer volume **et qualité** des demandes.
6. Conserver, corriger ou abandonner.
7. Documenter la décision avant le test suivant.

En cas de faible trafic, préférer un test séquentiel de quatre à six semaines et une lecture qualitative des demandes à un faux test A/B sans puissance statistique.

## Décisions humaines nécessaires

1. Le premier échange est-il réellement gratuit, et jusqu’où ?
2. Le téléphone est-il indispensable avant qualification ?
3. Quel délai de premier retour peut être tenu toute l’année ?
4. Cal.com peut-il être proposé avant soumission sur Audit ?
5. L’entreprise accepte-t-elle deux parcours : analyse de l’existant et préparation d’une consultation ?
6. Quel livrable réel peut être montré ?
7. Quels dossiers peuvent devenir des cas clients ?
8. Quels avis, logos, partenaires, compagnies, certifications et expériences sont vérifiables et autorisés ?
9. Quelle compétence valide les contenus Santé/prévoyance ?
10. Quand la mesure GA4 et le consentement seront-ils juridiquement activés ?

## Sources internes utilisées

- `AGENTS.md` ;
- `docs/POSITIONNEMENT-DE-MARQUE.md` ;
- `docs/PRINCIPES-UX-EDITORIAUX.md` ;
- `docs/VISION-SITE-CIBLE.md` ;
- `docs/MISSION-09-CONVERSION.md` ;
- `docs/MISSION-33-MESURE-CONVERSIONS.md` ;
- `docs/MISSION-35-AUDIT-SEO-STRATEGIQUE.md` ;
- `docs/MISSION-36-AUTORITE-SEO-ET-NOTORIETE.md` ;
- `docs/MISSION-37-PLAN-DIRECTEUR-CROISSANCE-2026-2027.md` ;
- `docs/MISSION-39-PLAN-ATTAQUE-CONCURRENTS.md` ;
- `docs/MISSION-40-CLUSTER-SEO-BUSINESS.md` ;
- `src/components/Header.astro` ;
- `src/components/Topbar.astro` ;
- `src/components/StickyMobileCTA.astro` ;
- `src/components/PageCTA.astro` ;
- `src/components/ContactForm.astro` ;
- les huit pages business concernées.

## Conclusion

Le site possède déjà une bonne architecture de conversion : CTA visibles, préremplissage, téléphone/email directs, formulaire accessible et Cal.com après succès. La progression ne viendra pas de davantage de boutons.

Elle viendra de quatre changements : rendre chaque action spécifique à la page, réduire la friction du passage au formulaire, montrer une preuve réelle de la méthode et laisser le prospect comprendre puis choisir la prochaine étape. Le premier lot doit rester limité à ces quick wins, mesurés jusqu’au devis et au client.
