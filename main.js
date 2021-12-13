// close and open btns selectors
const openIcon = document.querySelector('.navbar-humberger');
const closeIcon = document.querySelector('.closeIcon');

const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const navbarOverlay = document.getElementById('navbar-overlay');
function openLayoutFunction() {
  // creat layout
  navbarOverlay.style.width = '100%';
  // add blur in background
  navbar.classList.add('blur');
  header.classList.add('blur');
}
openIcon.addEventListener('click', openLayoutFunction);

function closeLayoutFunction() {
  //remove the overlay
  navbarOverlay.style.width = '0%';
  // remove blur from background
  navbar.classList.remove('blur');
  header.classList.remove('blur');
}

closeIcon.addEventListener('click', closeLayoutFunction);

const overlay_content = document.querySelector('.overlay-content');

function clickOnMenuLinkfunction() {
  navbarOverlay.style.width = '0%';
  navbar.classList.remove('blur');
  header.classList.remove('blur');
}
overlay_content.addEventListener('click', clickOnMenuLinkfunction);
