import { renderNavbar } from "./renderNavbar.js";
import { renderHero } from "./renderHero.js";
import { renderSkills } from "./renderSkills.js";
import { renderProjects } from "./renderProjects.js";
import { renderExperience } from "./renderExperience.js";
import { renderCertifications } from "./renderCertifications.js";
import { renderFooter } from "./renderFooter.js";
import { renderBlogs } from "./renderBlogs.js";
import { renderMoments } from "./renderMoments.js";
import { loadBlog } from "./blogLoader.js";
import { renderLeetCode } from "./renderLeetcode.js";
import { renderAcademics } from "./renderAcademics.js";

// Apply saved theme immediately to avoid flash
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderHero();
  renderLeetCode(); 
  renderSkills();
  renderProjects();
  renderExperience();
  renderAcademics();
  renderCertifications();
  renderMoments();
  renderBlogs();
  renderFooter();
});

const backToTop = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");

// Set correct icon on load
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

window.addEventListener("scroll", () => {
  const visible = window.scrollY > 300;
  backToTop.classList.toggle("show", visible);
  themeToggle.classList.toggle("show", visible);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
});


// document.addEventListener("click", (e) => {
//   const resumeBtn = e.target.closest("#resumeBtn");
//   const toast = document.getElementById("resumeToast");

//   if (!resumeBtn || !toast) return;

//   toast.classList.add("show");

//   setTimeout(() => {
//     toast.classList.remove("show");
//   }, 3000);
// });

document.addEventListener("click", (e) => {
  const resumeBtn = e.target.closest("#resumeBtn");
  const toast = document.getElementById("resumeToast");

  if (!resumeBtn || !toast) return;

  e.preventDefault(); // stop immediate navigation

  // show toast immediately
  toast.classList.add("show");

  // open resume after 3 seconds
  setTimeout(() => {
    window.open(resumeBtn.href, "_blank", "noopener,noreferrer");
    toast.classList.remove("show");
  }, 3000);
});

const sectionNavigator = document.querySelector(".section-navigator");
let closeTimeout;

function openNavigator() {
  clearTimeout(closeTimeout);
  sectionNavigator.classList.add("open");
}

function closeNavigatorDelayed() {
  closeTimeout = setTimeout(() => {
    sectionNavigator.classList.remove("open");
  }, 500); // 1 second delay
}

sectionNavigator.addEventListener("mouseenter", openNavigator);
sectionNavigator.addEventListener("mouseleave", closeNavigatorDelayed);

window.addEventListener("DOMContentLoaded", () => {

  // ── 1. Instant show for top-level section wrappers (fade-up) ──
  const fadeUpEls = document.querySelectorAll(".fade-up");
  setTimeout(() => {
    fadeUpEls.forEach(el => el.classList.add("show"));
  }, 300);

  // ── 2. Scroll-reveal for individual elements inside sections ──
  const revealSelectors = ".fade-in, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add("visible");

      // Staggered children
      if (el.classList.contains("stagger-children")) {
        [...el.children].forEach((child, i) => {
          child.style.transitionDelay = `${i * 90}ms`;
        });
      }

      revealObserver.unobserve(el); // animate once
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  });

  // Observe elements already in the DOM
  document.querySelectorAll(revealSelectors).forEach(el => revealObserver.observe(el));

  // Re-observe after render modules inject HTML
  setTimeout(() => {
    document.querySelectorAll(revealSelectors).forEach(el => revealObserver.observe(el));
  }, 600);

});






// ----------
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   });
// });

// document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));