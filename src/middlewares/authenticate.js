const jwt  = require("jsonwebtoken");

module.exports = async(req,res,next) => {
    try {
        console.log(req);
    } catch (error) {
        next(error);
    }
};