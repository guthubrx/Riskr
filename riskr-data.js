// Données de démonstration entièrement fictives pour Riskr (aucune organisation réelle).
// Une analyse métier privée peut utiliser un fichier local ignoré par Git (riskr-data.local.js).
window.RISKR_DATA = {
  "version": "2.1",
  "appState": {
    "title": "Riskr - Analyse de risques",
    "subtitle": "Exemple fictif : modernisation d'un système d'information",
    "language": "fr",
    "storageNamespace": "riskr-demo"
  },
  "settings": {
    "riskAppetite": 9
  },
  "risks": [
    {
      "uid": "demo-1-1",
      "id": "1.1",
      "title": "Objectifs et priorités insuffisamment alignés",
      "assessmentBefore": [
        3,
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
      "responsable": "Direction de projet",
      "causes": [
        "Feuille de route partagée tardivement",
        "Arbitrages rendus au fil de l'eau"
      ],
      "consequences": [
        {
          "texte": "Travaux engagés puis abandonnés",
          "chiffrage": "≈ 40 k€"
        },
        {
          "texte": "Perte de confiance des métiers",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Formaliser la feuille de route et les critères de priorisation.",
          "porteur": "Direction de projet",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Valider les décisions et les dépendances en comité mensuel.",
          "porteur": "PMO",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Partager un tableau de bord utile aux décideurs.",
          "porteur": "PMO",
          "echeance": "15/10/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 2
        }
      ],
      "notes": [
        {
          "date": "16/03/2026",
          "auteur": "Comité de pilotage (16/03)",
          "texte": "Feuille de route validée : la cotation après remédiation passe à P2 × I3."
        },
        {
          "date": "15/06/2026",
          "auteur": "Comité de pilotage (15/06)",
          "texte": "Priorisation appliquée sur deux trimestres : cible atteinte."
        }
      ],
      "liens": [
        {
          "libelle": "Feuille de route (exemple)",
          "url": "https://example.com/feuille-de-route"
        }
      ]
    },
    {
      "uid": "demo-1-2",
      "id": "1.2",
      "title": "Responsabilités et décisions insuffisamment formalisées",
      "assessmentBefore": [
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
      "responsable": "Direction de projet",
      "causes": [
        "Rôles implicites entre équipes",
        "Décisions prises hors instance"
      ],
      "consequences": [
        {
          "texte": "Décisions contestées ou rejouées",
          "chiffrage": "1 à 2 semaines par arbitrage"
        }
      ],
      "mesures": [
        {
          "texte": "Documenter les rôles et les circuits de décision (RACI).",
          "porteur": "PMO",
          "echeance": "30/05/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Tracer les arbitrages structurants dans un registre.",
          "porteur": "PMO",
          "echeance": "31/08/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "15/06/2026",
          "auteur": "Comité de pilotage (15/06)",
          "texte": "RACI publié ; reste à tracer les arbitrages pour atteindre la cible."
        }
      ],
      "liens": []
    },
    {
      "uid": "demo-2-1",
      "id": "2.1",
      "title": "Interruption d'une activité critique",
      "assessmentBefore": [
        3,
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
      "velocite": 4,
      "statut": "statusInProgress",
      "responsable": "Responsable opérationnel",
      "causes": [
        "Panne d'un composant sans redondance",
        "Procédure de reprise jamais testée"
      ],
      "consequences": [
        {
          "texte": "Arrêt du service aux utilisateurs",
          "chiffrage": "≈ 15 k€ par jour"
        },
        {
          "texte": "Pénalités contractuelles",
          "chiffrage": "jusqu'à 5 % du marché"
        }
      ],
      "mesures": [
        {
          "texte": "Identifier les activités et dépendances critiques.",
          "porteur": "Responsable opérationnel",
          "echeance": "28/02/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Tester les procédures de reprise deux fois par an.",
          "porteur": "Équipe support",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 4
        },
        {
          "texte": "Suivre les incidents et les actions correctrices.",
          "porteur": "Équipe support",
          "echeance": "31/12/2026",
          "etat": "doing",
          "barriere": "protection",
          "efficacite": 3
        }
      ],
      "notes": [
        {
          "date": "14/09/2026",
          "auteur": "Comité de pilotage (14/09)",
          "texte": "Test de reprise réussi en 2 h : la probabilité baisse d'un cran."
        }
      ],
      "liens": [
        {
          "libelle": "Plan de continuité (modèle)",
          "url": "https://example.com/plan-de-continuite"
        }
      ]
    },
    {
      "uid": "demo-2-2",
      "id": "2.2",
      "title": "Capacité opérationnelle insuffisante",
      "assessmentBefore": [
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
      "responsable": "Responsable opérationnel",
      "causes": [
        "Recrutements plus lents que prévu"
      ],
      "consequences": [
        {
          "texte": "Délais de traitement allongés",
          "chiffrage": "+20 % en période de pointe"
        }
      ],
      "mesures": [
        {
          "texte": "Réviser la capacité à chaque jalon important.",
          "porteur": "Responsable opérationnel",
          "echeance": "15/11/2026",
          "etat": "todo",
          "barriere": "prevention",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "16/03/2026",
          "auteur": "Comité de pilotage (16/03)",
          "texte": "Risque accepté formellement jusqu'à la fin de la bascule."
        }
      ],
      "liens": []
    },
    {
      "uid": "demo-3-1",
      "id": "3.1",
      "title": "Obsolescence ou vulnérabilité des systèmes",
      "assessmentBefore": [
        4,
        4
      ],
      "assessmentAfter": [
        3,
        4
      ],
      "assessmentTarget": [
        2,
        3
      ],
      "traitement": "reduce",
      "velocite": 5,
      "statut": "statusInProgress",
      "responsable": "Responsable technique",
      "causes": [
        "Composants hors support éditeur",
        "Correctifs de sécurité appliqués en retard"
      ],
      "consequences": [
        {
          "texte": "Intrusion ou fuite de données",
          "chiffrage": "≈ 200 k€"
        },
        {
          "texte": "Arrêt imposé pour remise en conformité",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Maintenir une feuille de route technique priorisée.",
          "porteur": "Responsable technique",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 3
        },
        {
          "texte": "Appliquer les correctifs critiques sous 15 jours.",
          "porteur": "Équipe sécurité",
          "echeance": "31/07/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        },
        {
          "texte": "Vérifier les sauvegardes et les capacités de reprise.",
          "porteur": "Équipe support",
          "echeance": "30/10/2026",
          "etat": "todo",
          "barriere": "protection",
          "efficacite": 0
        }
      ],
      "notes": [
        {
          "date": "14/09/2026",
          "auteur": "Comité de pilotage (14/09)",
          "texte": "Toujours au-dessus de l'appétence : correctifs en retard."
        },
        {
          "date": "22/09/2026",
          "auteur": "Point sécurité (22/09)",
          "texte": "Deux serveurs migrés : la probabilité passe de 4 à 3."
        }
      ],
      "liens": [
        {
          "libelle": "Politique de mise à jour (exemple)",
          "url": "https://example.com/politique-mises-a-jour"
        }
      ]
    },
    {
      "uid": "demo-3-2",
      "id": "3.2",
      "title": "Qualité ou intégration technique insuffisante",
      "assessmentBefore": [
        3,
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
      "statut": "statusTreated",
      "responsable": "Responsable technique",
      "causes": [
        "Interfaces peu documentées"
      ],
      "consequences": [
        {
          "texte": "Anomalies découvertes en production",
          "chiffrage": "≈ 10 k€ par correction"
        }
      ],
      "mesures": [
        {
          "texte": "Définir les critères d'acceptation et de qualité.",
          "porteur": "Responsable technique",
          "echeance": "31/01/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Tester les interfaces et les scénarios prioritaires.",
          "porteur": "Équipe recette",
          "echeance": "31/05/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        }
      ],
      "notes": [],
      "liens": []
    },
    {
      "uid": "demo-4-1",
      "id": "4.1",
      "title": "Engagement fournisseur non maîtrisé",
      "assessmentBefore": [
        3,
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
      "traitement": "transfer",
      "velocite": 3,
      "statut": "statusInProgress",
      "responsable": "Responsable achats",
      "causes": [
        "Livrables mal définis au contrat",
        "Suivi des engagements irrégulier"
      ],
      "consequences": [
        {
          "texte": "Retard de livraison",
          "chiffrage": "4 à 6 semaines"
        },
        {
          "texte": "Surcoût d'avenants",
          "chiffrage": "≈ 60 k€"
        }
      ],
      "mesures": [
        {
          "texte": "Ajouter des jalons et des pénalités au contrat.",
          "porteur": "Juridique",
          "echeance": "30/06/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Suivre les engagements, livrables et dépendances.",
          "porteur": "Responsable achats",
          "echeance": "15/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 2
        }
      ],
      "notes": [
        {
          "date": "15/06/2026",
          "auteur": "Comité de pilotage (15/06)",
          "texte": "Avenant signé : l'impact baisse, la probabilité reste à surveiller."
        }
      ],
      "liens": []
    },
    {
      "uid": "demo-4-2",
      "id": "4.2",
      "title": "Dépendance excessive à un partenaire ou à une compétence",
      "assessmentBefore": [
        3,
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
      "responsable": "Direction de projet",
      "causes": [
        "Savoir-faire concentré sur une seule personne"
      ],
      "consequences": [
        {
          "texte": "Blocage en cas de départ ou d'absence",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Documenter les savoirs et procédures essentiels.",
          "porteur": "Équipe support",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "protection",
          "efficacite": 3
        },
        {
          "texte": "Planifier le transfert de compétences.",
          "porteur": "Direction de projet",
          "echeance": "31/08/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        }
      ],
      "notes": [],
      "liens": []
    },
    {
      "uid": "demo-5-1",
      "id": "5.1",
      "title": "Évolution réglementaire ou contractuelle non anticipée",
      "assessmentBefore": [
        3,
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
      "statut": "statusTreated",
      "responsable": "Référent conformité",
      "causes": [
        "Absence de veille organisée"
      ],
      "consequences": [
        {
          "texte": "Mise en conformité dans l'urgence",
          "chiffrage": "≈ 25 k€"
        }
      ],
      "mesures": [
        {
          "texte": "Organiser une veille des textes applicables.",
          "porteur": "Référent conformité",
          "echeance": "31/03/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        }
      ],
      "notes": [],
      "liens": []
    },
    {
      "uid": "demo-5-2",
      "id": "5.2",
      "title": "Protection des données ou contrôle des accès insuffisant",
      "assessmentBefore": [
        2,
        4
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
      "velocite": 3,
      "statut": "statusInProgress",
      "responsable": "Référent conformité",
      "causes": [
        "Droits d'accès jamais revus",
        "Données sensibles mal identifiées"
      ],
      "consequences": [
        {
          "texte": "Sanction de l'autorité de contrôle",
          "chiffrage": "jusqu'à 4 % du chiffre d'affaires"
        },
        {
          "texte": "Atteinte à l'image",
          "chiffrage": ""
        }
      ],
      "mesures": [
        {
          "texte": "Qualifier les données, finalités et accès.",
          "porteur": "Délégué à la protection des données",
          "echeance": "30/04/2026",
          "etat": "done",
          "barriere": "prevention",
          "efficacite": 4
        },
        {
          "texte": "Revoir les droits d'accès chaque trimestre.",
          "porteur": "Équipe sécurité",
          "echeance": "30/09/2026",
          "etat": "doing",
          "barriere": "prevention",
          "efficacite": 3
        }
      ],
      "notes": [
        {
          "date": "14/09/2026",
          "auteur": "Comité de pilotage (14/09)",
          "texte": "Revue des accès faite : cible atteinte."
        }
      ],
      "liens": [
        {
          "libelle": "Registre des traitements (modèle)",
          "url": "https://example.com/registre-traitements"
        }
      ]
    }
  ],
  "riskGroups": [
    {
      "id": 1,
      "name": "Gouvernance et pilotage",
      "description": "Alignement, décisions, responsabilités et suivi",
      "assessmentNote": "Des arbitrages lisibles et des responsabilités explicites conditionnent la réussite du projet.",
      "remediationNote": "Feuille de route partagée, instances de décision régulières et indicateurs de suivi.",
      "color": "#2E86C1",
      "riskIds": [
        "1.1",
        "1.2"
      ]
    },
    {
      "id": 2,
      "name": "Opérations et continuité",
      "description": "Continuité de service, capacité et reprise",
      "assessmentNote": "La continuité des activités dépend des ressources disponibles et de procédures de reprise éprouvées.",
      "remediationNote": "Identification des activités critiques, tests de reprise, suivi de capacité et relais sur les rôles sensibles.",
      "color": "#27AE60",
      "riskIds": [
        "2.1",
        "2.2"
      ]
    },
    {
      "id": 3,
      "name": "Systèmes et cybersécurité",
      "description": "Obsolescence, qualité technique, sécurité et intégration",
      "assessmentNote": "Les évolutions techniques et la maîtrise des vulnérabilités déterminent la fiabilité durable de la solution.",
      "remediationNote": "Feuille de route technique, mises à niveau, tests d'intégration et contrôles de sécurité.",
      "color": "#8E44AD",
      "riskIds": [
        "3.1",
        "3.2"
      ]
    },
    {
      "id": 4,
      "name": "Fournisseurs et engagements",
      "description": "Contrats, livrables, dépendances et transfert de compétences",
      "assessmentNote": "Les engagements externes et les compétences rares nécessitent une anticipation des échéances et des relais.",
      "remediationNote": "Suivi des engagements, plan de continuité, transfert de compétences et options de repli.",
      "color": "#E67E22",
      "riskIds": [
        "4.1",
        "4.2"
      ]
    },
    {
      "id": 5,
      "name": "Conformité et données",
      "description": "Exigences applicables, protection des données et contrôles",
      "assessmentNote": "La conformité dépend de l'anticipation des obligations et de la maîtrise des données et des accès.",
      "remediationNote": "Veille, analyse d'impact, mesures de sécurité et revues de conformité adaptées.",
      "color": "#C0392B",
      "riskIds": [
        "5.1",
        "5.2"
      ]
    }
  ],
  "reviews": [
    {
      "id": "rev-2026-01",
      "date": "2026-01-15",
      "label": "Revue de lancement",
      "auteur": "Comité de pilotage",
      "risks": [
        {
          "uid": "demo-1-1",
          "id": "1.1",
          "title": "Objectifs et priorités insuffisamment alignés",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-1-2",
          "id": "1.2",
          "title": "Responsabilités et décisions insuffisamment formalisées",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-2-1",
          "id": "2.1",
          "title": "Interruption d'une activité critique",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-2-2",
          "id": "2.2",
          "title": "Capacité opérationnelle insuffisante",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-3-1",
          "id": "3.1",
          "title": "Obsolescence ou vulnérabilité des systèmes",
          "groupe": "Systèmes et cybersécurité",
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
          "uid": "demo-3-2",
          "id": "3.2",
          "title": "Qualité ou intégration technique insuffisante",
          "groupe": "Systèmes et cybersécurité",
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
          "uid": "demo-4-1",
          "id": "4.1",
          "title": "Engagement fournisseur non maîtrisé",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-4-2",
          "id": "4.2",
          "title": "Dépendance excessive à un partenaire ou à une compétence",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-5-1",
          "id": "5.1",
          "title": "Évolution réglementaire ou contractuelle non anticipée",
          "groupe": "Conformité et données",
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
          "uid": "demo-5-2",
          "id": "5.2",
          "title": "Protection des données ou contrôle des accès insuffisant",
          "groupe": "Conformité et données",
          "before": [
            2,
            4
          ],
          "after": [
            2,
            4
          ]
        }
      ]
    },
    {
      "id": "rev-2026-03",
      "date": "2026-03-16",
      "label": "Revue du premier trimestre",
      "auteur": "Comité de pilotage",
      "risks": [
        {
          "uid": "demo-1-1",
          "id": "1.1",
          "title": "Objectifs et priorités insuffisamment alignés",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-1-2",
          "id": "1.2",
          "title": "Responsabilités et décisions insuffisamment formalisées",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-2-1",
          "id": "2.1",
          "title": "Interruption d'une activité critique",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-2-2",
          "id": "2.2",
          "title": "Capacité opérationnelle insuffisante",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-3-1",
          "id": "3.1",
          "title": "Obsolescence ou vulnérabilité des systèmes",
          "groupe": "Systèmes et cybersécurité",
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
          "uid": "demo-3-2",
          "id": "3.2",
          "title": "Qualité ou intégration technique insuffisante",
          "groupe": "Systèmes et cybersécurité",
          "before": [
            3,
            3
          ],
          "after": [
            3,
            2
          ]
        },
        {
          "uid": "demo-4-1",
          "id": "4.1",
          "title": "Engagement fournisseur non maîtrisé",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-4-2",
          "id": "4.2",
          "title": "Dépendance excessive à un partenaire ou à une compétence",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-5-1",
          "id": "5.1",
          "title": "Évolution réglementaire ou contractuelle non anticipée",
          "groupe": "Conformité et données",
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
          "uid": "demo-5-2",
          "id": "5.2",
          "title": "Protection des données ou contrôle des accès insuffisant",
          "groupe": "Conformité et données",
          "before": [
            2,
            4
          ],
          "after": [
            2,
            4
          ]
        }
      ]
    },
    {
      "id": "rev-2026-06",
      "date": "2026-06-15",
      "label": "Revue avant bascule",
      "auteur": "Comité de pilotage",
      "risks": [
        {
          "uid": "demo-1-1",
          "id": "1.1",
          "title": "Objectifs et priorités insuffisamment alignés",
          "groupe": "Gouvernance et pilotage",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-1-2",
          "id": "1.2",
          "title": "Responsabilités et décisions insuffisamment formalisées",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-2-1",
          "id": "2.1",
          "title": "Interruption d'une activité critique",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-2-2",
          "id": "2.2",
          "title": "Capacité opérationnelle insuffisante",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-3-1",
          "id": "3.1",
          "title": "Obsolescence ou vulnérabilité des systèmes",
          "groupe": "Systèmes et cybersécurité",
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
          "uid": "demo-3-2",
          "id": "3.2",
          "title": "Qualité ou intégration technique insuffisante",
          "groupe": "Systèmes et cybersécurité",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-4-1",
          "id": "4.1",
          "title": "Engagement fournisseur non maîtrisé",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-4-2",
          "id": "4.2",
          "title": "Dépendance excessive à un partenaire ou à une compétence",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-5-1",
          "id": "5.1",
          "title": "Évolution réglementaire ou contractuelle non anticipée",
          "groupe": "Conformité et données",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-5-2",
          "id": "5.2",
          "title": "Protection des données ou contrôle des accès insuffisant",
          "groupe": "Conformité et données",
          "before": [
            2,
            4
          ],
          "after": [
            1,
            4
          ]
        }
      ]
    },
    {
      "id": "rev-2026-09",
      "date": "2026-09-14",
      "label": "Revue de rentrée",
      "auteur": "Comité de pilotage",
      "risks": [
        {
          "uid": "demo-1-1",
          "id": "1.1",
          "title": "Objectifs et priorités insuffisamment alignés",
          "groupe": "Gouvernance et pilotage",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-1-2",
          "id": "1.2",
          "title": "Responsabilités et décisions insuffisamment formalisées",
          "groupe": "Gouvernance et pilotage",
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
          "uid": "demo-2-1",
          "id": "2.1",
          "title": "Interruption d'une activité critique",
          "groupe": "Opérations et continuité",
          "before": [
            3,
            4
          ],
          "after": [
            2,
            3
          ]
        },
        {
          "uid": "demo-2-2",
          "id": "2.2",
          "title": "Capacité opérationnelle insuffisante",
          "groupe": "Opérations et continuité",
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
          "uid": "demo-3-1",
          "id": "3.1",
          "title": "Obsolescence ou vulnérabilité des systèmes",
          "groupe": "Systèmes et cybersécurité",
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
          "uid": "demo-3-2",
          "id": "3.2",
          "title": "Qualité ou intégration technique insuffisante",
          "groupe": "Systèmes et cybersécurité",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-4-1",
          "id": "4.1",
          "title": "Engagement fournisseur non maîtrisé",
          "groupe": "Fournisseurs et engagements",
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
          "uid": "demo-4-2",
          "id": "4.2",
          "title": "Dépendance excessive à un partenaire ou à une compétence",
          "groupe": "Fournisseurs et engagements",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-5-1",
          "id": "5.1",
          "title": "Évolution réglementaire ou contractuelle non anticipée",
          "groupe": "Conformité et données",
          "before": [
            3,
            3
          ],
          "after": [
            2,
            2
          ]
        },
        {
          "uid": "demo-5-2",
          "id": "5.2",
          "title": "Protection des données ou contrôle des accès insuffisant",
          "groupe": "Conformité et données",
          "before": [
            2,
            4
          ],
          "after": [
            1,
            3
          ]
        }
      ]
    }
  ]
};
