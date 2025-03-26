const {Users} = require("../models/Users.js"); 
const {logger} = require("../helpers/logger.js");  // Fixed: Destructure logger from the import

const createUserSequelize = async({data, loggerprefix}) => {
    try {
        logger.info(`${loggerprefix} creating user in database`);
        const user = await Users.create(data);  
        logger.info(`${loggerprefix} user created successfully`);
        return {
            "code": 200,
            "message": "user created successfully",
            "data": user
        };
    } catch(error) {
        console.log(error);
        logger.info(`${loggerprefix} error creating user`); // Removed optional chaining
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
