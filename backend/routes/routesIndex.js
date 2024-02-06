const express = require('express');
const route = express.Router()

const routesInmuebles = require("./routesInmuebles");
const routesUsuarios = require("./routesUsuarios")
route.use(routesInmuebles);
route.use(routesUsuarios)

module.exports = route;