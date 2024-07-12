const video = document.getElementById('video');
const boton = document.getElementById('boton');

boton.addEventListener("click", ()=>{
    if(video.paused){
        video.play();
        document.getElementById('sw').className = 'sw';
        document.querySelector('i').className= 'fa-solid fa-pause';
        document.getElementById('labelPlay').style.color = 'rgb(27, 119, 161)';
    }else{
        video.pause();
        document.getElementById('sw').className = 'sw-p';
        document.querySelector('i').className= 'fa-solid fa-play';
        document.getElementById('labelPause').style.color = 'red';
    }
});