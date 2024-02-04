const knex = require('../config/database')



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

const editarInmueble = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const result = await knex('inmobiliaria').update(body).where({'id': id}).returning('*')
    res.json(result)
}

const eliminarInmueble = async (req, res) => {
    const id =   req.params.id
    const result = await knex('inmobiliaria').delete().where({'id': id}).returning('*')
    if(result.length != 0){
        res.send("Se ha eliminado con exito")
    }else{
        res.send("No se ha podido eliminar")
    }
}

const filtrarInmueble = async (req, res) => {
    const metrosCuadrados = req.body.metroscuadrados
    const precioVenta = req.body.precioventa
    let result = ""

    if(metrosCuadrados && precioVenta){
     result = await knex('inmobiliaria').select('*').where({'metroscuadrados': metrosCuadrados}).orWhere({'precioventa': precioVenta})
     
    }else if(metrosCuadrados){
         result = await knex('inmobiliaria').select('*').where({'metroscuadrados': metrosCuadrados})
        
    } else if(precioVenta){
         result = await knex('inmobiliaria').select('*').where({'precioventa': precioVenta})
         
    }
    res.json(result)
}

const mostrarInfo = async (req, res) => {
    let cantidad = await knex('inmobiliaria').count()
    let fecha = await knex('inmobiliaria').select(knex.raw('current_timestamp'));
    
    cantidad = cantidad[0].count
    fecha = fecha[0].current_timestamp
    res.send(`Hay ${cantidad} inmuebles registrados hasta el momento ${fecha}`)
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

