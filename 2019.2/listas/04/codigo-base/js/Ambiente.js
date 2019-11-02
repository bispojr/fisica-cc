function Ambiente(){}
function iniciar() {    
    this.canvas = document.getElementById('canvas');
    this.contexto = this.canvas.getContext('2d');
    
    this.valoresIniciais();
    
    setInterval(this.emCadaPasso, 1000 / 60); // 60 fps
}
function valoresIniciais() {
    this.bola = new Bola(50, '#0000ff');

    this.bola.x = 210;
    this.bola.y = 70;

    this.bola.vx = 55 / 60;
    this.bola.vy = 0;

    this.bola.ax = 0;
    this.bola.ay = 9.8 / 60;
}
function emCadaPasso() {    
    if (this.bola.dentroLimiteInferior(this.canvas)) {
        this.bola.y += this.bola.vy;
        this.bola.vy += this.bola.ay;
    } 
    
    this.limparCanvas();
    this.bola.desenhar(this.contexto); // desenhe a bola 
    this.bloco.desenhar(this.contexto);
}
function limparCanvas(){
    this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Ambiente.prototype.iniciar = iniciar;
Ambiente.prototype.valoresIniciais = valoresIniciais;
Ambiente.prototype.emCadaPasso = emCadaPasso;
Ambiente.prototype.limparCanvas = limparCanvas;