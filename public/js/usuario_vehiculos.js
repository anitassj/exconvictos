// ------------------------------------------------------------------------------------------
//                                 SECCIÓN: VEHÍCULOS ASEGURADOS
//-------------------------------------------------------------------------------------------

const menuHamburguesa = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

const iconoBarras = document.querySelector('#icono-barras');
const iconoX = document.querySelector('#icono-x');

menuHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    iconoX.classList.toggle('mostrar');
    iconoBarras.classList.toggle('ocultar');
});

document.addEventListener('DOMContentLoaded', async () => {
    const nombre = document.getElementById('nombre');
    const tipoVehiculo = document.getElementById('tipo_vehiculo');
    const patente = document.getElementById('patente');
    const anio = document.getElementById('anio');
    const vigenciaDesde = document.getElementById('vigencia_desde');
    const vigenciaHasta = document.getElementById('vigencia_hasta');
    const tipoSeguro = document.getElementById('tipo_seguro');
    const premioTotal = document.getElementById('premio_total');
    const sumaAsegurada = document.getElementById('suma_asegurada');
    const usoVehiculo = document.getElementById('uso_vehiculo');

    const urlParams = new URLSearchParams(window.location.search);
    const idUsuario = urlParams.get('idUsuario');
    console.log(idUsuario);

    try {
        const solicitudServidor = await fetch(`/obtener-vehiculos?idUsuario=${idUsuario}`);
        const respServidor = await solicitudServidor.json();
        console.log(respServidor);

        if (respServidor.error) {
            console.log(respServidor.error);
            return;
        }

        nombre.value = respServidor.nombre || '';
        tipoVehiculo.value = respServidor.tipo_vehiculo || '';
        patente.value = respServidor.patente || '';
        anio.value = respServidor.anio || '';
        vigenciaDesde.value = respServidor.vigencia_desde || '';
        vigenciaHasta.value = respServidor.vigencia_hasta || '';
        tipoSeguro.value = respServidor.tipo_seguro || '';
        premioTotal.value = respServidor.premio_total || '';
        sumaAsegurada.value = respServidor.suma_asegurada || '';
        usoVehiculo.value = respServidor.uso_vehiculo || '';


    } catch (error) {
        console.error('Error en la solicitud al servidor:', error);
    }
});