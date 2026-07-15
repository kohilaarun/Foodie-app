import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({});

module.exports = mongoose.model("Order", orderSchema);
