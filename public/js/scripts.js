// Menú responsive --------------------
document.addEventListener("DOMContentLoaded", function() {
    const iconoMenuResponsive = document.querySelector(".icono-menu");
    const menuResponsive = document.querySelector(".menu");
    
    iconoMenuResponsive.addEventListener("click", function() {
        menuResponsive.classList.toggle("activo");
    });
});
