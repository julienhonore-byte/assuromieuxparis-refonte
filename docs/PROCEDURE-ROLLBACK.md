# Procédure de rollback

## Préconditions

Avant toute production, renseigner : ID du dernier déploiement stable, hash Git correspondant, sauvegarde de l'ancienne production, configuration DNS initiale, responsables et accès Netlify/DNS.

## Déclenchement

Le décideur désigné déclenche le rollback si un critère de `PROCEDURE-MISE-EN-PRODUCTION.md` est atteint. Heure, symptôme, décision et responsable sont consignés.

## Rollback Netlify

1. Dans Netlify, sélectionner le dernier déploiement **publié et validé**.
2. Utiliser la restauration atomique du déploiement précédent.
3. Ne pas reconstruire à partir d'une branche incertaine pendant l'incident.
4. Vérifier accueil, HTTPS, formulaire, robots et trois routes critiques.
5. Confirmer la restauration avec le décideur métier.

## Rollback DNS

Si la bascule a changé l'hébergeur : restaurer exactement les enregistrements sauvegardés, conserver les valeurs explicites et surveiller la propagation. Ne jamais improviser une cible. Les valeurs sont **À fournir par Assuromieux** avant le GO.

## Rollback Git

- Préférer un nouveau commit de revert traçable ; ne pas réécrire l'historique partagé.
- Ne jamais utiliser `git reset --hard` sur le dépôt de travail.
- Ne jamais toucher aux références protégées.
- Après stabilisation, corriger sur une branche dédiée et reprendre la procédure complète.

## Vérifications après restauration

- Code HTTP et contenu de l'accueil.
- Certificat et redirections de domaine.
- Formulaire et destination des emails.
- État d'indexation attendu.
- Mentions légales et données réglementaires.
- Logs et erreurs 404.

## Communication et post-mortem

Notifier les responsables métier, conformité et technique. Documenter impact, durée, données éventuellement concernées, cause, actions correctives et décision de nouveau déploiement. En cas d'incident de données personnelles, appliquer la procédure RGPD validée par Assuromieux.
