import { openModal } from "./modal.js";

let currentIndex = 1;
let momentsData = [];
let autoSlideInterval = null;
const SLIDE_DURATION = 7000; // 7 seconds
const FADE_DURATION = 150; // ms

export async function renderMoments() {
  const res = await fetch("./data/moments.json");
  momentsData = await res.json();

  renderMomentsView();
}

function renderMomentsView() {
  const section = document.getElementById("moments");

  const visible = getVisibleMoments();

  section.innerHTML = `
    <div class="container">
      <div class="section-box-moments">
        <h2 class="section-title">Moments</h2>

        <div class="moments-track">
          <div class="moments-inner" style="transform: translateX(${getTranslateX()}px)">
            ${visible.map((moment, idx) => `
              <div
                class="moment-card ${idx === 1 ? "active clickable" : ""}"
                ${idx === 1 ? `data-index="${currentIndex}"` : ""}
              >
                <img src="${moment.image}" alt="${moment.hashtag}" />
                ${idx === 1 ? `
                  <div class="moment-overlay">
                    <span>${moment.hashtag}</span>
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        </div>

        <div class="moments-timer">
          <div class="moments-timer-bar"></div>
        </div>

        <div class="moments-controls">
          <button id="prevMoment">‹ Prev</button>

          <span class="moments-index">
            ${currentIndex + 1} / ${momentsData.length}
          </span>

          <button id="nextMoment">Next ›</button>
        </div>

      </div>
    </div>
  `;

  attachMomentControls();
  startAutoSlide();
  attachMomentClick();
}

function getVisibleMoments() {
  const total = momentsData.length;
  return [
    momentsData[(currentIndex - 1 + total) % total],
    momentsData[currentIndex % total],
    momentsData[(currentIndex + 1) % total]
  ];
}

function attachMomentControls() {
  document.getElementById("prevMoment").onclick = () => {
    fadeAndRender(() => {
      currentIndex =
        (currentIndex - 1 + momentsData.length) % momentsData.length;
      renderMomentsView();
    });
  };

  document.getElementById("nextMoment").onclick = () => {
    fadeAndRender(() => {
      currentIndex =
        (currentIndex + 1) % momentsData.length;
      renderMomentsView();
    });
  };
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);

  autoSlideInterval = setInterval(() => {
    currentIndex =
    (currentIndex + 1) % momentsData.length;
    renderMomentsView();
  }, SLIDE_DURATION);
}

function attachMomentClick() {
  const activeCard = document.querySelector(".moment-card.active.clickable");
  if (!activeCard) return;

  activeCard.addEventListener("click", () => {
    const moment = momentsData[currentIndex];
    openModal(buildMomentModal(moment));
  });
}

function buildMomentModal(moment) {
  return `
    <div class="moment-modal">

      <img
        src="${moment.image}"
        alt="${moment.hashtag}"
        class="moment-modal-image"
      />

      <h2 class="moment-modal-hashtag">${moment.hashtag}</h2>

      <p class="moment-modal-description">
        ${moment.description}
      </p>

    </div>
  `;
}

function getTranslateX() {
  // Move inner track so center card is visually centered
  // Because we always render 3 cards, middle one stays centered
  return 0;
}

function fadeAndRender(updateFn) {
  const box = document.querySelector(".section-box-moments");

  box.classList.remove("visible");

  setTimeout(() => {
    updateFn();
    box.classList.add("visible");
  }, FADE_DURATION);
}