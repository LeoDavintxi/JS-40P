const reviews = [
    {
        id: 1,
        nombre: 'David Jone',
        cargo: 'Ingeniero',
        img: 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1720125943~exp=1720126543~hmac=4182baff0f693e176ca0375d724dfcff59f29fb59e9fd3af6ffc5205a5b0102f',
        descripcion: 'Ejemplo 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore harum, nihil labore culpa quo modi facere quibusdam dolorem, veritatis ad. Architecto nam hic laboriosam ratione similique quam quis id.',
    },
    {
        id: 2,
        nombre: 'Catalina Rodriguez',
        cargo: 'Diseñadora',
        img: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?w=740&t=st=1720126005~exp=1720126605~hmac=b8551f16f7e2ecae18aed5c94b0de756ef928a789b1f559291e0861009862d93',
        descripcion: 'Ejemplo 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore harum, nihil labore culpa quo modi facere quibusdam dolorem, veritatis ad. Architecto nam hic laboriosam ratione similique quam quis id.',
    },
    {
        id: 3,
        nombre: 'Raul Fernandez',
        cargo: 'Gerente',
        img: 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg?w=740&t=st=1720126075~exp=1720126675~hmac=4477e6ff2fc741c7d28b1e25cb663fbd4873133cd89e72e1efd6549b1848bb71',
        descripcion: 'Ejemplo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore harum, nihil labore culpa quo modi facere quibusdam dolorem, veritatis ad. Architecto nam hic laboriosam ratione similique quam quis id.',
    },
];

let imgPersona = document.getElementById('img-persona');
let nombrePersona = document.getElementById('nombre-persona');
let cargoPersona = document.getElementById('cargo-persona');
let descripcionPersona = document.getElementById('descripcion-persona');

let indice = 0;

document.getElementById('next').addEventListener('click', ()=>{
    indice = indice + 1;
    if(indice >= reviews.length){
        indice = 0;
    }
    imgPersona.src = reviews[indice].img;
    nombrePersona.textContent = reviews[indice].nombre;
    cargoPersona.textContent = reviews[indice].cargo;
    descripcionPersona.textContent = reviews[indice].descripcion;
});

document.getElementById('back').addEventListener('click', ()=>{
    indice = indice - 1;
    if(indice < 0){
        indice = reviews.length - 1;
    }
    imgPersona.src = reviews[indice].img;
    nombrePersona.textContent = reviews[indice].nombre;
    cargoPersona.textContent = reviews[indice].cargo;
    descripcionPersona.textContent = reviews[indice].descripcion;
});

document.getElementById('random').addEventListener('click', ()=>{
    indice = Math.floor(Math.random() * 3);
    imgPersona.src = reviews[indice].img;
    nombrePersona.textContent = reviews[indice].nombre;
    cargoPersona.textContent = reviews[indice].cargo;
    descripcionPersona.textContent = reviews[indice].descripcion;
});