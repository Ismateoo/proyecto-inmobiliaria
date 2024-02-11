import "./buscarPorId.css";
import Nav from "../Nav/nav";
import { useEffect } from "react";
import useInmuebles from "../../../rule_user";

export default function BuscarPorId() {
  const { buscarPorId, buscarInmueble, verInmuebles, inmuebles } =
    useInmuebles();

  useEffect(() => {
    verInmuebles();
  }, []);

  async function handleOnSumbit(e) {
    e.preventDefault();
    const id = e.target["inmuebleID"].value;
    buscarPorId(id);
  }
  return (
    <>
      <div className="contenedor">
        <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Buscar por Id</h1>

            <div className="form_tabla">
              <form onSubmit={(e) => handleOnSumbit(e)}>
                <select name="inmuebleID">
                  {inmuebles.map((inmueble) => {
                    return (
                      <>
                        <option key={inmueble.id} value={inmueble.id}>
                          {inmueble.id}
                        </option>
                      </>
                    );
                  })}
                </select>
                <button>Buscar</button>

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
                    {buscarInmueble.map((inmueble) => {
                      return (
                        <>
                          <tr key={inmueble.id}></tr>
                          <td>{inmueble.id}</td>
                          <td>{inmueble.nombre}</td>
                          <td>{inmueble.metroscuadrados}</td>
                          <td>{inmueble.direccion}</td>
                          <td>{inmueble.precioventa}</td>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
