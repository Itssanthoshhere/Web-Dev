// INFO: Use or create the 'CrudDb' database
use("CrudDb");

// INFO: View current DB (only visible in MongoDB shell, not Node.js)
db;

// TODO: Create a collection named 'courses'
db.createCollection("courses");

// TODO: Insert a single course
db.courses.insertOne({
    name: "Sandy's Web Development",
    price: 200,
    assignments: 12,
    projects: 3,
});

// TODO: Insert multiple courses
db.courses.insertMany([
    { name: "Python Masterclass", price: 0, assignments: 10, projects: 30 },
    { name: "JavaScript Basics", price: 0, assignments: 8, projects: 20 },
    { name: "C# for Beginners", price: 0, assignments: 15, projects: 40 },
    { name: "Web Development Fundamentals", price: 0, assignments: 12, projects: 35 },
    { name: "Java Programming Essentials", price: 0, assignments: 14, projects: 38 },
    { name: "ReactJS Crash Course", price: 0, assignments: 10, projects: 25 },
    { name: "SQL Simplified", price: 0, assignments: 12, projects: 30 },
    { name: "Responsive Web Design", price: 0, assignments: 10, projects: 28 },
    { name: "Node.js for Beginners", price: 0, assignments: 13, projects: 36 },
    { name: "Frontend Development with Vue.js", price: 0, assignments: 11, projects: 32 }
]);

// ========================
// READ Operations
// ========================

// NOTE: Find all courses with price 0
let freeCoursesCursor = db.courses.find({ price: 0 });
print("Courses with price 0:");
freeCoursesCursor.forEach(doc => printjson(doc));

// NOTE: Count number of courses with price 0
let count = db.courses.countDocuments({ price: 0 });
print("Count:", count);

// NOTE: Find a single course with price 0
let firstFreeCourse = db.courses.findOne({ price: 0 });
print("First course with price 0:");
printjson(firstFreeCourse);

// ========================
// UPDATE Operations
// ========================

// TODO: Update the first course with price 0 to price 100
db.courses.updateOne(
    { price: 0 },
    { $set: { price: 100 } }
);

// TODO: Update all remaining courses with price 0 to price 250
db.courses.updateMany(
    { price: 0 },
    { $set: { price: 250 } }
);

// ========================
// DELETE Operations
// ========================

// TODO: Delete one course with price 100
db.courses.deleteOne({ price: 100 });

// TODO: Delete all courses with price 250
db.courses.deleteMany({ price: 250 });

// INFO: MongoDB query operators reference
// https://www.mongodb.com/docs/manual/reference/operator/query/
