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
