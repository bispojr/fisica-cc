function Ambiente(){}
function iniciar() {    
    this.canvas = document.getElementById('canvas');
    this.contexto = this.canvas.getContext('2d');
    
    this.bola = new Bola(50, '#0000ff');

    this.bola.x = 50;
    this.bola.y = 70;

    this.bola.vx = 55 / 60;
    this.bola.vy = 0;

    this.bola.ax = 0;
    this.bola.ay = 0.8 / 60;
    
    this.bloco = new Bloco(160, 30, "red");

    setInterval(this.emCadaPasso, 1000 / 60); // 60 fps
}
function emCadaPasso() {
    
    if(this.bola.x <= 160){
        this.bola.x += this.bola.vx;    
    }
    else{
        
        if(this.bola.dentroLimiteDireito(this.canvas)){
            this.bola.x += this.bola.vx;
        }
        else {
            this.bola.vx = -this.bola.vx * 0.8;
            this.bola.vy *= 0.95;
        }
        
        if (this.bola.dentroLimiteInferior(this.canvas)) {
            this.bola.y += this.bola.vy;
            this.bola.vy += this.bola.ay;
            
        } else {
            this.bola.vy = -this.bola.vy * 0.8;
            this.bola.vx *= 0.95;
        }
    }
    
    this.limparCanvas();
    this.bola.desenhar(this.contexto); // desenhe a bola 
    this.bloco.desenhar(this.contexto);
}
function limparCanvas(){
    this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Ambiente.prototype.iniciar = iniciar;
Ambiente.prototype.emCadaPasso = emCadaPasso;
Ambiente.prototype.limparCanvas = limparCanvas;