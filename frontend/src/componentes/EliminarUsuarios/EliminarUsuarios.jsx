import Nav from "../Nav/nav";
import "./eliminarUsuarios.css";
import useInmuebles from "../../../rule_user";
import { useEffect } from "react";

export default function EliminarUsuarios() {
  const { eliminarUsuario, verUsuarios, usuarios } = useInmuebles();

  useEffect(() => {
    verUsuarios();
  }, []);

  async function handleOnSumbit(e){
    e.preventDefault();
    const id = e.target["usuariosID"].value;
    eliminarUsuario(id)
    alert(`El inmueble ${id} ha sido eliminado con exito`)
    verUsuarios();
  }

  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Eliminar Usuarios</h1>

          <form onSubmit={(e) => handleOnSumbit(e)}>
                <select name="usuariosID">
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
                <button>Eliminar</button>

            </form>
        </div>
      </div>
      </div>
    </>
  );
}
