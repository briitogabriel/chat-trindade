const { User } = require("../models/Users");

async function FindAll(req, res) {
  try {
    const users = await User.findAll();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).send({
      message: "erro ao listar todos os usuários",
      cause: error.message,
    });
  }
}

module.exports = FindAll;
