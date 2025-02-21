// server/routes/wasteRoutes.js
const express = require("express");
const router = express.Router();
const {
    getWasteData,
    createWasteData,
} = require("../controllers/wasteController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getWasteData);
router.post("/", protect, createWasteData);

module.exports = router;
