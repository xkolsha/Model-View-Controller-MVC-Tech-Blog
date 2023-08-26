const router = require("express").Router();
const { User } = require("../../models");

// GET route to fetch all users
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all users.");
    const userData = await User.findAll({
      attributes: { exclude: ["password"] }, // Exclude password from returned attributes
    });
    console.log("Users fetched:", userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log("Error fetching users:", err);
    res.status(500).json(err);
  }
});

// POST route to create a new user
router.post("/", async (req, res) => {
  try {
    console.log("Creating a new user.");
    const userData = await User.create(req.body);
    console.log("User created:", userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log("Error while creating user:", err);
    res.status(400).json(err);
  }
});

// POST route to log in a user
router.post("/login", async (req, res) => {
  try {
    console.log("Logging in.");
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("User found:", userData);
    if (!userData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    console.log("Password valid:", validPassword);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log("Error while logging in:", err);
    res.status(400).json(err);
  }
});

// POST route to log out a user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
