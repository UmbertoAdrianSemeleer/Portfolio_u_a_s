// JavaScript for Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");

  // Wait for the header to load
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          headerPlaceholder.innerHTML = data;

          // Add event listener for the hamburger menu
          const navTrigger = document.querySelector(".navTrigger");
          const navLinks = document.querySelector(".nav-links");

          navTrigger.addEventListener("click", function () {
              this.classList.toggle("active"); // Toggles the hamburger icon animation
              navLinks.classList.toggle("show_list"); // Toggles the visibility of the nav links
          });
      });
});
