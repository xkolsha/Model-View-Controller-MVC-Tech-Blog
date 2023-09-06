document.addEventListener("DOMContentLoaded", function () {
  const addCommentForm = document.querySelector("#add-comment-form");

  if (addCommentForm) {
    addCommentForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const commentText = document.querySelector("#comment_text").value.trim();
      const post_id = addCommentForm
        ? addCommentForm.getAttribute("data-post-id")
        : null;
      const user_id = "user_id";

      if (commentText && post_id && user_id) {
        const response = await fetch("/api/comments/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment_text: commentText,
            post_id: post_id,
            user_id: user_id,
          }),
        });

        if (response.ok) {
          location.reload();
        } else {
          alert("Failed to add comment");
        }
      }
    });
  }
});
