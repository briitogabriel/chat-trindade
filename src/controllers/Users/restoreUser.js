const { User } = require("../models/Users");

async function restore(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: { userId: userId },
      paranoid: false,
    });

    if (!user) {
      return res.status(404).send({
        message: "usuário não encontrado",
      });
    }

    await user.restore();

    return res.status(200).send({
      message: "usuário restaurado com sucesso",
    });
  } catch (error) {
    return res.status(400).send({
      message: "erro ao restaurar o usuário",
      cause: error.message,
    });
  }
}

module.exports = restore;
