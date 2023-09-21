const { User } = require("../models/Users");

async function CreateUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const existEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    const existUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    if (existEmail) {
      return res.status(403).send({
        message: "usuário já existente com esse email",
      });
    }

    if (existUsername) {
      return res.status(403).send({
        message: "usuário já existente com esse username",
      });
    }

    const userCreated = await User.create({
      username,
      email,
      password,
    });

    return res.status(201).send(userCreated);
  } catch (error) {
    return res.status(400).send({
      message: "erro ao criar usuário",
      cause: error.message,
    });
  }
}

module.exports = CreateUser;
