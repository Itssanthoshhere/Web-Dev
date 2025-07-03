// models/Todo.js

// =======================
// IMPORTS
// =======================

// INFO: Importing Mongoose to define schema and model
import mongoose from 'mongoose';

// =======================
// SCHEMA DEFINITION
// =======================

// NOTE: Defining the Todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'Hey' // NOTE: Default value if none provided
    },
    desc: String,      // INFO: Description of the Todo task
    isDone: Boolean,   // INFO: Status - true if task is completed
    days: Number       // INFO: Estimated or actual duration in days
});

// =======================
// MODEL EXPORT
// =======================

// INFO: Creating and exporting the Todo model based on the schema
export const Todo = mongoose.model('Todo', todoSchema);
// INFO: The model is used to interact with the MongoDB database
// INFO: It allows us to create, read, update, and delete Todo items
// INFO: The model name 'Todo' is used to create a collection named 'todos' in the database
