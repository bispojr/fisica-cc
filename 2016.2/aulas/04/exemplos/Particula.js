function Particula(pnome){
	this.nome = pnome;
	this.mover = function(){
		console.log( this.nome + " em movimento!");
	};
}

particula1 = new Particula("eletron");

console.log( "Nome: " + particula1.nome);
console.log( "Massa: " + particula1.massa);
particula1.mover();

particula1.nome = "neutrino";
console.log( "Nome: " + particula1.nome);

Particula.prototype.massa = 1;

particula2 = new Particula("proton");

particula2.mover();
console.log( "Massa: " + particula2.massa);

//Valor indefinido
console.log( "Massa: " + particula1.massa);

