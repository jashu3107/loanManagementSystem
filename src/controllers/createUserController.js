const { createUserSequelize } = require("../sequelizeController/createUserSequelize.js");
const { logger } = require("../helpers/logger.js");
const { response } = require("../helpers/response.js");
const bcrypt = require("bcrypt");

const createUserController = async (req, res) => {
    try {
        const { first_name, last_name, email, password, account_number, phone_number } = req.body;
        const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const data = {
            first_name,
            last_name,
            email,
            password: hashPassword,
            account_number,
            phone_number
        };
        const loggerprefix = "createUserController  -[UserID]";
        const result = await createUserSequelize({ data, loggerprefix });
        return response({
            req: req,
            res: res,
            code: result?.code,
            message: result?.message,
            data: result?.data
        });
    } catch (err) {
        console.log(err);
        logger?.info(err);
        return response({
            req: req,
            res: res,
            code: 500,
            message: "Internal Server Error",
            data: err
        });
    }
};

module.exports = { createUserController };