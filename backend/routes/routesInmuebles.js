const express = require('express');
const route = express.Router();

const controllersInmuebles = require("../controllers/controllersInmuebles");
const middlewaresPermisos = require("../middlewares/middlewaresPermisos")

route.get('/', controllersInmuebles.bienvenida);

route.get('/api/inmuebles', middlewaresPermisos.permiso1, controllersInmuebles.verTodos);

route.get('/api/inmuebles/filtro', middlewaresPermisos.permiso2, controllersInmuebles.filtrarInmueble);

route.get('/api/inmuebles/info', middlewaresPermisos.permiso2, controllersInmuebles.mostrarInfo);

route.get('/api/inmuebles/:id', middlewaresPermisos.permiso1, controllersInmuebles.buscarPorId);

route.post('/api/inmuebles/nuevo', middlewaresPermisos.permiso2,controllersInmuebles.crearInmueble);

route.put('/api/inmuebles/editar/:id', middlewaresPermisos.permiso2, controllersInmuebles.editarInmueble); 

route.delete('/api/inmuebles/eliminar/:id',middlewaresPermisos.permiso3, controllersInmuebles.eliminarInmueble);

route.post('/api/inmuebles/filtro2', middlewaresPermisos.permiso2, controllersInmuebles.filtrarInmueble2);

module.exports = route;
