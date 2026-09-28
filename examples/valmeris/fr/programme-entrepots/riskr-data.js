// Données de démonstration entièrement fictives : Groupe Valmeris, programme « Entrepôts connectés ».
// Aucune entreprise, personne ou projet réel. Généré par generer.py.
window.RISKR_DATA = {
  "version": "2.1",
  "appState": {
    "title": "Riskr - Entrepôts connectés",
    "subtitle": "Groupe Valmeris (fictif) · portefeuille Transformation Valmeris 2026-2028 · programme Entrepôts connectés",
    "language": "fr",
    "storageNamespace": "valmeris-entrepots"
  },
  "program": {
    "uid": "ent-programme",
    "title": "Entrepôts connectés",
    "objective": "Automatiser les plateformes de Saint-Priest, Cestas et Lesquin, déployer un nouveau WMS, connecter la flotte de chariots et réduire de 20 % la consommation d'énergie des entrepôts d'ici 2028 (budget ≈ 14 M€).",
    "sponsor": "Régine Faure",
    "manager": "Olivier Marchetti",
    "status": "active",
    "appetite": 9,
    "reserve": 700000,
    "components": [
      {
        "uid": "ent-proj-stpriest",
        "name": "Automatisation Saint-Priest",
        "type": "project",
        "owner": "Samira Ouali",
        "status": "active",
        "tolerance": 9,
        "reserve": 200000
      },
      {
        "uid": "ent-proj-wms",
        "name": "Nouveau WMS",
        "type": "project",
        "owner": "Thomas Lefèvre",
        "status": "active",
        "tolerance": 9,
        "reserve": 150000
      },
      {
        "uid": "ent-proj-flotte",
        "name": "Capteurs et flotte connectée",
        "type": "project",
        "owner": "Sophie Nguyen",
        "status": "active",
        "tolerance": 8,
        "reserve": 90000
      },
      {
        "uid": "ent-proj-energie",
        "name": "Sobriété énergétique des entrepôts",
        "type": "project",
        "owner": "Julien Roussel",
        "status": "active",
        "tolerance": 9,
        "reserve": 80000
      },
      {
        "uid": "ent-work-equipes",
        "name": "Accompagnement des équipes logistiques",
        "type": "work",
        "owner": "Élodie Garnier",
        "status": "active",
        "tolerance": 9,
        "reserve": 50000
      }
    ],
    "benefits": [
      {
        "uid": "ent-benefit-productivite",
        "name": "Productivité de préparation",
        "owner": "Bastien Morel",
        "unit": "colis/h",
        "baseline": 95,
        "target": 140,
        "actual": 98,
        "dueDate": "2027-12-31",
        "measuredAt": "2026-09-10",
        "riskUids": [
          "ent-2-1",
          "ent-2-2",
          "ent-1-1",
          "ent-5-2"
        ]
      },
      {
        "uid": "ent-benefit-energie",
        "name": "Consommation d'énergie des trois plateformes",
        "owner": "Julien Roussel",
        "unit": "GWh/an",
        "baseline": 21.5,
        "target": 17.2,
        "actual": 20.2,
        "dueDate": "2028-12-31",
        "measuredAt": "2026-08-31",
        "riskUids": [
          "ent-4-2",
          "ent-4-3",
          "ent-4-1"
        ]
      },
      {
        "uid": "ent-benefit-erreurs",
        "name": "Taux d'erreur de préparation",
        "owner": "Bastien Morel",
        "unit": "%",
        "baseline": 0.8,
        "target": 0.2,
        "actual": 0.7,
        "dueDate": "2027-12-31",
        "measuredAt": "2026-09-10",
        "riskUids": [
          "ent-3-2",
          "ent-5-2"
        ]
      },
      {
        "uid": "ent-benefit-suivi",
        "name": "Colis suivis en temps réel pour la Relation client",
        "owner": "Sophie Nguyen",
        "unit": "%",
        "baseline": 40,
        "target": 98,
        "actual": 62,
        "dueDate": "2027-06-30",
        "measuredAt": "2026-09-10",
        "riskUids": [
          "ent-3-4",
          "ent-3-1",
          "ent-3-5"
        ]
      }
    ],
    "dependencies": [
      {
        "uid": "ent-dep-1",
        "sourceId": "ent-proj-wms",
        "targetId": "ent-proj-stpriest",
        "kind": "finishStart",
        "description": "Les convoyeurs de Saint-Priest sont pilotés par le nouveau WMS, lui-même dépendant de l'ERP du Socle numérique.",
        "owner": "Thomas Lefèvre",
        "dueDate": "2027-03-01",
        "status": "active",
        "riskUids": [
          "ent-3-1",
          "ent-3-2",
          "ent-2-2"
        ]
      },
      {
        "uid": "ent-dep-2",
        "sourceId": "ent-proj-flotte",
        "targetId": "ent-proj-energie",
        "kind": "interface",
        "description": "L'effacement des recharges en heures de pointe utilise les données de la flotte connectée.",
        "owner": "Sophie Nguyen",
        "dueDate": "2027-01-31",
        "status": "active",
        "riskUids": [
          "ent-4-1",
          "ent-1-3"
        ]
      },
      {
        "uid": "ent-dep-3",
        "sourceId": "ent-work-equipes",
        "targetId": "ent-proj-wms",
        "kind": "resource",
        "description": "Les ambassadeurs formés par le chantier Accompagnement réalisent la recette utilisateur et la bascule du WMS.",
        "owner": "Pauline Chevalier",
        "dueDate": "2027-02-15",
        "status": "active",
        "riskUids": [
          "ent-5-2",
          "ent-5-1"
        ]
      }
    ],
    "scenarios": [
      {
        "uid": "ent-scenario-1",
        "name": "Pic de fin d'année sans nouvelle capacité ni interfaces ERP",
        "riskUids": [
          "ent-1-2",
          "ent-3-1",
          "ent-2-1"
        ],
        "probability": 25,
        "min": 400000,
        "likely": 900000,
        "max": 1800000,
        "status": "active",
        "owner": "Olivier Marchetti",
        "reason": "Double fonctionnement de l'ancien et du nouveau WMS pendant le pic, débord vers Cestas et pénalités clients cumulés."
      },
      {
        "uid": "ent-scenario-2",
        "name": "Cyberattaque pendant la reprise des données du WMS",
        "riskUids": [
          "ent-3-3",
          "ent-3-2"
        ],
        "probability": 10,
        "min": 300000,
        "likely": 800000,
        "max": 2000000,
        "status": "active",
        "owner": "Antoine Delmas",
        "reason": "Une intrusion pendant la reprise à blanc obligerait à recommencer la reprise et à reporter la bascule."
      }
    ],
    "escalations": [
      {
        "uid": "ent-escalation-1",
        "riskUid": "ent-3-1",
        "fromLevel": "program",
        "toLevel": "organization",
        "fromComponentId": "",
        "targetComponentId": "",
        "reason": "Le retard des interfaces relève du Socle numérique : arbitrage de priorité à rendre au niveau du portefeuille Transformation Valmeris 2026-2028.",
        "author": "Olivier Marchetti",
        "raisedAt": "2026-09-16",
        "status": "pending",
        "decision": "",
        "decisionAuthor": "",
        "decidedAt": "",
        "decisionReason": ""
      },
      {
        "uid": "ent-escalation-2",
        "riskUid": "ent-5-1",
        "fromLevel": "component",
        "toLevel": "program",
        "fromComponentId": "ent-work-equipes",
        "targetComponentId": "",
        "reason": "Le risque social touche les trois plateformes et dépasse le périmètre du chantier Accompagnement.",
        "author": "Élodie Garnier",
        "raisedAt": "2026-04-20",
        "status": "decided",
        "decision": "takeOwnership",
        "decisionAuthor": "Régine Faure",
        "decidedAt": "2026-05-05",
        "decisionReason": "Pilotage du dialogue social au niveau du programme, avec la Direction des ressources humaines.",
        "scoreAtDecision": 9
      }
    ],
    "stages": [
      {
        "uid": "ent-stage-1",
        "name": "Cadrage et conception",
        "startDate": "2025-09-01",
        "endDate": "2026-03-31",
        "status": "closed"
      },
      {
        "uid": "ent-stage-2",
        "name": "Pilote de Saint-Priest et nouveau WMS",
        "startDate": "2026-04-01",
        "endDate": "2027-06-30",
        "status": "active"
      },
      {
        "uid": "ent-stage-3",
        "name": "Déploiement à Cestas et Lesquin",
        "startDate": "2027-07-01",
        "endDate": "2028-12-31",
        "status": "active"
      }
    ],
    "decisions": [
      {
        "uid": "ent-program-decision-1",
        "date": "2026-03-24",
        "author": "Régine Faure",
        "subject": "Séquencement des sites",
        "decision": "Saint-Priest en pilote, puis Cestas en 2027 et Lesquin en 2028.",
        "reason": "Concentrer les compétences rares sur un site avant de reproduire le modèle.",
        "reviewDate": "2026-12-15"
      },
      {
        "uid": "ent-program-decision-2",
        "date": "2026-07-22",
        "author": "Comité de programme",
        "subject": "Plan de rattrapage des convoyeurs",
        "decision": "Mise en service par zones et location de trieurs provisoires ; 180 k€ pris sur la réserve programme.",
        "reason": "Limiter le décalage de Saint-Priest à deux mois et protéger le pic de fin d'année.",
        "reviewDate": "2026-10-15"
      },
      {
        "uid": "ent-program-decision-3",
        "date": "2026-09-15",
        "author": "Comité de programme",
        "subject": "Gel des changements pendant le pic",
        "decision": "Aucune bascule applicative ni mise en service entre le 15/11/2026 et le 05/01/2027.",
        "reason": "Préserver la capacité et la stabilité pendant la période la plus chargée.",
        "reviewDate": "2027-01-15"
      }
    ]
  },
  "settings": {
    "riskAppetite": 9,
    "cadenceRevue": 90,
    "echelleImpact": [
      50000,
      200000,
      1000000,
      3000000
    ],
    "effetVelocite": "discret"
  },
  "risks": [
    {
      "uid": "ent-1-1",
      "id": "1.1",
      "title": "Accident grave lors de la coactivité entre robots et préparateurs",
      "scopeLevel": "component",
      "componentId": "ent-proj-stpriest",
      "affectedComponentIds": [
        "ent-work-equipes"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Un préparateur est heurté ou coincé par une navette ou un robot mobile dans la zone automatisée de Saint-Priest.",
      "objective": "Zéro accident grave pendant la mise en service et l'exploitation des zones automatisées.",
      "raisedAt": "2025-11-11",
      "raisedBy": "Mathilde Perrin",
      "proximityDate": "2026-11-02",
      "milestone": "Essais de réception de la zone navettes",
      "impactAxes": {
        "cost": 3,
        "delay": 4,
        "quality": 2,
        "service": 4,
        "benefit": 3
      },
      "assessmentBefore": [
        3,
        5
      ],
      "assessmentCurrent": [
        2,
        5
      ],
      "assessmentAfter": [
        1,
        5
      ],
      "assessmentTarget": [
        1,
        5
      ],
      "traitement": "reduce",
      "velocite": 5,
      "statut": "statusInProgress",
      "responsable": "Mathilde Perrin",
      "causes": [
        "Circulation piétonne non séparée des flux automatisés pendant les essais",
        "Opérateurs non habilités intervenant en zone robotisée",
        "Dispositifs de sécurité désactivés pour accélérer les réglages",
        "Signalisation provisoire pendant les travaux"
      ],
      "consequences": [
        {
          "texte": "Blessure grave ou décès d'un salarié ou d'un intérimaire",
          "chiffrage": "impact humain non chiffrable"
        },
        {
          "texte": "Arrêt de la zone automatisée et enquête de l'inspection du travail",
          "chiffrage": "≈ 3 à 6 semaines d'arrêt, ≈ 800 k€"
        },
        {
          "texte": "Mise en cause pénale de l'employeur et atteinte à l'image",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Réaliser l'analyse de risques machine et le plan de prévention de la coactivité.",
          "porteur": "Mathilde Perrin",
          "echeance": "31/01/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Plan de prévention signé par l'intégrateur le 28/01/2026."
        },
        {
          "texte": "Tester barrières immatérielles et arrêts d'urgence à chaque réception de zone.",
          "porteur": "Samira Ouali",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Former et habiliter les 180 préparateurs et intérimaires à la zone robotisée.",
          "porteur": "Pauline Chevalier",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Rédiger le plan d'intervention des secours et organiser un exercice sur site.",
          "porteur": "Bastien Morel",
          "echeance": "30/11/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Plan de prévention appliqué : la probabilité passe de P3 à P2. La formation habilitante reste la condition pour atteindre P1."
        },
        {
          "date": "2026-09-15",
          "auteur": "Mathilde Perrin",
          "texte": "Impact coté I5 pour la gravité humaine : le coût probable (≈ 800 k€) le place en I3 sur l'échelle financière. Écart assumé, l'impact est d'abord non financier."
        },
        {
          "date": "2026-09-22",
          "auteur": "Pauline Chevalier",
          "texte": "Formation en retard : 112 personnes habilitées sur 180, faute de créneaux pendant la saison haute."
        }
      ],
      "liens": [
        {
          "libelle": "Plan de prévention coactivité Saint-Priest",
          "url": "https://intranet.valmeris.example/entrepots-connectes/securite/plan-prevention-saint-priest"
        },
        {
          "libelle": "Analyse de risques machine",
          "url": "https://intranet.valmeris.example/entrepots-connectes/securite/analyse-risques-machine"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-1-1",
          "nom": "Presque-accidents déclarés en zone automatisée",
          "unite": "événements",
          "sens": "hausse",
          "alerte": 3,
          "critique": 6,
          "releves": [
            {
              "date": "2026-03-31",
              "valeur": 7,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-04-30",
              "valeur": 6,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-05-31",
              "valeur": 5,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-06-30",
              "valeur": 4,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-07-31",
              "valeur": 4,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-08-31",
              "valeur": 3,
              "auteur": "Mathilde Perrin"
            },
            {
              "date": "2026-09-20",
              "valeur": 2,
              "auteur": "Mathilde Perrin"
            }
          ]
        }
      ],
      "cout": {
        "min": 300000,
        "probable": 800000,
        "max": 2500000
      },
      "decisions": [
        {
          "id": "ent-dec-1-1",
          "date": "2026-06-30",
          "author": "Régine Faure",
          "type": "moreAction",
          "reason": "Au-dessus de la tolérance du projet : aucune mise en service de zone sans habilitation complète des équipes concernées.",
          "reviewDate": "2026-10-15",
          "scoreAtDecision": 10
        }
      ],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-10-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié lors de l'analyse de risques machine du cahier des charges de Saint-Priest."
    },
    {
      "uid": "ent-1-2",
      "id": "1.2",
      "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
      "scopeLevel": "program",
      "affectedComponentIds": [
        "ent-proj-stpriest",
        "ent-work-equipes"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Les volumes du Black Friday et de Noël dépassent la capacité de Saint-Priest réduite par les travaux d'automatisation.",
      "objective": "Tenir les délais de livraison clients pendant le pic 2026 malgré les travaux.",
      "raisedAt": "2025-10-20",
      "raisedBy": "Bastien Morel",
      "proximityDate": "2026-11-23",
      "milestone": "Pic de fin d'année 2026",
      "impactAxes": {
        "cost": 4,
        "delay": 3,
        "quality": 3,
        "service": 5,
        "benefit": 2
      },
      "assessmentBefore": [
        4,
        4
      ],
      "assessmentCurrent": [
        3,
        4
      ],
      "assessmentAfter": [
        2,
        4
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "reduce",
      "velocite": 4,
      "statut": "statusInProgress",
      "responsable": "Bastien Morel",
      "causes": [
        "Zones de stockage neutralisées par les travaux",
        "Retard des convoyeurs repoussant la nouvelle capacité après le pic",
        "Prévisions de volumes commerciaux en hausse de 12 %",
        "Intérimaires difficiles à recruter en novembre"
      ],
      "consequences": [
        {
          "texte": "Colis livrés en retard et pénalités clients",
          "chiffrage": "≈ 600 k€ de pénalités"
        },
        {
          "texte": "Transport de débord vers Cestas et prestataire externe",
          "chiffrage": "≈ 500 k€"
        },
        {
          "texte": "Dégradation de la satisfaction client pendant la période la plus visible",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Geler les travaux de Saint-Priest du 15/11/2026 au 05/01/2027.",
          "porteur": "Samira Ouali",
          "echeance": "15/07/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Planning travaux révisé, validé en comité du 30/06/2026."
        },
        {
          "texte": "Contractualiser le débord vers Cestas et un prestataire logistique externe.",
          "porteur": "Karim Haddad",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Recruter 120 intérimaires formés avant le 1er novembre.",
          "porteur": "Élodie Garnier",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Activer une cellule de pilotage quotidienne du pic avec la Relation client.",
          "porteur": "Bastien Morel",
          "echeance": "15/11/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-02-10",
          "auteur": "Comité de programme (10/02)",
          "texte": "Gel des travaux pendant le pic décidé : la probabilité passe de P4 à P3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Comité de programme (15/09)",
          "texte": "Le retard des convoyeurs prive le pic de la nouvelle capacité ; le contrat de débord n'est pas encore signé."
        }
      ],
      "liens": [
        {
          "libelle": "Plan de charge du pic 2026",
          "url": "https://intranet.valmeris.example/entrepots-connectes/operations/pic-2026"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-1-2",
          "nom": "Taux d'occupation des emplacements de Saint-Priest",
          "unite": "%",
          "sens": "hausse",
          "alerte": 88,
          "critique": 95,
          "releves": [
            {
              "date": "2026-03-31",
              "valeur": 78,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-04-30",
              "valeur": 80,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-05-31",
              "valeur": 83,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-06-30",
              "valeur": 85,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-07-31",
              "valeur": 87,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-08-31",
              "valeur": 90,
              "auteur": "Bastien Morel"
            },
            {
              "date": "2026-09-20",
              "valeur": 91,
              "auteur": "Bastien Morel"
            }
          ]
        }
      ],
      "cout": {
        "min": 300000,
        "probable": 1100000,
        "max": 2000000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-10-20",
      "programOrigin": "native",
      "programOriginNote": "Risque transverse au programme : touche Saint-Priest, les équipes et, en aval, la Relation client omnicanale."
    },
    {
      "uid": "ent-1-3",
      "id": "1.3",
      "title": "Départ de feu lors de la recharge des batteries lithium de la flotte",
      "scopeLevel": "component",
      "componentId": "ent-proj-flotte",
      "affectedComponentIds": [
        "ent-proj-stpriest"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Un emballement thermique d'une batterie lithium provoque un incendie dans le local de charge des chariots connectés.",
      "objective": "Protéger les personnes et la continuité du site pendant l'électrification de la flotte.",
      "raisedAt": "2026-02-24",
      "raisedBy": "Mathilde Perrin",
      "proximityDate": "2026-12-01",
      "milestone": "Arrivée des 60 chariots lithium à Saint-Priest",
      "impactAxes": {
        "cost": 4,
        "delay": 3,
        "quality": 1,
        "service": 4,
        "benefit": 2
      },
      "assessmentBefore": [
        2,
        5
      ],
      "assessmentCurrent": [
        2,
        4
      ],
      "assessmentAfter": [
        1,
        4
      ],
      "assessmentTarget": [
        1,
        4
      ],
      "traitement": "reduce",
      "velocite": 5,
      "statut": "statusInProgress",
      "responsable": "Sophie Nguyen",
      "causes": [
        "Batteries endommagées par des chocs non signalés",
        "Recharge dans une zone non compartimentée",
        "Détection incendie non adaptée aux feux de batteries"
      ],
      "consequences": [
        {
          "texte": "Destruction de chariots et d'une partie du stock",
          "chiffrage": "≈ 1,2 M€"
        },
        {
          "texte": "Arrêt partiel du site et évacuation",
          "chiffrage": "2 à 10 jours"
        }
      ],
      "mesures": [
        {
          "texte": "Construire un local de charge compartimenté coupe-feu deux heures.",
          "porteur": "Bastien Morel",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4,
          "verification": "Procès-verbal de réception du 24/06/2026."
        },
        {
          "texte": "Mettre en quarantaine toute batterie ayant subi un choc.",
          "porteur": "Mathilde Perrin",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Installer une détection thermique par caméra dans le local de charge.",
          "porteur": "Sophie Nguyen",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Faire valider l'installation par l'assureur du groupe.",
          "porteur": "Lucie Fabre",
          "echeance": "31/12/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Local coupe-feu livré : l'impact passe de I5 à I4."
        },
        {
          "date": "2026-09-15",
          "auteur": "Sophie Nguyen",
          "texte": "Caméras thermiques commandées, pose prévue avant l'arrivée des chariots."
        }
      ],
      "liens": [
        {
          "libelle": "Prescriptions de l'assureur pour les batteries lithium",
          "url": "https://intranet.valmeris.example/entrepots-connectes/securite/prescriptions-lithium"
        }
      ],
      "kri": [],
      "cout": {
        "min": 300000,
        "probable": 1200000,
        "max": 3000000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Ajouté après la visite de l'assureur de février 2026 sur les nouveaux locaux de charge."
    },
    {
      "uid": "ent-2-1",
      "id": "2.1",
      "title": "Défaillance de l'intégrateur de l'automatisation",
      "scopeLevel": "component",
      "componentId": "ent-proj-stpriest",
      "affectedComponentIds": [],
      "kind": "threat",
      "lifecycle": "active",
      "event": "L'intégrateur retenu pour Saint-Priest ne tient plus ses effectifs ou ses engagements financiers.",
      "objective": "Mettre en service l'automatisation de Saint-Priest dans le budget et avec un partenaire solide pour Cestas et Lesquin.",
      "raisedAt": "2025-10-15",
      "raisedBy": "Karim Haddad",
      "proximityDate": "2026-12-15",
      "milestone": "Fin du montage mécanique de Saint-Priest",
      "impactAxes": {
        "cost": 3,
        "delay": 4,
        "quality": 2,
        "service": 2,
        "benefit": 3
      },
      "assessmentBefore": [
        3,
        4
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "transfer",
      "velocite": 3,
      "statut": "statusInProgress",
      "responsable": "Karim Haddad",
      "causes": [
        "Intégrateur engagé sur plusieurs grands chantiers simultanés",
        "Dépendance à ses propres sous-traitants en automatisme",
        "Trésorerie tendue signalée par l'analyse financière"
      ],
      "consequences": [
        {
          "texte": "Remplacement de l'intégrateur en cours de chantier",
          "chiffrage": "≈ 600 k€ et 3 mois"
        },
        {
          "texte": "Réserves non levées à la réception",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Obtenir une garantie bancaire de 10 % du marché.",
          "porteur": "Karim Haddad",
          "echeance": "28/02/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4,
          "verification": "Garantie reçue le 19/02/2026."
        },
        {
          "texte": "Inscrire des clauses de pénalités et de réversibilité des programmes automates.",
          "porteur": "Lucie Fabre",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Suivre chaque mois les effectifs sur site et la santé financière de l'intégrateur.",
          "porteur": "Karim Haddad",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Qualifier un second intégrateur pour Cestas et Lesquin.",
          "porteur": "Karim Haddad",
          "echeance": "31/01/2027",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-04-14",
          "auteur": "Comité de programme (14/04)",
          "texte": "Garantie bancaire et clauses obtenues : l'impact passe de I4 à I3."
        },
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Risque résiduel accepté à P3 × I3 jusqu'à la qualification du second intégrateur."
        }
      ],
      "liens": [
        {
          "libelle": "Marché d'intégration Saint-Priest",
          "url": "https://intranet.valmeris.example/entrepots-connectes/achats/marche-integration-saint-priest"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-2-1",
          "nom": "Postes de l'intégrateur non pourvus sur site",
          "unite": "postes",
          "sens": "hausse",
          "alerte": 3,
          "critique": 5,
          "releves": [
            {
              "date": "2026-02-28",
              "valeur": 1,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-03-31",
              "valeur": 2,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-04-30",
              "valeur": 2,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-05-31",
              "valeur": 3,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-06-30",
              "valeur": 4,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-07-31",
              "valeur": 3,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-08-31",
              "valeur": 2,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-09-20",
              "valeur": 2,
              "auteur": "Karim Haddad"
            }
          ]
        }
      ],
      "cout": {
        "min": 200000,
        "probable": 600000,
        "max": 1200000
      },
      "decisions": [
        {
          "id": "ent-dec-2-1",
          "date": "2026-06-30",
          "author": "Comité de programme",
          "type": "accept",
          "reason": "Exposition résiduelle acceptée grâce à la garantie bancaire, sous réserve du suivi mensuel.",
          "reviewDate": "2026-12-15",
          "scoreAtDecision": 9
        }
      ],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié à l'analyse des offres : intégrateur de taille moyenne très sollicité."
    },
    {
      "uid": "ent-2-2",
      "id": "2.2",
      "title": "Retard de livraison des convoyeurs et des trieurs",
      "scopeLevel": "component",
      "componentId": "ent-proj-stpriest",
      "affectedComponentIds": [
        "ent-proj-wms"
      ],
      "kind": "threat",
      "lifecycle": "materialized",
      "event": "Le fabricant de convoyeurs ne livre pas les trieurs de Saint-Priest à la date contractuelle.",
      "objective": "Mettre en service l'automatisation de Saint-Priest en mars 2027.",
      "raisedAt": "2025-10-15",
      "raisedBy": "Samira Ouali",
      "proximityDate": "2026-07-20",
      "milestone": "Livraison des trieurs de Saint-Priest",
      "impactAxes": {
        "cost": 3,
        "delay": 5,
        "quality": 1,
        "service": 3,
        "benefit": 4
      },
      "assessmentBefore": [
        3,
        4
      ],
      "assessmentCurrent": [
        5,
        4
      ],
      "assessmentAfter": [
        3,
        3
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "reduce",
      "velocite": 4,
      "statut": "statusInProgress",
      "responsable": "Samira Ouali",
      "lifeDate": "2026-07-20",
      "issue": {
        "description": "Livraison des trieurs décalée de 10 semaines (défaillance du sous-traitant de motorisations) : mise en service de Saint-Priest reportée de mars à mai 2027, plan de rattrapage par zones en cours.",
        "owner": "Samira Ouali",
        "status": "open"
      },
      "causes": [
        "Fabricant unique pour les trieurs à haute cadence",
        "Sous-traitant de motorisations en difficulté",
        "Tension mondiale sur les composants électroniques",
        "Jalons de fabrication peu visibles avant l'audit"
      ],
      "consequences": [
        {
          "texte": "Mise en service de Saint-Priest décalée de deux mois",
          "chiffrage": "10 semaines"
        },
        {
          "texte": "Surcoûts d'accélération et location de trieurs provisoires",
          "chiffrage": "≈ 650 k€"
        },
        {
          "texte": "Gains de productivité 2027 retardés",
          "chiffrage": "≈ 90 k€ par mois"
        }
      ],
      "mesures": [
        {
          "texte": "Fixer des jalons de fabrication assortis de pénalités de retard.",
          "porteur": "Karim Haddad",
          "echeance": "31/01/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Auditer l'usine du fabricant et son sous-traitant de motorisations.",
          "porteur": "Karim Haddad",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 2,
          "verification": "Rapport d'audit du 25/06/2026 : alerte sur le sous-traitant."
        },
        {
          "texte": "Mettre en service Saint-Priest zone par zone pour limiter le décalage.",
          "porteur": "Samira Ouali",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Louer des trieurs provisoires pour absorber le pic de fin d'année.",
          "porteur": "Karim Haddad",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 1
        },
        {
          "texte": "Appliquer les pénalités de retard prévues au marché.",
          "porteur": "Lucie Fabre",
          "echeance": "31/12/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Le fabricant signale 3 semaines de retard : la probabilité remonte de P2 à P3."
        },
        {
          "date": "2026-07-20",
          "auteur": "Samira Ouali",
          "texte": "Risque survenu : 10 semaines de retard annoncées. Cotation actuelle portée à P5 × I4, au-dessus de l'inhérent (dégradation constatée)."
        },
        {
          "date": "2026-09-15",
          "auteur": "Comité de programme (15/09)",
          "texte": "Plan de rattrapage : prévision ramenée à P3 × I3 si la mise en service par zones tient ; location de trieurs pas encore signée."
        }
      ],
      "liens": [
        {
          "libelle": "Plan de rattrapage des convoyeurs",
          "url": "https://intranet.valmeris.example/entrepots-connectes/saint-priest/plan-rattrapage-convoyeurs"
        },
        {
          "libelle": "Rapport d'audit usine",
          "url": "https://intranet.valmeris.example/entrepots-connectes/achats/audit-usine-convoyeurs"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-2-2",
          "nom": "Retard annoncé par le fabricant de convoyeurs",
          "unite": "semaines",
          "sens": "hausse",
          "alerte": 4,
          "critique": 8,
          "releves": [
            {
              "date": "2026-03-31",
              "valeur": 0,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-04-30",
              "valeur": 0,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-05-31",
              "valeur": 1,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-06-30",
              "valeur": 3,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-07-31",
              "valeur": 10,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-08-31",
              "valeur": 10,
              "auteur": "Karim Haddad"
            },
            {
              "date": "2026-09-20",
              "valeur": 10,
              "auteur": "Karim Haddad"
            }
          ]
        }
      ],
      "cout": {
        "min": 250000,
        "probable": 650000,
        "max": 950000
      },
      "decisions": [
        {
          "id": "ent-dec-2-2",
          "date": "2026-07-22",
          "author": "Régine Faure",
          "type": "moreAction",
          "reason": "Plan de rattrapage par zones et location de trieurs financés sur la réserve programme (180 k€).",
          "reviewDate": "2026-10-15",
          "scoreAtDecision": 20
        }
      ],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-10-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié au lancement : fabricant unique pour les trieurs à haute cadence."
    },
    {
      "uid": "ent-2-3",
      "id": "2.3",
      "title": "Pénurie de composants pour les capteurs embarqués",
      "scopeLevel": "component",
      "componentId": "ent-proj-flotte",
      "affectedComponentIds": [],
      "kind": "threat",
      "lifecycle": "closed",
      "event": "Les boîtiers de télémétrie des chariots ne peuvent pas être livrés faute de composants électroniques.",
      "objective": "Équiper toute la flotte de chariots de Saint-Priest avant le pilote.",
      "raisedAt": "2025-10-28",
      "raisedBy": "Sophie Nguyen",
      "proximityDate": "2026-05-31",
      "milestone": "Réception des boîtiers de télémétrie",
      "impactAxes": {
        "cost": 2,
        "delay": 3,
        "quality": 1,
        "service": 1,
        "benefit": 2
      },
      "assessmentBefore": [
        3,
        3
      ],
      "assessmentCurrent": [
        1,
        3
      ],
      "assessmentAfter": [
        1,
        3
      ],
      "assessmentTarget": [
        1,
        3
      ],
      "traitement": "avoid",
      "velocite": 2,
      "statut": "statusTreated",
      "responsable": "Sophie Nguyen",
      "lifeDate": "2026-06-30",
      "lifeReason": "Les 420 boîtiers ont été livrés et stockés à Lesquin ; il n'y a plus d'exposition pour le programme.",
      "causes": [
        "Délais d'approvisionnement des puces supérieurs à 30 semaines",
        "Fournisseur unique de boîtiers",
        "Commande prévue trop tard dans le planning initial"
      ],
      "consequences": [
        {
          "texte": "Pilote de la flotte connectée décalé",
          "chiffrage": "≈ 3 mois"
        },
        {
          "texte": "Achat de boîtiers de substitution plus chers",
          "chiffrage": "≈ 250 k€"
        }
      ],
      "mesures": [
        {
          "texte": "Passer une commande anticipée de la totalité des boîtiers.",
          "porteur": "Karim Haddad",
          "echeance": "31/01/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Bon de commande du 12/01/2026."
        },
        {
          "texte": "Qualifier un boîtier de substitution d'un second fabricant.",
          "porteur": "Sophie Nguyen",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Stocker les boîtiers livrés sur la plateforme de Lesquin.",
          "porteur": "Sophie Nguyen",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        }
      ],
      "notes": [
        {
          "date": "2026-04-14",
          "auteur": "Comité de programme (14/04)",
          "texte": "Commande anticipée confirmée par le fabricant : la probabilité passe à P2."
        },
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Boîtiers livrés : risque clos."
        }
      ],
      "liens": [
        {
          "libelle": "Suivi des approvisionnements de la flotte",
          "url": "https://intranet.valmeris.example/entrepots-connectes/flotte/approvisionnements"
        }
      ],
      "kri": [],
      "cout": {
        "min": 100000,
        "probable": 250000,
        "max": 400000
      },
      "decisions": [],
      "revuLe": "2026-06-30",
      "programOrigin": "native",
      "programOriginNote": "Identifié au lancement du projet flotte connectée."
    },
    {
      "uid": "ent-3-1",
      "id": "3.1",
      "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
      "scopeLevel": "program",
      "affectedComponentIds": [
        "ent-proj-wms",
        "ent-proj-stpriest"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Les interfaces de l'ERP porté par le programme Socle numérique ne sont pas prêtes pour la recette du WMS.",
      "objective": "Basculer Saint-Priest sur le nouveau WMS avant la mise en service de l'automatisation.",
      "raisedAt": "2025-10-15",
      "raisedBy": "Thomas Lefèvre",
      "proximityDate": "2026-12-15",
      "milestone": "Recette intégrée WMS-ERP",
      "impactAxes": {
        "cost": 4,
        "delay": 5,
        "quality": 2,
        "service": 3,
        "benefit": 4
      },
      "assessmentBefore": [
        4,
        4
      ],
      "assessmentCurrent": [
        3,
        4
      ],
      "assessmentAfter": [
        2,
        4
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "escalate",
      "velocite": 3,
      "statut": "statusInProgress",
      "responsable": "Olivier Marchetti",
      "causes": [
        "Priorités du Socle numérique centrées sur la finance et les achats",
        "Spécifications d'interface figées tardivement",
        "Équipe d'intégration ERP partagée entre plusieurs programmes"
      ],
      "consequences": [
        {
          "texte": "Maintien de l'ancien WMS et double interfaçage provisoire",
          "chiffrage": "≈ 1,2 M€"
        },
        {
          "texte": "Automatisation livrée sans son pilotage cible",
          "chiffrage": "3 à 6 mois de décalage des gains"
        }
      ],
      "mesures": [
        {
          "texte": "Signer une convention de service avec le programme Socle numérique.",
          "porteur": "Olivier Marchetti",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3,
          "verification": "Convention signée le 27/03/2026."
        },
        {
          "texte": "Tenir un comité d'arbitrage mensuel commun aux deux programmes.",
          "porteur": "Olivier Marchetti",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Tester le WMS avec des simulateurs d'interface sans attendre l'ERP.",
          "porteur": "Thomas Lefèvre",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Préparer une interface provisoire avec l'ERP actuel en solution de repli.",
          "porteur": "Thomas Lefèvre",
          "echeance": "30/11/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-04-14",
          "auteur": "Comité de programme (14/04)",
          "texte": "Convention de service signée : la probabilité passe de P4 à P3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Comité de programme (15/09)",
          "texte": "Seulement 56 % des interfaces livrées : escalade vers le portefeuille pour arbitrer la priorité face aux chantiers finance."
        }
      ],
      "liens": [
        {
          "libelle": "Convention de service Socle numérique – Entrepôts connectés",
          "url": "https://intranet.valmeris.example/entrepots-connectes/gouvernance/convention-socle-numerique"
        },
        {
          "libelle": "Planning des interfaces ERP",
          "url": "https://intranet.valmeris.example/entrepots-connectes/wms/planning-interfaces-erp"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-3-1",
          "nom": "Interfaces ERP-WMS livrées par le Socle numérique",
          "unite": "%",
          "sens": "baisse",
          "alerte": 70,
          "critique": 50,
          "releves": [
            {
              "date": "2026-03-31",
              "valeur": 20,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-04-30",
              "valeur": 30,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-05-31",
              "valeur": 38,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-06-30",
              "valeur": 45,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-07-31",
              "valeur": 50,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-08-31",
              "valeur": 53,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-09-20",
              "valeur": 56,
              "auteur": "Thomas Lefèvre"
            }
          ]
        }
      ],
      "cout": {
        "min": 400000,
        "probable": 1200000,
        "max": 2200000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-10-15",
      "programOrigin": "native",
      "programOriginNote": "Dépendance inter-programmes : l'ERP et la plateforme de données sont livrés par le programme Socle numérique."
    },
    {
      "uid": "ent-3-2",
      "id": "3.2",
      "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
      "scopeLevel": "component",
      "componentId": "ent-proj-wms",
      "affectedComponentIds": [
        "ent-proj-stpriest"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Les données reprises dans le nouveau WMS contiennent des dimensions, poids ou emplacements erronés.",
      "objective": "Démarrer le WMS avec des données fiables pour la préparation automatisée.",
      "raisedAt": "2025-11-05",
      "raisedBy": "Thomas Lefèvre",
      "proximityDate": "2027-01-15",
      "milestone": "Reprise à blanc n° 1 du WMS",
      "impactAxes": {
        "cost": 3,
        "delay": 3,
        "quality": 4,
        "service": 3,
        "benefit": 3
      },
      "assessmentBefore": [
        4,
        3
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        2
      ],
      "traitement": "reduce",
      "velocite": 3,
      "statut": "statusInProgress",
      "responsable": "Thomas Lefèvre",
      "causes": [
        "42 000 références dont une partie sans dimensions ni poids",
        "Emplacements gérés hors système sur certains sites",
        "Aucun propriétaire désigné des données articles"
      ],
      "consequences": [
        {
          "texte": "Colis refusés par les convoyeurs (dimensions fausses)",
          "chiffrage": "≈ 5 % des flux"
        },
        {
          "texte": "Reprises manuelles et heures supplémentaires après bascule",
          "chiffrage": "≈ 350 k€"
        }
      ],
      "mesures": [
        {
          "texte": "Écrire les règles de qualité et le dictionnaire des données articles.",
          "porteur": "Thomas Lefèvre",
          "echeance": "28/02/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Nettoyer les 42 000 références articles.",
          "porteur": "Thomas Lefèvre",
          "echeance": "31/08/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Mesurer dimensions et poids au cubage automatique.",
          "porteur": "Bastien Morel",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 1
        },
        {
          "texte": "Réaliser deux reprises à blanc avant la bascule.",
          "porteur": "Thomas Lefèvre",
          "echeance": "31/01/2027",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-04-14",
          "auteur": "Comité de programme (14/04)",
          "texte": "Règles de qualité appliquées : la probabilité passe de P4 à P3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Thomas Lefèvre",
          "texte": "Nettoyage en retard (78 % des références traitées) : les équipes de Saint-Priest sont mobilisées par la saison."
        }
      ],
      "liens": [
        {
          "libelle": "Dictionnaire des données articles",
          "url": "https://intranet.valmeris.example/entrepots-connectes/wms/dictionnaire-donnees"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-3-2",
          "nom": "Fiches articles non conformes",
          "unite": "%",
          "sens": "hausse",
          "alerte": 5,
          "critique": 10,
          "releves": [
            {
              "date": "2026-01-31",
              "valeur": 18,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-02-28",
              "valeur": 16,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-03-31",
              "valeur": 14,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-04-30",
              "valeur": 12,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-05-31",
              "valeur": 11,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-06-30",
              "valeur": 9,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-07-31",
              "valeur": 8,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-08-31",
              "valeur": 7,
              "auteur": "Thomas Lefèvre"
            },
            {
              "date": "2026-09-20",
              "valeur": 6,
              "auteur": "Thomas Lefèvre"
            }
          ]
        }
      ],
      "cout": {
        "min": 100000,
        "probable": 350000,
        "max": 800000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié lors de l'étude de cadrage du WMS."
    },
    {
      "uid": "ent-3-3",
      "id": "3.3",
      "title": "Cyberattaque sur les systèmes industriels des entrepôts",
      "scopeLevel": "program",
      "affectedComponentIds": [
        "ent-proj-stpriest",
        "ent-proj-flotte",
        "ent-proj-wms"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Un rançongiciel ou une intrusion paralyse les automates, les robots ou le WMS d'une plateforme.",
      "objective": "Garantir la continuité et l'intégrité des systèmes industriels connectés.",
      "raisedAt": "2025-11-20",
      "raisedBy": "Antoine Delmas",
      "proximityDate": "2026-11-30",
      "milestone": "Raccordement des automates au réseau du site",
      "impactAxes": {
        "cost": 4,
        "delay": 3,
        "quality": 3,
        "service": 5,
        "benefit": 3
      },
      "assessmentBefore": [
        3,
        5
      ],
      "assessmentCurrent": [
        3,
        4
      ],
      "assessmentAfter": [
        2,
        4
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "reduce",
      "velocite": 5,
      "statut": "statusInProgress",
      "responsable": "Antoine Delmas",
      "causes": [
        "Automates et robots raccordés au réseau de l'entreprise",
        "Télémaintenance des fournisseurs par accès distants",
        "Équipements industriels rarement mis à jour",
        "Hameçonnage ciblant les équipes de site"
      ],
      "consequences": [
        {
          "texte": "Arrêt de deux plateformes pendant cinq jours",
          "chiffrage": "≈ 1,2 M€"
        },
        {
          "texte": "Retards de livraison et perte de données de suivi pour la Relation client",
          "chiffrage": ""
        },
        {
          "texte": "Notification à l'autorité et atteinte à l'image",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Inventorier tous les équipements industriels connectés.",
          "porteur": "Antoine Delmas",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Inscrire des exigences de cybersécurité dans les contrats des intégrateurs.",
          "porteur": "Lucie Fabre",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Segmenter les réseaux bureautiques et industriels (IT/OT).",
          "porteur": "Antoine Delmas",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Tests d'intrusion du 22/06/2026 concluants."
        },
        {
          "texte": "Superviser les flux industriels par le centre de sécurité du groupe.",
          "porteur": "Antoine Delmas",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Organiser un exercice de crise rançongiciel avec Saint-Priest.",
          "porteur": "Bastien Morel",
          "echeance": "30/11/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Segmentation IT/OT livrée : l'impact passe de I5 à I4."
        },
        {
          "date": "2026-09-15",
          "auteur": "Antoine Delmas",
          "texte": "Supervision en cours de raccordement ; la probabilité ne baissera qu'avec la surveillance des accès distants."
        }
      ],
      "liens": [
        {
          "libelle": "Politique de sécurité des systèmes industriels",
          "url": "https://intranet.valmeris.example/entrepots-connectes/rssi/politique-ot"
        },
        {
          "libelle": "Rapport de tests d'intrusion",
          "url": "https://intranet.valmeris.example/entrepots-connectes/rssi/tests-intrusion-saint-priest"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-3-3",
          "nom": "Vulnérabilités critiques non corrigées sur les équipements industriels",
          "unite": "vulnérabilités",
          "sens": "hausse",
          "alerte": 5,
          "critique": 10,
          "releves": [
            {
              "date": "2026-03-31",
              "valeur": 23,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-04-30",
              "valeur": 19,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-05-31",
              "valeur": 16,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-06-30",
              "valeur": 14,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-07-31",
              "valeur": 11,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-08-31",
              "valeur": 9,
              "auteur": "Antoine Delmas"
            },
            {
              "date": "2026-09-20",
              "valeur": 7,
              "auteur": "Antoine Delmas"
            }
          ]
        }
      ],
      "cout": {
        "min": 400000,
        "probable": 1200000,
        "max": 3000000
      },
      "decisions": [
        {
          "id": "ent-dec-3-3",
          "date": "2026-09-15",
          "author": "Comité de programme",
          "type": "moreAction",
          "reason": "Pas de raccordement de nouveaux automates tant que la supervision du centre de sécurité n'est pas active.",
          "reviewDate": "2026-11-15",
          "scoreAtDecision": 12
        }
      ],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-11-15",
      "programOrigin": "cascade",
      "programOriginNote": "Décliné du risque cyber du portefeuille Transformation Valmeris, porté par le RSSI et le Socle numérique."
    },
    {
      "uid": "ent-3-4",
      "id": "3.4",
      "title": "Données de suivi des colis incomplètes pour la Relation client",
      "scopeLevel": "program",
      "affectedComponentIds": [
        "ent-proj-wms",
        "ent-proj-flotte"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Les événements de suivi des colis produits par les entrepôts arrivent en retard ou incomplets dans les outils de la Relation client omnicanale.",
      "objective": "Fournir à la Relation client un suivi des colis en temps réel et fiable.",
      "raisedAt": "2026-04-02",
      "raisedBy": "Sophie Nguyen",
      "proximityDate": "2027-01-31",
      "milestone": "Ouverture du suivi temps réel aux clients",
      "impactAxes": {
        "cost": 2,
        "delay": 2,
        "quality": 3,
        "service": 4,
        "benefit": 3
      },
      "assessmentBefore": [
        3,
        3
      ],
      "assessmentCurrent": [
        2,
        3
      ],
      "assessmentAfter": [
        2,
        2
      ],
      "assessmentTarget": [
        2,
        2
      ],
      "traitement": "reduce",
      "velocite": 2,
      "statut": "statusInProgress",
      "responsable": "Sophie Nguyen",
      "causes": [
        "Scans manquants aux quais d'expédition",
        "Flux transitant par la plateforme de données du Socle numérique encore en construction",
        "Formats d'événements différents entre les trois sites"
      ],
      "consequences": [
        {
          "texte": "Hausse des appels au Service client sur le « où est mon colis »",
          "chiffrage": "≈ 120 k€ par an"
        },
        {
          "texte": "Retard des bénéfices du programme Relation client",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Signer un contrat d'interface avec le programme Relation client.",
          "porteur": "Sophie Nguyen",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Publier les événements via la plateforme de données du Socle numérique.",
          "porteur": "Thomas Lefèvre",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Superviser la complétude des événements par site.",
          "porteur": "Sophie Nguyen",
          "echeance": "31/01/2027",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Contrat d'interface signé : la probabilité passe de P3 à P2."
        },
        {
          "date": "2026-09-15",
          "auteur": "Sophie Nguyen",
          "texte": "97 % des événements transmis en moins de 15 minutes sur le pilote de Lesquin."
        }
      ],
      "liens": [
        {
          "libelle": "Contrat d'interface suivi des colis",
          "url": "https://intranet.valmeris.example/entrepots-connectes/donnees/contrat-interface-suivi-colis"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-3-4",
          "nom": "Événements de suivi transmis en moins de 15 minutes",
          "unite": "%",
          "sens": "baisse",
          "alerte": 95,
          "critique": 90,
          "releves": [
            {
              "date": "2026-04-30",
              "valeur": 91,
              "auteur": "Sophie Nguyen"
            },
            {
              "date": "2026-05-31",
              "valeur": 93,
              "auteur": "Sophie Nguyen"
            },
            {
              "date": "2026-06-30",
              "valeur": 94,
              "auteur": "Sophie Nguyen"
            },
            {
              "date": "2026-07-31",
              "valeur": 96,
              "auteur": "Sophie Nguyen"
            },
            {
              "date": "2026-08-31",
              "valeur": 97,
              "auteur": "Sophie Nguyen"
            },
            {
              "date": "2026-09-20",
              "valeur": 97,
              "auteur": "Sophie Nguyen"
            }
          ]
        }
      ],
      "cout": {
        "min": 40000,
        "probable": 120000,
        "max": 190000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Demandé par le programme Relation client omnicanale, qui dépend de nos données de suivi."
    },
    {
      "uid": "ent-3-5",
      "id": "3.5",
      "title": "Mutualisation des capteurs de flotte avec la Relation client omnicanale",
      "scopeLevel": "component",
      "componentId": "ent-proj-flotte",
      "affectedComponentIds": [],
      "kind": "opportunity",
      "lifecycle": "active",
      "event": "Le programme Relation client cofinance la plateforme de capteurs pour réutiliser la géolocalisation des colis.",
      "objective": "Réduire le coût de la plateforme de capteurs en partageant son usage.",
      "raisedAt": "2026-03-18",
      "raisedBy": "Sophie Nguyen",
      "proximityDate": "2026-12-31",
      "milestone": "Convention de cofinancement",
      "impactAxes": {
        "cost": 2,
        "delay": 1,
        "quality": 1,
        "service": 2,
        "benefit": 3
      },
      "assessmentBefore": [
        2,
        4
      ],
      "assessmentCurrent": [
        2,
        4
      ],
      "assessmentAfter": [
        4,
        2
      ],
      "assessmentTarget": [
        4,
        2
      ],
      "traitement": "share",
      "velocite": 1,
      "statut": "statusInProgress",
      "responsable": "Sophie Nguyen",
      "causes": [
        "Besoin de géolocalisation des colis exprimé par le Service client",
        "Plateforme de capteurs dimensionnée au-delà du besoin des entrepôts"
      ],
      "consequences": [
        {
          "texte": "Cofinancement de la plateforme par le programme Relation client",
          "chiffrage": "≈ 150 k€"
        },
        {
          "texte": "Données de flotte réutilisées pour informer les clients",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Chiffrer le partage des coûts avec la Direction financière.",
          "porteur": "Claire Vasseur",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Signer une convention de cofinancement entre les deux programmes.",
          "porteur": "Olivier Marchetti",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Ouvrir un accès en lecture aux données de géolocalisation.",
          "porteur": "Sophie Nguyen",
          "echeance": "31/03/2027",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Claire Vasseur",
          "texte": "Partage : la probabilité monte (P2 à P4) car le cofinancement est plus sûr, mais notre part du gain baisse (I4 à I2)."
        },
        {
          "date": "2026-09-15",
          "auteur": "Olivier Marchetti",
          "texte": "Projet de convention transmis au directeur du programme Relation client."
        }
      ],
      "liens": [
        {
          "libelle": "Note de partage des coûts",
          "url": "https://intranet.valmeris.example/entrepots-connectes/finance/partage-couts-capteurs"
        }
      ],
      "kri": [],
      "cout": {
        "min": 60000,
        "probable": 150000,
        "max": 190000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Proposé lors d'un atelier commun avec le programme Relation client omnicanale."
    },
    {
      "uid": "ent-4-1",
      "id": "4.1",
      "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
      "scopeLevel": "component",
      "componentId": "ent-proj-energie",
      "affectedComponentIds": [],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Le prix de l'électricité pour 2027-2028 augmente au point d'effacer l'économie financière attendue.",
      "objective": "Tenir le budget d'exploitation énergétique des trois plateformes.",
      "raisedAt": "2025-11-25",
      "raisedBy": "Claire Vasseur",
      "proximityDate": "2026-12-31",
      "milestone": "Achat des volumes d'électricité 2028",
      "impactAxes": {
        "cost": 3,
        "delay": 0,
        "quality": 0,
        "service": 1,
        "benefit": 4
      },
      "assessmentBefore": [
        3,
        4
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "transfer",
      "velocite": 2,
      "statut": "statusInProgress",
      "responsable": "Claire Vasseur",
      "causes": [
        "Automatisation qui augmente la puissance appelée en pointe",
        "Volatilité des marchés de l'électricité",
        "Contrat actuel indexé sur le prix de marché"
      ],
      "consequences": [
        {
          "texte": "Surcoût énergétique annuel des trois sites",
          "chiffrage": "≈ 480 k€ par an"
        },
        {
          "texte": "Retour sur investissement du volet énergie dégradé",
          "chiffrage": "+1,5 an"
        }
      ],
      "mesures": [
        {
          "texte": "Poser des sous-compteurs par zone sur les trois sites.",
          "porteur": "Julien Roussel",
          "echeance": "31/05/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Acheter à terme 70 % des volumes 2027.",
          "porteur": "Claire Vasseur",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4,
          "verification": "Contrat signé le 18/06/2026."
        },
        {
          "texte": "Mettre en place l'effacement des recharges en heures de pointe.",
          "porteur": "Julien Roussel",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Comité de programme (30/06)",
          "texte": "Couverture 2027 achetée : l'impact passe de I4 à I3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Claire Vasseur",
          "texte": "Prix à terme en détente depuis juillet ; décision d'achat 2028 en décembre."
        }
      ],
      "liens": [
        {
          "libelle": "Stratégie d'achat d'électricité 2027-2028",
          "url": "https://intranet.valmeris.example/entrepots-connectes/finance/achat-electricite"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-4-1",
          "nom": "Prix de l'électricité à terme (année suivante)",
          "unite": "€/MWh",
          "sens": "hausse",
          "alerte": 95,
          "critique": 120,
          "releves": [
            {
              "date": "2026-01-31",
              "valeur": 78,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-02-28",
              "valeur": 82,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-03-31",
              "valeur": 85,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-04-30",
              "valeur": 91,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-05-31",
              "valeur": 97,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-06-30",
              "valeur": 102,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-07-31",
              "valeur": 99,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-08-31",
              "valeur": 94,
              "auteur": "Claire Vasseur"
            },
            {
              "date": "2026-09-20",
              "valeur": 92,
              "auteur": "Claire Vasseur"
            }
          ]
        }
      ],
      "cout": {
        "min": 150000,
        "probable": 480000,
        "max": 900000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié par la Direction financière lors du chiffrage du dossier d'investissement."
    },
    {
      "uid": "ent-4-2",
      "id": "4.2",
      "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
      "scopeLevel": "component",
      "componentId": "ent-proj-energie",
      "affectedComponentIds": [
        "ent-proj-stpriest",
        "ent-proj-flotte"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "La consommation des trois plateformes baisse de moins de 20 % en 2028 malgré les travaux.",
      "objective": "Réduire de 20 % la consommation d'énergie des entrepôts d'ici 2028.",
      "raisedAt": "2025-10-20",
      "raisedBy": "Julien Roussel",
      "proximityDate": "2028-06-30",
      "milestone": "Bilan énergétique 2027",
      "impactAxes": {
        "cost": 3,
        "delay": 1,
        "quality": 1,
        "service": 0,
        "benefit": 5
      },
      "assessmentBefore": [
        4,
        3
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        2
      ],
      "traitement": "reduce",
      "velocite": 1,
      "statut": "statusInProgress",
      "responsable": "Julien Roussel",
      "causes": [
        "Navettes et convoyeurs plus consommateurs que les chariots actuels",
        "Chauffage des bâtiments non piloté par zone",
        "Absence de mesure fiable de la consommation de référence"
      ],
      "consequences": [
        {
          "texte": "Économies d'énergie non obtenues",
          "chiffrage": "≈ 420 k€ par an"
        },
        {
          "texte": "Engagement environnemental du groupe non tenu",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Réaliser l'audit énergétique des trois plateformes.",
          "porteur": "Julien Roussel",
          "echeance": "31/01/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Remplacer l'éclairage par des LED avec détection de présence.",
          "porteur": "Julien Roussel",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Exiger la récupération d'énergie au freinage des navettes.",
          "porteur": "Samira Ouali",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Piloter le chauffage par zone selon l'occupation.",
          "porteur": "Julien Roussel",
          "echeance": "31/03/2027",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-02-10",
          "auteur": "Comité de programme (10/02)",
          "texte": "Audit énergétique rendu : la consommation de référence est mesurée, probabilité P3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Julien Roussel",
          "texte": "–6 % mesuré à fin août grâce à l'éclairage ; le gros du gain dépend des navettes et du chauffage."
        }
      ],
      "liens": [
        {
          "libelle": "Audit énergétique des plateformes",
          "url": "https://intranet.valmeris.example/entrepots-connectes/energie/audit-2026"
        },
        {
          "libelle": "Trajectoire –20 % 2028",
          "url": "https://intranet.valmeris.example/entrepots-connectes/energie/trajectoire-2028"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-4-2",
          "nom": "Consommation électrique par colis préparé",
          "unite": "Wh/colis",
          "sens": "hausse",
          "alerte": 165,
          "critique": 180,
          "releves": [
            {
              "date": "2026-01-31",
              "valeur": 182,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-02-28",
              "valeur": 179,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-03-31",
              "valeur": 176,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-04-30",
              "valeur": 172,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-05-31",
              "valeur": 170,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-06-30",
              "valeur": 168,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-07-31",
              "valeur": 166,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-08-31",
              "valeur": 163,
              "auteur": "Julien Roussel"
            },
            {
              "date": "2026-09-20",
              "valeur": 161,
              "auteur": "Julien Roussel"
            }
          ]
        }
      ],
      "cout": {
        "min": 150000,
        "probable": 420000,
        "max": 800000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié au cadrage : l'automatisation ajoute des consommations nouvelles."
    },
    {
      "uid": "ent-4-3",
      "id": "4.3",
      "title": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés",
      "scopeLevel": "component",
      "componentId": "ent-proj-energie",
      "affectedComponentIds": [],
      "kind": "opportunity",
      "lifecycle": "active",
      "event": "Les certificats d'économies d'énergie et l'autoconsommation solaire rapportent plus que prévu au dossier d'investissement.",
      "objective": "Financer une partie du volet sobriété par des recettes et aides externes.",
      "raisedAt": "2026-01-20",
      "raisedBy": "Julien Roussel",
      "proximityDate": "2027-03-31",
      "milestone": "Mise en service des ombrières de Cestas",
      "impactAxes": {
        "cost": 3,
        "delay": 0,
        "quality": 0,
        "service": 0,
        "benefit": 4
      },
      "assessmentBefore": [
        2,
        3
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        4,
        3
      ],
      "assessmentTarget": [
        4,
        3
      ],
      "traitement": "exploit",
      "velocite": 1,
      "statut": "statusInProgress",
      "responsable": "Julien Roussel",
      "causes": [
        "Bonification des certificats pour les entrepôts logistiques",
        "Parkings poids lourds de Cestas adaptés aux ombrières"
      ],
      "consequences": [
        {
          "texte": "Recettes de certificats et électricité autoproduite",
          "chiffrage": "≈ 450 k€ sur la durée du programme"
        },
        {
          "texte": "Contribution directe à l'objectif de –20 %",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Déposer le dossier de certificats d'économies d'énergie.",
          "porteur": "Julien Roussel",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3,
          "verification": "Dossier enregistré le 21/04/2026."
        },
        {
          "texte": "Lancer l'appel d'offres des ombrières de Cestas.",
          "porteur": "Karim Haddad",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Signer la convention d'autoconsommation collective.",
          "porteur": "Lucie Fabre",
          "echeance": "31/03/2027",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Julien Roussel",
          "texte": "Dossier de certificats accepté : la probabilité de l'opportunité passe de P2 à P3."
        },
        {
          "date": "2026-09-15",
          "auteur": "Olivier Marchetti",
          "texte": "Opportunité : une prévision plus élevée qu'à l'origine est l'effet recherché ; l'alerte « après plus grave qu'avant » ne s'applique pas ici."
        }
      ],
      "liens": [
        {
          "libelle": "Dossier certificats d'économies d'énergie",
          "url": "https://intranet.valmeris.example/entrepots-connectes/energie/dossier-cee"
        }
      ],
      "kri": [],
      "cout": {
        "min": 200000,
        "probable": 450000,
        "max": 700000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifiée à la lecture de l'audit énergétique."
    },
    {
      "uid": "ent-5-1",
      "id": "5.1",
      "title": "Mouvement social lors de la réorganisation des équipes logistiques",
      "scopeLevel": "program",
      "affectedComponentIds": [
        "ent-work-equipes",
        "ent-proj-stpriest",
        "ent-proj-wms"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Une grève ou des débrayages bloquent une plateforme pendant la réorganisation liée à l'automatisation.",
      "objective": "Conduire la réorganisation dans le dialogue social, sans arrêt d'activité.",
      "raisedAt": "2025-10-20",
      "raisedBy": "Élodie Garnier",
      "proximityDate": "2026-11-15",
      "milestone": "Information-consultation du CSE sur la phase 2",
      "impactAxes": {
        "cost": 3,
        "delay": 3,
        "quality": 1,
        "service": 4,
        "benefit": 3
      },
      "assessmentBefore": [
        3,
        4
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "reduce",
      "velocite": 4,
      "statut": "statusInProgress",
      "responsable": "Élodie Garnier",
      "causes": [
        "Crainte de suppressions de postes liées à l'automatisation",
        "Négociation annuelle obligatoire tendue",
        "Changement des horaires et des métiers de préparation",
        "Rumeurs faute d'information régulière"
      ],
      "consequences": [
        {
          "texte": "Grève de cinq jours à Saint-Priest en période chargée",
          "chiffrage": "≈ 450 k€"
        },
        {
          "texte": "Report des mises en service et perte de confiance",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Signer un accord de méthode avec les partenaires sociaux.",
          "porteur": "Élodie Garnier",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3,
          "verification": "Accord signé le 26/03/2026 par trois organisations sur quatre."
        },
        {
          "texte": "Mener l'information-consultation du CSE sur la phase 1.",
          "porteur": "Élodie Garnier",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Réunir une commission paritaire de suivi chaque trimestre.",
          "porteur": "Élodie Garnier",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Préparer un plan de continuité avec intérim et débord vers Cestas.",
          "porteur": "Bastien Morel",
          "echeance": "31/10/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-04-14",
          "auteur": "Comité de programme (14/04)",
          "texte": "Accord de méthode signé : l'impact passe de I4 à I3."
        },
        {
          "date": "2026-05-05",
          "auteur": "Régine Faure",
          "texte": "Escalade acceptée : le programme reprend le risque à son niveau."
        },
        {
          "date": "2026-09-15",
          "auteur": "Élodie Garnier",
          "texte": "Climat stable ; absentéisme en baisse depuis l'été."
        }
      ],
      "liens": [
        {
          "libelle": "Accord de méthode sur la transformation des entrepôts",
          "url": "https://intranet.valmeris.example/entrepots-connectes/rh/accord-methode"
        }
      ],
      "kri": [
        {
          "id": "kri-ent-5-1",
          "nom": "Taux d'absentéisme des préparateurs",
          "unite": "%",
          "sens": "hausse",
          "alerte": 7,
          "critique": 9,
          "releves": [
            {
              "date": "2026-02-28",
              "valeur": 6.1,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-03-31",
              "valeur": 6.4,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-04-30",
              "valeur": 7.2,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-05-31",
              "valeur": 7.8,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-06-30",
              "valeur": 7.1,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-07-31",
              "valeur": 6.8,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-08-31",
              "valeur": 6.5,
              "auteur": "Élodie Garnier"
            },
            {
              "date": "2026-09-20",
              "valeur": 6.2,
              "auteur": "Élodie Garnier"
            }
          ]
        }
      ],
      "cout": {
        "min": 150000,
        "probable": 450000,
        "max": 1000000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "escalation",
      "programOriginNote": "Escaladé par le chantier Accompagnement des équipes : le risque touche les trois plateformes et relève du programme."
    },
    {
      "uid": "ent-5-2",
      "id": "5.2",
      "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
      "scopeLevel": "component",
      "componentId": "ent-work-equipes",
      "affectedComponentIds": [
        "ent-proj-wms"
      ],
      "kind": "threat",
      "lifecycle": "active",
      "event": "Les préparateurs contournent le nouveau WMS ou ses terminaux, ce qui dégrade la productivité après la bascule.",
      "objective": "Atteindre la productivité cible dans les trois mois suivant chaque bascule.",
      "raisedAt": "2025-11-05",
      "raisedBy": "Élodie Garnier",
      "proximityDate": "2027-03-15",
      "milestone": "Bascule du WMS à Saint-Priest",
      "impactAxes": {
        "cost": 3,
        "delay": 2,
        "quality": 3,
        "service": 3,
        "benefit": 4
      },
      "assessmentBefore": [
        3,
        3
      ],
      "assessmentCurrent": [
        3,
        3
      ],
      "assessmentAfter": [
        2,
        3
      ],
      "assessmentTarget": [
        2,
        2
      ],
      "traitement": "reduce",
      "velocite": 2,
      "statut": "statusInProgress",
      "responsable": "Pauline Chevalier",
      "causes": [
        "Écrans et parcours du WMS très différents de l'outil actuel",
        "Forte proportion d'intérimaires peu formés",
        "Formation prévue trop tôt avant la bascule"
      ],
      "consequences": [
        {
          "texte": "Productivité inférieure de 15 % pendant trois mois",
          "chiffrage": "≈ 300 k€"
        },
        {
          "texte": "Erreurs de préparation et retours clients",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Constituer un réseau de 40 ambassadeurs sur les trois sites.",
          "porteur": "Pauline Chevalier",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Former en situation sur un simulateur du WMS.",
          "porteur": "Pauline Chevalier",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 1
        },
        {
          "texte": "Prévoir une assistance renforcée quatre semaines après chaque bascule.",
          "porteur": "Thomas Lefèvre",
          "echeance": "28/02/2027",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "2026-06-30",
          "auteur": "Pauline Chevalier",
          "texte": "Réseau d'ambassadeurs constitué ; effet attendu une fois le simulateur disponible."
        },
        {
          "date": "2026-09-15",
          "auteur": "Comité de programme (15/09)",
          "texte": "Bascule décalée avec les convoyeurs : le calendrier de formation est recalé."
        }
      ],
      "liens": [
        {
          "libelle": "Plan de formation logistique",
          "url": "https://intranet.valmeris.example/entrepots-connectes/rh/plan-formation-wms"
        }
      ],
      "kri": [],
      "cout": {
        "min": 100000,
        "probable": 300000,
        "max": 700000
      },
      "decisions": [],
      "revuLe": "2026-09-15",
      "prochaineRevue": "2026-12-15",
      "programOrigin": "native",
      "programOriginNote": "Identifié par la Direction des ressources humaines au lancement."
    }
  ],
  "riskGroups": [
    {
      "id": 1,
      "name": "Sécurité et continuité des sites",
      "description": "Sécurité des personnes en zone automatisée, incendie et continuité d'exploitation pendant les travaux et le pic de fin d'année.",
      "assessmentNote": "Coactivité robots-préparateurs et batteries lithium créent des dangers nouveaux ; le pic de fin d'année ne tolère aucune perte de capacité.",
      "remediationNote": "Analyse de risques machine, formation habilitante, locaux de charge coupe-feu, gel des travaux et débord vers Cestas pendant le pic.",
      "color": "#C0392B",
      "riskIds": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": 2,
      "name": "Automatisation et fournisseurs",
      "description": "Intégrateur, fabricants de convoyeurs et de capteurs : délais, solidité financière et dépendance contractuelle.",
      "assessmentNote": "Le calendrier dépend de quelques fournisseurs spécialisés ; un retard d'équipement se propage directement à la mise en service des sites.",
      "remediationNote": "Cautions et pénalités, audits d'usine, plans de rattrapage par zones et qualification d'un second intégrateur pour Cestas et Lesquin.",
      "color": "#E67E22",
      "riskIds": [
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "id": 3,
      "name": "Systèmes et données",
      "description": "Nouveau WMS, interfaces avec l'ERP du Socle numérique, reprise des données, cybersécurité industrielle et données de suivi des colis.",
      "assessmentNote": "Le WMS dépend de l'ERP et de la plateforme de données du Socle numérique ; la Relation client dépend de nos événements de suivi.",
      "remediationNote": "Convention de service inter-programmes, simulateurs d'interface, qualité des données, segmentation IT/OT et supervision des flux.",
      "color": "#8E44AD",
      "riskIds": [
        "3.1",
        "3.2",
        "3.3",
        "3.4",
        "3.5"
      ]
    },
    {
      "id": 4,
      "name": "Énergie et sobriété",
      "description": "Objectif de –20 % de consommation d'énergie en 2028, prix de l'électricité et aides à la sobriété.",
      "assessmentNote": "L'automatisation ajoute des consommations ; le gain net et son coût dépendent des choix techniques et du marché de l'électricité.",
      "remediationNote": "Audit énergétique, sous-comptage, couverture des achats d'électricité, effacement en pointe et valorisation des certificats d'économies d'énergie.",
      "color": "#27AE60",
      "riskIds": [
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "id": 5,
      "name": "Équipes et dialogue social",
      "description": "Réorganisation des équipes logistiques, dialogue avec les partenaires sociaux et adoption des nouveaux outils.",
      "assessmentNote": "Les métiers de préparation changent profondément ; l'adhésion des équipes conditionne à la fois la paix sociale et les gains de productivité.",
      "remediationNote": "Accord de méthode, information-consultation du CSE, réseau d'ambassadeurs, formation en situation et assistance renforcée à la bascule.",
      "color": "#2E86C1",
      "riskIds": [
        "5.1",
        "5.2"
      ]
    }
  ],
  "reviews": [
    {
      "id": "ent-rev-2025-12",
      "date": "2025-12-02",
      "label": "Revue de lancement",
      "auteur": "Comité de programme",
      "note": "Premier registre du programme : douze risques identifiés, trois au-dessus de l'appétence (interfaces ERP, reprise des données, pic de fin d'année).",
      "risks": [
        {
          "uid": "ent-1-1",
          "id": "1.1",
          "title": "Accident grave lors de la coactivité entre robots et préparateurs",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Cotation initiale : essais prévus en présence des équipes."
        },
        {
          "uid": "ent-1-2",
          "id": "1.2",
          "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            4,
            4
          ],
          "after": [
            4,
            4
          ],
          "motif": "Travaux prévus pendant le pic : exposition maximale."
        },
        {
          "uid": "ent-2-1",
          "id": "2.1",
          "title": "Défaillance de l'intégrateur de l'automatisation",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Cotation initiale à l'attribution du marché."
        },
        {
          "uid": "ent-2-2",
          "id": "2.2",
          "title": "Retard de livraison des convoyeurs et des trieurs",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Cotation initiale : fabricant unique."
        },
        {
          "uid": "ent-2-3",
          "id": "2.3",
          "title": "Pénurie de composants pour les capteurs embarqués",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Cotation initiale : délais de puces très longs."
        },
        {
          "uid": "ent-3-1",
          "id": "3.1",
          "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
          "groupe": "Systèmes et données",
          "before": [
            4,
            4
          ],
          "after": [
            4,
            4
          ],
          "motif": "Cotation initiale : aucune date d'interface engagée."
        },
        {
          "uid": "ent-3-2",
          "id": "3.2",
          "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
          "groupe": "Systèmes et données",
          "before": [
            4,
            3
          ],
          "after": [
            4,
            3
          ],
          "motif": "Cotation initiale : qualité des données inconnue."
        },
        {
          "uid": "ent-3-3",
          "id": "3.3",
          "title": "Cyberattaque sur les systèmes industriels des entrepôts",
          "groupe": "Systèmes et données",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Décliné du risque cyber du portefeuille."
        },
        {
          "uid": "ent-4-1",
          "id": "4.1",
          "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
          "groupe": "Énergie et sobriété",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Cotation initiale : contrat indexé sur le marché."
        },
        {
          "uid": "ent-4-2",
          "id": "4.2",
          "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
          "groupe": "Énergie et sobriété",
          "before": [
            4,
            3
          ],
          "after": [
            4,
            3
          ],
          "motif": "Cotation initiale : consommation de référence inconnue."
        },
        {
          "uid": "ent-5-1",
          "id": "5.1",
          "title": "Mouvement social lors de la réorganisation des équipes logistiques",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Cotation initiale : annonce du programme aux équipes."
        },
        {
          "uid": "ent-5-2",
          "id": "5.2",
          "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Cotation initiale."
        }
      ]
    },
    {
      "id": "ent-rev-2026-02",
      "date": "2026-02-10",
      "label": "Revue d'hiver",
      "auteur": "Comité de programme",
      "note": "Gel des travaux pendant le pic décidé, audit énergétique rendu ; une opportunité CEE ajoutée. Tensions sociales à suivre avant la négociation annuelle.",
      "risks": [
        {
          "uid": "ent-1-1",
          "id": "1.1",
          "title": "Accident grave lors de la coactivité entre robots et préparateurs",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Analyse de risques machine en cours."
        },
        {
          "uid": "ent-1-2",
          "id": "1.2",
          "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Gel des travaux pendant le pic décidé."
        },
        {
          "uid": "ent-2-1",
          "id": "2.1",
          "title": "Défaillance de l'intégrateur de l'automatisation",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Garantie bancaire en négociation."
        },
        {
          "uid": "ent-2-2",
          "id": "2.2",
          "title": "Retard de livraison des convoyeurs et des trieurs",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            2,
            4
          ],
          "motif": "Jalons et pénalités contractualisés."
        },
        {
          "uid": "ent-2-3",
          "id": "2.3",
          "title": "Pénurie de composants pour les capteurs embarqués",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Commande anticipée passée, confirmation attendue."
        },
        {
          "uid": "ent-3-1",
          "id": "3.1",
          "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
          "groupe": "Systèmes et données",
          "before": [
            4,
            4
          ],
          "after": [
            4,
            4
          ],
          "motif": "Spécifications d'interface toujours ouvertes."
        },
        {
          "uid": "ent-3-2",
          "id": "3.2",
          "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
          "groupe": "Systèmes et données",
          "before": [
            4,
            3
          ],
          "after": [
            4,
            3
          ],
          "motif": "Diagnostic : 18 % des fiches non conformes."
        },
        {
          "uid": "ent-3-3",
          "id": "3.3",
          "title": "Cyberattaque sur les systèmes industriels des entrepôts",
          "groupe": "Systèmes et données",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Inventaire des équipements en cours."
        },
        {
          "uid": "ent-4-1",
          "id": "4.1",
          "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
          "groupe": "Énergie et sobriété",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Sous-comptage en cours de pose."
        },
        {
          "uid": "ent-4-2",
          "id": "4.2",
          "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
          "groupe": "Énergie et sobriété",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Audit énergétique rendu."
        },
        {
          "uid": "ent-4-3",
          "id": "4.3",
          "title": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés",
          "groupe": "Énergie et sobriété",
          "before": [
            2,
            3
          ],
          "after": [
            2,
            3
          ],
          "motif": "Nouvelle opportunité issue de l'audit énergétique."
        },
        {
          "uid": "ent-5-1",
          "id": "5.1",
          "title": "Mouvement social lors de la réorganisation des équipes logistiques",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Négociation annuelle tendue."
        },
        {
          "uid": "ent-5-2",
          "id": "5.2",
          "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : plan de formation en préparation."
        }
      ]
    },
    {
      "id": "ent-rev-2026-04",
      "date": "2026-04-14",
      "label": "Revue de fin de cadrage",
      "auteur": "Comité de programme",
      "note": "Fin de la tranche de cadrage : convention de service signée avec le Socle numérique, caution bancaire de l'intégrateur obtenue ; trois nouveaux risques enregistrés.",
      "risks": [
        {
          "uid": "ent-1-1",
          "id": "1.1",
          "title": "Accident grave lors de la coactivité entre robots et préparateurs",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Plan de prévention signé, pas encore appliqué sur le terrain."
        },
        {
          "uid": "ent-1-2",
          "id": "1.2",
          "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable : débord vers Cestas à contractualiser."
        },
        {
          "uid": "ent-1-3",
          "id": "1.3",
          "title": "Départ de feu lors de la recharge des batteries lithium de la flotte",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            2,
            5
          ],
          "after": [
            2,
            5
          ],
          "motif": "Nouveau risque issu de la visite de l'assureur."
        },
        {
          "uid": "ent-2-1",
          "id": "2.1",
          "title": "Défaillance de l'intégrateur de l'automatisation",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Garantie et clauses obtenues."
        },
        {
          "uid": "ent-2-2",
          "id": "2.2",
          "title": "Retard de livraison des convoyeurs et des trieurs",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            2,
            4
          ],
          "motif": "Stable : fabrication conforme au planning."
        },
        {
          "uid": "ent-2-3",
          "id": "2.3",
          "title": "Pénurie de composants pour les capteurs embarqués",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            3
          ],
          "motif": "Commande confirmée, boîtier de substitution qualifié."
        },
        {
          "uid": "ent-3-1",
          "id": "3.1",
          "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
          "groupe": "Systèmes et données",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Convention de service signée avec le Socle numérique."
        },
        {
          "uid": "ent-3-2",
          "id": "3.2",
          "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
          "groupe": "Systèmes et données",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Règles de qualité appliquées."
        },
        {
          "uid": "ent-3-3",
          "id": "3.3",
          "title": "Cyberattaque sur les systèmes industriels des entrepôts",
          "groupe": "Systèmes et données",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            5
          ],
          "motif": "Inventaire terminé, segmentation en travaux."
        },
        {
          "uid": "ent-3-4",
          "id": "3.4",
          "title": "Données de suivi des colis incomplètes pour la Relation client",
          "groupe": "Systèmes et données",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Nouveau risque demandé par la Relation client."
        },
        {
          "uid": "ent-3-5",
          "id": "3.5",
          "title": "Mutualisation des capteurs de flotte avec la Relation client omnicanale",
          "groupe": "Systèmes et données",
          "before": [
            2,
            4
          ],
          "after": [
            2,
            4
          ],
          "motif": "Nouvelle opportunité issue d'un atelier commun."
        },
        {
          "uid": "ent-4-1",
          "id": "4.1",
          "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
          "groupe": "Énergie et sobriété",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable : prix à terme en hausse."
        },
        {
          "uid": "ent-4-2",
          "id": "4.2",
          "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
          "groupe": "Énergie et sobriété",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : travaux LED en cours."
        },
        {
          "uid": "ent-4-3",
          "id": "4.3",
          "title": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés",
          "groupe": "Énergie et sobriété",
          "before": [
            2,
            3
          ],
          "after": [
            2,
            3
          ],
          "motif": "Dossier en préparation."
        },
        {
          "uid": "ent-5-1",
          "id": "5.1",
          "title": "Mouvement social lors de la réorganisation des équipes logistiques",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Accord de méthode signé."
        },
        {
          "uid": "ent-5-2",
          "id": "5.2",
          "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable."
        }
      ]
    },
    {
      "id": "ent-rev-2026-06",
      "date": "2026-06-30",
      "label": "Revue de mi-année",
      "auteur": "Comité de programme",
      "note": "Segmentation IT/OT livrée, couverture électrique 2027 achetée, risque composants clos. Alerte sur les convoyeurs : le fournisseur signale trois semaines de retard.",
      "risks": [
        {
          "uid": "ent-1-1",
          "id": "1.1",
          "title": "Accident grave lors de la coactivité entre robots et préparateurs",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            3,
            5
          ],
          "after": [
            2,
            5
          ],
          "motif": "Plan de prévention appliqué, presque-accidents en baisse."
        },
        {
          "uid": "ent-1-2",
          "id": "1.2",
          "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable : planning de gel validé."
        },
        {
          "uid": "ent-1-3",
          "id": "1.3",
          "title": "Départ de feu lors de la recharge des batteries lithium de la flotte",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            2,
            5
          ],
          "after": [
            2,
            4
          ],
          "motif": "Local de charge coupe-feu livré."
        },
        {
          "uid": "ent-2-1",
          "id": "2.1",
          "title": "Défaillance de l'intégrateur de l'automatisation",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Accepté formellement en comité."
        },
        {
          "uid": "ent-2-2",
          "id": "2.2",
          "title": "Retard de livraison des convoyeurs et des trieurs",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Alerte : 3 semaines de retard chez le sous-traitant de motorisations."
        },
        {
          "uid": "ent-2-3",
          "id": "2.3",
          "title": "Pénurie de composants pour les capteurs embarqués",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            3
          ],
          "after": [
            1,
            3
          ],
          "motif": "Boîtiers livrés : risque clos en séance."
        },
        {
          "uid": "ent-3-1",
          "id": "3.1",
          "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
          "groupe": "Systèmes et données",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable : 45 % des interfaces livrées."
        },
        {
          "uid": "ent-3-2",
          "id": "3.2",
          "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
          "groupe": "Systèmes et données",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : nettoyage en cours."
        },
        {
          "uid": "ent-3-3",
          "id": "3.3",
          "title": "Cyberattaque sur les systèmes industriels des entrepôts",
          "groupe": "Systèmes et données",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            4
          ],
          "motif": "Segmentation IT/OT livrée."
        },
        {
          "uid": "ent-3-4",
          "id": "3.4",
          "title": "Données de suivi des colis incomplètes pour la Relation client",
          "groupe": "Systèmes et données",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            3
          ],
          "motif": "Contrat d'interface signé."
        },
        {
          "uid": "ent-3-5",
          "id": "3.5",
          "title": "Mutualisation des capteurs de flotte avec la Relation client omnicanale",
          "groupe": "Systèmes et données",
          "before": [
            2,
            4
          ],
          "after": [
            2,
            4
          ],
          "motif": "Partage des coûts chiffré."
        },
        {
          "uid": "ent-4-1",
          "id": "4.1",
          "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
          "groupe": "Énergie et sobriété",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Couverture de 70 % des volumes 2027 achetée."
        },
        {
          "uid": "ent-4-2",
          "id": "4.2",
          "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
          "groupe": "Énergie et sobriété",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : LED terminées."
        },
        {
          "uid": "ent-4-3",
          "id": "4.3",
          "title": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés",
          "groupe": "Énergie et sobriété",
          "before": [
            2,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Dossier de certificats accepté."
        },
        {
          "uid": "ent-5-1",
          "id": "5.1",
          "title": "Mouvement social lors de la réorganisation des équipes logistiques",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Repris au niveau du programme après escalade."
        },
        {
          "uid": "ent-5-2",
          "id": "5.2",
          "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : ambassadeurs nommés."
        }
      ]
    },
    {
      "id": "ent-rev-2026-09",
      "date": "2026-09-15",
      "label": "Revue de rentrée",
      "auteur": "Comité de programme",
      "note": "Remontée majeure : le retard des convoyeurs (10 semaines) est survenu et décale Saint-Priest à mai 2027. Escalade vers le portefeuille préparée pour les interfaces ERP.",
      "risks": [
        {
          "uid": "ent-1-1",
          "id": "1.1",
          "title": "Accident grave lors de la coactivité entre robots et préparateurs",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            3,
            5
          ],
          "after": [
            2,
            5
          ],
          "motif": "Stable : formation habilitante en retard, au-dessus de la tolérance."
        },
        {
          "uid": "ent-1-2",
          "id": "1.2",
          "title": "Saturation des plateformes au pic de fin d'année pendant les travaux",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable mais sous tension : convoyeurs en retard, occupation à 91 %."
        },
        {
          "uid": "ent-1-3",
          "id": "1.3",
          "title": "Départ de feu lors de la recharge des batteries lithium de la flotte",
          "groupe": "Sécurité et continuité des sites",
          "before": [
            2,
            5
          ],
          "after": [
            2,
            4
          ],
          "motif": "Stable : détection thermique en cours d'installation."
        },
        {
          "uid": "ent-2-1",
          "id": "2.1",
          "title": "Défaillance de l'intégrateur de l'automatisation",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : effectifs revenus à la normale."
        },
        {
          "uid": "ent-2-2",
          "id": "2.2",
          "title": "Retard de livraison des convoyeurs et des trieurs",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            4
          ],
          "after": [
            5,
            4
          ],
          "motif": "Survenu le 20/07 : 10 semaines de retard. Remontée expliquée, plan de rattrapage lancé."
        },
        {
          "uid": "ent-2-3",
          "id": "2.3",
          "title": "Pénurie de composants pour les capteurs embarqués",
          "groupe": "Automatisation et fournisseurs",
          "before": [
            3,
            3
          ],
          "after": [
            1,
            3
          ],
          "motif": "Clos le 30/06/2026, conservé pour mémoire."
        },
        {
          "uid": "ent-3-1",
          "id": "3.1",
          "title": "Retard des interfaces du nouvel ERP bloquant la bascule du WMS",
          "groupe": "Systèmes et données",
          "before": [
            4,
            4
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable mais au-dessus de l'appétence : escalade au portefeuille."
        },
        {
          "uid": "ent-3-2",
          "id": "3.2",
          "title": "Reprise des données d'articles et d'emplacements de mauvaise qualité",
          "groupe": "Systèmes et données",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : nettoyage en retard."
        },
        {
          "uid": "ent-3-3",
          "id": "3.3",
          "title": "Cyberattaque sur les systèmes industriels des entrepôts",
          "groupe": "Systèmes et données",
          "before": [
            3,
            5
          ],
          "after": [
            3,
            4
          ],
          "motif": "Stable : supervision en cours de raccordement."
        },
        {
          "uid": "ent-3-4",
          "id": "3.4",
          "title": "Données de suivi des colis incomplètes pour la Relation client",
          "groupe": "Systèmes et données",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            3
          ],
          "motif": "Stable : 97 % des événements à l'heure sur le pilote."
        },
        {
          "uid": "ent-3-5",
          "id": "3.5",
          "title": "Mutualisation des capteurs de flotte avec la Relation client omnicanale",
          "groupe": "Systèmes et données",
          "before": [
            2,
            4
          ],
          "after": [
            2,
            4
          ],
          "motif": "Stable : convention en discussion."
        },
        {
          "uid": "ent-4-1",
          "id": "4.1",
          "title": "Hausse du prix de l'électricité annulant les gains de sobriété",
          "groupe": "Énergie et sobriété",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : prix en détente."
        },
        {
          "uid": "ent-4-2",
          "id": "4.2",
          "title": "Objectif de –20 % de consommation d'énergie non atteint en 2028",
          "groupe": "Énergie et sobriété",
          "before": [
            4,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : –6 % mesurés."
        },
        {
          "uid": "ent-4-3",
          "id": "4.3",
          "title": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés",
          "groupe": "Énergie et sobriété",
          "before": [
            2,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : appel d'offres ombrières en cours."
        },
        {
          "uid": "ent-5-1",
          "id": "5.1",
          "title": "Mouvement social lors de la réorganisation des équipes logistiques",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            4
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : climat social apaisé."
        },
        {
          "uid": "ent-5-2",
          "id": "5.2",
          "title": "Adoption insuffisante du WMS et des terminaux par les préparateurs",
          "groupe": "Équipes et dialogue social",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            3
          ],
          "motif": "Stable : calendrier de formation recalé."
        }
      ]
    }
  ],
  "journal": [
    {
      "id": "ent-j01",
      "date": "2025-12-02T16:10:00Z",
      "auteur": "Olivier Marchetti",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de lancement"
    },
    {
      "id": "ent-j02",
      "date": "2026-01-20T10:30:00Z",
      "auteur": "Julien Roussel",
      "uid": "ent-4-3",
      "risque": "4.3",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Certificats d'économies d'énergie et ombrières photovoltaïques mieux valorisés"
    },
    {
      "id": "ent-j03",
      "date": "2026-01-30T15:00:00Z",
      "auteur": "Mathilde Perrin",
      "uid": "ent-1-1",
      "risque": "1.1",
      "champ": "mesure.etat",
      "detail": "Réaliser l'analyse de risques machine et le plan de prévention de la coactivité.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "ent-j04",
      "date": "2026-02-10T16:45:00Z",
      "auteur": "Olivier Marchetti",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue d'hiver"
    },
    {
      "id": "ent-j05",
      "date": "2026-02-24T09:20:00Z",
      "auteur": "Mathilde Perrin",
      "uid": "ent-1-3",
      "risque": "1.3",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Départ de feu lors de la recharge des batteries lithium de la flotte"
    },
    {
      "id": "ent-j06",
      "date": "2026-03-18T14:05:00Z",
      "auteur": "Sophie Nguyen",
      "uid": "ent-3-5",
      "risque": "3.5",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Mutualisation des capteurs de flotte avec la Relation client omnicanale"
    },
    {
      "id": "ent-j07",
      "date": "2026-04-02T11:40:00Z",
      "auteur": "Sophie Nguyen",
      "uid": "ent-3-4",
      "risque": "3.4",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Données de suivi des colis incomplètes pour la Relation client"
    },
    {
      "id": "ent-j08",
      "date": "2026-04-14T17:00:00Z",
      "auteur": "Olivier Marchetti",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de fin de cadrage"
    },
    {
      "id": "ent-j09",
      "date": "2026-05-05T08:50:00Z",
      "auteur": "Régine Faure",
      "uid": "ent-5-1",
      "risque": "5.1",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Escalade acceptée : le programme reprend le risque à son niveau."
    },
    {
      "id": "ent-j10",
      "date": "2026-06-26T13:15:00Z",
      "auteur": "Antoine Delmas",
      "uid": "ent-3-3",
      "risque": "3.3",
      "champ": "mesure.etat",
      "detail": "Segmenter les réseaux bureautiques et industriels (IT/OT).",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "ent-j11",
      "date": "2026-06-30T15:30:00Z",
      "auteur": "Karim Haddad",
      "uid": "ent-2-1",
      "risque": "2.1",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Accepter · Exposition résiduelle acceptée grâce à la garantie bancaire, sous réserve du suivi mensuel."
    },
    {
      "id": "ent-j12",
      "date": "2026-06-30T15:42:00Z",
      "auteur": "Sophie Nguyen",
      "uid": "ent-2-3",
      "risque": "2.3",
      "champ": "statut",
      "detail": "",
      "avant": "statusInProgress",
      "apres": "statusTreated"
    },
    {
      "id": "ent-j13",
      "date": "2026-06-30T16:30:00Z",
      "auteur": "Olivier Marchetti",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de mi-année"
    },
    {
      "id": "ent-j14",
      "date": "2026-07-20T18:05:00Z",
      "auteur": "Samira Ouali",
      "uid": "ent-2-2",
      "risque": "2.2",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Risque survenu : 10 semaines de retard annoncées. Cotation actuelle portée à P5 × I4, au-dessus de l'inhérent (dégradation constatée)."
    },
    {
      "id": "ent-j15",
      "date": "2026-07-22T10:10:00Z",
      "auteur": "Samira Ouali",
      "uid": "ent-2-2",
      "risque": "2.2",
      "champ": "assessmentAfter",
      "detail": "",
      "avant": "2,3",
      "apres": "3,3"
    },
    {
      "id": "ent-j16",
      "date": "2026-07-23T09:00:00Z",
      "auteur": "Samira Ouali",
      "uid": "ent-2-2",
      "risque": "2.2",
      "champ": "mesure.etat",
      "detail": "Mettre en service Saint-Priest zone par zone pour limiter le décalage.",
      "avant": "todo",
      "apres": "doing"
    },
    {
      "id": "ent-j17",
      "date": "2026-08-31T17:20:00Z",
      "auteur": "Karim Haddad",
      "uid": "ent-2-2",
      "risque": "2.2",
      "champ": "kri.releve",
      "detail": "Retard annoncé par le fabricant de convoyeurs",
      "avant": "",
      "apres": "10 semaines"
    },
    {
      "id": "ent-j18",
      "date": "2026-09-15T16:55:00Z",
      "auteur": "Olivier Marchetti",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de rentrée"
    },
    {
      "id": "ent-j19",
      "date": "2026-09-15T17:10:00Z",
      "auteur": "Antoine Delmas",
      "uid": "ent-3-3",
      "risque": "3.3",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Action supplémentaire · Pas de raccordement de nouveaux automates tant que la supervision du centre de sécurité n'est pas active."
    },
    {
      "id": "ent-j20",
      "date": "2026-09-20T08:30:00Z",
      "auteur": "Thomas Lefèvre",
      "uid": "ent-3-1",
      "risque": "3.1",
      "champ": "kri.releve",
      "detail": "Interfaces ERP-WMS livrées par le Socle numérique",
      "avant": "",
      "apres": "56 %"
    },
    {
      "id": "ent-j21",
      "date": "2026-09-22T11:15:00Z",
      "auteur": "Pauline Chevalier",
      "uid": "ent-1-1",
      "risque": "1.1",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Formation en retard : 112 personnes habilitées sur 180, faute de créneaux pendant la saison haute."
    }
  ]
};
