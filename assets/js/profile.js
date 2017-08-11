$( document ).ready(function(){
	$('window').onload(function(recuperar-datos){ 

		var usuario = localStorage.getItem("nameDat");
		var nombre = localStorage.getItem("userDat");
		var pais = localStorage.getItem("countryDat");

		$("#usuario-profile").append(usuario);
		$("#nombre-profile").append(nombre);
		$("#pais-profile").append('pais');
	});
        
	$(".button-collapse").sideNav();
});