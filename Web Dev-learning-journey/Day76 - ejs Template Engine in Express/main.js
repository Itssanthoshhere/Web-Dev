// NOTE: Importing required modules
const express = require("express");
const app = express();
const port = 3000;

// -----------------------------
// EJS TEMPLATE ENGINE SETUP
// -----------------------------

// TODO: Set 'ejs' as the view engine
// INFO: This tells Express to look for .ejs files in the 'views' folder
app.set("view engine", "ejs");

// -----------------------------
// ROUTES
// -----------------------------

// ROUTE: Home Page
app.get("/", (req, res) => {
    // Data to send to EJS template
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = ["Hey", 54, 65];

    // Renders 'views/index.ejs' with provided data
    res.render("index", { siteName: siteName, searchText: searchText, arr: arr });
});

// ROUTE: Blog Post Page with dynamic slug
app.get("/blog/:slug", (req, res) => {
    // Example blog data
    let blogTitle = "Adidas why and when?";
    let blogContent = "It's a great brand and its products are amazing.";

    // Renders 'views/blogpost.ejs' with dynamic content
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent });
});

// -----------------------------
// SERVER LISTENING
// -----------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
