var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50, '#0000ff');

bola.x = 100;
bola.y = 100;
bola.vx = 55/60;
bola.ax = 0.8/60;

window.onload = init;

function emCadaPassoX() {
    if (bola.x + bola.vx <= canvas.width - bola.raio){
        bola.x += bola.vx;
        bola.vx += bola.ax;
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXSemPausa() {
    bola.x += bola.vx;
    bola.vx += bola.ax;
    
    if(bola.x - bola.raio > canvas.width){
        bola.x = -bola.raio;
    }
    
    bola.desenhar(contexto); // desenhe a bola    
};

function init() {
    setInterval(emCadaPassoXSemPausa, 1000/60); // 60 fps
};

