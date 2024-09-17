// funcion p menú responsive --------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const iconoMenuResponsive = document.querySelector(".fi-rr-menu-burger");
  const menuResponsive = document.querySelector(".menu");
  const iconoCerrar = document.querySelector(".fi-br-cross");

  function toggleMenu() {
    menuResponsive.classList.toggle("activo");

    if (menuResponsive.classList.contains("activo")) {
        iconoMenuResponsive.classList.add("oculto");  
        iconoCerrar.classList.remove("oculto");    
        iconoCerrar.classList.add("x-rojo");   
    } else {
        iconoMenuResponsive.classList.remove("oculto"); 
        iconoCerrar.classList.add("oculto");   
        iconoCerrar.classList.remove("x-rojo");        
    }
  }

  iconoMenuResponsive.addEventListener("click", toggleMenu);
  iconoCerrar.addEventListener("click", toggleMenu);
});


// función de carrusel promos -------------------------------------------------
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
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', 
      clickable: true,
    }
  });
});

// función de carrusel planes -------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const iconoContainer = document.querySelector('.icono');
  const carrusel = document.getElementById('carrusel-planes');

  iconoContainer.addEventListener('click', function() {
      if (carrusel.style.display === 'none' || carrusel.style.display === '') {
          carrusel.style.display = 'block';
      } else {
          carrusel.style.display = 'none';
      }
  });
});

// ANITA: NO ESTA ANDANDO 
const carruselPlanes = new Swiper('carrusel-planes', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true, 
  effect: 'cards',
  cardsEffect: {
    slideShadows: false,
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
  },
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
});

// función sw preguntas frecuentes --------------------------------------------
document.querySelectorAll('.pregunta').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
      const respuesta = pregunta.nextElementSibling;
      const icono = pregunta.querySelector('i');

      // mostrar/ocultar la respuesta
      if (respuesta.style.display === 'block') {
          respuesta.style.display = 'none';
          icono.classList.remove('fi-rr-angle-small-up');
          icono.classList.add('fi-rr-angle-small-down');
      } else {
          respuesta.style.display = 'block';
          icono.classList.remove('fi-rr-angle-small-down');
          icono.classList.add('fi-rr-angle-small-up');
      }
  });
});
