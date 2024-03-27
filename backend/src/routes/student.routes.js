const express = require("express");
const router = express.Router();

const {studentExport, studentResult, updateProfile} = require("../controllers/student.controllers");

router.get("/exportdata", studentExport);

router.get("/result", studentResult);

router.put("/update", updateProfile);

module.exports = router;