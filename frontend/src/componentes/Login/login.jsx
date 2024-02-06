import "./login.css"

export default function Login(){
    return(
        <div className="contenedor__login">
            <h1 className="login__titulo">INMUEBLES SRL</h1>
            <form action="" className="login__formulario">
                <label htmlFor="" className="formulario__label">Nombre de Usuario</label>
                <input type="text" className="formulario__input"/>
                <label htmlFor="" className="formulario__label">Contraseña</label>
                <input type="password" className="formulario__input" />
                <button className="formulario__input">Entar</button>
            </form>
        </div>
    )
}