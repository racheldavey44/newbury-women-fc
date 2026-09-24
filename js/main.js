// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after picking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
