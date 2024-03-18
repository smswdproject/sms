const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: 50,
        },
        studentCount:{
            type: Number,
            required: true,
            default: 0,
        },
        subjectDept:{
            type: String,
            required: true,
            maxLength: 50,
        }
    },

    {timestamps: true}
);


module.exports = mongoose.model("subjectDB", subjectSchema);