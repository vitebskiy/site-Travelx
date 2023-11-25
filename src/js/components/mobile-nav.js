const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".mobile-nav-overlay");
const btnClose = document.querySelector(".mobile-nav__btn");

const burger = document.querySelector("[data-burger]");

burger.addEventListener("click", () => {
  burger.classList.add("burger--active");
  overlay.classList.add("mobile-nav-overlay--active");
  nav.classList.add("mobile-nav--active");
});

btnClose.addEventListener("click", () => {
  burger.classList.remove("burger--active");
  overlay.classList.remove("mobile-nav-overlay--active");
  nav.classList.remove("mobile-nav--active");
});
