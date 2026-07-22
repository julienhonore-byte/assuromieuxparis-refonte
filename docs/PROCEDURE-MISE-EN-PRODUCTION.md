# Procédure de mise en production

Cette procédure ne vaut pas autorisation. Elle ne doit être exécutée qu'après un GO signé dans `CHECKLIST-GO-NO-GO.md`.

## Rôles à nommer

- Responsable métier : À fournir par Assuromieux.
- Responsable conformité/juridique : À fournir par Assuromieux.
- Responsable technique/déploiement : À fournir par Assuromieux.
- Responsable DNS : À fournir par Assuromieux.
- Décideur GO/rollback : À fournir par Assuromieux.

## J-7 à J-2

1. Geler les contenus et obtenir les validations produits, guides, légales et réglementaires.
2. Archiver justificatifs ORIAS, identité, adresse, immatriculation et textes légaux.
3. Valider le compte Formspree et effectuer une soumission réelle de test.
4. Exécuter la recette accessibilité et Lighthouse sur préproduction.
5. Valider le plan d'indexation et les redirections.
6. Sauvegarder la production actuelle, son DNS et son contenu.
7. Réduire le TTL DNS si une bascule DNS est prévue.

## J-1

1. Créer le commit release et noter son hash.
2. Exécuter :

```sh
pnpm install --frozen-lockfile
pnpm verify
pnpm build
```

3. Vérifier 37 pages, 404, liens, canonicals, schémas, formulaire et headers.
4. Créer le sitemap filtré et la configuration robots de production dans un commit dédié.
5. Faire relire le diff supprimant les blocages d'indexation.
6. Confirmer la fenêtre, les contacts et le seuil de rollback.

## Jour J — avant bascule

1. Déployer le commit approuvé sur Netlify sans changer le domaine.
2. Tester l'URL Netlify : HTTPS, 37 routes, formulaire réel autorisé, 404, redirections, sitemap et robots.
3. Vérifier que seules les routes prévues sont indexables.
4. Prendre une capture/empreinte des réponses critiques.
5. Obtenir le GO final métier, conformité et technique.

## Bascule

1. Associer le domaine ou modifier les DNS selon le plan validé.
2. Vérifier certificat, www/non-www, HTTP→HTTPS et canonical.
3. Vérifier accueil, pages principales, 404 et formulaire depuis le domaine final.
4. Vérifier robots/sitemap ; soumettre Search Console uniquement après ces contrôles.
5. Ne jamais écraser ni supprimer `source/index-production-reference.html` ou l'ancien `index.html` dans cette opération.

## H+1, H+24, J+7

- H+1 : erreurs Netlify, formulaire, HTTPS, redirections et pages prioritaires.
- H+24 : indexation, Search Console, demandes reçues et erreurs 404.
- J+7 : Core Web Vitals disponibles, requêtes, conversions et incidents.

## Critères de rollback immédiat

- Domaine ou HTTPS indisponible.
- Accueil ou routes commerciales en erreur.
- Formulaire perdant des demandes ou divulguant des données.
- Mauvaise version légale/réglementaire publiée.
- Blocage ou ouverture d'indexation contraire au plan.
- Régression majeure mobile ou accessibilité.
