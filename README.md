<div align="center">
  <img src="riskr.png" alt="Riskr Logo" width="128" height="128">
  <h1>Riskr</h1>
  <p>Application web d'analyse et de cartographie des risques avec matrices Before/After et gestion collaborative.</p>
</div>

## 📋 À propos

**Riskr** est une application web one-page complète pour l'analyse et la gestion des risques. Elle permet de visualiser l'évolution des risques avant et après la mise en place de mesures de remédiation, à travers des matrices interactives et des tableaux détaillés.

## 🖼️ Captures d'écran

Captures réalisées avec les données de démonstration de `riskr-data.js`,
entièrement fictives (projet imaginaire de modernisation d'un système d'information),
affichées en thème clair ou sombre selon celui de GitHub. Pour les régénérer après
une évolution de l'interface : `node docs/captures/generer-captures.mjs` (Chrome requis).

**Matrices** : trajectoire avant → après, cible (pastille en losange bleu = cible
atteinte, losange blanc = cible visée), appétence, état à la date d'une revue.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/matrices.png">
  <img src="docs/captures/clair/matrices.png" alt="Matrices : trajectoire des risques, options d'affichage et risques au-dessus de l'appétence">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/matrices-groupes.png">
  <img src="docs/captures/clair/matrices-groupes.png" alt="Matrice après remédiation par groupe, cibles atteintes en losange bleu">
</picture>

**Registre** : cotations avant → après · cible, tendance sur les revues, traitement,
porteur, prochaine échéance et mesures.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/registre.png">
  <img src="docs/captures/clair/registre.png" alt="Registre des risques">
</picture>

**Fiche du risque** : nœud papillon (causes, barrières et leur efficacité,
conséquences chiffrées), évolution de la cotation, notes de revue, pièces et liens.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/fiche.png">
  <img src="docs/captures/clair/fiche.png" alt="Fiche d'un risque avec son nœud papillon">
</picture>

**Plan d'actions** : mesures par état, porteur ou échéance, retards en évidence ;
en vue par état, une mesure se glisse d'une colonne à l'autre pour changer d'état.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/plan-actions.png">
  <img src="docs/captures/clair/plan-actions.png" alt="Plan d'actions">
</picture>

**Revues** : frise des revues figées, comparaison au choix, changements de
cotation et exposition moyenne par groupe.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/revues.png">
  <img src="docs/captures/clair/revues.png" alt="Revues et comparaison">
</picture>

**Vue comité** : synthèse d'une page, copiable dans Word ou PowerPoint et exportable en PDF.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/captures/sombre/comite.png">
  <img src="docs/captures/clair/comite.png" alt="Vue comité">
</picture>

## 📦 Données séparées (riskr-data.js)

Les données vivent dans `riskr-data.js` (format `window.RISKR_DATA`), chargé
automatiquement par `riskr.html`. Le HTML est le moteur, le fichier de données
est le contenu : pour une nouvelle analyse, seul `riskr-data.js` change.

- **Format canonique** : `risks[]` à plat + `riskGroups[].riskIds`
- **Round-trip garanti** : l'export JSON et l'export `riskr-data.js`
  (menu Exporter) produisent ce même format, ré-importable et rechargeable
  tel quel à côté du HTML
- Sans `riskr-data.js`, la page affiche un placeholder minimal (pas de
  données d'exemple cachées dans le HTML)
- En ouverture locale, `riskr-data.local.js` peut surcharger les données
  génériques. Il est ignoré par Git et ne doit contenir que des données privées
  qui ne doivent pas être publiées.

Chaque risque porte **une cotation** avant et après remédiation :
`assessmentBefore` et `assessmentAfter`, sous la forme `[probabilité, impact]`
(1 à 5 ; `[0, 0]` = non évalué). La criticité vaut probabilité × impact (sur 25) ;
elle est affichée ramenée sur 5 (score ÷ 5) dans les tableaux et les matrices.

- `mesures` : liste de mesures `{ texte, porteur, echeance, etat }` (porteur et
  échéance facultatifs ; `etat` vaut `todo`, `doing` ou `done` ; une simple chaîne
  de texte est aussi acceptée). Une échéance au format `AAAA-MM-JJ` ou
  `JJ/MM/AAAA` passée sur une mesure non faite la signale en retard.
- `causes` : textes du nœud papillon ; `consequences` : `{ texte, chiffrage }`
  (une simple chaîne est aussi acceptée). Chaque mesure porte aussi `barriere`
  (`prevention` ou `protection`), son côté dans le nœud, et `efficacite` (0 à 5).
- `velocite` : vitesse de survenue du risque (1 à 5, 0 = non évaluée), utilisée
  par l'option « Taille = vélocité » des matrices.
- `notes` : notes de revue `{ date, auteur, texte }` ; `liens` : pièces et liens
  `{ libelle, url }`.
- `settings.templates` : « Mes modèles » de la bibliothèque `{ titre, description,
  cotation, mesures }`.
- `uid` : identifiant interne stable d'un risque (généré automatiquement), qui
  permet de suivre un risque d'une revue à l'autre malgré la renumérotation.
- `reviews` : revues figées `{ id, date, label, risks: [{ uid, id, title,
  before, after }] }`, photos datées des cotations servant aux comparaisons.
- `statut` vaut `statusNotTreated`, `statusInProgress`, `statusTreated` ou
  `statusAccepted`.
- `traitement` (stratégie) vaut `reduce`, `accept`, `transfer`, `avoid` ou `''`
  (non définie) ; `assessmentTarget` est la cotation visée `[probabilité, impact]`
  (`[0, 0]` = non définie).
- `settings.riskAppetite` : score maximal acceptable (P × I, sur 25 ; `0` = aucun).
  Par défaut 9, juste sous le seuil « élevé ». Tracé en pointillé sur les matrices ;
  un risque résiduel au-delà est signalé dans le registre.
- Les numéros (`1.1`, `1.2`…) suivent la position des risques et sont
  recalculés après chaque ajout, suppression ou déplacement.
- Seuils de criticité par défaut : faible 1-4, modéré 5-9, élevé 10-14,
  critique 15-25. Ils s'appliquent partout (matrices, badges,
  tableaux) et se modifient dans `appState.criticalityThresholds`,
  par exemple `{ medium: 5, high: 10, critical: 15 }`.
- La moyenne d'un groupe est la moyenne des criticités de ses risques évalués,
  sur 5 comme dans le tableau récapitulatif.
- L'import accepte aussi les anciens formats : risques imbriqués dans les
  groupes, anciennes doubles cotations (`assessmentA*`/`assessmentB*`,
  `gcBefore`/`dtuBefore`…), statuts en texte (« En cours »…). Un fichier
  invalide est refusé sans modifier l'analyse affichée.

Chaque groupe peut également comporter deux champs de synthèse destinés aux
décideurs :

- `assessmentNote` : lecture courte de la catégorie ;
- `remediationNote` : remédiation visée.

Riskr contrôle ces deux textes à 30 mots maximum. Le moteur reste compatible
avec les anciens fichiers de données qui ne les contiennent pas.

## 🔌 100 % hors-ligne

Toutes les bibliothèques (chart.js 4.4.0, jsPDF 2.5.1, jspdf-autotable 3.8.2,
xlsx 0.18.5) sont vendorisées inline dans le HTML : aucune dépendance CDN,
la page fonctionne intégralement sans réseau (fichier unique ~1,9 Mo).

## ✨ Fonctionnalités

### Organisation en onglets
- **Matrices** (matrices, panneau latéral, moyennes par groupe, tableau
  récapitulatif), **Registre** (tableau compact, cartes ou édition complète),
  **Plan d'actions**, **Revues**, **Vue comité** ; l'onglet choisi est mémorisé et
  figure dans l'adresse (`riskr.html#revues`). Un clic sur une case de matrice
  filtre le registre et le panneau latéral.
- **Fiche du risque** (clic sur un risque, adresse `riskr.html#fiche:<uid>`) :
  cotations avant → après → cible, traitement, porteur, vélocité, nœud papillon
  relié (efficacité des barrières, chiffrage des conséquences), évolution de la
  cotation, notes de revue, pièces et liens, « Enregistrer comme modèle ».
- L'ancienne version sur une seule page reste disponible via l'étiquette Git
  `v-une-page`.

### Gestion des Risques
- **Édition inline** de tous les champs (titres, descriptions, catégories)
- **Ajout/suppression** de risques et de groupes de risques
- **Drag & drop** pour réorganiser les risques
- **Numérotation automatique** selon la position (ajout, suppression, glisser-déposer)
- **Mesures de remédiation** avec porteur, échéance facultative et état
  (à faire, en cours, faite) ; échéance dépassée signalée en rouge
- **Plan d'actions** : progression, mesures regroupées par état, porteur ou
  échéance, « Mes mesures », étiquette préventive / protection, retards en tête,
  glisser-déposer d'une colonne à l'autre (vue par état) pour changer l'état d'une mesure
- **Revues** : photo datée des cotations (« Figer une nouvelle revue », auteur ou
  instance), frise, comparaison de deux revues ou d'une revue avec l'état actuel
  (compteurs, changements triés par écart), courbe d'exposition moyenne par
  groupe et tendance par risque
- **Stratégie de traitement** (réduire, accepter, transférer, éviter) et
  **cotation cible** par risque
- **Filtres** : recherche, groupe, niveau résiduel, traitement, porteur,
  risques au-dessus de l'appétence
- **Catégorisation** par groupes thématiques
- **Nœud papillon** par risque : causes, barrières préventives, événement redouté,
  barrières de protection, conséquences (les barrières sont les mesures du risque)
- **Bibliothèque de risques types** intégrée (hors ligne, 6 thèmes, 5 langues,
  description et cotation type) et « Mes modèles » : ajout en quelques clics,
  avec ou sans les mesures suggérées
- **Vue comité** (onglet) : synthèse d'une page (indicateurs, trajectoire, 5 risques
  résiduels les plus élevés, traitements, exposition par revue, décisions attendues),
  copiable dans Word ou PowerPoint et exportable en PDF d'une page

### Visualisation
- **Matrices Before/After** avec Chart.js
- **Matrices Avant, Après, côte à côte ou Trajectoire** : en trajectoire, chaque
  risque va de sa position avant (bulle creuse) à sa position après (bulle pleine)
- **Matrices à une date de revue** : une frise sous l'en-tête affiche l'état actuel
  (« 1 changement depuis la revue n°5 ») ou n'importe quelle revue passée, en
  lecture seule ; matrices, panneau et tableaux suivent. La vue comité et l'export
  PDF restent sur l'état actuel.
- **Panneau latéral** : une carte compacte « Affichage » où chaque option porte son
  symbole de légende (nombre par case, appétence, cible en losange vert, taille des
  bulles selon la vélocité ; explication au survol) et le seuil d'appétence, puis les
  risques de la case cliquée et ceux au-dessus de l'appétence
- **Cible** : pastille en losange bleu = cible atteinte ; losange blanc à contour vert,
  à sa cotation = cible visée, pas encore atteinte
- **Appétence au risque** tracée en pointillé, **nombre de risques par case**
  (options d'affichage), clic sur une case pour filtrer le registre
- Visualisation comparative de l'impact des remédiations
- Moyennes par groupe de risques
- Lecture et remédiation synthétiques par groupe
- Légende interactive avec codes couleur
- Copie du tableau de synthèse vers Word, avec les couleurs des cotations
- Copie d'une matrice en image (titre, matrice et légende) pour la coller ailleurs

### Système d'Historique
- **Undo/Redo** jusqu'à 50 étapes (Cmd+Z / Cmd+Y sur Mac, Ctrl+Z / Ctrl+Y sur Windows/Linux)
- Chaque modification (cotation, texte, statut, ajout, suppression, déplacement, import) est historisée

### Persistance des Données
- **Enregistrement dans le fichier** : sous Chrome/Edge, bouton « Enregistrer
  dans le fichier » une fois, puis chaque modification est écrite
  automatiquement dans `riskr-data.js` (ou `riskr-data.local.js` si l'analyse
  vient du fichier privé). Sous Firefox/Safari, le bouton « Enregistrer »
  télécharge le fichier à remplacer à côté de `riskr.html`. Un voyant indique
  l'état, et la fermeture de la page est confirmée s'il reste des
  modifications non enregistrées.
- **localStorage** : l'analyse complète est aussi sauvegardée dans le
  navigateur à chaque modification et restaurée au rechargement
- Si `riskr-data.js` est modifié entre deux ouvertures, **le fichier reprend la
  main** et les modifications faites dans le navigateur sont abandonnées
  (un message le signale) : exportez avant de remplacer le fichier
- **Export/Import JSON** pour partage et backup
- Aucune connexion serveur requise

### Interface
- **Design responsive** adapté mobile, tablette et desktop
- **Sections pliables** pour une navigation optimisée
- **Édition inline** fluide avec feedbacks visuels
- **Thème clair et thème sombre** : suit le réglage du système, bascule par
  l'icône soleil/lune (préférence conservée dans le navigateur). Les copies
  d'image et le PDF restent en version claire
- **Commandes en icônes** (importer, exporter, enregistrer, langue, thème),
  libellés en infobulle
- **5 langues** : français, anglais, espagnol, arabe (de droite à gauche) et
  chinois. Le PDF utilise l'anglais pour l'arabe et le chinois (polices latines
  de jsPDF)

## 🚀 Utilisation

**Riskr est une application one-page** - un seul fichier HTML autonome.

1. Télécharger \`riskr.html\`
2. Ouvrir le fichier dans votre navigateur
3. C'est tout ! Aucune installation requise


## 🛠️ Stack Technique

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec flexbox/grid
- **JavaScript (ES6+)** - Vanilla JS, aucune dépendance framework

### Bibliothèques
- **Chart.js** - Visualisation des matrices de risques
- Aucune autre dépendance externe

### Persistance
- **localStorage** - Stockage navigateur natif isolé par analyse
- Format JSON pour import/export

### Architecture
- **One-page application** - Tout dans un seul fichier HTML
- Aucun build ou bundler requis
- Fonctionne offline une fois chargé

## 📄 License

Ce projet est sous licence **GNU Affero General Public License v3.0 (AGPL-3.0)**.

### Résumé de la licence
- ✅ Libre d'utiliser, modifier et distribuer
- ✅ Code source disponible et modifiable
- ⚠️ **Important pour SaaS** : Si vous utilisez Riskr sur un serveur accessible via réseau (SaaS), vous devez partager le code source modifié avec vos utilisateurs

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (\`git checkout -b feature/AmazingFeature\`)
3. Commit vos changements (\`git commit -m 'Add some AmazingFeature'\`)
4. Push vers la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou suggestion :
- Ouvrir une [issue](https://github.com/guthubrx/Riskr/issues)
- Consulter la documentation dans le code source

---

© 2025 Riskr — Application d'analyse et de cartographie des risques
