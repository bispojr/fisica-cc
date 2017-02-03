var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50, '#0000ff');

bola.x = 100;
bola.y = 100;
bola.vx = 2;
bola.vy = 4;

window.onload = init;

function emCadaPassoX() {
    bola.x += bola.vx; // a velocidade horizontal aumenta a posição horizontal

    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXComPausa() {
    bola.x += bola.vx; // a velocidade horizontal aumenta a posição horizontal
    
    if (bola.x <= canvas.width - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }
};

function emCadaPassoY() {
    bola.y += bola.vy; 

    if (bola.y > canvas.height + bola.raio){ // se a bola vai para além da região do canvas
        bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXY() {
    bola.x += bola.vx; 
    bola.y += bola.vy;

    if (bola.y > canvas.height + bola.raio){ // se a bola vai para além da região do canvas
        //bola.x = -bola.raio; // coloque-a de volta
        bola.y = -bola.raio; // coloque-a de volta
    }
    
    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
        //bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function init() {
    setInterval(emCadaPassoXComPausa, 1000/60); // 60 fps
};

