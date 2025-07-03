
// https://www.npmjs.com/package/mongodb

// =======================
// IMPORTS
// =======================

// INFO: Importing required modules
import mongoose from 'mongoose';
import express from 'express';
import { Todo } from "./models/Todo.js"; // Importing Todo model

// =======================
// DATABASE CONNECTION
// =======================

// TODO: Connect to MongoDB (Ensure MongoDB server is running)
let conn = await mongoose.connect("mongodb://localhost:27017/todo");

// =======================
// EXPRESS SERVER SETUP
// =======================

// INFO: Creating an Express application
const app = express();
const port = 3000;

// =======================
// ROUTES
// =======================

// NOTE: Root route to create and save a new Todo item
app.get('/', (req, res) => {
    // INFO: Creating a new Todo object
    const todo = new Todo({
        // TODO: Add a title field if required
        // title: 'Learn Mongoose',
        desc: 'Learn how to use Mongoose with MongoDB',
        isDone: false,
        days: Math.floor(Math.random() * 45 + 5 * Math.random()) // Random number of days
    });

    // INFO: Saving the Todo to MongoDB
    todo.save();

    // INFO: Sending a simple response
    res.send('Hello World!');
});

// NOTE: Route to fetch one Todo from the database
app.get('/a', async (req, res) => {
    // INFO: Fetching one Todo item from the collection
    let todo = await Todo.findOne({});
    console.log(todo);

    // INFO: Returning title and description as JSON
    res.json({ title: todo.title, desc: todo.desc });
});

// =======================
// SERVER START
// =======================

// INFO: Start the server on port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
