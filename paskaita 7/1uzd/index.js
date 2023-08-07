const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault ();

    const metai = document.getElementById ('metai').value;

    let bonus = 50;
    if (metai >=10) {
        bonus +=50;
    }
    if (metai >=20) {
        bonus +=100;
    }
    document.getElementById('output').innerText = `Jūsų premija: ${bonus} eurų.`;
})