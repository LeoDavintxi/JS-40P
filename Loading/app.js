const text = document.getElementById('text');
const main = document.getElementById('main');
let cuenta = 0;

let intervalo = setInterval(()=>{
    cuenta++;
    if (cuenta <= 100) {
        text.textContent = `${cuenta}%`;
        main.style.opacity = cuenta / 100;
        main.style.filter = `blur(${80-cuenta}px)`;
    }

}, 80);


