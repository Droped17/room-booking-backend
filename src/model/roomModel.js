const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNo: { type: Number, required: true },
  roomType: { type: String, required: true },
  roomDetail: { type: String, required: true },
  roomPrice: { type: Number, required: true },
  roomStatus: { type: Number, required: true },
});

const roomModel = mongoose.model("Room",roomSchema);

module.exports = roomModel;