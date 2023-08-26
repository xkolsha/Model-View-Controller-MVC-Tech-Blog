const router = require("express").Router();

// Import API routes
const apiRoutes = require("./api");

// Import home routes
const homeRoutes = require("./homeRoutes.js");

// Import dashboard routes
const dashboardRoutes = require("./dashboardRoutes.js");

// Define API routes
router.use("/api", apiRoutes);

// Define home routes
router.use("/", homeRoutes);

// Define dashboard routes
router.use("/dashboard", dashboardRoutes);

module.exports = router;
