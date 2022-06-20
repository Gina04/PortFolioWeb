<?php
	//recibo los datos del formulario 
	$nombre = $_POST["nombre"];
	$email= $_POST["email"];
	$asunto= $_POST["asunto"];
	$mensaje= $_POST["mensaje"];
	
	$destino="georginabosque@gmail.com";
	$asunto="Mensaje enviado de PortFolioWeb";
	$remitente= "FROM: $nombre $email";


	$enviado = mail($destino,$asunto, $mensaje, $remitente);// false o true

	if($enviado){
		echo "Mensaje enviado exitosamente";
	}else{
		echo "Ha ocurrido un error";
	}
?>