// server/controllers/energyController.js
const Energy = require("../models/Energy");

exports.getEnergyData = async (req, res) => {
    try {
        const energyData = await Energy.find();
        res.json(energyData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEnergyData = async (req, res) => {
    try {
        const newData = new Energy(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
