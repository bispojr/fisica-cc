function Ambiente(){}
function iniciar() {    
    this.canvas = document.getElementById('canvas');
    this.contexto = this.canvas.getContext('2d');
    
    this.bola = new Bola(50, '#0000ff');

    this.bola.x = 100;
    this.bola.y = 400;

    this.bola.vx = 55 / 60;
    this.bola.vy = -180 / 60;

    this.bola.ax = 0;
    this.bola.ay = 0.8 / 60;
    
    this.bloco = new Bloco(160, 30, "red");

    setInterval(this.emCadaPasso, 1000 / 60); // 60 fps
}
function emCadaPasso() {    
    if (this.bola.dentroLimiteInferior(this.canvas)) {
        this.bola.y += this.bola.vy;
        this.bola.vy += this.bola.ay;
    } else {
        this.bola.vy = -this.bola.vy * 0.8;
    }
    this.bola.desenhar(this.canvas, this.contexto); // desenhe a bola 
    this.bloco.desenhar(canvas, contexto);
}
Ambiente.prototype.iniciar = iniciar;
Ambiente.prototype.emCadaPasso = emCadaPasso;