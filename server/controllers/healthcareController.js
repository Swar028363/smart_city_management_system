// server/controllers/healthcareController.js
const Healthcare = require("../models/Healthcare");

exports.getHealthcareData = async (req, res) => {
    try {
        const healthcareData = await Healthcare.find();
        res.json(healthcareData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createHealthcareData = async (req, res) => {
    try {
        const newData = new Healthcare(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
