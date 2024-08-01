const btnPlay = document.getElementById('play');
const btnReset = document.getElementById('reiniciar');
const contador = document.getElementById('contador');
const fondoReloj = document.getElementById('fondo-reloj');
const contenedorRound = document.getElementById('contenedor-round');
const round = document.getElementById('round');
const fondo = document.getElementById('fondo');

let conteo;
let i = 60;

btnPlay.addEventListener('click', () => {
    iniciar();
});

btnReset.addEventListener('click', () => {
    reiniciar();
});

function iniciar() {
    btnPlay.classList.toggle('btn-active');
    if (btnPlay.classList.contains('btn-active')) {
        icono.className = 'fa-solid fa-pause';
        conteo = setInterval(() => {
            i -= 1;
            const angle = 360 - (i / 60) * 360;
            fondoReloj.style.background = `conic-gradient(transparent 0deg ${angle}deg, white ${angle}deg 360deg)`;
            contenedorRound.style.transform = `rotate(${angle}deg)`;
            if (i < 15) {
                contador.innerHTML = `00:0${i}`;
                contador.style.color = 'red';
                round.style.background = 'red';
                // fondoReloj.style.background = `conic-gradient(transparent 0deg ${angle}deg, red ${angle}deg 360deg)`;
                fondo.style.background = 'red';
            }
            if (i >= 10) {
                contador.innerHTML = `00:${i}`;
            }
            if (i < 0) {
                reiniciar();
            }
        }, 100);
    } else {
        icono.className = 'fa-solid fa-play';
        clearInterval(conteo);

    }
}

function reiniciar() {
    btnPlay.classList.remove('btn-active');
    icono.className = 'fa-solid fa-play';
    clearInterval(conteo);
    contador.innerHTML = `01:00`;
    round.style.background = 'white';
    contador.style.color = '#7cabf5';
    fondo.style.background = 'green';
    i = 60;
    const angle = 360 - (i / 60) * 360;
    fondoReloj.style.background = `conic-gradient(transparent 0deg ${angle}deg, white ${angle}deg 360deg)`;
    contenedorRound.style.transform = `rotate(${angle}deg)`;
}