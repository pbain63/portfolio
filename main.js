const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
// It's set to false initially because when the page first loads, the navigation menu is closed.
let isOpen = false;

navToggle.addEventListener("click", () => {
  // 1. Flip the state
  isOpen = !isOpen;
  // 2. Show or hide the menu
  navList.classList.toggle("nav--visible");
  // 3. Change the button's icon
  navToggle.textContent = isOpen ? "✖" : "☰";
  // 4. Update the accessibility attribute
  navToggle.setAttribute("aria-expanded", isOpen);
});

//// Back to Top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Toggle dark mode button

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved mode if exists
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
