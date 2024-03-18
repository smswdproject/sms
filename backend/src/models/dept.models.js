const mongoose = require("mongoose");

const deptSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: 50,
        },
        HOD:{
            type: String,
            required: true,
            maxLength: 50,
        },
        studentCount:{
            type: Number,
            required: true,
            default: 0,
        },
        staffCount:{
            type: Number,
            required: true,
            default: 0,
        },
        subjectCount:{
            type: Number,
            required: true,
            default: 0,
        },
    },
    
    {timestamps: true}
);


module.exports = mongoose.model("deptDB", deptSchema);
