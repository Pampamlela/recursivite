Votre objectif sera d’afficher sur la console tous ces dossiers et ces fichiers de la manière suivante :

# Exécution du script depuis le terminal
afficherDossier(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js

Affichage

ℹ️ Nous avons découpé le problème en étapes mais sens toi libre d’inverser l’ordre si tu ne te sens pas à l’aise avec l’ordre suggéré.

    🚨 Utilise bien la variable dossierPrincipal déclarée ci-dessus ! Pas besoin de lire un de tes propres dossiers pour l’instant.

Etape 1

Crée une fonction afficherDossier qui va afficher le nom du dossier principal en utilisant la variable dossierPrincipal

Résultat attendu

afficherDossier(dossierPrincipal)
> 🗂️ Ada 

Etape 2

Tu vas créer deux fonctions :

    afficherDossierIteratif (l’utilisation des instructions for… est autorisée)
    afficherDossierRecursif (il faut que cette fonction s’appelle elle-même!)

Ces deux fonctions afficheront les dossiers et le fichier que contient le dossier Ada.

Résultat attendu

afficherDossierIteratif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs 
  📑 CV.pdf
  🗂️ Projets persos
  
afficherDossierRecursif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs 
  📑 CV.pdf
  🗂️ Projets persos

Indice 🤫
Dans l’objet, un objet de type “dossier” a une propriété “contenu” alors qu’un fichier n’en a pas …
Etape 3

Complète la fonction pour afficher les dossiers de troisième niveau (ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième niveau car ils se trouvent dans un dossier “Projets collectifs, lui-même dans le dossier “Ada”).

Résultat attendu

afficherDossierIteratif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js
  
afficherDossierRecursif(dossierPincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js

Etape 4

Compare tes deux fonctions afficherDossierIteratif et afficherDossierRecursif.

Qu’en penses-tu ? Quels sont les avantages et inconvénients de chaque manière d’écrire ?