const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
  orderId: { type: Number, required: true },
  roomId: { type: Number, required: true },
});

const orderItemModel = mongoose.model("OrderItem", orderItemSchema);

module.exports = orderItemModel;
