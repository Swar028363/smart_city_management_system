// server/models/Waste.js
const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema(
    {
        area: { type: String, required: true },
        collectionDay: { type: String, required: true },
        recyclingStatus: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Waste", wasteSchema);
