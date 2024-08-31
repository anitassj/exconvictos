// Menú responsive --------------------
document.addEventListener("DOMContentLoaded", function() {
    const iconoMenuResponsive = document.querySelector(".icono-menu");
    const menuResponsive = document.querySelector(".menu");
    
    iconoMenuResponsive.addEventListener("click", function() {
        menuResponsive.classList.toggle("activo");
    });
});

// Carrusel ----------------
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, 
    effect: 'coverflow', 
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', 
      clickable: true,
    }
  });
});