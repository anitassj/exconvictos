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

document.getElementById('tipo').addEventListener('change', async () => {
    const ajax = await fetch('/obtener-marcas', {
        headers: {
            'content-type': 'application/json'
        }
    });
    const resultado = await ajax.json();
    const marca = document.getElementById('marca');
    marca.innerHTML = "";
    resultado.forEach((map) => {
        marca.innerHTML += `<option value="${map.id_marcas}">${map.marca}</option>`
    });
    console.log(resultado);


});

// // AJAX con fetch- REVISAR PORQUE NO ANDA
// fetch('/guardar-datos', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         tipo: tipo,
//         patente: patente,
//         anio: anio,
//         marca: marca,
//         modelo: modelo,
//         nombre: nombre,
//         apellido: apellido,
//         celular: celular,
//         email: email
//     })
// })
// .then(response => response.json())
// .then(data => {
//     if (data.error) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Errores en la carga de datos',
//             text: data.error,
//             confirmButtonText: 'Aceptar'
//         });
//     } else {
//         Swal.fire({
//             icon: 'success',
//             title: 'Éxito',
//             text: 'Formulario completado con éxito.',
//             confirmButtonText: 'Aceptar'
//         });
//     }
// })
// .catch(error => {
//     Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Hubo un problema con la solicitud.',
//         confirmButtonText: 'Aceptar'
//     });
// });
