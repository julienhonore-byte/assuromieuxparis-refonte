# Design system — Assuromieux Paris

Date : 21 juillet 2026

Statut : première version appliquée à la nouvelle page d'accueil Astro.

## 1. Intention

Le design doit évoquer un cabinet de courtage et de conseil : précis, posé, lisible et rassurant. Il conserve les marqueurs de la landing historique — bleu profond, accent doré, fonds bleutés, cartes arrondies, ombres légères et grands titres — tout en les organisant dans un système cohérent et accessible.

L'interface ne doit jamais employer les codes agressifs d'un comparateur : prix surdimensionnés, fausses urgences, badges promotionnels, tableaux saturés ou promesses non vérifiées.

## 2. Couleurs

### Marque

| Token | Valeur | Usage |
|---|---:|---|
| `--color-brand` | `#12365f` | CTA, repères, éléments interactifs |
| `--color-brand-deep` | `#0b2747` | titres, header, footer, panneaux premium |
| `--color-brand-ink` | `#071c33` | contraste maximal sur surfaces claires/dorées |
| `--color-gold` | `#c99a46` | accent historique, décor, grandes surfaces |
| `--color-gold-dark` | `#8a6222` | texte doré accessible sur fond clair |
| `--color-gold-soft` | `#f4e3bf` | boutons et badges doux |
| `--color-gold-wash` | `#fbf5e9` | fond éditorial chaud |

Le doré historique `#c99a46` est conservé. Pour le petit texte sur fond blanc, utiliser `--color-gold-dark` : il apporte un contraste supérieur sans changer la perception de marque.

### Texte et surfaces

Le texte principal est `#162033`, les niveaux secondaires `#243147`, `#475467` et `#667085`. Les surfaces alternent blanc, `#eef4fa`, `#f5f8fc` et `#f7fbff`. Les panneaux sombres utilisent `#e6eff8` et `#b9cbdd` pour préserver la lisibilité.

Les couleurs d'erreur (`#a12929`) et de succès (`#176b4d`) sont réservées aux états fonctionnels ; elles ne servent pas de décoration.

## 3. Typographie

Pile : `Inter`, `Avenir`, `Avenir Next`, puis polices système. Aucun téléchargement de police n'est ajouté à ce stade.

- H1 : `clamp(42.4px, 29.6px + 3.55vw, 84px)`, ligne `0.98`, interlettrage `-0.055em`.
- H2 : `clamp(32px, 24.8px + 2vw, 52px)`, ligne `1.08`.
- H3 : `clamp(20px, 18.7px + 0.35vw, 24px)`.
- Lead : 17–20 px.
- Corps : 16 px, ligne `1.65`.
- Petit texte : 14 px ; microtexte : 12 px.

Les titres sont denses et fortement graissés, mais les paragraphes restent plus ouverts. Une page possède un seul H1 ; les sections utilisent H2 et les cartes H3.

## 4. Espacement et conteneurs

L'échelle suit principalement des multiples de 4 et 8 px. Les sections utilisent `--section-space`, soit 72–120 px selon le viewport. Les composants évitent les marges arbitraires et consomment les tokens `--space-*`.

- Conteneur standard : 1180 px.
- Conteneur large : 1280 px.
- Colonne éditoriale : 736 px.
- Gouttière responsive : 20–36 px.

Les sections alternent surfaces claires, blanches et sombres pour créer un rythme éditorial sans multiplier les effets.

## 5. Rayons et ombres

- Contrôles : 14 px.
- Petites cartes : 18 px.
- Cartes standards : 24 px.
- Panneaux : 32 px.
- Composition hero : 40 px.
- Boutons/badges : rayon pilule.

Les ombres restent bleutées. L'ombre faible distingue une carte du fond ; l'ombre moyenne apparaît au survol ; l'ombre forte est réservée au hero et aux panneaux de conversion.

## 6. Boutons

Variantes :

- `primary` : fond bleu, texte blanc, action principale ;
- `secondary` : surface blanche bordée, action complémentaire ;
- `gold` : accent premium sur fond sombre.

Hauteur minimale : 52 px, ou 58 px pour les CTA majeurs. Les boutons deviennent pleine largeur sur petit mobile lorsque cela améliore la cible tactile. Les états hover déplacent de 2 px maximum ; active annule le déplacement ; disabled réduit l'opacité et le curseur.

Une section ne doit pas présenter plus d'une action primaire. Les libellés décrivent l'action (« Demander mon audit gratuit »), jamais « Cliquez ici ».

## 7. Cartes

Une carte combine surface blanche, bordure bleu-gris, rayon 24 px et ombre faible. La variante interactive ajoute une élévation de 4 px au survol. La carte ne doit pas être cliquable si elle ne mène nulle part.

Variantes utilisées : expertise, secteur, méthode, confiance, cas pratique et ressource. Le contenu métier est fourni par les pages ; les composants ne contiennent pas de texte métier implicite.

## 8. Formulaires

Les labels sont persistants et reliés par `for`/`id`. Les aides restent distinctes des placeholders. Les champs ont une hauteur minimale de 52 px, un contraste de bordure renforcé et un focus bleu + halo doré. Les erreurs sont annoncées dans une zone live et le premier champ invalide reçoit le focus.

La soumission est progressive : le POST Formspree reste fonctionnel sans JavaScript ; avec JavaScript, la page affiche les états envoi, erreur et confirmation sans rechargement. Le honeypot simple reste invisible aux utilisateurs et technologies d'assistance.

## 9. Focus, mouvement et accessibilité

- Focus global : anneau doré 3 px, décalage 3 px.
- Cibles tactiles : minimum 44 px, 52 px pour les actions principales.
- `prefers-reduced-motion` neutralise animations et transitions.
- Le site fournit un lien d'évitement vers le contenu.
- Les composants interactifs reposent d'abord sur le HTML natif.
- Le menu mobile gère `aria-expanded`, Escape, clic extérieur et restitution du focus.

## 10. Breakpoints

| Usage | Valeur |
|---|---:|
| Petit mobile | 480 px |
| Mobile | 640 px |
| Tablette | 768 px |
| Navigation | 980 px |
| Desktop large | 1200 px |

Les breakpoints indiquent des seuils de mise en page, pas des catégories d'appareils. Les composants doivent aussi résister à 320, 375, 1024, 1280 et 1440 px.

## 11. Règles éditoriales et graphiques

- Toujours privilégier une preuve vérifiable à un chiffre spectaculaire.
- Employer le doré comme ponctuation, jamais comme couleur de texte courant.
- Réserver les panneaux sombres aux messages stratégiques : transport, méthode, conversion et footer.
- Éviter les photos génériques de centre d'appel, poignées de main ou bureaux artificiels.
- Préférer les compositions graphiques abstraites, cartographies de risque et interfaces d'analyse.
- Maintenir une densité basse : un message majeur par section et des paragraphes courts.

## 12. Points restant à valider

- Fichiers et licence de la police Inter si elle doit devenir identitaire.
- Logo vectoriel officiel et variantes sur fond sombre.
- Contraste final sur appareils et modes de contraste renforcé.
- Coordonnées, ORIAS et formulation réglementaire avant mise en production.
- Contenus, cas clients et preuves autorisées.
