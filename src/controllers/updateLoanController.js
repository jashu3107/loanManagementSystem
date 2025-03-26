const logger = require("../helpers/logger.js");
const {updateLoanSequelizeController} = require("../sequelizeController/updateLoanSequelizeController.js");
//const { logger } = require("../helpers/logger.js");

const updateLoanController = async(req, res) => {
    try {
        logger.info("starting update controller");
        console.log(req.query.loan_id,req.body);
        
        const result = await updateLoanSequelizeController({loan_id:req.query.loan_id,data:req.body});

        return res.status(result.code).json({
            code: result.code,
            message: result.message,
            data: result.data
        });
    } catch(error) {
        logger.error(error);
        return res.status(500).json({
            code: 500,
            message: error?.message || "Internal server error",
            data: {}
        });
    }
}

module.exports = {updateLoanController};
