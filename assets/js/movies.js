$(document).ready(function() {
	var pelis = ['The Fumbleheads', 'Getting That Girl', 'The Longest Day', 'Old Joy','The French Connection', 'Love Actually', 'The Union: The Business Behind Getting High', 'Marathon', 'A Greater Yes: The Story of Amy Newhouse','Scourge', 'The Club', 'Alien Abduction','Beginners','Cuban Fury','Crossroads'];
	var cont = 0;
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

		var linkMovies = $('<a href="details.html">').attr('class', 'link-movies');
		var tituloMovies = $('<div>').attr('class', 'titulo-movies');
			tituloMovies.attr('id', 'movies-'+ cont);
			tituloMovies.append(nombrePeliculaMovies);
			tituloMovies.append(anoLanzamientoMovies);
			tituloMovies.append(categoriaMovies);
			linkMovies.append(tituloMovies);

		var detalleMovies = $('<div>').attr('class', 'detalle-movies');
			detalleMovies.append(duracionMovies);
			detalleMovies.append(directorMovies);

		var guardarFavoritoMovies = $('<button>').attr('class', 'guardar-favorito-movies');
			guardarFavoritoMovies.attr('id', 'movie-btn-'+cont);
			guardarFavoritoMovies.text('Guardar a Favoritos');

		var infoMovies = $('<div>').attr('class', 'info-movies');
			infoMovies.append(linkMovies);
			infoMovies.append(detalleMovies);
			infoMovies.append(guardarFavoritoMovies);

		$('.movies').append(infoMovies);

		$( "#movies-"+cont ).click(function() {
  			alert( arr.show_title);
  			localStorage.setItem("tituloPelicula", arr.show_title);
		});

		$( "#movie-btn-"+cont ).click(function() {
  			alert( arr.show_title);
  			localStorage.setItem("tituloPelicula", arr.show_title);
		});

		cont++;
	}

	$('select').on('change', function() {
		var valor = this.value;
		$('.movies').empty();
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
					peliculasCategoria(arr);
				})
				.fail(function() {
					console.log("error");
				})
		});

		function peliculasCategoria(arr){
			if(valor == arr.category ){
				
			
		var nombrePeliculaMovies = $('<p>').text(arr.show_title);
		var anoLanzamientoMovies = $('<p>').text(arr.release_year);
		var categoriaMovies = $('<p>').text(arr.category);
		var duracionMovies = $('<p>').text(arr.runtime);
		var directorMovies = $('<p>').text(arr.director);

		var linkMovies = $('<a href="details.html">').attr('class', 'link-movies');
		var tituloMovies = $('<div>').attr('class', 'titulo-movies');
			tituloMovies.attr('id', 'movies-'+ cont);
			tituloMovies.append(nombrePeliculaMovies);
			tituloMovies.append(anoLanzamientoMovies);
			tituloMovies.append(categoriaMovies);
			linkMovies.append(tituloMovies);

		var detalleMovies = $('<div>').attr('class', 'detalle-movies');
			detalleMovies.append(duracionMovies);
			detalleMovies.append(directorMovies);

		var guardarFavoritoMovies = $('<button>').attr('class', 'guardar-favorito-movies');
			guardarFavoritoMovies.attr('id', 'movie-btn-'+cont);
			guardarFavoritoMovies.text('Guardar a Favoritos');

		var infoMovies = $('<div>').attr('class', 'info-movies');
			infoMovies.append(linkMovies);
			infoMovies.append(detalleMovies);
			infoMovies.append(guardarFavoritoMovies);

		$('.movies').append(infoMovies);

		$( "#movies-"+cont ).click(function() {
  			alert( arr.show_title);
  			localStorage.setItem("tituloPelicula", arr.show_title);
		});

		$( "#movie-btn-"+cont ).click(function() {
  			alert( arr.show_title);
  			localStorage.setItem("tituloPelicula", arr.show_title);
		});

		cont++;
	}
	}
	});

});