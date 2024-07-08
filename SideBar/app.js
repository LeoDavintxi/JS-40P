document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('aside').classList='aside-hide';
});

document.getElementById('toggle').addEventListener('click', ()=>{
    document.getElementById('aside').classList.toggle('aside-show');
});