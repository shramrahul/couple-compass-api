const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// Endpoints
router.get("/", conversationController.listConversations);
router.post("/forwardConversation", conversationController.forwardConversation);
router.get("/talk-to-therapist", conversationController.talkToTherapist);

module.exports = router;