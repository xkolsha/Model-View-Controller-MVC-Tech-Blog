const sequelize = require("../config/connection");
const seedUsers = require("./seedUsers");
const seedPosts = require("./seedPosts");
const seedComments = require("./seedComments");
const chalk = require("chalk");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.green("----- DATABASE SYNCED -----"));

  await seedUsers();
  console.log(chalk.blue("----- USERS SEEDED -----"));

  await seedPosts();
  console.log(chalk.yellow("----- POSTS SEEDED -----"));

  await seedComments();
  console.log(chalk.magenta("----- COMMENTS SEEDED -----"));

  process.exit(0);
};

seedAll();
