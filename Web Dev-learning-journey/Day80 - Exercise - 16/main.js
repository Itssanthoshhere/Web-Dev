
// server.js

// =======================
// IMPORTS
// =======================

// INFO: Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const app = express();
const port = 3000;

// =======================
// DATABASE CONNECTION
// =======================

// INFO: Connecting to MongoDB at 'company' database
mongoose.connect("mongodb://localhost:27017/company");

// =======================
// VIEW ENGINE SETUP
// =======================

// NOTE: Setting EJS as the templating engine
app.set("view engine", "ejs");

// =======================
// UTILITY FUNCTIONS
// =======================

// NOTE: Function to return a random item from an array
const getRandom = (arr) => {
    let randomNumber = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomNumber];
};

// =======================
// ROUTES
// =======================

// INFO: Root route to render index.ejs
app.get("/", (req, res) => {
    res.render('index', { foo: 'FOO' });
});

// INFO: Generate and store random employee data
app.get("/generate", async (req, res) => {

    // FIXME: This will delete all existing employee records
    await Employee.deleteMany({});

    // NOTE: Sample data arrays
    let randomNames = ["John", "Jane", "Alice", "Bob", "Charlie"];
    let randomLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
    let randomCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

    // TODO: Loop to create 10 random employee records
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000), // NOTE: Random salary under 22000
            language: getRandom(randomLanguages),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false, // NOTE: Random boolean for manager status
        });
        console.log(e); // INFO: Log created employee
    }

    res.render('index', { foo: 'FOO' });
});

// =======================
// SERVER START
// =======================

app.listen(port, () => {
    // INFO: Start server on defined port
    console.log(`Example app listening on port ${port}`);
});
