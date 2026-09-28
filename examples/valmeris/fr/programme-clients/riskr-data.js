// Données de démonstration ENTIÈREMENT FICTIVES (Groupe Valmeris, programme « Relation client omnicanale »).
// Aucune entreprise, personne ou projet réel. Généré par generer-riskr-data.mjs.
window.RISKR_DATA = {
  "version": "2.1",
  "appState": {
    "title": "Riskr - Relation client omnicanale",
    "subtitle": "Groupe Valmeris (fictif) · portefeuille Transformation Valmeris 2026-2028",
    "language": "fr",
    "storageNamespace": "valmeris-clients"
  },
  "program": {
    "uid": "cli-program",
    "title": "Relation client omnicanale",
    "objective": "Un CRM unique, un portail client avec suivi des livraisons en temps réel, un centre de contact multicanal et un programme de fidélité pour porter le NPS de 21 à 40 d'ici fin 2027 (budget ≈ 6 M€).",
    "sponsor": "Nathalie Ferrand",
    "manager": "Hélène Rocher",
    "status": "active",
    "appetite": 9,
    "reserve": 300000,
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
        "decisionReason": ""
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
    "riskAppetite": 9,
    "cadenceRevue": 90,
    "echelleImpact": [
      15000,
      75000,
      300000,
      1200000
    ],
    "effetVelocite": "discret"
  },
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Profiler et dédoublonner les 1,8 million de fiches clients avant reprise.",
          "porteur": "Lucie Perrin",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Publier un tableau de bord qualité mensuel par source.",
          "porteur": "Lucie Perrin",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Prévoir une cellule de correction manuelle après bascule (4 ETP, 6 semaines).",
          "porteur": "Élodie Rousseau",
          "echeance": "15/12/2026",
          "etat": "todo",
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
        "max": 400000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-11-02"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Réaliser l'analyse d'impact (AIPD) du CRM unique et de la fidélité.",
          "porteur": "Amandine Roux",
          "echeance": "15/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Déployer le centre de préférences dans le portail client.",
          "porteur": "Karim Belkacem",
          "echeance": "31/08/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Purger les fiches sans consentement valide avant la première campagne.",
          "porteur": "Lucie Perrin",
          "echeance": "30/11/2026",
          "etat": "todo",
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
        "max": 1500000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-11-15"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Paramétrer la purge automatique et la tester sur le pilote.",
          "porteur": "Romain Chevalier",
          "echeance": "15/06/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Contrôler chaque trimestre les volumes conservés.",
          "porteur": "Amandine Roux",
          "echeance": "15/07/2026",
          "etat": "done",
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
        "max": 200000
      },
      "revuLe": "2026-07-15",
      "prochaineRevue": "2026-12-07"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Supprimer la double saisie dans l'ancien outil de devis.",
          "porteur": "Sophie Garnier",
          "echeance": "31/07/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Former les 320 conseillers par vagues régionales.",
          "porteur": "Antoine Girard",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Suivre l'usage hebdomadaire par agence et relancer les managers.",
          "porteur": "Hélène Rocher",
          "echeance": "31/12/2026",
          "etat": "doing",
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
        "max": 350000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-11-30"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Contractualiser un renfort de 30 conseillers intérimaires mobilisable sous 10 jours.",
          "porteur": "Claire Dumont",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Activer le rappel automatique et l'assistant conversationnel de premier niveau.",
          "porteur": "Élodie Rousseau",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Publier les réponses en libre-service sur le suivi des colis avant l'ouverture.",
          "porteur": "Karim Belkacem",
          "echeance": "15/11/2026",
          "etat": "todo",
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
        "max": 280000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-10-13"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Financer 3 remplaçants temporaires pour libérer les experts métier.",
          "porteur": "Mehdi Chaouch",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Suivre la charge des utilisateurs clés en comité mensuel.",
          "porteur": "Hélène Rocher",
          "echeance": "31/12/2026",
          "etat": "doing",
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
        "max": 90000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-12-07"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Placer le portail derrière un réseau de diffusion (CDN) et une file d'attente virtuelle.",
          "porteur": "Karim Belkacem",
          "echeance": "31/07/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Définir le mode dégradé : suivi des colis en lecture seule si le CRM est indisponible.",
          "porteur": "Karim Belkacem",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Renforcer l'astreinte pendant les 6 semaines suivant l'ouverture.",
          "porteur": "Romain Chevalier",
          "echeance": "15/11/2026",
          "etat": "todo",
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
        "max": 260000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-11-16"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Afficher un suivi à J-1 depuis l'ERP en solution de repli.",
          "porteur": "Karim Belkacem",
          "echeance": "31/08/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Tester le flux de bout en bout sur 5 entrepôts pilotes.",
          "porteur": "Bastien Coulon",
          "echeance": "31/10/2026",
          "etat": "doing",
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
        "max": 300000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-10-30"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Valider le plan de réponse à incident et de notification CNIL sous 72 h.",
          "porteur": "Amandine Roux",
          "echeance": "31/05/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Activer l'authentification forte via l'annuaire d'identités du Socle numérique.",
          "porteur": "Julien Masson",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Détecter les connexions anormales et bloquer automatiquement les comptes.",
          "porteur": "Julien Masson",
          "echeance": "31/12/2026",
          "etat": "todo",
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
        "max": 2000000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-11-16"
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
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Revoir chaque mois la capacité et le plan de charge de l'intégrateur.",
          "porteur": "Sophie Garnier",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Suivre le plan de rattrapage : 2 consultants supplémentaires aux frais de l'intégrateur.",
          "porteur": "Claire Dumont",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Qualifier un second intégrateur pour le lot 3 (fidélité).",
          "porteur": "Claire Dumont",
          "echeance": "15/12/2026",
          "etat": "todo",
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
        "max": 320000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-10-31"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Construire un entrepôt tampon temporaire pour les indicateurs clients.",
          "porteur": "Sophie Garnier",
          "echeance": "31/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Obtenir l'arbitrage de priorité du comité de portefeuille.",
          "porteur": "Hélène Rocher",
          "echeance": "15/10/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Replanifier les lots analytiques du CRM après le jalon de la plateforme.",
          "porteur": "Sophie Garnier",
          "echeance": "31/10/2026",
          "etat": "todo",
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
        "max": 600000
      },
      "revuLe": "2026-09-10",
      "prochaineRevue": "2026-10-13"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Réduire les licences complètes aux profils qui en ont besoin (1 000 → 640).",
          "porteur": "Sophie Garnier",
          "echeance": "31/08/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Inscrire une clause de plafonnement des hausses (3 % par an) dans l'avenant.",
          "porteur": "Pauline Vasseur",
          "echeance": "31/12/2026",
          "etat": "doing",
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
        "max": 350000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-12-15"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Faire auditer le pilote par la sécurité des systèmes d'information.",
          "porteur": "Julien Masson",
          "echeance": "15/10/2026",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Plafonner la valeur des points convertibles en bons d'achat.",
          "porteur": "Mehdi Chaouch",
          "echeance": "31/10/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 2
        },
        {
          "texte": "Mettre en place le scoring des comportements suspects avec le prestataire de fidélité.",
          "porteur": "Maxime Carrel",
          "echeance": "30/11/2026",
          "etat": "doing",
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
        "max": 180000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-12-07"
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
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Définir avec la Direction des opérations la capacité de créneaux par tournée.",
          "porteur": "Bastien Coulon",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Intégrer la réservation et le paiement du créneau au portail.",
          "porteur": "Karim Belkacem",
          "echeance": "31/01/2027",
          "etat": "todo",
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
        "max": 350000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-12-07"
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
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Étendre les notifications par SMS et e-mail à tous les clients à l'ouverture du portail.",
          "porteur": "Karim Belkacem",
          "echeance": "30/11/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Ajouter une notification de retard avec proposition de nouveau créneau.",
          "porteur": "Karim Belkacem",
          "echeance": "31/03/2027",
          "etat": "todo",
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
        "max": 700000
      },
      "revuLe": "2026-09-08",
      "prochaineRevue": "2026-12-31"
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
      "riskIds": [
        "5.1",
        "5.2",
        "5.3"
      ]
    }
  ],
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
  "journal": [
    {
      "id": "cli-j01",
      "date": "2025-11-25T16:30:00Z",
      "auteur": "Hélène Rocher",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de lancement"
    },
    {
      "id": "cli-j02",
      "date": "2025-12-15T10:05:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-4-2",
      "risque": "4.2",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Retard de la plateforme de données du Socle numérique"
    },
    {
      "id": "cli-j03",
      "date": "2026-01-20T14:12:00Z",
      "auteur": "Maxime Carrel",
      "uid": "cli-5-1",
      "risque": "5.1",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Fraude au programme de fidélité"
    },
    {
      "id": "cli-j04",
      "date": "2026-01-27T16:45:00Z",
      "auteur": "Hélène Rocher",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de fin de cadrage"
    },
    {
      "id": "cli-j05",
      "date": "2026-01-31T09:20:00Z",
      "auteur": "Sophie Garnier",
      "uid": "cli-1-1",
      "risque": "1.1",
      "champ": "mesure.etat",
      "detail": "Définir un référentiel de qualité (adresse, e-mail, SIRET) avec règles de rejet.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "cli-j06",
      "date": "2026-02-10T11:00:00Z",
      "auteur": "Sophie Garnier",
      "uid": "cli-4-3",
      "risque": "4.3",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Hausse du coût des licences CRM et téléphonie au-delà du budget"
    },
    {
      "id": "cli-j07",
      "date": "2026-03-12T15:30:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-3-2",
      "risque": "3.2",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Données de suivi des colis en temps réel livrées en retard par les Entrepôts connectés"
    },
    {
      "id": "cli-j08",
      "date": "2026-04-07T16:40:00Z",
      "auteur": "Hélène Rocher",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue du premier trimestre"
    },
    {
      "id": "cli-j09",
      "date": "2026-04-15T08:50:00Z",
      "auteur": "Karim Belkacem",
      "uid": "cli-5-2",
      "risque": "5.2",
      "champ": "created",
      "detail": "",
      "avant": "",
      "apres": "Vente de créneaux de livraison premium grâce au suivi en temps réel"
    },
    {
      "id": "cli-j10",
      "date": "2026-04-30T17:10:00Z",
      "auteur": "Lucie Perrin",
      "uid": "cli-1-1",
      "risque": "1.1",
      "champ": "mesure.etat",
      "detail": "Profiler et dédoublonner les 1,8 million de fiches clients avant reprise.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "cli-j11",
      "date": "2026-06-15T13:25:00Z",
      "auteur": "Amandine Roux",
      "uid": "cli-1-2",
      "risque": "1.2",
      "champ": "mesure.etat",
      "detail": "Réaliser l'analyse d'impact (AIPD) du CRM unique et de la fidélité.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "cli-j12",
      "date": "2026-06-23T16:20:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-2-1",
      "risque": "2.1",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Action supplémentaire · Adoption à 55 % : prolonger l'accompagnement des agences jusqu'à la généralisation."
    },
    {
      "id": "cli-j13",
      "date": "2026-06-23T16:50:00Z",
      "auteur": "Hélène Rocher",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue avant l'été"
    },
    {
      "id": "cli-j14",
      "date": "2026-06-30T10:00:00Z",
      "auteur": "Julien Masson",
      "uid": "cli-3-3",
      "risque": "3.3",
      "champ": "mesure.etat",
      "detail": "Réaliser un test d'intrusion avant l'ouverture au public.",
      "avant": "doing",
      "apres": "done"
    },
    {
      "id": "cli-j15",
      "date": "2026-07-15T09:40:00Z",
      "auteur": "Élodie Rousseau",
      "uid": "cli-1-3",
      "risque": "1.3",
      "champ": "statut",
      "detail": "",
      "avant": "statusInProgress",
      "apres": "statusTreated"
    },
    {
      "id": "cli-j16",
      "date": "2026-07-22T08:15:00Z",
      "auteur": "Sophie Garnier",
      "uid": "cli-4-1",
      "risque": "4.1",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Risque survenu le 20/07 : probabilité portée à 5 ; impact contenu à I3 grâce aux pénalités contractuelles (dégradation au-delà de la cotation inhérente assumée)."
    },
    {
      "id": "cli-j17",
      "date": "2026-08-04T17:30:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-4-1",
      "risque": "4.1",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Action supplémentaire · Retard du lot 2 constaté : plan de rattrapage exigé de l'intégrateur et pénalités appliquées."
    },
    {
      "id": "cli-j18",
      "date": "2026-08-28T12:05:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-4-2",
      "risque": "4.2",
      "champ": "note",
      "detail": "",
      "avant": "",
      "apres": "Le Socle numérique annonce un décalage de 3 mois de la plateforme de données : probabilité remontée de 3 à 4."
    },
    {
      "id": "cli-j19",
      "date": "2026-09-08T16:10:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-4-3",
      "risque": "4.3",
      "champ": "decision",
      "detail": "",
      "avant": "",
      "apres": "Accepter · Surcoût résiduel des licences absorbé par la réserve du programme dans la limite de 60 k€."
    },
    {
      "id": "cli-j20",
      "date": "2026-09-08T16:35:00Z",
      "auteur": "Hélène Rocher",
      "uid": "",
      "risque": "",
      "champ": "review",
      "detail": "",
      "avant": "",
      "apres": "Revue de rentrée"
    },
    {
      "id": "cli-j21",
      "date": "2026-09-10T09:00:00Z",
      "auteur": "Hélène Rocher",
      "uid": "cli-4-2",
      "risque": "4.2",
      "champ": "revuLe",
      "detail": "",
      "avant": "2026-09-08",
      "apres": "2026-09-10"
    },
    {
      "id": "cli-j22",
      "date": "2026-09-25T07:45:00Z",
      "auteur": "Élodie Rousseau",
      "uid": "cli-2-2",
      "risque": "2.2",
      "champ": "kri.releve",
      "detail": "Taux de décroché du centre de contact",
      "avant": "",
      "apres": "83 %"
    },
    {
      "id": "cli-j23",
      "date": "2026-09-25T08:10:00Z",
      "auteur": "Antoine Girard",
      "uid": "cli-2-1",
      "risque": "2.1",
      "champ": "kri.releve",
      "detail": "Conseillers actifs dans le CRM (hebdomadaire)",
      "avant": "",
      "apres": "72 %"
    }
  ]
};
