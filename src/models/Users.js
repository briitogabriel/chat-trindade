const { INTEGER, STRING } = require("sequelize");
const { Chat } = require("../models/Chat");
const { connection } = require("../database/connection");

const User = connection.define(
  "users",
  {
    userId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    undescored: true,
    paranoid: true,
  }
);

Chat.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Chat, { foreignKey: "userId" });

module.exports = { User };
