// buscar el usuario (email) a partir del DNI ---------------------------------
document.getElementById('buscar-usuario').addEventListener('click', async () => {
    const dni = document.getElementById('dni').value;

    if (!dni) {
        alert('Por favor, ingresa un DNI válido.');
        return;
    }

    try {
        const response = await fetch(`/api/buscar_email/${dni}`, { method: 'GET' }); 
        if (!response.ok) {
            throw new Error('Error al buscar el usuario');
        }

        const data = await response.json();
        if (data.email) {
            // establecer los valores del email, nombre y apellido
            document.getElementById('email').value = data.email;
            document.getElementById('nombre').value = data.nombre; 
            document.getElementById('apellido').value = data.apellido; 
        } else {
            alert('No se encontró un usuario con ese DNI.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// generar contraseña aleatoria -----------------------------------------------
document.getElementById('generar-password').addEventListener('click', () => {
    const generatedPassword = Math.random().toString(36).slice(-8); 
    document.getElementById('clave').value = generatedPassword;
});

// crear el usuario -----------------------------------------------------------
document.getElementById('crear-usuario').addEventListener('click', async () => {
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const clave = document.getElementById('clave').value;
    const rol_id = document.getElementById('rol_id').value;

    if (!dni || !email || !nombre || !apellido || !clave || !rol_id) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const usuarioDatos = {
        dni,
        email,
        nombre, 
        apellido,
        clave,
        rol_id
    };
    
    const response = await fetch('/api/crear-usuario', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioDatos),
    });
    
    const contentType = response.headers.get("content-type");
    if (!response.ok) {
        const errorData = await response.text(); 
        throw new Error(`Error: ${response.status} - ${errorData}`);
    }
    
    let responseData;
    if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        throw new Error("La respuesta no es un JSON válido");
    }
    
});

// mostrar - ocultar contraseña -----------------------------------------------
document.querySelector('.toggle-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('clave');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
        toggleIcon.textContent = 'visibility_off'; 
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = 'visibility'; 
    }
});

