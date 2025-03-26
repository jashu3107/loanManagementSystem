const express = require("express");
//const {Users} = require("../models/associations.js");
const { createUserController } = require("../controllers/createUserController.js");
//const {Users} = require("../models/Users.js");
const { signinController } = require("../controllers/userController/signinController.js");
const router = express.Router();
const {validationCreateUser} = require("../validation/validationcreateUser.js");
const {protect} = require("../Authorization/protect.js");
const {signinValidation} = require("../validation/validationSignin.js");
//  router.use('/',userValidation,userController) ;

router.post('/signup',protect,validationCreateUser,createUserController);
router.post('/signin',signinValidation, signinController);

module.exports = router;