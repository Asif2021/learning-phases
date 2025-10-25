document.getElementById("year").textContent = new Date().getFullYear();

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme_switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
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
