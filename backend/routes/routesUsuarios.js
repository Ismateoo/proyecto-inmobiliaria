const express = require('express');
const route = express.Router();

const controllersUsuarios = require("../controllers/controllersUsuarios")
const middlewaresPermisos = require("../middlewares/middlewaresPermisos")

route.post("/usuarios/login", controllersUsuarios.login)

route.post("/usuarios/registrarUsuario",middlewaresPermisos.permiso0 ,controllersUsuarios.registrarUsuario)

route.put("/usuarios/modificarUsuario", middlewaresPermisos.permiso0, controllersUsuarios.modificarUsuario)

route.delete("/usuarios/eliminarUsuarios", middlewaresPermisos.permiso0, controllersUsuarios.eliminarUsuario)

route.get("/usuarios/verUsuarios", middlewaresPermisos.permiso0,  controllersUsuarios.verUsuarios)

module.exports = route;