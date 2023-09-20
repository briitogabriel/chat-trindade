const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ message: "Usuario não encontrado" });
    res.status(200).json({ message: "Seja bem-vindo!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Algo deu errado, tente novamente" });
  }
};
module.exports = login;
