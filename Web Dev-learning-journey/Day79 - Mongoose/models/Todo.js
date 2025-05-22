// models/Todo.js

// Importing Mongoose
import mongoose from 'mongoose';

// Defining the Todo schema
const todoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: 'Hey'},
    desc: String,
    isDone: Boolean,
    days: Number,
});

// Creating and exporting the Todo model
export const Todo = mongoose.model('Todo', todoSchema);