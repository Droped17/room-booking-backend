require("dotenv").config();
const bcrypt = require("bcrypt");
const {registerSchema,loginSchema} = require("../validate/authen-validate");

exports.register = async (req, res, next) => {
    try {
      const {value,error} = registerSchema.validate(req.body);
      if (error) {
        next(error);
      }
      
      value.password = await bcrypt.hash(value.password,12);

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

exports.me = (req,res) => {
  res.status(200).json({user: req.user});
};
