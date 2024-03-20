const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "teacher", "student"]
        }
    },

    {timestamps: true}
);


module.exports = mongoose.model("userDB", userSchema);