const express = require('express');
const router = express.Router();

// Define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page');
});

// Define the about page route
router.get('/about', (req, res) => {
    res.send('About this blog');
});

router.get('/blogpost/:slug', (req, res) => {
    res.send(`Fetch the Blog post for ${req.params.slug}`);
});

module.exports = router;
