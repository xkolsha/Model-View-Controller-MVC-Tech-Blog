document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const newPostForm = document.querySelector("#new-post-form");

  if (newPostForm) {
    newPostForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const title = document.querySelector("#post-title").value.trim();
      const content = document.querySelector("#post-content").value.trim();

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
  } else {
    console.warn("#new-post-form not found");
  }
});
