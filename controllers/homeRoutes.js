const router = require("express").Router();
const { User } = require("../models");

// Render the home page
router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

// Render the login page
router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login" });
});

// Fetch and render user data if not logged in
router.get("/user", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

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

module.exports = router;
