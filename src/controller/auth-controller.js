require("dotenv").config();
const bcrypt = require("bcrypt");
const { registerSchema, loginSchema } = require("../validate/authen-validate");
const UserModel = require("../model/userModel");

exports.register = async (req, res, next) => {
  try {
    //validate 
    const { value, error } = registerSchema.validate(req.body);
    if (error) {
      next(error);
    }
    //hash password
    value.password = await bcrypt.hash(value.password, 12); 

    UserModel.create({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      phone: value.phone,
      isAdmin: null
    })
      .then(() => res.status(200).json({ msg: "register success" }))
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json({ msg: "login success" });
  } catch (error) {
    next(error);
  }
};

exports.me = (req, res) => {
  res.status(200).json({ user: req.user });
};
