import { loadBlog } from "./blogLoader.js";

export async function renderBlogs() {
  const res = await fetch("./data/blogs.json");
  const blogs = await res.json();

  const section = document.getElementById("blogs");

  let html = `
    <div class="container">
      <h2 class="section-title">
        Blogs
      </h2>

      <div class="blog-list">
  `;

  blogs.forEach(blog => {
    html += `
      <div class="blog-card fade-in" data-id="${blog.id}">
        <h3>${blog.title}</h3>
        <p class="blog-meta">${blog.date}</p>
        <p class="blog-summary">${blog.summary}</p>
        <button class="read-more" data-id="${blog.id}">
          Read →
        </button>
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

  section.querySelectorAll(".read-more").forEach(btn => {
    btn.addEventListener("click", () => {
      loadBlog(btn.dataset.id);
    });
  });
}
