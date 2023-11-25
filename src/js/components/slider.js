import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper(".swiper", {
  speed: 1000,
  parallax: true,
  keyboard: {
    enabled: true,
  },

  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number.toString().padStart(2, "0");
    },
    formatFractionTotal: function (number) {
      return number.toString().padStart(2, "0");
    },
  },

  navigation: {
    nextEl: "#slider-next",
    prevEl: "#slider-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
