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
        document.querySelector("#post-title").innerText = title;
        document.querySelector("#post-content").innerText = content;
        window.location.href = window.location.href;
      } else {
        alert("Error updating post");
      }
    }
  };

  // Attaching event listener to the "Commit Changes" button
  const saveBtn = document.querySelector("#save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", handleEditPost);
  } else {
    console.warn("#save-btn not found");
  }

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

// Function for deleting post and its comments
const handleDeletePost = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#delete-btn").getAttribute("data-id");

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Post and its comments deleted");
    window.location.href = "/dashboard";
  } else {
    alert("Error deleting post");
  }
};

const deleteBtn = document.querySelector("#delete-btn");
if (deleteBtn) {
  deleteBtn.addEventListener("click", handleDeletePost);
} else {
  console.warn("#delete-btn not found");
}
