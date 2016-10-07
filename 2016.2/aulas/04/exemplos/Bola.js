function Bola ( raio , cor ) {
  this.raio = raio ;
  this.cor = cor ;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  }

Bola.prototype.desenhar = function( contexto ) {
  contexto.fillStyle = this.cor ;
  contexto.beginPath();
  contexto.arc( this.x, this.y ,
  			this.raio , 0 , 2*Math.PI , true ) ;
  contexto.closePath();
  contexto.fill();
 };

 var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50 ,'#0000ff');
bola.x = 100;
bola.y = 100;
bola.desenhar( contexto ) ;