const express = require("express");
const router = express.Router();

// Define the home page route
router.get("/", (req, res) => {
    res.send("Shop home page");
});

// Define the about page route
router.get("/about", (req, res) => {
    res.send("About this shop");
});

module.exports = router;