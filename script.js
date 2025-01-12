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

