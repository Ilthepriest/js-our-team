const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

const informationElement = document.querySelector(".informazioni")
const nameElement = document.querySelector(".nome")
const ruoloElement = document.querySelector(".ruolo")
const imageElement = document.querySelector(".image")
// Milestone 1
// for (let i = 0; i < team.length; i++) {
//     const utente = team[i];

//     console.log(utente.name);
//     console.log(utente.role);
//     console.log(utente.image);  
// }

//Milestone 2
// for (let i = 0; i < team.length; i++) {
//     const utente = team[i];
    
//     nameElement.innerHTML+= `${utente.name} ` 
//     ruoloElement.innerHTML+= `${utente.role} `
//     informationElement.innerHTML+= `${utente.image} `
// }


//Bonus 2

const containerElement = document.querySelector(".container")
for (let i = 0; i < team.length; i++) {
    const utente = team[i];
    let card = document.createElement("div");
    card.classList.add("card");
    containerElement.append(card);
}

let carte = document.querySelectorAll(".card");
for (let i = 0; i < team.length; i++) {
    const utente = team[i];

    let img = document.createElement("img");
    img.src = utente.image;
    carte[i].append(img);

    let scritta = document.createElement("div")
    scritta.classList.add("boxScritta")
    carte[i].append(scritta)
    
    scritta.innerHTML += `${utente.name} <br>`
    scritta.innerHTML += `${utente.role}`
}
