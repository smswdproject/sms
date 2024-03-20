const express = require("express");
const router = express.Router();

const {studentExport} = require("../controllers/studentExport.controllers");

router.get("/studentdata", studentExport);

module.exports = router;