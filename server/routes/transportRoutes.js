// server/routes/transportRoutes.js
const express = require("express");
const router = express.Router();
const {
    getTransportData,
    createTransportData,
} = require("../controllers/transportController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTransportData);
router.post("/", protect, createTransportData);

module.exports = router;
