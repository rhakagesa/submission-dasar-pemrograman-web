const navbar = document.querySelector("#nav-list");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeButton = document.querySelector("#closebtn");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("nav-list-active");
  hamburgerMenu.classList.toggle("hamburger-active");
  closeButton.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
  navbar.classList.toggle("nav-list-active");
  hamburgerMenu.classList.toggle("hamburger-active");
  closeButton.classList.toggle("active");
});

// Menyembunyikan Header Saat Scroll Down
let lastState = window.scrollY;
window.onscroll = function () {
  let currentState = window.scrollY;
  if (currentState < lastState) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.transition = "all 0.5s";
  } else {
    document.getElementById("header").style.top = "-5rem";
  }
  lastState = currentState;
};
