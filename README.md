# Coding test

## Consigne
En utilisant le framework de votre choix (Jquery, Angular2 ou React) ainsi
que les librairies que vous souhaitez, créer un QUIZ avec les
fonctionnalités suivantes à partir du fichier Json fourni :
 - Pouvoir naviguer entre les questions
 - Un bouton pour valider la ou les réponses choisies
 - Afficher les réponses correctes à la validation (seulement si le
paramètre `display_correction` est à `true` )
 - Une question peut avoir une image
 - Les questions sont soit de type QCM ou QCS (un seul choix de
réponse possible)
 - Le contenu de l’objet params d’une question est prioritaire par rapport
au contenu de l’objet `default_params` (un paramètre absent dans
l’objet de la question aura pour valeur celui par défaut)

Le fichier Json peut être importé directement (pas besoin de le récupérer
en Ajax).
Utiliser une solution de type CSS LESS ou SASS pour réaliser le theming
de l’interface du QUIZ.

## Installation
Lancer les commandes suivantes pour démarrer l'application.

```
npm i
npm start
```