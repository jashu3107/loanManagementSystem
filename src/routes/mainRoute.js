const express = require("express");
const {Users} = require("../models/associations.js");
const router = express.Router();

//  router.use('/',userValidation,userController) ;
router.post("/usercreate",(req, res, next)=>{
    console.log("hello");
    next();
},(req, res)=>{
    const body = req.body;
    console.log(body);
    Users.create(body).then((user)=>{
        return res.status(201).json({
            message: "User created successfully",
            data: user
        })
    }).catch((error)=>{
        return respose.status(500).json({
            message: "Internal server error",
            error: error
        })
    })

})
module.exports = router;