const x = 3.650;

console.log(x.toString());
console.log(x.toFixed(3));
console.log(x.toPrecision(3));
const xString = '3.78';
console.log(typeof Number.parseFloat(xString));
console.log(Number.parseInt(xString));
console.log(Number.parseInt("pukis"));
console.log(typeof +"3.09");

const catsName = "pukis baltauodegis";
console.log(catsName.includes("uki"));
console.log(catsName.endsWith("s"));
console.log(catsName.length);
console.log(catsName.indexOf("i"));
console.log(catsName.split(" "));
console.log(catsName.replace("pukis", "murklys"));

const person = {
    name: "Audrius",
    age: 15,
};

const isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());

const milkPrice = 3.1234;
console.log(milkPrice);

if (Number.isInteger(milkPrice)) {
    alert("Centu nereikia")
} else {
    alert("Centu prireiks...")
}

alert(milkPrice.toFixed(2));

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Pasiimant input value, visada paduoda string. Nepamirštame konveruoti į skaičių su Number()
    const price = Number(document.getElementById("price").value);
    const quant = Number(document.getElementById("quant").value);

    const total = price * quant;

    const priceDisplay = document.createElement("h1");
    priceDisplay.textContent = total.toFixed(2);
    document.body.append(priceDisplay);
  });