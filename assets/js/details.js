$(document).ready(function() {
	var valuee = localStorage.getItem("tituloPelicula");
	$.ajax({
			url: 'https://netflixroulette.net/api/api.php',
			type: 'GET',
			dataType: 'json',
			data: {title: valuee},
			})
			.done(function(arr) {
				console.log("success");
				console.log(arr);
				mostrar(arr);
			})
			.fail(function() {
				console.log("error");
			})
	function mostrar(arr){
		//Imagen en el div vacio
		var imagenDetails = $('<img>').attr("src",arr.poster);
		$(".imagen-pelicula-details").append(imagenDetails);
		var nombrePeliculaMovies = $('<p>').text(arr.show_title);
		var anoLanzamientoMovies = $('<p>').text(arr.release_year);
		var categoriaMovies = $('<p>').text(arr.category);
		var duracionMovies = $('<p>').text(arr.runtime);
		var directorMovies = $('<p>').text(arr.director);
		var sinopsisMovies = $('<p>').text(arr.summary);
		show_cast

	}
});