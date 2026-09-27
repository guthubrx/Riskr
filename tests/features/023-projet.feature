# Les étapes sont exécutées dans Chrome isolé par tests/riskr-project.test.mjs.
Fonctionnalité: Présenter l'exposition réelle d'un risque projet

  Scénario: Une action ouverte ne crée pas un gain déjà acquis
    Étant donné un ancien risque avec une mesure non terminée
    Quand je charge l'analyse
    Alors la cotation actuelle reprend prudemment la cotation inhérente
    Et la cotation prévue reste distincte

  Scénario: Une opportunité ne consomme pas la provision de pertes
    Étant donné une opportunité active
    Quand le comité calcule la provision des menaces
    Alors l'opportunité n'est pas tirée dans cette simulation

  Scénario: Une décision survit à un export puis un import
    Étant donné une décision datée sur un risque
    Quand j'exporte puis réimporte l'analyse
    Alors la décision conserve son auteur, sa date et son motif
