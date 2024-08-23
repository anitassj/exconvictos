document.querySelector('.iniciar-sesion').addEventListener('click', () => {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    let isValid = true; // verifica si los campos están completados o no
    let emailValid = true;
    let passwordValid = true;

    if (!email.value && !password.value) {
        isValid = false;
        alert('Por favor, completar los campos.')
        event.preventDefault(); // Detiene la navegación
    } else if (isValid == true){
        if (!email.value) {
            emailValid = false;
        } 
        if (emailValid == false) {
            alert('Por favor, colocar un correo electrónico.');
            event.preventDefault(); // Detiene la navegación
        }
        if (!password.value) {
            passwordValid = false;
        }
        if (passwordValid == false) {
            alert('Por favor, colocar una contraseña.');
            event.preventDefault(); // Detiene la navegación
        }
    }
})