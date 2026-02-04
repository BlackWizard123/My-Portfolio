import { openModal } from "./modal.js";

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

  // for (const category in skillsData) {
  //   html += `
  //     <div class="skill-card fade-in">
  //       <h3>${category}</h3>
  //       <ul>
  //         ${skillsData[category]
  //           .map(skill => `<li>${skill}</li>`)
  //           .join("")}
  //       </ul>
  //     </div>
  //   `;
  // }

  for (const category in skillsData) {
    html += `
      <div class="skill-card fade-in">
        <h3>${category}</h3>
        <ul>
          ${skillsData[category]
            .map(skillObj => `
              <li>
                <strong>${skillObj.name}</strong> 
                <span class="skill-level-badge">${skillObj.level}</span>
              </li>
            `)
            .join("")}
        </ul>
        <p class="project-hint">Click to view details</p>
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

  skillsSection.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.querySelector("h3").innerText;
      const skills = skillsData[category];

      openModal(buildSkillsModal(category, skills));
    });
  });
}

function buildSkillsModal(category, skills) {
  return `
    <div class="skills-modal">

      <h2 class="skills-modal-title">${category}</h2>
      <div class="skills-modal-grid">
        ${skills.map(skill => `
          <div class="skills-modal-card">

            <!-- Skill Name -->
            <h3 class="skills-modal-skill-name">
              ${skill.name}
            </h3>

            <!-- Meta bubbles -->
            <div class="skills-modal-meta">
              ${skill.category ? `<span class="skill-meta-pill purple">${skill.category}</span>` : ""}
              ${skill.level ? `<span class="skill-meta-pill purple">${skill.level}</span>` : ""}
            </div>

            <!-- Details -->
            ${skill.details ? `
              <div class="skills-modal-section">
                <h4>What I’m well-versed in</h4>
                <ul>
                  ${skill.details.map(d => `<li>${d}</li>`).join("")}
                </ul>
              </div>
            ` : ""}

            <!-- Tools -->
            ${skill.tools ? `
              <div class="skills-modal-section">
                <h4>Tools & Frameworks</h4>
                <div class="modal-tags blue">
                  ${skill.tools.map(t => `<span>${t}</span>`).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Used In -->
            ${skill.usedIn ? `
              <div class="skills-modal-section">
                <h4>Used In</h4>
                <p class="skills-modal-used">
                  ${skill.usedIn.join("   |   ")}
                </p>
              </div>
            ` : ""}

          </div>
        `).join("")}
      </div>

    </div>
  `;
}

// function buildSkillsModal(category, skills) {
//   return `
//     <div class="skills-modal">

//       <h2 class="skills-modal-title">${category}</h2>

//       ${skills.map(skill => `
//         <div class="skills-modal-card">

//           <div class="skills-modal-header">
//             <h3>${skill.name}</h3>
//             ${skill.level ? `<span class="skill-level-badge">${skill.level}</span>` : ""}
//           </div>

//           ${skill.details ? `
//             <ul class="skills-modal-details">
//               ${skill.details.map(d => `<li>${d}</li>`).join("")}
//             </ul>
//           ` : ""}

//           ${skill.tools ? `
//             <div class="modal-tags">
//               ${skill.tools.map(t => `<span>${t}</span>`).join("")}
//             </div>
//           ` : ""}

//           ${skill.usedIn ? `
//             <p class="skills-modal-used">
//               <strong>Used in:</strong> ${skill.usedIn.join(", ")}
//             </p>
//           ` : ""}

//         </div>
//       `).join("")}

//     </div>
//   `;
// }

// function buildSkillsModal(category, skills) {
//   return `
//     <h2>${category}</h2>

//     ${skills.map(skill => `
//       <div class="modal-skill-block">
//         <h3>
//           ${skill.name}
//           ${skill.level ? `<span class="skill-level-badge">${skill.level}</span>` : ""}
//         </h3>
//       </div>
//     `).join("")}
//   `;
// }


// import { openModal } from "./modal.js";

// export async function renderSkills() {
//   const res = await fetch("./data/skills.json");
//   const skillsData = await res.json();

//   const section = document.getElementById("skills");

//   let html = `
//     <div class="container">
//       <div class="section-box">
//         <h2 class="section-title">Skills</h2>
//         <div class="skills-list">
//   `;

//   Object.keys(skillsData).forEach((category) => {
//     html += `
//       <div class="skill-category fade-in" data-category="${category}">
//         ${category}
//       </div>
//     `;
//   });

//   html += `
//         </div>
//       </div>
//     </div>
//   `;

//   section.innerHTML = html;

//   // Attach click handlers
//   section.querySelectorAll(".skill-category").forEach(el => {
//     el.addEventListener("click", () => {
//       const category = el.dataset.category;
//       openModal(buildCategoryModal(category, skillsData[category]));
//     });
//   });
// }

// function buildCategoryModal(category, skills) {
//   return `
//     <h2>${category}</h2>

//     ${skills.map(skill => `
//       <div class="skill-detail">
//         <h3>${skill.name}
//           ${skill.level ? `<span class="skill-level">${skill.level}</span>` : ""}
//         </h3>

//         ${skill.details ? `
//           <ul>
//             ${skill.details.map(d => `<li>${d}</li>`).join("")}
//           </ul>
//         ` : ""}

//         ${skill.tools ? `
//           <div class="modal-tags">
//             ${skill.tools.map(t => `<span>${t}</span>`).join("")}
//           </div>
//         ` : ""}

//         ${skill.usedIn ? `
//           <p class="skill-used">
//             <strong>Used in:</strong> ${skill.usedIn.join(", ")}
//           </p>
//         ` : ""}
//       </div>
//     `).join("<hr />")}
//   `;
// }
