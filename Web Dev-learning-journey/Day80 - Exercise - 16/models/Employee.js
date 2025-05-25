// models/Employee.js

// =======================
// IMPORTS
// =======================

// INFO: Import mongoose for MongoDB operations
const mongoose = require("mongoose");

// =======================
// SCHEMA DEFINITION
// =======================

// NOTE: Define the structure of Employee documents
const employeeSchema = new mongoose.Schema({
    name: String,                // NOTE: Employee's name
    language: String,           // NOTE: Programming language proficiency
    salary: Number,             // NOTE: Employee's salary
    city: String,               // NOTE: City where the employee works
    isManager: Boolean,         // NOTE: Boolean flag for manager role
});

// =======================
// MODEL CREATION
// =======================

// INFO: Create the model from schema
const Employee = mongoose.model("Employee", employeeSchema);

// =======================
// EXPORTS
// =======================

// INFO: Export the Employee model for use in other files
module.exports = Employee;
