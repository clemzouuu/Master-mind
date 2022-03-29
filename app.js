const jaune = document.querySelector("#j");
const rouge = document.querySelector("#r");
const bleu = document.querySelector("#b");
const vert = document.querySelector("#v");
const gris = document.querySelector("#g");

let choix_totaux = ['jaune','rouge','bleu','vert','gris'];

choix_ordi = []

for(let i=0; i < 4; i++) {
const positionAleatoire = Math.floor(Math.random() * 5);
choix_ordi.push(choix_totaux[positionAleatoire])
}

console.log(choix_ordi);

let mon_choix = []

console.log(mon_choix)


const ajout1 = document.getElementById('j')
ajout1.addEventListener("click", function forme() {
    let longueur = mon_choix.push('jaune');
    console.log(mon_choix)
});

const ajout2 = document.getElementById('r')
ajout2.addEventListener("click", () => {
    let longueur = mon_choix.push('rouge');
    console.log(mon_choix)
});

const ajout3 = document.getElementById('b')
ajout3.addEventListener("click", () => {
    let longueur = mon_choix.push('bleu');
    console.log(mon_choix)
});

const ajout4 = document.getElementById('v')
ajout4.addEventListener("click", () => {
    let longueur = mon_choix.push('vert');
    newPara = document.createElement('p')
    console.log(mon_choix)
});

const ajout5 = document.getElementById('g')
ajout5.addEventListener("click", () => {
    let longueur = mon_choix.push('gris');
    console.log(mon_choix)
});


let compteur = 0
const soumettre = document.getElementById('soumettre')
soumettre.addEventListener("click", () => {
    for(let i=0; i < mon_choix.length; i++) {
        if (mon_choix[i] == choix_ordi[i]) {
            let texte = document.createTextNode('Trouvé')
            console.log('trouvé:',choix_ordi[i])  
            compteur += 1
            if(compteur == 4) {
                console.log("Gagné !")
            }
        }
        else if (mon_choix[i] != choix_ordi[i]) {
            if ((choix_ordi.includes(mon_choix[i]) == true)) {
                console.log('mal placé :', mon_choix[i])
                let texte = document.createTextNode('Mal Placé')
            }
            else if ((choix_ordi.includes(mon_choix[i]) == false)) { 
                let texte = document.createTextNode('Inexistant')
                console.log('inexistant :', mon_choix[i])
            }
        }
    }
});


    const effacer = document.getElementById('effacer')
    effacer.addEventListener("click", () => {
        mon_choix.splice(0,mon_choix.length)
        console.log(mon_choix)
    });

 