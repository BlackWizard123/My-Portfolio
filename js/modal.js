export function openModal(htmlContent) {
  const modal = document.getElementById("blogModal");
  const content = document.getElementById("modalBlogContent");
  const closeBtn = document.getElementById("closeModal");

  content.innerHTML = htmlContent;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  function close() {
    modal.classList.add("hidden");
    content.innerHTML = "";
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", escHandler);
  }

  function escHandler(e) {
    if (e.key === "Escape") close();
  }

  closeBtn.onclick = close;
  modal.querySelector(".modal-overlay").onclick = close;
  document.addEventListener("keydown", escHandler);
}
