'use strict';

(function (){
  const slider = document.querySelector('.js-slider');
  const pagination = document.querySelector('.js-slider-pagination');

  if (!slider || !pagination) {
    return false;
  }

  new Swiper(slider, {
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: pagination,
      type: 'bullets',
      clickable: true,
      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet--active',
      bulletElement: 'span',
    },

    autoplay: {
      delay: 5000,
    },

    /*// Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });

})();
