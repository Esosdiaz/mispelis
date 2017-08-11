$(document).ready(function(){ 
	//toggle del boton login
   $('#btn-logIn').on('click',function(){
      $('#log-In').toggle('slow');
   });

   //validacion login
  	$('#mensajeUser').hide();
	$('#mensajePass').hide();

	$('#letsgo').click(function(){
		validateForm();
	});
	function validateForm(){
		var usuario = $('#user').val();
		var contrasena = $('#password').val();
		var numReg = /^[0-9]/;

		if (usuario == ""){
			$('#mensajeUser').fadeIn();
        	}else{
        		if(contrasena == "" || contrasena.length > 8 || !numReg.test(contrasena) ){
        		$('#mensajePass').fadeIn();
        		}else{
				window.location.href = "xxxx.html"; //redirecciona una vez que se cumplan las validaciones. 
				}	
        	}
        }
    });      				






