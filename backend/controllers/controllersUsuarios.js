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

    res.json({token})
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

const modificarUsuario = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const result = await knex('usuarios').update(body).where({'id': id}).returning('*')
    res.json(result)
}

const eliminarUsuario = async (req, res) => {
    const id = req.params.id
    const result = await knex('usuarios').delete().where({'id':id}).returning('*')
    if(result.length != 0){
        res.send("Se ha eliminado con exito")
    }else{
        res.send("No se ha podido eliminar")
    }
}

const verUsuarios = async (req,res) => {
    const result = await knex('usuarios').select('*')
    res.json(result)
}

module.exports = {
    login,
    registrarUsuario,
    modificarUsuario,
    eliminarUsuario,
    verUsuarios
}