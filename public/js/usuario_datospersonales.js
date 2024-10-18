// Menú interactivo
const menuHamburguesa = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

const iconoBarras = document.querySelector('#icono-barras');
const iconoX = document.querySelector('#icono-x');

menuHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    iconoX.classList.toggle('mostrar');
    iconoBarras.classList.toggle('ocultar');
});

// ------------------------------------------------------------------------------------------
//                                 SECCIÓN: DATOS PERSONALES
//-------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', async () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const dni = document.getElementById('dni');
    const email = document.getElementById('email');
    const celular = document.getElementById('celular');
    const direccion = document.getElementById('direccion');
    const ciudad = document.getElementById('ciudad');
    const provincia = document.getElementById('provincia');

    const urlParams = new URLSearchParams(window.location.search);
    const idUsuario = urlParams.get('idUsuario');
    console.log(idUsuario);

    try {
        const solicitudServidor = await fetch(`/obtener-usuario?idUsuario=${idUsuario}`);
        const respServidor = await solicitudServidor.json();
        console.log(respServidor);

        if (respServidor.error) {
            console.log(respServidor.error);
            return;
        }

        nombre.value = respServidor.nombre || '';
        apellido.value = respServidor.apellido || '';
        dni.value = respServidor.dni || '';
        email.value = respServidor.email || '';
        celular.value = respServidor.celular || '';
        direccion.value = respServidor.direccion || '';
        ciudad.value = respServidor.ciudad || '';
        provincia.value = respServidor.provincia || ''; 


    } catch (error) {
        console.error('Error en la solicitud al servidor:', error);
    }
});

// Edición de datos
const editar = document.querySelector('.editar');
const guardar = document.querySelector('.guardar');
const cancelar = document.querySelector('.cancelar');

const inputs = document.querySelectorAll('.dato');

let valoresOriginales = [];

editar.addEventListener('click', () => {
    guardar.classList.add('mostrar');
    cancelar.classList.add('mostrar');
    editar.classList.add('esconder');

    valoresOriginales = Array.from(inputs).map(input => input.value);

    inputs.forEach(dato => {
        dato.classList.add('modo-edicion');
        dato.disabled = false;
    });
});

cancelar.addEventListener('click', () => {
    editar.classList.remove('esconder');
    editar.classList.add('mostrar');
    guardar.classList.remove('mostrar');
    cancelar.classList.remove('mostrar');

    inputs.forEach((dato, index) => {
        dato.classList.remove('modo-edicion');
        dato.disabled = true;
        dato.value = valoresOriginales[index];
    });
});

guardar.addEventListener('click', () => {
    editar.classList.remove('esconder');
    editar.classList.add('mostrar');
    guardar.classList.remove('mostrar');
    cancelar.classList.remove('mostrar');

    inputs.forEach(dato => {
        dato.classList.remove('modo-edicion');
        dato.disabled = true;
    });
});