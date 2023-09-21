const { User } = require("../models/Users");

async function FindOne(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({
        message: "usuário não encontrado",
      });
    }

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({
      message: "erro ao listar o usuário",
      cause: error.message,
    });
  }
}

module.exports = FindOne;
