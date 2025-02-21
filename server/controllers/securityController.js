// server/controllers/securityController.js
const Security = require("../models/Security");

exports.getSecurityData = async (req, res) => {
    try {
        const securityData = await Security.find();
        res.json(securityData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createSecurityData = async (req, res) => {
    try {
        const newData = new Security(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
