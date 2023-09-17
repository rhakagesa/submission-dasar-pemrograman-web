// Hamburger Menu
const navbar = document.querySelector("#nav-list");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeButton = document.querySelector("#closebtn");

// Toogle Hamburger Menu For Active ClassList Rsponsive Navbar
hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("nav-list-active");
  hamburgerMenu.classList.toggle("hamburger-active");
  closeButton.classList.toggle("active");
});
// Toogle for Close Rseponsive Navbar
closeButton.addEventListener("click", function () {
  navbar.classList.toggle("nav-list-active");
  hamburgerMenu.classList.toggle("hamburger-active");
  closeButton.classList.toggle("active");
});

// Responsive Navbar Otomatsi Tertutup Ketika Link di Klik
document.onclick = function (pointer) {
  if (
    pointer.target.id !== "nav-list" &&
    pointer.target.id !== "hamburger-menu"
  ) {
    navbar.classList.remove("nav-list-active");
    hamburgerMenu.classList.remove("hamburger-active");
    closeButton.classList.remove("active");
  }
};

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
