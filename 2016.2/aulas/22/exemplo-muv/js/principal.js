var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50, '#0000ff');

bola.x = 100;
bola.y = 400;
bola.vx = 55/60;
bola.vy = -180/60;
bola.ax = 0;
bola.ay = 0.8/60;

window.onload = init;

function emCadaPassoY() {
    if (bola.y + bola.vy <= canvas.height - bola.raio){
        bola.y += bola.vy;
        bola.vy += bola.ay;
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function init() {
    setInterval(emCadaPassoY, 1000/60); // 60 fps
};

