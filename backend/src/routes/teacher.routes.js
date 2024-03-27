const express = require("express");
const router = express.Router();

const { importResult } = require("../controllers/teacher.controllers");


router.post("/result/import", importResult);

module.exports = router;