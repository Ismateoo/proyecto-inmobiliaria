

export default function useUsuarios(){

    const login = async (username, password) => {
        const response = await fetch('localhost:3001/usuarios/login', {
            method: 'POST',
            body:  JSON.stringify(username, password)
    })
    
    if (respuesta.ok) {
        alert(username, password)
    } else{
        alert("salio mal")
    }
    }

    return(
        {login}
    )
}