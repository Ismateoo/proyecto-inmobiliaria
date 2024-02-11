import "./verInmuebles.css"
import Nav from "../Nav/nav"
import { useEffect } from "react";
import useInmuebles from "../../../rule_user";

export default function VerInmuebles() {
  const {verInmuebles, inmuebles} = useInmuebles();
  
  useEffect(() => {
    verInmuebles()
  }, [])


    return(
        <>
        <div className="contenedor">
          <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Ver Inmuebles</h1>

            <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Metros Cuadrados</th>
            <th>Direccion</th>
            <th>Precio</th>
          </tr>
          </thead>
        <tbody>
      {
        inmuebles.map((inmueble) => {
          return(
            <>

            <tr key={inmueble.id}></tr>
            <td>{inmueble.id}</td>
            <td>{inmueble.nombre}</td>
            <td>{inmueble.metroscuadrados}</td>
            <td>{inmueble.direccion}</td>
            <td>{inmueble.precioventa}</td>
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
    )
}