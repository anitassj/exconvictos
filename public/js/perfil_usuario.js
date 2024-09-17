let editModo = false;
let cambiosGuardados = false;

// funcion para obtener los datos del perfil
async function obtenerDatosPerfil() {
    try {
        const response = await fetch('/api/perfil');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del perfil');
        }
        const datos = await response.json();
        
        // rellenar los campos del formulario con los datos obtenidos
        document.getElementById('nombre').value = datos.nombre;
        document.getElementById('apellido').value = datos.apellido;
        document.getElementById('email').value = datos.email;
        document.getElementById('celular').value = datos.celular;
        document.getElementById('direccion').value = datos.direccion;
        document.getElementById('ciudad').value = datos.ciudad;
        document.getElementById('provincia').value = datos.provincia;

    } catch (error) {
        console.error('Error:', error);
    }
}

// función para activar/desactivar modo edición -------------------------------
function editarPerfil() {
    // activar el modo edición
    editModo = true;
    cambiosGuardados = false; 

    document.getElementById('guardar').disabled = false;
    
    document.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });

    document.getElementById('guardar').classList.add('editar-modo');
}

// función para guardar los cambios -------------------------------------------
async function guardarCambios() {
    if (!editModo || !cambiosGuardados) {
        return;
    }

    // obtener datos del formulario
    const datosUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        provincia: document.getElementById('provincia').value,
    };

    try {
        const response = await fetch('/api/perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        if (!response.ok) {
            throw new Error('Error al guardar los datos del perfil');
        }

        console.log('Cambios guardados.');

        // desactivar modo edición
        editModo = false;
        cambiosGuardados = false;
        document.getElementById('guardar').disabled = true;
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });

        document.getElementById('guardar').classList.remove('editar-modo');

    } catch (error) {
        console.error('Error:', error);
    }
}

// función para detectar cambios en los campos del formulario -----------------
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (editModo) {
            cambiosGuardados = true; 
        }
    });
});

// inicializar la página con los datos del perfil ----------------------------
document.addEventListener('DOMContentLoaded', () => {
    // desactivar el botón guardar y los campos
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true;
    });
    document.getElementById('guardar').disabled = true;

    obtenerDatosPerfil();
});
