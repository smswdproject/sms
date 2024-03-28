const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        name:{
            type: String,
            required: true,
            // maxLength: 50,
        },
        subject:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "subjectDB"
        },
        studentCount:{
            type: Number,
            // required: true,
        }
    },

    {timestamps: true}
);


module.exports = mongoose.model("teacherDB", teacherSchema);