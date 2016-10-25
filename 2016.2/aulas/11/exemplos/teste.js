function multiplicar(x,y){
	return x*y;
}

objeto = {};
objeto.descricao = "Apenas um objeto";
objeto.mult = multiplicar;

console.log( "Descrição: " + objeto.descricao );
console.log( "Produto: " + objeto.mult(19,4) );
