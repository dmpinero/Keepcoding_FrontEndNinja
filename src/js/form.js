var $ = require('jquery');

console.log("Me cargo");

// Al hacer click en el botón de guardar enviamos una petición Ajax
// para almacenar la canción
$('.new-song-form button').on("click", function() {
	console.log("Click en el botón");

	return false; // == preventDefault
});