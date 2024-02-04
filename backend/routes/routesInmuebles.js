const express = require('express');
const route = express.Router();

const controllersInmuebles = require("../controllers/controllersInmuebles");

route.get('/', controllersInmuebles.bienvenida);

route.get('/api/inmuebles', controllersInmuebles.verTodos);

route.get('/api/inmuebles/filtro', controllersInmuebles.filtrarInmueble);

route.get('/api/inmuebles/info', controllersInmuebles.mostrarInfo);

route.get('/api/inmuebles/:id', controllersInmuebles.buscarPorId);

route.post('/api/inmuebles/nuevo', controllersInmuebles.crearInmueble);

route.put('/api/inmuebles/editar/:id', controllersInmuebles.editarInmueble); 

route.delete('/api/inmuebles/eliminar/:id', controllersInmuebles.eliminarInmueble);



module.exports = route;
