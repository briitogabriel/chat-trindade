const { INTEGER, STRING } = require("sequelize");
const { connection } = require("../database/connection");

const User = connection.define(
  "users",
  {
    usreId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
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
