
// NOTE: Import Express and initialize the router
const express = require("express");
const router = express.Router();

// ---------------------------
// MIDDLEWARE FOR THIS ROUTER
// ---------------------------

// TODO: This middleware runs for all routes under this router
router.use((req, res, next) => {
    console.log('Time:', Date.now()); // INFO: Log the current timestamp
    next(); // Continue to the route handler
});

// ---------------------------
// ROUTES FOR /blog PREFIX
// ---------------------------

// NOTE: GET /blog/ - Blog home page
router.get('/', (req, res) => {
    res.send('Blog home page');
});

// NOTE: GET /blog/about - About the blog
router.get('/about', (req, res) => {
    res.send('About this blog');
});

// ---------------------------
// EXPORT ROUTER
// ---------------------------

// HACK: This allows the router to be used in another file like app.js
module.exports = router;
