require("dotenv").config();
const bcrypt = require("bcrypt");
const { registerSchema, loginSchema } = require("../validate/authen-validate");
const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const { equal } = require("joi");

exports.register = async (req, res, next) => {
  try {
    //validate
    const { value, error } = registerSchema.validate(req.body);
    if (error) {
      next(error);
    }
    //hash password
    value.password = await bcrypt.hash(value.password, 12);

    const user = await UserModel.create({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      phone: value.phone,
      isAdmin: null,
    });
    console.log(user);

    const payload = { _id: user._id };

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY || asdzxckamla234a,
      {
        expiresIn: process.env.JWT_EXPIRE_DATE,
      }
    );

    console.log(accessToken);
    res.status(200).json({ msg: "Register Success!" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { value, error } = loginSchema.validate(req.body);
    if (error) {
      next(error);
    }

    const user = await UserModel.findOne({ email: value.email });
    // console.log(user);

    if (!user) {
      return next(error);
    }

    const isMatchPassword = await bcrypt.compare(value.password, user.password);
    // console.log(isMatchPassword); //boolean

    if (!isMatchPassword) {
      return next(error);
    }

    const payload = { _id: user._id };
    const accessToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY || asdzxckamla234a,
      {
        expiresIn: process.env.JWT_EXPIRE_DATE,
      }
    );

    console.log(accessToken);

    res.status(200).json({ msg: "login success" });
  } catch (error) {
    next(error);
  }
};

exports.me = (req, res) => {
  res.status(200).json({ user: req.user });
};
