<?php

require("class.phpmailer.php");
require("class.smtp.php");

$name = !empty($_POST['nombre']) ? $_POST['nombre'] : '';
$email = !empty($_POST['email']) ? $_POST['email'] : '';
$mensaje = !empty($_POST['mensaje']) ? $_POST['mensaje'] : '';

if($name == '' && $email == '' && $mensaje == ''){
    $htmlContent = "
<h1>Consulta formulario</h1>";
}else{
    $htmlContent = "
<h1>Consulta desde formulario:</h1>
<p><b>Nombre: </b>" . $name . "</p>
<p><b>Email: </b>" . $email . "</p>
<p><b>Mensaje: </b>" . $mensaje . "</p>
";
}

$mail = new PHPMailer();
try {
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = false;
    $mail->Host = "mail.carpasrosario.com"; // Poner SMTP a utilizar (si lo desconocen chequear el panel de administración del hosting donde está subida la web)
    $mail->Username = "martin@carpasrosario.com";
    $mail->Password = "soyleproso"; // poner contraseña del correo info@sensortecnologia.com
    $mail->Port = 587; // Cambiar Puerto a utilizar si fuese necesario
    $mail->Timeout = 60;
    $mail->SMTPKeepAlive = true;
    $mail->From = "martinghiotti2013@gmail.com";
    $mail->FromName = "Carpas Rosario";
    $mail->CharSet = "utf-8";
    $mail->AddAddress($email);
    $mail->IsHTML(true);
    $mail->Subject = "Consulta";
    $mail->Body = $htmlContent;
    $mail->Send();
    $result['error'] = false;
    $result['message'] = 'Su consulta fue enviada. Uno de nuestros asesores se comunicará con usted a la brevedad. Muchas gracias. La consulta fue: ' . $mensaje;
} catch (Exception $e) {
    $result['error'] = true;
    $result['message'] = 'Ocurrio un error. Su consulta no fue enviada.';
}

$mail->SmtpClose();
echo json_encode($result);

?>