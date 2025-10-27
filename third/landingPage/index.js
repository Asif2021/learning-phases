//get current year for footer section
document.getElementById("year").textContent = new Date().getFullYear();

// darkmode and lightmode toggling
const themeSwitch = document.getElementById('theme_switch');
let darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
  document.documentElement.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.documentElement.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
};

if (darkmode === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});


// mobile menu responsiveness
const menuOpen = document.getElementById("menu_open");
const menuClose = document.getElementById("menu_close");
const mobile_menu = document.querySelector(".mobile_menu_svg");
const navMenu = document.getElementById("nav_menu");
mobile_menu.addEventListener("click", () => {
  navMenu.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})