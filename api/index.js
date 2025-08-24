const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

// Import your routes
const conversationRoutes = require("../routes/conversationRoutes");
const healthRoutes = require("../routes/healthRoutes");

app.use("/conversations", conversationRoutes);
app.use("/health", healthRoutes);   // Health check

// Export app as serverless handler
module.exports = app;
module.exports.handler = serverless(app);