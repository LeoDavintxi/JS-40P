document.getElementById('btn-question1').addEventListener('click', ()=>{
    if(document.getElementById('respuesta1').classList.contains('respuesta-hide')){
        document.getElementById('respuesta1').classList.remove('respuesta-hide');
        document.getElementById('respuesta2').classList = 'respuesta-hide';
        document.getElementById('respuesta3').classList = 'respuesta-hide';
        document.getElementById('icon1').className = 'fa-solid fa-minus';
        document.getElementById('icon2').className = 'fa-solid fa-plus';
        document.getElementById('icon3').className = 'fa-solid fa-plus';
    }else{
        document.getElementById('respuesta1').classList.add('respuesta-hide')
        document.getElementById('respuesta2').classList = 'respuesta-hide';
        document.getElementById('respuesta3').classList = 'respuesta-hide';
        document.getElementById('icon1').className = 'fa-solid fa-plus';
        document.getElementById('icon2').className = 'fa-solid fa-plus';
        document.getElementById('icon3').className = 'fa-solid fa-plus';
    }
});

document.getElementById('btn-question2').addEventListener('click', ()=>{
    if(document.getElementById('respuesta2').classList.contains('respuesta-hide')){
        document.getElementById('respuesta2').classList.remove('respuesta-hide');
        document.getElementById('respuesta1').classList = 'respuesta-hide';
        document.getElementById('respuesta3').classList = 'respuesta-hide';
        document.getElementById('icon2').className = 'fa-solid fa-minus';
        document.getElementById('icon1').className = 'fa-solid fa-plus';
        document.getElementById('icon3').className = 'fa-solid fa-plus';
    }else{
        document.getElementById('respuesta2').classList.add('respuesta-hide')
        document.getElementById('respuesta1').classList = 'respuesta-hide';
        document.getElementById('respuesta3').classList = 'respuesta-hide';
        document.getElementById('icon1').className = 'fa-solid fa-plus';
        document.getElementById('icon2').className = 'fa-solid fa-plus';
        document.getElementById('icon3').className = 'fa-solid fa-plus';
    }
});

document.getElementById('btn-question3').addEventListener('click', ()=>{
    if(document.getElementById('respuesta3').classList.contains('respuesta-hide')){
        document.getElementById('respuesta3').classList.remove('respuesta-hide');
        document.getElementById('respuesta1').classList = 'respuesta-hide';
        document.getElementById('respuesta2').classList = 'respuesta-hide';
        document.getElementById('icon3').className = 'fa-solid fa-minus';
        document.getElementById('icon1').className = 'fa-solid fa-plus';
        document.getElementById('icon2').className = 'fa-solid fa-plus';
    }else{
        document.getElementById('respuesta3').classList.add('respuesta-hide')
        document.getElementById('respuesta1').classList = 'respuesta-hide';
        document.getElementById('respuesta2').classList = 'respuesta-hide';
        document.getElementById('icon1').className = 'fa-solid fa-plus';
        document.getElementById('icon2').className = 'fa-solid fa-plus';
        document.getElementById('icon3').className = 'fa-solid fa-plus';
    }
});