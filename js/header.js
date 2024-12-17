// Load the header and initialize the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Attach the hamburger menu functionality
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("navMenu");

      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("show");
          hamburger.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("Error loading header:", err));
});
