const express = require("express");
const router = express.Router();

const {createUser, updateStudent} = require("../controllers/user.controllers")


router.post("/create", createUser);


router.put("/update", updateStudent);

module.exports = router;