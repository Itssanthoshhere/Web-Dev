// https://www.npmjs.com/package/mongodb

// server.js

// Importing necessary modules
import mongoose from 'mongoose';
import express from 'express';
import { Todo } from "./models/Todo.js"; // Importing Todo model

// Connecting to MongoDB
let conn = await mongoose.connect("mongodb://localhost:27017/todo");

// Creating an Express app
const app = express();
const port = 3000;

// Route to create and save a new Todo item
app.get('/', (req, res) => {
    // Creating a new Todo object
    const todo = new Todo({
        // title: 'Learn Mongoose',
        desc: 'Learn how to use Mongoose with MongoDB',
        isDone: false,
        days: Math.floor(Math.random() * 45 + 5 * Math.random())
    });

    // Saving the Todo object to MongoDB
    todo.save();

    // Sending a response
    res.send('Hello World!');
});


app.get('/a', async (req, res) => {
    // Fetching all Todo items from MongoDB
    let todo = await Todo.findOne({});
    console.log(todo);
    res.json({title: todo.title, desc: todo.desc});
});

// Starting the Express server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

