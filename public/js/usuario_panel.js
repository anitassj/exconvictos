// ------------------------------------------------------------------------------------------
//                                 SECCIÓN: PANEL / INICIO
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

    const urlParams = new URLSearchParams(window.location.search);
    const idUsuario = urlParams.get('idUsuario');
    console.log(idUsuario);

    try {
        const solicitudServidor = await fetch(`/inicio-usuario?idUsuario=${idUsuario}`);
        const respServidor = await solicitudServidor.json();
        console.log(respServidor);

        if (respServidor.error) {
            console.log(respServidor.error);
            return;
        }

        nombre.value = respServidor.nombre || '';

    } catch (error) {
        console.error('Error en la solicitud al servidor:', error);
    }
});