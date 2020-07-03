window.addEventListener("load", () => {
  redimensionar();
  document.addEventListener("mousedown", iniciarDibujado);
  document.addEventListener("mouseup", detenerDibujado);
  document.addEventListener("mousemove", dibujo);
  window.addEventListener("resize", redimensionar);
});

const canvas = document.querySelector("#pizarra");
const ctx = canvas.getContext("2d");

function redimensionar() {
  ctx.canvas.width = 600; //window.innerWidth;
  ctx.canvas.height = 600;//window.innerHeight;
}

let coordenadas = { x: 0, y: 0 };

let dibujar = false; // dibujo detenido

function obtenerPosicion(event) {
  coordenadas.x = event.clientX - canvas.offsetLeft;
  coordenadas.y = event.clientY - canvas.offsetTop;
}

function iniciarDibujado(event) {
  dibujar = true;
  obtenerPosicion(event);
}

function detenerDibujado() {
  dibujar = false;
}

function dibujo(event) {

  if (!dibujar) return;

  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#5858ef"; // podemos colocar nosotros el color ya en tiempo real 

  ctx.moveTo(coordenadas.x, coordenadas.y);

  obtenerPosicion(event);

  ctx.lineTo(coordenadas.x, coordenadas.y);
  ctx.stroke(); // dibujamos la linea
}

document.getElementById("form").addEventListener(
  "submit",

  function (e) {
    let ctx = document.getElementById("pizarra");
    var image = ctx.toDataURL(); // data:image/png....
    document.getElementById("imgPiza").value = image;
  },
  false
);
