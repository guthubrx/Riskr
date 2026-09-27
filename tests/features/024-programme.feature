# Les étapes sont exécutées dans Chrome isolé par tests/riskr-program.test.mjs.
Fonctionnalité: Gouverner les risques d'un programme

  Scénario: Un ancien registre projet reste lisible
    Étant donné une analyse sans programme
    Quand je l'ouvre
    Alors le registre projet reste disponible
    Et je peux créer un programme sans convertir les catégories en projets

  Scénario: Un risque partagé n'est compté qu'une fois
    Étant donné deux projets composants
    Et un risque dont le premier possède le registre et le second subit l'effet
    Quand je consulte les registres des deux projets
    Alors le risque est visible dans les deux
    Et il garde une seule identité dans la provision globale

  Scénario: Un scénario combiné chiffre uniquement un supplément
    Étant donné deux menaces actives liées à un scénario chiffré
    Quand je compare la provision globale avec et sans ce scénario
    Alors la provision avec scénario intègre son surcoût incrémental
    Et les réserves des composants restent distinctes

  Scénario: Une escalade et une décision restent traçables
    Étant donné un risque de projet au-dessus de sa tolérance
    Quand son responsable l'escalade au programme avec un motif
    Et le comité décide de le prendre en charge
    Alors l'escalade garde ses dates, auteurs et motif
    Et le risque conserve les projets touchés

  Scénario: La clôture protège les risques résiduels
    Étant donné un programme avec des risques actifs
    Quand je demande sa clôture
    Alors elle est refusée tant que les risques ne sont pas transférés
    Quand chaque risque est transféré avec un responsable et un motif
    Alors je peux clore le programme et exporter les transferts
