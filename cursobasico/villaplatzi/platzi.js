
document.addEventListener("keydown", mueveCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var cantidadVacas = aleatorio(1, 10);

var vaca = {
  url: "vaca.png",
  cargaOK: false,
  totVacas: cantidadVacas,
  posX: [],
  posY: []
};

for (i=0; i < cantidadVacas; i++)
{
      var xVaca = aleatorio(0, 7) * 60;
      var yVaca = aleatorio(0, 10) * 40;
      vaca.posX[i] = xVaca;
      vaca.posY[i] = yVaca;
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  x: 250,
  y: 250
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);



vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);



function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log("Vacas: ", vaca.totVacas);
    for(var v=0; v < vaca.totVacas; v++)
    {
      papel.drawImage(vaca.imagen, vaca.posX[v], vaca.posY[v]);
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function mueveCerdo(evento) {
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      cerdo.y = cerdo.y - movimiento;
      dibujar();
    break;
    case teclas.DOWN:
      cerdo.y = cerdo.y + movimiento;
      dibujar();
    break;
    case teclas.LEFT:
      cerdo.x = cerdo.x - movimiento;
      dibujar();
    break;
    case teclas.RIGHT:
      cerdo.x = cerdo.x + movimiento;
      dibujar();
    break;
  }
}
