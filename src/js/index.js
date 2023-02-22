import AOS from 'aos';

function isDarkMode() {
  return localStorage.getItem('darkMode') || false;
}

function setDarkMode(enabled = false) {
  localStorage.setItem('darkMode', enabled);
}

AOS.init();
