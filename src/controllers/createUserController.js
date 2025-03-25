const{createUserSequelize} = require("../sequelizeController/createUserSequelize.js");
const{logger}=require("../helpers/loggers.js");
const{response}=require("../helpers/response.js");
const bcrypt = require("bcrypt");

const createUserController = async(req, res)=>{
    try{
        const{first_name, last_name, email, password, account_number} = req.body;
        const salt=await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password);
        const data = {
            first_name,
            last_name,
            email,
            password: hashPassword,
            account_number
        };
        const loggerprefix = "createUserController  -[UserID]";
        const result = await createUserSequelize({data, loggerprefix});
        return response({
            req:req,
            res:res,
            code:result?.code, 
            message:result?.message,
            data:result?.data});
    }catch(error){
        logger.error(error);
        return response(res, 500, "Internal Server Error", error);
    }
};


module.exports = {createUserController};