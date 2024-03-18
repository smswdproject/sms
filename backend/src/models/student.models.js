const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        SID:{
            type: Number,
            // required: true,
        },
        name:{
            type: String,
            // required: true,
            trim: true,
        },
        contactNo:{
            type: Number,
            // required: true,
            trim: true,
        },
        gender:{
            type: String,
            // required: true,
            maxLength: 10,
        },
        DOB: {
            type: Date,
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
        parentContactNo: {
            type: Number,
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