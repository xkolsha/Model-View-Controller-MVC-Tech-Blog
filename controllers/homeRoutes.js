const router = require("express").Router();
const { User } = require("../models");

// Render the home page
router.get("/", async (req, res) => {
  res.render("home", { pageTitle: "Home" });
});

// Render the login page
router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login / Signup" });
});

// Fetch and render user data if not logged in
router.get("/dashboard", async (req, res) => {
  if (req.session.logged_in) {
    res.render("dashboard");
  } else {
    res.render("login");
  }
});

// Fetch and render all users (if needed)
router.get("/all-users", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("user", { users });
  } catch (err) {
    console.log("Error fetching users:", err);
    res.status(500).json(err);
  }
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
