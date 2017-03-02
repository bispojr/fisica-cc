function Ambiente(){}
function iniciar() {    
    this.canvas = document.getElementById('canvas');
    this.contexto = this.canvas.getContext('2d');
    
    this.valoresIniciais();
    
    setInterval(this.emCadaPasso, 1000 / 60); // 60 fps
}
function valoresIniciais() {
    this.bloco =  new Bloco(10, 200, "yellow");
    
    this.bloco.x = this.canvas.width - 10;
    this.bloco.y = 50;
    
    this.bola = new Bola(50, '#0000ff');

    this.bola.x = this.bloco.x - (this.bola.raio + 9.5);    
    this.bola.y = 150;

    this.bola.vx = 50 / 60;
    this.bola.vy = 0;

    this.bola.ax = 0;
    this.bola.ay = 9.8 / 60;
}
function emCadaPasso() {    
    if(this.bola.x + this.bola.raio + this.bola.vx
                        <=
        this.bloco.x)
    {
        this.bola.x += this.bola.vx;
        
        this.bola.y += this.bola.vy;
        this.bola.vy += this.bola.ay;
    }
    
    this.limparCanvas();
    this.bola.desenhar(contexto);
    this.bloco.desenhar(contexto);
}
function limparCanvas(){
    this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Ambiente.prototype.iniciar = iniciar;
Ambiente.prototype.valoresIniciais = valoresIniciais;
Ambiente.prototype.emCadaPasso = emCadaPasso;
Ambiente.prototype.limparCanvas = limparCanvas;