const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());

// import your routes as usual
const conversationRoutes = require("../routes/conversationRoutes");
const healthRoutes = require("../routes/healthRoutes");
app.use("/conversations", conversationRoutes);
app.use("/health", healthRoutes);   // ✅ New health check route

// Export app as serverless handler
module.exports = serverless(app);