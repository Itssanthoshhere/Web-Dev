
// NOTE: Import the necessary modules
const express = require("express");
const blog = require("./routes/blog"); // Blog routes
const shop = require("./routes/shop"); // Shop routes

// INFO: Create an instance of the Express application
const app = express();
const port = 3000;

// NOTE: Serve static files from the 'public' folder
app.use(express.static("public"));

// TODO: Use the 'blog' and 'shop' routers for respective routes
app.use('/blog', blog); // Handle all routes starting with /blog using blog router
app.use('/shop', shop); // Handle all routes starting with /shop using shop router

// INFO: Define the home route for GET requests
app.get("/", (req, res) => {
    console.log("Hey, it's a GET request!"); // Log the incoming GET request
    res.send("Hello World!"); // Respond with a simple message
});

// NOTE: Define the home route for POST requests
app.post("/", (req, res) => {
    console.log("Hey, it's a POST request!"); // Log the incoming POST request
    res.send("Hello, POST request!"); // Respond with a POST-specific message
});

// HACK: Define the home route for PUT requests
app.put("/", (req, res) => {
    console.log("Hey, it's a PUT request!"); // Log the incoming PUT request
    res.send("Hello, PUT request!"); // Respond with a PUT-specific message
})
    // NOTE: Define the home route for DELETE requests
    .delete("/", (req, res) => {
        console.log("Hey, it's a DELETE request!"); // Log the incoming DELETE request
        res.send("Hello, DELETE request!"); // Respond with a DELETE-specific message
    });

// TODO: Define a route to serve the index.html file from the templates folder
app.get("/index", (req, res) => {
    console.log("Hey, it's the index page!"); // Log the request to the index page
    // INFO: Send the 'index.html' file located in the 'templates' folder
    res.sendFile("templates/index.html", { root: __dirname });
});

// NOTE: Define an API route that sends a JSON response
app.get("/api", (req, res) => {
    // INFO: Respond with a JSON object containing some data
    res.json({ a: 1, b: 2, c: 3, d: 4, name: "Sandy", age: 20 });
});

// INFO: Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Log that the app is running
});
