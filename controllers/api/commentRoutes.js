const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// POST route to create a new comment
router.post("/", async (req, res) => {
  try {
    console.log("Creating a new comment.");
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("Comment created:", newComment);
    res.status(200).json(newComment);
  } catch (err) {
    console.log("Error while creating comment:", err);
    res.status(400).json(err);
  }
});

// GET route to fetch all comments
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all comments.");
    const allComments = await Comment.findAll();
    console.log("All comments fetched:", allComments);
    res.status(200).json(allComments);
  } catch (err) {
    console.log("Error while fetching comments:", err);
    res.status(500).json(err);
  }
});

// PUT route to update a comment by ID
router.put("/:id", async (req, res) => {
  try {
    console.log(`Updating comment with ID ${req.params.id}.`);
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("Comment updated:", updatedComment);
    res.status(200).json(updatedComment);
  } catch (err) {
    console.log("Error while updating comment:", err);
    res.status(400).json(err);
  }
});

// DELETE route to delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Deleting comment with ID ${req.params.id}.`);
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log("Comment deleted:", deletedComment);
    res.status(200).json(deletedComment);
  } catch (err) {
    console.log("Error while deleting comment:", err);
    res.status(400).json(err);
  }
});

module.exports = router;
