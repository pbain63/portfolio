const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
let isOpen = false;

navToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  navList.classList.toggle("nav--visible");
  navToggle.textContent = isOpen ? "✖" : "☰";
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Accessibility: allow Enter/Space to toggle menu
// navToggle.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" || e.key === " ") {
//     e.preventDefault();
//     navToggle.click();
//   }
// });

// Reset menu when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    navList.classList.remove("nav--visible");
    navToggle.textContent = "☰";
    navToggle.setAttribute("aria-expanded", false);
    isOpen = false;
  }
});
