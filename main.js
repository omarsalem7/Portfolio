// close and open btns selectors
const openIcon = document.querySelector(".navbar-humberger");
const closeIcon = document.querySelector(".closeIcon");

const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const navbarOverlay = document.getElementById("navbar-overlay");

openIcon.addEventListener("click", function () {
  // creat layout
  navbarOverlay.style.width = "100%";
  // add blur in background
  navbar.classList.add("blur");
  header.classList.add("blur");
});
