// Agregamos validación a los campos del formulario
(function() {
  'use strict';
  window.addEventListener('load', function() {
  
  // Obetenemos todos los campos del formulario
  var campos = document.getElementsByClassName('form-control')
  
  // Iteramos sobre todos y les agregamos una función cuando terminen de escribir
  var validar = Array.prototype.filter.call(campos, function(campo) {
  
      campo.addEventListener('blur', function(event) {
        // Limpiamos las etiquetas si tenían
        campo.classList.remove('is-invalid')
        campo.classList.remove('is-valid')
      
        if (!campo.checkValidity()) {
          campo.classList.add('is-invalid')
        } else {
          campo.classList.add('is-valid')
        }
      }, false);

    });
  }, false);
})()

// Función que se ejecutará el presionar el botón de enviar
function enviar(){
  // Todo: validar y marcar con 'is-invalid' los campos vacíos
  // Ideas para usar el menor código posible entre esto y lo de arriba?

  // Todo: enviar los datos mediante XMLHttpRequest o fetch()
  console.log("WIP");
}