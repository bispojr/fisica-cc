var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50, '#0000ff');

bola.x = 100;
bola.y = 400;
bola.vx = 85/60;
bola.vy = -180/60;
bola.ax = 0;
bola.ay = 0.8/60;

window.onload = init;

function emCadaPassoXY() {
    if (bola.y + bola.vy <= canvas.height - bola.raio){       
        //Atualização do eixo y
        bola.y += bola.vy;
        bola.vy += bola.ay;
        
        //Atualização do eixo x        
        bola.x += bola.vx;
        
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXYBatendoNaParede() {
    if (bola.y + bola.vy <= canvas.height - bola.raio){
        
        if(bola.x + bola.vx > canvas.width - bola.raio){
            bola.x = canvas.width - bola.raio;
            bola.vx = -bola.vx;
        }
        
        //Atualização do eixo y
        bola.y += bola.vy;
        bola.vy += bola.ay;
        
        //Atualização do eixo x        
        bola.x += bola.vx;
        
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function init() {
    setInterval(emCadaPassoXYBatendoNaParede, 1000/60); // 60 fps
};

