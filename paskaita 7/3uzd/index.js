function convertToFarenheit(event) {
    console.log('convert');
    const celciusInputValue = event.target.value;
    const outputElement = document.getElementById('output');
    if (celciusInputValue) {
        const celcius = Number(celciusInputValue);
        const farenheit = ((celcius * 1.8) + 32).toFixed(2);
        outputElement.innerText = farenheit;
        
    } else {
        outputElement.innerText = '';
    }
}
document.getElementById('celcius').addEventListener('input', convertToFarenheit)