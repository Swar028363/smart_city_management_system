// server/models/PublicTransport.js
const mongoose = require("mongoose");

const publicTransportSchema = new mongoose.Schema(
    {
        route: { type: String, required: true },
        schedule: { type: String, required: true },
        status: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("PublicTransport", publicTransportSchema);
