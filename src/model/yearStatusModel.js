const mongoose = require("mongoose");

const yearStatusSchema = mongoose.Schema({
  totalCustomer: { type: Number, required: true },
  totalRoom: { type: Number, required: true },
  totalIncome: { type: Number, required: true },
});

const yearStatusModel = mongoose.model("YearStatus", yearStatusSchema);

module.exports = yearStatusModel;
