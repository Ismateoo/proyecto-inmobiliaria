import Nav from "../Nav/nav";
import "./verUsuarios.css";
import { useEffect } from "react";
import useInmuebles from "../../../rule_user";

export default function VerUsuarios() {
  const {verUsuarios, usuarios} = useInmuebles();
  
  useEffect(() => {
    verUsuarios()
  }, [])

  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Ver Usuarios</h1>

          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Id Permisos</th>
          </tr>
          </thead>
        <tbody>
      {
        usuarios.map((usuario) => {
          return(
            <>

            <tr key={usuario.id}></tr>
            <td>{usuario.id}</td>
            <td>{usuario.username}</td>
            <td>{usuario.id_permisos}</td>
            </>
          )
        })
      }
        </tbody>
            
            </table>

        </div>
      </div>
      </div>
    </>
  );
}
