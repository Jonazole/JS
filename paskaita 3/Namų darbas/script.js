let age = 49
// Gimimo metai
console.log(2023-age);

const car = "X";

switch (car) {
    case "VW":
    case "Audi":
    case "Bentley":
    case "Lamborghini":
    case "Porsche":
    case "Bugatti":
        console.log("VW group");  
        break;
    case "BMW":
    case "Rolls-Royce":
    case "Mini":
        console.log("BMW group");
        break;
    default:
        console.log("Nei vienam");
        break;
}

// ---

const userInput = 'Bulvė';
switch (userInput) {
  case 'Bulvė':
  case 'Kopūstas':
  case 'Česnakas':
  case 'Svogūnas':
  case 'Morka':
    console.log("Daržovė");
    break;
  case 'Obuolys':
  case 'Kriaušė':
  case 'Avietė':
  case 'Braškė':
  case 'Vynuogė':
    console.log('Vaisius');
    break;
  default:
    console.log("Nei daržovė, nei vaisius")
}


// *****

const year = 2023;

const currentYear = year === 2023 ? "this year" : "last year";

console.log(currentYear);

// ***

const name = "Ona";

console.log((name.length  < 5) ? "trumpas vardas" : "ilgas vardas");

// ***

let clientAge = 50;
const legalAge = 21;
clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");
const currentAge = (clientAge < legalAge) ? "Draudžiama vairuoti" : "Galima vairuoti";
console.log(currentAge);

// ***

let myName = "Rima"
for (let i = 10; i > 0; i--) {
    console.log(i+myName);
    
}

// ***

// let i = 10;
// while(i > 0) {
//   console.log(i);
//   i--;
// }
