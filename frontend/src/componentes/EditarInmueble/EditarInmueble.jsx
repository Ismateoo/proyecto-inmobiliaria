import "./editarInmueble.css";
import Nav from "../Nav/nav";
import useInmuebles from "../../../rule_user";
import { useEffect } from "react";

export default function EditarInmueble() {
  const { editarInmueble, verInmuebles, inmuebles } =
    useInmuebles();

  useEffect(() => {
    verInmuebles();
  }, []);

  async function handleOnSumbit(e) {
    e.preventDefault();
    const id = e.target["inmuebleID"].value;
    const nombre = e.target["nombre"].value;
    const metroscuadrados = e.target["metrosCuadrados"].value;
    const direccion = e.target["direccion"].value;
    const precioventa = `u$s ${e.target["precioVenta"].value}`;

    editarInmueble(id,nombre, metroscuadrados, direccion, precioventa)
    alert(`${nombre} ha sido editada con exito`)
  }

  return (
    <>
      <div className="contenedor">
        <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Editar Inmueble</h1>

            <form className="form_editar" onSubmit={(e) => handleOnSumbit(e)}>
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

              <input name="nombre" type="text" placeholder="Nombre"></input>
              <input
                name="metrosCuadrados"
                type="text"
                placeholder="Metros Cuadrados"
              ></input>
              <input
                name="direccion"
                type="text"
                placeholder="Direccion"
              ></input>
              <input
                name="precioVenta"
                type="text"
                placeholder="Precio"
              ></input>

              <button>Editar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
