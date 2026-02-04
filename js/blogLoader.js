export async function loadBlog(id) {
  const res = await fetch(`./blogs/${id}.md`);
  const md = await res.text();

  const modal = document.getElementById("blogModal");
  const content = document.getElementById("modalBlogContent");
  const closeBtn = document.getElementById("closeModal");

  content.innerHTML = marked.parse(md);

  modal.classList.remove("hidden");

  closeBtn.onclick = () => closeModal();
  modal.querySelector(".modal-overlay").onclick = () => closeModal();

  document.addEventListener("keydown", escHandler);

  function escHandler(e) {
    if (e.key === "Escape") closeModal();
  }

  function closeModal() {
    modal.classList.add("hidden");
    content.innerHTML = "";
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", escHandler);
  }
}
