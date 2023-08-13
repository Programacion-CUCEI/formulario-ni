<?php

// Procesamos request
$json_request = file_get_contents('php://input');
$request = json_decode($json_request, true);

$nombre = $request['nombre'];
$apellidop = $request['apellidop'];
$apellidom = $request['apellidom'];
$codigo = $request['codigo'];
$direccion = $request['direccion'];
$cpostal = $request['cpostal'];
$corigen = $request['corigen'];
$nompadre = $request['nompadre'];
$telpadre = $request['telpadre'];
$correo = $request['correo'];
$whatsapp = $request['whatsapp'];
$cumpleanos = $request['cumpleanos'];
$tsangre = $request['tsangre'];
$espectativas = $request['espectativas'];

// Validamos campos
$isValid = true;

/* Patrones */
$patNombre = '/[a-zA-ZÁÉÍÓÚÑáéíóúñ ]+/';
$patNumero = '/[0-9]{'; // patNum."x}/"
$patCelular = '/[1-9][0-9]{9}/';
$patEmail = '/[^@\s]+@[^@\s]+\.[^@\s]+/';
$patFecha = '/^\d{4}-\d{2}-\d{2}$/';
$patParrafo = '/[a-zA-Z0-9ÁÉÍÓÚÑáéíóúñ .,]+/';
$patSangre = '/^(A\+|A-|B\+|B-|AB\+|AB-|O\+|O-)$/';

function valida($string, $patron){
  if(empty($string) || !preg_match($patron, $string)){
    $GLOBALS['isValid'] = false;
  }
}

valida($nombre, $patNombre);
valida($apellidop, $patNombre);
valida($apellidom, $patNombre);
valida($codigo, $patNumero.'9}/');
valida($direccion, $patParrafo);
valida($cpostal, $patNumero.'5}/');
valida($corigen, $patParrafo);
valida($nompadre, $patNombre);
valida($telpadre, $patCelular);
valida($correo, $patEmail);
valida($whatsapp, $patCelular);
valida($cumpleanos, $patFecha);
valida($tsangre, $patSangre);
valida($espectativas, $patParrafo);

if(!$isValid){
  $response = array(
    'status' => 'error',
    'message' => 'La información enviada no es válida.'
  )
  echo json_encode($response);
  exit;
}

$update = false; // Por si mandan el formulario por segunda vez

