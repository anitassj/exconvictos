// buscar el usuario (email) a partir del DNI -----------------------------
document.getElementById('buscar-usuario').addEventListener('click', async () => {
    const dni = document.getElementById('dni').value;

    // despues esto lo manejo con sweet alert
    if (!dni) {
        alert('Por favor, ingresa un DNI válido.');
        return;
    }

    try {
        const response = await fetch(`/api/buscar_email/${dni}`, { method: 'GET' }); // ruta lista
        if (!response.ok) {
            throw new Error('Error al buscar el usuario');
        }

        const data = await response.json();
        if (data.email) {
            document.getElementById('email').value = data.email;
        } else {
            alert('No se encontró un usuario con ese DNI.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// generar contraseña aleatoria -------------------------------------------
document.getElementById('generar-password').addEventListener('click', () => {
    const generatedPassword = Math.random().toString(36).slice(-8); 
    document.getElementById('password').value = generatedPassword;
});

// crear el usuario -------------------------------------------------------
document.getElementById('crear-usuario').addEventListener('click', async () => {
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rol = document.getElementById('rol').value;

    if (!dni || !email || !password || !rol) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const usuarioDatos = {
        dni,
        email,
        password,
        rol
    };

    try {
        const response = await fetch('/crear-usuario', { // CAMBIAR RUTA !!!!!!!!!!!!!!!
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarioDatos),
        });

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        // despues hacerlo con sweet alert !!
        alert('Usuario creado con éxito');
    } catch (error) {
        alert('Error: ' + error.message);
    }
});