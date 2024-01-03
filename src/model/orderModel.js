const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userId: {type:Number,required: true},
    craetedAt: {type: Date,required: true},
    confirmImage: {type: String },
    isApprove: {type:Number },
    status:{type: Number}
});

const orderModel = mongoose.model("Order",orderSchema);

module.exports = orderModel;