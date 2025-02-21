// server/routes/energyRoutes.js
const express = require("express");
const router = express.Router();
const {
    getEnergyData,
    createEnergyData,
} = require("../controllers/energyController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getEnergyData);
router.post("/", protect, createEnergyData);

module.exports = router;
