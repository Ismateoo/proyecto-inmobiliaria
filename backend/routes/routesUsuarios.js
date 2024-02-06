const express = require('express');
const route = express.Router();

const controllersUsuarios = require("../controllers/controllersUsuarios")

route.post("/usuario/login", controllersUsuarios.login)

route.post("/usuarios/registrarUsuario", controllersUsuarios.registrarUsuario)

route.put("/usuarios/modificarUsuario", controllersUsuarios.modificarUsuario)

route.delete("/usuarios/eliminarUsuarios", controllersUsuarios.eliminarUsuario)

route.get("/usuarios/verUsuarios", controllersUsuarios.verUsuarios)

module.exports = route;