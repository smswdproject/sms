const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
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
            // required: true,
            maxLength: 10,
            trim: true,
        },
        gender:{
            type: String,
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