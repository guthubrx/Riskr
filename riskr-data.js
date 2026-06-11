// riskr-data.js — Donnees de l'analyse de risques Riskr
// L'agent modifie UNIQUEMENT ce fichier.
// Le HTML (riskr.html) le charge automatiquement.
// Format identique a l'export JSON de Riskr.
window.RISKR_DATA = {
    "version": "2.0",
    "appState": {
        "title": "Riskr - Analyse de Risques",
        "subtitle": "Projet Exemple — 2026",
        "language": "fr"
    },
    "risks": [
        { "id": "1.1", "title": "Inadequation strategique",
          "dtuBefore": [3, 3], "dtuAfter": [2, 2],
          "gcBefore": [3, 3], "gcAfter": [2, 2],
          "mesures": ["Revision strategie trimestrielle", "Alignement objectifs", "Suivi KPI strategiques"],
          "statut": "En cours", "responsable": "" },
        { "id": "1.2", "title": "Deficit de gouvernance",
          "dtuBefore": [3, 3], "dtuAfter": [2, 2],
          "gcBefore": [3, 3], "gcAfter": [2, 2],
          "mesures": ["Comite de direction elargi", "Processus decisionnels documentes", "Formation gouvernance"],
          "statut": "Non traite", "responsable": "" },
        { "id": "2.1", "title": "Defaillance processus critique",
          "dtuBefore": [3, 4], "dtuAfter": [2, 3],
          "gcBefore": [3, 4], "gcAfter": [2, 3],
          "mesures": ["Cartographie processus", "Plans de continuite", "Controles renforces"],
          "statut": "En cours", "responsable": "" },
        { "id": "2.2", "title": "Insuffisance ressources",
          "dtuBefore": [3, 3], "dtuAfter": [2, 2],
          "gcBefore": [3, 3], "gcAfter": [2, 2],
          "mesures": ["Planification ressources", "Mutualisation moyens", "Recrutement cible"],
          "statut": "Non traite", "responsable": "" },
        { "id": "3.1", "title": "Evolution reglementaire",
          "dtuBefore": [3, 3], "dtuAfter": [2, 2],
          "gcBefore": [3, 3], "gcAfter": [2, 2],
          "mesures": ["Veille reglementaire", "Analyse d'impact", "Adaptation procedures"],
          "statut": "En cours", "responsable": "" }
    ],
    "riskGroups": [
        {
            "id": 1,
            "name": "Risques strategiques et organisationnels",
            "description": "Strategie, gouvernance et gestion du changement",
            "color": "#2E86C1",
            "riskIds": ["1.1", "1.2"],
            "mesures": [
                "Renforcer la gouvernance et les processus decisionnels",
                "Developper la communication et la conduite du changement"
            ]
        },
        {
            "id": 2,
            "name": "Risques operationnels",
            "description": "Processus, ressources et continuite d'activite",
            "color": "#27AE60",
            "riskIds": ["2.1", "2.2"],
            "mesures": [
                "Cartographier et optimiser les processus critiques",
                "Developper des plans de continuite d'activite"
            ]
        },
        {
            "id": 3,
            "name": "Risques externes",
            "description": "Environnement reglementaire et marche",
            "color": "#E67E22",
            "riskIds": ["3.1"],
            "mesures": [
                "Assurer une veille reglementaire et concurrentielle active",
                "Developper l'agilite organisationnelle"
            ]
        }
    ]
};
