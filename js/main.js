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

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

const navigator = document.querySelector(".section-navigator");
let closeTimeout;

function openNavigator() {
  clearTimeout(closeTimeout);
  navigator.classList.add("open");
}

function closeNavigatorDelayed() {
  closeTimeout = setTimeout(() => {
    navigator.classList.remove("open");
  }, 500); // 1 second delay
}

navigator.addEventListener("mouseenter", openNavigator);
navigator.addEventListener("mouseleave", closeNavigatorDelayed);

window.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".fade-up");

  setTimeout(() => {
    elements.forEach(el => el.classList.add("show"));
  }, 300);

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
