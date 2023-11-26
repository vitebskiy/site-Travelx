const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loader-wrapper--hidden");
  }, 1000)
});
