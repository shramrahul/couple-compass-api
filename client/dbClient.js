const pool = require("../client/db");

// Get all conversations with participants and messages
exports.getAllConversations = async () => {
    const client = await pool.connect();
    try {
      const results = await client.query(
        "SELECT * FROM conversations_mvp;"
      );
  
      return results;
    } finally {
      client.release();
    }
  };

  // Save conversation with turns
exports.createConversation = async (data) => {
  const client = await pool.connect();
  try {

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};