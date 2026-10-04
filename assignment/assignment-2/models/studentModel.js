const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        branch: {
            type: String,
            required: true,
            trim: true
        },

        year: {
            type: Number,
            required: true,
            min: 1,
            max: 4
        },

        marks: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },

        email: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);