const knex = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();

const login = async (req, res) => {
    const username  = req.body.username
    const usuario = await knex('usuarios').select('*').where('username', '=' , username).first()

    if(!usuario) {
        return res.json({error:"Usuario no encontrado"})
    }

    const validarPassword = await bcrypt.compare(req.body.password, usuario.password);
    if(!validarPassword) {
        return res.json({error: "Contraseña incorrecta"})
    }

    const token = jwt.sign({
        username: usuario.username,
        id_permisos: usuario.id_permisos
    }, process.env.TOKEN_SECRET);

    res.send(`Hola ${usuario.username} tu token es ${token}`)
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