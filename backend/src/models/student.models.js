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
            // required: true,
            maxLength: 10,
            trim: true,
<<<<<<< HEAD
        },
        gender:{
            type: String,
=======
            maxLength: 10,
>>>>>>> af4aabcb7f91bc612fed3148d6ad314c672c5846
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