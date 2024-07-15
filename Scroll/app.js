window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        document.getElementById('header').className = 'header-scroll';
    }else{
        document.getElementById('header').className = 'header';
    }
})

document.querySelectorAll('.links').forEach((item)=>{
    item.addEventListener('click', ()=>{
        document.getElementById('menu').className = 'menu';
        let headerHeight = document.getElementById('header').scrollHeight;
        let sectionHeight = document.getElementById('section-' + item.getAttribute('id')).offsetTop - headerHeight;
        window.scrollTo({
            top: sectionHeight,
            behavior: 'smooth',
        });
    });
});

document.getElementById('explorar').addEventListener('click', ()=>{
    let headerHeight = document.getElementById('header').scrollHeight;
    window.scrollTo({
        top: document.getElementById('section-tours').offsetTop - headerHeight,
        behavior: 'smooth',
    });
});

document.getElementById('toggle').addEventListener('click', ()=>{
    document.getElementById('menu').classList.toggle('menu-toggle');
});