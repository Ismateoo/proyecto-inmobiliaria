const express = require('express');
const route = express.Router();

const controllersInmuebles = require("../controllers/controllersInmuebles");

route.get('/', controllersInmuebles.bienvenida);

route.get('/api/inmuebles');

route.get('/api/inmuebles/:id');

route.post('/api/inmuebles/nuevo');

route.put('/api/inmuebles/editar/:id'); 

route.delete('/api/inmuebles/eliminar/:id');

route.get('/api/inmuebles/filtro');

route.get('/api/inmuebles/info');

module.exports = route;
