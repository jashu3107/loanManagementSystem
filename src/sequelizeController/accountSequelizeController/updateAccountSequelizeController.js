const logger = require("../../config/logger.js");
const {response} = require("../../config/response.js");
const {Account} = require("../../models/Account.js");

const updateAccountSequelizeController = async (req,res) => {
    try{
        const loggerPrefixName = "UpdateAccountSequelizeController";
        const userData = await Account.findByPk(req.params.id);
        logger.info('${loggerPrefixName} User data fetched successfully');
        if(!userData){
            logger.error('${loggerPrefixName} User not found');
            return response(req,res,message = "User not found", code = 400, data = req?.params?.id);
        }
        const updataData = await Account.update(req)
    }
}
