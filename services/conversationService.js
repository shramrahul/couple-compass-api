const { v4: uuidv4 } = require("uuid");
const coreEngineService = require("../services/coreEngineService");
const pool = require("../client/dbClient");

// Get all conversations
exports.listConversations = async () => {
  const conversations = await pool.getAllConversations();
  return { conversations };
};

exports.forwardConversation = async (conversation) => { 
  return await coreEngineService.forwardConversation(conversation);
};


exports.talkToTherapist = async (conversation) => {
  return await coreEngineService.talkToTherapist(conversation);
};

