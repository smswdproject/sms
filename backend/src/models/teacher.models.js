const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: 50,
        },
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
        
        subject:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "subjectDB"
        }
    },

    {timestamps: true}
);


module.exports = mongoose.model("teacherDB", teacherSchema);