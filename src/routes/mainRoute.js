const express = require("express");
const {Users} = require("../models/associations.js");
const { createUserController } = require("../controllers/createUserController.js");
const router = express.Router();

//  router.use('/',userValidation,userController) ;

router.post('/signup',createUserController);
module.exports = router;