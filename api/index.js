const serverless = require("serverless-http");
const express = require("express");

const app = express();
app.use(express.json());

// Import your routes
const conversationRoutes = require("../routes/conversationRoutes");
const healthRoutes = require("../routes/healthRoutes");

app.use("/conversations", conversationRoutes);
app.use("/health", healthRoutes);

// Export handler for Vercel
module.exports = serverless(app);