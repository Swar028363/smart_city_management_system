// server/routes/waterRoutes.js
const express = require("express");
const router = express.Router();
const {
    getWaterData,
    createWaterData,
} = require("../controllers/waterController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getWaterData);
router.post("/", protect, createWaterData);

module.exports = router;
