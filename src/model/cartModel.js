const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  roomId: { type: Number, required: true },
  date: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  guest: { type: String, required: true },
  specialRequest: { type: String },
  userId: { type: Number, required: true },
  orderId: { type: Number, required: true },
});

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;
