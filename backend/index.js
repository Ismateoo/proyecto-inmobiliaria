const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors')
app.use(cors())

require('dotenv').config();
const port = process.env.EXPRESS_PORT;

const routes= require("./routes/routesIndex")
app.use(routes)

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
})