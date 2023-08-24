const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3001;

// session middleware
app.use(
  session({
    secret: "mySecret",
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
