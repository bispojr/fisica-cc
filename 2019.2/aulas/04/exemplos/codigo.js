var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var bola = new Bola(50, '#0000ff');
bola.x = 100;
bola.y = 100;
bola.desenhar(contexto);