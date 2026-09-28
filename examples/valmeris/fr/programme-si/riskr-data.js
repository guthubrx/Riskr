// Données de démonstration entièrement fictives pour Riskr : Groupe Valmeris, programme « Socle numérique ».
// Aucune entreprise, personne ou projet réel. Fichier généré par generer-riskr-data.py.
window.RISKR_DATA = {
  "version": "2.1",
  "appState": {
    "title": "Riskr - Socle numérique",
    "subtitle": "Groupe Valmeris (fictif) · portefeuille Transformation Valmeris 2026-2028 · programme Socle numérique",
    "language": "fr",
    "storageNamespace": "valmeris-socle"
  },
  "program": {
    "uid": "si-program",
    "title": "Socle numérique",
    "objective": "Remplacer l'ERP vieillissant, bâtir une plateforme de données commune et durcir la cybersécurité du Groupe Valmeris d'ici fin 2028 (budget 9 M€).",
    "sponsor": "Bertrand Lesage, directeur général délégué",
    "manager": "Nadia Benali, directrice de programme (DSI)",
    "status": "active",
    "appetite": 9,
    "reserve": 450000,
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
        "decisionReason": ""
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
    "riskAppetite": 9,
    "cadenceRevue": 90,
    "echelleImpact": [
      20000,
      100000,
      500000,
      2000000
    ],
    "effetVelocite": "discret"
  },
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
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Tableau de suivi présenté au comité du 20/01/2026."
        },
        {
          "texte": "Soumettre toute demande de changement hors périmètre au comité d'arbitrage.",
          "porteur": "Nadia Benali",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Renégocier le forfait d'intégration ERP en jalons payés à la livraison.",
          "porteur": "Antoine Lefebvre",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Prévoir une provision de 5 % par projet dans le budget 2027.",
          "porteur": "Mathilde Roussel",
          "echeance": "30/11/2026",
          "etat": "todo",
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
        "max": 1200000
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
      "programOriginNote": "Identifié par le programme dès le cadrage : l'enveloppe est votée globalement, pas projet par projet."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Remplacer 30 % du temps des experts finance par des intérimaires qualifiés.",
          "porteur": "Pierre-Yves Tanguy",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Publier le calendrier des ateliers trois mois à l'avance, hors périodes de clôture.",
          "porteur": "Julien Carré",
          "echeance": "31/10/2026",
          "etat": "doing",
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
        "max": 350000
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
      "programOriginNote": "Risque transverse : les mêmes experts servent l'ERP, la plateforme de données et la conduite du changement."
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Lancer une consultation commune avec la Direction des achats.",
          "porteur": "Antoine Lefebvre",
          "echeance": "15/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Faire valider le principe d'un contrat unique par le comité de portefeuille.",
          "porteur": "Nadia Benali",
          "echeance": "20/10/2026",
          "etat": "todo",
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
        "max": 400000
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
      "programOriginNote": "Proposé par la Direction des achats : les programmes Entrepôts connectés et Relation client consomment le même cloud."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Automatiser les contrôles de qualité avant chaque répétition de migration.",
          "porteur": "Julien Carré",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4,
          "verification": "Rapport de contrôle de la répétition n° 3 (juin 2026)."
        },
        {
          "texte": "Nettoyer les 42 000 fiches articles en doublon.",
          "porteur": "Yannick Morel",
          "echeance": "31/08/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Répéter la bascule complète avec les données réelles de production.",
          "porteur": "Julien Carré",
          "echeance": "15/11/2026",
          "etat": "todo",
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
              "valeur": 7.0,
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
      "programOriginNote": "Risque du projet Migration ERP ; la plateforme de données hérite des mêmes référentiels."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Renforcer la recette de six testeurs financés sur la réserve programme.",
          "porteur": "Julien Carré",
          "echeance": "31/07/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3,
          "verification": "Six testeurs en poste depuis le 06/07/2026."
        },
        {
          "texte": "Obtenir de l'intégrateur un engagement écrit sur le plan de recette resserré.",
          "porteur": "Antoine Lefebvre",
          "echeance": "10/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 1
        },
        {
          "texte": "Préparer un scénario de bascule au 1er avril 2027, hors clôture.",
          "porteur": "Pierre-Yves Tanguy",
          "echeance": "31/10/2026",
          "etat": "doing",
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
        "max": 1200000
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
      "programOriginNote": "Risque du projet Migration ERP, escaladé au programme le 02/06/2026 pour le financement de la recette."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Mettre à disposition un bouchon de test partagé avec Entrepôts connectés.",
          "porteur": "Olivier Masson",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Tenir un point hebdomadaire d'interface avec le programme Entrepôts connectés.",
          "porteur": "Nadia Benali",
          "echeance": "31/12/2026",
          "etat": "doing",
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
        "max": 400000
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
      "programOriginNote": "Risque du projet Migration ERP, suivi avec le programme Entrepôts connectés qui dépend de l'ERP."
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Intégrer le flux de facturation électronique à la recette de la version 1.",
          "porteur": "Julien Carré",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Sélectionner la plateforme de dématérialisation partenaire.",
          "porteur": "Antoine Lefebvre",
          "echeance": "31/01/2027",
          "etat": "todo",
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
        "max": 95000
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
      "programOriginNote": "Opportunité repérée par la Direction financière lors des ateliers facturation."
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
          "barriere": "prevention",
          "efficacite": 3,
          "verification": "Deux ingénieurs en poste le 13/04/2026."
        },
        {
          "texte": "Livrer en priorité le domaine « stocks » attendu par Entrepôts connectés.",
          "porteur": "Sophie Delorme",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Proposer au portefeuille un décalage coordonné des jalons des programmes clients et entrepôts.",
          "porteur": "Nadia Benali",
          "echeance": "15/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 1
        },
        {
          "texte": "Ouvrir un accès provisoire par extractions quotidiennes en cas de retard.",
          "porteur": "Sophie Delorme",
          "echeance": "30/11/2026",
          "etat": "todo",
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
        "max": 450000
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
      "programOriginNote": "Escaladé par le projet Plateforme de données le 24/03/2026 : deux autres programmes du portefeuille en dépendent."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Nommer un responsable de données dans chaque direction.",
          "porteur": "Nadia Benali",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Animer un comité données mensuel avec la Direction commerciale et le Service client.",
          "porteur": "Laure Perrin",
          "echeance": "31/12/2026",
          "etat": "doing",
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
        "max": 95000
      },
      "kri": [],
      "decisions": [],
      "revuLe": "2026-09-22",
      "prochaineRevue": "2026-12-15",
      "scopeLevel": "component",
      "componentId": "si-proj-data",
      "affectedComponentIds": [],
      "programOrigin": "native",
      "programOriginNote": "Risque du projet Plateforme de données."
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
          "barriere": "prevention",
          "efficacite": 5
        },
        {
          "texte": "Tester un export complet des données avant la signature du contrat.",
          "porteur": "Sophie Delorme",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Faire signer une clause de réversibilité avec restitution des données.",
          "porteur": "Claire Vasseur",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4,
          "verification": "Contrat signé le 12/05/2026, article 14."
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
        "max": 90000
      },
      "kri": [],
      "decisions": [],
      "revuLe": "2026-06-16",
      "prochaineRevue": "2026-12-15",
      "scopeLevel": "component",
      "componentId": "si-proj-data",
      "affectedComponentIds": [],
      "programOrigin": "native",
      "programOriginNote": "Risque du projet Plateforme de données, clos à la signature du contrat."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Étendre l'authentification multifacteur aux 38 sites et aux accès distants.",
          "porteur": "Fatou Diallo",
          "echeance": "31/08/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Mener une campagne de sensibilisation trimestrielle sur tous les sites.",
          "porteur": "Thomas Guérin",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Isoler automatiquement les comptes suspects (détection et réponse).",
          "porteur": "Karim Haddad",
          "echeance": "30/11/2026",
          "etat": "todo",
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
        "max": 400000
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
      "programOriginNote": "Risque du projet Cybersécurité et identités ; l'annuaire d'identités sert aussi le programme Relation client."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Mettre en place des sauvegardes hors ligne immuables testées chaque mois.",
          "porteur": "Élodie Fournier",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4,
          "verification": "Restauration complète testée le 24/06/2026 en 9 h."
        },
        {
          "texte": "Appliquer les correctifs critiques restants ou isoler les serveurs concernés.",
          "porteur": "Karim Haddad",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Organiser un exercice de crise rançongiciel avec le comité de direction.",
          "porteur": "Karim Haddad",
          "echeance": "30/11/2026",
          "etat": "todo",
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
        "max": 1300000
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
      "programOriginNote": "Risque du projet Cybersécurité et identités ; il pèse sur la Migration ERP et la Bascule cloud."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Répéter chaque bascule sur un environnement miroir.",
          "porteur": "Élodie Fournier",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Tester un retour arrière en moins de 2 heures pour chaque application critique.",
          "porteur": "Olivier Masson",
          "echeance": "31/10/2026",
          "etat": "doing",
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
      "programOriginNote": "Risque du projet Bascule cloud des applications ; dépend de l'annuaire d'identités du projet Cybersécurité."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Associer les représentants du personnel au calendrier de déploiement.",
          "porteur": "Isabelle Roche",
          "echeance": "31/05/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Former les formateurs internes des entrepôts.",
          "porteur": "Thomas Guérin",
          "echeance": "15/12/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Mesurer l'adhésion par une enquête après chaque vague de démarrage.",
          "porteur": "Isabelle Roche",
          "echeance": "31/01/2027",
          "etat": "todo",
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
        "max": 300000
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
      "programOriginNote": "Risque du chantier transverse Conduite du changement."
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Documenter les procédures d'exploitation de l'ancien ERP.",
          "porteur": "Julien Carré",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3,
          "verification": "Procédures publiées sur l'intranet le 26/06/2026."
        },
        {
          "texte": "Qualifier un prestataire spécialisé en binôme avec les experts.",
          "porteur": "Antoine Lefebvre",
          "echeance": "31/05/2026",
          "etat": "done",
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
        "max": 250000
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
      "programOriginNote": "Risque du projet Migration ERP ; les correctifs de l'ancien ERP intéressent aussi la cybersécurité."
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Pseudonymiser les données clients dans les environnements de test.",
          "porteur": "Sophie Delorme",
          "echeance": "31/05/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Réaliser l'analyse d'impact sur le référentiel clients unifié.",
          "porteur": "Claire Vasseur",
          "echeance": "31/10/2026",
          "etat": "doing",
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
        "max": 450000
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
      "programOriginNote": "Descendu du portefeuille le 20/01/2026 : exigence commune de conformité des données personnelles aux trois programmes."
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
      "riskIds": [
        "5.1",
        "5.2",
        "5.3"
      ]
    }
  ],
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ]
    }
  ],
  "journal": [
    {
      "id": "si-j01",
      "date": "2025-10-15T08:30:00Z",
      "auteur": "Mathilde Roussel",
      "uid": "si-1-1",
      "risque": "1.1",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Dépassement du budget du programme"
    },
    {
      "id": "si-j02",
      "date": "2025-11-18T16:40:00Z",
      "auteur": "Nadia Benali",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de cadrage du programme"
    },
    {
      "id": "si-j03",
      "date": "2026-01-12T10:05:00Z",
      "auteur": "Sophie Delorme",
      "uid": "si-3-1",
      "risque": "3.1",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Retard de la plateforme de données pour les programmes clients et entrepôts"
    },
    {
      "id": "si-j04",
      "date": "2026-01-20T15:20:00Z",
      "auteur": "Claire Vasseur",
      "uid": "si-5-3",
      "risque": "5.3",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Non-conformité des données personnelles centralisées"
    },
    {
      "id": "si-j05",
      "date": "2026-01-20T17:00:00Z",
      "auteur": "Nadia Benali",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de lancement des projets"
    },
    {
      "id": "si-j06",
      "date": "2026-03-24T09:40:00Z",
      "auteur": "Bertrand Lesage",
      "uid": "si-3-1",
      "risque": "3.1",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Action supplémentaire · Reprendre le risque au niveau programme et financer deux ingénieurs de données."
    },
    {
      "id": "si-j07",
      "date": "2026-03-24T10:15:00Z",
      "auteur": "Nadia Benali",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue du premier trimestre 2026"
    },
    {
      "id": "si-j08",
      "date": "2026-04-30T16:00:00Z",
      "auteur": "Karim Haddad",
      "uid": "si-4-2",
      "risque": "4.2",
      "champ": "mesure.etat",
      "detail": "Segmenter le réseau de l'ancien ERP.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "si-j09",
      "date": "2026-05-12T11:30:00Z",
      "auteur": "Olivier Masson",
      "uid": "si-3-3",
      "risque": "3.3",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Contrat signé avec formats ouverts et clause de réversibilité : risque clos."
    },
    {
      "id": "si-j10",
      "date": "2026-06-02T08:50:00Z",
      "auteur": "Julien Carré",
      "uid": "si-2-2",
      "risque": "2.2",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Escalade au programme : la réserve du projet ne couvre pas six testeurs supplémentaires."
    },
    {
      "id": "si-j11",
      "date": "2026-06-16T14:10:00Z",
      "auteur": "Julien Carré",
      "uid": "si-2-2",
      "risque": "2.2",
      "champ": "assessmentAfter",
      "detail": "",
      "avant": "2,4",
      "apres": "3,4"
    },
    {
      "id": "si-j12",
      "date": "2026-06-16T14:30:00Z",
      "auteur": "Nadia Benali",
      "uid": "si-5-2",
      "risque": "5.2",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Accepter · Mesures réalisées ; exposition résiduelle compatible avec la tolérance du projet jusqu'à la décommission."
    },
    {
      "id": "si-j13",
      "date": "2026-06-16T15:00:00Z",
      "auteur": "Nadia Benali",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de fin de cadrage"
    },
    {
      "id": "si-j14",
      "date": "2026-07-08T19:45:00Z",
      "auteur": "Karim Haddad",
      "uid": "si-4-1",
      "risque": "4.1",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Risque survenu : 14 comptes compromis à Vénissieux, messagerie coupée 6 h. Cellule de crise activée."
    },
    {
      "id": "si-j15",
      "date": "2026-07-31T08:00:00Z",
      "auteur": "Julien Carré",
      "uid": "si-2-2",
      "risque": "2.2",
      "champ": "mesure.etat",
      "detail": "Renforcer la recette de six testeurs financés sur la réserve programme.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "si-j16",
      "date": "2026-08-31T17:00:00Z",
      "auteur": "Julien Carré",
      "uid": "si-2-2",
      "risque": "2.2",
      "champ": "kri.releve",
      "detail": "Retard de la recette intégrée sur le plan",
      "avant": "",
      "apres": "22 points"
    },
    {
      "id": "si-j17",
      "date": "2026-09-15T09:00:00Z",
      "auteur": "Mathilde Roussel",
      "uid": "si-1-1",
      "risque": "1.1",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Renégociation du forfait intégrateur engagée mais non signée à l'échéance : mesure en retard."
    },
    {
      "id": "si-j18",
      "date": "2026-09-20T10:00:00Z",
      "auteur": "Sophie Delorme",
      "uid": "si-3-1",
      "risque": "3.1",
      "champ": "kri.releve",
      "detail": "Retard cumulé des lots de la plateforme",
      "avant": "",
      "apres": "9 semaines"
    },
    {
      "id": "si-j19",
      "date": "2026-09-21T16:20:00Z",
      "auteur": "Fatou Diallo",
      "uid": "si-4-1",
      "risque": "4.1",
      "champ": "kri.releve",
      "detail": "Taux de clic aux campagnes d'hameçonnage simulées",
      "avant": "",
      "apres": "9 %"
    },
    {
      "id": "si-j20",
      "date": "2026-09-22T09:30:00Z",
      "auteur": "Nadia Benali",
      "uid": "si-3-1",
      "risque": "3.1",
      "champ": "traitement",
      "detail": "",
      "avant": "reduce",
      "apres": "escalate"
    },
    {
      "id": "si-j21",
      "date": "2026-09-22T09:45:00Z",
      "auteur": "Bertrand Lesage",
      "uid": "si-1-1",
      "risque": "1.1",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Action supplémentaire · Signer l'avenant intégrateur et présenter un budget 2027 avec provision avant le comité d'octobre."
    },
    {
      "id": "si-j22",
      "date": "2026-09-22T11:00:00Z",
      "auteur": "Nadia Benali",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de rentrée avant le go/no-go ERP"
    }
  ]
};
