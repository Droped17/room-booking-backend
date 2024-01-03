const mongoose = require("mongoose");

const guestListSchema = mongoose.Schema({
  name: { type: String, required: true },
  orderDate: { type: Date, required: true },
  isCheckin: { type: Number, required: true },
  isCheckout: { type: Number, required: true },
});

const guestListModel = mongoose.model("GuestList", guestListSchema);

module.exports = guestListModel;
