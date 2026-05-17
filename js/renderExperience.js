import { openModal } from "./modal.js";

export async function renderExperience() {
  const res = await fetch("./data/experience.json");
  const experiences = await res.json();

  const section = document.getElementById("experience");
  if (!section) return;

  let html = `
    <div class="container">
      <h2 class="section-title">Experience</h2>

      <div class="experience-grid">
`;

  experiences.forEach((exp, index) => {
  html += `
    <div class="experience-card fade-in" data-index="${index}">
      
      <div class="experience-logo">
        <img src="${exp.logo}" alt="${exp.company} logo" />
      </div>

      <div class="experience-content">
        <h3>${exp.role}</h3>
        <p class="experience-meta">
          ${exp.company} • ${exp.duration}
        </p>
        <p class="experience-hint">Click to view details</p>
      </div>

    </div>
  `;
});

  html += `
      </div>
    </div>
  </div>
`;
  section.innerHTML = html;

  section.querySelectorAll(".fade-in").forEach(el =>
    el.classList.add("visible")
  );

  section.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("click", () => {
      const exp = experiences[card.dataset.index];

      openModal(`
        <h2>${exp.role}</h2>
        <p><strong>${exp.company}</strong> • ${exp.duration} • ${exp.location || ""}</p>
        <ul>${exp.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
        ${exp.techStack ? `<div class="skills-modal-section"><h4>Tech Stack</h4><div class="modal-tags blue">${exp.techStack.map(t => `<span>${t}</span>`).join("")}</div></div>` : ""}
        ${exp.clients ? `<div class="skills-modal-section"><h4>Clients</h4><p>${exp.clients.join(" | ")}</p></div>` : ""}
        ${exp.achievements ? `<div class="skills-modal-section"><h4>Achievements</h4><ul>${exp.achievements.map(a => `<li>${a}</li>`).join("")}</ul></div>` : ""}
        ${exp.github ? `<a href="${exp.github}" target="_blank" class="cert-verify-btn">Check out my works →</a>` : ""}
      `);
    });
  });
}