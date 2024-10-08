// buscar el usuario (email) a partir del DNI ---------------------------------
document.getElementById('buscar-usuario').addEventListener('click', async () => {
    const dni = document.getElementById('dni').value;

    if (!dni) {
        Swal.fire({
            icon: 'warning',
            title: 'DNI Inválido',
            text: 'Por favor, debe ingresar un número de DNI',
            confirmButtonText: 'Aceptar'
        });
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

            Swal.fire({
                icon: 'success',
                title: 'Usuario Encontrado',
                text: 'Los datos del usuario se han cargado exitosamente.',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No Encontrado',
                text: 'No se encontró un usuario con ese DNI.',
                confirmButtonText: 'Aceptar'
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error: ' + error.message,
            confirmButtonText: 'Aceptar'
        });
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

    // Validar que todos los campos estén completos
    if (!dni || !email || !nombre || !apellido || !clave || !rol_id) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos Incompletos',
            text: 'Por favor, completa todos los campos.',
            confirmButtonText: 'Aceptar'
        });
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
    
    const response = await fetch('/api/crear_usuario', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioDatos),
    });
    
    // verifica si la respuesta del servidor fue exitosa
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); 
        const errorMessage = errorData.message || 'Error al crear el usuario'; 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage,
            confirmButtonText: 'Aceptar'
        });
        return; 
    }

    let responseData;
    try {
        responseData = await response.json();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La respuesta del servidor no es un JSON válido',
            confirmButtonText: 'Aceptar'
        });
        return; 
    }

    // mostrar msj de éxito y recargar la pág 
    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: responseData.message || 'Usuario creado con éxito',
        confirmButtonText: 'Aceptar',
        showCancelButton: true, 
        cancelButtonText: 'Aceptar y enviar email', 
    }).then((result) => {
        if (result.isConfirmed) {
            // redirigir después de aceptar sin enviar el correo
            window.location.href = '/crear_usuario'; 
        } else if (result.isDismissed) {
            // enviar correo con la contraseña
            const subject = "Bienvenido a Prisma Seguros";
            const body = `Estimado ${nombre},\n\n¡Bienvenido a Prisma Seguros! Su cuenta ha sido creada exitosamente. Estas son tus credenciales:\n\nEmail: ${email}\nContraseña: ${clave}\n\nSi tenés alguna consulta, no dudes en contactarnos.\n\nSaludos,\nEl equipo de Prisma Seguros.`;

            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, '_blank');
            
            // redirigir después de enviar el correo
            window.location.href = '/crear_usuario'; 
        }
    });

});

// mostrar - ocultar contraseña con checkbox --------------------------------
document.getElementById('toggle-password-checkbox').addEventListener('change', function () {
    const passwordInput = document.getElementById('clave');

    // cambiar el tipo del input según el estado del checkbox
    if (this.checked) {
        passwordInput.type = 'text'; 
    } else {
        passwordInput.type = 'password'; 
    }
});
