let contador = 0;

setInterval(() => {
	contador++
	if(contador <10){
		document.getElementById('titulo').innerHTML = 'sinceramente no se que cambiar '  + contador;
	} else{
	}
}, 1000)

