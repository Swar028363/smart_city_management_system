// server/routes/healthcareRoutes.js
const express = require("express");
const router = express.Router();
const {
    getHealthcareData,
    createHealthcareData,
} = require("../controllers/healthcareController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getHealthcareData);
router.post("/", protect, createHealthcareData);

module.exports = router;
