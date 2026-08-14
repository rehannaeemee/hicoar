// =============================================================
// HICOAR LAB — MOBILE-FRIENDLY NAVIGATION
// =============================================================

// Current year in the footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile navigation
const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".links");
const navHeader = document.querySelector(".nav");

function setMenuState(open) {
  if (!menuButton || !navLinks) return;

  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuButton.textContent = open ? "×" : "☰";
  document.body.classList.toggle("nav-open", open);
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  // Close the menu after a navigation item is selected.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Close with the Escape key.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  // Close if the user taps outside the navigation.
  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") === "true" &&
      navHeader &&
      !navHeader.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  // Return to the normal desktop menu when the viewport becomes wide again.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) setMenuState(false);
  });
}
