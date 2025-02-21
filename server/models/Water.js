// server/models/Water.js
const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema(
    {
        area: { type: String, required: true },
        supplyStatus: { type: String, required: true },
        quality: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Water", waterSchema);
