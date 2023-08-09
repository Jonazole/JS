const header = document.createElement("h1");
const div = document.createElement("h5")
header.textContent = "labas"
header.style.color = "red"
div.textContent = "ATE"
div.style.color = "green";
document.body.append (header);
document.body.prepend(div);

const ul = document.createElement("ul");
document.body.append (ul);
const auto = ["BMW","VW", "Audi", "Ford"];
for (let index = 0; index < auto.length; index++) {
    const li = document.createElement("li");
    li.textContent = auto[index];

    ul.append (li);
}


   



