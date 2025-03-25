const logger = require("../../config/logger.js");
const {response} = require("../../config/response.js");
const {addAccountSequelizeController} = require("../../sequelizeController/accountSequelizeController/addAccountSequelizeController.js");
const addAccountController = async(req,res) => {
    try{
        const loggerPrefixName = "addAccountController";
        if(!req.body.account_number || !req.body.user_id || !req.body.bank_name || !req.body.branch_name){
            logger.error('${loggerPrefixName} Missing required fields');
            return response(req,res,message = "Missing required fields",code = 400,data = req?.body);
        }
        const userData = await addAccountSequelizeController(req.body);
        logger.info('${loggerPrefixName} Account added successfully');
        return response(req,res,message = "Account added successfully",code = 200,data = userData);
    }catch(error){
        logger.error('${loggerPrefixName} Error adding account');
        return response(req,res,message = "Error adding account",code = 444,data = error?.message);
    }
}

module.exports = {addAccountController};
