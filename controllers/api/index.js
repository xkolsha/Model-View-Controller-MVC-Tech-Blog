const router = require("express").Router();

// Import user API routes
const userRoutes = require("./user-routes");

// Import post API routes
const postRoutes = require("./post-routes");

// Import comment API routes
const commentRoutes = require("./comment-routes");

// Define user API routes
router.use("/users", userRoutes);

// Define post API routes
router.use("/posts", postRoutes);

// Define comment API routes
router.use("/comments", commentRoutes);

module.exports = router;
