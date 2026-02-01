export async function renderHero() {
  const res = await fetch("./data/profile.json");
  const profile = await res.json();

  const hero = document.getElementById("hero");

  hero.innerHTML = `
    <div class="container">
  <div class="hero-grid fade-in">

    <div class="hero-text">
      <h1 class="hero-title">
        Hi, I’m ${profile.name}
      </h1>

      <p class="hero-role">
        ${profile.role}
      </p>

      <p class="hero-headline">
        ${profile.headline}
      </p>
    </div>

    <div class="hero-photo">
      <img src="assets/profile/me.jpg" alt="Hariharan C" />
    </div>

  </div>
</div>

  `;

  // 🔥 Attach animation AFTER render
  const el = hero.querySelector(".fade-in");
  el.classList.add("visible");
}
