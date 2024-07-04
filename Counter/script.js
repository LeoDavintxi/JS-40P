let botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", function () {
  let numero = document.getElementById("contador");
  numero.textContent = parseInt(numero.textContent) + 1;
  validar(numero.textContent);
});

let botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.addEventListener("click", function () {
  let numero = document.getElementById("contador");
  numero.textContent = 0;
  validar(numero.textContent);
});

let botonRestar = document.getElementById("restar");
botonRestar.addEventListener("click", function () {
  let numero = document.getElementById("contador");
  numero.textContent = parseInt(numero.textContent) - 1;
  validar(numero.textContent);
});

function validar(numero) {
  if (numero == 0) {
    document.getElementById("section").style.background = "black";
    document.getElementById("reiniciar").style.background = "white";
    document.getElementById("reiniciar").style.color = "black";
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h3').style.color = 'white';
  }else if(numero > 0){
    document.getElementById("section").style.background = "green";
    document.getElementById("sumar").style.background = "white";
    document.getElementById("sumar").style.color = "green";
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h3').style.color = 'white';
  }else if(numero < 0){
    document.getElementById("section").style.background = "red";
    document.getElementById("restar").style.background = "white";
    document.getElementById("restar").style.color = "red";
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h3').style.color = 'white';
  }
}
