# ADR-023 — Séparer l'observé de la prévision

Décision : `assessmentAfter` conserve son nom et représente la prévision après actions ; `assessmentCurrent` représente l'exposition constatée. `assessmentBefore` reste inhérente et `assessmentTarget` reste la cible.

Motif : renommer `assessmentAfter` casserait les fichiers existants. Présenter sa valeur comme l'exposition actuelle alors que des actions sont ouvertes sous-estimerait le risque.

Migration : si un ancien risque a des actions ouvertes, l'actuel reprend la cotation inhérente et porte `currentNeedsReview`; sinon il reprend l'ancienne cotation après actions. Une revue humaine lève le signal.

Conséquences : les alertes, le comité et la provision utilisent l'actuel. Les revues nouvelles figent l'actuel. Les revues anciennes restent historiques avec leur sens d'origine, sans correction silencieuse.
