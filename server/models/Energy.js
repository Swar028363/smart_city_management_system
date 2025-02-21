// server/models/Energy.js
const mongoose = require("mongoose");

const energySchema = new mongoose.Schema(
    {
        sector: { type: String, required: true },
        consumption: { type: Number, required: true },
        status: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Energy", energySchema);
