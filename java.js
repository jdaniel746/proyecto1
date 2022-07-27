let contador = 0;

setInterval(() => {
	contador++
	if(contador <10){
		document.getElementById('titulo').innerHTML = 'hola '  + contador;
	} else{
	}
}, 1000)

