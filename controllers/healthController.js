exports.healthCheck = (req, res) => {
    res.json({
      status: "ok",
      message: "Couple Compass API is running 🚀",
      timestamp: new Date().toISOString()
    });
  };