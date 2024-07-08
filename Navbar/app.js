document.getElementById('nav-toggle').addEventListener('click', function(){
    document.getElementById('contenedor-links').classList.toggle('contenedor-links-hide');
    const i = document.getElementById('icon');
    if(i.classList.contains('fa-xmark')){
        i.classList.add('fa-bars');
        i.classList.remove('fa-xmark');
        i.style.color = 'black';
    }else{
        i.classList.add('fa-xmark');
        i.classList.remove('fa-bars');
        i.style.color = 'red';
    }
});