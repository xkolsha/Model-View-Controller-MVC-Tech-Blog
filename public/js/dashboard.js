// dashboard.js
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const newPostForm = document.querySelector("#new-post-form");

  newPostForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();
    const content = document
      .querySelector('textarea[name="content"]')
      .value.trim();

    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add post");
      }
    }
  });
});
