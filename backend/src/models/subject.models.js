const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
        },
        dept: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "deptDB",
            required: true,
        },
        teacher: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "teacherDB", 
            // required: true,
        }],
    },
    {timestamps: true}
);

module.exports = mongoose.model("subjectDB", subjectSchema);
