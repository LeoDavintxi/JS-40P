let idEdit = null;

// Inicializa los eventos
document.getElementById('guardar').addEventListener('click', agregar);
document.getElementById('elemento').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregar();
    }
});
document.getElementById('btn-limpiar').addEventListener('click', limpiar);

// Cargar elementos guardados en localStorage
document.addEventListener('DOMContentLoaded', cargarElementos);


function limpiar() {
    localStorage.removeItem('elementos');
    document.getElementById('listado').innerHTML = '';
    mostrarMensaje('Todo el listado ha sido borrado', 'limpiar');
}

function agregar() {
    const nombreElemento = document.getElementById('elemento').value.trim();
    const botonGuardar = document.getElementById('guardar');
    let elementos = JSON.parse(localStorage.getItem('elementos')) || [];

    if (nombreElemento === '') {
        mostrarMensaje('Debe ingresar un nombre para el item', 'sin-items');
        return;
    }

    if (botonGuardar.textContent === 'Enviar') {
        const elemento = crearElemento(nombreElemento);
        document.getElementById('listado').appendChild(elemento);
        elementos.push({ id: elemento.getAttribute('data-id'), nombre: nombreElemento });
        mostrarMensaje('Item agregado', 'agregar');
    } else if (botonGuardar.textContent === 'Editar') {
        const padre = document.querySelector(`[data-id="${idEdit}"]`);
        if (padre) {
            padre.querySelector('h5').textContent = nombreElemento;
            elementos = elementos.map(el => el.id === idEdit ? { ...el, nombre: nombreElemento } : el);
        }
        resetBotonGuardar();
        mostrarMensaje('Item editado', 'completado');
    }

    localStorage.setItem('elementos', JSON.stringify(elementos));
    limpiarCampos();
}

function cargarElementos() {
    const elementos = JSON.parse(localStorage.getItem('elementos')) || [];
    elementos.forEach(({ id, nombre }) => {
        const elemento = crearElemento(nombre, id);
        document.getElementById('listado').appendChild(elemento);
    });
}

function crearElemento(nombreElemento, id = new Date().getTime().toString()) {
    const elemento = document.createElement('div');
    elemento.setAttribute('data-id', id);
    elemento.classList.add('elemento');
    elemento.innerHTML = `
        <h5>${nombreElemento}</h5>
        <button class="listo"><i class="fa-solid fa-check"></i></button>
        <button class="editar"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="eliminar"><i class="fa-solid fa-trash"></i></button>`;

    elemento.querySelector('.eliminar').addEventListener('click', borrarItem);
    elemento.querySelector('.listo').addEventListener('click', tareaCompletada);
    elemento.querySelector('.editar').addEventListener('click', preparacionEditar);

    return elemento;
}

function preparacionEditar(e) {
    const elemento = e.currentTarget.parentElement;
    const id = elemento.getAttribute('data-id');
    const nombreElemento = elemento.querySelector('h5').textContent;

    document.getElementById('elemento').value = nombreElemento;
    document.getElementById('guardar').className = 'editar';
    document.getElementById('guardar').textContent = 'Editar';
    idEdit = id;
}

function tareaCompletada(e) {
    const elemento = e.currentTarget.parentElement;
    elemento.classList.toggle('elemento-listo');
    const mensaje = elemento.classList.contains('elemento-listo') ? 'Item Completo' : 'Item Habilitado';
    mostrarMensaje(mensaje, 'completado');
}

function mostrarMensaje(text, accion) {
    const mensaje = document.getElementById('mensaje');
    mensaje.className = `mensaje-${accion}`;
    mensaje.textContent = text;

    setTimeout(() => {
        mensaje.className = 'mensaje-none';
        mensaje.textContent = '';
    }, 1000);
}

function borrarItem(e) {
    const elemento = e.currentTarget.parentElement;
    const id = elemento.getAttribute('data-id');
    const elementos = JSON.parse(localStorage.getItem('elementos')) || [];
    const nuevosElementos = elementos.filter(el => el.id !== id);

    localStorage.setItem('elementos', JSON.stringify(nuevosElementos));
    elemento.remove();
    mostrarMensaje('Item Eliminado', 'eliminado');
    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById('elemento').value = '';
}

function resetBotonGuardar() {
    const botonGuardar = document.getElementById('guardar');
    botonGuardar.className = 'guardar';
    botonGuardar.textContent = 'Enviar';
}