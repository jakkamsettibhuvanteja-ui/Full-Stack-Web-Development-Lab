const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const students = [
    {
        id: 1,
        name: "Bhuvan",
        department: "CSE-AIML",
        cgpa: 8.6
    },
    {
        id: 2,
        name: "Rahul",
        department: "CSE",
        cgpa: 8.2
    },
    {
        id: 3,
        name: "Ananya",
        department: "ECE",
        cgpa: 9.1
    },
    {
        id: 4,
        name: "Kiran",
        department: "IT",
        cgpa: 8.7
    },
    {
        id: 5,
        name: "Sneha",
        department: "CSE",
        cgpa: 9.0
    }
];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Express.js Student Server</h1>
        <p>Welcome to the Student Server.</p>
        <p>Available routes:</p>
        <ul>
            <li><a href="/students">/students</a></li>
            <li><a href="/about">/about</a></li>
        </ul>
    `);
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/about", (req, res) => {
    res.json({
        application: "Express.js Student Server",
        purpose: "Demonstration of Express routing and HTTP methods",
        technology: "Node.js and Express.js"
    });
});

app.post("/students", (req, res) => {
    const { name, department, cgpa } = req.body;

    if (!name || !department || cgpa === undefined) {
        return res.status(400).json({
            error: "Name, department and CGPA are required."
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        department,
        cgpa: Number(cgpa)
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully.",
        student: newStudent
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found."
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});