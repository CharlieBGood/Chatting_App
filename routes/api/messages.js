const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');


router.get("/get-messages-conversation", async (req, res) => {
    try {
      const messagesConversation = await Message.find({
        conversationId: req.query.conversationId,
      });
      console.log(messagesConversation)
      res.status(200).json(messagesConversation);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });



router.get("/get-message",async (req, res) => {
    await Message.find()
        .populate("sender")
        .exec((err, message) => {
            console.log(message)
            if(err) return res.status(400).send(err);
            res.status(200).send(message)
        })
});

module.exports = router;