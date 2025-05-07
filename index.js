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
/*function afficherDossier(dossier){
    console.log("> 🗂️ " + dossier.nom)
}

afficherDossier(dossierPrincipal)*/


/*function afficherDossierIteratif(dossier){
    console.log("> 🗂️ " + dossier.nom)
    for(const element of dossier.contenu){
        if(element.contenu != null){
            console.log("  🗂️ " + element.nom)
        }else{
            console.log("  📑 "+ element.nom)
        }    
    }
    
}
  
afficherDossierIteratif(dossierPrincipal)*/

/*function afficherDossierRecursif(dossier){
    console.log(" 🗂️ " + dossier.nom)
    if(dossier.contenu) {
        for (const element of dossier.contenu){
            if(element.contenu){
                console.log(" 🗂️ " + element.nom)
                //afficherDossierRecursif(element.nom)
            }else{
                console.log(" 📑 "+ element.nom)
            }
        }    
    }
}

afficherDossierRecursif(dossierPrincipal)*/


function afficherDossierIteratif(dossier){
    console.log("> 🗂️ " + dossier.nom)
    for(const element of dossier.contenu){
        if(element.contenu != null){
            console.log("  🗂️ " + element.nom)
            for(sousElement of element.contenu){
                if(sousElement.contenu != null){
                    console.log("  🗂️ " + sousElement.nom)
                    for(sousSousElement of sousElement.contenu){
                        if(sousSousElement.contenu != null){
                            console.log("  🗂️ " + sousSousElement.nom)
                        }else{
                            console.log("  📑 "+ sousSousElement.nom)
                        }
                    }
                }else{
                    console.log("  📑 "+ sousElement.nom)
                }
            }
        }else{
            console.log("  📑 "+ element.nom)
        }    
    }
    
}

afficherDossierIteratif(dossierPrincipal)

function afficherDossierRecursif(dossier){
    console.log(" 🗂️ " + dossier.nom)
    if(dossier.contenu) {
        for (const element of dossier.contenu){
            if(element.contenu){
                afficherDossierRecursif(element)
            }else{
                console.log(" 📑 "+ element.nom)
            }
        }    
    }
}

afficherDossierRecursif(dossierPrincipal)

/*Etape 4

Compare tes deux fonctions afficherDossierIteratif et afficherDossierRecursif.
Qu’en penses-tu ? 
Quels sont les avantages et inconvénients de chaque manière d’écrire ?*/

/*=> dans ce cas la fonction itérative à des limites 
et la fonction recursive est plus courte et plus simple à écrire.*/

