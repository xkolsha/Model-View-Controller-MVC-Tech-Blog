document.addEventListener("DOMContentLoaded", function () {
  const addCommentForm = document.querySelector("#add-comment-form");
  const postElement = document.querySelector("#add-comment-form"); // Fetch post element
  console.log("Post Element:", postElement); // Troubleshooting log

  if (addCommentForm) {
    addCommentForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const commentText = document.querySelector("#comment_text").value.trim();
      const post_id = postElement
        ? postElement.getAttribute("data-post-id")
        : null; // Fetch post_id dynamically
      const user_id = "user_id"; // Fetch this from the session or another source

      // Troubleshooting logs
      console.log("Comment Text:", commentText);
      console.log("Post ID:", post_id);
      console.log("User ID:", user_id);

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
