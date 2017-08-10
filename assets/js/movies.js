$(document).ready(function() {
	var pelis = ['As Good as It Gets', 'Vampire Knight', 'The Longest Day', 'Arthur and the Invisibles','The French Connection', 'Love Actually', 'The Union: The Business Behind Getting High', 'Marathon', 'A Greater Yes: The Story of Amy Newhouse'];
	
	pelis.forEach(function(val){
		$.ajax({
			url: 'https://netflixroulette.net/api/api.php',
			type: 'GET',
			dataType: 'json',
			data: {title: val},
			})
			.done(function(arr) {
				console.log("success");
				console.log(arr);
				peliculas(arr);
			})
			.fail(function() {
				console.log("error");
			})
	});
	
	function peliculas(arr){
		var nombrePeliculaMovies = $('<p>').text(arr.show_title);
		var anoLanzamientoMovies = $('<p>').text(arr.release_year);
		var categoriaMovies = $('<p>').text(arr.category);
		var duracionMovies = $('<p>').text(arr.runtime);
		var directorMovies = $('<p>').text(arr.director);

		var tituloMovies = $('<div>').attr('class', 'titulo-movies');
			tituloMovies.append(nombrePeliculaMovies);
			tituloMovies.append(anoLanzamientoMovies);
			tituloMovies.append(categoriaMovies);

		$('.movies').append(tituloMovies);
	}
});