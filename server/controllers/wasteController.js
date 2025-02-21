// server/controllers/wasteController.js
const Waste = require("../models/Waste");

exports.getWasteData = async (req, res) => {
    try {
        const wasteData = await Waste.find();
        res.json(wasteData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWasteData = async (req, res) => {
    try {
        const newData = new Waste(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
