// server/models/Healthcare.js
const mongoose = require("mongoose");

const healthcareSchema = new mongoose.Schema(
    {
        facilityName: { type: String, required: true },
        address: { type: String, required: true },
        capacity: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Healthcare", healthcareSchema);
