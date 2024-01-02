const Joi = require("joi");

exports.registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    password: Joi.string().trim().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).trim().strip().required(),
    phone: Joi.string().trim().required(),
});

exports.loginSchema = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().trim().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
});



