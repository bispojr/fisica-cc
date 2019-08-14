obj = new Object();
obj.nome = "Primeiro objeto";
obj.comprimento = 20;
console.log(obj.nome, obj.comprimento);

obj2 = {};
obj2["nomeReal"] = "Clark Kent";
obj2["nomeDC"] = "Superman";
console.log(obj2["nomeReal"], obj2["nomeDC"]);

function multiplicar(x, y){
	return x*y;
}

obj.funcao = multiplicar;

console.log( obj.funcao(4, 15) );