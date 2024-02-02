const express = require('express');
const route = express.Router()

const routesInmuebles = require("./routesInmuebles");
route.use(routesInmuebles);

module.exports = route;