# Mission 85 — CRO / conversion

Date de contrôle : 15 août 2026

Périmètre : Assuromieux Paris uniquement

Décision : trois optimisations P1 limitées au formulaire partagé, sans modification SEO ni déploiement

## 1. État Git initial

- Branche : `main`.
- `HEAD` initial : `893fbdf584a44cc973deb03e96834e8b302f564a`.
- `origin/main` initial : `893fbdf584a44cc973deb03e96834e8b302f564a`.
- Arbre suivi initial : propre.
- Les rapports et dossiers `output/` non suivis préexistants ont été inventoriés et préservés sans modification ni suppression.

## 2. Données GA4 disponibles

La propriété GA4 « Assuromieux Paris » a été consultée dans la session authentifiée. Le Measurement ID affiché est bien `G-WWMFCQF196`.

Sur les sept derniers jours, l’interface affiche :

- utilisateurs actifs : 0 ;
- nouveaux utilisateurs : 0 ;
- nombre d’événements : 0 ;
- événements clés : 0 ;
- message de collecte : « Aucune donnée reçue de votre site Web pour l'instant ».

La vue Temps réel a ponctuellement affiché un utilisateur au Mexique pendant la recette. Cette activité correspond vraisemblablement à la session de contrôle et n’est pas exploitable comme donnée business.

Les événements attendus dans le code restent : `page_view`, `generate_lead`, `quote_start`, `audit_start`, `form_start`, `form_error`, `click_phone`, `click_email` et `booking_start`.

## 3. Limites statistiques

Le volume actuel ne permet de calculer aucun taux réel entre :

- `page_view` et `quote_start` ;
- `page_view` et `audit_start` ;
- `quote_start` ou `audit_start` et `form_start` ;
- `form_start` et `generate_lead`.

Aucun taux de conversion ni taux d’abandon n’est donc avancé. Les décisions de cette mission reposent uniquement sur la structure, la clarté, l’accessibilité et la friction observable.

## 4. Pages auditées

1. `/`
2. `/audit-assurances-entreprise/`
3. `/assurance-transport/`
4. `/assurance-btp-decennale/`
5. `/rc-professionnelle/`
6. `/flotte-automobile/`
7. `/cyberassurance/`
8. `/sante-prevoyance-entreprise/`
9. `/multirisque-professionnelle/`
10. `/protection-dirigeant/`

Chaque page présente un H1 unique, une proposition métier compréhensible, un CTA transactionnel principal, un CTA d’analyse secondaire et des repères de confiance. Aucun débordement horizontal n’a été détecté lors de la recette.

## 5. Matrice CRO

| Page | Intention | CTA principal | CTA secondaire | Friction principale | Classement | Action retenue | Impact potentiel | Risque |
|---|---|---|---|---|---|---|---|---|
| Accueil | Orientation générale / devis | Recevoir un devis personnalisé | Faire analyser mes contrats | Formulaire initial trop exigeant | P1 | Alléger et contextualiser le formulaire partagé | Plus de démarrages complets | Faible |
| Audit | Analyse de contrats | Recevoir un devis personnalisé | Faire analyser mes contrats | L’action devis reste visuellement première sur une page Audit | P2 | Mesurer avant de changer la hiérarchie | Clarté possible du parcours Audit | Moyen, car cohérence globale à préserver |
| Transport | Transactionnelle et expertise | Démarrer ma demande de devis Transport | Faire analyser mon programme transport | Aucune friction above the fold majeure | Ne pas toucher | Formulaire partagé uniquement | Conversion sans toucher la page SEO | Faible |
| BTP / Décennale | Transactionnelle | Démarrer ma demande de devis Décennale | Vérifier mes activités et mes contrats | Aucune friction majeure | Ne pas toucher | Formulaire partagé uniquement | Moins d’abandon potentiel | Faible |
| RC professionnelle | Transactionnelle | Démarrer ma demande de devis RC Pro | Faire analyser ma RC professionnelle | Aucune friction majeure | Ne pas toucher | Formulaire partagé uniquement | Moins d’abandon potentiel | Faible |
| Flotte | Transactionnelle | Démarrer ma demande de devis Flotte | Faire analyser ma flotte | Cluster en observation | Ne pas toucher | Aucune modification de page | Protection de la période d’observation | Nul |
| Cyber | Exploration / transaction | Recevoir mon devis Cyber | Faire analyser mon exposition cyber | Besoin souvent moins mature | P2 | Mesurer les deux intentions | Meilleure connaissance des parcours | Nul |
| Santé / Prévoyance | Transactionnelle complexe | Recevoir mon devis Santé Entreprise | Faire analyser mon régime santé et prévoyance | Le besoin peut nécessiter une qualification ultérieure | P2 | Garder la qualification optionnelle repliée | Formulaire initial plus léger | Faible |
| Multirisque | Transactionnelle | Recevoir mon devis Multirisque | Faire analyser ma multirisque | Aucune friction majeure | Ne pas toucher | Formulaire partagé uniquement | Moins d’abandon potentiel | Faible |
| Protection du dirigeant | Étude personnalisée | Recevoir une étude personnalisée | Faire analyser ma protection | Intention moins directement comparable à un devis | P3 | Conserver le libellé spécifique | Maintien du positionnement conseil | Nul |

## 6. Parcours Devis

Parcours validé : landing métier → preuves → CTA devis contextualisé → paramètres `intent=quote` et `product` → formulaire préconfiguré → envoi réel → `generate_lead` uniquement après succès.

Le CTA est explicite sur chaque page métier et conserve le produit d’origine. Après modification, le parcours Devis ne demande plus que prénom, nom, entreprise et e-mail au premier contact. Téléphone, code postal, message et qualification détaillée restent disponibles sans bloquer l’envoi.

## 7. Parcours Audit

Parcours validé : landing → problématique / méthode → CTA Audit contextualisé → paramètres `intent=audit` et `product` → formulaire préconfiguré → envoi réel.

L’intitulé, l’introduction et le bouton distinguent désormais nettement l’analyse du devis. Le message reste obligatoire dans ce parcours, car il constitue l’information minimale nécessaire pour comprendre le point à analyser.

## 8. Parcours Téléphone et rendez-vous

Le téléphone `06 95 69 96 74` est visible dans le bloc de contact et le footer, cliquable via `tel:+33695699674` et associé au suivi `click_phone`.

L’e-mail `jules@assuromieuxparis.com` est visible sans surexposition supplémentaire, utilise un lien `mailto:` et conserve le suivi `click_email`.

Cal.com est proposé après un envoi réussi. Ce positionnement évite de concurrencer prématurément le devis et l’audit, tout en offrant une prochaine étape directe. Le suivi `booking_start` reste en place. Aucun rendez-vous n’a été créé pendant la recette.

## 9. Audit des CTA

Les pages utilisent deux niveaux cohérents :

- primaire : devis ou étude personnalisée ;
- secondaire : analyse ou vérification des contrats.

Les CTA sont présents dans le Hero, à des étapes intermédiaires pertinentes, en fin de page et dans le CTA mobile. La répétition reste cohérente, car les libellés et destinations sont identiques à l’intérieur d’un parcours. Aucune action concurrente supplémentaire n’a été ajoutée.

Avant modification, le bouton final du formulaire restait générique : « Envoyer ma demande ». Après modification :

- Devis : « Envoyer ma demande de devis » ;
- Audit : « Demander l’analyse de mes contrats » ;
- demande générique : « Envoyer ma demande ».

## 10. Audit du formulaire

### Avant

- parcours générique : 5 champs obligatoires ;
- parcours Devis : 6 champs obligatoires, dont téléphone et code postal ;
- parcours Audit : 6 champs obligatoires, dont code postal et message ;
- qualification métier détaillée disponible dans un volet replié ;
- libellé d’envoi générique.

### Après

- parcours générique : 4 champs obligatoires — prénom, nom, entreprise, e-mail ;
- parcours Devis : 4 champs obligatoires ;
- parcours Audit : 5 champs obligatoires — les quatre précédents et le message ;
- téléphone facultatif, avec une indication claire pour le rappel ;
- code postal facultatif, demandé seulement si la zone d’activité est utile ;
- qualification détaillée toujours optionnelle et repliée ;
- bouton adapté à l’intention.

L’ordre reste logique, les types `email`, `tel` et `postal-code` sont conservés, les labels sont explicites et la politique de confidentialité reste accessible avant l’envoi.

## 11. Audit mobile

Recette réelle effectuée à 390 px, complétée par des contrôles à 768, 1280 et 1440 px.

- aucun overflow horizontal ;
- CTA mobile visible et suffisamment grand ;
- formulaire lisible ;
- téléphone cliquable ;
- e-mail cliquable ;
- types de clavier adaptés conservés ;
- qualification avancée repliée ;
- aucune image cassée ;
- un seul H1 par page contrôlée.

Captures de la page modifiée :

- `output/mission-85-captures/formulaire-devis-mobile-390.png` ;
- `output/mission-85-captures/formulaire-devis-desktop-1280.png`.

## 12. Preuves de confiance

Les preuves existantes sont suffisantes et bien positionnées :

- ORIAS 26003798 avec lien direct ;
- Jules HONORE comme interlocuteur ;
- implantation à Paris et intervention nationale ;
- méthode et politique éditoriale ;
- première réponse annoncée sous 48 h ouvrées ;
- absence d’engagement ;
- coordonnées complètes ;
- étapes expliquant la suite ;
- rappel qu’aucun devis définitif n’est établi sans étude du dossier complet.

Aucun avis, partenaire, chiffre, client ou résultat non vérifié n’a été ajouté.

## 13. Frictions identifiées

1. Téléphone obligatoire pour un devis alors qu’un échange écrit peut suffire au premier contact.
2. Code postal obligatoire pour toutes les demandes, y compris lorsqu’il n’est pas nécessaire au premier cadrage.
3. Bouton final générique ne confirmant pas clairement la nature de l’action.
4. Données GA4 absentes, empêchant de hiérarchiser les abandons réels.
5. Cal.com n’est visible qu’après succès ; ce choix est cohérent avec le parcours actuel, mais devra être mesuré quand les données seront disponibles.

## 14. Priorités P1, P2 et P3

### P1 appliquées

1. Rendre le téléphone facultatif dans le parcours Devis.
2. Rendre le code postal facultatif dans tous les parcours.
3. Contextualiser le bouton final selon Devis ou Audit.

### P2 à mesurer

- comparer les démarrages Audit et Devis sur la page Audit ;
- mesurer l’usage de la qualification optionnelle ;
- mesurer les abandons après `form_start` ;
- vérifier si une alternative de prise de rendez-vous avant envoi devient utile.

### P3

- réévaluer le libellé « étude personnalisée » seulement avec des données suffisantes ;
- envisager des tests de microcopy après stabilisation d’un volume significatif.

## 15. Modifications retenues

Une seule intervention partagée : `src/components/ContactForm.astro`.

Elle apporte trois améliorations P1 et bénéficie à toutes les pages sans modifier leur contenu principal, leur référencement ou leur design.

## 16. Modifications volontairement rejetées

- aucun changement de H1, title, meta description, canonical, robots ou URL ;
- aucune réécriture de page commerciale ;
- aucune modification du cluster Flotte ;
- aucune nouvelle preuve sociale ;
- aucun popup, chatbot, widget, carrousel ou script marketing ;
- aucun déplacement de Cal.com ;
- aucune modification de la navigation, du header ou du footer ;
- aucun allongement du formulaire ;
- aucune modification du wording des CTA de page déjà cohérents.

## 17. Fichiers modifiés et créés

Fichier source modifié :

- `src/components/ContactForm.astro`.

Rapport créé :

- `docs/MISSION_85_CRO_CONVERSION.md`.

Captures créées :

- `output/mission-85-captures/accueil-mobile-390.png` ;
- `output/mission-85-captures/accueil-desktop-1280.png` ;
- `output/mission-85-captures/formulaire-devis-mobile-390.png` ;
- `output/mission-85-captures/formulaire-devis-desktop-1280.png`.

Les fichiers non suivis antérieurs restent exclus du périmètre.

## 18. Avant / après

| Élément | Avant | Après |
|---|---|---|
| Téléphone Devis | Obligatoire | Facultatif |
| Code postal | Obligatoire | Facultatif |
| Champs obligatoires Devis | 6 | 4 |
| Champs obligatoires Audit | 6 | 5 |
| Bouton Devis | Envoyer ma demande | Envoyer ma demande de devis |
| Bouton Audit | Envoyer ma demande | Demander l’analyse de mes contrats |
| Qualification détaillée | Optionnelle et repliée | Inchangée |

## 19. Contrôle SEO

Les H1, titles, meta descriptions, canonicals, robots, URLs, contenus principaux, maillage interne et règles d’indexation sont inchangés. La page Flotte n’a pas été modifiée. Les dix pages contrôlées conservent un H1 unique.

## 20. Contrôle GA4

- Measurement ID inchangé : `G-WWMFCQF196`.
- Aucun événement renommé, ajouté ou supprimé.
- Les paramètres `intent` et `product` restent transmis par les CTA.
- Le refus des cookies a été testé sans bloquer la navigation.
- Aucun taux de conversion n’a été inventé.

## 21. Contrôle Formspree

- Endpoint et traitement inchangés.
- `generate_lead` reste déclenché uniquement après une réponse Formspree réussie.
- La validation des champs obligatoires a été testée sans envoyer de demande.
- Aucun faux lead ni rendez-vous n’a été créé.

## 22. Performance

La modification retire de la logique de validation et ne charge aucune ressource supplémentaire. Aucun JavaScript externe, média, composant lourd ou dépendance n’a été ajouté. Aucun impact négatif attendu sur les Core Web Vitals.

## 23. Responsive et accessibilité

Les contrôles à 390, 768, 1280 et 1440 px ne révèlent aucun overflow ni image cassée sur les pages représentatives contrôlées. Les labels, descriptions et attributs d’autocomplétion sont conservés. Le clic sur un formulaire vide expose les erreurs natives des quatre champs réellement obligatoires sans requête externe.

## 24. Risques

- L’allègement peut réduire la qualification initiale ; ce risque est limité par le volet optionnel et le suivi humain.
- Certains prospects peuvent ne pas renseigner de téléphone ; l’e-mail professionnel obligatoire maintient un canal de réponse.
- Sans données GA4, le gain réel ne peut être quantifié avant observation en production.
- Le texte du bouton est piloté côté client en fonction de l’intention ; sa recette doit rester incluse dans les futurs contrôles du formulaire.

## 25. Hypothèses à mesurer après publication

Sur une période suffisamment longue et avec un volume significatif :

1. évolution du ratio `quote_start` → `form_start` ;
2. évolution du ratio `audit_start` → `form_start` ;
3. évolution du ratio `form_start` → `generate_lead` ;
4. fréquence de `form_error` ;
5. part des leads avec téléphone et code postal malgré leur caractère facultatif ;
6. répartition Devis / Audit par page d’entrée ;
7. contribution de `click_phone`, `click_email` et `booking_start`.

Aucun seuil de succès chiffré ne doit être fixé avant l’obtention d’une baseline réelle.

## 26. Recommandations pour la suite

1. Valider visuellement les deux captures de formulaire.
2. Ne publier qu’après validation explicite de cette mission.
3. Vérifier en priorité la reprise effective de la collecte GA4 avant toute nouvelle expérimentation CRO.
4. Observer au moins plusieurs semaines ou jusqu’à disposer d’un volume exploitable.
5. N’engager ensuite qu’un test isolé, fondé sur les données, afin d’attribuer correctement son effet.

## Conclusion

Le site explique déjà clairement pourquoi contacter Assuromieux Paris et propose deux parcours cohérents : devis pour une intention transactionnelle, audit pour une entreprise qui souhaite analyser ses contrats. La mission réduit uniquement les exigences du premier contact et rend l’action finale plus explicite. Le positionnement premium, le SEO, la mesure, Formspree et les preuves de confiance restent protégés.
