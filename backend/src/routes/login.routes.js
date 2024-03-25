const express = require("express");
const router = express.Router();

const {login} = require("../controllers/login.controllers");
const {auth, isAdmin, isTeacher, isStudent} = require("../middlewares/login.middlewares");


router.post("/", login);

router.get("/admin", auth, isAdmin, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully logged in as admin"
    })
});

router.get("/teacher", auth, isTeacher, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully logged in as teacher"
    })
});

router.get("/student", auth, isStudent, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully logged in as student"
    })
});

module.exports = router;