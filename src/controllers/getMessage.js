const Message = require("../models/Chat");

const getMessages = async (req, res, next) => {
  try {
    const { from } = req.body;

    const messages = await Message.findAll({
      where: {
        senderId: from,
      },
      order: [["updatedAt", "ASC"]],
    });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.senderId === parseInt(from),
        message: msg.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports = getMessages;