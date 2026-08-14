// =============================================================
// HICOAR LAB — RELIABLE MOBILE NAVIGATION
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Current year in the footer
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuButton = document.querySelector(".menu");
  const navLinks = document.querySelector(".links");
  const navHeader = document.querySelector(".nav");

  if (!menuButton || !navLinks) {
    return;
  }

  function setMenuState(open) {
    navLinks.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuButton.textContent = open ? "×" : "☰";
    document.body.classList.toggle("nav-open", open);
  }

  // Start from a known closed state every time the page loads.
  setMenuState(false);

  menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuState(!navLinks.classList.contains("open"));
  });

  // Close after the visitor chooses a section.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Escape closes the menu.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
      menuButton.focus();
    }
  });

  // Tapping outside the header closes the menu.
  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("open") &&
      navHeader &&
      !navHeader.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  // Restore desktop state when rotating/resizing to a wide screen.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      setMenuState(false);
    }
  });
});
