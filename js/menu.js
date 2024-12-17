document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // Toggle the menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});
