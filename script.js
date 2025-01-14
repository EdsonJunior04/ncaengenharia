const swiper = new Swiper('#slide-principal',{
    // Optional parameters


    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
      delay: 1000,
    },
});



const swiper1 = new Swiper("#slide-parceiros", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 2500,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: 5 ,
  allowTouchMove: false,
  disableOnInteraction: true
});



const swiper2 = new Swiper("#nossos-servicos", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simula um envio ao backend
  document.getElementById("responseMessage").innerHTML = `<div class="alert alert-success">Obrigado, ${name}! Sua mensagem foi enviada.</div>`;
});


