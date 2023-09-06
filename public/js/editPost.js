document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("Document Ready");
  }

  // Function to populate the form with existing post details
  const populateForm = async (id) => {
    const response = await fetch(`/api/posts/${id}`);
    if (response.ok) {
      const postData = await response.json();
      document.querySelector("#new-post-title").value = postData.title;
      document.querySelector("#new-post-content").value = postData.content;
    } else {
      alert("Error retrieving post data");
    }
  };

  // Function for updating post information
  const handleEditPost = async (event) => {
    event.preventDefault();

    const id = document.querySelector("#save-btn").getAttribute("data-id");
    const title = document.querySelector("#new-post-title").value.trim();
    const content = document.querySelector("#new-post-content").value.trim();

    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Error updating post");
      }
    }
  };

  // Attaching event listener to the "Commit Changes" button
  document.querySelector("#save-btn").addEventListener("click", handleEditPost);

  // Event listener to toggle edit form
  const editButton = document.querySelector(".edit-button");
  const editFormContainer = document.getElementById("edit-form-container");

  if (editButton && editFormContainer) {
    editButton.addEventListener("click", () => {
      editFormContainer.style.display =
        editFormContainer.style.display === "none" ||
        editFormContainer.style.display === ""
          ? "block"
          : "none";
    });
  }

  // Populate the form as the page loads
  const postId = document.querySelector("#save-btn").getAttribute("data-id");
  populateForm(postId);
});
