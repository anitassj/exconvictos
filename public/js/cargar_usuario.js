// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CARGAR NUEVOS CLIENTES ----------------------------------------------------------
// ------------------------------------------------------------------------------------------------

    /* 
        SOLICITAR DATOS AL SERVIDOR Y MOSTRARLOS EN LA VENTANA 'CARGAR CLIENTE' --
        esta función solicita las marcas de los vehiculos según el tipo seleccionado (auto o moto), 
        los modelos según la marca seleccionada, los años según el modelo seleccionado, 
    */

document.addEventListener('DOMContentLoaded', async () => {
    const tipoSelect = document.getElementById('tipo_vehiculo');
    const marcaSelect = document.getElementById('idMarca');
    const modeloSelect = document.getElementById('idModelo');
    const anioSelect = document.getElementById('anio');
    const tipoSeguroSelect = document.getElementById('tipo_seguro');
    const sumaAseguradaInput = document.getElementById('suma_asegurada');
    const premioTotalInput = document.getElementById('premio_total');
    const premioMensualInput = document.getElementById('premio_mensual');

    /* 
        CARGAR MARCAS SEGÚN EL TIPO DE VEHÍCULO SELECCIONADO --
        se activa cuando el usuario cambia la selección en el menú de 
        "tipo de Vehículo" por 'auto' o 'moto'
    */

    tipoSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value; // se carga con auto o moto según lo que seleccione

        const solicitudServidor = await fetch(`/obtener-marcas?tipo=${tipo}`); // solicitar marcas al servidor
        const respServidor = await solicitudServidor.json();  // esperar la rta del servidor y convertirlo en JSON
  
        // si la respuesta tiene un error, detener la ejecución y mostrar en consola
        if (respServidor.error) {
            console.error(respServidor.error);
            return;
        }
  
        // reiniciar el campo marcas, borra las marcas cargadas y agrega una opcion por defecto
        marcaSelect.innerHTML = '<option value="" >Selecciona la marca</option>'; 
  
        // itera sobre el array de marcas y añade cada marca como una nueva opción
        respServidor.forEach(marca => {
            marcaSelect.innerHTML += `<option value="${marca.id_marcas}">${marca.nombre}</option>`;
        });
  
        // reiniciar los campos modelo, año y tipo de plan (borra lo que esté cargado)
        modeloSelect.innerHTML = '<option value="">Selecciona el modelo</option>';
        anioSelect.innerHTML = '<option value="">Selecciona el año</option>';
        tipoSeguroSelect.innerHTML = '<option value="">Selecciona el tipo de plan</option>'; 
    });
  
    /* 
        CARGAR MODELOS SEGÚN LA MARCA SELECCIONADA --
        se activa cuando el usuario selecciona una marca en el menú de "marca",
        mostrando los modelos relacionados a cada marca
    */

    marcaSelect.addEventListener('change', async () => {
        const idMarca = marcaSelect.value; // se carga con el ID de la marca seleccionada
        const tipo = tipoSelect.value; 
  
        const solicitudServidor = await fetch(`/obtener-modelos/${idMarca}?tipo=${tipo}`); // solicitar modelos al servidor según el ID de la marca y el tipo de vehiculo
        const respServidor = await solicitudServidor.json(); 

        if (respServidor.error) {
            console.error(respServidor.error);
            return;
        }
  
        // reiniciar el campo modelos, borra los modelos cargados y agrega una opcion por defecto
        modeloSelect.innerHTML = '<option value="">Selecciona el modelo</option>'; 
  
        // itera sobre el array de modelos y añade cada modelo como una nueva opción
        respServidor.forEach(modelo => {
            modeloSelect.innerHTML += `<option value="${modelo.id_modelos}">${modelo.nombre}</option>`;
        });
  
        // reiniciar los campos año y tipo de plan (borra lo que esté cargado)
        anioSelect.innerHTML = '<option value="">Selecciona el año</option>';
        tipoSeguroSelect.innerHTML = '<option value="">Selecciona el tipo de seguro</option>'; 
    });
  
    /* 
        CARGAR LOS AÑOS SEGÚN EL MODELO SELECCIONADO --
        se activa cuando el usuario selecciona un modelo en el menú de "modelos",
        mostrando los años relacionados a ese modelo
    */

    modeloSelect.addEventListener('change', async () => {
        const idModelo = modeloSelect.value; // se carga con el ID del modelo seleccionado
  
        const solicitudServidor = await fetch(`/obtener-anios/${idModelo}`);  // solicitar los años asociados al servidor según el ID del modelo seleccionado
        const respServidor = await solicitudServidor.json(); 

        if (respServidor.error) {
            console.error(respServidor.error);
            return;
        }
  
        // reiniciar el campo años, borra los años cargados y agrega una opcion por defecto
        anioSelect.innerHTML = '<option value="">Selecciona el año</option>';
        
        // itera sobre el array de años y añade cada año como una nueva opción
        respServidor.forEach(anioArray => {
            anioSelect.innerHTML += `<option value="${anioArray.anio}">${anioArray.anio}</option>`;
        });        
    });

    /* 
        CARGAR TIPOS DE SEGURO SEGÚN EL TIPO, MARCA, MODELO Y AÑO SELECCIONADO --
        esto solicita los tipos de planes asociados a cada vehículo junto con el precio 
        total de la prima y la suma segurada del plan. 
    */

    anioSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value; 
        const marca = marcaSelect.value; 
        const modelo = modeloSelect.value; 
        const anio = anioSelect.value; 

        // CAMBIAR RUTAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const solicitudServidor = await fetch(`/obtener-planes?tipo=${tipo}&marca=${marca}&modelo=${modelo}&anio=${anio}`);  // solicitar los planes asociados al servidor según el tipo, ID de la marca, el id del modelo y el id del año seleccionado
        const respServidor = await solicitudServidor.json(); 

        if (respServidor.error) {
            console.error(respServidor.error);
            return;
        }

        // reiniciar el campo tipo de seguros, borra los tipos cargados y agrega una opcion por defecto
        tipoSeguroSelect.innerHTML = '<option value="">Selecciona el tipo de seguro</option>'; 

        // itera sobre el array de tipos de seguros y añade cada tipo como una nueva opción
        respServidor.forEach(seguro => {
            tipoSeguroSelect.innerHTML += `<option value="${seguro.id_planes}">${seguro.tipo}</option>`;
        });
    });

    /* 
        MOSTRAR VALORES DEL PREMIO TOTAL, TRIMESTRAL Y SUMA ASEGURADA --
        mostrarle al usuario, el valor total de la prima, el precio de la prima trimestral 
        (dividido en 3 pagos) y la suma asegurada del vehículo según el 
        tipo, marca, modelo y año seleccionado del vehiculo. Se activa cuando se selecciona
        el tipo de plan que quiere el cliente (por ahora: básico, intermedio o premium)
    */

    tipoSeguroSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value;
        const marca = marcaSelect.value;
        const modelo = modeloSelect.value;
        const anio = anioSelect.value;
        const tipoSeguro = tipoSeguroSelect.value; // se carga con el ID del tipo de seguro seleccionado

        // CAMBIAR RUTAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (tipo && marca && modelo && anio && tipoSeguro) {
            const solicitudServidor = await fetch(`/obtener-premio?tipo=${tipo}&marca=${marca}&modelo=${modelo}&anio=${anio}&tipoSeguro=${tipoSeguro}`); // solicitar al servidor el valor del premio según el tipo, ID de la marca, el id del modelo, el id del año y los planes asociados seleccionado
            const respServidor = await solicitudServidor.json();

            if (respServidor.error) {
                console.error(respServidor.error);
                return;
            }

            // cargar los campos premio total y suma asegurada con los datos enviados por el servidor
            premioTotalInput.value = respServidor.premio_total;
            sumaAseguradaInput.value = respServidor.suma_asegurada;

            // calcular y mostrar el premio mensual de forma trimestral
            const premioMensual = (respServidor.premio_total / 3).toFixed(2);
            premioMensualInput.value = premioMensual;
        }
    });
});

/* 
    ENVIAR LOS DATOS DEL CLIENTE AL SERVIDOR PARA GUARDARLOS EN LA BD --
    esta función async envía los datos personales y del vehículo al servidor para guardarlos 
    en la base de datos, incluyendo la validación previa y el manejo de la respuesta del servidor
*/

document.getElementById('guardarCambios').addEventListener('click', async function() {
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

    // llamada a la función de validación antes de continuar para verificar que todos los campos estén completos
    if (!validarDatos(datosPersonales, datosVehiculo)) {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // llama a la función de validación del formato de los datos antes d continuar para verificar que los campos tengan el formato correcto
    if (!validarFormatoDatos(datosPersonales, datosVehiculo)) {
        return;
    }

    // los datos son convertidos en un objeto FormData
    const formData = new FormData(); 
    // a este objeto se le incluyen los datos personales y los del vehículo y se convierten en JSON
    formData.append('datosPersonales', JSON.stringify(datosPersonales));
    formData.append('datosVehiculo', JSON.stringify(datosVehiculo));

    // y en caso de haberse cargado una foto, se la incluye al objeto el archivo multipart/form-data
    if (file) {
        formData.append('foto', file);
    }
    
    // envíar los datos al servidor para guardar la info. del form y manejar la rta del servidor 
    try {
        const response = await fetch('/guardarDatos', 
        {
            method: 'POST', // enviar datos al servidor
            body: formData  // objeto que incluye datos en formato JSON y archivos (foto)
        });

        const data = await response.json(); 
        // debugg -- BORRAR ESTAS 2 LÍNEAS CUANDO ANDE
        // console.log("Respuesta del servidor:", data); 
        
        // si la rta del servidor no es exitosa, muestra un mensaje de error
        if (!response.ok) {
            throw new Error(data.message || 'Error en el envío de los datos');
        }
        
        // debugg -- BORRAR ESTAS 2 LÍNEAS CUANDO ANDE
        // console.log("data: respuesta del servidor", data);
        
        // si los datos se guardan bien, muestra un mensaje de exito y redirije a la pág. principal
        // sino, muestra un error
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
    // si hay un error en try, se captura acá y se muestra el error en consola y con sweet alert al usuario 
    } catch (error) {
        console.error("Error capturado:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'No se pudieron guardar los datos. Por favor, intenta nuevamente.',
            confirmButtonText: 'Aceptar'
        });
    }
});

/* 
    VALIDAR SI LOS CAMPOS ESTÁN COMPLETOS ANTES DE ENVIAR AL SERVIDOR --
    con el fin de evitar el envío de un formulario incompleto, se valida con esta función 
    que todos los campos obligatorios estén con contenido
*/

function validarDatos(datosPersonales, datosVehiculo) {
    for (const propiedad in datosPersonales) {
        if (!datosPersonales[propiedad]) return false;
    }
    for (const propiedad in datosVehiculo) {
        if (!datosVehiculo[propiedad]) return false;
    }
    return true;
}

/* 
    VALIDAR EL FORMATO DE LOS DATOS A ENVIAR AL SERVIDOR --
    con el fin de evitar el envío de datos erroneos, esta función valida el formato de 
    campos específicos
*/

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

/* 
    LIMPIAR ESTILOS DE ERROR EN LOS INPUTS --
    función para limpiar los estilos de error de los campos de entrada.
    Elimina la clase 'input-error' (CSS) de cada campo especificado en la lista 
    para prepararlos para una nueva validación
*/

function limpiarErrores() {
    const campos = ['nombre', 'apellido', 'dni', 'email', 'celular', 'patente', 'anio'];
    
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove('input-error');
    });
}

/* 
    BOTON PARA CANCELAR CARGA DE CLIENTE --
    esta función muestra una alerta de confirmación consSweet
    para preguntar al usuario si está seguro de cancelar los cambios realizados en el formulario. 
    Si el usuario confirma, se redirige a la página del panel. 
    Si elige cancelar, no se realiza ninguna acción.
*/

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