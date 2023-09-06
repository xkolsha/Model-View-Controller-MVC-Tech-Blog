const router = require("express").Router();

// Import API routes
const apiRoutes = require("./api");

// Import home routes
const homeRoutes = require("./homeRoutes");

// Define API routes
router.use("/api", apiRoutes);

// Define home routes
router.use("/", homeRoutes);

module.exports = router;
