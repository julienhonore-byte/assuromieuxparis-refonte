# Audit d'accessibilité — RC1

Date : 22 juillet 2026. Référentiel de travail : WCAG 2.2 niveau AA. Cet audit combine lecture du code, extraction statique des 37 pages et recette navigateur sur huit gabarits représentatifs. Il ne remplace pas un audit certifié ni un test complet avec technologies d'assistance.

## Résultat

Le socle est accessible et cohérent : langue française, lien d'évitement, landmarks, un H1, labels, focus visible, menu clavier et responsive sans débordement. La publication reste **sous réserve d'une recette manuelle à 200 %, d'un lecteur d'écran et des corrections légales transversales**.

## Contrôles conformes

- `lang="fr"` sur les 37 pages.
- Un seul `<main>` et un seul H1 sur chaque page.
- Lien « Aller au contenu principal » en première position.
- Header, navigations nommées et footer exposés comme landmarks.
- Fil d'Ariane sur toutes les pages internes pertinentes.
- Styles `:focus-visible` globaux et contrastés.
- Cibles principales dimensionnées pour le tactile ; bouton mobile d'au moins 46 px.
- Menu mobile : `aria-expanded`, `aria-controls`, panneau `hidden`, focus sur le premier lien à l'ouverture, fermeture par Échap et retour du focus au bouton.
- Formulaire : labels, autocomplete, champs requis identifiables, aides par `aria-describedby`, zone `role="status"` / `aria-live="polite"`.
- FAQ fondées sur des éléments `<details>` nativement opérables.
- `prefers-reduced-motion: reduce` et mode `forced-colors` pris en compte.
- Logo doté d'un texte alternatif ; visuels purement décoratifs masqués aux technologies d'assistance.

## Responsive et redistribution

56 contrôles ont été réalisés sur huit gabarits : accueil, produit, secteur, parcours besoin, hub ressources, guide, lexique et 404. Largeurs : 320, 375, 640, 768, 980, 1180 et 1440 px.

Résultat : aucun débordement horizontal, un main/footer/H1 sur chaque test, navigation mobile visible jusqu'à 980 px et navigation desktop au-delà. Les compositions se redistribuent en une colonne sur mobile.

## Contrastes

Les couples de couleurs principaux ont déjà été contrôlés dans les recettes de lots : les rapports documentés sont supérieurs au minimum AA, y compris le doré utilisé comme texte sur fond bleu. Le contrôle final doit être relancé si une couleur, une opacité ou une image de fond change.

## Réserves et améliorations

| Priorité | Point | Risque | Action / validation |
|---|---|---|---|
| Haute | Zoom texte à 200 % non testé manuellement sur les 37 routes | Recouvrement ponctuel possible | Recette manuelle desktop à 200 % sur chaque gabarit |
| Haute | Aucun test NVDA, VoiceOver ou TalkBack dans cette mission | Ordre ou annonces imparfaits possibles | Tester header, menu, formulaire, FAQ, fil d'Ariane et succès formulaire |
| Moyenne | Erreurs du formulaire annoncées globalement, sans message inline par champ ni `aria-invalid` | Diagnostic moins précis | Ajouter une gestion d'erreur par champ si les tests utilisateurs le justifient |
| Moyenne | Liens externes Cal.com/ORIAS ouvrant potentiellement un nouvel onglet sans annonce textuelle systématique | Changement de contexte inattendu | Informer dans le libellé ou le texte adjacent |
| Moyenne | `main { overflow: clip; }` | Un focus débordant pourrait être visuellement rogné | Tester au clavier tous les composants proches des bords |
| Faible | Visuel 404 sans image OG | Aucun impact d'accessibilité de page | Aucun correctif requis |

## Recette clavier minimale avant GO

1. Tabuler depuis le lien d'évitement jusqu'au footer sans piège.
2. Ouvrir et fermer le menu mobile avec Entrée, Espace et Échap.
3. Ouvrir chaque FAQ avec clavier.
4. Parcourir le formulaire, corriger une erreur, puis annoncer succès et échec.
5. Vérifier que la barre mobile fixe ne masque aucun contenu focalisé.
6. Vérifier les pages longues : guide, convoyage, déménagement, besoin création/reprise.

## Verdict

**Prêt sous réserve pour préproduction, non qualifié comme conforme exhaustivement.** Les réserves manuelles ne justifient pas à elles seules un NO GO, mais doivent être cochées avant production.
