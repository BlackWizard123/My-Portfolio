export async function renderHero() {
  const res = await fetch("./data/profile.json");
  const profile = await res.json();

  const hero = document.getElementById("hero");

  // Split role into parts for the typewriter — cycles if array, or splits on " & "
  const roles = Array.isArray(profile.role)
    ? profile.role
    : profile.role.split(" & ").map(r => r.trim());

  hero.innerHTML = `
    <div class="container">
      <div class="hero-grid fade-in">

        <div class="hero-text">

          <h1 class="hero-title">
            Hi, I'm ${profile.name}
          </h1>

          <!-- Animated role typewriter -->
          <p class="hero-role">
            <span class="hero-role-static"></span><span class="hero-role-cursor">|</span>
          </p>

          <p class="hero-headline">
            ${profile.headline}
          </p>

          <!-- About -->
          ${profile.about ? `
            <p class="hero-about">
              ${profile.about}
            </p>
          ` : ""}

          <!-- Location -->
          ${profile.location ? `
            <p class="hero-location">
              <span class="hero-location-icon">📍</span>
              ${profile.location}
            </p>
          ` : ""}

          <!-- Availability badge below location -->
          ${profile.available ? `
            <div class="hero-available">
              <span class="hero-available-dot"></span>
              Available for opportunities
            </div>
          ` : ""}

        </div>

        <div class="hero-photo">
          <img src="assets/profile/me.png" alt="${profile.name}" />
        </div>

      </div>
    </div>
  `;

  // Fade in
  hero.querySelector(".fade-in").classList.add("visible");

  // Typewriter for role
  const roleEl = hero.querySelector(".hero-role-static");
  let roleIndex = 0;
  let charIndex  = 0;
  let deleting   = false;

  const TYPING_SPEED = 65;
  const ERASE_SPEED  = 35;
  const PAUSE_AFTER  = 1800;
  const PAUSE_BEFORE = 400;

  function typeRole() {
    const current = roles[roleIndex];

    if (!deleting) {
      roleEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        if (roles.length === 1) return; // single — leave it typed
        deleting = true;
        setTimeout(typeRole, PAUSE_AFTER);
        return;
      }
    } else {
      roleEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting   = false;
        roleIndex  = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, PAUSE_BEFORE);
        return;
      }
    }

    setTimeout(typeRole, deleting ? ERASE_SPEED : TYPING_SPEED);
  }

  typeRole();
}