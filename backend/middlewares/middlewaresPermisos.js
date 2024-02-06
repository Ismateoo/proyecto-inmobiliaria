const router = require('express')
const jwt = require('jsonwebtoken')
const knex = require('../config/database')
require('dotenv').config()

async function permiso1 (req, res, next) {
    const token = req.headers['autorizacion'];
    if(!token) {
        res.json({mensaje: "No autorizado"})
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        id = req.user.id

        if(req.user.id_permisos == 1 || req.user.id_permisos == 0){
            next ()
        }else{
            res.json({mensaje: "No autorizado"})
        }
    } catch (error) {
        res.json({mensaje: error})
    }
}

async function permiso2 (req, res, next) {
    const token = req.headers['autorizacion'];
    if(!token) {
        res.json({mensaje: "No autorizado"})
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        id = req.user.id

        if(req.user.id_permisos == 2 || req.user.id_permisos == 0){
            next ()
        }else{
            res.json({mensaje: "No autorizado"})
        }
    } catch (error) {
        res.json({mensaje: error})
    }
}

async function permiso3 (req, res, next) {
    const token = req.headers['autorizacion'];
    if(!token) {
        res.json({mensaje: "No autorizado"})
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        id = req.user.id

        if(req.user.id_permisos == 3 || req.user.id_permisos == 0){
            next ()
        }else{
            res.json({mensaje: "No autorizado"})
        }
    } catch (error) {
        res.send(error)
    }
}

async function permiso0 (req, res, next) {
    const token = req.headers['autorizacion'];
    if(!token) {
        res.json({mensaje: "No autorizado"})
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        id = req.user.id

        if(req.user.id_permisos == 0){
            next ()
        }else{
            res.json({mensaje: "No autorizado"})
        }
        
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    permiso1,
    permiso2,
    permiso3,
    permiso0
}