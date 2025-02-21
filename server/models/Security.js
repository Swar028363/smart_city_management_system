// server/models/Security.js
const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema(
    {
        location: { type: String, required: true },
        incident: { type: String, required: true },
        reportedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Security", securitySchema);
