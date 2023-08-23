class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge() 
        {
			return this.age>=20 ? `${this.name} is old to drink` : `${this.name} is not old to drink`
        
	}
}

const p1 = new Person('Petras', 106)
console.log(p1.compareAge());

// 2 uzduotis. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

const filterOutLetters = (arr) => arr.filter(element => typeof element==="number");

 console.log(filterOutLetters([1, 5, "a", "g", "z", 6] )) ;

//  3 uzduotis.  Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

const duplicateLetters = (text) => text.split('').map(element => element.match(/[a-z]/i) ? element.repeat(2) : element).join('');

console.log(duplicateLetters('Petras 123 Slekys'));

// 4 uzduotis. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

const isValidPostCode = postCode => /[0-9]{5}|[0-9]{3}[A-z]{2}$/.test(postCode);
console.log(isValidPostCode('123LT'));
console.log(isValidPostCode('lt312'));
console.log(isValidPostCode('12345'));
console.log(isValidPostCode('12 123'));

// 5 uzduotis. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".

const jazzify = array => array.map(element => element.endsWith('7') ? element : element.concat('7'));

console.log(jazzify(["a", "bn", "A"]));
console.log(jazzify(["4s", "g7", ""]));






