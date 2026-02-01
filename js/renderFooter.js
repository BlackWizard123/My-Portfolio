export async function renderFooter() {
  const res = await fetch("./data/contact.json");
  const data = await res.json();

  const footer = document.getElementById("footer");

  footer.innerHTML = `
    <div class="container">
      <div class="contact-box">

        <h2 class="section-title-box">Let’s Connect</h2>
        <p class="contact-subtitle">
          Open to discussions, opportunities, and collaborations
        </p>

        <div class="contact-grid">
          ${data.links.map(link => `
            <a
              href="${link.url}"
              target="_blank"
              class="contact-pill"
            >
              ${link.name}
            </a>
          `).join("")}
        </div>

        <div class="contact-email">
        <a href="mailto:${data.email}">
            ${data.email}
        </a>

        ${data.secondaryEmail ? `
            <div class="contact-secondary">
            <a href="mailto:${data.secondaryEmail}">
                ${data.secondaryEmail}
            </a>
            </div>
        ` : ""}

        ${data.phone ? `
            <div class="contact-secondary">
            <a href="tel:${data.phone.replace(/\s+/g, "")}">
                ${data.phone}
            </a>
            </div>
        ` : ""}
        </div>

      </div>
    </div>
  `;
}
