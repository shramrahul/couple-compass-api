// services/conversationService.js
const { sendConversationToModal, sendConversationToModalTherapist } = require("../client/coreEngineClient");

/**
 * Send conversation to Modal and return response
 * @param {string} conversationText
 * @returns {Promise<any>}
 */
async function forwardConversation(conversationText) {
  try {
    const modalResponse = await sendConversationToModal(conversationText);
    return modalResponse;
  } catch (err) {
    throw err;
  }
}

/**
 * Send conversation to Modal and return response
 * @param {string} conversationText
 * @returns {Promise<any>}
 */
async function talkToTherapist(conversationText) {
  try {
    const modalResponse = await sendConversationToModalTherapist(conversationText);
    return modalResponse;
  } catch (err) {
    throw err;
  }
}

module.exports = { talkToTherapist, forwardConversation };