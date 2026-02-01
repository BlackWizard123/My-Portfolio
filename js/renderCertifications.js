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
}
