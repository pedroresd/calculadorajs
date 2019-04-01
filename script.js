document.getElementById("btn").addEventListener("click", getData, false);


function getData(event){
	event.preventDefault();
	var a = parseInt(document.getElementById("entradaa").value);
	var b = parseInt(document.getElementById("entradab").value);
	var c = parseInt(document.getElementById("entradac").value);	
	console.log(a, b, c);
	baskara(a, b, c);		

}

function enviaDado(delta, x1, x2){
	document.getElementById("delta").setAttribute('value', delta);
	document.getElementById("x1").setAttribute('value', x1);
	document.getElementById("x2").setAttribute('value', x2);
}

function baskara(a, b, c){

	if(a == 0){
		alert("Não possui raizes reais");
	}
	
	var delta = (b*b) - (4*a*c);

	if (delta < 0){
		alert("Funcao nao tem raiz!");
		return 0;
	}

	rdelta = Math.sqrt(delta);

	base = (2*a);

	menosb = b * (-1);

	x1 = (menosb-rdelta)/base;
	x2 = (menosb+rdelta)/base;

	console.log(delta, x1, x2);

	enviaDado(delta, x1, x2);		
	
}