let contenedor =  document.getElementById('contenedor');
let circulos = contenedor.querySelectorAll('.circulo');
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let progreso = document.getElementById('progreso');
let indiceActual = 0;

btnNext.addEventListener('click',()=>{
    indiceActual++;
    actualizar(indiceActual);
});

btnPrev.addEventListener('click',()=>{
    indiceActual--;
    actualizar(indiceActual);
});

function actualizar(i){
    console.log(i);
    circulos.forEach((item, indice)=>{
        if(i === 0){
            btnPrev.disabled = true;
            btnPrev.classList.add('boton-disable');
        }else{
            btnPrev.disabled = false;
            btnPrev.classList.remove('boton-disable');
        }

        if(i > (circulos.length - 2)){
            btnNext.disabled = true;
            btnNext.classList.add('boton-disable');
        }else{
            btnNext.disabled = false;
            btnNext.classList.remove('boton-disable');
        }

        //Valida el Progreso en los botones
        if(i === indice){
            item.classList.add('circulo-activo');
        }else if(i < indice){
            item.classList.remove('circulo-activo');
        }
        
        //Valida el progreso en la barra
        if(i === indice){
            let porc = 33.3 * indice;
            progreso.style.width = `${porc}%`;
        }
    });
}
