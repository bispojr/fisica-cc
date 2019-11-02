function Bola(raio, cor) {
    this.raio = raio;
    this.cor = cor;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
}
function desenhar(contexto){
    contexto.fillStyle = this.cor;
    contexto.beginPath();
    contexto.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, true);
    contexto.closePath();
    contexto.fill();
}
function dentroLimiteInferior(canvas) {
    if (this.y + this.vy + this.raio <= canvas.height) {
        return true;
    } else {
        return false;
    }
}
function dentroLimiteDireito(canvas) {
    if (this.x + this.vx + this.raio <= canvas.width) {
        return true;
    } else {
        return false;
    }
}
Bola.prototype.desenhar = desenhar;
Bola.prototype.dentroLimiteInferior = dentroLimiteInferior;
Bola.prototype.dentroLimiteDireito = dentroLimiteDireito;