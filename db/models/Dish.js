import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({});

module.exports = mongoose.model("Dish", dishSchema);
