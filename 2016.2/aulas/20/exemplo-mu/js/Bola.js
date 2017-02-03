function Bola(raio, cor) {
    this.raio = raio;
    this.cor = cor;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
}

Bola.prototype.desenhar = function (contexto) {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = this.cor;
    contexto.beginPath();
    contexto.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, true);
    contexto.closePath();
    contexto.fill();
};