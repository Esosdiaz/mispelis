$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.modal').modal();
	var pelis = ['The Fumbleheads', 'Getting That Girl', 'The Longest Day', 'Old Joy','Over Your Cities Grass Will Grow', 'Love Actually', 'The Union: The Business Behind Getting High', 'Marathon','Inside the Hunt for the Boston Bomber','Scourge', 'The Club', 'Alien Abduction','Beginners','Cuban Fury','Crossroads'];
	var cont = 0;
	var favoritoMovies = JSON.parse(localStorage.getItem("favoritoMovies"));
	if(favoritoMovies == null){
		favoritoMovies = [];
	}

	localStorage.setItem("favoritoMovies", JSON.stringify(favoritoMovies));

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
		var anoLanzamientoMovies = $('<p>').text('('+arr.release_year +')');
		var categoriaMovies = $('<p>').text(arr.category);
		var duracionMovies = $('<p>').text('Runtime: '+arr.runtime);
		var directorMovies = $('<p>').text('Director: '+arr.director);

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

		var guardarFavoritoMovies = $('<a>').attr('class', 'guardar-favorito-movies waves-effect btn boton-add-details');
			guardarFavoritoMovies.attr('id', 'movie-btn-'+cont);
			guardarFavoritoMovies.text('Add favorites');

		var infoMovies = $('<div>').attr('class', 'info-movies');
			infoMovies.append(linkMovies);
			infoMovies.append(detalleMovies);
			infoMovies.append(guardarFavoritoMovies);

			if( favoritoMovies.indexOf(arr.show_title) != -1){
				guardarFavoritoMovies.text('Remove of Favorite');
			}

		$('.movies').append(infoMovies);

		$( "#movies-"+cont ).click(function() {
  			localStorage.setItem("tituloPelicula", arr.show_title);
		});

		$( "#movie-btn-"+cont ).click(function() {
			if( favoritoMovies.indexOf(arr.show_title) == -1){
				favoritoMovies.push(arr.show_title);
				localStorage.setItem("favoritoMovies", JSON.stringify(favoritoMovies));
				var storedFavorites = JSON.parse(localStorage.getItem("favoritoMovies"));
				guardarFavoritoMovies.text('Remove of Favorite');
				console.log(storedFavorites);
			}
			else if( favoritoMovies.indexOf(arr.show_title) != -1){
				
				favoritoMovies.splice(favoritoMovies.indexOf(arr.show_title),1);
				localStorage.setItem("favoritoMovies", JSON.stringify(favoritoMovies));
				var storedFavorites = JSON.parse(localStorage.getItem("favoritoMovies"));
				guardarFavoritoMovies.text('Add favorites');
				console.log(storedFavorites);
			}
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
				var anoLanzamientoMovies = $('<p>').text('('+arr.release_year +')');
				var categoriaMovies = $('<p>').text(arr.category);
				var duracionMovies = $('<p>').text('Runtime: '+arr.runtime);
				var directorMovies = $('<p>').text('Director: '+arr.director);

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

				var guardarFavoritoMovies = $('<a>').attr('class', 'guardar-favorito-movies waves-effect btn boton-add-details');
						guardarFavoritoMovies.attr('id', 'movie-btn-'+cont);
						guardarFavoritoMovies.text('Add favorites');

				var infoMovies = $('<div>').attr('class', 'info-movies');
					infoMovies.append(linkMovies);
					infoMovies.append(detalleMovies);
					infoMovies.append(guardarFavoritoMovies);

				if( favoritoMovies.indexOf(arr.show_title) != -1){
					guardarFavoritoMovies.text('Remove of Favorite');
				}

				$('.movies').append(infoMovies);

				$( "#movies-"+cont ).click(function() {
		  			alert( arr.show_title);
		  			localStorage.setItem("tituloPelicula", arr.show_title);
				});

				$( "#movie-btn-"+cont ).click(function() {
		  			if( favoritoMovies.indexOf(arr.show_title) == -1){
						favoritoMovies.push(arr.show_title);
						localStorage.setItem("favoritoMovies", JSON.stringify(favoritoMovies));
						var storedFavorites = JSON.parse(localStorage.getItem("favoritoMovies"));
						guardarFavoritoMovies.text('Remove of Favorite');
						console.log(storedFavorites);
					}
					else if( favoritoMovies.indexOf(arr.show_title) != -1){
						
						favoritoMovies.splice(favoritoMovies.indexOf(arr.show_title),1);
						localStorage.setItem("favoritoMovies", JSON.stringify(favoritoMovies));
						var storedFavorites = JSON.parse(localStorage.getItem("favoritoMovies"));
						guardarFavoritoMovies.text('Add favorites');
						console.log(storedFavorites);
					}
				});

				cont++;
			}
		}
	});
