const { User } = require("../models/Users");

async function findAllAdm(req, res) {
  try {
    const users = await User.findAll({ paranoid: false });

    if (!users) {
      return res.status(404).send({
        message: "ainda não existem usuários cadastrados no sistema",
      });
    }

    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).send({
      message: "erro ao listar todos os usuários",
      cause: error.message,
    });
  }
}
module.exports = findAllAdm;
