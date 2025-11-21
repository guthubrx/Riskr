# Riskr

Application web d'analyse et de cartographie des risques avec matrices Before/After et gestion collaborative.

## 📋 À propos

**Riskr** est une application web one-page complète pour l'analyse et la gestion des risques. Elle permet de visualiser l'évolution des risques avant et après la mise en place de mesures de remédiation, à travers des matrices interactives et des tableaux détaillés.

## ✨ Fonctionnalités

### Gestion des Risques
- **Édition inline** de tous les champs (titres, descriptions, catégories)
- **Ajout/suppression** de risques et de groupes de risques
- **Drag & drop** pour réorganiser les risques
- **Renumération automatique** lors des modifications
- **Catégorisation** par groupes thématiques

### Visualisation
- **Matrices Before/After** avec Chart.js
- Visualisation comparative de l'impact des remédiations
- Moyennes par groupe de risques
- Légende interactive avec codes couleur

### Système d'Historique
- **Undo/Redo** jusqu'à 50 étapes (Cmd+Z / Cmd+Y sur Mac, Ctrl+Z / Ctrl+Y sur Windows/Linux)
- Sauvegarde automatique de chaque modification
- Navigation dans l'historique des changements

### Persistance des Données
- **localStorage** automatique pour sauvegarde locale
- **Export/Import JSON** pour partage et backup
- Aucune connexion serveur requise

### Interface
- **Design responsive** adapté mobile, tablette et desktop
- **Sections pliables** pour une navigation optimisée
- **Édition inline** fluide avec feedbacks visuels
- **Thème moderne** inspiré du design Apple

## 🚀 Utilisation

**Riskr est une application one-page** - un seul fichier HTML autonome.

### Option 1 : Utilisation directe
1. Télécharger \`riskr.html\`
2. Ouvrir le fichier dans votre navigateur
3. C'est tout ! Aucune installation requise

### Option 2 : Via un serveur web
\`\`\`bash
# Python 3
python3 -m http.server 8000

# Ou simplement ouvrir riskr.html avec votre navigateur
\`\`\`

Puis ouvrir http://localhost:8000/riskr.html

## 🛠️ Stack Technique

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec flexbox/grid
- **JavaScript (ES6+)** - Vanilla JS, aucune dépendance framework

### Bibliothèques
- **Chart.js** - Visualisation des matrices de risques
- Aucune autre dépendance externe

### Persistance
- **localStorage** - Stockage navigateur natif
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
