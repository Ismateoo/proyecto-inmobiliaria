import "./filtrarInmueble.css";
import Nav from "../Nav/nav";
import useInmuebles from "../../../rule_user";

export default function FiltrarInmueble() {
  const { filtrarInmueble, inmuebleFiltrado } = useInmuebles();

  async function handleOnSumbit(e) {
    e.preventDefault();
    const metroscuadrados = e.target["metrosCuadrados"].value;
    const precioventa = `u$s ${e.target["precioVenta"].value}`;

    filtrarInmueble(metroscuadrados, precioventa)
  }

  return (
    <>
      <div className="contenedor">
        <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Filtrar Inmueble</h1>

            <form className="form_filtrar" onSubmit={(e) => handleOnSumbit(e)}>
              <input
                name="metrosCuadrados"
                type="text"
                placeholder="Metros Cuadrados"
              ></input>

              <input
                name="precioVenta"
                type="text"
                placeholder="Precio"
              ></input>
              <button>Filtar</button>
            </form>

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
        inmuebleFiltrado.map((inmueble) => {
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
  );
}
