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

// Firma
// Falta definir si será jpg, png o svg

// Validamos campos
/*
if (empty($nombre) || empty($apellidop) || empty($apellidom) || empty($codigo) || empty($direccion) || empty($cpostal) || empty($corigen) || empty($nompadre) || empty($telpadre) || empty($correo) || empty($whatsapp) || empty($cumpleanos) || empty($tsangre) || empty($espectativas)) {
    $response = array(
        'status' => 'error',
        'message' => 'Faltan campos por llenar'
    );
    echo json_encode($response);
    exit;
}
*/

