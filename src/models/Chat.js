const {Sequelize} = require('sequelize')
const connection = require('../database')
const User = require("./Usersjs");

const Message = connection.define(
  "Message",
  {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,    
  }
);



User.hasMany(Message, { foreignKey: "senderId" });
Message.belongsTo(User, { foreignKey: "senderId" });

module.exports = Message;
