// document.cookie = "name = Marius"
 console.log(document.cookie.split("=")[1]);
  sessionStorage.setItem("manoSessionStorage",
  JSON.stringify(
  {
    labas:"labas"
  }));
const x = sessionStorage.getItem('manoSessionStorage');
const obj = JSON.parse(x);
console.log(obj);

// sessionStorage.removeItem('manoSessionStorage');
