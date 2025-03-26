const express = require("express");
const {Users} = require("../models/associations.js");
const { createUserController } = require("../controllers/createUserController.js");
const router = express.Router();
const{validationCreateUser} = require("../validation/validationcreateUser.js");

//  router.use('/',userValidation,userController) ;

router.post('/signup',validationCreateUser,createUserController);
module.exports = router;