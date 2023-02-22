import AOS from 'aos';

function isDarkMode() {
  return localStorage.getItem('darkMode') === 'true' ? true : false;
}

function setDarkMode(enabled = false) {
  localStorage.setItem('darkMode', enabled);
}

AOS.init();

document.addEventListener('alpine:init', () => {
  Alpine.data('darkMode', () => ({
    darkMode: isDarkMode(),
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      setDarkMode(this.darkMode);
    },
  }));
});
