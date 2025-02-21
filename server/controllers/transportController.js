// server/controllers/transportController.js
const PublicTransport = require("../models/PublicTransport");

exports.getTransportData = async (req, res) => {
    try {
        const transportData = await PublicTransport.find();
        res.json(transportData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTransportData = async (req, res) => {
    try {
        const newData = new PublicTransport(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
