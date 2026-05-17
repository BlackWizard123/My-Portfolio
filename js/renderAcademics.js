import { openModal } from "./modal.js";

export async function renderAcademics() {
  const res = await fetch("./data/academics.json");
  const academics = await res.json();

  const section = document.getElementById("academics");

  section.innerHTML = `
    <div class="container">
        <h2 class="section-title">Academics</h2>

        <div class="academics-timeline">
          ${academics.map((item, index) => `
            <div class="academic-row" data-index="${index}">
              <span class="timeline-dot"></span>
              <div class="academic-main">
                <h3>${item.degree}</h3>
                <p class="academic-institution">${item.institution}</p>
                <p class="academic-years">
                  ${item.startYear} – ${item.endYear}
                </p>
              </div>

              <div class="academic-meta">
                <span class="academic-bubble purple">
                  ${item.board}
                </span>

                <span class="academic-bubble green">
                  ${item.score}
                </span>
              </div>

            </div>
          `).join("")}
        </div>
    </div>
  `;

  attachAcademicClick(academics);
}

function attachAcademicClick(academics) {
  document.querySelectorAll(".academic-row").forEach(row => {
    row.addEventListener("click", () => {
      const item = academics[row.dataset.index];
      openModal(buildAcademicModal(item));
    });
  });
}

function buildAcademicModal(item) {
  return `
    <div class="academic-modal">

      <h2>${item.degree}</h2>
      <p class="academic-modal-inst">${item.institution}</p>

      ${item.subjects ? `
        <div class="academic-section">
          <h4>Subjects Studied</h4>
          <ul>
            ${item.subjects.map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
      ` : ""}

      ${item.courses ? `
        <div class="academic-section">
          <h4>Relevant Courses</h4>
          <ul>
            ${item.courses.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
      ` : ""}

      ${item.achievements ? `
        <div class="academic-section">
          <h4>Achievements</h4>
          <ul>
            ${item.achievements.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      ` : ""}

    </div>
  `;
}