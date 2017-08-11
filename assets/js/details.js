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
		var imagenDetails = $('<img>').attr('src',arr.poster);
		$(".imagen-pelicula-details").append(imagenDetails);
		//Datos a texto
		var nombrePeliculaMovies = $('<p>').text(arr.show_title);
		nombrePeliculaMovies.attr("class","titulo-pelicula-details");
		var anoLanzamientoMovies = $('<p>').text(arr.release_year);
		anoLanzamientoMovies.attr("class","year-pelicula-details");
		var categoriaMovies = $('<p>').text(arr.category);
		var duracionMovies = $('<p>').text(arr.runtime);
		var directorMovies = $('<p>').text(arr.director);
		var sinopsisMovies = $('<p>').text(arr.summary);
		//show_cast actores
		
		$(".info-peli-titulo").append(nombrePeliculaMovies);
		$(".info-peli-titulo").append(anoLanzamientoMovies);
		$(".info-peli-details").append(sinopsisMovies);
		$(".info-peli-details").append(categoriaMovies);
		$(".info-peli-details").append(directorMovies);
	}
});