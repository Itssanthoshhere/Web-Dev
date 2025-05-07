
// NOTE: Import the Express module and create a router instance
const express = require('express');
const router = express.Router();

// TODO: Define the home page route for the blog
router.get('/', (req, res) => {
    // INFO: Send a simple message for the home page
    res.send('Blog home page');
});

// NOTE: Define the about page route for the blog
router.get('/about', (req, res) => {
    // INFO: Send information about the blog
    res.send('About this blog');
});

// HACK: Define a dynamic route to fetch individual blog posts by slug
// INFO: The 'slug' parameter will capture the unique part of the URL
router.get('/blogpost/:slug', (req, res) => {
    // NOTE: Use req.params to access the dynamic slug part of the URL
    res.send(`Fetch the Blog post for ${req.params.slug}`);
});

// TODO: Export the router to be used in other parts of the application
module.exports = router;
