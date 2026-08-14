// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation menu
const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
