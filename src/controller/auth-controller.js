require("dotenv").config();

exports.register = async (req, res, next) => {
    try {
      console.log(req.body);
      res.status(200).json({ msg: "register success" });
    } catch (error) {
      next(error);
    }
  };

exports.login = async (req,res,next)=> {
    try {
        console.log(req.body);
        res.status(200).json({msg:"login success"});
    } catch (error) {
        next(error);
    }
};
