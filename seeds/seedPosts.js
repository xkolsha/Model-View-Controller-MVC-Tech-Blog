const { Post } = require("../models");

const postData = [
  {
    title: "First Post",
    content: "This is the content for the first post!",
    user_id: 1,
  },
  {
    title: "Second Post",
    content: "This is the content for the second post!",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
