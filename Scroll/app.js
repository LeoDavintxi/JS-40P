window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        document.getElementById('header').className = 'header-scroll';
    }else{
        document.getElementById('header').className = 'header';
    }
})

let headerHeight = document.getElementById('header').scrollHeight;
document.querySelectorAll('.links').forEach((item)=>{
    item.addEventListener('click', ()=>{
        let sectionHeight = document.getElementById('section-' + item.getAttribute('id')).offsetTop - headerHeight;
        window.scrollTo({
            top: sectionHeight,
            behavior: 'smooth',
        });
    });
});

document.getElementById('explorar').addEventListener('click', ()=>{
    window.scrollTo({
        top: document.getElementById('section-tours').offsetTop - headerHeight,
        behavior: 'smooth',
    });
});