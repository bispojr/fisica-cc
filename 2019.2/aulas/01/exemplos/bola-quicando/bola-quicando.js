var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 20;
var color = "#0000ff";
var g = 0.1; // aceleração devido à gravidade
var x = 50;  // posição horizontal inicial
var y = 50;  // posição vertical inicial
var vx = 2;  // velocidade horizontal inicial
var vy = 0;  // velocidade vertical inicial

window.onload = init;

function init() {
  setInterval(emCadaPasso, 1000/60); // 60 fps
};

function emCadaPasso() {
  vy += g; // a gravidade aumenta a velocidade vertical
  x += vx; // a velocidade horizontal aumenta a posição horizontal
  y += vy; // a velocidade vertical aumenta a posição vertical

  if (y > canvas.height - radius){ // se a bola atinge o chão
    y = canvas.height - radius; // reposicione ela no chão
    vy *= -0.8; // então reverta e reduza sua velocidade vertical
  }
  if (x > canvas.width + radius){ // se a bola vai para além da região do canvas
    x = -radius; // coloque-a de volta
  }
  desenheABola(); // desenhe a bola
};

function desenheABola() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height);
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};
