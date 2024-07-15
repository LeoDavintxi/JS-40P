let listaAPP=[
    {
        id: 1,
        ref: '/ChangeColor/index.html',
        nameID: 'change',
        nameClass: 'change',
        icon: 'fa-solid fa-paint-roller',
        nameSpan: 'Change Color'
    },
    {
        id: 2,
        ref: '/Counter/index.html',
        nameID: 'counter',
        nameClass: 'counter',
        icon: 'fa-solid fa-arrow-up-9-1',
        nameSpan: 'Counter'
    },
    {
        id: 3,
        ref: '/Quotes/index.html',
        nameID: 'quotes',
        nameClass: 'quotes',
        icon: 'fa-solid fa-magnifying-glass',
        nameSpan: 'Reviews'
    },
    {
        id: 4,
        ref: '/Navbar/index.html',
        nameID: 'navbar',
        nameClass: 'navbar',
        icon: 'fa-solid fa-bars',
        nameSpan: 'Navbar'
    },
    {
        id: 5,
        ref: '/SideBar/index.html',
        nameID: 'sidebar',
        nameClass: 'sidebar',
        icon: 'fa-solid fa-ticket',
        nameSpan: 'SideBar'
    },
    {
        id: 6,
        ref: '/Modal/index.html',
        nameID: 'modal',
        nameClass: 'modal',
        icon: 'fa-solid fa-medal',
        nameSpan: 'Modal'
    },
    {
        id: 7,
        ref: '/Questions/index.html',
        nameID: 'questions',
        nameClass: 'questions',
        icon: 'fa-solid fa-question',
        nameSpan: 'Questions'
    },
    {
        id: 8,
        ref: '/Menu/index.html',
        nameID: 'menu',
        nameClass: 'menu',
        icon: 'fa-solid fa-utensils',
        nameSpan: 'Menu'
    },
    {
        id: 9,
        ref: '/VideoProject/index.html',
        nameID: 'video',
        nameClass: 'video',
        icon: 'fa-solid fa-video',
        nameSpan: 'Video'
    },
    {
        id: 10,
        ref: '/Scroll/index.html',
        nameID: 'scroll',
        nameClass: 'scroll',
        icon: 'fa-solid fa-scroll',
        nameSpan: 'Scroll'
    },
];

//Funcion crea los botones
function displayBtn(lista){
    let listaBotones = lista.map((item)=>{
        return `<button onclick="location.href='${item.ref}'" id=${item.nameID} class=${item.nameClass}>
                    <i class="${item.icon}"></i><br>
                    <span>${item.nameSpan}</span>
                </button>`
    });
    listaBotones = listaBotones.join("");
    console.log(listaBotones);
    document.getElementById('contenedor').innerHTML = listaBotones;
}

//Inicio DOM
window.addEventListener('DOMContentLoaded', ()=>{
    displayBtn(listaAPP);
});