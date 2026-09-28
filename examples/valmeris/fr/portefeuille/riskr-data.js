// riskr-data.js — portefeuille de démonstration entièrement fictif (Groupe Valmeris)
window.RISKR_DATA = {
  "version": "2.1",
  "timestamp": "2026-09-27T09:57:53.078Z",
  "appState": {
    "title": "Riskr - Transformation Valmeris 2026-2028",
    "subtitle": "Portefeuille de démonstration entièrement fictif",
    "language": "fr",
    "storageNamespace": "default",
    "criticalityThresholds": {
      "medium": 5,
      "high": 10,
      "critical": 15
    }
  },
  "risks": [],
  "riskGroups": [],
  "settings": {
    "echelleImpact": [
      10000,
      50000,
      250000,
      1000000
    ],
    "effetVelocite": "discret",
    "cadenceRevue": 90,
    "riskAppetite": 9,
    "templates": []
  },
  "reviews": [],
  "journal": [],
  "program": null,
  "portfolio": {
    "uid": "valmeris-portefeuille",
    "title": "Transformation Valmeris 2026-2028",
    "objective": "Moderniser le socle numérique, automatiser les entrepôts et unifier la relation client du Groupe Valmeris (exemple entièrement fictif)",
    "owner": "Nathalie Verdier",
    "staleAfterDays": 30,
    "programs": [
      {
        "uid": "si-program",
        "code": "SN",
        "importedAt": "2026-09-27T09:57:52.921Z",
        "source": "programme-si/riskr-data.js",
        "data": {
          "program": {
            "uid": "si-program",
            "title": "Socle numérique",
            "objective": "Remplacer l'ERP vieillissant, bâtir une plateforme de données commune et durcir la cybersécurité du Groupe Valmeris d'ici fin 2028 (budget 9 M€).",
            "sponsor": "Bertrand Lesage, directeur général délégué",
            "manager": "Nadia Benali, directrice de programme (DSI)",
            "status": "active",
            "appetite": 9,
            "reserve": 450000,
            "closedAt": "",
            "closureReason": "",
            "components": [
              {
                "uid": "si-proj-erp",
                "name": "Migration ERP",
                "type": "project",
                "owner": "Julien Carré",
                "status": "active",
                "tolerance": 10,
                "reserve": 150000
              },
              {
                "uid": "si-proj-data",
                "name": "Plateforme de données",
                "type": "project",
                "owner": "Sophie Delorme",
                "status": "active",
                "tolerance": 9,
                "reserve": 80000
              },
              {
                "uid": "si-proj-cyber",
                "name": "Cybersécurité et identités",
                "type": "project",
                "owner": "Karim Haddad",
                "status": "active",
                "tolerance": 8,
                "reserve": 70000
              },
              {
                "uid": "si-proj-cloud",
                "name": "Bascule cloud des applications",
                "type": "project",
                "owner": "Élodie Fournier",
                "status": "active",
                "tolerance": 9,
                "reserve": 60000
              },
              {
                "uid": "si-work-change",
                "name": "Conduite du changement",
                "type": "work",
                "owner": "Thomas Guérin",
                "status": "active",
                "tolerance": 9,
                "reserve": 40000
              }
            ],
            "benefits": [
              {
                "uid": "si-ben-cloture",
                "name": "Délai de clôture comptable mensuelle",
                "owner": "Pierre-Yves Tanguy",
                "unit": "jours",
                "baseline": 12,
                "target": 5,
                "actual": 11,
                "dueDate": "2027-12-31",
                "measuredAt": "2026-08-31",
                "riskUids": [
                  "si-2-1",
                  "si-2-2",
                  "si-5-1"
                ]
              },
              {
                "uid": "si-ben-referentiel",
                "name": "Indicateurs de pilotage issus du référentiel unique",
                "owner": "Sophie Delorme",
                "unit": "%",
                "baseline": 15,
                "target": 90,
                "actual": 35,
                "dueDate": "2027-06-30",
                "measuredAt": "2026-09-15",
                "riskUids": [
                  "si-3-1",
                  "si-3-2",
                  "si-1-2"
                ]
              },
              {
                "uid": "si-ben-mfa",
                "name": "Comptes protégés par authentification multifacteur",
                "owner": "Karim Haddad",
                "unit": "%",
                "baseline": 10,
                "target": 100,
                "actual": 64,
                "dueDate": "2026-12-31",
                "measuredAt": "2026-09-20",
                "riskUids": [
                  "si-4-1",
                  "si-4-2"
                ]
              },
              {
                "uid": "si-ben-run",
                "name": "Coût annuel d'exploitation du SI",
                "owner": "Mathilde Roussel",
                "unit": "k€",
                "baseline": 3800,
                "target": 3200,
                "actual": 3750,
                "dueDate": "2028-12-31",
                "measuredAt": "2026-06-30",
                "riskUids": [
                  "si-1-1",
                  "si-1-3",
                  "si-4-3"
                ]
              }
            ],
            "dependencies": [
              {
                "uid": "si-dep-1",
                "sourceId": "si-proj-erp",
                "targetId": "si-proj-data",
                "kind": "interface",
                "description": "La plateforme de données s'alimente des référentiels articles, tiers et stocks du nouvel ERP.",
                "owner": "Olivier Masson",
                "dueDate": "2027-01-31",
                "status": "active",
                "riskUids": [
                  "si-2-1",
                  "si-3-1"
                ]
              },
              {
                "uid": "si-dep-2",
                "sourceId": "si-proj-cyber",
                "targetId": "si-proj-cloud",
                "kind": "finishStart",
                "description": "Aucune application ne bascule dans le cloud sans l'annuaire d'identités unifié et l'authentification multifacteur.",
                "owner": "Karim Haddad",
                "dueDate": "2026-12-15",
                "status": "active",
                "riskUids": [
                  "si-4-1",
                  "si-4-3"
                ]
              },
              {
                "uid": "si-dep-3",
                "sourceId": "si-work-change",
                "targetId": "si-proj-erp",
                "kind": "resource",
                "description": "Le réseau de relais métiers fournit les testeurs et les formateurs de la bascule ERP.",
                "owner": "Thomas Guérin",
                "dueDate": "2026-12-31",
                "status": "active",
                "riskUids": [
                  "si-5-1",
                  "si-1-2"
                ]
              }
            ],
            "scenarios": [
              {
                "uid": "si-scenario-1",
                "name": "Glissement de l'ERP et retard de la plateforme de données",
                "riskUids": [
                  "si-2-2",
                  "si-3-1"
                ],
                "probability": 25,
                "min": 150000,
                "likely": 400000,
                "max": 900000,
                "status": "active",
                "owner": "Nadia Benali",
                "reason": "Double fonctionnement prolongé et solutions provisoires pour les programmes clients et entrepôts."
              },
              {
                "uid": "si-scenario-2",
                "name": "Rançongiciel pendant une vague de bascule cloud",
                "riskUids": [
                  "si-4-2",
                  "si-4-3"
                ],
                "probability": 10,
                "min": 200000,
                "likely": 600000,
                "max": 1500000,
                "status": "active",
                "owner": "Karim Haddad",
                "reason": "Restauration de l'ancien ERP et retour arrière simultané d'applications en cours de bascule."
              }
            ],
            "escalations": [
              {
                "uid": "si-escalation-1",
                "riskUid": "si-2-2",
                "fromLevel": "component",
                "toLevel": "program",
                "fromComponentId": "si-proj-erp",
                "targetComponentId": "",
                "reason": "Six testeurs supplémentaires nécessaires : la réserve du projet (150 k€) est déjà engagée à 80 %.",
                "author": "Julien Carré",
                "raisedAt": "2026-06-02",
                "status": "decided",
                "decision": "Six testeurs financés sur la réserve programme (120 k€).",
                "decisionAuthor": "Bertrand Lesage",
                "decidedAt": "2026-06-16",
                "decisionReason": "Protéger une bascule avant la clôture annuelle.",
                "scoreAtDecision": 16
              },
              {
                "uid": "si-escalation-2",
                "riskUid": "si-3-1",
                "fromLevel": "program",
                "toLevel": "organization",
                "fromComponentId": "",
                "targetComponentId": "",
                "reason": "Le retard de la plateforme de données décale les jalons des programmes Entrepôts connectés et Relation client omnicanale : arbitrage du portefeuille demandé sur les dates et le financement.",
                "author": "Nadia Benali",
                "raisedAt": "2026-09-22",
                "status": "pending",
                "decision": "",
                "decisionAuthor": "",
                "decidedAt": "",
                "decisionReason": "",
                "scoreAtDecision": null
              }
            ],
            "stages": [
              {
                "uid": "si-stage-1",
                "name": "Cadrage et fondations",
                "startDate": "2025-09-01",
                "endDate": "2026-06-30",
                "status": "closed"
              },
              {
                "uid": "si-stage-2",
                "name": "Construction et bascule ERP",
                "startDate": "2026-07-01",
                "endDate": "2027-06-30",
                "status": "active"
              },
              {
                "uid": "si-stage-3",
                "name": "Généralisation et décommission",
                "startDate": "2027-07-01",
                "endDate": "2028-12-31",
                "status": "active"
              }
            ],
            "decisions": [
              {
                "uid": "si-program-decision-1",
                "date": "2026-03-24",
                "author": "Bertrand Lesage",
                "subject": "Retard de la plateforme de données",
                "decision": "Reprendre le risque au niveau programme et financer deux ingénieurs de données (90 k€ sur la réserve).",
                "reason": "Les programmes Entrepôts connectés et Relation client omnicanale dépendent de la plateforme.",
                "reviewDate": "2026-06-16"
              },
              {
                "uid": "si-program-decision-2",
                "date": "2026-06-16",
                "author": "Bertrand Lesage",
                "subject": "Recette du nouvel ERP",
                "decision": "Financer six testeurs supplémentaires (120 k€ sur la réserve programme).",
                "reason": "Préserver une bascule avant la clôture annuelle.",
                "reviewDate": "2026-10-15"
              },
              {
                "uid": "si-program-decision-3",
                "date": "2026-09-22",
                "author": "Bertrand Lesage",
                "subject": "Date de bascule ERP",
                "decision": "Préparer un scénario de bascule au 1er avril 2027 ; décision finale au go/no-go du 15/10/2026.",
                "reason": "Recette en retard de 24 points : ne pas faire porter le risque sur la clôture 2026.",
                "reviewDate": "2026-10-15"
              }
            ]
          },
          "settings": {
            "echelleImpact": [
              20000,
              100000,
              500000,
              2000000
            ],
            "effetVelocite": "discret",
            "cadenceRevue": 90,
            "riskAppetite": 9,
            "templates": []
          },
          "reviews": [
            {
              "id": "rev-si-2025-11",
              "date": "2025-11-18",
              "label": "Revue de cadrage du programme",
              "auteur": "Nadia Benali",
              "note": "Premier registre du programme : l'exposition se concentre sur la bascule ERP, la qualité des données reprises et l'ancien ERP hors support.",
              "risks": [
                {
                  "uid": "si-1-1",
                  "id": "1.1",
                  "title": "Dépassement du budget du programme",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Risque identifié au cadrage."
                },
                {
                  "uid": "si-1-2",
                  "id": "1.2",
                  "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Risque identifié à la revue de cadrage."
                },
                {
                  "uid": "si-2-1",
                  "id": "2.1",
                  "title": "Qualité insuffisante des données reprises de l'ancien ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Risque identifié par le projet Migration ERP."
                },
                {
                  "uid": "si-2-2",
                  "id": "2.2",
                  "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    5
                  ],
                  "after": [
                    4,
                    5
                  ],
                  "motif": "Risque identifié à la revue de cadrage."
                },
                {
                  "uid": "si-3-2",
                  "id": "3.2",
                  "title": "Gouvernance des données non adoptée par les directions",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Risque identifié à la revue de cadrage."
                },
                {
                  "uid": "si-3-3",
                  "id": "3.3",
                  "title": "Plateforme de données propriétaire et non réversible",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Risque identifié lors du choix de la solution."
                },
                {
                  "uid": "si-4-1",
                  "id": "4.1",
                  "title": "Compromission de comptes par hameçonnage",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Risque identifié par la RSSI."
                },
                {
                  "uid": "si-4-2",
                  "id": "4.2",
                  "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    5
                  ],
                  "after": [
                    3,
                    5
                  ],
                  "motif": "Risque identifié par la RSSI."
                }
              ]
            },
            {
              "id": "rev-si-2026-01",
              "date": "2026-01-20",
              "label": "Revue de lancement des projets",
              "auteur": "Nadia Benali",
              "note": "Cinq risques ajoutés au lancement des projets, dont l'exigence de conformité des données descendue du portefeuille. Planning ERP consolidé avec l'intégrateur.",
              "risks": [
                {
                  "uid": "si-1-1",
                  "id": "1.1",
                  "title": "Dépassement du budget du programme",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-1-2",
                  "id": "1.2",
                  "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-1",
                  "id": "2.1",
                  "title": "Qualité insuffisante des données reprises de l'ancien ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-2",
                  "id": "2.2",
                  "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    5
                  ],
                  "after": [
                    3,
                    5
                  ],
                  "motif": "Planning détaillé validé avec l'intégrateur."
                },
                {
                  "uid": "si-2-3",
                  "id": "2.3",
                  "title": "Interfaces ERP et gestion d'entrepôt non prêtes pour Entrepôts connectés",
                  "groupe": "ERP et processus",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Risque identifié avec le programme Entrepôts connectés."
                },
                {
                  "uid": "si-3-1",
                  "id": "3.1",
                  "title": "Retard de la plateforme de données pour les programmes clients et entrepôts",
                  "groupe": "Données et intégration",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Risque identifié par le projet Plateforme de données."
                },
                {
                  "uid": "si-3-2",
                  "id": "3.2",
                  "title": "Gouvernance des données non adoptée par les directions",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-3-3",
                  "id": "3.3",
                  "title": "Plateforme de données propriétaire et non réversible",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Réversibilité ajoutée aux critères de choix."
                },
                {
                  "uid": "si-4-1",
                  "id": "4.1",
                  "title": "Compromission de comptes par hameçonnage",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-4-2",
                  "id": "4.2",
                  "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    5
                  ],
                  "after": [
                    3,
                    5
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-1",
                  "id": "5.1",
                  "title": "Rejet du nouvel ERP par les équipes d'entrepôt et de comptabilité",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Risque identifié au lancement du chantier Conduite du changement."
                },
                {
                  "uid": "si-5-2",
                  "id": "5.2",
                  "title": "Perte des derniers experts de l'ancien ERP",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Risque identifié au lancement des projets."
                },
                {
                  "uid": "si-5-3",
                  "id": "5.3",
                  "title": "Non-conformité des données personnelles centralisées",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Exigence descendue du portefeuille."
                }
              ]
            },
            {
              "id": "rev-si-2026-03",
              "date": "2026-03-24",
              "label": "Revue du premier trimestre 2026",
              "auteur": "Nadia Benali",
              "note": "Retard de la plateforme de données repris au niveau programme. Périmètre ERP gelé et authentification multifacteur sur la messagerie : plusieurs cotations baissent.",
              "risks": [
                {
                  "uid": "si-1-1",
                  "id": "1.1",
                  "title": "Dépassement du budget du programme",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Suivi mensuel du reste à faire et comité d'arbitrage en place."
                },
                {
                  "uid": "si-1-2",
                  "id": "1.2",
                  "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Temps projet inscrit dans les objectifs des directions."
                },
                {
                  "uid": "si-1-3",
                  "id": "1.3",
                  "title": "Contrat cloud mutualisé avec les deux autres programmes",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Opportunité identifiée par la Direction des achats."
                },
                {
                  "uid": "si-2-1",
                  "id": "2.1",
                  "title": "Qualité insuffisante des données reprises de l'ancien ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Propriétaires de données nommés."
                },
                {
                  "uid": "si-2-2",
                  "id": "2.2",
                  "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    5
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Périmètre de la version 1 gelé."
                },
                {
                  "uid": "si-2-3",
                  "id": "2.3",
                  "title": "Interfaces ERP et gestion d'entrepôt non prêtes pour Entrepôts connectés",
                  "groupe": "ERP et processus",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-3-1",
                  "id": "3.1",
                  "title": "Retard de la plateforme de données pour les programmes clients et entrepôts",
                  "groupe": "Données et intégration",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Repris au niveau programme."
                },
                {
                  "uid": "si-3-2",
                  "id": "3.2",
                  "title": "Gouvernance des données non adoptée par les directions",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-3-3",
                  "id": "3.3",
                  "title": "Plateforme de données propriétaire et non réversible",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    2
                  ],
                  "motif": "Clause de réversibilité en négociation."
                },
                {
                  "uid": "si-4-1",
                  "id": "4.1",
                  "title": "Compromission de comptes par hameçonnage",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Authentification multifacteur sur la messagerie."
                },
                {
                  "uid": "si-4-2",
                  "id": "4.2",
                  "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    5
                  ],
                  "after": [
                    3,
                    5
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-4-3",
                  "id": "4.3",
                  "title": "Interruption de service pendant la bascule cloud des applications",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Risque identifié à la préparation des vagues de bascule."
                },
                {
                  "uid": "si-5-1",
                  "id": "5.1",
                  "title": "Rejet du nouvel ERP par les équipes d'entrepôt et de comptabilité",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-2",
                  "id": "5.2",
                  "title": "Perte des derniers experts de l'ancien ERP",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-3",
                  "id": "5.3",
                  "title": "Non-conformité des données personnelles centralisées",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": ""
                }
              ]
            },
            {
              "id": "rev-si-2026-06",
              "date": "2026-06-16",
              "label": "Revue de fin de cadrage",
              "auteur": "Nadia Benali",
              "note": "Mesures de cadrage largement réalisées, mais la recette ERP prend 14 points de retard : réserve programme mobilisée à 47 %, budget et bascule remontent.",
              "risks": [
                {
                  "uid": "si-1-1",
                  "id": "1.1",
                  "title": "Dépassement du budget du programme",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Remontée : 47 % de la réserve consommés après le financement de la recette ERP."
                },
                {
                  "uid": "si-1-2",
                  "id": "1.2",
                  "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-1-3",
                  "id": "1.3",
                  "title": "Contrat cloud mutualisé avec les deux autres programmes",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Besoins des trois programmes recensés ; volumes suffisants."
                },
                {
                  "uid": "si-2-1",
                  "id": "2.1",
                  "title": "Qualité insuffisante des données reprises de l'ancien ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Contrôles automatiques de qualité en place."
                },
                {
                  "uid": "si-2-2",
                  "id": "2.2",
                  "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    5
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Remontée : recette en retard de 14 points."
                },
                {
                  "uid": "si-2-3",
                  "id": "2.3",
                  "title": "Interfaces ERP et gestion d'entrepôt non prêtes pour Entrepôts connectés",
                  "groupe": "ERP et processus",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Bouchon de test partagé livré."
                },
                {
                  "uid": "si-2-4",
                  "id": "2.4",
                  "title": "Facturation électronique portée par le nouvel ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    2,
                    2
                  ],
                  "after": [
                    2,
                    2
                  ],
                  "motif": "Opportunité identifiée par la Direction financière."
                },
                {
                  "uid": "si-3-1",
                  "id": "3.1",
                  "title": "Retard de la plateforme de données pour les programmes clients et entrepôts",
                  "groupe": "Données et intégration",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Deux ingénieurs de données en renfort."
                },
                {
                  "uid": "si-3-2",
                  "id": "3.2",
                  "title": "Gouvernance des données non adoptée par les directions",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Responsables de données nommés dans toutes les directions."
                },
                {
                  "uid": "si-3-3",
                  "id": "3.3",
                  "title": "Plateforme de données propriétaire et non réversible",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    1,
                    2
                  ],
                  "motif": "Clos le 12/05/2026 : contrat signé avec clause de réversibilité."
                },
                {
                  "uid": "si-4-1",
                  "id": "4.1",
                  "title": "Compromission de comptes par hameçonnage",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-4-2",
                  "id": "4.2",
                  "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    5
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Sauvegardes immuables testées ; réseau segmenté."
                },
                {
                  "uid": "si-4-3",
                  "id": "4.3",
                  "title": "Interruption de service pendant la bascule cloud des applications",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Vagues 1 et 2 réussies après répétition."
                },
                {
                  "uid": "si-5-1",
                  "id": "5.1",
                  "title": "Rejet du nouvel ERP par les équipes d'entrepôt et de comptabilité",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Réseau de 60 relais métiers constitué."
                },
                {
                  "uid": "si-5-2",
                  "id": "5.2",
                  "title": "Perte des derniers experts de l'ancien ERP",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Prime de fidélisation et procédures documentées ; risque accepté."
                },
                {
                  "uid": "si-5-3",
                  "id": "5.3",
                  "title": "Non-conformité des données personnelles centralisées",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Registre à jour et environnements de test pseudonymisés."
                }
              ]
            },
            {
              "id": "rev-si-2026-09",
              "date": "2026-09-22",
              "label": "Revue de rentrée avant le go/no-go ERP",
              "auteur": "Nadia Benali",
              "note": "Hameçonnage survenu en juillet, recette ERP et plateforme de données en zone critique. Escalade au portefeuille et scénario de bascule en avril 2027 à l'étude.",
              "risks": [
                {
                  "uid": "si-1-1",
                  "id": "1.1",
                  "title": "Dépassement du budget du programme",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Renégociation du forfait intégrateur engagée ; dépenses 2026 stabilisées."
                },
                {
                  "uid": "si-1-2",
                  "id": "1.2",
                  "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-1-3",
                  "id": "1.3",
                  "title": "Contrat cloud mutualisé avec les deux autres programmes",
                  "groupe": "Gouvernance, budget et ressources",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-1",
                  "id": "2.1",
                  "title": "Qualité insuffisante des données reprises de l'ancien ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-2",
                  "id": "2.2",
                  "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
                  "groupe": "ERP et processus",
                  "before": [
                    4,
                    5
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-3",
                  "id": "2.3",
                  "title": "Interfaces ERP et gestion d'entrepôt non prêtes pour Entrepôts connectés",
                  "groupe": "ERP et processus",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-2-4",
                  "id": "2.4",
                  "title": "Facturation électronique portée par le nouvel ERP",
                  "groupe": "ERP et processus",
                  "before": [
                    2,
                    2
                  ],
                  "after": [
                    3,
                    2
                  ],
                  "motif": "Couverture du module ERP confirmée en atelier."
                },
                {
                  "uid": "si-3-1",
                  "id": "3.1",
                  "title": "Retard de la plateforme de données pour les programmes clients et entrepôts",
                  "groupe": "Données et intégration",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    4
                  ],
                  "motif": "Remontée : 9 semaines de retard cumulé."
                },
                {
                  "uid": "si-3-2",
                  "id": "3.2",
                  "title": "Gouvernance des données non adoptée par les directions",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-3-3",
                  "id": "3.3",
                  "title": "Plateforme de données propriétaire et non réversible",
                  "groupe": "Données et intégration",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    1,
                    2
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-4-1",
                  "id": "4.1",
                  "title": "Compromission de comptes par hameçonnage",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Survenu le 08/07 : 14 comptes compromis ; impact contenu grâce à l'authentification multifacteur."
                },
                {
                  "uid": "si-4-2",
                  "id": "4.2",
                  "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    5
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-4-3",
                  "id": "4.3",
                  "title": "Interruption de service pendant la bascule cloud des applications",
                  "groupe": "Cybersécurité et infrastructures",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-1",
                  "id": "5.1",
                  "title": "Rejet du nouvel ERP par les équipes d'entrepôt et de comptabilité",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-2",
                  "id": "5.2",
                  "title": "Perte des derniers experts de l'ancien ERP",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": ""
                },
                {
                  "uid": "si-5-3",
                  "id": "5.3",
                  "title": "Non-conformité des données personnelles centralisées",
                  "groupe": "Humain, compétences et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": ""
                }
              ]
            }
          ],
          "risks": [
            {
              "uid": "si-1-1",
              "id": "1.1",
              "title": "Dépassement du budget du programme",
              "event": "Les surcoûts cumulés des projets dépassent la réserve programme de 450 k€.",
              "objective": "Tenir l'enveloppe de 9 M€ votée par le conseil d'administration pour 2026-2028.",
              "raisedAt": "2025-10-15",
              "raisedBy": "Mathilde Roussel",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-12-15",
              "milestone": "Budget 2027 du programme",
              "impactAxes": {
                "cost": 5,
                "delay": 2,
                "quality": 1,
                "service": 1,
                "benefit": 3
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
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Mathilde Roussel",
              "causes": [
                "Forfait d'intégration ERP payé au temps passé",
                "Demandes de changement hors périmètre acceptées au fil de l'eau",
                "Renforts financés sur la réserve (données, recette)",
                "Hausse des tarifs des licences en 2026"
              ],
              "consequences": [
                {
                  "texte": "Dépassement de l'enveloppe votée",
                  "chiffrage": "≈ 550 k€ au-delà de la réserve"
                },
                {
                  "texte": "Report de la décommission de l'ancien ERP",
                  "chiffrage": "≈ 45 k€ par mois de double fonctionnement"
                },
                {
                  "texte": "Arbitrage défavorable au programme dans le portefeuille",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Suivre chaque mois le reste à faire de chaque projet.",
                  "porteur": "Mathilde Roussel",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "Tableau de suivi présenté au comité du 20/01/2026.",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Soumettre toute demande de changement hors périmètre au comité d'arbitrage.",
                  "porteur": "Nadia Benali",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Renégocier le forfait d'intégration ERP en jalons payés à la livraison.",
                  "porteur": "Antoine Lefebvre",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Prévoir une provision de 5 % par projet dans le budget 2027.",
                  "porteur": "Mathilde Roussel",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Mathilde Roussel",
                  "texte": "Financement de six testeurs ERP sur la réserve : 47 % consommés, la probabilité remonte à 4."
                },
                {
                  "date": "2026-09-15",
                  "auteur": "Mathilde Roussel",
                  "texte": "Renégociation du forfait intégrateur engagée mais non signée à l'échéance : mesure en retard."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Bertrand Lesage",
                  "texte": "Au-delà de l'appétence (12 > 9) : action supplémentaire exigée avant le budget 2027."
                }
              ],
              "liens": [
                {
                  "libelle": "Tableau de suivi budgétaire du programme",
                  "url": "https://intranet.valmeris.example/socle/finance/suivi-budgetaire"
                },
                {
                  "libelle": "Avenant intégrateur (projet)",
                  "url": "https://intranet.valmeris.example/achats/contrats/erp-integrateur-avenant-2"
                }
              ],
              "cout": {
                "min": 200000,
                "probable": 550000,
                "max": 1200000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-1-1",
                  "nom": "Consommation de la réserve programme",
                  "unite": "%",
                  "sens": "hausse",
                  "alerte": 50,
                  "critique": 75,
                  "releves": [
                    {
                      "date": "2026-01-31",
                      "valeur": 4,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-02-28",
                      "valeur": 6,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 26,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 27,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 29,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 56,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 57,
                      "auteur": "Mathilde Roussel"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 59,
                      "auteur": "Mathilde Roussel"
                    }
                  ]
                }
              ],
              "decisions": [
                {
                  "id": "si-dec-1-1",
                  "date": "2026-09-22",
                  "author": "Bertrand Lesage",
                  "type": "moreAction",
                  "reason": "Signer l'avenant intégrateur et présenter un budget 2027 avec provision avant le comité d'octobre.",
                  "reviewDate": "2026-10-15",
                  "scoreAtDecision": 12
                }
              ],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-10-15",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "si-proj-erp",
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par le programme dès le cadrage : l'enveloppe est votée globalement, pas projet par projet.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "si-1-2",
              "id": "1.2",
              "title": "Indisponibilité des experts métiers pour les ateliers et la recette",
              "event": "Les experts finance, achats et entrepôts ne sont pas libérés pour les ateliers de conception et la recette.",
              "objective": "Tenir le planning de conception et de recette du nouvel ERP et de la plateforme de données.",
              "raisedAt": "2025-11-18",
              "raisedBy": "Julien Carré",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-11-30",
              "milestone": "Fin de la recette intégrée ERP",
              "impactAxes": {
                "cost": 2,
                "delay": 4,
                "quality": 3,
                "service": 1,
                "benefit": 2
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
              "responsable": "Nadia Benali",
              "causes": [
                "Clôtures mensuelles et pics saisonniers en entrepôt",
                "Temps projet non inscrit dans les objectifs des directions",
                "Experts sollicités par trois programmes du portefeuille"
              ],
              "consequences": [
                {
                  "texte": "Ateliers reportés et règles de gestion validées tardivement",
                  "chiffrage": "2 à 4 semaines de glissement"
                },
                {
                  "texte": "Recette incomplète sur les processus finance",
                  "chiffrage": "≈ 150 k€ de corrections après bascule"
                }
              ],
              "mesures": [
                {
                  "texte": "Inscrire le temps projet des experts dans les objectifs annuels des directions.",
                  "porteur": "Thomas Guérin",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Remplacer 30 % du temps des experts finance par des intérimaires qualifiés.",
                  "porteur": "Pierre-Yves Tanguy",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Publier le calendrier des ateliers trois mois à l'avance, hors périodes de clôture.",
                  "porteur": "Julien Carré",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-03-24",
                  "auteur": "Nadia Benali",
                  "texte": "Objectifs 2026 des directions mis à jour : présence aux ateliers en hausse, probabilité ramenée à 3."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Julien Carré",
                  "texte": "85 % de présence en septembre ; reste à sécuriser la période de clôture annuelle."
                }
              ],
              "liens": [
                {
                  "libelle": "Calendrier des ateliers ERP",
                  "url": "https://intranet.valmeris.example/socle/erp/calendrier-ateliers"
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 150000,
                "max": 350000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-1-2",
                  "nom": "Présence des experts métiers aux ateliers",
                  "unite": "%",
                  "sens": "baisse",
                  "alerte": 80,
                  "critique": 65,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 62,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 68,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 71,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 77,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 74,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 82,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 85,
                      "auteur": "Julien Carré"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "si-proj-erp",
                "si-proj-data",
                "si-work-change"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque transverse : les mêmes experts servent l'ERP, la plateforme de données et la conduite du changement.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "si-1-3",
              "id": "1.3",
              "title": "Contrat cloud mutualisé avec les deux autres programmes",
              "event": "Un contrat cadre cloud commun au portefeuille fait baisser le coût unitaire des ressources.",
              "objective": "Réduire le coût d'exploitation du SI de 600 k€ par an d'ici 2028.",
              "raisedAt": "2026-03-24",
              "raisedBy": "Antoine Lefebvre",
              "kind": "opportunity",
              "lifecycle": "active",
              "proximityDate": "2026-11-30",
              "milestone": "Comité de portefeuille de novembre 2026",
              "impactAxes": {
                "cost": 4,
                "delay": 0,
                "quality": 1,
                "service": 1,
                "benefit": 3
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
              "traitement": "share",
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Antoine Lefebvre",
              "causes": [
                "Trois programmes achètent des ressources cloud séparément",
                "Volumes cumulés suffisants pour un palier tarifaire supérieur",
                "Plateforme de données hébergée chez le même fournisseur"
              ],
              "consequences": [
                {
                  "texte": "Remise sur les ressources cloud du groupe",
                  "chiffrage": "≈ 250 k€ de gain sur trois ans"
                },
                {
                  "texte": "Gouvernance unique des coûts cloud",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Recenser les besoins cloud des trois programmes sur 2026-2028.",
                  "porteur": "Élodie Fournier",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Lancer une consultation commune avec la Direction des achats.",
                  "porteur": "Antoine Lefebvre",
                  "echeance": "15/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Faire valider le principe d'un contrat unique par le comité de portefeuille.",
                  "porteur": "Nadia Benali",
                  "echeance": "20/10/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-03-24",
                  "auteur": "Antoine Lefebvre",
                  "texte": "Opportunité : la cotation doit monter (on cherche à rendre le gain plus probable), la prévision dépasse donc l'inhérent par construction."
                },
                {
                  "date": "2026-06-16",
                  "auteur": "Élodie Fournier",
                  "texte": "Besoins des trois programmes recensés : 1,4 M€ de consommation cumulée sur trois ans. Montants du chiffrage = gain attendu, hors provision."
                }
              ],
              "liens": [
                {
                  "libelle": "Note d'opportunité achats cloud",
                  "url": "https://intranet.valmeris.example/achats/cloud/note-mutualisation"
                }
              ],
              "cout": {
                "min": 120000,
                "probable": 250000,
                "max": 400000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-11-30",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "si-proj-cloud",
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Proposé par la Direction des achats : les programmes Entrepôts connectés et Relation client consomment le même cloud.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "si-2-1",
              "id": "2.1",
              "title": "Qualité insuffisante des données reprises de l'ancien ERP",
              "event": "Les fiches articles, fournisseurs et clients reprises contiennent trop d'erreurs pour autoriser la bascule.",
              "objective": "Basculer sur le nouvel ERP avec des données fiables, utilisables par la plateforme de données et les entrepôts.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Julien Carré",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-11-15",
              "milestone": "Répétition générale de migration",
              "impactAxes": {
                "cost": 3,
                "delay": 4,
                "quality": 5,
                "service": 3,
                "benefit": 3
              },
              "assessmentBefore": [
                4,
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
              "velocite": 3,
              "statut": "statusInProgress",
              "responsable": "Julien Carré",
              "causes": [
                "42 000 fiches articles en doublon dans l'ancien ERP",
                "Aucun propriétaire désigné pour les données de référence",
                "Règles de codage différentes selon les sites",
                "Historique de 15 ans jamais purgé"
              ],
              "consequences": [
                {
                  "texte": "Commandes et expéditions bloquées après bascule",
                  "chiffrage": "≈ 30 k€ par jour de blocage"
                },
                {
                  "texte": "Référentiel articles faux dans la plateforme de données",
                  "chiffrage": "≈ 250 k€ de reprises"
                }
              ],
              "mesures": [
                {
                  "texte": "Nommer un propriétaire de données par domaine (articles, tiers, stocks).",
                  "porteur": "Sophie Delorme",
                  "echeance": "28/02/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Automatiser les contrôles de qualité avant chaque répétition de migration.",
                  "porteur": "Julien Carré",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Rapport de contrôle de la répétition n° 3 (juin 2026).",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Nettoyer les 42 000 fiches articles en doublon.",
                  "porteur": "Yannick Morel",
                  "echeance": "31/08/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Répéter la bascule complète avec les données réelles de production.",
                  "porteur": "Julien Carré",
                  "echeance": "15/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Julien Carré",
                  "texte": "Contrôles automatiques en place : le taux d'anomalies passe sous 6 %, impact ramené à 3."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Yannick Morel",
                  "texte": "Nettoyage des doublons à 70 % : échéance du 31/08 dépassée, fin prévue mi-octobre."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de reprise des données",
                  "url": "https://intranet.valmeris.example/socle/erp/plan-reprise-donnees"
                },
                {
                  "libelle": "Rapport de répétition n° 3",
                  "url": "https://intranet.valmeris.example/socle/erp/repetition-3"
                }
              ],
              "cout": {
                "min": 80000,
                "probable": 250000,
                "max": 480000,
                "probabilite": null,
                "sansProtection": 500000
              },
              "kri": [
                {
                  "id": "kri-si-2-1",
                  "nom": "Anomalies sur les fiches articles reprises",
                  "unite": "%",
                  "sens": "hausse",
                  "alerte": 3,
                  "critique": 6,
                  "releves": [
                    {
                      "date": "2026-02-28",
                      "valeur": 11.5,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 9.8,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 8.1,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 7,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 5.8,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 5.1,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 4.6,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 4.2,
                      "auteur": "Sophie Delorme"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-11-15",
              "scopeLevel": "component",
              "componentId": "si-proj-erp",
              "affectedComponentIds": [
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Migration ERP ; la plateforme de données hérite des mêmes référentiels.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-2-2",
              "id": "2.2",
              "title": "Glissement de la bascule ERP au-delà de la clôture annuelle",
              "event": "La date de bascule glisse après le 1er janvier 2027 et chevauche la clôture comptable 2026.",
              "objective": "Démarrer l'exercice 2027 sur le nouvel ERP sans perturber la clôture annuelle.",
              "raisedAt": "2025-11-18",
              "raisedBy": "Julien Carré",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-10-15",
              "milestone": "Go/no-go de bascule ERP",
              "impactAxes": {
                "cost": 4,
                "delay": 5,
                "quality": 3,
                "service": 3,
                "benefit": 4
              },
              "assessmentBefore": [
                4,
                5
              ],
              "assessmentCurrent": [
                4,
                4
              ],
              "assessmentAfter": [
                3,
                4
              ],
              "assessmentTarget": [
                2,
                4
              ],
              "traitement": "reduce",
              "velocite": 4,
              "statut": "statusInProgress",
              "responsable": "Julien Carré",
              "causes": [
                "Recette intégrée en retard sur le plan",
                "Spécifications des interfaces finance livrées tardivement",
                "Intégrateur en sous-effectif sur l'été",
                "Experts finance mobilisés par la clôture semestrielle"
              ],
              "consequences": [
                {
                  "texte": "Double fonctionnement des deux ERP sur un trimestre",
                  "chiffrage": "≈ 550 k€"
                },
                {
                  "texte": "Clôture 2026 réalisée pendant la bascule",
                  "chiffrage": "risque de réserves du commissaire aux comptes"
                },
                {
                  "texte": "Décalage des interfaces attendues par Entrepôts connectés",
                  "chiffrage": "3 mois"
                }
              ],
              "mesures": [
                {
                  "texte": "Geler le périmètre fonctionnel de la version 1.",
                  "porteur": "Julien Carré",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Renforcer la recette de six testeurs financés sur la réserve programme.",
                  "porteur": "Julien Carré",
                  "echeance": "31/07/2026",
                  "etat": "done",
                  "verification": "Six testeurs en poste depuis le 06/07/2026.",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Obtenir de l'intégrateur un engagement écrit sur le plan de recette resserré.",
                  "porteur": "Antoine Lefebvre",
                  "echeance": "10/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 1
                },
                {
                  "texte": "Préparer un scénario de bascule au 1er avril 2027, hors clôture.",
                  "porteur": "Pierre-Yves Tanguy",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-02",
                  "auteur": "Julien Carré",
                  "texte": "Escalade au programme : la réserve du projet ne couvre pas six testeurs supplémentaires."
                },
                {
                  "date": "2026-06-16",
                  "auteur": "Julien Carré",
                  "texte": "Prévision relevée de P2 à P3 : même avec la recette renforcée, la marge avant la clôture a disparu."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Nadia Benali",
                  "texte": "Écart de recette de 24 points (critique) : go/no-go le 15/10 avec le scénario d'avril en repli."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de recette intégrée",
                  "url": "https://intranet.valmeris.example/socle/erp/plan-recette"
                },
                {
                  "libelle": "Scénario de bascule avril 2027",
                  "url": "https://intranet.valmeris.example/socle/erp/scenario-avril-2027"
                }
              ],
              "cout": {
                "min": 250000,
                "probable": 550000,
                "max": 1200000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-2-2",
                  "nom": "Retard de la recette intégrée sur le plan",
                  "unite": "points",
                  "sens": "hausse",
                  "alerte": 10,
                  "critique": 20,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 4,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 6,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 9,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 14,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 18,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 22,
                      "auteur": "Julien Carré"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 24,
                      "auteur": "Julien Carré"
                    }
                  ]
                }
              ],
              "decisions": [
                {
                  "id": "si-dec-2-2",
                  "date": "2026-06-16",
                  "author": "Bertrand Lesage",
                  "type": "moreAction",
                  "reason": "Financer six testeurs sur la réserve programme et préparer un scénario de repli.",
                  "reviewDate": "2026-10-15",
                  "scoreAtDecision": 16
                }
              ],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-10-15",
              "scopeLevel": "component",
              "componentId": "si-proj-erp",
              "affectedComponentIds": [
                "si-proj-data",
                "si-work-change"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Migration ERP, escaladé au programme le 02/06/2026 pour le financement de la recette.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-2-3",
              "id": "2.3",
              "title": "Interfaces ERP et gestion d'entrepôt non prêtes pour Entrepôts connectés",
              "event": "Les interfaces stocks, commandes et expéditions entre le nouvel ERP et le système de gestion d'entrepôt ne sont pas livrées à temps.",
              "objective": "Livrer les interfaces au programme Entrepôts connectés avant juin 2027.",
              "raisedAt": "2026-01-20",
              "raisedBy": "Olivier Masson",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2027-03-31",
              "milestone": "Livraison des interfaces au programme Entrepôts connectés",
              "impactAxes": {
                "cost": 2,
                "delay": 4,
                "quality": 3,
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
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Olivier Masson",
              "causes": [
                "24 flux à réécrire vers le nouvel ERP",
                "Équipes ERP et entrepôts dans deux programmes distincts",
                "Formats de messages de l'ancien système non documentés"
              ],
              "consequences": [
                {
                  "texte": "Entrepôts connectés démarre sans données de stock fiables",
                  "chiffrage": "≈ 180 k€ de contournements"
                },
                {
                  "texte": "Retard du déploiement des entrepôts pilotes",
                  "chiffrage": "2 à 3 mois"
                }
              ],
              "mesures": [
                {
                  "texte": "Publier un contrat d'interface par flux (stocks, commandes, expéditions).",
                  "porteur": "Olivier Masson",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Mettre à disposition un bouchon de test partagé avec Entrepôts connectés.",
                  "porteur": "Olivier Masson",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Tenir un point hebdomadaire d'interface avec le programme Entrepôts connectés.",
                  "porteur": "Nadia Benali",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Olivier Masson",
                  "texte": "Bouchon de test livré : Entrepôts connectés peut tester sans attendre l'ERP, impact ramené à 3."
                }
              ],
              "liens": [
                {
                  "libelle": "Catalogue des interfaces ERP",
                  "url": "https://intranet.valmeris.example/socle/architecture/catalogue-interfaces"
                }
              ],
              "cout": {
                "min": 60000,
                "probable": 180000,
                "max": 400000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-2-3",
                  "nom": "Interfaces en retard sur le plan",
                  "unite": "interfaces",
                  "sens": "hausse",
                  "alerte": 3,
                  "critique": 6,
                  "releves": [
                    {
                      "date": "2026-02-28",
                      "valeur": 1,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 2,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 2,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 3,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 3,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 2,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 2,
                      "auteur": "Olivier Masson"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 2,
                      "auteur": "Olivier Masson"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-proj-erp",
              "affectedComponentIds": [
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Migration ERP, suivi avec le programme Entrepôts connectés qui dépend de l'ERP.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-2-4",
              "id": "2.4",
              "title": "Facturation électronique portée par le nouvel ERP",
              "event": "Le nouvel ERP et la plateforme de données couvrent l'émission des factures électroniques sans outil supplémentaire.",
              "objective": "Respecter l'obligation de facturation électronique au moindre coût et réduire le délai de paiement client.",
              "raisedAt": "2026-06-10",
              "raisedBy": "Pierre-Yves Tanguy",
              "kind": "opportunity",
              "lifecycle": "active",
              "proximityDate": "2027-03-31",
              "milestone": "Choix de la plateforme de dématérialisation partenaire",
              "impactAxes": {
                "cost": 2,
                "delay": 0,
                "quality": 2,
                "service": 2,
                "benefit": 3
              },
              "assessmentBefore": [
                2,
                2
              ],
              "assessmentCurrent": [
                3,
                2
              ],
              "assessmentAfter": [
                4,
                2
              ],
              "assessmentTarget": [
                4,
                2
              ],
              "traitement": "exploit",
              "velocite": 1,
              "statut": "statusInProgress",
              "responsable": "Pierre-Yves Tanguy",
              "causes": [
                "Module de facturation électronique inclus dans la licence ERP",
                "Référentiel clients unifié dans la plateforme de données",
                "Obligation réglementaire qui impose de toute façon un projet"
              ],
              "consequences": [
                {
                  "texte": "Achat d'une solution tierce évité",
                  "chiffrage": "≈ 80 k€"
                },
                {
                  "texte": "Délai moyen de paiement client réduit",
                  "chiffrage": "≈ 3 jours"
                }
              ],
              "mesures": [
                {
                  "texte": "Vérifier la couverture fonctionnelle du module ERP de facturation électronique.",
                  "porteur": "Pierre-Yves Tanguy",
                  "echeance": "31/07/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Intégrer le flux de facturation électronique à la recette de la version 1.",
                  "porteur": "Julien Carré",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Sélectionner la plateforme de dématérialisation partenaire.",
                  "porteur": "Antoine Lefebvre",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Pierre-Yves Tanguy",
                  "texte": "Opportunité : prévision supérieure à l'inhérent par construction (on cherche à rendre le gain plus probable). Chiffrage = coût évité."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Pierre-Yves Tanguy",
                  "texte": "Module validé en atelier : probabilité portée à 3."
                }
              ],
              "liens": [
                {
                  "libelle": "Note de cadrage facturation électronique",
                  "url": "https://intranet.valmeris.example/finance/facturation-electronique/cadrage"
                }
              ],
              "cout": {
                "min": 30000,
                "probable": 80000,
                "max": 95000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-proj-erp",
              "affectedComponentIds": [
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Opportunité repérée par la Direction financière lors des ateliers facturation.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-3-1",
              "id": "3.1",
              "title": "Retard de la plateforme de données pour les programmes clients et entrepôts",
              "event": "La plateforme de données commune n'est pas ouverte en mars 2027 aux programmes Relation client omnicanale et Entrepôts connectés.",
              "objective": "Fournir un référentiel de données commun aux trois programmes du portefeuille Transformation Valmeris.",
              "raisedAt": "2026-01-12",
              "raisedBy": "Sophie Delorme",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-12-31",
              "milestone": "Ouverture de la plateforme aux programmes du portefeuille",
              "impactAxes": {
                "cost": 3,
                "delay": 5,
                "quality": 2,
                "service": 3,
                "benefit": 5
              },
              "assessmentBefore": [
                4,
                4
              ],
              "assessmentCurrent": [
                4,
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
              "traitement": "escalate",
              "velocite": 3,
              "statut": "statusInProgress",
              "responsable": "Nadia Benali",
              "causes": [
                "Ingénieurs de données difficiles à recruter",
                "Référentiels ERP disponibles plus tard que prévu",
                "Besoins des programmes clients et entrepôts précisés tardivement",
                "Lots livrés dans l'ordre technique plutôt que métier"
              ],
              "consequences": [
                {
                  "texte": "Relation client omnicanale sans vue client unique au lancement",
                  "chiffrage": "≈ 250 k€ de solutions provisoires"
                },
                {
                  "texte": "Entrepôts connectés sans tableau de bord des stocks",
                  "chiffrage": "3 à 4 mois de retard"
                },
                {
                  "texte": "Bénéfice « référentiel unique » reporté",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Financer deux ingénieurs de données sur la réserve programme.",
                  "porteur": "Nadia Benali",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "Deux ingénieurs en poste le 13/04/2026.",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Livrer en priorité le domaine « stocks » attendu par Entrepôts connectés.",
                  "porteur": "Sophie Delorme",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Proposer au portefeuille un décalage coordonné des jalons des programmes clients et entrepôts.",
                  "porteur": "Nadia Benali",
                  "echeance": "15/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 1
                },
                {
                  "texte": "Ouvrir un accès provisoire par extractions quotidiennes en cas de retard.",
                  "porteur": "Sophie Delorme",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-03-24",
                  "auteur": "Bertrand Lesage",
                  "texte": "Risque repris au niveau programme : il dépasse le périmètre du projet Plateforme de données."
                },
                {
                  "date": "2026-06-16",
                  "auteur": "Sophie Delorme",
                  "texte": "Renforts en poste : probabilité ramenée à 3."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Nadia Benali",
                  "texte": "Remontée à P4 : 9 semaines de retard cumulé (KRI critique). Escalade au comité de portefeuille."
                }
              ],
              "liens": [
                {
                  "libelle": "Feuille de route de la plateforme de données",
                  "url": "https://intranet.valmeris.example/socle/data/feuille-de-route"
                },
                {
                  "libelle": "Demande d'arbitrage au portefeuille",
                  "url": "https://intranet.valmeris.example/portefeuille/arbitrages/2026-09-plateforme-donnees"
                }
              ],
              "cout": {
                "min": 80000,
                "probable": 250000,
                "max": 450000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-3-1",
                  "nom": "Retard cumulé des lots de la plateforme",
                  "unite": "semaines",
                  "sens": "hausse",
                  "alerte": 4,
                  "critique": 8,
                  "releves": [
                    {
                      "date": "2026-01-31",
                      "valeur": 1,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-02-28",
                      "valeur": 2,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 3,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 3,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 3,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 4,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 6,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 8,
                      "auteur": "Sophie Delorme"
                    },
                    {
                      "date": "2026-09-20",
                      "valeur": 9,
                      "auteur": "Sophie Delorme"
                    }
                  ]
                }
              ],
              "decisions": [
                {
                  "id": "si-dec-3-1",
                  "date": "2026-03-24",
                  "author": "Bertrand Lesage",
                  "type": "moreAction",
                  "reason": "Reprendre le risque au niveau programme et financer deux ingénieurs de données.",
                  "reviewDate": "2026-06-16",
                  "scoreAtDecision": 16
                }
              ],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-10-15",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "si-proj-data",
                "si-proj-erp"
              ],
              "programOrigin": "escalation",
              "programOriginNote": "Escaladé par le projet Plateforme de données le 24/03/2026 : deux autres programmes du portefeuille en dépendent.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "si-3-2",
              "id": "3.2",
              "title": "Gouvernance des données non adoptée par les directions",
              "event": "Les directions ne nomment pas de responsables de données et gardent des définitions divergentes des indicateurs.",
              "objective": "Disposer d'indicateurs de pilotage uniques et partagés par toutes les directions.",
              "raisedAt": "2025-11-18",
              "raisedBy": "Sophie Delorme",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2027-01-31",
              "milestone": "Premier tableau de bord groupe issu de la plateforme",
              "impactAxes": {
                "cost": 1,
                "delay": 1,
                "quality": 4,
                "service": 1,
                "benefit": 4
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
              "velocite": 1,
              "statut": "statusInProgress",
              "responsable": "Sophie Delorme",
              "causes": [
                "Chaque direction calcule ses propres indicateurs",
                "Rôle de responsable de données inconnu dans le groupe",
                "Aucune instance pour trancher les définitions"
              ],
              "consequences": [
                {
                  "texte": "Chiffres contradictoires en comité de direction",
                  "chiffrage": "non chiffré"
                },
                {
                  "texte": "Retraitements manuels des indicateurs",
                  "chiffrage": "≈ 60 k€ par an"
                }
              ],
              "mesures": [
                {
                  "texte": "Adopter un glossaire commun des 120 indicateurs clés.",
                  "porteur": "Sophie Delorme",
                  "echeance": "31/05/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Nommer un responsable de données dans chaque direction.",
                  "porteur": "Nadia Benali",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Animer un comité données mensuel avec la Direction commerciale et le Service client.",
                  "porteur": "Laure Perrin",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Sophie Delorme",
                  "texte": "Dix directions sur dix ont nommé leur responsable de données : probabilité à 2."
                }
              ],
              "liens": [
                {
                  "libelle": "Glossaire des indicateurs groupe",
                  "url": "https://intranet.valmeris.example/socle/data/glossaire"
                }
              ],
              "cout": {
                "min": 20000,
                "probable": 60000,
                "max": 95000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-proj-data",
              "affectedComponentIds": [],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Plateforme de données.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-3-3",
              "id": "3.3",
              "title": "Plateforme de données propriétaire et non réversible",
              "event": "La solution retenue enferme les données dans un format propriétaire sans possibilité de sortie.",
              "objective": "Garder la maîtrise des données du groupe et la liberté de changer de fournisseur.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Olivier Masson",
              "kind": "threat",
              "lifecycle": "closed",
              "lifeDate": "2026-05-12",
              "lifeReason": "Solution retenue sur formats ouverts et clause de réversibilité signée : risque sans objet.",
              "proximityDate": "2026-05-15",
              "milestone": "Signature du contrat de la plateforme de données",
              "impactAxes": {
                "cost": 2,
                "delay": 1,
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
                2
              ],
              "assessmentAfter": [
                1,
                2
              ],
              "assessmentTarget": [
                1,
                2
              ],
              "traitement": "avoid",
              "velocite": 1,
              "statut": "statusTreated",
              "responsable": "Olivier Masson",
              "causes": [
                "Offres du marché fondées sur des formats fermés",
                "Coût de sortie absent des critères de choix",
                "Pression pour choisir vite"
              ],
              "consequences": [
                {
                  "texte": "Coût de sortie élevé en fin de contrat",
                  "chiffrage": "≈ 40 k€ de reprise"
                },
                {
                  "texte": "Dépendance tarifaire au fournisseur",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Ajouter la réversibilité et les formats ouverts aux critères de choix.",
                  "porteur": "Olivier Masson",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 5
                },
                {
                  "texte": "Tester un export complet des données avant la signature du contrat.",
                  "porteur": "Sophie Delorme",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Faire signer une clause de réversibilité avec restitution des données.",
                  "porteur": "Claire Vasseur",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "Contrat signé le 12/05/2026, article 14.",
                  "barriere": "protection",
                  "efficacite": 4
                }
              ],
              "notes": [
                {
                  "date": "2026-05-12",
                  "auteur": "Olivier Masson",
                  "texte": "Contrat signé avec formats ouverts et clause de réversibilité : risque clos."
                }
              ],
              "liens": [
                {
                  "libelle": "Contrat plateforme de données (article 14)",
                  "url": "https://intranet.valmeris.example/juridique/contrats/plateforme-donnees"
                }
              ],
              "cout": {
                "min": 10000,
                "probable": 40000,
                "max": 90000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [],
              "decisions": [],
              "revuLe": "2026-06-16",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-proj-data",
              "affectedComponentIds": [],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Plateforme de données, clos à la signature du contrat.",
              "currentNeedsReview": false,
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-4-1",
              "id": "4.1",
              "title": "Compromission de comptes par hameçonnage",
              "event": "Des attaquants obtiennent des identifiants de salariés par hameçonnage et accèdent à la messagerie et aux applications.",
              "objective": "Protéger les identités des 4 200 salariés avant la bascule cloud des applications.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Karim Haddad",
              "kind": "threat",
              "lifecycle": "materialized",
              "lifeDate": "2026-07-08",
              "lifeReason": "Incident de sécurité déclaré le 08/07/2026 (site de Vénissieux).",
              "issue": {
                "description": "14 comptes du site de Vénissieux compromis par hameçonnage le 08/07/2026 ; messagerie coupée 6 h, aucune fuite de données avérée. Actions post-incident en cours.",
                "owner": "Karim Haddad",
                "status": "open"
              },
              "proximityDate": "2026-07-08",
              "milestone": "Généralisation de l'authentification multifacteur",
              "impactAxes": {
                "cost": 2,
                "delay": 1,
                "quality": 1,
                "service": 4,
                "benefit": 1
              },
              "assessmentBefore": [
                4,
                4
              ],
              "assessmentCurrent": [
                4,
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
              "velocite": 5,
              "statut": "statusInProgress",
              "responsable": "Karim Haddad",
              "causes": [
                "Authentification par simple mot de passe hors messagerie",
                "Salariés des sites peu sensibilisés",
                "Comptes partagés dans les entrepôts",
                "Campagnes d'hameçonnage ciblant la logistique"
              ],
              "consequences": [
                {
                  "texte": "Interruption de la messagerie et des applications",
                  "chiffrage": "≈ 20 k€ par heure sur un site"
                },
                {
                  "texte": "Fuite de données clients ou fournisseurs",
                  "chiffrage": "≈ 150 k€ de gestion de crise"
                },
                {
                  "texte": "Notification à l'autorité de contrôle",
                  "chiffrage": "sous 72 h"
                }
              ],
              "mesures": [
                {
                  "texte": "Déployer l'authentification multifacteur sur la messagerie.",
                  "porteur": "Fatou Diallo",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Étendre l'authentification multifacteur aux 38 sites et aux accès distants.",
                  "porteur": "Fatou Diallo",
                  "echeance": "31/08/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Mener une campagne de sensibilisation trimestrielle sur tous les sites.",
                  "porteur": "Thomas Guérin",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Isoler automatiquement les comptes suspects (détection et réponse).",
                  "porteur": "Karim Haddad",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-07-08",
                  "auteur": "Karim Haddad",
                  "texte": "Risque survenu : 14 comptes compromis à Vénissieux, messagerie coupée 6 h. Cellule de crise activée."
                },
                {
                  "date": "2026-07-20",
                  "auteur": "Karim Haddad",
                  "texte": "Retour d'expérience : les comptes protégés par authentification multifacteur n'ont pas été touchés ; impact contenu à 3."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Fatou Diallo",
                  "texte": "Authentification multifacteur à 64 % des comptes : extension aux 38 sites en retard sur l'échéance du 31/08."
                }
              ],
              "liens": [
                {
                  "libelle": "Rapport d'incident du 08/07/2026",
                  "url": "https://intranet.valmeris.example/rssi/incidents/2026-07-08"
                },
                {
                  "libelle": "Plan de déploiement de l'authentification multifacteur",
                  "url": "https://intranet.valmeris.example/rssi/identites/plan-mfa"
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 150000,
                "max": 400000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-4-1",
                  "nom": "Taux de clic aux campagnes d'hameçonnage simulées",
                  "unite": "%",
                  "sens": "hausse",
                  "alerte": 8,
                  "critique": 15,
                  "releves": [
                    {
                      "date": "2026-02-28",
                      "valeur": 18,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 16,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 13,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 12,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 11,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 17,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 10,
                      "auteur": "Fatou Diallo"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 9,
                      "auteur": "Fatou Diallo"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-10-15",
              "scopeLevel": "component",
              "componentId": "si-proj-cyber",
              "affectedComponentIds": [
                "si-proj-cloud"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Cybersécurité et identités ; l'annuaire d'identités sert aussi le programme Relation client.",
              "currentNeedsReview": false,
              "transferOwner": ""
            },
            {
              "uid": "si-4-2",
              "id": "4.2",
              "title": "Rançongiciel sur l'ancien ERP avant sa décommission",
              "event": "Un rançongiciel chiffre les serveurs de l'ancien ERP, hors support, pendant la période de double fonctionnement.",
              "objective": "Assurer la continuité des commandes, des stocks et de la comptabilité jusqu'à la décommission de l'ancien ERP.",
              "raisedAt": "2025-11-18",
              "raisedBy": "Karim Haddad",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2027-03-31",
              "milestone": "Décommission de l'ancien ERP",
              "impactAxes": {
                "cost": 4,
                "delay": 2,
                "quality": 2,
                "service": 5,
                "benefit": 2
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
                1,
                4
              ],
              "traitement": "reduce",
              "velocite": 5,
              "statut": "statusInProgress",
              "responsable": "Karim Haddad",
              "causes": [
                "Système d'exploitation de l'ancien ERP hors support depuis 2024",
                "Correctifs critiques impossibles sur certains serveurs",
                "Réseau à plat entre sites et centre de données"
              ],
              "consequences": [
                {
                  "texte": "Arrêt des commandes et des expéditions",
                  "chiffrage": "≈ 250 k€ par jour"
                },
                {
                  "texte": "Reconstruction des serveurs et restauration",
                  "chiffrage": "≈ 600 k€"
                },
                {
                  "texte": "Atteinte à l'image auprès des clients distributeurs",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Segmenter le réseau de l'ancien ERP.",
                  "porteur": "Karim Haddad",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Mettre en place des sauvegardes hors ligne immuables testées chaque mois.",
                  "porteur": "Élodie Fournier",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Restauration complète testée le 24/06/2026 en 9 h.",
                  "barriere": "protection",
                  "efficacite": 4
                },
                {
                  "texte": "Appliquer les correctifs critiques restants ou isoler les serveurs concernés.",
                  "porteur": "Karim Haddad",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Organiser un exercice de crise rançongiciel avec le comité de direction.",
                  "porteur": "Karim Haddad",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Karim Haddad",
                  "texte": "Sauvegardes immuables testées : restauration en 9 h, impact ramené à 4."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Karim Haddad",
                  "texte": "Au-delà de la tolérance du projet (12 > 8) tant que 7 vulnérabilités critiques restent ouvertes."
                }
              ],
              "liens": [
                {
                  "libelle": "Analyse de risques de l'ancien ERP",
                  "url": "https://intranet.valmeris.example/rssi/analyses/ancien-erp"
                }
              ],
              "cout": {
                "min": 150000,
                "probable": 550000,
                "max": 1300000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-4-2",
                  "nom": "Vulnérabilités critiques ouvertes sur l'ancien ERP",
                  "unite": "vulnérabilités",
                  "sens": "hausse",
                  "alerte": 5,
                  "critique": 10,
                  "releves": [
                    {
                      "date": "2026-02-28",
                      "valeur": 16,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 14,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 13,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 11,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 9,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 8,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 8,
                      "auteur": "Karim Haddad"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 7,
                      "auteur": "Karim Haddad"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-10-15",
              "scopeLevel": "component",
              "componentId": "si-proj-cyber",
              "affectedComponentIds": [
                "si-proj-erp",
                "si-proj-cloud"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Cybersécurité et identités ; il pèse sur la Migration ERP et la Bascule cloud.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-4-3",
              "id": "4.3",
              "title": "Interruption de service pendant la bascule cloud des applications",
              "event": "Une application critique, comme la gestion du transport, reste indisponible plus de 4 heures lors de sa bascule dans le cloud.",
              "objective": "Basculer 60 applications dans le cloud sans interruption visible pour les sites et les clients.",
              "raisedAt": "2026-03-10",
              "raisedBy": "Élodie Fournier",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-11-14",
              "milestone": "Vague 3 de bascule (transport et quais)",
              "impactAxes": {
                "cost": 2,
                "delay": 2,
                "quality": 1,
                "service": 5,
                "benefit": 1
              },
              "assessmentBefore": [
                3,
                4
              ],
              "assessmentCurrent": [
                2,
                4
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
              "velocite": 5,
              "statut": "statusInProgress",
              "responsable": "Élodie Fournier",
              "causes": [
                "Dépendances entre applications mal connues",
                "Fenêtres de bascule courtes (activité 6 jours sur 7)",
                "Retour arrière jamais testé sur les applications anciennes"
              ],
              "consequences": [
                {
                  "texte": "Camions bloqués à quai faute d'étiquettes de transport",
                  "chiffrage": "≈ 40 k€ par heure"
                },
                {
                  "texte": "Pénalités de retard envers les clients distributeurs",
                  "chiffrage": "≈ 150 k€ par incident majeur"
                }
              ],
              "mesures": [
                {
                  "texte": "Basculer par vagues, hors pics saisonniers.",
                  "porteur": "Élodie Fournier",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Répéter chaque bascule sur un environnement miroir.",
                  "porteur": "Élodie Fournier",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Tester un retour arrière en moins de 2 heures pour chaque application critique.",
                  "porteur": "Olivier Masson",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Élodie Fournier",
                  "texte": "Vagues 1 et 2 basculées sans incident : probabilité à 2. L'impact baissera une fois le retour arrière testé."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de vagues de bascule cloud",
                  "url": "https://intranet.valmeris.example/socle/cloud/plan-vagues"
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 150000,
                "max": 350000,
                "probabilite": null,
                "sansProtection": 300000
              },
              "kri": [],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-11-01",
              "scopeLevel": "component",
              "componentId": "si-proj-cloud",
              "affectedComponentIds": [
                "si-proj-cyber"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Bascule cloud des applications ; dépend de l'annuaire d'identités du projet Cybersécurité.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-5-1",
              "id": "5.1",
              "title": "Rejet du nouvel ERP par les équipes d'entrepôt et de comptabilité",
              "event": "Les utilisateurs contournent le nouvel ERP (fichiers parallèles, ressaisies) faute d'adhésion ou de formation.",
              "objective": "Atteindre l'usage effectif du nouvel ERP sur les 38 sites dans les trois mois suivant la bascule.",
              "raisedAt": "2026-01-20",
              "raisedBy": "Thomas Guérin",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2027-01-15",
              "milestone": "Démarrage des sites sur le nouvel ERP",
              "impactAxes": {
                "cost": 2,
                "delay": 2,
                "quality": 3,
                "service": 3,
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
                2
              ],
              "traitement": "reduce",
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Thomas Guérin",
              "causes": [
                "Écrans plus riches mais plus longs à saisir",
                "Formation concentrée sur quelques semaines",
                "Crainte d'une réorganisation des postes administratifs",
                "Relais métiers peu disponibles en haute saison"
              ],
              "consequences": [
                {
                  "texte": "Ressaisies et fichiers parallèles",
                  "chiffrage": "≈ 120 k€ de productivité perdue la première année"
                },
                {
                  "texte": "Données de la plateforme alimentées par des saisies incomplètes",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Constituer un réseau de 60 relais métiers sur les 38 sites.",
                  "porteur": "Thomas Guérin",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Associer les représentants du personnel au calendrier de déploiement.",
                  "porteur": "Isabelle Roche",
                  "echeance": "31/05/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Former les formateurs internes des entrepôts.",
                  "porteur": "Thomas Guérin",
                  "echeance": "15/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Mesurer l'adhésion par une enquête après chaque vague de démarrage.",
                  "porteur": "Isabelle Roche",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Thomas Guérin",
                  "texte": "Réseau de relais complet et instances du personnel informées : impact ramené à 3."
                },
                {
                  "date": "2026-09-22",
                  "auteur": "Thomas Guérin",
                  "texte": "Satisfaction des utilisateurs pilotes à 7,2/10, en hausse continue depuis mars."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de conduite du changement",
                  "url": "https://intranet.valmeris.example/socle/changement/plan"
                }
              ],
              "cout": {
                "min": 40000,
                "probable": 120000,
                "max": 300000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-5-1",
                  "nom": "Satisfaction des utilisateurs pilotes",
                  "unite": "/10",
                  "sens": "baisse",
                  "alerte": 6.5,
                  "critique": 5.5,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 5.2,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 5.8,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 6.1,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 6.6,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 6.8,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 6.9,
                      "auteur": "Thomas Guérin"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 7.2,
                      "auteur": "Thomas Guérin"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-work-change",
              "affectedComponentIds": [
                "si-proj-erp",
                "si-proj-data"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du chantier transverse Conduite du changement.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-5-2",
              "id": "5.2",
              "title": "Perte des derniers experts de l'ancien ERP",
              "event": "Les deux derniers experts de l'ancien ERP quittent le groupe avant la décommission.",
              "objective": "Maintenir l'ancien ERP en conditions opérationnelles jusqu'à sa décommission en 2027.",
              "raisedAt": "2026-01-20",
              "raisedBy": "Julien Carré",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2027-03-31",
              "milestone": "Décommission de l'ancien ERP",
              "impactAxes": {
                "cost": 2,
                "delay": 3,
                "quality": 2,
                "service": 3,
                "benefit": 1
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
                3,
                3
              ],
              "assessmentTarget": [
                3,
                3
              ],
              "traitement": "accept",
              "velocite": 3,
              "statut": "statusAccepted",
              "responsable": "Julien Carré",
              "causes": [
                "Deux experts proches de la retraite",
                "Compétence rare sur le marché",
                "Motivation faible à maintenir un système condamné"
              ],
              "consequences": [
                {
                  "texte": "Incident de l'ancien ERP non résolu pendant le double fonctionnement",
                  "chiffrage": "≈ 130 k€ d'appel à un prestataire spécialisé"
                },
                {
                  "texte": "Reprise des données retardée",
                  "chiffrage": "2 à 4 semaines"
                }
              ],
              "mesures": [
                {
                  "texte": "Accorder une prime de fidélisation jusqu'à la décommission.",
                  "porteur": "Isabelle Roche",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Documenter les procédures d'exploitation de l'ancien ERP.",
                  "porteur": "Julien Carré",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Procédures publiées sur l'intranet le 26/06/2026.",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Qualifier un prestataire spécialisé en binôme avec les experts.",
                  "porteur": "Antoine Lefebvre",
                  "echeance": "31/05/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                }
              ],
              "notes": [
                {
                  "date": "2026-06-16",
                  "auteur": "Nadia Benali",
                  "texte": "Mesures réalisées ; risque résiduel accepté jusqu'à la décommission (9 ≤ tolérance 10 du projet)."
                }
              ],
              "liens": [
                {
                  "libelle": "Procédures d'exploitation de l'ancien ERP",
                  "url": "https://intranet.valmeris.example/socle/erp/procedures-ancien-erp"
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 130000,
                "max": 250000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [],
              "decisions": [
                {
                  "id": "si-dec-5-2",
                  "date": "2026-06-16",
                  "author": "Nadia Benali",
                  "type": "accept",
                  "reason": "Mesures réalisées ; exposition résiduelle compatible avec la tolérance du projet jusqu'à la décommission.",
                  "reviewDate": "2026-12-15",
                  "scoreAtDecision": 9
                }
              ],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "component",
              "componentId": "si-proj-erp",
              "affectedComponentIds": [
                "si-proj-cyber"
              ],
              "programOrigin": "native",
              "programOriginNote": "Risque du projet Migration ERP ; les correctifs de l'ancien ERP intéressent aussi la cybersécurité.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "si-5-3",
              "id": "5.3",
              "title": "Non-conformité des données personnelles centralisées",
              "event": "La centralisation des données clients et salariés dans la plateforme ne respecte pas le règlement sur la protection des données.",
              "objective": "Ouvrir la plateforme de données au programme Relation client omnicanale en conformité avec le RGPD.",
              "raisedAt": "2026-01-20",
              "raisedBy": "Claire Vasseur",
              "kind": "threat",
              "lifecycle": "active",
              "proximityDate": "2026-12-15",
              "milestone": "Ouverture de la plateforme au programme Relation client",
              "impactAxes": {
                "cost": 3,
                "delay": 2,
                "quality": 1,
                "service": 2,
                "benefit": 3
              },
              "assessmentBefore": [
                3,
                4
              ],
              "assessmentCurrent": [
                2,
                4
              ],
              "assessmentAfter": [
                2,
                3
              ],
              "assessmentTarget": [
                1,
                3
              ],
              "traitement": "reduce",
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Claire Vasseur",
              "causes": [
                "Données clients de plusieurs canaux fusionnées",
                "Finalités de traitement mal documentées",
                "Données réelles copiées dans les environnements de test"
              ],
              "consequences": [
                {
                  "texte": "Sanction de l'autorité de contrôle",
                  "chiffrage": "jusqu'à 4 % du chiffre d'affaires"
                },
                {
                  "texte": "Mise en conformité dans l'urgence",
                  "chiffrage": "≈ 200 k€"
                },
                {
                  "texte": "Report de l'ouverture au programme Relation client",
                  "chiffrage": "2 mois"
                }
              ],
              "mesures": [
                {
                  "texte": "Inscrire au registre tous les traitements de la plateforme de données.",
                  "porteur": "Claire Vasseur",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Pseudonymiser les données clients dans les environnements de test.",
                  "porteur": "Sophie Delorme",
                  "echeance": "31/05/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Réaliser l'analyse d'impact sur le référentiel clients unifié.",
                  "porteur": "Claire Vasseur",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-01-20",
                  "auteur": "Claire Vasseur",
                  "texte": "Exigence reçue du comité de portefeuille, commune aux trois programmes."
                },
                {
                  "date": "2026-06-16",
                  "auteur": "Claire Vasseur",
                  "texte": "Registre à jour et tests pseudonymisés : probabilité à 2. L'analyse d'impact fera baisser l'impact."
                }
              ],
              "liens": [
                {
                  "libelle": "Registre des traitements du groupe",
                  "url": "https://intranet.valmeris.example/juridique/rgpd/registre"
                },
                {
                  "libelle": "Analyse d'impact référentiel clients",
                  "url": "https://intranet.valmeris.example/juridique/rgpd/aipd-referentiel-clients"
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 200000,
                "max": 450000,
                "probabilite": null,
                "sansProtection": null
              },
              "kri": [
                {
                  "id": "kri-si-5-3",
                  "nom": "Traitements de données personnelles absents du registre",
                  "unite": "traitements",
                  "sens": "hausse",
                  "alerte": 5,
                  "critique": 10,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 23,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 17,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 12,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 9,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 6,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 4,
                      "auteur": "Claire Vasseur"
                    },
                    {
                      "date": "2026-09-21",
                      "valeur": 3,
                      "auteur": "Claire Vasseur"
                    }
                  ]
                }
              ],
              "decisions": [],
              "revuLe": "2026-09-22",
              "prochaineRevue": "2026-12-15",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "si-proj-data",
                "si-proj-cyber"
              ],
              "programOrigin": "cascade",
              "programOriginNote": "Descendu du portefeuille le 20/01/2026 : exigence commune de conformité des données personnelles aux trois programmes.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            }
          ],
          "riskGroups": [
            {
              "id": 1,
              "name": "Gouvernance, budget et ressources",
              "description": "Enveloppe financière, arbitrages, disponibilité des experts métiers et leviers d'achat mutualisés.",
              "assessmentNote": "La réserve se consomme plus vite que prévu et les experts métiers restent très sollicités : le budget dépasse l'appétence du programme.",
              "remediationNote": "Suivi mensuel du reste à faire, comité d'arbitrage des changements, libération planifiée des experts et contrat cloud mutualisé à l'échelle du portefeuille.",
              "color": "#2E86C1",
              "mesures": [],
              "riskIds": [
                "1.1",
                "1.2",
                "1.3"
              ]
            },
            {
              "id": 2,
              "name": "ERP et processus",
              "description": "Reprise des données, bascule du nouvel ERP, interfaces avec les entrepôts et facturation électronique.",
              "assessmentNote": "La bascule ERP concentre l'exposition la plus forte : recette en retard et données encore imparfaites menacent le démarrage au 1er janvier 2027.",
              "remediationNote": "Périmètre gelé, recette renforcée, contrôles automatiques de qualité des données et scénario de repli au 1er avril 2027.",
              "color": "#E67E22",
              "mesures": [],
              "riskIds": [
                "2.1",
                "2.2",
                "2.3",
                "2.4"
              ]
            },
            {
              "id": 3,
              "name": "Données et intégration",
              "description": "Plateforme de données commune, gouvernance des données et réversibilité des choix techniques.",
              "assessmentNote": "La plateforme de données conditionne deux autres programmes du portefeuille ; son retard cumulé justifie une escalade au comité de portefeuille.",
              "remediationNote": "Renfort d'ingénieurs données, livraison prioritaire du domaine stocks, responsables de données nommés et formats ouverts contractualisés.",
              "color": "#8E44AD",
              "mesures": [],
              "riskIds": [
                "3.1",
                "3.2",
                "3.3"
              ]
            },
            {
              "id": 4,
              "name": "Cybersécurité et infrastructures",
              "description": "Identités, protection contre les attaques, ancien ERP hors support et bascule cloud des applications.",
              "assessmentNote": "L'hameçonnage réussi de juillet confirme la menace ; l'ancien ERP hors support reste exposé jusqu'à sa décommission.",
              "remediationNote": "Authentification multifacteur généralisée, segmentation réseau, sauvegardes immuables, exercices de crise et bascules cloud répétées avec retour arrière.",
              "color": "#C0392B",
              "mesures": [],
              "riskIds": [
                "4.1",
                "4.2",
                "4.3"
              ]
            },
            {
              "id": 5,
              "name": "Humain, compétences et conformité",
              "description": "Adoption par les équipes, compétences sur l'ancien système et protection des données personnelles.",
              "assessmentNote": "L'adhésion des entrepôts et de la comptabilité progresse ; la conformité des données clients centralisées attend encore son analyse d'impact.",
              "remediationNote": "Réseau de relais métiers, fidélisation des experts de l'ancien ERP, registre des traitements à jour et pseudonymisation des environnements de test.",
              "color": "#27AE60",
              "mesures": [],
              "riskIds": [
                "5.1",
                "5.2",
                "5.3"
              ]
            }
          ]
        }
      },
      {
        "uid": "ent-programme",
        "code": "EC",
        "importedAt": "2026-09-27T09:57:52.943Z",
        "source": "programme-entrepots/riskr-data.js",
        "data": {
          "program": {
            "uid": "ent-programme",
            "title": "Entrepôts connectés",
            "objective": "Automatiser les plateformes de Saint-Priest, Cestas et Lesquin, déployer un nouveau WMS, connecter la flotte de chariots et réduire de 20 % la consommation d'énergie des entrepôts d'ici 2028 (budget ≈ 14 M€).",
            "sponsor": "Régine Faure",
            "manager": "Olivier Marchetti",
            "status": "active",
            "appetite": 9,
            "reserve": 700000,
            "closedAt": "",
            "closureReason": "",
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
                "decisionReason": "",
                "scoreAtDecision": null
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
            "echelleImpact": [
              50000,
              200000,
              1000000,
              3000000
            ],
            "effetVelocite": "discret",
            "cadenceRevue": 90,
            "riskAppetite": 9,
            "templates": []
          },
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
                  "verification": "Plan de prévention signé par l'intégrateur le 28/01/2026.",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Tester barrières immatérielles et arrêts d'urgence à chaque réception de zone.",
                  "porteur": "Samira Ouali",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Former et habiliter les 180 préparateurs et intérimaires à la zone robotisée.",
                  "porteur": "Pauline Chevalier",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Rédiger le plan d'intervention des secours et organiser un exercice sur site.",
                  "porteur": "Bastien Morel",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 2500000,
                "probabilite": null,
                "sansProtection": null
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
              "programOriginNote": "Identifié lors de l'analyse de risques machine du cahier des charges de Saint-Priest.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "Planning travaux révisé, validé en comité du 30/06/2026.",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Contractualiser le débord vers Cestas et un prestataire logistique externe.",
                  "porteur": "Karim Haddad",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Recruter 120 intérimaires formés avant le 1er novembre.",
                  "porteur": "Élodie Garnier",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Activer une cellule de pilotage quotidienne du pic avec la Relation client.",
                  "porteur": "Bastien Morel",
                  "echeance": "15/11/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 2000000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-10-20",
              "programOrigin": "native",
              "programOriginNote": "Risque transverse au programme : touche Saint-Priest, les équipes et, en aval, la Relation client omnicanale.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
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
                  "verification": "Procès-verbal de réception du 24/06/2026.",
                  "barriere": "protection",
                  "efficacite": 4
                },
                {
                  "texte": "Mettre en quarantaine toute batterie ayant subi un choc.",
                  "porteur": "Mathilde Perrin",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Installer une détection thermique par caméra dans le local de charge.",
                  "porteur": "Sophie Nguyen",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Faire valider l'installation par l'assureur du groupe.",
                  "porteur": "Lucie Fabre",
                  "echeance": "31/12/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 3000000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Ajouté après la visite de l'assureur de février 2026 sur les nouveaux locaux de charge.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "Garantie reçue le 19/02/2026.",
                  "barriere": "protection",
                  "efficacite": 4
                },
                {
                  "texte": "Inscrire des clauses de pénalités et de réversibilité des programmes automates.",
                  "porteur": "Lucie Fabre",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Suivre chaque mois les effectifs sur site et la santé financière de l'intégrateur.",
                  "porteur": "Karim Haddad",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Qualifier un second intégrateur pour Cestas et Lesquin.",
                  "porteur": "Karim Haddad",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 1200000,
                "probabilite": null,
                "sansProtection": null
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
              "programOriginNote": "Identifié à l'analyse des offres : intégrateur de taille moyenne très sollicité.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Auditer l'usine du fabricant et son sous-traitant de motorisations.",
                  "porteur": "Karim Haddad",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Rapport d'audit du 25/06/2026 : alerte sur le sous-traitant.",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Mettre en service Saint-Priest zone par zone pour limiter le décalage.",
                  "porteur": "Samira Ouali",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Louer des trieurs provisoires pour absorber le pic de fin d'année.",
                  "porteur": "Karim Haddad",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 1
                },
                {
                  "texte": "Appliquer les pénalités de retard prévues au marché.",
                  "porteur": "Lucie Fabre",
                  "echeance": "31/12/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 950000,
                "probabilite": null,
                "sansProtection": null
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
              "programOriginNote": "Identifié au lancement : fabricant unique pour les trieurs à haute cadence.",
              "currentNeedsReview": false,
              "lifeReason": "",
              "transferOwner": ""
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
                  "verification": "Bon de commande du 12/01/2026.",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Qualifier un boîtier de substitution d'un second fabricant.",
                  "porteur": "Sophie Nguyen",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Stocker les boîtiers livrés sur la plateforme de Lesquin.",
                  "porteur": "Sophie Nguyen",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
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
                "max": 400000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-06-30",
              "programOrigin": "native",
              "programOriginNote": "Identifié au lancement du projet flotte connectée.",
              "currentNeedsReview": false,
              "prochaineRevue": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "Convention signée le 27/03/2026.",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Tenir un comité d'arbitrage mensuel commun aux deux programmes.",
                  "porteur": "Olivier Marchetti",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Tester le WMS avec des simulateurs d'interface sans attendre l'ERP.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Préparer une interface provisoire avec l'ERP actuel en solution de repli.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 2200000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-10-15",
              "programOrigin": "native",
              "programOriginNote": "Dépendance inter-programmes : l'ERP et la plateforme de données sont livrés par le programme Socle numérique.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Nettoyer les 42 000 références articles.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "31/08/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Mesurer dimensions et poids au cubage automatique.",
                  "porteur": "Bastien Morel",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 1
                },
                {
                  "texte": "Réaliser deux reprises à blanc avant la bascule.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 800000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Identifié lors de l'étude de cadrage du WMS.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Inscrire des exigences de cybersécurité dans les contrats des intégrateurs.",
                  "porteur": "Lucie Fabre",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Segmenter les réseaux bureautiques et industriels (IT/OT).",
                  "porteur": "Antoine Delmas",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Tests d'intrusion du 22/06/2026 concluants.",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Superviser les flux industriels par le centre de sécurité du groupe.",
                  "porteur": "Antoine Delmas",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Organiser un exercice de crise rançongiciel avec Saint-Priest.",
                  "porteur": "Bastien Morel",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 3000000,
                "probabilite": null,
                "sansProtection": null
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
              "programOriginNote": "Décliné du risque cyber du portefeuille Transformation Valmeris, porté par le RSSI et le Socle numérique.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Publier les événements via la plateforme de données du Socle numérique.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Superviser la complétude des événements par site.",
                  "porteur": "Sophie Nguyen",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 190000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Demandé par le programme Relation client omnicanale, qui dépend de nos données de suivi.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Signer une convention de cofinancement entre les deux programmes.",
                  "porteur": "Olivier Marchetti",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Ouvrir un accès en lecture aux données de géolocalisation.",
                  "porteur": "Sophie Nguyen",
                  "echeance": "31/03/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 190000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Proposé lors d'un atelier commun avec le programme Relation client omnicanale.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Acheter à terme 70 % des volumes 2027.",
                  "porteur": "Claire Vasseur",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "Contrat signé le 18/06/2026.",
                  "barriere": "protection",
                  "efficacite": 4
                },
                {
                  "texte": "Mettre en place l'effacement des recharges en heures de pointe.",
                  "porteur": "Julien Roussel",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
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
                "max": 900000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Identifié par la Direction financière lors du chiffrage du dossier d'investissement.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Remplacer l'éclairage par des LED avec détection de présence.",
                  "porteur": "Julien Roussel",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Exiger la récupération d'énergie au freinage des navettes.",
                  "porteur": "Samira Ouali",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Piloter le chauffage par zone selon l'occupation.",
                  "porteur": "Julien Roussel",
                  "echeance": "31/03/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 800000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Identifié au cadrage : l'automatisation ajoute des consommations nouvelles.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "Dossier enregistré le 21/04/2026.",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Lancer l'appel d'offres des ombrières de Cestas.",
                  "porteur": "Karim Haddad",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Signer la convention d'autoconsommation collective.",
                  "porteur": "Lucie Fabre",
                  "echeance": "31/03/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 700000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Identifiée à la lecture de l'audit énergétique.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
                  "verification": "Accord signé le 26/03/2026 par trois organisations sur quatre.",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Mener l'information-consultation du CSE sur la phase 1.",
                  "porteur": "Élodie Garnier",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Réunir une commission paritaire de suivi chaque trimestre.",
                  "porteur": "Élodie Garnier",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Préparer un plan de continuité avec intérim et débord vers Cestas.",
                  "porteur": "Bastien Morel",
                  "echeance": "31/10/2026",
                  "etat": "todo",
                  "verification": "",
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
                "max": 1000000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "escalation",
              "programOriginNote": "Escaladé par le chantier Accompagnement des équipes : le risque touche les trois plateformes et relève du programme.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
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
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Former en situation sur un simulateur du WMS.",
                  "porteur": "Pauline Chevalier",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 1
                },
                {
                  "texte": "Prévoir une assistance renforcée quatre semaines après chaque bascule.",
                  "porteur": "Thomas Lefèvre",
                  "echeance": "28/02/2027",
                  "etat": "todo",
                  "verification": "",
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
                "max": 700000,
                "probabilite": null,
                "sansProtection": null
              },
              "decisions": [],
              "revuLe": "2026-09-15",
              "prochaineRevue": "2026-12-15",
              "programOrigin": "native",
              "programOriginNote": "Identifié par la Direction des ressources humaines au lancement.",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
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
              "mesures": [],
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
              "mesures": [],
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
              "mesures": [],
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
              "mesures": [],
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
              "mesures": [],
              "riskIds": [
                "5.1",
                "5.2"
              ]
            }
          ]
        }
      },
      {
        "uid": "cli-program",
        "code": "RC",
        "importedAt": "2026-09-27T09:57:52.988Z",
        "source": "programme-clients/riskr-data.js",
        "data": {
          "program": {
            "uid": "cli-program",
            "title": "Relation client omnicanale",
            "objective": "Un CRM unique, un portail client avec suivi des livraisons en temps réel, un centre de contact multicanal et un programme de fidélité pour porter le NPS de 21 à 40 d'ici fin 2027 (budget ≈ 6 M€).",
            "sponsor": "Nathalie Ferrand",
            "manager": "Hélène Rocher",
            "status": "active",
            "appetite": 9,
            "reserve": 300000,
            "closedAt": "",
            "closureReason": "",
            "components": [
              {
                "uid": "cli-proj-crm",
                "name": "CRM unique",
                "type": "project",
                "owner": "Sophie Garnier",
                "status": "active",
                "tolerance": 9,
                "reserve": 90000
              },
              {
                "uid": "cli-proj-portail",
                "name": "Portail et application client",
                "type": "project",
                "owner": "Karim Belkacem",
                "status": "active",
                "tolerance": 9,
                "reserve": 60000
              },
              {
                "uid": "cli-proj-contact",
                "name": "Centre de contact multicanal",
                "type": "project",
                "owner": "Élodie Rousseau",
                "status": "active",
                "tolerance": 9,
                "reserve": 50000
              },
              {
                "uid": "cli-proj-fidelite",
                "name": "Programme de fidélité",
                "type": "project",
                "owner": "Maxime Carrel",
                "status": "active",
                "tolerance": 8,
                "reserve": 30000
              },
              {
                "uid": "cli-work-conformite",
                "name": "Conformité et consentements",
                "type": "work",
                "owner": "Amandine Roux",
                "status": "active",
                "tolerance": 6,
                "reserve": 20000
              }
            ],
            "benefits": [
              {
                "uid": "cli-benefit-nps",
                "name": "Satisfaction client (NPS)",
                "owner": "Nathalie Ferrand",
                "unit": "points",
                "baseline": 21,
                "target": 40,
                "actual": 26,
                "dueDate": "2027-12-31",
                "measuredAt": "2026-09-15",
                "riskUids": [
                  "cli-2-1",
                  "cli-2-2",
                  "cli-3-1",
                  "cli-3-2",
                  "cli-5-3"
                ]
              },
              {
                "uid": "cli-benefit-fcr",
                "name": "Demandes résolues au premier contact",
                "owner": "Élodie Rousseau",
                "unit": "%",
                "baseline": 58,
                "target": 80,
                "actual": 63,
                "dueDate": "2027-06-30",
                "measuredAt": "2026-08-31",
                "riskUids": [
                  "cli-1-1",
                  "cli-2-1",
                  "cli-2-2"
                ]
              },
              {
                "uid": "cli-benefit-selfcare",
                "name": "Suivis de livraison consultés en libre-service",
                "owner": "Karim Belkacem",
                "unit": "%",
                "baseline": 12,
                "target": 60,
                "actual": 19,
                "dueDate": "2027-06-30",
                "measuredAt": "2026-08-31",
                "riskUids": [
                  "cli-3-1",
                  "cli-3-2",
                  "cli-5-2"
                ]
              },
              {
                "uid": "cli-benefit-loyalty",
                "name": "Clients actifs membres du programme de fidélité",
                "owner": "Maxime Carrel",
                "unit": "%",
                "baseline": 0,
                "target": 35,
                "actual": 3,
                "dueDate": "2027-12-31",
                "measuredAt": "2026-09-15",
                "riskUids": [
                  "cli-5-1",
                  "cli-1-2",
                  "cli-4-2"
                ]
              }
            ],
            "dependencies": [
              {
                "uid": "cli-dep-1",
                "sourceId": "cli-proj-crm",
                "targetId": "cli-proj-portail",
                "kind": "finishStart",
                "description": "Le portail affiche l'historique client issu du CRM unique : ouverture après la bascule du lot 2.",
                "owner": "Hélène Rocher",
                "dueDate": "2026-11-02",
                "status": "active",
                "riskUids": [
                  "cli-1-1",
                  "cli-4-1"
                ]
              },
              {
                "uid": "cli-dep-2",
                "sourceId": "cli-work-conformite",
                "targetId": "cli-proj-fidelite",
                "kind": "finishStart",
                "description": "La fidélité ne collecte de données qu'après validation de l'AIPD et ouverture du centre de préférences.",
                "owner": "Amandine Roux",
                "dueDate": "2026-11-30",
                "status": "active",
                "riskUids": [
                  "cli-1-2",
                  "cli-5-1"
                ]
              },
              {
                "uid": "cli-dep-3",
                "sourceId": "cli-proj-portail",
                "targetId": "cli-proj-contact",
                "kind": "interface",
                "description": "Le centre de contact consulte le suivi des colis temps réel (flux des Entrepôts connectés) via l'API du portail.",
                "owner": "Karim Belkacem",
                "dueDate": "2026-10-30",
                "status": "active",
                "riskUids": [
                  "cli-3-2",
                  "cli-2-2"
                ]
              }
            ],
            "scenarios": [
              {
                "uid": "cli-scenario-1",
                "name": "Ouverture du portail en plein pic avec un suivi des colis incomplet",
                "riskUids": [
                  "cli-2-2",
                  "cli-3-1",
                  "cli-3-2"
                ],
                "probability": 20,
                "min": 60000,
                "likely": 150000,
                "max": 320000,
                "status": "active",
                "owner": "Hélène Rocher",
                "reason": "Afflux d'appels « où est mon colis ? » si le suivi temps réel est incomplet ou le portail saturé le jour de l'ouverture : renfort et gestes commerciaux."
              },
              {
                "uid": "cli-scenario-2",
                "name": "Retard de la plateforme de données combiné à une reprise de données dégradée",
                "riskUids": [
                  "cli-4-2",
                  "cli-1-1"
                ],
                "probability": 15,
                "min": 80000,
                "likely": 200000,
                "max": 450000,
                "status": "active",
                "owner": "Sophie Garnier",
                "reason": "Double maintenance de l'ancien CRM et reprise des données clients à refaire sur la plateforme définitive."
              }
            ],
            "escalations": [
              {
                "uid": "cli-escalation-1",
                "riskUid": "cli-4-3",
                "fromLevel": "component",
                "toLevel": "program",
                "fromComponentId": "cli-proj-crm",
                "targetComponentId": "",
                "reason": "Hausse des licences au-delà de la tolérance et de la réserve du projet CRM (score 12 > 9) ; touche aussi le centre de contact.",
                "author": "Sophie Garnier",
                "raisedAt": "2026-06-10",
                "status": "decided",
                "decision": "takeOwnership",
                "decisionAuthor": "Hélène Rocher",
                "decidedAt": "2026-06-23",
                "decisionReason": "Risque commun au CRM et au centre de contact : négociation groupée des licences pilotée par le programme.",
                "scoreAtDecision": 12
              },
              {
                "uid": "cli-escalation-2",
                "riskUid": "cli-4-2",
                "fromLevel": "program",
                "toLevel": "organization",
                "fromComponentId": "",
                "targetComponentId": "",
                "reason": "Décalage de 3 mois de la plateforme de données du Socle numérique : arbitrage de priorité et de financement au niveau du portefeuille Transformation Valmeris 2026-2028.",
                "author": "Hélène Rocher",
                "raisedAt": "2026-09-10",
                "status": "pending",
                "decision": "",
                "decisionAuthor": "",
                "decidedAt": "",
                "decisionReason": "",
                "scoreAtDecision": null
              }
            ],
            "stages": [
              {
                "uid": "cli-stage-1",
                "name": "Cadrage et fondations",
                "startDate": "2025-10-01",
                "endDate": "2026-03-31",
                "status": "closed"
              },
              {
                "uid": "cli-stage-2",
                "name": "Construction et pilotes",
                "startDate": "2026-04-01",
                "endDate": "2026-12-31",
                "status": "active"
              },
              {
                "uid": "cli-stage-3",
                "name": "Généralisation et bénéfices",
                "startDate": "2027-01-01",
                "endDate": "2027-12-31",
                "status": "active"
              }
            ],
            "decisions": [
              {
                "uid": "cli-program-decision-1",
                "date": "2026-01-27",
                "author": "Comité de programme",
                "subject": "Choix de l'intégrateur CRM",
                "decision": "Retenir l'intégrateur le mieux classé avec clause de maintien des profils clés et pénalités de retard.",
                "reason": "Meilleure note technique ; la clause compense la tension sur les profils CRM.",
                "reviewDate": "2026-07-31"
              },
              {
                "uid": "cli-program-decision-2",
                "date": "2026-06-23",
                "author": "Comité de programme",
                "subject": "Budget des licences",
                "decision": "Prendre en charge au niveau du programme la hausse des licences CRM et téléphonie.",
                "reason": "Risque commun à deux projets, au-delà de la réserve du projet CRM.",
                "reviewDate": "2026-12-15"
              },
              {
                "uid": "cli-program-decision-3",
                "date": "2026-09-08",
                "author": "Comité de programme",
                "subject": "Date d'ouverture du portail",
                "decision": "Maintenir l'ouverture du portail au 16/11/2026 avec mode dégradé et renfort du centre de contact.",
                "reason": "Un nouveau report repousserait les bénéfices NPS en 2027 ; le pic est couvert par le renfort.",
                "reviewDate": "2026-10-13"
              }
            ]
          },
          "settings": {
            "echelleImpact": [
              15000,
              75000,
              300000,
              1200000
            ],
            "effetVelocite": "discret",
            "cadenceRevue": 90,
            "riskAppetite": 9,
            "templates": []
          },
          "reviews": [
            {
              "id": "cli-rev-2025-11",
              "date": "2025-11-25",
              "label": "Revue de lancement",
              "auteur": "Comité de programme",
              "note": "Revue de lancement : 10 risques identifiés, 7 menaces au-delà de l'appétence (9). Priorités : qualité des données clients, adoption des conseillers et choix de l'intégrateur.",
              "risks": [
                {
                  "uid": "cli-1-1",
                  "id": "1.1",
                  "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
                  "groupe": "Données clients et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Évaluation initiale : 1,8 million de fiches issues de 4 outils, doublons estimés à 12 %."
                },
                {
                  "uid": "cli-1-2",
                  "id": "1.2",
                  "title": "Consentements marketing non conformes au RGPD après fusion des bases",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Évaluation initiale : consentements hétérogènes entre les 4 bases sources, preuve absente pour une partie des fiches."
                },
                {
                  "uid": "cli-1-3",
                  "id": "1.3",
                  "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Évaluation initiale : la future plateforme conserve les enregistrements sans limite par défaut."
                },
                {
                  "uid": "cli-2-1",
                  "id": "2.1",
                  "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Évaluation initiale : 320 conseillers habitués à trois outils, aucune adhésion mesurée."
                },
                {
                  "uid": "cli-2-2",
                  "id": "2.2",
                  "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Évaluation initiale : ouverture du portail et bascule téléphonique envisagées au même trimestre."
                },
                {
                  "uid": "cli-2-3",
                  "id": "2.3",
                  "title": "Charge des experts métier sous-estimée pendant les recettes",
                  "groupe": "Adoption et organisation",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Évaluation initiale : les recettes des lots 1 et 2 mobilisent les mêmes experts métier."
                },
                {
                  "uid": "cli-3-1",
                  "id": "3.1",
                  "title": "Indisponibilité du portail client lors des pics de trafic",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Évaluation initiale : trafic attendu multiplié par 5 lors des pics, aucune mise à l'échelle testée."
                },
                {
                  "uid": "cli-3-3",
                  "id": "3.3",
                  "title": "Prise de contrôle de comptes clients sur le portail",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Évaluation initiale : portail exposé sur internet avec données personnelles et historique de commandes."
                },
                {
                  "uid": "cli-4-1",
                  "id": "4.1",
                  "title": "Défaillance de l'équipe de l'intégrateur CRM",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Évaluation initiale : appel d'offres en cours, forte tension sur les profils CRM du marché."
                },
                {
                  "uid": "cli-5-3",
                  "id": "5.3",
                  "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Évaluation initiale : les notifications de livraison pourraient réduire les appels « où est mon colis ? »."
                }
              ]
            },
            {
              "id": "cli-rev-2026-01",
              "date": "2026-01-27",
              "label": "Revue de fin de cadrage",
              "auteur": "Comité de programme",
              "note": "Fin de cadrage : intégrateur retenu, référentiel qualité validé. 12 risques dont la dépendance à la plateforme de données du Socle numérique ; 8 menaces au-delà de l'appétence.",
              "risks": [
                {
                  "uid": "cli-1-1",
                  "id": "1.1",
                  "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
                  "groupe": "Données clients et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Inchangée : référentiel qualité validé fin janvier, pas encore appliqué."
                },
                {
                  "uid": "cli-1-2",
                  "id": "1.2",
                  "title": "Consentements marketing non conformes au RGPD après fusion des bases",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Inchangée : cartographie des bases légales en cours."
                },
                {
                  "uid": "cli-1-3",
                  "id": "1.3",
                  "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : durée de conservation à arbitrer avec la Direction juridique."
                },
                {
                  "uid": "cli-2-1",
                  "id": "2.1",
                  "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Inchangée : réseau d'ambassadeurs en cours de constitution."
                },
                {
                  "uid": "cli-2-2",
                  "id": "2.2",
                  "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Inchangée : dimensionnement en cours sur la base du pic de novembre 2025."
                },
                {
                  "uid": "cli-2-3",
                  "id": "2.3",
                  "title": "Charge des experts métier sous-estimée pendant les recettes",
                  "groupe": "Adoption et organisation",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : planning des recettes en cours d'arbitrage."
                },
                {
                  "uid": "cli-3-1",
                  "id": "3.1",
                  "title": "Indisponibilité du portail client lors des pics de trafic",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Inchangée : architecture cible validée, tests de charge planifiés."
                },
                {
                  "uid": "cli-3-3",
                  "id": "3.3",
                  "title": "Prise de contrôle de comptes clients sur le portail",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Inchangée : 5 vulnérabilités critiques relevées sur la maquette."
                },
                {
                  "uid": "cli-4-1",
                  "id": "4.1",
                  "title": "Défaillance de l'équipe de l'intégrateur CRM",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Intégrateur retenu avec clause de maintien des profils clés, cotation maintenue."
                },
                {
                  "uid": "cli-4-2",
                  "id": "4.2",
                  "title": "Retard de la plateforme de données du Socle numérique",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Évaluation initiale : les lots analytiques du CRM et la fidélité reposent sur la plateforme de données du Socle numérique."
                },
                {
                  "uid": "cli-5-1",
                  "id": "5.1",
                  "title": "Fraude au programme de fidélité",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Évaluation initiale : cumul de points ouvert à tous les clients, sans contrôle d'identité."
                },
                {
                  "uid": "cli-5-3",
                  "id": "5.3",
                  "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Inchangée : dépend du flux de suivi des colis."
                }
              ]
            },
            {
              "id": "cli-rev-2026-04",
              "date": "2026-04-07",
              "label": "Revue du premier trimestre",
              "auteur": "Comité de programme",
              "note": "Premier trimestre : baisse sur la conformité, la charge des recettes et le pic d'appels ; nouvelle dépendance au suivi des colis des Entrepôts connectés. 5 menaces au-delà de l'appétence.",
              "risks": [
                {
                  "uid": "cli-1-1",
                  "id": "1.1",
                  "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
                  "groupe": "Données clients et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Profilage lancé et premières règles de rejet actives : probabilité 4 → 3."
                },
                {
                  "uid": "cli-1-2",
                  "id": "1.2",
                  "title": "Consentements marketing non conformes au RGPD après fusion des bases",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Cartographie terminée fin février : probabilité 3 → 2, les fiches à risque sont identifiées."
                },
                {
                  "uid": "cli-1-3",
                  "id": "1.3",
                  "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Durée fixée à 6 mois : probabilité 3 → 2 en attendant la purge automatique."
                },
                {
                  "uid": "cli-2-1",
                  "id": "2.1",
                  "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Pilote à 32 % d'utilisateurs actifs fin mars : la double saisie freine l'usage."
                },
                {
                  "uid": "cli-2-2",
                  "id": "2.2",
                  "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Dimensionnement validé fin mars : probabilité 4 → 3."
                },
                {
                  "uid": "cli-2-3",
                  "id": "2.3",
                  "title": "Charge des experts métier sous-estimée pendant les recettes",
                  "groupe": "Adoption et organisation",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Recettes placées hors clôtures et 3 remplaçants financés : probabilité 3 → 2."
                },
                {
                  "uid": "cli-3-1",
                  "id": "3.1",
                  "title": "Indisponibilité du portail client lors des pics de trafic",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Pilote ouvert début mars : disponibilité à 98,7 %, cotation maintenue."
                },
                {
                  "uid": "cli-3-2",
                  "id": "3.2",
                  "title": "Données de suivi des colis en temps réel livrées en retard par les Entrepôts connectés",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Évaluation initiale (portefeuille, 12/03) : flux temps réel des Entrepôts connectés sans contrat d'interface ni date ferme."
                },
                {
                  "uid": "cli-3-3",
                  "id": "3.3",
                  "title": "Prise de contrôle de comptes clients sur le portail",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    3,
                    4
                  ],
                  "motif": "Inchangée : correctifs en cours, authentification forte dépendante de l'annuaire d'identités."
                },
                {
                  "uid": "cli-4-1",
                  "id": "4.1",
                  "title": "Défaillance de l'équipe de l'intégrateur CRM",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Clauses et pénalités signées, revue mensuelle de capacité en place : probabilité 3 → 2."
                },
                {
                  "uid": "cli-4-2",
                  "id": "4.2",
                  "title": "Retard de la plateforme de données du Socle numérique",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Point hebdomadaire en place et entrepôt tampon décidé : impact 4 → 3."
                },
                {
                  "uid": "cli-4-3",
                  "id": "4.3",
                  "title": "Hausse du coût des licences CRM et téléphonie au-delà du budget",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Évaluation initiale (projet CRM) : devis de renouvellement des licences en hausse de 22 %."
                },
                {
                  "uid": "cli-5-1",
                  "id": "5.1",
                  "title": "Fraude au programme de fidélité",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : règles anti-fraude en conception."
                },
                {
                  "uid": "cli-5-3",
                  "id": "5.3",
                  "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Inchangée : pilote du portail ouvert en mars."
                }
              ]
            },
            {
              "id": "cli-rev-2026-06",
              "date": "2026-06-23",
              "label": "Revue avant l'été",
              "auteur": "Comité de programme",
              "note": "Avant l'été : tests de charge et test d'intrusion réussis, escalade des licences prise en charge par le programme. 1 menaces au-delà de l'appétence.",
              "risks": [
                {
                  "uid": "cli-1-1",
                  "id": "1.1",
                  "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
                  "groupe": "Données clients et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Dédoublonnage terminé fin avril ; doublons à 8,4 %, encore au-dessus du seuil critique."
                },
                {
                  "uid": "cli-1-2",
                  "id": "1.2",
                  "title": "Consentements marketing non conformes au RGPD après fusion des bases",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "AIPD validée par la DPO : la purge prévue limite l'impact d'un contrôle (I4 → I3)."
                },
                {
                  "uid": "cli-1-3",
                  "id": "1.3",
                  "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    1,
                    3
                  ],
                  "motif": "Purge automatique paramétrée et testée : probabilité ramenée à 1."
                },
                {
                  "uid": "cli-2-1",
                  "id": "2.1",
                  "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Ambassadeurs en place et 55 % d'actifs fin mai : probabilité 4 → 3."
                },
                {
                  "uid": "cli-2-2",
                  "id": "2.2",
                  "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Ouverture du portail prévue le 12/10, hors pic, et rappel automatique chiffré : probabilité 3 → 2."
                },
                {
                  "uid": "cli-2-3",
                  "id": "2.3",
                  "title": "Charge des experts métier sous-estimée pendant les recettes",
                  "groupe": "Adoption et organisation",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Inchangée : recette du lot 1 tenue sans dépassement."
                },
                {
                  "uid": "cli-3-1",
                  "id": "3.1",
                  "title": "Indisponibilité du portail client lors des pics de trafic",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Tests de charge réussis à 3 fois le pic : probabilité 3 → 2."
                },
                {
                  "uid": "cli-3-2",
                  "id": "3.2",
                  "title": "Données de suivi des colis en temps réel livrées en retard par les Entrepôts connectés",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Contrat d'interface signé avec le programme Entrepôts connectés : probabilité 4 → 3."
                },
                {
                  "uid": "cli-3-3",
                  "id": "3.3",
                  "title": "Prise de contrôle de comptes clients sur le portail",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Test d'intrusion passé et plan de réponse à incident validé : probabilité 3 → 2."
                },
                {
                  "uid": "cli-4-1",
                  "id": "4.1",
                  "title": "Défaillance de l'équipe de l'intégrateur CRM",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Inchangée : lot 1 livré à l'heure."
                },
                {
                  "uid": "cli-4-2",
                  "id": "4.2",
                  "title": "Retard de la plateforme de données du Socle numérique",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : jalons de la plateforme tenus à un retard près."
                },
                {
                  "uid": "cli-4-3",
                  "id": "4.3",
                  "title": "Hausse du coût des licences CRM et téléphonie au-delà du budget",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Inchangée ; au-delà de la tolérance du projet CRM, escalade au programme acceptée le 23/06."
                },
                {
                  "uid": "cli-5-1",
                  "id": "5.1",
                  "title": "Fraude au programme de fidélité",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : règles anti-fraude livrées fin juin, pilote dans 3 agences à observer."
                },
                {
                  "uid": "cli-5-2",
                  "id": "5.2",
                  "title": "Vente de créneaux de livraison premium grâce au suivi en temps réel",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Évaluation initiale : 18 % des clients du pilote demandent un créneau de livraison précis."
                },
                {
                  "uid": "cli-5-3",
                  "id": "5.3",
                  "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "NPS du pilote à +8 points chez les clients notifiés : probabilité 2 → 3."
                }
              ]
            },
            {
              "id": "cli-rev-2026-09",
              "date": "2026-09-08",
              "label": "Revue de rentrée",
              "auteur": "Comité de programme",
              "note": "Rentrée : risque intégrateur survenu (lot 2 à +5 semaines), d'où l'ouverture du portail au 16/11 et la remontée du pic d'appels ; retard de la plateforme de données escaladé au portefeuille. 2 menaces au-delà de l'appétence.",
              "risks": [
                {
                  "uid": "cli-1-1",
                  "id": "1.1",
                  "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
                  "groupe": "Données clients et conformité",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : tableau de bord qualité en retard, doublons à 6,3 % avant la bascule du lot 2."
                },
                {
                  "uid": "cli-1-2",
                  "id": "1.2",
                  "title": "Consentements marketing non conformes au RGPD après fusion des bases",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Inchangée : centre de préférences en retard, 4,2 % des fiches encore sans preuve de consentement."
                },
                {
                  "uid": "cli-1-3",
                  "id": "1.3",
                  "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
                  "groupe": "Données clients et conformité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    1,
                    3
                  ],
                  "motif": "Risque clos le 15/07/2026 après contrôle de la DPO ; conservé pour mémoire."
                },
                {
                  "uid": "cli-2-1",
                  "id": "2.1",
                  "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "66 % d'actifs fin août ; suppression de la double saisie en retard, cotation maintenue."
                },
                {
                  "uid": "cli-2-2",
                  "id": "2.2",
                  "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
                  "groupe": "Adoption et organisation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Remontée : l'ouverture glisse au 16/11 (retard du lot 2 du CRM), en plein pic, et le renfort intérimaire n'est pas signé."
                },
                {
                  "uid": "cli-2-3",
                  "id": "2.3",
                  "title": "Charge des experts métier sous-estimée pendant les recettes",
                  "groupe": "Adoption et organisation",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Inchangée : vigilance sur la recette du lot 2, décalée à fin octobre."
                },
                {
                  "uid": "cli-3-1",
                  "id": "3.1",
                  "title": "Indisponibilité du portail client lors des pics de trafic",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Inchangée : CDN en place, mode dégradé en cours avant l'ouverture du 16/11."
                },
                {
                  "uid": "cli-3-2",
                  "id": "3.2",
                  "title": "Données de suivi des colis en temps réel livrées en retard par les Entrepôts connectés",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : 93 % des événements reçus sous 5 minutes fin août, sous le seuil d'alerte."
                },
                {
                  "uid": "cli-3-3",
                  "id": "3.3",
                  "title": "Prise de contrôle de comptes clients sur le portail",
                  "groupe": "Plateformes et exploitation",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    2,
                    4
                  ],
                  "motif": "Inchangée : authentification forte attendue avec l'annuaire d'identités (novembre)."
                },
                {
                  "uid": "cli-4-1",
                  "id": "4.1",
                  "title": "Défaillance de l'équipe de l'intégrateur CRM",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    3,
                    4
                  ],
                  "after": [
                    5,
                    3
                  ],
                  "motif": "Risque survenu le 20/07 : départ de l'architecte et de 2 développeurs, lot 2 en retard de 5 semaines. Pénalités : impact contenu à I3."
                },
                {
                  "uid": "cli-4-2",
                  "id": "4.2",
                  "title": "Retard de la plateforme de données du Socle numérique",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    4
                  ],
                  "after": [
                    4,
                    3
                  ],
                  "motif": "Remontée : le Socle numérique annonce le 28/08 un décalage de 3 mois ; escalade au portefeuille décidée."
                },
                {
                  "uid": "cli-4-3",
                  "id": "4.3",
                  "title": "Hausse du coût des licences CRM et téléphonie au-delà du budget",
                  "groupe": "Fournisseurs et dépendances",
                  "before": [
                    4,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Paliers renégociés et licences complètes réduites de 1 000 à 640 : probabilité 4 → 3."
                },
                {
                  "uid": "cli-5-1",
                  "id": "5.1",
                  "title": "Fraude au programme de fidélité",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    3,
                    3
                  ],
                  "after": [
                    2,
                    3
                  ],
                  "motif": "Pilote sans abus significatif sur l'été : probabilité 3 → 2."
                },
                {
                  "uid": "cli-5-2",
                  "id": "5.2",
                  "title": "Vente de créneaux de livraison premium grâce au suivi en temps réel",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Étude de prix concluante avec 2 grands comptes : probabilité 2 → 3."
                },
                {
                  "uid": "cli-5-3",
                  "id": "5.3",
                  "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
                  "groupe": "Valeur client et fidélité",
                  "before": [
                    2,
                    3
                  ],
                  "after": [
                    3,
                    3
                  ],
                  "motif": "Inchangée : généralisation liée à l'ouverture du portail le 16/11."
                }
              ]
            }
          ],
          "risks": [
            {
              "uid": "cli-1-1",
              "id": "1.1",
              "title": "Qualité insuffisante des données clients à la reprise dans le CRM",
              "scopeLevel": "component",
              "componentId": "cli-proj-crm",
              "affectedComponentIds": [
                "cli-proj-contact"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Des fiches clients en double ou incomplètes sont reprises dans le CRM unique lors de la bascule du lot 2.",
              "objective": "Disposer d'une vue client unique et fiable dès la bascule pour les conseillers et le service client.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Lucie Perrin",
              "lifecycle": "active",
              "proximityDate": "2026-11-02",
              "milestone": "Bascule des données clients vers le CRM (lot 2)",
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
              "responsable": "Lucie Perrin",
              "causes": [
                "Quatre outils sources sans identifiant client commun",
                "Saisie libre des adresses et des raisons sociales en agence",
                "Aucun contrôle de format à la création des fiches",
                "Historique de 12 ans jamais purgé"
              ],
              "consequences": [
                {
                  "texte": "Correction manuelle des fiches après bascule",
                  "chiffrage": "≈ 4 ETP pendant 6 semaines, 120 à 180 k€"
                },
                {
                  "texte": "Relances et devis envoyés en double aux clients",
                  "chiffrage": "perte de 1 à 2 points de NPS"
                },
                {
                  "texte": "Indicateurs commerciaux faussés au lancement",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Définir un référentiel de qualité (adresse, e-mail, SIRET) avec règles de rejet.",
                  "porteur": "Sophie Garnier",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Profiler et dédoublonner les 1,8 million de fiches clients avant reprise.",
                  "porteur": "Lucie Perrin",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Publier un tableau de bord qualité mensuel par source.",
                  "porteur": "Lucie Perrin",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Prévoir une cellule de correction manuelle après bascule (4 ETP, 6 semaines).",
                  "porteur": "Élodie Rousseau",
                  "echeance": "15/12/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-04-30",
                  "auteur": "Lucie Perrin",
                  "texte": "Dédoublonnage terminé : 214 000 fiches fusionnées, probabilité ramenée de 4 à 3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "Tableau de bord qualité en retard de 3 semaines : cotation maintenue à P3 × I3 jusqu'à la bascule."
                }
              ],
              "liens": [
                {
                  "libelle": "Référentiel qualité des données clients",
                  "url": "https://intranet.valmeris.example/crm/referentiel-qualite"
                },
                {
                  "libelle": "Rapport de profilage des bases clients",
                  "url": "https://intranet.valmeris.example/crm/profilage-2026-04"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-1-1",
                  "nom": "Taux de doublons dans la base clients",
                  "unite": "%",
                  "sens": "hausse",
                  "alerte": 5,
                  "critique": 8,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 12.4,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 9.8,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 8.4,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 7.6,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 6.9,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 6.3,
                      "auteur": "Lucie Perrin"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 5.8,
                      "auteur": "Lucie Perrin"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 60000,
                "probable": 180000,
                "max": 400000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-11-02",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-1-2",
              "id": "1.2",
              "title": "Consentements marketing non conformes au RGPD après fusion des bases",
              "scopeLevel": "component",
              "componentId": "cli-work-conformite",
              "affectedComponentIds": [
                "cli-proj-crm",
                "cli-proj-fidelite"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Une campagne est adressée à des clients dont le consentement n'est pas prouvé, entraînant plainte et contrôle de la CNIL.",
              "objective": "Exploiter le CRM unique et la fidélité dans le respect du RGPD, sans suspension des campagnes.",
              "raisedAt": "2025-10-28",
              "raisedBy": "Amandine Roux",
              "lifecycle": "active",
              "proximityDate": "2026-12-01",
              "milestone": "Première campagne marketing depuis le CRM unique",
              "impactAxes": {
                "cost": 3,
                "delay": 2,
                "quality": 2,
                "service": 1,
                "benefit": 3
              },
              "assessmentBefore": [
                3,
                4
              ],
              "assessmentCurrent": [
                2,
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
              "traitement": "reduce",
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Amandine Roux",
              "causes": [
                "Bases légales différentes selon les outils sources",
                "Preuves de consentement absentes des exports historiques",
                "Formulaires d'agence sans case de consentement distincte"
              ],
              "consequences": [
                {
                  "texte": "Sanction ou mise en demeure de la CNIL",
                  "chiffrage": "≈ 250 k€ en scénario probable, jusqu'à 1,5 M€"
                },
                {
                  "texte": "Suspension des campagnes marketing",
                  "chiffrage": "3 à 6 mois de retard sur la fidélité"
                }
              ],
              "mesures": [
                {
                  "texte": "Cartographier les bases sources et la base légale de chaque traitement.",
                  "porteur": "Amandine Roux",
                  "echeance": "28/02/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Réaliser l'analyse d'impact (AIPD) du CRM unique et de la fidélité.",
                  "porteur": "Amandine Roux",
                  "echeance": "15/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Déployer le centre de préférences dans le portail client.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/08/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Purger les fiches sans consentement valide avant la première campagne.",
                  "porteur": "Lucie Perrin",
                  "echeance": "30/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-15",
                  "auteur": "Amandine Roux",
                  "texte": "AIPD validée : la purge prévue limite l'impact d'un contrôle, impact ramené de I4 à I3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "Centre de préférences en retard (dépendance à l'annuaire d'identités du Socle numérique) ; 4,2 % des fiches encore sans preuve."
                }
              ],
              "liens": [
                {
                  "libelle": "Analyse d'impact (AIPD) du CRM unique",
                  "url": "https://intranet.valmeris.example/dpo/aipd-crm-unique"
                },
                {
                  "libelle": "Registre des traitements — relation client",
                  "url": "https://intranet.valmeris.example/dpo/registre-relation-client"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-1-2",
                  "nom": "Fiches sans preuve de consentement",
                  "unite": "%",
                  "sens": "hausse",
                  "alerte": 3,
                  "critique": 6,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 14.2,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 11.8,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 9.5,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 7.1,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 5.4,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 4.2,
                      "auteur": "Amandine Roux"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 3.6,
                      "auteur": "Amandine Roux"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 40000,
                "probable": 250000,
                "max": 1500000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-11-15",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-1-3",
              "id": "1.3",
              "title": "Enregistrements d'appels conservés au-delà de la durée autorisée",
              "scopeLevel": "component",
              "componentId": "cli-proj-contact",
              "affectedComponentIds": [],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "La plateforme de téléphonie conserve les enregistrements d'appels sans limite de durée.",
              "objective": "Respecter la durée de conservation fixée par la politique de protection des données.",
              "raisedAt": "2025-11-05",
              "raisedBy": "Pauline Vasseur",
              "lifecycle": "closed",
              "lifeDate": "2026-07-15",
              "lifeReason": "Purge automatique à 6 mois déployée et contrôlée par la DPO : risque éteint.",
              "proximityDate": "2026-06-30",
              "milestone": "Mise en service de l'enregistrement des appels",
              "impactAxes": {
                "cost": 2,
                "delay": 1,
                "quality": 1,
                "service": 1,
                "benefit": 1
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
              "traitement": "reduce",
              "velocite": 1,
              "statut": "statusTreated",
              "responsable": "Élodie Rousseau",
              "causes": [
                "Paramétrage par défaut de l'éditeur sans durée de conservation",
                "Durée légale non arbitrée entre juridique et service client",
                "Aucun contrôle périodique des volumes stockés"
              ],
              "consequences": [
                {
                  "texte": "Mise en demeure de la CNIL et purge dans l'urgence",
                  "chiffrage": "≈ 90 k€"
                },
                {
                  "texte": "Atteinte à la confiance des clients",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Fixer la durée de conservation à 6 mois avec la Direction juridique.",
                  "porteur": "Pauline Vasseur",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Paramétrer la purge automatique et la tester sur le pilote.",
                  "porteur": "Romain Chevalier",
                  "echeance": "15/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Contrôler chaque trimestre les volumes conservés.",
                  "porteur": "Amandine Roux",
                  "echeance": "15/07/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                }
              ],
              "notes": [
                {
                  "date": "2026-03-24",
                  "auteur": "Pauline Vasseur",
                  "texte": "Durée de conservation arbitrée à 6 mois : probabilité ramenée de 3 à 2."
                },
                {
                  "date": "2026-07-15",
                  "auteur": "Amandine Roux",
                  "texte": "Contrôle de la purge concluant sur 3 semaines : risque clos, conservé pour mémoire."
                }
              ],
              "liens": [
                {
                  "libelle": "Politique de conservation des enregistrements",
                  "url": "https://intranet.valmeris.example/juridique/conservation-enregistrements"
                }
              ],
              "kri": [],
              "decisions": [],
              "cout": {
                "min": 20000,
                "probable": 90000,
                "max": 200000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-07-15",
              "prochaineRevue": "2026-12-07",
              "currentNeedsReview": false,
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-2-1",
              "id": "2.1",
              "title": "Adoption insuffisante du CRM par les conseillers commerciaux",
              "scopeLevel": "component",
              "componentId": "cli-proj-crm",
              "affectedComponentIds": [
                "cli-proj-contact"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Les conseillers continuent d'utiliser leurs fichiers et l'ancien outil de devis au lieu du CRM unique.",
              "objective": "Atteindre 90 % de conseillers actifs dans le CRM à la généralisation sur les 38 sites.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Hélène Rocher",
              "lifecycle": "active",
              "proximityDate": "2026-11-30",
              "milestone": "Généralisation du CRM aux 38 sites",
              "impactAxes": {
                "cost": 2,
                "delay": 3,
                "quality": 3,
                "service": 3,
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
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Antoine Girard",
              "causes": [
                "320 conseillers habitués à trois outils différents",
                "Double saisie avec l'ancien outil de devis",
                "Managers d'agence peu impliqués dans le pilote"
              ],
              "consequences": [
                {
                  "texte": "Bénéfices du CRM retardés d'un à deux trimestres",
                  "chiffrage": "≈ 150 k€ de marge différée"
                },
                {
                  "texte": "Vue client incomplète pour le service client",
                  "chiffrage": "NPS stable au lieu de +5 points"
                }
              ],
              "mesures": [
                {
                  "texte": "Constituer un réseau de 25 ambassadeurs dans les agences commerciales.",
                  "porteur": "Antoine Girard",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Supprimer la double saisie dans l'ancien outil de devis.",
                  "porteur": "Sophie Garnier",
                  "echeance": "31/07/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Former les 320 conseillers par vagues régionales.",
                  "porteur": "Antoine Girard",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Suivre l'usage hebdomadaire par agence et relancer les managers.",
                  "porteur": "Hélène Rocher",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-23",
                  "auteur": "Comité de programme (23/06)",
                  "texte": "Ambassadeurs en place et 55 % d'actifs fin mai : probabilité ramenée de 4 à 3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "La suppression de la double saisie a deux mois de retard : cotation maintenue malgré 66 % d'actifs."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de conduite du changement CRM",
                  "url": "https://intranet.valmeris.example/rh/conduite-changement-crm"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-2-1",
                  "nom": "Conseillers actifs dans le CRM (hebdomadaire)",
                  "unite": "%",
                  "sens": "baisse",
                  "alerte": 70,
                  "critique": 50,
                  "releves": [
                    {
                      "date": "2026-02-28",
                      "valeur": 24,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 32,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 41,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 55,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 61,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 63,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 66,
                      "auteur": "Antoine Girard"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 72,
                      "auteur": "Antoine Girard"
                    }
                  ]
                }
              ],
              "decisions": [
                {
                  "id": "cli-decision-2-1",
                  "date": "2026-06-23",
                  "author": "Comité de programme",
                  "type": "moreAction",
                  "reason": "Adoption à 55 % : prolonger l'accompagnement des agences jusqu'à la généralisation.",
                  "reviewDate": "2026-11-30",
                  "scoreAtDecision": 9
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 150000,
                "max": 350000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-11-30",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-2-2",
              "id": "2.2",
              "title": "Pic d'appels à l'ouverture du portail et du centre de contact",
              "scopeLevel": "component",
              "componentId": "cli-proj-contact",
              "affectedComponentIds": [
                "cli-proj-portail"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Les appels « où est mon colis ? » débordent le centre de contact pendant les semaines suivant l'ouverture du portail.",
              "objective": "Maintenir un taux de décroché d'au moins 85 % pendant la bascule et le pic de fin d'année.",
              "raisedAt": "2025-11-12",
              "raisedBy": "Élodie Rousseau",
              "lifecycle": "active",
              "proximityDate": "2026-11-16",
              "milestone": "Ouverture du portail client au public",
              "impactAxes": {
                "cost": 3,
                "delay": 1,
                "quality": 2,
                "service": 5,
                "benefit": 4
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
              "velocite": 5,
              "statut": "statusInProgress",
              "responsable": "Élodie Rousseau",
              "causes": [
                "Ouverture du portail décalée au 16/11, en plein pic de fin d'année",
                "Nouveaux canaux (chat, rappel) encore peu connus des clients",
                "Renfort intérimaire non contractualisé",
                "Suivi des colis temps réel incomplet au démarrage"
              ],
              "consequences": [
                {
                  "texte": "Renfort d'urgence et heures supplémentaires",
                  "chiffrage": "≈ 120 k€ sur 6 semaines"
                },
                {
                  "texte": "Pénalités de niveau de service envers les grands comptes",
                  "chiffrage": "jusqu'à 80 k€"
                },
                {
                  "texte": "Chute du NPS sur la période",
                  "chiffrage": "−3 à −5 points"
                }
              ],
              "mesures": [
                {
                  "texte": "Dimensionner le centre de contact sur la base du pic de novembre 2025.",
                  "porteur": "Élodie Rousseau",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Contractualiser un renfort de 30 conseillers intérimaires mobilisable sous 10 jours.",
                  "porteur": "Claire Dumont",
                  "echeance": "15/09/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Activer le rappel automatique et l'assistant conversationnel de premier niveau.",
                  "porteur": "Élodie Rousseau",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Publier les réponses en libre-service sur le suivi des colis avant l'ouverture.",
                  "porteur": "Karim Belkacem",
                  "echeance": "15/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-23",
                  "auteur": "Comité de programme (23/06)",
                  "texte": "Ouverture prévue le 12/10, hors pic : probabilité ramenée à 2."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "Remontée à P3 : l'ouverture glisse au 16/11 à cause du retard du lot 2 du CRM, et le renfort intérimaire n'est pas signé."
                },
                {
                  "date": "2026-09-25",
                  "auteur": "Élodie Rousseau",
                  "texte": "Taux de décroché à 83 % en septembre (rentrée) : seuil d'alerte franchi, pas de seuil critique."
                }
              ],
              "liens": [
                {
                  "libelle": "Plan de charge du centre de contact",
                  "url": "https://intranet.valmeris.example/service-client/plan-de-charge-2026"
                },
                {
                  "libelle": "Cahier des charges du renfort intérimaire",
                  "url": "https://intranet.valmeris.example/achats/renfort-interim-centre-contact"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-2-2",
                  "nom": "Taux de décroché du centre de contact",
                  "unite": "%",
                  "sens": "baisse",
                  "alerte": 85,
                  "critique": 75,
                  "releves": [
                    {
                      "date": "2026-04-30",
                      "valeur": 91,
                      "auteur": "Élodie Rousseau"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 89,
                      "auteur": "Élodie Rousseau"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 92,
                      "auteur": "Élodie Rousseau"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 90,
                      "auteur": "Élodie Rousseau"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 87,
                      "auteur": "Élodie Rousseau"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 83,
                      "auteur": "Élodie Rousseau"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 40000,
                "probable": 120000,
                "max": 280000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-10-13",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-2-3",
              "id": "2.3",
              "title": "Charge des experts métier sous-estimée pendant les recettes",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "cli-proj-crm",
                "cli-proj-contact",
                "cli-proj-fidelite"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par la direction de programme (risque transverse aux projets).",
              "kind": "threat",
              "event": "Les experts métier ne sont pas disponibles pour les recettes, qui glissent ou sont bâclées.",
              "objective": "Tenir les recettes des lots 2 et 3 sans dégrader l'activité courante.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Hélène Rocher",
              "lifecycle": "active",
              "proximityDate": "2026-10-31",
              "milestone": "Recette métier du lot 2",
              "impactAxes": {
                "cost": 2,
                "delay": 3,
                "quality": 3,
                "service": 2,
                "benefit": 2
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
              "responsable": "Hélène Rocher",
              "causes": [
                "Mêmes experts mobilisés sur les lots CRM, contact et fidélité",
                "Recettes planifiées pendant les clôtures et les soldes",
                "Pas de remplaçants sur les postes clés"
              ],
              "consequences": [
                {
                  "texte": "Recettes décalées de 2 à 4 semaines",
                  "chiffrage": "≈ 45 k€ de prolongation de l'intégrateur"
                },
                {
                  "texte": "Anomalies découvertes après la mise en service",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Planifier les recettes métier hors clôtures et périodes de soldes.",
                  "porteur": "Hélène Rocher",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Financer 3 remplaçants temporaires pour libérer les experts métier.",
                  "porteur": "Mehdi Chaouch",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Suivre la charge des utilisateurs clés en comité mensuel.",
                  "porteur": "Hélène Rocher",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-04-07",
                  "auteur": "Comité de programme (07/04)",
                  "texte": "Remplaçants en poste : probabilité ramenée de 3 à 2."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Hélène Rocher",
                  "texte": "Recette du lot 2 décalée à fin octobre avec le retard de l'intégrateur : charge à surveiller."
                }
              ],
              "liens": [
                {
                  "libelle": "Planning des recettes métier",
                  "url": "https://intranet.valmeris.example/programme-clients/planning-recettes"
                }
              ],
              "kri": [],
              "decisions": [],
              "cout": {
                "min": 10000,
                "probable": 45000,
                "max": 90000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-12-07",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "cli-3-1",
              "id": "3.1",
              "title": "Indisponibilité du portail client lors des pics de trafic",
              "scopeLevel": "component",
              "componentId": "cli-proj-portail",
              "affectedComponentIds": [
                "cli-proj-contact"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Le portail devient inaccessible ou très lent lors d'un pic de consultation du suivi des livraisons.",
              "objective": "Garantir 99,5 % de disponibilité du portail, y compris pendant les pics.",
              "raisedAt": "2025-11-10",
              "raisedBy": "Karim Belkacem",
              "lifecycle": "active",
              "proximityDate": "2026-11-16",
              "milestone": "Ouverture du portail client au public",
              "impactAxes": {
                "cost": 3,
                "delay": 1,
                "quality": 3,
                "service": 5,
                "benefit": 3
              },
              "assessmentBefore": [
                3,
                4
              ],
              "assessmentCurrent": [
                2,
                4
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
              "velocite": 5,
              "statut": "statusInProgress",
              "responsable": "Karim Belkacem",
              "causes": [
                "Trafic multiplié par 5 lors des pics de livraison",
                "Dépendance aux appels vers le CRM en temps réel",
                "Aucune mise à l'échelle automatique testée"
              ],
              "consequences": [
                {
                  "texte": "Report des consultations vers le centre de contact",
                  "chiffrage": "≈ 110 k€ de renfort sur un pic"
                },
                {
                  "texte": "Perte de commandes de services en ligne",
                  "chiffrage": "≈ 20 k€ par jour d'indisponibilité"
                }
              ],
              "mesures": [
                {
                  "texte": "Réaliser des tests de charge à 3 fois le trafic du pic de novembre.",
                  "porteur": "Karim Belkacem",
                  "echeance": "15/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Placer le portail derrière un réseau de diffusion (CDN) et une file d'attente virtuelle.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/07/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Définir le mode dégradé : suivi des colis en lecture seule si le CRM est indisponible.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Renforcer l'astreinte pendant les 6 semaines suivant l'ouverture.",
                  "porteur": "Romain Chevalier",
                  "echeance": "15/11/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-23",
                  "auteur": "Comité de programme (23/06)",
                  "texte": "Tests de charge réussis à 3 fois le pic : probabilité ramenée de 3 à 2."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Karim Belkacem",
                  "texte": "CDN en place ; le mode dégradé ramènera l'impact à I3 avant l'ouverture."
                }
              ],
              "liens": [
                {
                  "libelle": "Rapport des tests de charge du portail",
                  "url": "https://intranet.valmeris.example/portail/tests-de-charge-2026-06"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-3-1",
                  "nom": "Disponibilité du portail (pilote)",
                  "unite": "%",
                  "sens": "baisse",
                  "alerte": 99.5,
                  "critique": 99,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 98.7,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 99.1,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 99.4,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 99.6,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 99.7,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 99.8,
                      "auteur": "Romain Chevalier"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 99.8,
                      "auteur": "Romain Chevalier"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 30000,
                "probable": 110000,
                "max": 260000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-11-16",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-3-2",
              "id": "3.2",
              "title": "Données de suivi des colis en temps réel livrées en retard par les Entrepôts connectés",
              "scopeLevel": "component",
              "componentId": "cli-proj-portail",
              "affectedComponentIds": [
                "cli-proj-contact"
              ],
              "programOrigin": "cascade",
              "programOriginNote": "Dépendance identifiée au comité de portefeuille du 12/03/2026 : flux de suivi des colis du programme Entrepôts connectés.",
              "kind": "threat",
              "event": "Le flux d'événements de suivi des colis du programme Entrepôts connectés n'est pas prêt ou incomplet à l'ouverture du portail.",
              "objective": "Afficher un suivi des livraisons en temps réel (moins de 5 minutes) sur le portail dès son ouverture.",
              "raisedAt": "2026-03-12",
              "raisedBy": "Hélène Rocher",
              "lifecycle": "active",
              "proximityDate": "2026-10-30",
              "milestone": "Raccordement du flux de suivi des colis en temps réel",
              "impactAxes": {
                "cost": 3,
                "delay": 3,
                "quality": 3,
                "service": 4,
                "benefit": 4
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
              "responsable": "Karim Belkacem",
              "causes": [
                "Nouveau WMS des Entrepôts connectés encore en déploiement",
                "Pas de contrat d'interface initial entre les deux programmes",
                "Événements de suivi hétérogènes selon les transporteurs"
              ],
              "consequences": [
                {
                  "texte": "Portail limité à un suivi à J-1",
                  "chiffrage": "bénéfice libre-service différé"
                },
                {
                  "texte": "Appels supplémentaires au centre de contact",
                  "chiffrage": "≈ 140 k€ sur le premier trimestre"
                }
              ],
              "mesures": [
                {
                  "texte": "Contractualiser l'interface et son niveau de service avec le programme Entrepôts connectés.",
                  "porteur": "Hélène Rocher",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Afficher un suivi à J-1 depuis l'ERP en solution de repli.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/08/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Tester le flux de bout en bout sur 5 entrepôts pilotes.",
                  "porteur": "Bastien Coulon",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                }
              ],
              "notes": [
                {
                  "date": "2026-04-30",
                  "auteur": "Hélène Rocher",
                  "texte": "Contrat d'interface signé avec le programme Entrepôts connectés : probabilité ramenée de 4 à 3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "93 % des événements reçus sous 5 minutes fin août : encore sous le seuil d'alerte de 95 %."
                }
              ],
              "liens": [
                {
                  "libelle": "Contrat d'interface suivi des colis",
                  "url": "https://intranet.valmeris.example/portefeuille/interfaces/suivi-colis"
                },
                {
                  "libelle": "Planning des Entrepôts connectés",
                  "url": "https://intranet.valmeris.example/entrepots/planning"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-3-2",
                  "nom": "Événements de suivi reçus sous 5 minutes",
                  "unite": "%",
                  "sens": "baisse",
                  "alerte": 95,
                  "critique": 90,
                  "releves": [
                    {
                      "date": "2026-04-30",
                      "valeur": 78,
                      "auteur": "Bastien Coulon"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 84,
                      "auteur": "Bastien Coulon"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 88,
                      "auteur": "Bastien Coulon"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 91,
                      "auteur": "Bastien Coulon"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 93,
                      "auteur": "Bastien Coulon"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 94,
                      "auteur": "Bastien Coulon"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 40000,
                "probable": 140000,
                "max": 300000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-10-30",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-3-3",
              "id": "3.3",
              "title": "Prise de contrôle de comptes clients sur le portail",
              "scopeLevel": "component",
              "componentId": "cli-proj-portail",
              "affectedComponentIds": [
                "cli-proj-fidelite"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Des attaquants accèdent à des comptes clients (données personnelles, adresses de livraison, points de fidélité).",
              "objective": "Protéger les comptes clients et les données personnelles exposées sur internet.",
              "raisedAt": "2025-11-10",
              "raisedBy": "Julien Masson",
              "lifecycle": "active",
              "proximityDate": "2026-11-16",
              "milestone": "Ouverture du portail client au public",
              "impactAxes": {
                "cost": 4,
                "delay": 2,
                "quality": 2,
                "service": 4,
                "benefit": 3
              },
              "assessmentBefore": [
                3,
                4
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
              "responsable": "Julien Masson",
              "causes": [
                "Mots de passe réutilisés par les clients",
                "Authentification forte dépendante de l'annuaire d'identités du Socle numérique",
                "Vulnérabilités relevées sur la maquette du portail"
              ],
              "consequences": [
                {
                  "texte": "Notification à la CNIL et aux clients concernés",
                  "chiffrage": "≈ 450 k€ (gestion de crise, sanction, gestes commerciaux)"
                },
                {
                  "texte": "Détournement de points de fidélité et de livraisons",
                  "chiffrage": "jusqu'à 2 M€ en scénario extrême"
                },
                {
                  "texte": "Atteinte durable à l'image du groupe",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Réaliser un test d'intrusion avant l'ouverture au public.",
                  "porteur": "Julien Masson",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Valider le plan de réponse à incident et de notification CNIL sous 72 h.",
                  "porteur": "Amandine Roux",
                  "echeance": "31/05/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Activer l'authentification forte via l'annuaire d'identités du Socle numérique.",
                  "porteur": "Julien Masson",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Détecter les connexions anormales et bloquer automatiquement les comptes.",
                  "porteur": "Julien Masson",
                  "echeance": "31/12/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-30",
                  "auteur": "Julien Masson",
                  "texte": "Test d'intrusion passé sans vulnérabilité critique restante : probabilité ramenée de 3 à 2."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "L'authentification forte attend l'annuaire d'identités du Socle numérique, annoncé pour novembre."
                }
              ],
              "liens": [
                {
                  "libelle": "Rapport du test d'intrusion du portail",
                  "url": "https://intranet.valmeris.example/rssi/pentest-portail-2026-06"
                },
                {
                  "libelle": "Plan de réponse à incident",
                  "url": "https://intranet.valmeris.example/rssi/plan-reponse-incident"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-3-3",
                  "nom": "Vulnérabilités critiques ouvertes sur le portail",
                  "unite": "vulnérabilités",
                  "sens": "hausse",
                  "alerte": 1,
                  "critique": 3,
                  "releves": [
                    {
                      "date": "2026-01-31",
                      "valeur": 5,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-02-28",
                      "valeur": 4,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-03-31",
                      "valeur": 3,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 2,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 2,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 1,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 1,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 0,
                      "auteur": "Julien Masson"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 0,
                      "auteur": "Julien Masson"
                    }
                  ]
                }
              ],
              "decisions": [],
              "cout": {
                "min": 150000,
                "probable": 450000,
                "max": 2000000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-11-16",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-4-1",
              "id": "4.1",
              "title": "Défaillance de l'équipe de l'intégrateur CRM",
              "scopeLevel": "component",
              "componentId": "cli-proj-crm",
              "affectedComponentIds": [
                "cli-proj-contact"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "L'intégrateur perd des profils clés et ne tient plus le calendrier des lots du CRM.",
              "objective": "Livrer le lot 2 (service client) du CRM dans les délais et le budget contractuels.",
              "raisedAt": "2025-10-20",
              "raisedBy": "Claire Dumont",
              "lifecycle": "materialized",
              "lifeDate": "2026-07-20",
              "issue": {
                "description": "Départ de l'architecte principal et de 2 développeurs de l'intégrateur : lot 2 livré avec 5 semaines de retard ; plan de rattrapage avec 2 consultants supplémentaires aux frais de l'intégrateur.",
                "owner": "Claire Dumont",
                "status": "open"
              },
              "proximityDate": "2026-10-31",
              "milestone": "Livraison du lot 2 du CRM (service client)",
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
                5,
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
              "responsable": "Claire Dumont",
              "causes": [
                "Forte tension sur les profils CRM du marché",
                "Équipe de l'intégrateur concentrée sur 3 personnes clés",
                "Plan de charge de l'intégrateur non partagé"
              ],
              "consequences": [
                {
                  "texte": "Lot 2 livré avec 5 semaines de retard",
                  "chiffrage": "ouverture du portail décalée du 12/10 au 16/11"
                },
                {
                  "texte": "Double maintenance de l'ancien outil de service client",
                  "chiffrage": "≈ 160 k€, en partie couverts par les pénalités"
                }
              ],
              "mesures": [
                {
                  "texte": "Inscrire au contrat une clause de maintien des profils clés et des pénalités de retard.",
                  "porteur": "Claire Dumont",
                  "echeance": "31/01/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Revoir chaque mois la capacité et le plan de charge de l'intégrateur.",
                  "porteur": "Sophie Garnier",
                  "echeance": "30/04/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Suivre le plan de rattrapage : 2 consultants supplémentaires aux frais de l'intégrateur.",
                  "porteur": "Claire Dumont",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 3
                },
                {
                  "texte": "Qualifier un second intégrateur pour le lot 3 (fidélité).",
                  "porteur": "Claire Dumont",
                  "echeance": "15/12/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-07-22",
                  "auteur": "Sophie Garnier",
                  "texte": "Risque survenu le 20/07 : probabilité portée à 5 ; impact contenu à I3 grâce aux pénalités contractuelles (dégradation au-delà de la cotation inhérente assumée)."
                },
                {
                  "date": "2026-08-04",
                  "auteur": "Comité de programme (04/08)",
                  "texte": "Plan de rattrapage exigé de l'intégrateur ; pénalités de 48 k€ appliquées."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Claire Dumont",
                  "texte": "Rattrapage conforme à ce jour : 2 consultants arrivés, livraison du lot 2 confirmée au 31/10."
                }
              ],
              "liens": [
                {
                  "libelle": "Contrat de l'intégrateur CRM — avenant 2",
                  "url": "https://intranet.valmeris.example/achats/contrat-integrateur-crm"
                },
                {
                  "libelle": "Plan de rattrapage du lot 2",
                  "url": "https://intranet.valmeris.example/crm/plan-rattrapage-lot2"
                }
              ],
              "kri": [],
              "decisions": [
                {
                  "id": "cli-decision-4-1",
                  "date": "2026-08-04",
                  "author": "Comité de programme",
                  "type": "moreAction",
                  "reason": "Retard du lot 2 constaté : plan de rattrapage exigé de l'intégrateur et pénalités appliquées.",
                  "reviewDate": "2026-10-31",
                  "scoreAtDecision": 15
                }
              ],
              "cout": {
                "min": 60000,
                "probable": 160000,
                "max": 320000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-10-31",
              "currentNeedsReview": false,
              "lifeReason": "",
              "transferOwner": ""
            },
            {
              "uid": "cli-4-2",
              "id": "4.2",
              "title": "Retard de la plateforme de données du Socle numérique",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "cli-proj-crm",
                "cli-proj-fidelite",
                "cli-proj-portail"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par la direction de programme (risque transverse aux projets).",
              "kind": "threat",
              "event": "La plateforme de données du Socle numérique n'est pas disponible à la date prévue pour les lots analytiques du CRM et la fidélité.",
              "objective": "Disposer des données clients consolidées (segmentation, historique d'achats) pour le CRM et la fidélité début 2027.",
              "raisedAt": "2025-12-15",
              "raisedBy": "Hélène Rocher",
              "lifecycle": "active",
              "proximityDate": "2026-12-15",
              "milestone": "Mise à disposition de la plateforme de données (Socle numérique)",
              "impactAxes": {
                "cost": 3,
                "delay": 4,
                "quality": 2,
                "service": 2,
                "benefit": 4
              },
              "assessmentBefore": [
                4,
                4
              ],
              "assessmentCurrent": [
                4,
                3
              ],
              "assessmentAfter": [
                3,
                3
              ],
              "assessmentTarget": [
                2,
                3
              ],
              "traitement": "escalate",
              "velocite": 3,
              "statut": "statusInProgress",
              "responsable": "Hélène Rocher",
              "causes": [
                "Plateforme de données portée par un autre programme du portefeuille",
                "Priorités du Socle numérique centrées sur l'ERP",
                "Aucune solution de repli pour la segmentation clients"
              ],
              "consequences": [
                {
                  "texte": "Lots analytiques du CRM et lancement de la fidélité décalés d'un trimestre",
                  "chiffrage": "≈ 280 k€ (entrepôt tampon, prolongations)"
                },
                {
                  "texte": "Objectif NPS 2027 compromis",
                  "chiffrage": "−3 points sur la trajectoire"
                }
              ],
              "mesures": [
                {
                  "texte": "Tenir un point hebdomadaire avec le directeur du programme Socle numérique.",
                  "porteur": "Hélène Rocher",
                  "echeance": "31/03/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Construire un entrepôt tampon temporaire pour les indicateurs clients.",
                  "porteur": "Sophie Garnier",
                  "echeance": "31/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Obtenir l'arbitrage de priorité du comité de portefeuille.",
                  "porteur": "Hélène Rocher",
                  "echeance": "15/10/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Replanifier les lots analytiques du CRM après le jalon de la plateforme.",
                  "porteur": "Sophie Garnier",
                  "echeance": "31/10/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-08-28",
                  "auteur": "Hélène Rocher",
                  "texte": "Le Socle numérique annonce un décalage de 3 mois de la plateforme de données : probabilité remontée de 3 à 4."
                },
                {
                  "date": "2026-09-10",
                  "auteur": "Hélène Rocher",
                  "texte": "Escalade au comité de portefeuille : arbitrage de priorité et de financement demandé."
                }
              ],
              "liens": [
                {
                  "libelle": "Feuille de route de la plateforme de données",
                  "url": "https://intranet.valmeris.example/socle-numerique/plateforme-donnees/feuille-de-route"
                }
              ],
              "kri": [
                {
                  "id": "cli-kri-4-2",
                  "nom": "Jalons de la plateforme de données en retard",
                  "unite": "jalons",
                  "sens": "hausse",
                  "alerte": 2,
                  "critique": 4,
                  "releves": [
                    {
                      "date": "2026-03-31",
                      "valeur": 0,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-04-30",
                      "valeur": 1,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-05-31",
                      "valeur": 1,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-06-30",
                      "valeur": 1,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-07-31",
                      "valeur": 2,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-08-31",
                      "valeur": 3,
                      "auteur": "Hélène Rocher"
                    },
                    {
                      "date": "2026-09-25",
                      "valeur": 3,
                      "auteur": "Hélène Rocher"
                    }
                  ]
                }
              ],
              "decisions": [
                {
                  "id": "cli-decision-4-2",
                  "date": "2026-09-08",
                  "author": "Comité de programme",
                  "type": "moreAction",
                  "reason": "Au-delà de l'appétence du programme : escalade au comité de portefeuille et entrepôt tampon accéléré.",
                  "reviewDate": "2026-10-13",
                  "scoreAtDecision": 12
                }
              ],
              "cout": {
                "min": 80000,
                "probable": 280000,
                "max": 600000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-10",
              "prochaineRevue": "2026-10-13",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "cli-4-3",
              "id": "4.3",
              "title": "Hausse du coût des licences CRM et téléphonie au-delà du budget",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "cli-proj-crm",
                "cli-proj-contact"
              ],
              "programOrigin": "escalation",
              "programOriginNote": "Escaladé par le projet CRM unique le 10/06/2026 (score 12 au-delà de sa tolérance) ; pris en charge par le programme le 23/06.",
              "kind": "threat",
              "event": "Les éditeurs appliquent au renouvellement des hausses de licences non budgétées.",
              "objective": "Tenir le budget de fonctionnement du programme (licences ≤ 1,1 M€ par an).",
              "raisedAt": "2026-02-10",
              "raisedBy": "Sophie Garnier",
              "lifecycle": "active",
              "proximityDate": "2027-01-31",
              "milestone": "Renouvellement annuel des licences",
              "impactAxes": {
                "cost": 4,
                "delay": 1,
                "quality": 1,
                "service": 1,
                "benefit": 2
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
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Claire Dumont",
              "causes": [
                "Devis de renouvellement en hausse de 22 %",
                "Licences complètes attribuées à tous les profils",
                "Aucune clause de plafonnement des hausses"
              ],
              "consequences": [
                {
                  "texte": "Surcoût annuel de fonctionnement",
                  "chiffrage": "≈ 160 k€ par an"
                },
                {
                  "texte": "Arbitrage défavorable sur le périmètre de la fidélité",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Renégocier les paliers de licences avec l'éditeur CRM.",
                  "porteur": "Claire Dumont",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Réduire les licences complètes aux profils qui en ont besoin (1 000 → 640).",
                  "porteur": "Sophie Garnier",
                  "echeance": "31/08/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Inscrire une clause de plafonnement des hausses (3 % par an) dans l'avenant.",
                  "porteur": "Pauline Vasseur",
                  "echeance": "31/12/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                }
              ],
              "notes": [
                {
                  "date": "2026-06-23",
                  "auteur": "Comité de programme (23/06)",
                  "texte": "Escalade acceptée : le programme porte le risque, qui touche aussi le centre de contact."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Claire Dumont",
                  "texte": "Paliers renégociés et 360 licences complètes supprimées : probabilité ramenée de 4 à 3."
                }
              ],
              "liens": [
                {
                  "libelle": "Suivi budgétaire des licences",
                  "url": "https://intranet.valmeris.example/finance/programme-clients/licences"
                }
              ],
              "kri": [],
              "decisions": [
                {
                  "id": "cli-decision-4-3",
                  "date": "2026-09-08",
                  "author": "Comité de programme",
                  "type": "accept",
                  "reason": "Surcoût résiduel des licences absorbé par la réserve du programme dans la limite de 60 k€.",
                  "reviewDate": "2026-12-15",
                  "scoreAtDecision": 9
                }
              ],
              "cout": {
                "min": 50000,
                "probable": 160000,
                "max": 350000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-12-15",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            },
            {
              "uid": "cli-5-1",
              "id": "5.1",
              "title": "Fraude au programme de fidélité",
              "scopeLevel": "component",
              "componentId": "cli-proj-fidelite",
              "affectedComponentIds": [],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "threat",
              "event": "Des comptes fictifs ou des cumuls abusifs de points sont convertis en bons d'achat.",
              "objective": "Lancer une fidélité rentable, avec un taux de fraude inférieur à 0,5 % des points émis.",
              "raisedAt": "2026-01-20",
              "raisedBy": "Maxime Carrel",
              "lifecycle": "active",
              "proximityDate": "2027-02-01",
              "milestone": "Lancement national du programme de fidélité",
              "impactAxes": {
                "cost": 2,
                "delay": 1,
                "quality": 2,
                "service": 1,
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
              "velocite": 3,
              "statut": "statusInProgress",
              "responsable": "Maxime Carrel",
              "causes": [
                "Création de compte ouverte sans vérification d'identité",
                "Points cumulables sans plafond",
                "Aucune détection de comportements suspects"
              ],
              "consequences": [
                {
                  "texte": "Bons d'achat indûment consommés",
                  "chiffrage": "≈ 60 k€ la première année"
                },
                {
                  "texte": "Suspension temporaire de la conversion des points",
                  "chiffrage": "mécontentement des clients honnêtes"
                }
              ],
              "mesures": [
                {
                  "texte": "Définir les règles anti-fraude : plafonds de cumul, vérification de l'e-mail et du téléphone.",
                  "porteur": "Maxime Carrel",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Faire auditer le pilote par la sécurité des systèmes d'information.",
                  "porteur": "Julien Masson",
                  "echeance": "15/10/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 2
                },
                {
                  "texte": "Plafonner la valeur des points convertibles en bons d'achat.",
                  "porteur": "Mehdi Chaouch",
                  "echeance": "31/10/2026",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "protection",
                  "efficacite": 2
                },
                {
                  "texte": "Mettre en place le scoring des comportements suspects avec le prestataire de fidélité.",
                  "porteur": "Maxime Carrel",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                }
              ],
              "notes": [
                {
                  "date": "2026-06-30",
                  "auteur": "Maxime Carrel",
                  "texte": "Règles anti-fraude livrées ; pilote ouvert dans 3 agences."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "Pilote sans abus significatif sur l'été (0,2 % des points) : probabilité ramenée de 3 à 2."
                }
              ],
              "liens": [
                {
                  "libelle": "Règlement du programme de fidélité (projet)",
                  "url": "https://intranet.valmeris.example/marketing/fidelite/reglement"
                }
              ],
              "kri": [],
              "decisions": [],
              "cout": {
                "min": 10000,
                "probable": 60000,
                "max": 180000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-12-07",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-5-2",
              "id": "5.2",
              "title": "Vente de créneaux de livraison premium grâce au suivi en temps réel",
              "scopeLevel": "component",
              "componentId": "cli-proj-portail",
              "affectedComponentIds": [
                "cli-proj-fidelite"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par l'équipe projet lors de l'analyse de risques du projet.",
              "kind": "opportunity",
              "event": "Les clients achètent en ligne des créneaux de livraison précis rendus possibles par le suivi en temps réel.",
              "objective": "Créer un revenu de services complémentaire et différencier l'offre de livraison.",
              "raisedAt": "2026-04-15",
              "raisedBy": "Karim Belkacem",
              "lifecycle": "active",
              "proximityDate": "2027-03-31",
              "milestone": "Ouverture des créneaux de livraison premium",
              "impactAxes": {
                "cost": 1,
                "delay": 1,
                "quality": 2,
                "service": 3,
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
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Karim Belkacem",
              "causes": [
                "18 % des clients du pilote demandent un créneau précis",
                "Suivi des colis en temps réel fourni par les Entrepôts connectés",
                "Demande exprimée par 2 grands comptes"
              ],
              "consequences": [
                {
                  "texte": "Revenu de services supplémentaire",
                  "chiffrage": "≈ 200 k€ par an"
                },
                {
                  "texte": "Argument commercial auprès des grands comptes",
                  "chiffrage": "non chiffré"
                }
              ],
              "mesures": [
                {
                  "texte": "Tester le prix des créneaux premium auprès de 2 grands comptes.",
                  "porteur": "Nathalie Ferrand",
                  "echeance": "31/08/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Définir avec la Direction des opérations la capacité de créneaux par tournée.",
                  "porteur": "Bastien Coulon",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Intégrer la réservation et le paiement du créneau au portail.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/01/2027",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-09-08",
                  "auteur": "Comité de programme (08/09)",
                  "texte": "Étude de prix concluante : probabilité portée de 2 à 3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Hélène Rocher",
                  "texte": "Opportunité : la cotation monte après traitement par construction. L'alerte « plus grave qu'avant » du contrôleur est attendue et assumée."
                }
              ],
              "liens": [
                {
                  "libelle": "Étude de prix des créneaux premium",
                  "url": "https://intranet.valmeris.example/commercial/etude-creneaux-premium"
                }
              ],
              "kri": [],
              "decisions": [],
              "cout": {
                "min": 80000,
                "probable": 200000,
                "max": 350000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-12-07",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              }
            },
            {
              "uid": "cli-5-3",
              "id": "5.3",
              "title": "Hausse du NPS plus rapide grâce aux notifications proactives de livraison",
              "scopeLevel": "program",
              "affectedComponentIds": [
                "cli-proj-portail",
                "cli-proj-contact"
              ],
              "programOrigin": "native",
              "programOriginNote": "Identifié par la direction de programme (risque transverse aux projets).",
              "kind": "opportunity",
              "event": "Les notifications proactives (retard, créneau, livraison effectuée) font progresser le NPS plus vite que prévu.",
              "objective": "Atteindre un NPS de 40 dès mi-2027 au lieu de fin 2027.",
              "raisedAt": "2025-11-20",
              "raisedBy": "Nathalie Ferrand",
              "lifecycle": "active",
              "proximityDate": "2026-12-31",
              "milestone": "Mesure du NPS de fin d'année",
              "impactAxes": {
                "cost": 2,
                "delay": 2,
                "quality": 3,
                "service": 4,
                "benefit": 5
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
                3,
                4
              ],
              "assessmentTarget": [
                3,
                4
              ],
              "traitement": "enhance",
              "velocite": 2,
              "statut": "statusInProgress",
              "responsable": "Nathalie Ferrand",
              "causes": [
                "Les appels « où est mon colis ? » représentent 38 % des contacts",
                "Suivi des colis en temps réel disponible pour le portail",
                "Pilote : +8 points de NPS chez les clients notifiés"
              ],
              "consequences": [
                {
                  "texte": "Baisse des appels au centre de contact",
                  "chiffrage": "−20 % d'appels « où est mon colis ? »"
                },
                {
                  "texte": "Moindre attrition des clients professionnels",
                  "chiffrage": "≈ 400 k€ de marge préservée par an"
                }
              ],
              "mesures": [
                {
                  "texte": "Mesurer le NPS des clients notifiés et non notifiés du pilote.",
                  "porteur": "Élodie Rousseau",
                  "echeance": "30/06/2026",
                  "etat": "done",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 4
                },
                {
                  "texte": "Étendre les notifications par SMS et e-mail à tous les clients à l'ouverture du portail.",
                  "porteur": "Karim Belkacem",
                  "echeance": "30/11/2026",
                  "etat": "doing",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 3
                },
                {
                  "texte": "Ajouter une notification de retard avec proposition de nouveau créneau.",
                  "porteur": "Karim Belkacem",
                  "echeance": "31/03/2027",
                  "etat": "todo",
                  "verification": "",
                  "barriere": "prevention",
                  "efficacite": 0
                }
              ],
              "notes": [
                {
                  "date": "2026-06-30",
                  "auteur": "Élodie Rousseau",
                  "texte": "NPS du pilote à +8 points chez les clients notifiés : probabilité portée de 2 à 3."
                },
                {
                  "date": "2026-09-08",
                  "auteur": "Hélène Rocher",
                  "texte": "Opportunité : la cotation monte après traitement par construction. L'alerte « plus grave qu'avant » du contrôleur est attendue et assumée."
                }
              ],
              "liens": [
                {
                  "libelle": "Baromètre NPS — pilote du portail",
                  "url": "https://intranet.valmeris.example/service-client/nps/pilote-portail"
                }
              ],
              "kri": [],
              "decisions": [],
              "cout": {
                "min": 150000,
                "probable": 400000,
                "max": 700000,
                "probabilite": null,
                "sansProtection": null
              },
              "revuLe": "2026-09-08",
              "prochaineRevue": "2026-12-31",
              "currentNeedsReview": false,
              "lifeDate": "",
              "lifeReason": "",
              "transferOwner": "",
              "issue": {
                "description": "",
                "owner": "",
                "status": "open"
              },
              "componentId": ""
            }
          ],
          "riskGroups": [
            {
              "id": 1,
              "name": "Données clients et conformité",
              "description": "Qualité des fiches clients, consentements RGPD et conservation des données",
              "assessmentNote": "La fusion de quatre bases clients expose le programme à des doublons et à des consentements non prouvés.",
              "remediationNote": "Dédoublonnage avant reprise, analyse d'impact, centre de préférences et purge des fiches sans consentement valide.",
              "color": "#2E86C1",
              "mesures": [],
              "riskIds": [
                "1.1",
                "1.2",
                "1.3"
              ]
            },
            {
              "id": 2,
              "name": "Adoption et organisation",
              "description": "Appropriation des outils par les conseillers, charge des équipes et pics d'activité",
              "assessmentNote": "Le NPS ne progressera que si conseillers et centre de contact adoptent les outils sans dégrader le service.",
              "remediationNote": "Ambassadeurs, formation par vagues, suppression des doubles saisies, dimensionnement et renforts mobilisables.",
              "color": "#27AE60",
              "mesures": [],
              "riskIds": [
                "2.1",
                "2.2",
                "2.3"
              ]
            },
            {
              "id": 3,
              "name": "Plateformes et exploitation",
              "description": "Disponibilité et sécurité du portail, flux de suivi des colis en temps réel",
              "assessmentNote": "Le portail est exposé à internet et dépend de flux externes au programme : disponibilité et sécurité conditionnent la confiance.",
              "remediationNote": "Tests de charge, réseau de diffusion, mode dégradé, test d'intrusion, authentification forte et contrat d'interface.",
              "color": "#8E44AD",
              "mesures": [],
              "riskIds": [
                "3.1",
                "3.2",
                "3.3"
              ]
            },
            {
              "id": 4,
              "name": "Fournisseurs et dépendances",
              "description": "Intégrateur CRM, licences et dépendances aux autres programmes du portefeuille",
              "assessmentNote": "Le calendrier dépend d'un intégrateur sous tension et de la plateforme de données du Socle numérique.",
              "remediationNote": "Clauses de maintien des profils, pénalités, plan de rattrapage, entrepôt tampon et escalade au portefeuille.",
              "color": "#E67E22",
              "mesures": [],
              "riskIds": [
                "4.1",
                "4.2",
                "4.3"
              ]
            },
            {
              "id": 5,
              "name": "Valeur client et fidélité",
              "description": "Programme de fidélité, nouveaux services et satisfaction client",
              "assessmentNote": "La fidélité et le suivi en temps réel ouvrent des gains de NPS et de revenus, mais exposent à la fraude.",
              "remediationNote": "Règles anti-fraude, scoring des comportements, plafonds de conversion et exploitation des notifications de livraison.",
              "color": "#C0392B",
              "mesures": [],
              "riskIds": [
                "5.1",
                "5.2",
                "5.3"
              ]
            }
          ]
        }
      }
    ],
    "decisions": [
      {
        "uid": "pf-dec-1",
        "date": "2026-06-24",
        "author": "Comité exécutif Valmeris",
        "subject": "Séquencement des programmes",
        "decision": "La plateforme de données du Socle numérique passe avant le portail client",
        "reason": "Le portail et le suivi des colis en dépendent ; éviter un double développement."
      },
      {
        "uid": "pf-dec-2",
        "date": "2026-07-15",
        "author": "Comité exécutif Valmeris",
        "subject": "Réserve de portefeuille",
        "decision": "Constituer une réserve commune de 600 k€ gérée par la direction financière",
        "reason": "Les dépassements des automates et de l’ERP ne peuvent pas être absorbés par les réserves des programmes."
      },
      {
        "uid": "pf-dec-3",
        "date": "2026-09-23",
        "author": "Nathalie Verdier",
        "subject": "Pic de fin d’année",
        "decision": "Gel des mises en production du 15/11 au 05/01 sur les trois programmes",
        "reason": "Protéger le service pendant la période la plus chargée de l’année."
      }
    ],
    "journal": [
      {
        "uid": "rmujnat21qu4pe",
        "date": "2026-09-27T09:57:52.921Z",
        "kind": "import",
        "title": "Socle numérique",
        "source": "programme-si/riskr-data.js"
      },
      {
        "uid": "rmujnat2n7c2y0",
        "date": "2026-09-27T09:57:52.943Z",
        "kind": "import",
        "title": "Entrepôts connectés",
        "source": "programme-entrepots/riskr-data.js"
      },
      {
        "uid": "rmujnat3x8js0b",
        "date": "2026-09-27T09:57:52.988Z",
        "kind": "import",
        "title": "Relation client omnicanale",
        "source": "programme-clients/riskr-data.js"
      }
    ]
  }
};
