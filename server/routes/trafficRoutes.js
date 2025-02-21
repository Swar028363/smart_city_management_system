// server/routes/trafficRoutes.js
const express = require("express");
const router = express.Router();
const {
    getTrafficData,
    createTrafficData,
} = require("../controllers/trafficController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTrafficData);
router.post("/", protect, createTrafficData);

module.exports = router;
