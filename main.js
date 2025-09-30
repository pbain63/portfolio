const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
let isOpen = false;

navToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  navList.classList.toggle("nav--visible");
  navToggle.textContent = isOpen ? "✖" : "☰";
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
