const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: 50,
            unique: true,
            index: true
        },
        HOD:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "teacherDB" // Reference to staff member who is the Head of the Department
        },
        description: {
            type: String
        },
        subjects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "subjectDB" // Reference to subjects offered by the department
        }],
        staff: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "teacherDB" // Reference to staff members working in the department
        }],
        studentCount:{
            type: Number,
            default: 0,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("deptDB", deptSchema);