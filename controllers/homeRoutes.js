const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Render the home page
router.get("/", async (req, res) => {
  try {
    // Fetch all posts sorted by latest first and include user and comment details
    const allPosts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
        },
      ],
    });
    const posts = allPosts.map((post) => post.get({ plain: true }));
    // Render the home page with the fetched posts
    res.render("home", {
      pageTitle: "Home",
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log("Error fetching posts:", err);
    res.status(500).json(err);
  }
});

// Render the login page
router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login / Signup" });
});

router.get("/post", async (req, res) => {
  res.render("post", { pageTitle: "post" });
});

// Logout logic
router.get("/logout", (req, res) => {
  // Destroy the session and remove the req.session object
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // Redirect to home page or login page after successfully logging out
      res.redirect("/");
    }
  });
});

// Route to display the dashboard page with all posts of the logged-in user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Get all posts of the logged-in user
    const postData = await Post.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      pageTitle: "Dashboard",
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log("Error fetching posts:", err);
    res.status(500).json(err);
  }
});

// Fetch and render a single post
router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this ID" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("post", {
      post,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log("Error fetching post:", err);
    res.status(500).json(err);
  }
});
module.exports = router;
