const express = require("express");
const router = express.Router();

const {studentExport, studentResult} = require("../controllers/student.controllers");

router.get("/exportdata", studentExport);

router.get("/result", studentResult);

module.exports = router;