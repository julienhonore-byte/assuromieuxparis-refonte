# Mission 16 — Checklist mensuelle de pilotage

Cette checklist est conçue pour une personne non technique. Elle doit être réalisée une fois par mois, idéalement dans les cinq premiers jours ouvrés.

## 1. Préparer la période

- [ ] Choisir le mois civil complet à analyser.
- [ ] Utiliser exactement les mêmes dates dans tous les outils.
- [ ] Ouvrir le tableau `MISSION-16-MODELE-KPI.md`.
- [ ] Noter tout incident, campagne, modification du site ou indisponibilité survenue pendant le mois.
- [ ] Vérifier que le domaine affiché est toujours `https://www.assuromieuxparis.com/`.

## 2. Search Console

### Propriété et sitemap

- [ ] Ouvrir la propriété Domaine `assuromieuxparis.com`.
- [ ] Ouvrir ensuite la propriété Préfixe `https://www.assuromieuxparis.com/`.
- [ ] Vérifier que le sitemap `https://www.assuromieuxparis.com/sitemap.xml` est « Réussi ».
- [ ] Comparer le nombre d’URL découvertes au nombre attendu pour la vague active.
- [ ] Signaler immédiatement une baisse ou une hausse inexpliquée.

### Indexation

- [ ] Ouvrir **Indexation > Pages**.
- [ ] Noter le nombre de pages indexées.
- [ ] Noter les principales raisons d’exclusion.
- [ ] Vérifier qu’aucune page juridique, 404 ou route différée n’est indexée par erreur.
- [ ] Vérifier qu’aucune des dix URL de vague 1 n’est exclue pour `noindex`, erreur serveur ou canonical inattendu.
- [ ] Inspecter toute URL prioritaire dont l’état a changé.

### Performance

- [ ] Ouvrir **Performances > Résultats de recherche**.
- [ ] Relever clics, impressions, CTR et position moyenne.
- [ ] Comparer au mois précédent.
- [ ] Séparer les requêtes de marque des requêtes génériques.
- [ ] Relever les cinq premières requêtes.
- [ ] Relever les cinq premières pages.
- [ ] Identifier les pages avec impressions en hausse mais CTR en baisse.
- [ ] Identifier les requêtes proches de la première page, sans modifier immédiatement le contenu.

### Expérience et alertes

- [ ] Consulter **Core Web Vitals**.
- [ ] Vérifier l’absence de nouveau groupe « médiocre » ou « à améliorer ».
- [ ] Consulter **Améliorations** et les éventuelles erreurs de données structurées.
- [ ] Lire les messages et actions manuelles.
- [ ] En cas d’alerte sécurité ou action manuelle, arrêter les optimisations et solliciter un responsable technique.

## 3. Mesure d’audience, si un outil est un jour activé

Si aucun outil analytics n’est installé, inscrire `ND` et passer à la section suivante.

- [ ] Vérifier que la collecte fonctionne uniquement sur la production.
- [ ] Relever sessions et utilisateurs.
- [ ] Relever les pages d’entrée principales.
- [ ] Relever `audit_submit_success`.
- [ ] Relever `phone_click`, `email_click` et `cal_outbound_click`.
- [ ] Vérifier les erreurs `audit_submit_error`.
- [ ] Contrôler que les événements ne contiennent aucune donnée personnelle.
- [ ] Exclure les tests et le trafic interne documenté.
- [ ] Vérifier qu’aucun Deploy Preview n’alimente les données.

## 4. Conversions réelles

### Formspree

- [ ] Relever les formulaires reçus pendant le mois.
- [ ] Retirer les doublons, tests et spams.
- [ ] Comparer le total reçu au total `audit_submit_success`, si disponible.
- [ ] Noter toute erreur de réception ou de notification.

### Téléphone et email

- [ ] Compter les appels réellement reçus et attribuables au site.
- [ ] Compter les emails réellement reçus et attribuables au site.
- [ ] Ne pas utiliser les clics comme substitut aux contacts réels.

### Cal.com

- [ ] Relever les rendez-vous confirmés.
- [ ] Relever les annulations et rendez-vous non honorés.
- [ ] Ne pas confondre clics sortants et réservations.

### Qualification

- [ ] Marquer les demandes qualifiées.
- [ ] Noter le produit, le secteur ou le besoin principal avec une nomenclature stable.
- [ ] Noter le canal connu : organic, direct, referral, email, social ou non attribué.
- [ ] Ne reporter aucune donnée nominative dans le tableau SEO.

## 5. Analyse des pages

- [ ] Mettre à jour le tableau des pages stratégiques.
- [ ] Identifier au maximum trois pages à étudier.
- [ ] Pour chaque page, formuler une hypothèse précise.
- [ ] Vérifier les requêtes avant de modifier un title, un H1 ou un contenu.
- [ ] Vérifier si la page génère des demandes qualifiées, pas seulement du trafic.
- [ ] Contrôler le maillage entrant si une page reçoit peu d’impressions.
- [ ] Contrôler la cannibalisation si deux pages apparaissent sur la même intention.

## 6. Opportunités et contenus

- [ ] Lister les questions réellement posées par les prospects.
- [ ] Comparer ces questions aux requêtes Search Console.
- [ ] Vérifier si une page existante peut être enrichie avant de proposer une nouvelle route.
- [ ] Ne proposer un guide que si l’intention, le relecteur et la capacité de mise à jour sont identifiés.
- [ ] Ne jamais créer un chiffre, témoignage, étude de cas ou preuve non vérifiée.
- [ ] Limiter la prochaine période à une ou deux actions éditoriales majeures.

## 7. Liens et autorité

- [ ] Consulter les principaux sites référents dans Search Console.
- [ ] Noter les nouveaux backlinks légitimes.
- [ ] Signaler les liens suspects sans engager de désaveu automatique.
- [ ] Rechercher les mentions professionnelles ou institutionnelles obtenues.
- [ ] Vérifier que toute nouvelle preuve publique est autorisée et documentée.

## 8. Contrôle technique simple

- [ ] Ouvrir l’accueil, l’Audit, Transport, BTP et une page secteur sur mobile.
- [ ] Vérifier que les CTA, le téléphone, l’email et Cal.com fonctionnent.
- [ ] Vérifier que le formulaire s’affiche correctement, sans envoyer de test non autorisé.
- [ ] Ouvrir `robots.txt` et confirmer le sitemap `www`.
- [ ] Ouvrir `sitemap.xml` et vérifier que seules les routes de la vague active apparaissent.
- [ ] Signaler toute page en erreur, redirection inattendue ou certificat HTTPS invalide.

## 9. Décision mensuelle

- [ ] Compléter le journal des changements.
- [ ] Sélectionner au maximum trois actions pour le mois suivant.
- [ ] Attribuer un responsable et une date à chaque action.
- [ ] Définir le KPI qui permettra de juger l’action.
- [ ] Ne pas élargir une vague d’indexation sans validation explicite.
- [ ] Archiver les exports Search Console et commerciaux.
- [ ] Fixer la date de la prochaine revue.

## Quand alerter immédiatement

- le domaine `www` redirige de nouveau vers l’apex ;
- l’accueil ou une page prioritaire répond en erreur ;
- une forte hausse des erreurs serveur apparaît ;
- une page prioritaire reçoit un `noindex` inattendu ;
- une page différée devient indexable sans décision ;
- le sitemap disparaît ou contient des URL non approuvées ;
- Search Console signale une action manuelle ou un problème de sécurité ;
- les formulaires ne sont plus reçus ;
- des données personnelles apparaissent dans un outil de mesure.

