console.log("Rima");
const body = document.querySelector("body");

async function getData() {
    try {
        const response = await fetch("https://magnetic-melon-yam.glitch.me/");
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            for (let index = 0; index < data.length; index++) {
                generateData(data[index]);
                
            }
        } else 
        {console.log("Error");}
    } catch (error) {
        console.log(error);
    }
}

function generateData(data) {
   const tr = document.createElement("tr");
   const tdId = document.createElement("td");
   tdId.textContent = data.id;
   const tdName = document.createElement("td");
   tdName.textContent = data.name



tbody.append(tdName);
}

generateData();

