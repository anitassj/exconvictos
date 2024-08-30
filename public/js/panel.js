/* menu hamburgues boton usuario*/
document.querySelector(".usuario").addEventListener("click", function() {
    var menu = document.querySelector(".menu-usuario");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

/* menu hamburguesa boton menu*/
document.querySelector(".menu").addEventListener("click", function() {
    var menu = document.querySelector(".menu-hamburguesa");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
/* Cerrar el menú de usuario si se hace clic fuera */
document.addEventListener("click", function(event) {
    if (!event.target.matches('.usuario') && !event.target.closest('.menu-usuario')) {
        document.querySelector(".menu-usuario").style.display = "none";
    }
});



/* boton menu mostrar o no */

const menuLinks = document.querySelectorAll(".menu-hamburguesa a");

const contenedorDatos = document.querySelector(".contenedor-datos");

// Define los contenidos para cada enlace
const contenidos = {
    contenido1: "<h2>Contenido para Link 1</h2><p>Aquí está el contenido para el primer enlace.</p>",
    contenido2: "<h2>Contenido para Link 2</h2><p>Aquí está el contenido para el segundo enlace.</p>",
    contenido3: "<h2>Contenido para Link 3</h2><p>Aquí está el contenido para el tercer enlace.</p>"
};

// Añade un evento click a cada enlace del menú
menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();  
        
        const contenidoId = link.getAttribute("data-content");
        const contenido = contenidos[contenidoId] || "<p>Contenido no disponible.</p>";

        contenedorDatos.innerHTML = contenido;
    });
});
