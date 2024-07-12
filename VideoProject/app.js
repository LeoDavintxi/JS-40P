const video = document.getElementById('video');
const boton = document.getElementById('boton');

boton.addEventListener("click", ()=>{
    if(video.paused){
        video.play();
        document.getElementById('sw').className = 'sw';
        document.getElementById('icon').className= 'fa-solid fa-pause';
        document.getElementById('labelPlay').style.color = 'rgb(27, 119, 161)';
    }else{
        video.pause();
        document.getElementById('sw').className = 'sw-p';
        document.getElementById('icon').className= 'fa-solid fa-play';
        document.getElementById('labelPause').style.color = 'red';
    }
});

document.getElementById('random').addEventListener('click', ()=>{
    let numRandom = Math.floor(Math.random() * 7) + 1;
    document.getElementById('video').src = `/VideoProject/asset/${numRandom}.mp4`;
});