
// NOTE: Import the Express module and create a router instance
const express = require("express");
const router = express.Router();

// TODO: Define the home page route for the shop
router.get("/", (req, res) => {
    // INFO: Send a simple message for the home page
    res.send("Shop home page");
});

// NOTE: Define the about page route for the shop
router.get("/about", (req, res) => {
    // INFO: Send information about the shop
    res.send("About this shop");
});

// TODO: Export the router to be used in other parts of the application
module.exports = router;
