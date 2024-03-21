const express = require("express");
const router = express.Router();

const {updateStudent} = require("../controllers/user.controllers")


router.put("/update", updateStudent);

module.exports = router;