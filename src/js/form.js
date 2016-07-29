var $ = require('jquery');

//console.log("Me cargo");

// Al hacer click en el botón de guardar enviamos una petición Ajax
// para almacenar la canción
$('.new-song-form button').on("click", function() {
	//console.log("Click en el botón");

	// Validación del formulario
	var inputs = $(".new-song-form input");
	for (var i=0; i < inputs.length; i++) { // Recorrer todos los campos del formulario con clase new-song
		var input = inputs[i];
		if (input.checkValidity() == false) {
			alert(input.validationMessage);
			input.focus();
			return false;
		}
	}

	// Canción a crear
	var song = {
		artist: $("#artist").val(),
		title:  $("#title").val(),
		audio_url: $("#audio_url").val(),
		cover_url: $("#cover_url").val()
	};

	// Petición Ajax para guardar la información en el backend
	$.ajax({
		url: "/api/songs/", // URL de petición
		method: "post",      // Creación de la canción		
		data: song, // Información de la canción
		beforeSend: function() { // Ejecución antes de la petición Ajax
			$(inputs).attr("disabled", true); // Deshabilitar todos los inputs
			// Cambiar texto del botón y deshabilitar botón
			$('.new-song-form button').text("Saving song...").attr("disabled", true);
		},
		success: function (response) { // Función callback cuando la petición sea exitosa
			//console.log ("SUCCESS", response);
			$("form")[0].reset(); // Limpiar formulario
			$("artist").focus(); // Poner foco en el campo artista
		},
		error: function (response) {
			console.log ("ERROR", response);	
		},		
		complete: function() { // Petición Ajax finalizada en cualquier circunstancia (success o error)
			$(inputs).attr("disabled", false); // Habilitar todos los inputs
			// Cambiar texto del botón y habilitar botón
			$('.new-song-form button').text("Saved song").attr("disabled", false);
		}		
	});

	return false; // == preventDefault
});