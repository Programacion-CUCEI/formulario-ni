// Generamos el canvas de la firma
const canvas = document.getElementById("canvasFirma");
const firma = new SignaturePad(canvas, {
  dotSize: 1.0,
  minWidth: 0.5,
  maxWidth: 1.0
});

let limpiarCanvas = () => {
  canvas.style.borderColor = "#dfe2e6";
  firma.clear();
};

let toogleCircle = (status) => {
  const circle = document.getElementById("circle-loader");
  circle.classList.add(status);
};

// Agregamos validación a los campos del formulario al cargar la página
(() => {
  'use strict';

  window.addEventListener('load', function() {
  
  // Obetenemos todos los campos del formulario
  var campos = document.getElementsByClassName('form-control')
  
  // Iteramos sobre todos y les agregamos una función al hacer click y cuando terminen de escribir
  var validar = Array.prototype.filter.call(campos, function(campo) {
    campo.addEventListener('click', (event) => {
      campo.classList.remove('is-invalid');
      campo.classList.remove('is-valid');
    }, false);

    campo.addEventListener('blur', function(event) {
      campo.classList.remove('is-invalid');
      campo.classList.remove('is-valid');

      if (!campo.checkValidity()) {
        campo.classList.add('is-invalid')
      } else {
        campo.classList.add('is-valid')
      }
    }, false);

    });
  }, false);

  canvas.addEventListener('click', (event) => {
    canvas.style.borderColor = "#dfe2e6";
    document.getElementById("isFirmaValida").classList.remove("d-block");
  }, false);
})()

// Función que se ejecutará el presionar el botón de enviar
let enviar = () => {
  // Todo: validar y marcar con 'is-invalid' los campos vacíos
  var campos = document.getElementsByClassName('form-control');
  let enviar = true;
  var validar = Array.prototype.filter.call(campos, (campo) => {
    if(!campo.checkValidity()){
      campo.classList.add('is-invalid');
      enviar = false;
    }
    // Si dejan A+ sin seleccionar la lista
    if(campo.id == 'tsangre')
      campo.classList.add('is-valid');
  }, false);

  if(firma.isEmpty()){
    canvas.style.borderColor = "#d9534f";
    document.getElementById("isFirmaValida").classList.add("d-block");
    enviar = false;
  } else {
    canvas.style.borderColor = "#5cb85c";
  }

  if(!enviar) return;

  // Todo: enviar los datos mediante XMLHttpRequest o fetch()
  console.log("WIP");
  const ventana = document.getElementById("modalEnvioDatos");
  new bootstrap.Modal(ventana).show();
}
