knex = require('../config/database')


const bienvenida = (req, res) => {
    res.send("Bienvenidos a INMUEBLES SRL")
}

const verTodos = async (req, res) => {
    const result = await knex('inmobiliaria').select('*')
    res.json(result)
}

const buscarPorId = async (req, res) => {
    const id = req.params.id
    const result = await knex('inmobiliaria').select('*')
                                            .where('id', "=" ,id)
    if (result.length != 0){
        res.json(result)
    } else {
        res.status(404).send(`No se encontró ningún inmueble con el ID ${id}`);
    }
} 

const crearInmueble = async (req, res) => {
    const body = req.body
    const result = await knex('inmobiliaria').insert(body).returning('*')
    res.json(result)
}

const editarInmueble = (req, res) => {
    res.send("Editar Inmueble")
}

const eliminarInmueble = (req, res) => {
    res.send("Eliminar Inmueble")
}

const filtrarInmueble = (req, res) => {
    res.send("Filtar")
}

const mostrarInfo = (req, res) => {
    res.send("Info")
}

module.exports = {
    bienvenida,
    verTodos,
    buscarPorId,
    crearInmueble,
    editarInmueble,
    eliminarInmueble,
    filtrarInmueble,
    mostrarInfo
}

