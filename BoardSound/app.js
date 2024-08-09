const btnAplausos = document.getElementById('btn-aplausos');
const aplausos = document.getElementById('aplausos');

btnAplausos.addEventListener('click', ()=>{
    aplausos.currentTime = 0;
    aplausos.play();
});