const { User } = require("../models");

const userData = [
  {
    username: "john_doe",
    password: "p@ssword123",
  },
  {
    username: "jane_doe",
    password: "p@ssword123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
