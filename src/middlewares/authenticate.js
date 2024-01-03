const jwt  = require("jsonwebtoken");
const {customError} = require("../utils/custom_error");
const UserModel = require("../model/userModel");

module.exports = async(req,res,next) => {
    try {
        const authorization = req.headers.authorization;
        // console.log(authorization);

        //check Bearer
        if (!authorization || !authorization.startsWith("Bearer ")) {
            return next(customError("unauthenticated",401))
        }

        // use split becuase need to split Bearer and token
        const token = authorization.split(" ")[1]; 
        // console.log(token);

        // user splice (Other way)
        // const token = authorization.slice(7,authorization.length-1);
        // console.log(token);

        const payload = jwt.verify(token,process.env.JWT_SECRET_JEY || "asdzxckamla234a");
        
        // console.log(payload);

        const user = await UserModel.findOne({_id: payload._id});

        if (!user) {
            return next(customError("unauthenticated",401))
        }
        // res.status(200).json({msg:"Found User"});
        next();
    } catch (error) {
       if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
        error.statusCode = 401;
       }
       next(error);
    }
};