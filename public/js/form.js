// validación de errores del form -----------------------------------------------------------------
document.getElementById('formCotizacion').addEventListener('submit', function(event) {
    let esValido = true;
    let mensajesDeError = [];

    // limpia mensajes de error
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // validación de tipo de vehículo
    const tipo = document.getElementById('tipo').value;
    if (!tipo) {
        mensajesDeError.push('Por favor, selecciona un tipo de vehículo.');
        esValido = false;
    }

    // validación de patente
    const patente = document.getElementById('patente').value;
    const patenteVal = /^(?:[A-Z]{2}\d{3}[A-Z]{2}|\d{3}[A-Z]{3})$/i; // formato viejo y nuevo
    if (!patenteVal.test(patente)) {
        mensajesDeError.push('La patente debe tener un formato válido: AA123BB o 123ABC.');
        esValido = false;
    }

    // validación de año
    const anio = document.getElementById('anio').value;
    const anioActual = new Date().getFullYear();
    if (anio < 1900 || anio > anioActual) {
        mensajesDeError.push('Ingrese un año válido');
        esValido = false;
    }

    // validación de marca
    const marca = document.getElementById('marca').value;
    if (!marca) {
        mensajesDeError.push('Selecciona una marca.');
        esValido = false;
    }

    // validación de modelo
    const modelo = document.getElementById('modelo').value;
    if (!modelo) {
        mensajesDeError.push('Selecciona un modelo.');
        esValido = false;
    }

    // validación de nombre
    const nombre = document.getElementById('nombre').value;
    if (!nombre) {
        mensajesDeError.push('Ingresa tu nombre.');
        esValido = false;
    }

    // validación de apellido
    const apellido = document.getElementById('apellido').value;
    if (!apellido) {
        mensajesDeError.push('Ingresa tu apellido.');
        esValido = false;
    }

    // validación de celular
    const celular = document.getElementById('celular').value;
    const celularVal = /^[0-9]{10}$/;
    if (!celularVal.test(celular)) {
        mensajesDeError.push('El celular debe ser un número de 10 dígitos.');
        esValido = false;
    }

    // validación de email
    const email = document.getElementById('email').value;
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(email)) {
        mensajesDeError.push('Ingresa una dirección de correo electrónico válida: ejemplo@ejemplo.com');
        esValido = false;
    }

    // mostrar mensaje de error si no es válido 
    if (!esValido) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Errores la carga de datos',
            text: mensajesDeError.join(' '),
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'btn-confirm'
            }
        });
    }
});

// mostrar datos precargados al cliente desde el servidor (marca y modelo del vehículo) -----------
document.addEventListener('DOMContentLoaded', () => {
  const tipoSelect = document.getElementById('tipo');
  const marcaSelect = document.getElementById('idMarca');
  const modeloSelect = document.getElementById('idModelo');

  // carga de marcas cuando se selecciona un tipo de vehículo --
  tipoSelect.addEventListener('change', async () => {
      const tipo = tipoSelect.value;

      // solicitar marcas según el tipo seleccionado
      const solicitudServer = await fetch(`/obtener-marcas?tipo=${tipo}`);
      const respServer = await solicitudServer.json();

      if (respServer.error) {
          console.error(respServer.error);
          return;
      }

      // reiniciar las opciones del campo marca
      marcaSelect.innerHTML = '<option value="">Seleccione una marca</option>'; 

      respServer.forEach(marca => {
          marcaSelect.innerHTML += `<option value="${marca.id_marcas}">${marca.nombre}</option>`;
      });

      // reiniciar las opciones del campo modelo
      modeloSelect.innerHTML = '<option value="">Seleccione un modelo</option>';
  });

  // carga de modelos cuando se selecciona una marca --
  marcaSelect.addEventListener('change', async () => {
      const idMarca = marcaSelect.value;
      const tipo = tipoSelect.value;
      // solicitar modelos según la marca seleccionada
      const solicitudServer = await fetch(`/obtener-modelos/${idMarca}?tipo=${tipo}`);
      const respServer = await solicitudServer.json();

      // reiniciar las opciones del campo modelo
      modeloSelect.innerHTML = '<option value="">Seleccione un modelo</option>'; 

      respServer.forEach(modelo => {
          modeloSelect.innerHTML += `<option value="${modelo.id_modelo}">${modelo.nombre}</option>`;
        });
    });
});