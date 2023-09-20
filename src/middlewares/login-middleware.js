const yup = require("yup");

const validating = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8,"A senha precisa conter pelo menos 8 digitos"),
  });

  function authLogin(req, res, next) {
    try {
      validating.validateSync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  module.exports = authLogin;