// ----------------------------------------------------------------------------
// mostrar 'datos' y ocultar  'vehiculos' -------------------------------------
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const datosPersonalesTab = document.getElementById('datos-personales-tab');
    const vehiculosTab = document.getElementById('vehiculos-tab');

    datosPersonalesTab.classList.add('tabActivo');
    vehiculosTab.classList.remove('tabActivo');
    vehiculosTab.classList.add('tabDesactivado');
    datosPersonalesTab.classList.remove('tabDesactivado');
});

// ----------------------------------------------------------------------------
// modo edición y gestión de cambios -----------------------------------------
// ----------------------------------------------------------------------------

// VER ESTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO! soy ANITA sigo desp 

let editModo = false; 
let cambiosGuardados = false; 

// editar perfil ------------------------------------------
function editarPerfil() {
    editModo = true;
    cambiosGuardados = false;

    document.getElementById('guardar').disabled = false; 
    document.getElementById('guardar').classList.add('editar-modo');

    // habilitar inputs
    document.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });

    const botonEliminar = document.getElementById('eliminar-cliente');
    botonEliminar.classList.remove('oculto');
    botonEliminar.classList.add('activo');

    const botonAgregarVehiculo = document.getElementById('agregar-vehiculo');
    botonAgregarVehiculo.classList.remove('oculto');
    botonAgregarVehiculo.classList.add('activo');

    const botonGuardar = document.getElementById('guardar');
    botonGuardar.classList.remove('oculto');
    botonGuardar.classList.add('activo');

    const botonEmitirPoliza = document.getElementById('emitir-poliza'); 
    if (botonEmitirPoliza) {
        botonEmitirPoliza.classList.add('oculto');
    }

    const botonEditar = document.getElementById('editar-perfil'); 
    if (botonEditar) {
        botonEditar.classList.add('oculto');
    }

    const botonCancelar = document.getElementById('cancelar');
    botonCancelar.classList.remove('oculto');
    botonCancelar.classList.add('activo');
}

// cancelar edicion del perfil ----------------------------
function cancelarEdicion() {
    // solo desactiva el modo de edición si está activo
    if (editModo) {
        editModo = false;
        cambiosGuardados = false; 
    }

    // deshabilitar inputs
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true; 
    });

    const botonEliminar = document.getElementById('eliminar-cliente');
    botonEliminar.classList.add('oculto');
    botonEliminar.classList.remove('activo');

    const botonGuardar = document.getElementById('guardar');
    botonGuardar.classList.add('oculto');
    botonGuardar.classList.remove('activo');

    const botonAgregarVehiculo = document.getElementById('agregar-vehiculo');
    botonAgregarVehiculo.classList.add('oculto');
    botonAgregarVehiculo.classList.remove('activo');

    const botonEmitirPoliza = document.getElementById('emitir-poliza');
    if (botonEmitirPoliza) {
        botonEmitirPoliza.classList.remove('oculto'); 
    }

    const botonEditar = document.getElementById('editar-perfil'); 
    if (botonEditar) {
        botonEditar.classList.remove('oculto'); 
    }

    const botonCancelar = document.getElementById('cancelar');
    botonCancelar.classList.add('oculto');
    botonCancelar.classList.remove('activo');
}

// guardar cambios ----------------------------------------
// async function guardarCambios() {
//     if (editModo && !cambiosGuardados) {

//         const datosPersonales = {
//             nombre: document.getElementById('nombre').value,
//             apellido: document.getElementById('apellido').value,
//             dni: document.getElementById('dni').value,
//             email: document.getElementById('email').value,
//             direccion: document.getElementById('direccion').value,
//             celular: document.getElementById('celular').value,
//             ciudad: document.getElementById('ciudad').value,
//             provincia: document.getElementById('provincia').value
//         };

//         const datosVehiculo = {
//             tipoVehiculo: document.getElementById('tipo-vehiculo').value,
//             patente: document.getElementById('patente').value,
//             anioVehiculo: document.getElementById('anio-vehiculo').value,
//             vigenciaDesde: document.getElementById('vigencia-desde').value,
//             vigenciaHasta: document.getElementById('vigencia-hasta').value,
//             tipoSeguro: document.getElementById('tipo-seguro').value,
//             premioTotal: document.getElementById('premio-total').value,
//             sumaAsegurada: document.getElementById('suma-asegurada').value,
//             usoVehiculo: document.getElementById('uso-vehiculo').value
//         };

//         const datosGuardados = {
//             datosPersonales: datosPersonales,
//             datosVehiculo: datosVehiculo
//         };

//         try {
//             const response = await fetch('/guardarCambios', { //CAMBIAR RUTA!!!!!!!!!!!
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(datosGuardados),
//             });

//             if (!response.ok) {
//                 throw new Error('Error al guardar cambios');
//             }

//             const result = await response.json(); 
//             console.log('Cambios guardados exitosamente:', result);

//             cambiosGuardados = true;
//             document.getElementById('guardar').classList.remove('editar-modo');
//             document.getElementById('guardar').disabled = true;

//             // deshabilitar todos los inputs
//             document.querySelectorAll('input').forEach(input => {
//                 input.disabled = true;
//             });

//             // ocultar botón de eliminar cliente
//             document.getElementById('eliminar-cliente').classList.add('oculto');

//             // ocultar botón de agregar vehículo
//             document.getElementById('agregar-vehiculo').classList.add('oculto');
//         } catch (error) {
//             console.error('Error guardando cambios:', error);
//             alert('Hubo un problema al guardar los cambios. Intenta nuevamente.');
//         }
//     }
// }

// agregar y eliminar nuevos vehículos --------------------
// function agregarVehiculo() {
//     const vehiculosContainer = document.querySelector('.vehiculos-asegurados');

//     if (editModo) {
//         const nuevoVehiculo = document.createElement('div');
//         nuevoVehiculo.classList.add('vehiculo');
//         // nuevoVehiculo.setAttribute('data-id', vehiculoId); // ES PARA USAR CON LA FUNCION ELIMINAR Q TAMB ELIMINA EN LA BD, CUANDO SE IMPLEMENTA DESCOMENTAR ESTA LÍNEA
//         nuevoVehiculo.innerHTML = `
//             <h2>Ingresar el vehículo asegurado</h2>
//             <div class="info-grid">
//                 <div class="colum1">
//                     <label for="tipo-vehiculo">Tipo de Vehículo </label>
//                     <select id="tipo-vehiculo">
//                         <option value="auto">Auto</option>
//                         <option value="moto">Moto</option>
//                     </select>
//                     <label for="patente">Patente </label>
//                     <input type="text" id="patente">
//                     <label for="anio-vehiculo">Año </label>
//                     <input type="number" id="anio-vehiculo">
//                     <label for="vigencia-desde">Vigencia Desde </label>
//                     <input type="date" id="vigencia-desde">
//                     <label for="vigencia-hasta">Vigencia Hasta </label>
//                     <input type="date" id="vigencia-hasta">
//                 </div>
//                 <div class="colum2">
//                     <label>Fotos del vehículo</label>
//                     <input type="file" id="foto-vehiculo1" accept="image/*" style="display:none">
//                     <button onclick="cargarFotos('vehiculo1')" class="ver-fotos configBotones">
//                         <span class="material-symbols-outlined botones">upload</span>Subir
//                     </button>
//                     <label for="tipo-seguro">Tipo de Seguro </label>
//                     <select id="tipo-seguro">
//                         <option value="basico">Básico</option>
//                         <option value="intermedio">Intermedio</option>
//                         <option value="premiun">Premiun</option>
//                     </select>
//                     <label for="premio-total">Premio Total (en pesos) </label>
//                     <input type="number" id="premio-total">
//                     <label for="suma-asegurada">Suma Asegurada </label>
//                     <input type="number" id="suma-asegurada">
//                     <label for="uso-vehiculo">Uso del Vehículo </label>
//                     <select id="uso-vehiculo">
//                         <option value="particular">Particular</option>
//                         <option value="profesional">Profesional</option>
//                     </select>
//                 </div>
//             </div>
//             <button class="activo eliminar-vehiculo configBotones">
//                 <span class="material-symbols-outlined botones">delete</span>Eliminar
//             </button>
//         `;

//         vehiculosContainer.appendChild(nuevoVehiculo);
//         console.log("agregado");

//         // eliminar vehículo ------------------------------
//         nuevoVehiculo.querySelector('.eliminar-vehiculo').addEventListener('click', function() {
//             vehiculosContainer.removeChild(nuevoVehiculo);
//         });

//         // FUNCION PARA ELIMINAR EL NUEVO VEHÍCULO EN EL BACK TMB, DESCOMENTAR CUANDO QUIERAN IMPLEMENTAR Y BORRAR LA FUNCION DE ARRIBA 
//         // nuevoVehiculo.querySelector('.eliminar-vehiculo').addEventListener('click', async function() {
//         //     const vehiculoId = nuevoVehiculo.getAttribute('data-id'); 

//         //     try {
//         //         const response = await fetch(`/eliminarVehiculo/${vehiculoId}`, { // cambiar la ruta!!
//         //             method: 'DELETE',
//         //             headers: {
//         //                 'Content-Type': 'application/json',
//         //             },
//         //         });

//         //         if (!response.ok) {
//         //             throw new Error('Error al eliminar el vehículo');
//         //         }

//         //         const result = await response.json(); 
//         //         console.log('Vehículo eliminado exitosamente:', result);

//         //         vehiculosContainer.removeChild(nuevoVehiculo);
//         //     } catch (error) {
//         //         console.error('Error eliminando el vehículo:', error);
//         //         alert('Hubo un problema al eliminar el vehículo. Intenta nuevamente.');
//         //     }
//         // });

//     } else {
//         alert('Debes estar en modo de edición para agregar vehículos.');
//     }
// }

// document.getElementById('guardar').addEventListener('click', guardarCambios);

// document.getElementById('eliminar-cliente').addEventListener('click', function() {
    
// });

// Funciones para editar, guardar y cancelar cambios
function editarPerfil() {
    document.querySelectorAll('.info-personal input, .info-personal select').forEach(input => {
        input.disabled = false;
    });
    document.querySelector('.botones-edicion').classList.remove('oculto');
}

function guardarCambios() {
    // Implementar lógica para guardar cambios
    document.querySelectorAll('.info-personal input, .info-personal select').forEach(input => {
        input.disabled = true;
    });
    document.querySelector('.botones-edicion').classList.add('oculto');
}

function cancelarEdicion() {
    // Implementar lógica para cancelar cambios
    document.querySelectorAll('.info-personal input, .info-personal select').forEach(input => {
        input.disabled = true;
    });
    document.querySelector('.botones-edicion').classList.add('oculto');
}