const jwt =require("jsonwebtoken")
const {response}=require("../helpers/response")

const protect =async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return response({
            req:req,
            res:res,
            code:401,
            message:"Unauthorized",
            data:{}
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next();
    }catch(err){
        return response({
            req:req,
            res:res,
            code:401,
            message:"Unauthorized",
            data:{}
        })
    }
}


module.exports={protect}
