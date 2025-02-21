// server/models/Traffic.js
const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema(
    {
        location: { type: String, required: true },
        congestionLevel: { type: Number, required: true },
        description: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Traffic", trafficSchema);
