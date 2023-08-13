const url = ''; // URL a la que vamos a hacer la petición

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
})()

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);

  return response;
}

let mostrarStatus = (respuesta) => {
  const circle = document.getElementById("circle-loader");

  if(respuesta['status'] == 'error'){
    circle.classList.add('failed');
  } else {
    circle.classList.add('success');

    const formulario = document.getElementById('formulario');
    formulario.reset();

    let campos = document.getElementsByClassName('form-control');
    var validar = Array.prototype.filter.call(campos, campo => campo.classList.remove('is-valid'));
  }

  const mensaje = document.getElementById('status');
  mensaje.innerText = respuesta['message'];
  
  const botonCierre = document.getElementById('closeModal');
  closeModal.classList.remove('d-none');
};

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

  
  //if(!enviar) return;

  // Todo: enviar los datos mediante XMLHttpRequest o fetch()
  const formulario = document.getElementById("formulario");
  const datos = new URLSearchParams();
  for(const par of new FormData(formulario)){
    datos.append(par[0], par[1]);
  }

  fetchWithTimeout(url, {
    method: 'post',
    body: 'datos',
    timeout: 30000
  }).then(response => response.json())
  .then(respuesta => mostrarStatus(respuesta))
  .catch(error => mostrarStatus({
    'status': 'error',
    'message': 'Ha habido un error al comunicarse con el servidor. Inténtalo de nuevo.'
  }));

  
  const ventana = document.getElementById("modalEnvioDatos");
  new bootstrap.Modal(ventana, {backdrop: 'static', keyboard: false}).show();
}

let cerrarModal = () => {
  const ventana = document.getElementById("modalEnvioDatos");
  const modal = bootstrap.Modal.getInstance(ventana);
  modal.hide();

  const circle = document.getElementById("circle-loader");
  circle.classList.remove('success');
  circle.classList.remove('failed');

  const botonCierre = document.getElementById('closeModal');
  closeModal.classList.add('d-none');
};
