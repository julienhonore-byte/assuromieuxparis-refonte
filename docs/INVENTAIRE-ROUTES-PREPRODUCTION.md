# Inventaire des routes de préproduction — RC1

Contrôle effectué le 22 juillet 2026 sur la sortie statique Astro. `pnpm build` génère **37 pages** et `pnpm check:links` ne détecte aucun lien interne cassé.

## Règle de classement

- **Validation métier** : le contenu comporte encore une validation humaine explicitement bloquante.
- **Validation réglementaire** : le contenu métier est exploitable, mais la publication reste bloquée par les éléments légaux transversaux.
- Le blocage réglementaire est global : les coordonnées, l'immatriculation, l'ORIAS, le statut juridique, les mentions d'intermédiation et la politique de confidentialité doivent être validés avant toute mise en ligne.
- Aucune route n'est donc classée « prête » ou « prête sous réserve » pour une publication immédiate. La colonne « Classe RC1 » retient le blocage le plus spécifique ; les routes en validation métier restent aussi soumises au blocage réglementaire global.

## Inventaire exhaustif

| Route | Type | Objectif / cible | Intention SEO | CTA et formulaire | Données structurées | Principaux liens internes | Classe RC1 |
|---|---|---|---|---|---|---|---|
| `/` | Accueil / conversion | Présenter le cabinet et orienter les dirigeants | Courtier assurance entreprise Paris | Audit, produits, formulaire Formspree | Organization, LocalBusiness, InsuranceAgency, ItemList, FAQPage | Produits, secteurs, besoins, ressources, cabinet | Validation réglementaire |
| `/404.html` | Erreur | Récupérer une navigation invalide | Non indexable | Retour accueil | Aucune | Accueil, produits, contact | Validation réglementaire |
| `/assurance-btp-decennale/` | Expertise / produit | Qualifier les risques BTP et décennale | Assurance BTP et décennale | Contact, guide décennale | Organization, BreadcrumbList, Service, FAQPage | RC, multirisque, flotte, guide | Validation réglementaire |
| `/assurance-transport/` | Expertise | Présenter l'approche transport-logistique | Assurance transport et logistique | Contact transport | Organization, BreadcrumbList, Service, FAQPage | Secteurs transport, flotte, RC, guide transport | Validation réglementaire |
| `/assurances-entreprises/` | Hub produits | Donner une vision globale aux dirigeants | Assurances entreprises Paris | Audit / contact | Organization, BreadcrumbList, Service, FAQPage | Six produits, BTP, transport, guides | Validation réglementaire |
| `/audit-assurances-entreprise/` | Service conseil | Déclencher une demande d'audit | Audit assurances entreprise | Contact audit | Organization, BreadcrumbList, Service, FAQPage | Besoin audit, produits, transport | Validation réglementaire |
| `/cabinet/` | Marque / confiance | Expliquer le positionnement du cabinet | Cabinet courtage assurance Paris | Contact | Organization, BreadcrumbList, AboutPage, FAQPage | Audit, produits, secteurs, ressources | Validation réglementaire |
| `/cyberassurance/` | Produit | Aider à qualifier le risque cyber | Cyberassurance entreprise | Contact prérempli cyber | Organization, BreadcrumbList, Service, FAQPage | RC, multirisque, autres produits | Validation métier |
| `/flotte-automobile/` | Produit | Structurer l'assurance du parc | Assurance flotte automobile entreprise | Contact prérempli flotte | Organization, BreadcrumbList, Service, FAQPage | Transport, besoin flotte, produits | Validation métier |
| `/lexique/` | Ressource | Clarifier la terminologie contractuelle | Lexique assurances entreprise | Contact / ressources | Organization, BreadcrumbList, DefinedTermSet | Ressources et pages produits | Validation réglementaire |
| `/multirisque-professionnelle/` | Produit | Relier biens, locaux et continuité | Assurance multirisque professionnelle | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Produits, audit, besoins | Validation métier |
| `/protection-dirigeant/` | Produit | Présenter les enjeux de protection du dirigeant | Protection dirigeant entreprise | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Santé-prévoyance, produits, besoins | Validation métier |
| `/rc-professionnelle/` | Produit | Qualifier les responsabilités professionnelles | Assurance RC professionnelle entreprise | Contact prérempli RC | Organization, BreadcrumbList, Service, FAQPage | Guide RC, audit, produits | Validation métier |
| `/sante-prevoyance-entreprise/` | Produit | Structurer la protection collective | Santé prévoyance entreprise | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Protection dirigeant, produits, besoins | Validation métier |
| `/ressources/` | Hub éditorial | Orienter vers les contenus utiles | Ressources assurance entreprise | Guides / audit | Organization, BreadcrumbList, CollectionPage | Univers, guides, lexique | Validation réglementaire |
| `/ressources/assurance-entreprise/` | Hub thématique | Regrouper les contenus généralistes | Ressources assurance entreprise | Guides / audit | Organization, BreadcrumbList, CollectionPage | Guides PME, audit, RC | Validation réglementaire |
| `/ressources/btp/` | Hub thématique | Regrouper les contenus BTP | Guides assurance BTP | Guide décennale / expertise BTP | Organization, BreadcrumbList, CollectionPage | BTP, guide décennale | Validation réglementaire |
| `/ressources/dirigeants/` | Hub thématique | Regrouper les contenus dirigeants | Guides assurance dirigeants | Guides / protection dirigeant | Organization, BreadcrumbList, CollectionPage | PME, audit, protection dirigeant | Validation réglementaire |
| `/ressources/guides/` | Index de guides | Lister les six guides | Guides assurance entreprise | Lecture / audit | Organization, BreadcrumbList, CollectionPage | Six guides, univers, lexique | Validation réglementaire |
| `/ressources/transport-logistique/` | Hub thématique | Regrouper les contenus transport | Guides assurance transport logistique | Guides / expertise transport | Organization, BreadcrumbList, CollectionPage | Transport, flotte, guide responsabilité | Validation réglementaire |
| `/ressources/guides/assurance-decennale-coherence-activites-attestation/` | Guide | Expliquer la cohérence activités-attestation | Assurance décennale activités attestation | BTP / contact | Organization, BreadcrumbList, Article, FAQPage | BTP, ressources BTP | Validation métier |
| `/ressources/guides/comment-auditer-assurances-entreprise/` | Guide | Préparer un audit | Comment auditer assurances entreprise | Audit / contact | Organization, BreadcrumbList, Article, FAQPage | Audit, assurances, besoins | Validation métier |
| `/ressources/guides/flotte-automobile-points-analyser-avant-comparer/` | Guide | Préparer la comparaison d'une flotte | Assurance flotte points à analyser | Flotte / contact | Organization, BreadcrumbList, Article, FAQPage | Flotte, besoin flotte, transport | Validation métier |
| `/ressources/guides/quelles-assurances-prevoir-pme/` | Guide | Aider une PME à cartographier ses besoins | Quelles assurances PME | Assurances / contact | Organization, BreadcrumbList, Article, FAQPage | Produits, création-reprise, audit | Validation métier |
| `/ressources/guides/rc-professionnelle-rc-exploitation-differences/` | Guide | Distinguer deux responsabilités | RC pro RC exploitation différences | RC / contact | Organization, BreadcrumbList, Article, FAQPage | RC, audit, assurances | Validation métier |
| `/ressources/guides/responsabilite-transporteur-assurance-marchandises-differences/` | Guide | Distinguer responsabilité et assurance marchandises | Responsabilité transporteur assurance marchandises | Transport / contact | Organization, BreadcrumbList, Article, FAQPage | Transport, secteur routier, flotte | Validation métier |
| `/secteurs/` | Hub sectoriel | Orienter selon le métier | Assurances par secteur d'activité | Secteurs / audit | Organization, BreadcrumbList, CollectionPage | Trois secteurs transport, BTP, transport | Validation réglementaire |
| `/secteurs/convoyage-vehicules/` | Secteur | Qualifier les risques du convoyage | Assurance convoyage véhicules | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Transport, flotte, guides | Validation réglementaire |
| `/secteurs/demenagement/` | Secteur | Qualifier les risques du déménagement | Assurance entreprise déménagement | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Transport, flotte, guides | Validation réglementaire |
| `/secteurs/transport-routier-marchandises/` | Secteur | Qualifier les risques du transport routier | Assurance transport routier marchandises | Contact prérempli | Organization, BreadcrumbList, Service, FAQPage | Transport, flotte, RC, guides | Validation réglementaire |
| `/votre-besoin/` | Hub parcours | Orienter selon la situation du dirigeant | Parcours assurance entreprise | Six parcours / contact | Organization, BreadcrumbList, CollectionPage | Six besoins, produits | Validation réglementaire |
| `/votre-besoin/assurer-activite-transport/` | Parcours besoin | Qualifier une activité de transport | Assurer activité transport | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Transport, secteurs, flotte, guides | Validation réglementaire |
| `/votre-besoin/assurer-flotte-vehicules/` | Parcours besoin | Qualifier un parc de véhicules | Assurer flotte véhicules entreprise | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Flotte, audit, évolution | Validation réglementaire |
| `/votre-besoin/auditer-mes-assurances/` | Parcours besoin | Préparer l'analyse de contrats | Auditer assurances professionnelles | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Audit, guides, produits | Validation réglementaire |
| `/votre-besoin/comparer-mes-assurances/` | Parcours besoin | Comparer au-delà du prix | Comparer assurances professionnelles | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Audit, produits, évolution | Validation réglementaire |
| `/votre-besoin/creer-reprendre-entreprise/` | Parcours besoin | Organiser les assurances d'une création/reprise | Assurances création reprise entreprise | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Produits, guides, audit | Validation réglementaire |
| `/votre-besoin/entreprise-evolue/` | Parcours besoin | Revoir les contrats après un changement | Adapter assurances entreprise évolue | Contact prérempli | Organization, BreadcrumbList, WebPage, FAQPage | Audit, comparaison, produits | Validation réglementaire |

## Synthèse de l'inventaire

| Classe | Nombre | Routes concernées |
|---|---:|---|
| Validation métier | 12 | Six produits et six guides |
| Validation réglementaire | 25 | Toutes les autres routes, dont l'accueil et la 404 |
| Prête / prête sous réserve / exclue | 0 | Aucune tant que les blocages transversaux ne sont pas levés |

Le statut « validation réglementaire » ne signifie pas que 25 pages doivent être réécrites. Il signifie que leur publication partage un blocage commun : informations légales et réglementaires à confirmer, pages légales autonomes à créer et politique de confidentialité à valider.
