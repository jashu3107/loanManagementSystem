const { createUserSequelize } = require("../sequelizeController/createUserSequelize.js");
const { logger } = require("../helpers/logger.js");
const { response } = require("../helpers/response.js");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');

const createUserController = async (req, res) => {
    try {
        const { User_id,first_name, last_name, email, password, phone_number } = req.body;
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const data = {
            User_id: uuidv4(),
            first_name,
            last_name,
            email,
            password: hashPassword,
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
        console.log("error in the createUserController");
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