var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//document.addEventListener("keyup", dibujarTeclado);

var estado = 0;
var colorLinea = "blue";
var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x;
var y;

document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);

dibujarLinea("red", 0, 0, 300, 0, papel);
dibujarLinea("red", 300, 0, 300, 300, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("red", 0, 300, 0, 0, papel);

function dibujarMouse(evento){
  if (estado == 1) {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

function presionarMouse(evento){
  estado = 1;          
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento){
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}

function dibujarTeclado(evento) {
  var estado = 0;
  var colorLinea = "blue";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
  
}
