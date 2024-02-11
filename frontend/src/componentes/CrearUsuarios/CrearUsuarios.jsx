import Nav from "../Nav/nav";
import "./crearUsuarios.css";
import useInmuebles from "../../../rule_user";

export default function CrearUsuarios() {
  const { crearUsuario } = useInmuebles();

  async function handleOnSumbit(e) {
    e.preventDefault();
    const username = e.target["username"].value;
    const password = e.target["password"].value;
    const id_permisos = e.target["id_permisos"].value;

    crearUsuario(username, password, id_permisos)
    alert(`El usuario ${username} ha sido creado con exito`)
  }


  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Crear Usuarios</h1>
          <form className="form_crear" onSubmit={(e) => handleOnSumbit(e)}>
          <input name="username" type="text" placeholder="Nombre de Usuario"></input>
          <input name="password" type="password" placeholder="Contraseña"></input>
          <input name="id_permisos" type="text" placeholder="Id Permisos"></input>         
          <button>Enviar</button>
          </form>
          <span>Permisos: 1-Visualizador 2-Creador 3-Eliminador 0-Admin</span>
        </div>
      </div>
      </div>
    </>
  );
}
