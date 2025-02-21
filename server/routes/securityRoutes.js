// server/routes/securityRoutes.js
const express = require("express");
const router = express.Router();
const {
    getSecurityData,
    createSecurityData,
} = require("../controllers/securityController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getSecurityData);
router.post("/", protect, createSecurityData);

module.exports = router;
