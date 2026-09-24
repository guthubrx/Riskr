// Données de démonstration génériques pour Riskr.
// Une analyse métier privée peut utiliser un fichier local ignoré par Git.
window.RISKR_DATA = {
    version: "2.1",
    appState: {
        title: "Riskr - Analyse de risques",
        subtitle: "Exemple générique de cotations avant et après remédiation",
        language: "fr",
        storageNamespace: "riskr-demo"
    },
    risks: [
        {
            id: "1.1",
            title: "Objectifs et priorités insuffisamment alignés",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Formaliser la feuille de route et les critères de priorisation.",
                "Valider régulièrement les décisions et les dépendances.",
                "Partager des indicateurs utiles aux décideurs."
            ],
            statut: "statusInProgress",
            responsable: "Direction de projet"
        },
        {
            id: "1.2",
            title: "Responsabilités et décisions insuffisamment formalisées",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Documenter les rôles et les circuits de décision.",
                "Mettre en place un rythme de gouvernance adapté.",
                "Tracer les arbitrages structurants."
            ],
            statut: "statusInProgress",
            responsable: "Direction de projet"
        },
        {
            id: "2.1",
            title: "Interruption d'une activité critique",
            assessmentBefore: [3, 4], assessmentAfter: [2, 2],
            mesures: [
                "Identifier les activités et dépendances critiques.",
                "Tester les procédures de reprise.",
                "Suivre les incidents et actions correctrices."
            ],
            statut: "statusInProgress",
            responsable: "Responsable opérationnel"
        },
        {
            id: "2.2",
            title: "Capacité opérationnelle insuffisante",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Planifier la charge et les compétences nécessaires.",
                "Prévoir les relais pour les rôles sensibles.",
                "Réviser la capacité à chaque jalon important."
            ],
            statut: "statusNotTreated",
            responsable: "Responsable opérationnel"
        },
        {
            id: "3.1",
            title: "Obsolescence ou vulnérabilité des systèmes",
            assessmentBefore: [3, 4], assessmentAfter: [2, 3],
            mesures: [
                "Maintenir une feuille de route technique priorisée.",
                "Suivre les vulnérabilités et les mises à niveau.",
                "Vérifier les sauvegardes et les capacités de reprise."
            ],
            statut: "statusInProgress",
            responsable: "Responsable technique"
        },
        {
            id: "3.2",
            title: "Qualité ou intégration technique insuffisante",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Définir les critères d'acceptation et de qualité.",
                "Tester les interfaces et les scénarios prioritaires.",
                "Traiter les écarts avant le passage à l'échelle."
            ],
            statut: "statusNotTreated",
            responsable: "Responsable technique"
        },
        {
            id: "4.1",
            title: "Engagement fournisseur non maîtrisé",
            assessmentBefore: [3, 4], assessmentAfter: [2, 3],
            mesures: [
                "Anticiper les échéances et les décisions nécessaires.",
                "Suivre les engagements, livrables et dépendances.",
                "Préparer les options de continuité."
            ],
            statut: "statusInProgress",
            responsable: "Responsable achats"
        },
        {
            id: "4.2",
            title: "Dépendance excessive à un partenaire ou à une compétence",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Documenter les savoirs et procédures essentiels.",
                "Planifier le transfert de compétences.",
                "Identifier des solutions de repli proportionnées."
            ],
            statut: "statusNotTreated",
            responsable: "Direction de projet"
        },
        {
            id: "5.1",
            title: "Évolution réglementaire ou contractuelle non anticipée",
            assessmentBefore: [3, 3], assessmentAfter: [2, 2],
            mesures: [
                "Organiser une veille des textes et engagements applicables.",
                "Évaluer les impacts sur le projet.",
                "Mettre à jour les décisions et contrôles nécessaires."
            ],
            statut: "statusInProgress",
            responsable: "Référent conformité"
        },
        {
            id: "5.2",
            title: "Protection des données ou contrôle des accès insuffisant",
            assessmentBefore: [2, 4], assessmentAfter: [1, 3],
            mesures: [
                "Qualifier les données, finalités et accès.",
                "Vérifier les mesures de sécurité appropriées.",
                "Documenter les contrôles et revues périodiques."
            ],
            statut: "statusNotTreated",
            responsable: "Référent conformité"
        }
    ],
    riskGroups: [
        {
            id: 1,
            name: "Gouvernance et pilotage",
            description: "Objectifs, décisions, parties prenantes et conduite du changement",
            assessmentNote: "La clarté des décisions, des responsabilités et des priorités conditionne l'exécution du projet.",
            remediationNote: "Gouvernance régulière, feuille de route partagée, indicateurs et arbitrages documentés.",
            color: "#2E86C1",
            riskIds: ["1.1", "1.2"]
        },
        {
            id: 2,
            name: "Opérations et continuité",
            description: "Activités critiques, disponibilité, capacité et résilience",
            assessmentNote: "La continuité du service dépend des activités critiques, de la capacité disponible et des dispositifs de reprise.",
            remediationNote: "Analyse des dépendances, procédures de reprise, gestion de capacité et suivi des incidents.",
            color: "#27AE60",
            riskIds: ["2.1", "2.2"]
        },
        {
            id: 3,
            name: "Systèmes et cybersécurité",
            description: "Obsolescence, qualité technique, sécurité et intégration",
            assessmentNote: "Les évolutions techniques et la maîtrise des vulnérabilités déterminent la fiabilité durable de la solution.",
            remediationNote: "Feuille de route technique, mises à niveau, tests d'intégration et contrôles de sécurité.",
            color: "#8E44AD",
            riskIds: ["3.1", "3.2"]
        },
        {
            id: 4,
            name: "Fournisseurs et engagements",
            description: "Contrats, livrables, dépendances et transfert de compétences",
            assessmentNote: "Les engagements externes et les compétences rares nécessitent une anticipation des échéances et des relais.",
            remediationNote: "Suivi des engagements, plan de continuité, transfert de compétences et options de repli.",
            color: "#E67E22",
            riskIds: ["4.1", "4.2"]
        },
        {
            id: 5,
            name: "Conformité et données",
            description: "Exigences applicables, protection des données et contrôles",
            assessmentNote: "La conformité dépend de l'anticipation des obligations et de la maîtrise des données et des accès.",
            remediationNote: "Veille, analyse d'impact, mesures de sécurité et revues de conformité adaptées.",
            color: "#C0392B",
            riskIds: ["5.1", "5.2"]
        }
    ]
};
