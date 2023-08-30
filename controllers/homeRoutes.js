const router = require("express").Router();
const { User, Post, Comment } = require("../models");

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
    res.render("home", { pageTitle: "Home", posts });
  } catch (err) {
    console.log("Error fetching posts:", err);
    res.status(500).json(err);
  }
});

// Render the login page
router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login / Signup" });
});

// Fetch and render user data if not logged in
router.get("/dashboard", async (req, res) => {
  if (req.session.logged_in) {
    try {
      // Fetch posts and comments for the logged-in user
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: [
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
      // Render the dashboard with fetched posts and comments
      res.render("dashboard", { posts });
    } catch (err) {
      console.log("Error fetching dashboard data:", err);
      res.status(500).json(err);
    }
  } else {
    res.render("login");
  }
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

module.exports = router;
