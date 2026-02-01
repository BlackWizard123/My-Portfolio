export async function renderLeetCode() {
  const res = await fetch("./data/leetcode.json");
  const data = await res.json();

  const section = document.getElementById("leetcode");
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-box leetcode-box fade-in">

        <div class="leetcode-left">
          <div class="leetcode-ring">
        <div class="leetcode-center">
            <div class="leetcode-count">${data.solved}+</div>
            <div class="leetcode-label">Solved</div>
        </div>
        </div>
        </div>

        <div class="leetcode-right">
          <h2 class="section-title-box">LeetCode Practice</h2>

          <div class="leetcode-marquee">
            <div class="marquee-track">
                ${data.topics.map(t => `<span class="topic-pill">${t}</span>`).join("")}
                ${data.topics.map(t => `<span class="topic-pill">${t}</span>`).join("")}
            </div>
        </div>

          <div class="leetcode-cta">
            <a
                href="${data.profile}"
                target="_blank"
                class="leetcode-link"
            >
                View LeetCode Profile →
            </a>
            </div>
        </div>

      </div>
    </div>
  `;

  section.querySelector(".fade-in")?.classList.add("visible");
}
