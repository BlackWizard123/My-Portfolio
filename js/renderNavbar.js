export function renderNavbar() {
  const navbar = document.getElementById("navbar");

  navbar.innerHTML = `
    <div class="container">
      <nav style="display:flex; align-items:center; justify-content:space-between; height:64px;">
        
        <div class="nav-name">
          Hariharan C  |  Portfolio
        </div>

        <div style="display:flex; gap:1.5rem;">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#footer">Contact</a>
          <a href="assets/resume/resume.pdf" class="nav-resume" id="resumeBtn">Resume</a>
        </div>

      </nav>
    </div>
  `;
}
