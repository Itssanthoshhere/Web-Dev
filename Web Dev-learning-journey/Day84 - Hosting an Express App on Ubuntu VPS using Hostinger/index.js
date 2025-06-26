// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Define a GET route for the root URL ("/")
app.get('/', (req, res) => {
    // Send a response when someone visits http://localhost:3000/
    res.send('Hello World! This is my Express app hosted on a VPS using Hostinger.');
});

// Start the server and listen on the defined port
app.listen(port, () => {
    // Log a message once the server is successfully running
    console.log(`Server is running at http://localhost:${port}`);
});
