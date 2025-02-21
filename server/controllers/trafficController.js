// server/controllers/trafficController.js
const Traffic = require("../models/Traffic");

exports.getTrafficData = async (req, res) => {
    try {
        const trafficData = await Traffic.find();
        res.json(trafficData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTrafficData = async (req, res) => {
    try {
        const newData = new Traffic(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
