const button = document.querySelector('button');
button.style.cssText = 'position:absolute; top:0; left:0;';

let corner = 0;
const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];
function changePosition(event) {
    if (corner < cornerStyles.length) {
        event.target.style.cssText = cornerStyles[corner];
        corner++;
    }
    if (corner === cornerStyles.length){
        corner = 0;
    }
}
button.addEventListener('click', changePosition);