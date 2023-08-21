//1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
const fn = (n1) => n1 * 60 + " seconds";

//2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
const fm = (n1) => n1 * 365;

//3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
const fo = (n1) => n1**2;

// 4.Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
const ftr = (n1,n2) => (n1*n2/2);

//5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const fl = (text) => text.charAt(text.length-1)

//6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
const fp = (text) => text.split("").reverse().join("").toLowerCase();
console.log(fp("Norlandas"));

//7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

// const nums = [-1, -100, -5, 10, 0, 11];
// const fnei = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0];
// console.log(fnei(nums));

const numArr = [-4, -100, -5, 10, -2, 0, -6];

 


// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "5" => [1, 6, 3,9,8].

const randomNumbers = (quant) => {
    const generatedNums = [];
    for(let i = 0; i < quant; i++){
      generatedNums.push(Math.floor(Math.random() * 10) + 1)
    }
    return generatedNums;
   
  }

//9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const sumOverHundred = (a, b) => a+ b < 100;
console.log(sumOverHundred(10,50));



// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

// const people = [ 
    //  {name: „Alfredas“, age: 25},
    //  {name: „Jonas“, age: 25}, 
    //  {name: „Kasparas“, age: 20}];
// 
// const fn = (array) => array.sort((a, b) => a.name > b.name ? 1 : -1).sort((a, b) => a.age - b.age);

//11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

// function isItHoliday(date) {
    // const holidays = ["2020-01-01", "2020-05-25"];
    // return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate())
//   }
  
//   console.log(isItHoliday(new Date("2020-05-25")));



// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
// ***
const numbers = [1, 2, 5, 5];
const missingNumber = (array) => array.find((x, i) => x + 1 !== array[i+1]) + 1;

function findMissingNumber(array) {
 const result = 
 array.find((num, i) =>{
   return ++num !== array[i+1]
  }) + 1
  console.log(result);
}
findMissingNumber(numbers);







