export async function renderSkills() {
  const res = await fetch("./data/skills.json");
  const skillsData = await res.json();

  const skillsSection = document.getElementById("skills");

  let html = `
    <div class="container">
      <h2 class="section-title">
        Skills
      </h2>


      <div class="skills-grid">

  `;

  for (const category in skillsData) {
    html += `
      <div class="skill-card fade-in">
        <h3>${category}</h3>
        <ul>
          ${skillsData[category]
            .map(skill => `<li>${skill}</li>`)
            .join("")}
        </ul>
      </div>
    `;
  }

  html += `
      </div>
    </div>
  `;

  skillsSection.innerHTML = html;

  // make visible (no scroll anim yet)
  skillsSection
    .querySelectorAll(".fade-in")
    .forEach(el => el.classList.add("visible"));
}
