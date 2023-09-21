const { User } = require("../models/Users");

async function remove(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({
        message: "usuário não encontrado",
      });
    }

    await user.destroy();

    return res.status(200).send({
      message: "usuário removido com sucesso",
    });
  } catch (error) {
    return res.status(400).send({
      message: "erro ao remover o usuário",
      cause: error.message,
    });
  }
}

module.exports = remove;
