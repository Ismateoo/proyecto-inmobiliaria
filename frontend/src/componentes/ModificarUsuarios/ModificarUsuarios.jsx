import Nav from "../Nav/nav";
import "./modificarUsuarios.css";
import useInmuebles from "../../../rule_user";
import { useEffect } from "react";

export default function ModificarUsuarios() {
  const { modificarUsuario, verUsuarios, usuarios } = useInmuebles();

  useEffect(() => {
    verUsuarios();
  }, []);

  async function handleOnSumbit(e) {
    e.preventDefault();
    const id = e.target["usuarioID"].value;
    const username = e.target["username"].value;
    const password = e.target["password"].value;
    const id_permisos = e.target["id_permisos"].value;

    modificarUsuario(id,username, password, id_permisos)
    alert(`${username} ha sido editado con exito`)
  }

  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Modificar Usuarios</h1> 

          <form className="form_editar" onSubmit={(e) => handleOnSumbit(e)}>
              <select name="usuarioID">
                {usuarios.map((usuario) => {
                  return (
                    <>
                      <option key={usuario.id} value={usuario.id}>
                        {usuario.id}
                      </option>
                    </>
                  );
                })}
              </select>   

                 <input name="username" type="text" placeholder="username"></input>
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
              ></input>
              <input
                name="id_permisos"
                type="text"
                placeholder="ID permisos"
              ></input>           
              <button>Editar</button>
              </form>   
              <span>Permisos: 1-Visualizador 2-Creador 3-Eliminador 0-Admin</span>
        </div>
      </div>
      </div>
    </>
  );
}
