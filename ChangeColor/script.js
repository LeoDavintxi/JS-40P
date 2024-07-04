let p = document.getElementById("click");
p.onclick = eventoClick;

function eventoClick() {
  let color = generarColorHexadecimal();
  let nombreColor = document.getElementById("nombre");
  let fondo = document.getElementById("fondo");
  nombreColor.style.color = color;
  nombreColor.textContent = color;
  fondo.style.background = color;
}

function generarColorHexadecimal() {
  let color = "#";
  const caracteresHex = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * 16);
    color += caracteresHex[indiceAleatorio];
  }
  return color;
}
