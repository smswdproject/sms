const express = require("express");
const router = express.Router();

const {createAnn} = require("../controllers/ann.controllers");

router.post("/createAnn", createAnn);

module.exports = router;