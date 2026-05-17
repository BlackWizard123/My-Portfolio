import { openModal } from "./modal.js";

export async function renderProjects() {
  const res = await fetch("./data/projects.json");
  const projects = await res.json();

  const section = document.getElementById("projects");

  let html = `
    <div class="container">
      <h2 class="section-title">
        Projects
      </h2>

      <div class="projects-grid">
  `;

  projects.forEach(project => {
    html += `
      <div class="project-card fade-in${project.highlight ? ' highlighted' : ''}" data-id="${project.id}">
        <h3>${project.title}</h3>
        ${project.hackathon ? `<p class="blog-meta">🏆 ${project.hackathon.rank} — ${project.hackathon.name}</p>` : ""}
        <p class="project-desc">${project.description}</p>

        <div class="project-tech">
          ${project.tech.map(t => `<span>${t}</span>`).join("")}
        </div>

        <p class="project-hint">Click to view details</p>

      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  section.innerHTML = html;

  section
    .querySelectorAll(".fade-in")
    .forEach(el => el.classList.add("visible"));

    section.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const project = projects.find(p => p.id === card.dataset.id);

        openModal(`
        <h2>${project.title}</h2>
        ${project.hackathon ? `<div class="cert-meta-modal"><span class="cert-meta-pill">🏆 ${project.hackathon.rank} / ${project.hackathon.participants}</span><span class="cert-meta-pill">${project.hackathon.name}</span><span class="cert-meta-pill">${project.hackathon.prize}</span></div>` : ""}
        <p>${project.longDescription || project.description}</p>
        <div class="skills-modal-section"><h4>Tech Stack</h4><div class="modal-tags blue">${project.tech.map(t => `<span>${t}</span>`).join("")}</div></div>
        ${project.github ? `<a href="${project.github}" target="_blank" class="cert-verify-btn">View on GitHub →</a>` : ""}
        ${project.live ? `<a href="${project.live}" target="_blank" class="cert-verify-btn">Live Demo →</a>` : ""}
        `);
    });
    });


}