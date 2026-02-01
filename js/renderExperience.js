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
        <p><strong>${exp.company}</strong> • ${exp.duration}</p>
        <ul>
          ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      `);
    });
  });
}
