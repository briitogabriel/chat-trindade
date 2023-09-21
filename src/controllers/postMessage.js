const Message = require("../models/Chat");


const postMessage = async (req, res, next) => {
    try {
      const { from, message } = req.body;
  
      const newMessage = await Message.create({
        text: message,
        senderId: from,
      });
  
      if (newMessage) {
        return res.json({ msg: "Message added successfully." });
      }
      else {
        return res.json({ msg: "Failed to add message to the database" });
      }
      
    } catch (ex) {
      next(ex);
    }
  };
  module.exports = postMessage