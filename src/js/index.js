import AOS from 'aos';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.testimonials-swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  centerInsufficientSlides: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    hide: true,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

AOS.init();
