// Import the 'createServer' method from Node.js's built-in 'http' module
const { createServer } = require('node:http');

// Define the hostname and port where the server will run
const hostname = '127.0.0.1'; // Localhost
const port = 3000;            // You can change this to any available port

// Create the HTTP server
const server = createServer((req, res) => {
  // Set the status code to 200 (OK)
  res.statusCode = 200;

  // Set the content type of the response to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body as 'Hello World'
  res.end('Hello World');
});

// Start the server and have it listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Log a message when the server is successfully running
  console.log(`Server running at http://${hostname}:${port}/`);
});
