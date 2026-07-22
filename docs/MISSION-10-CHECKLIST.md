# Mission 10 — Checklist finale RC

Date : 22 juillet 2026  
Légende : `[x]` validé · `[~]` validé sous réserve · `[ ]` non validé ou bloquant

## Application et routes

- [x] 39 pages HTML générées.
- [x] Toutes les routes locales attendues répondent dans le build.
- [x] Aucun lien interne ni asset référencé cassé.
- [x] URL propres et slash final conservés.
- [x] Page 404 générée et exclue de l’indexation.
- [x] Aucun changement d’architecture ou d’URL.

## Formulaires et conversion

- [x] Champs, labels, aides et attributs `autocomplete` cohérents.
- [x] Validation native disponible sans JavaScript.
- [x] Erreurs par champ et statut global accessibles.
- [x] Focus placé sur le premier champ invalide.
- [x] Honeypot `_gotcha` conservé.
- [x] Endpoint Formspree inchangé.
- [x] États succès, erreur et bouton occupé conservés.
- [x] Lien vers la politique présent avant envoi.
- [x] Objet du premier échange explicité sans promesse de délai.
- [ ] Propriétaire, destinataire, quota, domaines et paramètres anti-spam Formspree attestés.
- [ ] Envoi réel, réception et suppression de données de test validés.
- [ ] Compte et paramètres Cal.com attestés.

## UX, responsive et accessibilité

- [x] CTA spécifiques visibles à 1280 × 720 sur les gabarits les plus défavorables testés.
- [x] Aucun débordement horizontal à 320, 768, 1280 et 1440 px.
- [x] Menu mobile ouvert, focus transféré, fermé par Échap et focus restauré.
- [x] Boutons du héros et formulaire pleine largeur à 320 px.
- [x] Aucun avertissement ou erreur console pendant la recette locale.
- [~] Zoom 200 % à confirmer sur la préproduction distante.
- [~] Lecteur d’écran à confirmer sur la préproduction distante.
- [~] Lighthouse mobile et desktop à exécuter sur Netlify.

## Réglementaire et confiance

- [ ] Toutes les mentions légales complètes.
- [ ] Politique de confidentialité complète et validée.
- [ ] Identité, forme, capital, siège, SIREN/SIRET/RCS et TVA attestés.
- [ ] ORIAS et catégorie d’intermédiaire attestés.
- [ ] Directeur de publication fourni.
- [ ] Autorité de contrôle, réclamations, médiateur, RCP et garantie financière validés selon applicabilité.
- [ ] Hébergeur identifié selon le compte contractant réel.
- [ ] Responsable de traitement, bases, destinataires, durées et transferts validés.
- [x] Aucun analytics, pixel ou cookie marketing observé.
- [x] Aucun bandeau cookie artificiel ajouté.
- [x] Aucune preuve, statistique, économie ou garantie inventée.
- [ ] Aucun placeholder : 25 occurrences légales subsistent.

## SEO

- [x] Titles, descriptions, H1, canonicals et JSON-LD contrôlés.
- [x] OpenGraph complété avec dimensions et texte alternatif.
- [x] Breadcrumb et FAQ structurés conservés.
- [x] Mode privé : meta, robots et header bloquants.
- [x] Mode production sélective : dix routes indexables, autres routes en `noindex`.
- [x] Sitemap filtré généré et validé en simulation locale.
- [x] `public/robots.txt` protégé intact.
- [ ] GO humain autorisant `PUBLIC_SITE_INDEXABLE=true`.
- [ ] Domaine final, HTTPS, canonical, robots et sitemap contrôlés après bascule.
- [ ] Search Console et Bing vérifiés puis sitemap soumis après ouverture.

## Performance et qualité technique

- [x] Aucun framework client ni analytics ajouté.
- [x] Quatre composants orphelins supprimés.
- [x] CSS FAQ dupliqué centralisé.
- [x] Aucun TODO, FIXME, HACK ou `debugger` dans le code contrôlé.
- [x] Diagnostics Astro et TypeScript actifs.
- [x] `pnpm lint` vert.
- [x] `pnpm check` vert.
- [x] `pnpm verify` vert.
- [x] `pnpm build` vert.
- [~] Ancien `public/og.jpg` conservé jusqu’à décision d’archivage.
- [ ] Favicon officiel carré fourni et intégré.

## Hébergement et gouvernance

- [x] `netlify.toml` cohérent avec le build `dist/`.
- [x] Remote GitHub `origin` configuré.
- [ ] URL Netlify privée et contrôle d’accès fournis pour recette distante.
- [ ] Headers Netlify réels contrôlés.
- [ ] Responsables métier, conformité, technique, DNS et rollback nommés.
- [ ] Commit de release et approbation GitHub produits.
- [ ] Release Candidate validée par les responsables.

## Conclusion

**NO GO** tant que les cases réglementaires, Formspree et gouvernance de publication restent ouvertes.
