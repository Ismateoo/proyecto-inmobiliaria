const knex = require('../config/database')
const bcrypt = require('bcrypt')

const login = (req, res) => {
    res.send("login")
}

const registrarUsuario = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const usuario = {
        username: req.body.username,
        password: password,
        id_permisos: req.body.id_permisos
    }

    const result = await knex('usuarios').insert(usuario).returning('*')
    res.json(result)
}

const modificarUsuario = (req, res) => {
    res.send("modificar")
}

const eliminarUsuario = (req, res) => {
    res.send("eliminar")
}

const verUsuarios = (req,res) => {
    res.send("ver")
}

module.exports = {
    login,
    registrarUsuario,
    modificarUsuario,
    eliminarUsuario,
    verUsuarios
}