const x = 50;
const y = 10;

const suma = x+y;
console.log(suma);

const skirtumas = x - y ;
console.log(skirtumas);

const obj = {
    suma: suma,
    skirtumas: skirtumas,

}
console.log(obj.skirtumas);

const ternary = 12 < 5 ? 'Teisinga' : "Neteisinga";
console.log(ternary);

//  alert('kate'||'pele');


if (x > 50) {
    console.log('Invalid age');
  } else if (x > 5) {
    console.log('Child');
  } else {
    console.log('Adult')
  }

  const age = 20;
if (age > 100 || age < 0) {
  console.log('Invalid age');
} else if (age < 18) {
  console.log('Child');
} else {
  console.log('Adult')
}

const car = "Ford";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}

const name = 'Norlandas';
if (name.length > 6) {
  console.log('Ilgas vardas');
}

const clientAge = 45;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}