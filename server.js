require("dotenv").config();
const express = require("express");
const session = require("express-session");
const chalk = require("chalk");
const exphbs = require("express-handlebars"); // Import express-handlebars
const path = require("path"); // Node.js built-in path module
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Setup for Handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main", // This is the default layout (main.handlebars)
    layoutsDir: path.join(__dirname, "views/layouts"), // Directory where layout templates are located
    partialsDir: path.join(__dirname, "views/partials"), // Directory where partial templates are located
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Access the session as req.session
app.get("/", (req, res, next) => {
  if (req.session.views) {
    req.session.views++;
    res.render("home", { title: "Home Page", views: req.session.views }); // Render using Handlebars
  } else {
    req.session.views = 1;
    res.render("home", { title: "Home Page", views: 1 }); // Render using Handlebars
  }
});

// Use the routes defined in controllers
app.use(routes);

app.listen(PORT, () => {
  console.log(chalk.blue.bgWhite(`Server running on port ${PORT}`));
});
