function createTable() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "vipCheckBox";
    const label = document.createElement("label");
    label.textContent = "Filter VIP";
    label.setAttribute("for", "vipCheckbox");    
    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    const tr = document.createElement('tr');







}

createTable();

const body = document.querySelector("body");

async function getData() {
    try {
        const response = await fetch("(https://magnetic-melon-yam.glitch.me/");
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            data.forEach((robot) => {
                generateData(robot);
            });
                
            }
        }  
        
        catch (error) {
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

