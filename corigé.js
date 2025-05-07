// EXO RECURSIVITE



// EXO 1 - FONCTION SOMME

// Somme des elements d'un tableau passé en paramètre

// Ex : sum([1,2,3]) renvoie 6



// 1.1 - Version non récursive

function sum(array){

    let result = 0

    for(let i=0; i<array.length; i++){

        result += array[i]

    }

    return result

}



let arrayTest = [1,2,3]



//console.log(sum(arrayTest))



// 1.2 - Version récursive

function sumRec(array){

    // Parcours de tableau récursif possible :

    // Je sors un élément du tableau à chaque étape

    

    // Quelle est la condition d'arrêt ? Tableau vide

    if (array.length == 0){

        return 0

    } else {

        // Je peux sortir un element du tableau

        let elem = array.pop()

        // Appel recursif avec array qui a été modifié

        // par la fonction pop : le dernier élément a été sorti

        return elem + sumRec(array)

    }

}



// Note : Attention, pop() modifie le tableau d'origine

// Utiliser slice plutôt que pop() ne modifie pas le tableau d'origine



//console.log(sumRec(arrayTest))



// sumRec([1,2,3])

// tableau non vide donc je return 3 + sumRec([1,2])

//    sumRec([1,2])

//    tableau non vide donc je return 2 + sumRec([1])

//        sumRec([1])

//        tableau non vide donc je return 1 + sumRec([])

//            sumRec([])

//            tableau vide donc je return 0

//            et je dépile les appels :

//        sumRec([1]) renvoie 1 + 0

//    donc sumRec([1,2]) renvoie 2 + 1 + 0

//donc sumRec([1,2,3]) renvoie 3 + 2 + 1 + 0 donc 6





// EXO 2 - LE VRAI

const dossierPrincipal = {

    nom: 'Ada',

    contenu: [{

        nom: 'Projets collectifs Ada',

        contenu: [{

            nom: 'Pico8',

            contenu: [{

              nom: 'mariokart.p8'

            }]

          },

          {

            nom: 'Dataviz',

            contenu: [{

                nom: 'index.html'

              },

              {

                nom: 'script.js'

              }

            ]

          }

        ]

      },

      {nom: 'CV.pdf'},

      {

        nom: 'Projets persos',

        contenu: [{

          nom: 'Portfolio',

          contenu: [{

              nom: 'index.html'

            },

            {

              nom: 'script.js'

            }

          ]

        }]

      },

    ],

  }



  //console.log(dossierPrincipal)



  // ETAPE 1

  function afficherDossier(dossier){

    console.log("🗂️  " + dossier.nom)

  }



  //afficherDossier(dossierPrincipal)



  // ETAPE 2



  function afficherFichier(fichier){

    console.log("📑  " + fichier.nom)

  }



  // 2.1 Itératif

  function afficherDossierIteratif(dossier){

    // D'abord on affiche le dossier 

    afficherDossier(dossier)

    // A la suite, on affiche son contenu

    for (const element of dossier.contenu){

        if (element.contenu != null){  // plus court : if (element.contenu)

            afficherDossier(element)

        } else {

            afficherFichier(element)

        }

    }

  }



  //afficherDossierIteratif(dossierPrincipal)



  // ETAPE 3 - Récursif

  function afficherDossierRecursif(dossierOuFichier){

    // Quelle est la condition d'arrêt ? pas de contenu (c'est un fichier)

    if (dossierOuFichier.contenu == null){

        // alors c'est un fichier

        afficherFichier(dossierOuFichier)

    } else {

        // C'est un dossier

        // Donc je dois afficher son nom. 

        afficherDossier(dossierOuFichier)

        // Puis son contenu de façon récursive

        for (const element of dossierOuFichier.contenu){

            afficherDossierRecursif(element)

        }

    }

  }



  afficherDossierRecursif(dossierPrincipal)