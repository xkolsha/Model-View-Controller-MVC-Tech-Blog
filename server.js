require("dotenv").config();
const express = require("express");
const session = require("express-session");
const chalk = require("chalk");
const routes = require("./controllers"); // Make sure the path is correct

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

// Access the session as req.session
app.get("/", (req, res, next) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

// Use the routes defined in controllers
app.use(routes);

app.listen(PORT, () => {
  console.log(chalk.blue.bgWhite(`Server running on port ${PORT}`));
});
