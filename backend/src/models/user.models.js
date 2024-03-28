const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "teacher", "student"]
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: `role`,
        }
    },

    {timestamps: true}
);


module.exports = mongoose.model("userDB", userSchema);