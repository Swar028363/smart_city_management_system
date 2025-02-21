// server/controllers/waterController.js
const Water = require("../models/Water");

exports.getWaterData = async (req, res) => {
    try {
        const waterData = await Water.find();
        res.json(waterData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWaterData = async (req, res) => {
    try {
        const newData = new Water(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
