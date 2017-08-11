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

		if (usuario == ""){
			$('#mensajeUser').fadeIn();
        	}else{
        		if(contrasena == ""){
        		$('#mensajePass').fadeIn();
        		}else{
				window.location.href = "xxxx.html"; //redirecciona una vez que se cumplan las validaciones. 
				}	
        	}
        }

    //validaciones create account
    $('#mnsNameReg').hide();
	$('#mnsUserReg').hide();
	$('#mnsPassReg').hide();
	$('#mnsMailReg').hide();
	$('#mnsCountryReg').hide();

	$('#btn-create').click(function(){
		validateFormAccount();
	});

	function validateFormAccount(){
		var nombreReg = $('#nameReg').val();
    	var usuarioReg = $('#userReg').val();
		var contrasenaReg = $('#passwordReg').val();
		var correoReg = $('#mailReg').val();
		var paisReg = $('#countryReg').val();

		var mailRegr = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

		if (nombreReg == ""){
			$('#mnsNameReg').fadeIn();
			}else{
        		if(usuarioReg == "" ){
        			$('#mnsUserReg').fadeIn();
        			}else{
        				if(contrasenaReg == ""){
        					$('#mnsPassReg').fadeIn();
        					}else{
        						if(correoReg == "" || !mailRegr.test(correoReg)){
        						$('#mnsMailReg').fadeIn();
        						}else{
        							if(paisReg == ""){
        								$('#mnsCountryReg').fadeIn();
        								}else{
        								window.location.href = "xxxx.html"
        							}
        						}
        					}
						}

				}
			}


    });      				






