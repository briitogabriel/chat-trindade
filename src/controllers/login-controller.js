import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).json({ message: "Usuario não encontrado" });

    const matchPassword = bcrypt.compareSync(password, user.password);
    if (!matchPassword)
      return res.status(401).json({ message: "Credenciais incorretas" });

    const payload = {
      userId: user.userId,
      userName: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Algo deu errado, tente novamente" });
  }
};
module.exports = login;


