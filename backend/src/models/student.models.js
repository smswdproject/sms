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
            // required: true,
            trim: true,
        },
        rollNo:{
            type: Number,
            // required: true,
        },
        contactNo:{
            type: Number,
            // required: true,
            trim: true,
            maxLength: 10,
        },
        DOB: {
            type: Date,
            // required: true,
        },
        gender:{
            type: String,
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
    },

    {timestamps: true}
);

module.exports = mongoose.model("studentDB", studentSchema);