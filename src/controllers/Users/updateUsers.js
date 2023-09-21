const { User } = require("../models/Users");

async function update(req, res) {
  try {
    const { userId } = req.params;
    const { username } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({
        message: "usuário não encontrado",
      });
    }

    await update(userId, { username });

    return res.status(204).send();
  } catch (error) {
    return res.status(400).send({
      message: "erro ao atualizar o usuário",
      cause: error.message,
    });
  }
}

module.exports = update;
