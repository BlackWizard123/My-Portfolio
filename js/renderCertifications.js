import { openModal } from "./modal.js";

export async function renderCertifications() {
  const res = await fetch("./data/certifications.json");
  const certs = await res.json();

  const section = document.getElementById("certifications");

  let html = `
    <div class="container">
      <h2 class="section-title">
        Certifications
      </h2>

      <div class="cert-grid">
  `;

  certs.forEach(cert => {
    html += `
      <div class="cert-card fade-in">
        <img src="${cert.badge}" alt="${cert.title}" />
        <div>
          <h3>${cert.title}</h3>
          <p class="cert-meta">
            ${cert.issuer} • ${cert.year}
          </p>
          <p class="project-hint">Click to view details</p>
        </div>
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
  
    section.querySelectorAll(".cert-card").forEach((card, index) => {
      card.addEventListener("click", () => {
        openModal(buildCertificationModal(certs[index]));
      });
    });
}

function buildCertificationModal(cert) {
  console.log(cert)
  return `
    <div class="cert-modal">

      <h2 class="cert-title">${cert.title}</h2>

      ${cert.provider ? `
        <p class="cert-provider">
          <strong>${cert.issuer}</strong>
          ${cert.providerAbout ? ` – ${cert.providerAbout}` : ""}
        </p>
      ` : ""}

      <!-- Meta info -->
      <div class="cert-meta-modal">
        ${cert.certificateId ? `<span class="cert-meta-pill">ID: ${cert.certificateId}</span>` : ""}
        ${cert.issuedDate ? `<span class="cert-meta-pill">Issued: ${cert.issuedDate}</span>` : ""}
        ${cert.expiryDate ? `<span class="cert-meta-pill">Expires: ${cert.expiryDate}</span>` : ""}
      </div>

      <!-- Certificate image -->
      ${cert.image ? `
        <div class="cert-image">
          <img src="${cert.image}" alt="${cert.name}" />
        </div>
      ` : ""}

      <!-- About -->
      ${cert.about ? `
        <div class="cert-section">
          <h4>About this certification</h4>
          <p>${cert.about}</p>
        </div>
      ` : ""}

      <!-- Skillset -->
      ${cert.skillset ? `
        <div class="cert-section">
          <h4>Skillset validated</h4>
          <div class="modal-tags blue">
            ${cert.skillset.map(s => `<span>${s}</span>`).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Verification -->
      ${cert.certificateUrl ? `
        <a
          href="${cert.certificateUrl}"
          target="_blank"
          class="cert-verify-btn"
        >
          Verify Certificate →
        </a>
      ` : ""}

    </div>
  `;
}
