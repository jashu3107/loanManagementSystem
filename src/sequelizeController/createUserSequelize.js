const {Users} = require("../models/Users.js");  // Fix the import
const logger = require("../helpers/logger.js");  // Fix the logger import path

const createUserSequelize = async({data, loggerprefix}) => {
    try {
        logger.info(`${loggerprefix} creating user in database`);
        const user = await Users.create(data);  // Changed User to Users
        logger.info(`${loggerprefix} user created successfully`);
        return {
            "code": 200,
            "message": "user created successfully",
            "data": user
        };
    } catch(error) {
        console.log(error)
        logger?.info(`${loggerprefix} error creating user`);
        return {
            "code": 500,
            "message": "error creating user",
            "data": error
        };
    }
}

module.exports = {
    createUserSequelize
}
