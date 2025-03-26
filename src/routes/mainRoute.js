const express = require("express");
const {Users} = require("../models/Users.js");
const { signinController } = require("../controllers/userController/signinController.js");
const router = express.Router();

router.post('/signin', signinController);

module.exports = router;