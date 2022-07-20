let contador = 0;

setInterval(() => {
	contador++
	if(contador <10){
		document.getElementById('titulo').innerHTML = 'hola '  + contador;
	} else{
		//alert("te pasaste brother");
	}
}, 1000)

