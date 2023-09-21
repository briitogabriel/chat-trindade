const { INTEGER, STRING } = require("sequelize");
const { connection } = require("../database/connection");

const Chat = connection.define(
  "chats",
  {
    chatId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
    },
    message: {
      type: STRING,
      allowNull: false,
    },
    userId: {
      type: INTEGER,
      references: {
        model: {
          tableName: "users",
        },
      },
    },
  },
  {
    undescored: true,
    paranoid: true,
  }
);

module.exports = { Chat };
