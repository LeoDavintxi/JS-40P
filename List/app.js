let idEdit;

document.getElementById('guardar').addEventListener('click', ()=>{
    if(document.getElementById('guardar').textContent === 'Enviar'){
        agregar();
    }else if(document.getElementById('guardar').textContent === 'Editar'){
        agregar();
        document.getElementById('guardar').className = 'guardar';
        document.getElementById('guardar').textContent = 'Enviar';
    }
});

document.getElementById('elemento').addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        agregar();
    }
});

document.getElementById('btn-limpiar').addEventListener('click', ()=>{
    limpiar();
});

function limpiar(){
    document.getElementById('listado').innerHTML = '';
    mostrarMensaje('Todo el listado ha sido borrado', 'limpiar');
}

function agregar(e){
    let nombreElemento = document.getElementById('elemento').value;
    if(nombreElemento !== '' && document.getElementById('guardar').textContent === 'Enviar'){
        let elemento = document.createElement('div');
    
        let atr = document.createAttribute('data-id');
        atr.value = new Date().getTime().toString();
        elemento.setAttributeNode(atr);
    
        elemento.classList.add('elemento');
        elemento.innerHTML = 
                    `<h5>${nombreElemento}</h5>
                    <button class="listo">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="editar">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </button>`;
    
        document.getElementById('listado').appendChild(elemento);
        elemento.querySelector('.eliminar').addEventListener('click', borrarItem);
        elemento.querySelector('.listo').addEventListener('click', tareaCompletada);
        elemento.querySelector('.editar').addEventListener('click', preparacionEditar);

        limpiarCampos();
        mostrarMensaje('Item agregado', 'agregar');
    }else if(nombreElemento !== '' && document.getElementById('guardar').textContent === 'Editar'){
        alert(idEdit);
    }else{
        mostrarMensaje('Debe ingresar un nombre para el item', 'sin-items');
    }
}

function preparacionEditar(e){
    const element = e.currentTarget.parentElement;
    let id = element.getAttribute('data-id');
    let nombreElemento = element.querySelector('h5').textContent;
    document.getElementById('elemento').value = nombreElemento;
    document.getElementById('guardar').className = 'editar';
    document.getElementById('guardar').textContent = 'Editar';
    idEdit = id;
}

function tareaCompletada(e){
    const element = e.currentTarget.parentElement;
    element.classList.toggle('elemento-listo');
    if(element.classList.contains('elemento-listo')){
        mostrarMensaje('Item Completo', 'completado');
    }else{
        mostrarMensaje('Item Habilitado', 'completado');
    }
}

function mostrarMensaje(text, accion) {
    const mensaje = document.getElementById('mensaje');
    mensaje.className = `mensaje-${accion}`;
    mensaje.textContent = text;

    setTimeout(()=>{
        mensaje.className = `mensaje-none`;
        mensaje.textContent = '';
    }, 1000);
}

function borrarItem(e){
    const element = e.currentTarget.parentElement;
    document.getElementById('listado').removeChild(element);
    mostrarMensaje('Item Eliminado', 'eliminado');
    limpiarCampos();
}

function limpiarCampos(){
    document.getElementById('elemento').value = '';
}