# Parité visuelle — Accueil Astro / landing de référence

Date du contrôle : 21 juillet 2026

Référence immuable : `source/index-production-reference.html`

Empreinte SHA-256 contrôlée : `cdb5b5b6e3e458e9e9c4b5eb25c5ae4c8d996cb354def29363676fa1488662c0`

## 1. Périmètre

Cette matrice compare la nouvelle page `src/pages/index.astro` à la landing historique. L'objectif n'est pas une copie pixel à pixel : la nouvelle page doit conserver une filiation évidente tout en adoptant une structure éditoriale, institutionnelle et réutilisable.

La page Astro reste en prévisualisation : `public/robots.txt` et la balise meta robots bloquent l'indexation. Le fichier racine `index.html` et la référence de production ne sont ni modifiés ni remplacés.

## 2. Éléments conservés

| Élément | Référence | Nouvelle page |
|---|---|---|
| Bleu de marque | Bleu profond dominant | `#12365f`, `#0b2747` et `#071c33` conservés |
| Accent | Doré sur CTA et repères | `#c99a46` conservé, avec variantes accessibles |
| Surfaces | Fonds blancs et bleutés | Alternance blanc, `#eef4fa`, `#f5f8fc` et lavis doré |
| Typographie | Sans-serif sobre, titres denses | Pile système/Inter et échelle fluide formalisée |
| Formes | Cartes arrondies et pilules | Rayons 14 à 40 px et pilules conservés |
| Profondeur | Ombres légères bleutées | Ombres rationalisées en trois niveaux |
| Positionnement | Audit, conseil, entreprise, transport | Ces quatre axes structurent le hero et les sections |
| Conversion | Audit gratuit, Formspree, Cal.com | CTA récurrents, endpoint et lien Cal.com préservés |
| Marque | Logo historique extrait | Même fichier externalisé dans header et footer |

## 3. Éléments améliorés

- Le hero devient une véritable ouverture éditoriale à deux colonnes, avec une cartographie abstraite des risques créée en CSS plutôt qu'une image générique.
- La hiérarchie passe à un H1 unique, des H2 de section et des H3 de composant sans saut de niveau.
- La navigation desktop est complète ; la navigation mobile expose les mêmes destinations et gère `aria-expanded`, Échap, clic extérieur et retour de focus.
- Les problèmes clients, neuf expertises, la méthode en six étapes, l'expertise transport, les publics d'entreprise, l'ancrage parisien, trois cas pratiques, les ressources et la FAQ créent un parcours institutionnel complet.
- Les futures routes métier restent stockées dans les données des cartes (`data-future-route`) mais les liens visibles pointent vers `#contact` tant que les pages n'existent pas.
- Le formulaire conserve Formspree tout en ajoutant labels, aides, validation, état live, honeypot, confirmation et accès Cal.com après succès.
- Les couleurs, espacements, rayons, ombres, conteneurs et états interactifs sont désormais pilotés par tokens.
- Le responsive n'est plus un simple empilement : les grilles passent de trois à deux puis une colonne, les panneaux deviennent fluides et le CTA mobile reste accessible.
- Le SEO comporte title, description, canonical provisoire, Open Graph, Twitter Card et JSON-LD `Organization`, `LocalBusiness` et `InsuranceAgency`.

## 4. Écarts assumés

- La page est nettement plus longue que la landing : elle installe une vision de cabinet et prépare le futur maillage du site.
- Aucun chiffre de performance, témoignage, logo partenaire ou économie chiffrée n'est affiché faute de preuve validée.
- Aucun visuel de banque d'images n'est utilisé. L'univers graphique repose sur des compositions CSS et une carte sociale dédiée.
- Les ressources sont clairement marquées « À venir » et ne sont pas cliquables.
- Les mentions légales et la confidentialité restent intégrées provisoirement au footer, car leurs pages définitives ne sont pas encore construites.
- Le domaine canonique `https://www.assuromieuxparis.com/` reste provisoire jusqu'à validation avant publication.
- La formulation réglementaire historique, y compris « disponibilités de l'article L521-2.II.b », est conservée sans correction éditoriale et signalée pour validation.
- La terminologie correcte `TPM` est utilisée dans la nouvelle interface. L'incohérence historique TMP / TPM reste documentée et doit être tranchée par validation métier.

## 5. Recette responsive

Contrôle réalisé dans le navigateur sur le serveur Astro local. Pour chaque largeur : mesure du viewport et du scroll horizontal, visibilité du menu adapté, largeur du formulaire et du footer, H1 unique, ordre H1/H2/H3 et zones tactiles.

| Largeur | Navigation | Grilles | Débordement horizontal | Formulaire | Zones tactiles |
|---:|---|---|---|---|---|
| 320 px | Mobile | 1 colonne | Aucun | Fluide, 238 px utiles | ≥ 44 px |
| 375 px | Mobile | 1 colonne | Aucun | Fluide, 293 px utiles | ≥ 44 px |
| 640 px | Mobile | 1 colonne | Aucun | Fluide, 558 px utiles | ≥ 44 px |
| 768 px | Mobile | 1 à 2 colonnes | Aucun | Fluide, 674 px utiles | ≥ 44 px |
| 980 px | Mobile | 1 à 2 colonnes | Aucun | Fluide, 860 px utiles | ≥ 44 px |
| 1024 px | Desktop | 2 colonnes | Aucun | Colonne de 462 px | Conforme desktop |
| 1280 px | Desktop | 2 à 3 colonnes | Aucun | Colonne de 577 px | Conforme desktop |
| 1440 px | Desktop | 2 à 3 colonnes | Aucun | Colonne de 571 px | Conforme desktop |

Un défaut détecté pendant la recette — colonne du hero limitée par erreur à `15ch` sous 980 px — a été corrigé. La limitation ne s'applique plus qu'au H1 tablette et disparaît sur mobile.

## 6. Recette fonctionnelle et accessibilité

- Menu mobile : ouverture, focus sur le premier lien, fermeture avec Échap, restitution du focus et mise à jour de `aria-expanded` validées.
- Formulaire vide : message explicite annoncé, premier champ invalide focalisé, aucune requête externe envoyée.
- Endpoint Formspree contrôlé : `https://formspree.io/f/mnjlwzlp`.
- Lien de confirmation Cal.com contrôlé : `https://cal.com/juleshonore/rdv-assuromieux`.
- Champs obligatoires : six contrôles avec label associé ; aides reliées par `aria-describedby`.
- Focus clavier : anneau doré plein de 3 px vérifié sur le lien d'évitement.
- Images : aucun `img` sans attribut `alt`.
- Ancres : aucune destination interne absente.
- Console navigateur : aucune erreur et aucun avertissement.
- Build et contrôle des liens : réussis, deux pages HTML générées, zéro lien cassé.

## 7. Points restant à valider

1. Confirmer le domaine canonique et les variantes de domaine avant de retirer `noindex`.
2. Vérifier auprès de sources officielles l'adresse, le RCS, l'ORIAS, le téléphone, l'email et la formulation réglementaire complète.
3. Valider définitivement `TPM` et corriger la formulation historique TMP si nécessaire dans les futurs contenus approuvés.
4. Obtenir le logo vectoriel officiel et statuer sur l'auto-hébergement/licence de la police Inter.
5. Faire approuver les textes éditoriaux, les cas pratiques génériques et les promesses de l'audit par le métier et la conformité.
6. Finaliser les pages Mentions légales et Politique de confidentialité avant toute mise en ligne.
7. Tester le succès et l'erreur réseau Formspree sur une prévisualisation autorisée avec des données synthétiques ; aucun envoi n'a été déclenché pendant cette recette.
8. Exécuter une recette complémentaire avec lecteur d'écran et outils d'audit automatisé avant production.
