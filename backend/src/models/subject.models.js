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
            ref: "staffDB", 
            // required: true,
        }],
        // studentCount: {
        //     type: Number,
        //     // required: true,
        //     default: 0,
        // },
        // semester: {
        //     type: Number,
        //     required: true,
        // },
        // midSemMarks: {
        //     type: Number,
        //     default: 0,
        // },
        // fullSemMarks: {
        //     type: Number,
        //     default: 0,
        // },
        // totalMarks: {
        //     type: Number,
        //     default: 0,
        // },
        // attendance: [{
        //     student: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "studentDB"
        //     },
        //     attended: {
        //         type: Boolean,
        //         default: false
        //     }
        // }]
    },
    {timestamps: true}
);

module.exports = mongoose.model("subjectDB", subjectSchema);
