const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: Number,
  isAdmin: Number
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // email: { type: String, required: true },
  // password: { type: String, required: true },
  // phone: { type: Number, required: true },
  // isAdmin: { type: Number },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
