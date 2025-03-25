const logger = require("../../config/logger.js");
const {response} = require("../../config/response.js");
const {Account} = require("../../models/Account.js");
const addAccountSequelizeController = async (req, res) => {
    try{
        const loggerPrefixName = "addAccountSequelizeController";

        logger.info("Adding account");
        const {account_number, user_id, bank_name, branch_name} = req.body;

        if(!account_number || !user_id || !bank_name || !branch_name){
            logger.error('${loggerPrefixName} Missing required fields');
            return response(req,res, message = "Missing required fields", code = 400, data = req?.body);
        }

        const account = await Account.create({account_number, user_id, bank_name, branch_name});
        if(!account){
            logger.error('${loggerPrefixName} Failed to add account');
            return response(req,res, message = "Failed to add accunt", code = 400, data = req?.body);
        }

        logger.info('${loggerPrefixName} Account added successfully');
        return response(req, res, message = "Account added successfully", code = 200, data = req?.body);
        
    }catch(error){  
        logger.error('${loggerPrefixName} Error adding account');
        return response(req, res, message = "Error adding account", code = 500, data = error?.message);
    }
}

module.exports = {addAccountSequelizeController};

