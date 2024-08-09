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
    {
        id: 11,
        ref: '/Tabs/index.html',
        nameID: 'tabs',
        nameClass: 'tabs',
        icon: 'fa-solid fa-table-list',
        nameSpan: 'Tabs'
    },
    {
        id: 12,
        ref: '/Timer/index.html',
        nameID: 'timer',
        nameClass: 'timer',
        icon: 'fa-solid fa-stopwatch-20',
        nameSpan: 'Timer'
    },
    {
        id: 13,
        ref: '/Lorem/index.html',
        nameID: 'lorem',
        nameClass: 'lorem',
        icon: 'fa-brands fa-wpexplorer',
        nameSpan: 'Lorem'
    },
    {
        id: 14,
        ref: '/List/index.html',
        nameID: 'list',
        nameClass: 'list',
        icon: 'fa-solid fa-list-check',
        nameSpan: 'List'
    },
    {
        id: 15,
        ref: '/Slider/index.html',
        nameID: 'slider',
        nameClass: 'slider',
        icon: 'fa-brands fa-slideshare',
        nameSpan: 'Slider'
    },
    {
        id: 16,
        ref: '/Progress/index.html',
        nameID: 'progress',
        nameClass: 'progress',
        icon: 'fa-solid fa-bars-progress',
        nameSpan: 'Progress'
    },
    {
        id: 17,
        ref: '/Simple-timer/index.html',
        nameID: 'simpleTimer',
        nameClass: 'simpleTimer',
        icon: 'fa-solid fa-stopwatch',
        nameSpan: 'Simple'
    },
    {
        id: 18,
        ref: '/Text/index.html',
        nameID: 'text',
        nameClass: 'text',
        icon: 'fa-solid fa-text-width',
        nameSpan: 'Text Effect'
    },
    {
        id: 19,
        ref: '/Loading/index.html',
        nameID: 'loading',
        nameClass: 'loading',
        icon: 'fa-solid fa-spinner', 
        nameSpan: 'Loading'
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