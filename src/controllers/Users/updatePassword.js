const { User } = require("../models/Users");

async function updatePassword(req, res) {
  try {
    const { userId } = req.params;
    const { password } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({
        message: "usuário não encontrado",
      });
    }

    await user.update(userId, { password });
  } catch (error) {
    return res.status(400).send({
      message: "erro ao atualizar a senha do usuário",
      cause: error.message,
    });
  }
}

module.exports = updatePassword;
