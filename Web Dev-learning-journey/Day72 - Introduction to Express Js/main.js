// NOTE: Import the Express module
const express = require("express");

// NOTE: Create an Express app
const app = express();
const port = 3000;

// TODO: Serve static files from the "public" folder
app.use(express.static("public")); // e.g., public/index.html, public/style.css

// NOTE: Define routes using app.get(path, handler) or app.post or app.put or app.delete
// NOTE: Define a route for the root URL ("/") and send a response

// NOTE: Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// NOTE: About page route
app.get("/about", (req, res) => {
  res.send("About Page!");
});

// NOTE: Contact page route
app.get("/contact", (req, res) => {
  res.send("Contact Page!");
});

// NOTE: Blog main page
app.get("/blog", (req, res) => {
  res.send("Blog Page!");
});

/* 
// IDEA: Specific blog routes (not scalable if many blogs)
app.get("/blog/intro-to-express", (req, res) => {
  // logic to fetch intro to express data from database
  res.send("Intro to Express Page!"); 
});

app.get("/blog/intro-to-python", (req, res) => {
  // logic to fetch intro to python data from database
  res.send("Intro to Python Page!"); 
});
*/

// NOTE: Dynamic blog route using URL parameter (slug)
app.get("/blog/:slug", (req, res) => {
  // INFO: Access slug using req.params.slug
  // INFO: Access query string like ?mode=dark&region=in via req.query
  // For URL: http://localhost:3000/blog/intro-to-express?mode=dark&region=i
  console.log(req.params); // { slug: 'intro-to-express' }
  console.log(req.query);  // { mode: 'dark', region: 'in' }

  res.send(`Welcome to ${req.params.slug} page!`);
});

// NOTE: Dynamic route with two parameters
app.get("/blog/:slug/:secondSlug", (req, res) => {
  const slug = req.params.slug;
  const secondSlug = req.params.secondSlug;

  // INFO: Useful for nested blog pages or categories
  res.send(`Welcome to ${slug} and ${secondSlug} page!`);
});

// NOTE: Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
