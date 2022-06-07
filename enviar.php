<?php
	//recibo los datos del formulario 
	$nombre = $_POST["nombre"];
	$email= $_POST["email"];
	$asunto= $_POST["asunto"];
	$mensaje= $_POST["mensaje"];

	$mensaje = "Hola ". $nombre. ",\n". "Gracias por escribirme \n". "Hemos recibido tu mensaje de: \n ". $mensaje;

	$enviado = mail($email, $asunto, $mensaje);// false o true

	if($enviado){
		echo "Mensaje enviado exitosamente";
	}else{
		echo "Ha ocurrido un error";
	}
?>