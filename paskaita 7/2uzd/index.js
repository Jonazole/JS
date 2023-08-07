function isLeapYear(years) {
    return ((years % 4 == 0)  && (years % 100 != 0)) || (years % 400 == 0);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const years= Number(document.getElementById ('years').value);
    const outputElement = document.getElementById ('output');

    if (isLeapYear(years)) {
        outputElement.textContent = "Metai keliamieji";
    } else {
        outputElement.textContent = "Metai nėra keliamieji";
    }
}
document.querySelector ('form').addEventListener ("submit", handleFormSubmit);