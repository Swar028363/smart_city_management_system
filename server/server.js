// server/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const trafficRoutes = require("./routes/trafficRoutes");
const transportRoutes = require("./routes/transportRoutes");
const energyRoutes = require("./routes/energyRoutes");
const waterRoutes = require("./routes/waterRoutes");
const wasteRoutes = require("./routes/wasteRoutes");
const securityRoutes = require("./routes/securityRoutes");
const healthcareRoutes = require("./routes/healthcareRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/traffic", trafficRoutes);
app.use("/api/transport", transportRoutes);
app.use("/api/energy", energyRoutes);
app.use("/api/water", waterRoutes);
app.use("/api/waste", wasteRoutes);
app.use("/api/security", securityRoutes);
app.use("/api/healthcare", healthcareRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
