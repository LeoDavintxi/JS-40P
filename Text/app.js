const text = 'Nos Encanta Programar!';
const mensaje = document.getElementById('text');
const input = document.getElementById('input-number');
let arreglo = text.split('');
let contador = 0;
let msn = '';
let velocidad = 500;

escribirTexto();

input.addEventListener('input', ()=>{
    velocidad = 500 / input.value;
});

function escribirTexto(){
    if(arreglo.length > contador){
        msn = msn + arreglo[contador];
        mensaje.textContent = msn;
        contador++;
    }else{
        mensaje.textContent = '';
        msn = '';
        contador = 0;
    }
    setTimeout(escribirTexto, velocidad);
}

