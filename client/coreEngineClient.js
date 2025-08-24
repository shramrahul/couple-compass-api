// services/modalClient.js
const axios = require("axios");

/**
 * Sends a conversation to the Modal endpoint
 * @param {string} conversationText
 * @returns {Promise<any>} Modal response
 */
async function sendConversationToModal(conversationText) {
  if (!conversationText) throw new Error("Conversation text is required");

  const url = "https://khanalshashi--example-basic-web-add-conversation.modal.run";

  const payload = { conversation: conversationText };
  console.log(payload)

  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (err) {
    console.log(err)
    throw err.response ? err.response.data : err;
  }
}

module.exports = { sendConversationToModal };

/**
 * Sends a conversation to the Modal endpoint
 * @param {string} conversationText
 * @returns {Promise<any>} Modal response
 */
async function sendConversationToModalTherapist(conversationText) {
  if (!conversationText) throw new Error("Conversation text is required");

  const url = "https://khanalshashi--example-basic-web-test.modal.run?question="+conversationText;

  const payload = { conversation: conversationText };
  console.log(payload)

  try {
    const response = await axios.get(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (err) {
    console.log(err)
    throw err.response ? err.response.data : err;
  }
}

module.exports = { sendConversationToModalTherapist };