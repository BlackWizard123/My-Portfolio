export function renderNavbar() {
  const navbar = document.getElementById("navbar");

  const savedTheme = localStorage.getItem("theme") || "dark";
  const toggleIcon = savedTheme === "dark" ? "☀️" : "🌙";

  navbar.innerHTML = `
    <div class="container">
      <nav style="display:flex; align-items:center; justify-content:space-between; height:64px;">
        
        <div class="nav-name">
          Hariharan C  |  Portfolio
        </div>

        <div style="display:flex; align-items:center; gap:1.5rem;">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#footer">Contact</a>
          <a href="assets/resume/hariharan_c.pdf" class="nav-resume" id="resumeBtn">Resume</a>
          <button class="nav-theme-toggle" id="navThemeToggle" aria-label="Toggle theme">${toggleIcon}</button>
        </div>

      </nav>
    </div>
  `;

  // Wire up the toggle
  const navToggle = document.getElementById("navThemeToggle");
  navToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next    = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    navToggle.textContent = next === "dark" ? "☀️" : "🌙";

    // Keep the floating toggle in sync
    const floatingToggle = document.getElementById("themeToggle");
    if (floatingToggle) floatingToggle.textContent = next === "dark" ? "☀️" : "🌙";
  });
}