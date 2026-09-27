# ADR-025 — Portefeuille de programmes

**Date** : 2026-09-27
**Statut** : Accepté pour la session 025

## Contexte

Depuis la session 024, une analyse contient au plus un programme et ses projets. Un niveau supérieur réunit plusieurs programmes, tenus chacun par une personne différente dans son propre dossier. Riskr fonctionne en `file://`, sans serveur : une page ne peut pas lire d'elle-même les fichiers d'un autre dossier.

## Décision

- Même application `riskr.html` : un fichier contenant `portfolio` ouvre le mode portefeuille ; sans `portfolio`, rien ne change.
- Le portefeuille garde une **copie figée** de chaque programme (`programs[]`, identifiée par l'uid du programme, avec code, date d'import et nom du fichier). La mise à jour passe par un nouvel import ; aucune synchronisation automatique.
- Les copies ne sont jamais fusionnées. La vue consolidée est reconstruite à chaque chargement : identifiants stables préfixés par l'uid du programme, numéros affichés préfixés par son code (`NORD 1.1`). Les données des copies ne sont pas modifiées.
- Lecture seule : toute modification d'un risque ou d'une revue consolidés est annulée (comparaison avec l'état chargé). Seuls les champs du portefeuille, ses arbitrages, les codes et les imports se modifient.
- Le bandeau de la session 024 gagne un niveau (portefeuille › programme › projet) ; toutes les vues réutilisent le même filtre.
- La tolérance d'un risque reste celle de son programme d'origine.

## Conséquences

**Positives** : chaque responsable reste propriétaire de ses données ; aucune vue n'est dupliquée ; un fichier portefeuille reste un fichier Riskr ordinaire (export, annulation, sauvegarde).

**Négatives** : une copie peut être périmée (signalée après `staleAfterDays`) ; les escalades de niveau organisation se consultent au portefeuille mais se décident dans le fichier du programme ; aucune corrélation entre programmes n'est simulée ; le fichier portefeuille grossit avec chaque copie (quelques centaines de kilo-octets par programme).
