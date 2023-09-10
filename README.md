# Model-View-Controller (MVC) Challenge: Tech Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

## Table of Contents

- [User Story](#User-story)
- [How to Complete the Challenge](#how-to-complete-the-challenge)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## User Story

- **AS A** developer who writes about tech
- **I WANT** a CMS-style blog site
- **SO THAT I** can publish articles, blog posts, and my thoughts and opinions

## How to Complete the Challenge

- Visit the deployed application using the provided URL.
- Browse through the application to understand its functionalities.
- Refer to the GitHub repository for code details.

## Acceptance Criteria

- **GIVEN** a CMS-style blog site
- **WHEN I** visit the site for the first time
- **THEN I** am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- **WHEN I** click on the homepage option
- **THEN I** am taken to the homepage
- **WHEN I** click on any other links in the navigation
- **THEN I** am prompted to either sign up or sign in
- **WHEN I** choose to sign up
- **THEN I** am prompted to create a username and password
- **WHEN I** click on the sign-up button
- **THEN** my user credentials are saved and I am logged into the site
- **WHEN I** revisit the site at a later time and choose to sign in
- **THEN I** am prompted to enter my username and password
- **WHEN I** am signed in to the site
- **THEN I** see navigation links for the homepage, the dashboard, and the option to log out
- **WHEN I** click on the homepage option in the navigation
- **THEN I** am taken to the homepage and presented with existing blog posts that include the post title and the date created
- **WHEN I** click on an existing blog post
- **THEN I** am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- **WHEN I** enter a comment and click on the submit button while signed in
- **THEN** the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- **WHEN I** click on the dashboard option in the navigation
- **THEN I** am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- **WHEN I** click on the button to add a new blog post
- **THEN I** am prompted to enter both a title and contents for my blog post
- **WHEN I** click on the button to create a new blog post
- **THEN** the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- **WHEN I** click on one of my existing posts in the dashboard
- **THEN I** am able to delete or update my post and taken back to an updated dashboard
- **WHEN I** click on the logout option in the navigation
- **THEN I** am signed out of the site
- **WHEN I** am idle on the site for more than a set time
- **THEN I** am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Mock Up

![Mock up of the website](/public/images/Web%20capture_10-9-2023_6520_mvc-tech-blog-0-83f16a4a3486.herokuapp.com.jpeg)
![Mock up of the website](/public/images/Web%20capture_10-9-2023_64744_mvc-tech-blog-0-83f16a4a3486.herokuapp.com.jpeg)
![Mock up of the website](/public/images/Web%20capture_10-9-2023_64852_mvc-tech-blog-0-83f16a4a3486.herokuapp.com.jpeg)

## Deployment

- **Heroku**: [MVC-Tech-Blog on Heroku](https://mvc-tech-blog-0-83f16a4a3486.herokuapp.com/)
- **GitHub Repo**: [MVC-Tech-Blog Repository](https://github.com/xkolsha/Model-View-Controller-MVC-Tech-Blog)

## Credits

- [`Professional README Guide`](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [`Challenge description`](https://courses.bootcampspot.com)
- [`Deploy with Heroku and MySQL`](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

### Technologies Used

- [`Node.js`](https://nodejs.org/)
- [`Express`](https://www.npmjs.com/package/express)
- [`MySQL2`](https://www.npmjs.com/package/mysql2)
- [`Sequelize`](https://www.npmjs.com/package/sequelize)
- [`bcrypt`](https://www.npmjs.com/package/bcrypt)
- [`chalk`](https://www.npmjs.com/package/chalk)
- [`express-session`](https://www.npmjs.com/package/express-session)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
- [`express-handlebars`](https://www.npmjs.com/package/express-handlebars)
- [`connect-session-sequelize`](https://www.npmjs.com/package/connect-session-sequelize)

## License

MIT License

Copyright (c) 2023 [`Aviad Kohn`](https://github.com/xkolsha)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/license/xkolsha/unbModule1Challenge?color=%238F83ED)
