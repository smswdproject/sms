const express = require("express");
const router = express.Router();

const {createSubject} = require("../controllers/subject.controllers");

router.post("/create", createSubject);

module.exports = router;