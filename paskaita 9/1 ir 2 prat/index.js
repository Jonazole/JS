 document.querySelector('p').addEventListener ('click',(event)=>{
     event.target.style.textAlign = "center";
     event.target.style.fontSize = "4rem";
     event.target.style.color = "red";
 });

const button = document.querySelector('button');
button.style.cssText = 'position:absolute, top:0, left:0';

let isInOriginalPosition = true;
function changePosition() {
    event.target.style.cssText = isInOriginalPosition ? 'position:absolute; bottom:0; right:0;'
    : 'position:absolute; top:0; left:0;';
    isInOriginalPosition = !isInOriginalPosition;
}

button.addEventListener('click', changePosition);