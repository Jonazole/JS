const buttonColors = ["red", "green", "blue", "yellow"];
document.querySelector('button').addEventListener('click', event=> {
  const randomIndex = Math.round (Math.random() * 4);
  event.target.style.backgroundColor = buttonColors[randomIndex];
});