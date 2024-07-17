const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'sabado'];

let fechaActual = new Date();
let fechaSorteo = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 8, 10, 45, 25);
document.getElementById('subtitulo').textContent = `Sorteo finaliza el ${dias[fechaSorteo.getDay()]} ${fechaSorteo.getDate()} ${meses[fechaSorteo.getMonth()]} de ${fechaSorteo.getFullYear()} ${fechaSorteo.getHours()}:${fechaSorteo.getMinutes()} am`;

function cuentaAtras() {
    const unDia = 24 * 60 * 60 * 1000;
    const unHora = 60 * 60 * 1000;
    const unMinuto = 60 * 1000;

    let tiempoMilisegundos = fechaSorteo - (new Date().getTime());
    let dias = Math.floor((tiempoMilisegundos / unDia));
    let horas = Math.floor((tiempoMilisegundos % unDia) / unHora);
    let minutos = Math.floor((tiempoMilisegundos % unHora) / unMinuto);
    let segundos = Math.floor((tiempoMilisegundos % unMinuto) / 1000);

    document.getElementById('dias').textContent = dias < 10 ? '0' + dias : dias;
    document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos;
}

setInterval(cuentaAtras, 1000);

