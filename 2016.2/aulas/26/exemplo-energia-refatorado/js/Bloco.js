function Bloco(largura, altura, cor) {
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
    this.x = 5;
    this.y = 120;
}
function desenhar(canvas, contexto){    
    contexto.fillStyle = this.cor;
    contexto.beginPath();    
    contexto.rect(this.x, this.y, this.largura, this.altura);
    contexto.closePath();
    contexto.fill();
}
Bloco.prototype.desenhar = desenhar;