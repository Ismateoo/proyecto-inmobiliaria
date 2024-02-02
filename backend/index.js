const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config();
const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
})