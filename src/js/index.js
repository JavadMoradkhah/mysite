function isDarkMode() {
  return localStorage.getItem('darkMode') || false;
}

function setDarkMode(enabled = false) {
  localStorage.setItem('darkMode', enabled);
}

window.onload = function () {
  if (isDarkMode()) {
    document.documentElement.classList.add('dark');
  }
};
