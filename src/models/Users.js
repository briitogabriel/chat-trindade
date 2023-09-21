const { INTEGER, STRING } = require("sequelize");
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

module.exports = { User };
