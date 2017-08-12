$(document).ready(function(){ 
	$(".button-collapse").sideNav();

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
		var usuarioLocal= localStorage.getItem('userDat');
		var contrasenaLocal=localStorage.getItem('passDat');

		if (usuario == usuarioLocal && contrasena == contrasenaLocal){
			window.location.href = "profile.html"; 
				}else{
					if(usuario == "" || usuario != usuarioLocal){
						$('#mensajeUser').fadeIn();
						}else{
							$('#mensajeUser').hide();
							if(contrasena == "" || contrasena != contrasenaLocal){
								$('#mensajePass').fadeIn();
							}
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

		if (nombreReg == "" ){
			$('#mnsNameReg').fadeIn();
			}else{
				$('#mnsNameReg').hide();
        		if(usuarioReg == "" ){
        			$('#mnsUserReg').fadeIn();
        			}else{
        				$('#mnsUserReg').hide();
        				if(contrasenaReg == ""){
        					$('#mnsPassReg').fadeIn();
        					}else{
        						$('#mnsPassReg').hide();
        						if(correoReg == "" || !mailRegr.test(correoReg)){
        						$('#mnsMailReg').fadeIn();
        						}else{
        							$('#mnsMailReg').hide();
        							if(paisReg == ""){
        								$('#mnsCountryReg').fadeIn();
        								}else{
        								$('#mnsCountryReg').hide();
        								window.location.href = "movies.html";
        								guardarDatos();
        							}
        						}
        					}
						}

				}
			}
	 function guardarDatos(){
	 	localStorage.setItem("nameDat", $('#nameReg').val());
	 	localStorage.setItem("userDat", $('#userReg').val());
	 	localStorage.setItem("passDat", $('#passwordReg').val());
	 	localStorage.setItem("mailDat",	$('#mailReg').val());
	 	localStorage.setItem("countryDat", $('#countryReg').val());
	 }




    });      				






