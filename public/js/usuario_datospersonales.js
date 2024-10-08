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

// Menú interactivo
const menuHamburguesa = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

const iconoBarras = document.querySelector('#icono-barras');
const iconoX = document.querySelector('#icono-x');

menuHamburguesa.addEventListener('click', () => {
    console.log('Menú clickeado');
    menu.classList.toggle('mostrar');
    iconoX.classList.toggle('mostrar');
    iconoBarras.classList.toggle('ocultar');
});

// fetch para pedir datos -------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const id_cliente = /* Aquí debes asignar el ID del cliente */;
    const url = `/api/datos-personales/${id_cliente}`; // CAMBIAR RUTA !!!!!!!!!!!!!

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json(); 
        })
        .then(data => {
            document.getElementById('nombre').value = data.nombre;
            document.getElementById('apellido').value = data.apellido;
            document.getElementById('dni').value = data.dni;
            document.getElementById('email').value = data.email;
            document.getElementById('celular').value = data.celular;
            document.getElementById('direccion').value = data.direccion;
            document.getElementById('ciudad').value = data.ciudad;
            document.getElementById('provincia').value = data.provincia;

            document.getElementById('nombre').innerText = data.nombre;
        })
        .catch(error => {
            console.error('Error:', error);
            const contenedor = document.querySelector('.contenedor');
            contenedor.innerHTML = '<p>Error al cargar los datos personales.</p>';
        });
});