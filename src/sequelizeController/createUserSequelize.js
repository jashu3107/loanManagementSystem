const {User}=require("./models/Users.js");
const{logger}=require("../helpers/loggers.js");

const createUserSequelize=async({data,loggerprefix})=>{
    try{
        logger.info(`${loggerprefix} creating user in database`);
        const user=await User.create(data);
        logger.info(`${loggerprefix} user created successfully`);
        return {
            "code":200,
            "message":"user created successfully",
            "data":user
        };
    }catch(error){
        logger.error(`${loggerprefix} error creating user`);
        return {
            "code":500,
            "message":"error creating user",
            "data":error
        };
    
    }
}



module.exports={
    createUserSequelize
}
