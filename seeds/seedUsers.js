const { User } = require("../models");

const userData = [
  {
    username: "john_doe",
    password: "password123",
  },
  {
    username: "jane_doe",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
