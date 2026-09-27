# ADR-024 — Registres et consolidation du programme

**Date** : 2026-09-26
**Statut** : Accepté pour la session 024

## Contexte

Riskr possède un registre de risques et des groupes thématiques. Un groupe décrit un domaine de risque ; il ne représente ni un projet composant, ni une autorité de décision. Une cotation « après mesures » ne prouve pas qu'un gain est déjà obtenu ; la session 023 l'a séparée de la situation actuelle.

## Décision

- Une analyse a zéro ou un programme. Sans `program`, elle reste un registre projet compatible.
- Le programme possède des composants identifiés de type projet ou travail transverse. Un risque a un registre propriétaire unique et peut toucher plusieurs composants. Ses relations utilisent son `uid` stable.
- L'escalade est un événement daté et décidé par une personne. Un dépassement de tolérance produit un signal, pas un transfert automatique.
- Les bénéfices mesurent la valeur constatée séparément des cibles ; une valeur absente reste inconnue.
- La provision globale tire chaque menace active une fois. Les scénarios combinés représentent seulement un surcoût incrémental doté de sa propre probabilité. Ils ne créent pas une corrélation statistique entre les événements liés.
- Les réserves des composants et du programme restent des enveloppes distinctes. Les P80 par composant ne sont pas additionnés pour obtenir un P80 global.
- La clôture exige le transfert des risques résiduels et la résolution des escalades en attente.

## Conséquences

**Positives** : les décisions et bénéfices ont un lieu de suivi explicite ; les risques communs ont une seule fiche ; les anciens fichiers restent lisibles ; les hypothèses financières sont visibles.

**Limites** : une analyse ne couvre qu'un programme ; les liens ne constituent pas un réseau bayésien ; les scénarios chiffrent un supplément mais la simulation ne modélise pas la corrélation ; aucun portefeuille ni workflow de signature n'est introduit.
