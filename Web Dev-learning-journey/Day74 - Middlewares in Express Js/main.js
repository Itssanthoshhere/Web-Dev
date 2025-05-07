
// NOTE: Import required modules
const express = require("express");
const fs = require("fs");
const blogRouter = require("./routes/blog.js"); // Import the blog router

// INFO: Initialize the Express application
const app = express();
const port = 3000;

// TODO: Serve static files from the 'public' folder
app.use(express.static("public"));

// TODO: Use the blog router for any route that starts with '/blog'
app.use('/blog', blogRouter);

// ----------------------
// MIDDLEWARE SECTION
// ----------------------

// NOTE: Middleware 1 - Logging request details
app.use((req, res, next) => {
    console.log(req.headers); // DEBUG: Log request headers

    // HACK: Add a custom property to the request object
    req.sandy = "I am sandy";

    // TODO: Log each request with timestamp and method to 'log.txt'
    // fs.writeFileSync("log.txt", `${Date.now()} is a ${req.method}`); // Overwrites file
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`); // Appends to file

    console.log(`${Date.now()} is a ${req.method}`); // INFO: Log request time & method

    // res.send("This is a response from the middleware function!"); // NOTE: Uncomment to short-circuit and return response directly from middleware

    next(); // Move to the next middleware or route handler
});

// NOTE: Middleware 2 - Another logger for demonstration
app.use((req, res, next) => {
    console.log("Another middleware function executed!"); // DEBUG: Secondary middleware
    next(); // Continue to route handler
});

// ----------------------
// ROUTES SECTION
// ----------------------

// NOTE: Root route
app.get("/", (req, res) => {
    res.send("Hello World!"); // Simple greeting
});

// NOTE: About page route - uses custom middleware property
app.get("/about", (req, res) => {
    res.send("About Page " + req.sandy); // Accessing req.sandy
});

// NOTE: Contact page route
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

// ----------------------
// SERVER LISTEN
// ----------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // INFO: Server started
});
