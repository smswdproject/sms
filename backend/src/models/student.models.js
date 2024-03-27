const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true
        },
        image:{
            type: String,
        },
        name:{
            type: String,
            required: true,
            trim: true,
        },
        rollNo:{
            type: Number,
            // required: true,
        },
        contactNo:{
            type: Number,
            // required: true,
            maxLength: 10,
            trim: true,
            maxLength: 10,
        },
        DOB: {
            type: Date,
            // required: true,
        },
        gender:{
            type: String,
            enum: ['Male', 'Female', 'Other'],
            // required: true,
        },
        fatherName:{
            type: String,
            // required: true,
            trim: true,
        },
        motherName:{
            type: String,
            // required: true,
            trim: true,
        },
        address: {
            type: String,
            // required: true,
        },
        city: {
            type: String,
            // required: true,
        },
        pinCode: {
            type: Number,
            // required: true, 
        },
        state: {
            type: String,
            // required: true,
        },
        dept:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "deptDB",
            // required: true
        },
        semesters: [{
            semesterNo: {
                type: Number,
                // required: true
            },
            subjects: [{
                subject: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'subjectDB'
                },
                teacher: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'teacherDB'
                },
                attendance: {
                    present: { type: Number },
                    total: { type: Number },
                    percentage: { type: Number }
                },
                midSemMarks: { type: Number },
                fullSemMarks: { type: Number },
                totalMarks: { type: Number },
            }]
        }]
    },

    {timestamps: true}
);

module.exports = mongoose.model("studentDB", studentSchema);