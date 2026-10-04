const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Student = require("./models/studentModel");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));


// ==========================================
// ADD STUDENT
// ==========================================
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student added successfully",
            student: savedStudent
        });
    } catch (error) {
        res.status(400).json({
            message: "Error adding student",
            error: error.message
        });
    }
});


// ==========================================
// DISPLAY ALL STUDENTS
// ==========================================
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});


// ==========================================
// DISPLAY STUDENTS BY BRANCH
// ==========================================
app.get("/students/branch/:branch", async (req, res) => {
    try {
        const students = await Student.find({
            branch: {
                $regex: `^${req.params.branch}$`,
                $options: "i"
            }
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students by branch",
            error: error.message
        });
    }
});


// ==========================================
// MARKS GREATER THAN 75
// ==========================================
app.get("/students/marks/above75", async (req, res) => {
    try {
        const students = await Student.find({
            marks: { $gt: 75 }
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});


// ==========================================
// MARKS GREATER THAN 80
// ==========================================
app.get("/students/above80", async (req, res) => {
    try {
        const students = await Student.find({
            marks: { $gt: 80 }
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});


// ==========================================
// MARKS LESS THAN 50
// ==========================================
app.get("/students/below50", async (req, res) => {
    try {
        const students = await Student.find({
            marks: { $lt: 50 }
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});


// ==========================================
// SEARCH BY ROLL NUMBER
// ==========================================
app.get("/students/roll/:rollNo", async (req, res) => {
    try {
        const student = await Student.findOne({
            rollNo: req.params.rollNo
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: "Error searching student",
            error: error.message
        });
    }
});


// ==========================================
// SEARCH USING MARKS AND YEAR CONDITIONS
// Example:
// /students/search?marks=75&year=3
// ==========================================
app.get("/students/search", async (req, res) => {
    try {
        const query = {};

        if (req.query.marks) {
            query.marks = {
                $gt: Number(req.query.marks)
            };
        }

        if (req.query.year) {
            query.year = Number(req.query.year);
        }

        const students = await Student.find(query);

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error searching students",
            error: error.message
        });
    }
});


// ==========================================
// UPDATE MARKS
// ==========================================
app.put("/students/:rollNo/marks", async (req, res) => {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { rollNo: req.params.rollNo },
            { marks: req.body.marks },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Marks updated successfully",
            student: updatedStudent
        });
    } catch (error) {
        res.status(400).json({
            message: "Error updating marks",
            error: error.message
        });
    }
});


// ==========================================
// UPDATE EMAIL AND/OR BRANCH
// ==========================================
app.put("/students/:rollNo", async (req, res) => {
    try {
        const updateData = {};

        if (req.body.email) {
            updateData.email = req.body.email;
        }

        if (req.body.branch) {
            updateData.branch = req.body.branch;
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                message: "Provide email or branch to update"
            });
        }

        const updatedStudent = await Student.findOneAndUpdate(
            { rollNo: req.params.rollNo },
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student updated successfully",
            student: updatedStudent
        });
    } catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });
    }
});


// ==========================================
// DELETE STUDENT
// ==========================================
app.delete("/students/:rollNo", async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({
            rollNo: req.params.rollNo
        });

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully",
            student: deletedStudent
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});


// ==========================================
// SORT BY MARKS - DESCENDING
// ==========================================
app.get("/students/sorted", async (req, res) => {
    try {
        const students = await Student.find().sort({
            marks: -1
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error sorting students",
            error: error.message
        });
    }
});


// ==========================================
// HIGHEST MARKS
// ==========================================
app.get("/students/highest", async (req, res) => {
    try {
        const student = await Student.findOne().sort({
            marks: -1
        });

        if (!student) {
            return res.status(404).json({
                message: "No students found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: "Error finding highest marks",
            error: error.message
        });
    }
});


// ==========================================
// CREATE INDEX ON rollNo
// ==========================================
async function createRollNoIndex() {
    await Student.collection.createIndex({
        rollNo: 1
    });

    console.log("Index created on rollNo");
}


// ==========================================
// START SERVER AFTER MONGODB CONNECTION
// ==========================================
async function startServer() {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/collegeDB"
        );

        console.log("Connected to MongoDB");

        await createRollNoIndex();

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);
    }
}

startServer();