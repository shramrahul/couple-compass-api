const express = require("express");
const conversationRoutes = require("./routes/conversationRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/conversations", conversationRoutes);
app.use("/health", healthRoutes);   // ✅ New health check route

app.listen(PORT, () => {
  console.log(`✅ Couple Compass API running at http://localhost:${PORT}`);
});