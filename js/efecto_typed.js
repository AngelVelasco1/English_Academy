const typed = new Typed('.typed', {
  strings: [
    '<h1 class="typed_effect">For All<h1/>', 
    '<h1 class="typed_effect">For You<h1/>', 
    '<h1 class="typed_effect">For Us<h1/>',
    '<h1 class="typed_effect">For All<h1/>', 
    '<h1 class="typed_effect">Academy<h1/>', 
    ],
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 3000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  showCursor: false,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
})

