const express = require("express");

const login = require("../controllers/login-controller");
const authLogin = require("../middlewares/login-middleware")

const route = express.Router();

route.post("/api/chat", authLogin , login);


module.exports = route;