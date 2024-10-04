// ----------------------------------------------------------------------------
// mostrar 'vehiculo' y ocultar 'datos' ---------------------------------------
// ----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const datosPersonalesTab = document.getElementById('datos-personales-tab');
    const vehiculosTab = document.getElementById('vehiculos-tab');

    datosPersonalesTab.classList.add('tabDesactivado');
    datosPersonalesTab.classList.remove('tabActivo'); 
    vehiculosTab.classList.remove('tabDesactivado'); 
    vehiculosTab.classList.add('tabActivo'); 
});

// ----------------------------------------------------------------------------
// obtener datos de los vehiculos ---------------------------------------------
// ----------------------------------------------------------------------------
async function obtenerDatosPerfil() {
    try {
        const vehiculosResponse = await fetch('/ruta'); // cambiar la ruta !!!!!!!!!!!!
            if (!vehiculosResponse.ok) {
                throw new Error('Error al obtener los datos de los vehículos');
            }
            const datosVehiculos = await vehiculosResponse.json();
    
            const vehiculo = datosVehiculos[0];
            if (vehiculo) {
                document.getElementById('tipo_vehiculo').value = vehiculo.tipo || '';
                document.getElementById('patente').value = vehiculo.patente || '';
                document.getElementById('anio').value = vehiculo.anio || '';
                document.getElementById('vigencia_desde').value = vehiculo.vigenciaDesde || '';
                document.getElementById('vigencia_hasta').value = vehiculo.vigenciaHasta || '';
                document.getElementById('tipo_seguro').value = vehiculo.tipoSeguro || '';
                document.getElementById('premio_total').value = vehiculo.premioTotal || '';
                document.getElementById('suma_asegurada').value = vehiculo.sumaAsegurada || '';
                document.getElementById('uso_vehiculo').value = vehiculo.usoVehiculo || '';
            }

    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
