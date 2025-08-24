const conversationService = require("../services/conversationService");

// Get all conversations
exports.listConversations = async (req, res) => {
  try {
    console.log('conversation here');
    const response = await conversationService.listConversations();
    res.json(response);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Send all conversations
exports.forwardConversation = async (req, res) => {
  console.log("inside controller")
  const { conversation } = req.body;

  if (!conversation) {
    return res.status(400).json({ status: "error", message: "Conversation is required" });
  }

  try {
    const modalResponse = await conversationService.forwardConversation(conversation);
    res.json(modalResponse); // return Modal response directly
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

//talk to therapist
exports.talkToTherapist = async (req, res) => {
  const { question } = req.query; // ✅ read query param

  if (!question) {
    return res.status(400).json({ status: "error", message: "Question is required" });
  }

  try {
    const modalResponse = await conversationService.talkToTherapist(question);
    return res.json(modalResponse);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};