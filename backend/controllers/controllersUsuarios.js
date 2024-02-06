

const login = (req, res) => {
    res.send("login")
}

const registrarUsuario = (req, res) => {
    res.send("registro")
}

const modificarUsuario = (req, res) => {
    res.send("modificar")
}

const eliminarUsuario = (req, res) => {
    res.send("eliminar")
}

const verUsuarios = (req,res) => {
    res.send("ver")
}

module.exports = {
    login,
    registrarUsuario,
    modificarUsuario,
    eliminarUsuario,
    verUsuarios
}