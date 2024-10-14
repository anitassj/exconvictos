// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CARGAR NUEVOS CLIENTES ----------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// funcion para pedir los datos desde la bd -----------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    const tipoSelect = document.getElementById('tipo_vehiculo');
    const marcaSelect = document.getElementById('idMarca');
    const modeloSelect = document.getElementById('idModelo');
    const anioSelect = document.getElementById('anio');
    const tipoSeguroSelect = document.getElementById('tipo_seguro');
    const sumaAseguradaInput = document.getElementById('suma_asegurada');
    const premioTotalInput = document.getElementById('premio_total');
    const premioMensualInput = document.getElementById('premio_mensual');

    // cargar marcas segun el tipo de vehiculo --
    tipoSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value;

        const solicitudServer = await fetch(`/obtener-marcas?tipo=${tipo}`);
        const respServer = await solicitudServer.json();
  
        if (respServer.error) {
            console.error(respServer.error);
            return;
        }
  
        marcaSelect.innerHTML = '<option value="">Selecciona una marca</option>'; 
  
        respServer.forEach(marca => {
            marcaSelect.innerHTML += `<option value="${marca.id_marcas}">${marca.nombre}</option>`;
        });
  
        modeloSelect.innerHTML = '<option value="">Selecciona un modelo</option>';
        anioSelect.innerHTML = '<option value="">Selecciona un año</option>';
        tipoSeguroSelect.innerHTML = '<option value="">Selecciona un tipo de seguro</option>'; 
    });
  
    // cargar modelos cuando se selecciona una marca --
    marcaSelect.addEventListener('change', async () => {
        const idMarca = marcaSelect.value;
        const tipo = tipoSelect.value;
  
        const solicitudServer = await fetch(`/obtener-modelos/${idMarca}?tipo=${tipo}`);
        const respServer = await solicitudServer.json();
  
        modeloSelect.innerHTML = '<option value="">Selecciona un modelo</option>'; 
  
        respServer.forEach(modelo => {
            modeloSelect.innerHTML += `<option value="${modelo.id_modelos}">${modelo.nombre}</option>`;
        });
  
        anioSelect.innerHTML = '<option value="">Selecciona un año</option>';
        tipoSeguroSelect.innerHTML = '<option value="">Selecciona un tipo de seguro</option>'; 
    });
  
    // cargar años cuando se selecciona un modelo --
    modeloSelect.addEventListener('change', async () => {
        const idModelo = modeloSelect.value;
  
        const solicitudServer = await fetch(`/obtener-anios/${idModelo}`); 
        const respServer = await solicitudServer.json();
  
        anioSelect.innerHTML = '<option value="">Selecciona un año</option>';
  
        respServer.forEach(anioObj => {
            anioSelect.innerHTML += `<option value="${anioObj.anio}">${anioObj.anio}</option>`;
        });        
    });

    // cargar tipos de seguros cuando se selecciona un año --
    anioSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value;
        const marca = marcaSelect.value;
        const modelo = modeloSelect.value;
        const anio = anioSelect.value;

        // CAMBIAR RUTAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const solicitudTiposSeguro = await fetch(`/obtener-tipos-seguro?tipo=${tipo}&marca=${marca}&modelo=${modelo}&anio=${anio}`); 
        const tiposSeguros = await solicitudTiposSeguro.json();

        tipoSeguroSelect.innerHTML = '<option value="">Selecciona un tipo de seguro</option>'; 

        tiposSeguros.forEach(seguro => {
            tipoSeguroSelect.innerHTML += `<option value="${seguro.id}">${seguro.nombre}</option>`;
        });
    });

    // cargar valores del premio y suma asegurada cuando se selecciona tipo de seguro --
    tipoSeguroSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value;
        const marca = marcaSelect.value;
        const modelo = modeloSelect.value;
        const anio = anioSelect.value;
        const tipoSeguro = tipoSeguroSelect.value;

        // CAMBIAR RUTAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (tipo && marca && modelo && anio && tipoSeguro) {
            const solicitudServer = await fetch(`/obtener-premio?tipo=${tipo}&marca=${marca}&modelo=${modelo}&anio=${anio}&tipoSeguro=${tipoSeguro}`);
            const respServer = await solicitudServer.json();

            if (respServer.error) {
                console.error(respServer.error);
                return;
            }

            premioTotalInput.value = respServer.premio_total;
            sumaAseguradaInput.value = respServer.suma_asegurada;

            // calcular y mostrar el premio mensual --
            const premioMensual = (respServer.premio_total / 3).toFixed(2);
            premioMensualInput.value = premioMensual;
        }
    });
});

// función para guardar los datos personales y vehículos --
document.getElementById('guardarCambios').addEventListener('click', function() {
    const datosPersonales = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        dni: document.getElementById('dni').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('direccion').value,
        celular: document.getElementById('celular').value,
        ciudad: document.getElementById('ciudad').value,
        provincia: document.getElementById('provincia').value
    };

    const datosVehiculo = {
        tipo_vehiculo: document.getElementById('tipo_vehiculo').value,
        patente: document.getElementById('patente').value,
        anio: document.getElementById('anio').value,
        vigencia_desde: document.getElementById('vigencia_desde').value,
        vigencia_hasta: document.getElementById('vigencia_hasta').value,
        tipo_seguro: document.getElementById('tipo_seguro').value,
        premio_total: document.getElementById('premio_total').value,
        suma_asegurada: document.getElementById('suma_asegurada').value,
        uso_vehiculo: document.getElementById('uso_vehiculo').value,
        marca: document.getElementById('idMarca').value, 
        modelo: document.getElementById('idModelo').value
    };

    const inputFile = document.getElementById('foto');
    const file = inputFile.files[0];

    // llamada a la función de validación antes de continuar
    if (!validarDatos(datosPersonales, datosVehiculo)) {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // llama a la función de validación del formato de los datos antes d continuar
    if (!validarFormatoDatos(datosPersonales, datosVehiculo)) {
        return;
    }

    const formData = new FormData(); 

    formData.append('datosPersonales', JSON.stringify(datosPersonales));
    formData.append('datosVehiculo', JSON.stringify(datosVehiculo));

    if (file) {
        formData.append('foto', file);
    }
    
    fetch('/guardarDatos', {
        method: 'POST',
        body: formData 
    })
    .then(response => {
        return response.json().then(data => {
            console.log("Respuesta del servidor:", data); 
            
            if (!response.ok) {
                throw new Error(data.message || 'Error en el envío de los datos');
            }
            return data; 
        });
    })
    .then(data => {
        console.log("data: respuesta del servidor", data);
        
        if (data.message === 'Datos guardados') {
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Datos y foto guardados con éxito.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = '/panel';  
            });
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    })
    .catch(error => {
        console.error("Error capturado:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'No se pudieron guardar los datos. Por favor, intenta nuevamente.',
            confirmButtonText: 'Aceptar'
        });
    });
});

// función para validar si existen los datos --------------
function validarDatos(datosPersonales, datosVehiculo) {
    // verificar que todos los campos obligatorios estén llenos
    for (const key in datosPersonales) {
        if (!datosPersonales[key]) return false;
    }
    for (const key in datosVehiculo) {
        if (!datosVehiculo[key]) return false;
    }
    return true;
}

// funcion para validar el formato de los datos -----------
function validarFormatoDatos(datosPersonales, datosVehiculo) {
    let esValido = true;
    let mensajesDeError = [];

    // eliminar las clases de error antes de una nueva validación
    limpiarErrores();

    // validación de nombre
    if (!datosPersonales.nombre) {
        mensajesDeError.push('Ingresa tu nombre.');
        document.getElementById('nombre').classList.add('input-error');
        esValido = false;
    }

    // validación de apellido
    if (!datosPersonales.apellido) {
        mensajesDeError.push('Ingresa tu apellido.');
        document.getElementById('apellido').classList.add('input-error');
        esValido = false;
    }

    // validación de DNI
    if (!/^\d{7,8}$/.test(datosPersonales.dni)) {
        mensajesDeError.push('El DNI debe ser un número de 7 u 8 dígitos.');
        document.getElementById('dni').classList.add('input-error');
        esValido = false;
    }

    // validación de email
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(datosPersonales.email)) {
        mensajesDeError.push('Ingresa un email válido.');
        document.getElementById('email').classList.add('input-error');
        esValido = false;
    }

    // validación de celular (10 dígitos, no debe empezar con 0)
    const celularVal = /^[1-9][0-9]{9}$/;
    if (!celularVal.test(datosPersonales.celular)) {
        mensajesDeError.push('El celular debe ser un número de 10 dígitos y no debe empezar con 0.');
        document.getElementById('celular').classList.add('input-error');
        esValido = false;
    }

    // validación de patente
    const patenteVal = /^(?:[A-Z]{2}\d{3}[A-Z]{2}|\d{3}[A-Z]{3})$/i;
    if (!patenteVal.test(datosVehiculo.patente)) {
        mensajesDeError.push('La patente debe tener un formato válido: AA123BB o 123ABC.');
        document.getElementById('patente').classList.add('input-error');
        esValido = false;
    }

    // validación de año
    const anioActual = new Date().getFullYear();
    if (datosVehiculo.anio < 1900 || datosVehiculo.anio > anioActual) {
        mensajesDeError.push('Ingresa un año válido.');
        document.getElementById('anio').classList.add('input-error');
        esValido = false;
    }

    // mostrar errores si hay alguno
    if (!esValido) {
        Swal.fire({
            icon: 'error',
            title: 'Errores en la carga de datos',
            text: mensajesDeError.join(' '),
            confirmButtonText: 'Aceptar'
        });
    }

    return esValido;
}

// función para limpiar los errores antes de una nueva validación
function limpiarErrores() {
    const campos = ['nombre', 'apellido', 'dni', 'email', 'celular', 'patente', 'anio'];
    
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove('input-error');
    });
}

// funcionalidad para el boton 'cancelar' -----------------
function cancelarCambios() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No se guardarán los datos del cliente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/panel'; 
        }
    });
}