# Checklist GO / NO GO — RC2

Date : 22 juillet 2026

Statuts autorisés : **Validé** · **Validé sous réserve** · **A fournir** · **Bloquant**.

## Technique

- **Validé** — installation figée, vérification et build.
- **Validé** — 39 pages attendues après ajout des deux pages légales.
- **Validé** — liens internes, anchors, titles, descriptions, canonicals, H1 et JSON-LD contrôlés.
- **Validé** — références protégées intactes.

## Interface et accessibilité

- **Validé** — responsive, menu clavier, labels, focus et `aria-live` selon les contrôles locaux.
- **Validé sous réserve** — zoom 200 % et lecteur d’écran à confirmer sur préproduction privée.

## Contenus métier

- **Validé sous réserve** — cinq pages produits relues, indexation différée.
- **Bloquant pour sa route** — santé/prévoyance exige une validation humaine spécialisée avant indexation.
- **Validé sous réserve** — six guides techniquement/éditorialement cohérents.
- **Bloquant pour leurs routes** — signature humaine et changement de `review-required` avant indexation.

## Légal et réglementaire

- **Validé sous réserve** — pages Mentions légales et Politique de confidentialité créées et reliées.
- **À fournir** — identité, forme, capital, SIREN/SIRET/RCS, TVA, siège et directeur de publication.
- **À fournir** — ORIAS attesté, catégorie, autorité, réclamations et médiation.
- **À fournir** — hébergeur et titulaire des droits.
- **Bloquant** — aucune publication tant que les placeholders et valeurs globales ne sont pas validés.

## Formulaire et données

- **Validé** — structure, POST, préremplissage, erreurs, honeypot et lien confidentialité.
- **À fournir** — propriétaire/destinataire/quota Formspree et paramètres Cal.com.
- **À fournir** — base juridique, destinataires, conservation, transferts et contact droits.
- **Bloquant** — envoi réel autorisé non exécuté.

## SEO et indexation

- **Validé** — `noindex, nofollow` et `Disallow: /` conservés.
- **Validé** — première vague de dix routes définie.
- **Validé sous réserve** — sitemap filtré différé à la mission d’ouverture.
- **Bloquant** — aucune levée sans GO signé et contrôle Netlify.

## Hébergement et exploitation

- **Validé** — configuration Astro/Netlify et procédures documentées.
- **À fournir** — compte, branche, responsables, domaine/DNS et cible de rollback.
- **Bloquant** — recette privée Netlify non exécutée.

## Décision

# GO SOUS CONDITIONS

La RC2 peut passer à une préproduction privée. Elle ne peut pas être publiée publiquement tant que les éléments marqués **Bloquant** et **A fournir** ne sont pas clos. Les produits/guides différés ne bloquent pas le noyau si leur `noindex` est maintenu.

| Rôle | Nom | Décision | Date |
|---|---|---|---|
| Métier | A fournir par Assuromieux | — | — |
| Conformité/juridique | A fournir par Assuromieux | — | — |
| Technique | A fournir par Assuromieux | — | — |
| Décideur final | A fournir par Assuromieux | — | — |
