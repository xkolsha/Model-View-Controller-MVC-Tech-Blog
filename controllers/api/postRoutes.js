const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// POST route to create a new post
router.post("/", async (req, res) => {
  try {
    console.log("Creating a new post.");
    console.log("Session User ID:", req.session.user_id); // Log the session user ID to debug
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("Post created:", newPost);
    res.status(200).json(newPost);
  } catch (err) {
    console.log("Error while creating post:", err);
    res.status(400).json(err);
  }
});

// GET route to fetch a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username"] }],
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to fetch all posts
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all posts.");
    const allPosts = await Post.findAll();
    console.log("All posts fetched:", allPosts);
    res.status(200).json(allPosts);
  } catch (err) {
    console.log("Error while fetching posts:", err);
    res.status(500).json(err);
  }
});

// PUT route to update a post by ID
router.put("/:id", async (req, res) => {
  try {
    console.log(`Updating post with ID ${req.params.id}.`);

    const originalPost = await Post.findByPk(req.params.id);

    if (!originalPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (originalPost.user_id !== req.session.user_id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to edit this post" });
    }

    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("Post updated:", updatedPost);
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log("Error while updating post:", err);
    res.status(400).json(err);
  }
});

// DELETE route to delete a post by ID
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Deleting post with ID ${req.params.id}.`);

    await Comment.destroy({
      where: {
        post_id: req.params.id,
      },
    });

    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (deletedPost === 0) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }

    console.log("Post and its comments deleted:", deletedPost);
    res.status(200).json(deletedPost);
  } catch (err) {
    console.log("Error while deleting post:", err);
    res.status(400).json(err);
  }
});

module.exports = router;
