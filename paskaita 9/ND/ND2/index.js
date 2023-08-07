document.getElementById('name').addEventListener('input', event => {
    const name = event.target.value;
    document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
});