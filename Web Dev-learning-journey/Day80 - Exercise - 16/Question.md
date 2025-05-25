# Exercise - 16 | Dummy Data Generator

## Problem Statement:
    Generate a dummy data file in this format in a collection called employees in a db called company:

    {
        "employees": 
            {
                "name": "Sandy",
                "language": "Python",
                "salary": 500000,
                "City": "New York",
                isManager: true,
            },
    }

    Generate 10 such records when a button called generate data is clicked!

    Create a an Express app with mongoose to achieve this. Every time the button is clicked, you should clear the existing data in the collection.
