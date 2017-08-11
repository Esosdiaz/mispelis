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
		var categoriaMovies = $('<p>').text("Categoria: "+arr.category);
		var duracionMovies = $('<p>').text(arr.runtime);
		var directorMovies = $('<p>').text("Director: "+arr.director);
		var sinopsisMovies = $('<p>').text(arr.summary);
		//show_cast actores
		
		$(".info-peli-titulo").append(nombrePeliculaMovies);
		$(".info-peli-titulo").append(anoLanzamientoMovies);
		$(".info-peli-details").append(sinopsisMovies);
		$(".info-peli-details").append(categoriaMovies);
		$(".info-peli-details").append(directorMovies);
		//Actores
		var actoresMoviesDiv = $('<div>').attr("class","actores-peli-details");
		actoresMoviesDiv.append('<p>Starring:</p>');
		$(".info-peli-details").append(actoresMoviesDiv);
		
		var actores = arr.show_cast;
		var actor = actores.split(",",1);
		var actorName = actor[0];
		console.log(actorName);
		var linkActores = $('<a>').text(actorName);
		linkActores.attr('class', 'link-actor');
		actoresMoviesDiv.append(linkActores);
		localStorage.setItem("actor",actorName);
		
		/*var cont = 0;
		actores.forEach(function(el){
			var linkActores = $('<a>').text(el);
			linkActores.attr('class', 'link-actores');
			linkActores.attr('id', 'link-actores-'+cont);
			actoresMoviesDiv.append(linkActores);
			$( "#link-actores-"+cont ).click(function() {
			localStorage.setItem("actor", actores[cont]);
			});
			cont ++;
		});
*/
		
		/*var actoresMoviesDetails = $('<p>').text(arr.show_cast);
		actoresMoviesDiv.append(actoresMoviesDetails);
		*/
	}
});