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
      <div class="project-card fade-in" data-id="${project.id}">
        <h3>${project.title}</h3>
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
        <p>${project.description}</p>

        <h3>Key Contributions</h3>
        <ul>
            ${project.details.map(d => `<li>${d}</li>`).join("")}
        </ul>
        `);
    });
    });


}
