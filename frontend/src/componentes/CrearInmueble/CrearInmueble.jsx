import "./crearInmueble.css"
import Nav from "../Nav/nav";
import useInmuebles from "../../../rule_user";

export default function CrearInmueble() {
  const { crearInmueble } = useInmuebles();

  async function handleOnSumbit(e) {
    e.preventDefault();
    const nombre = e.target["nombre"].value;
    const metroscuadrados = e.target["metrosCuadrados"].value;
    const direccion = e.target["direccion"].value;
    const precioventa = `u$s ${e.target["precioVenta"].value}`;

    crearInmueble(nombre, metroscuadrados, direccion, precioventa)
    alert(`${nombre} ha sido creada con exito`)
  }


    return(
        <>
        <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Crear Inmueble</h1>
          <form className="form_crear" onSubmit={(e) => handleOnSumbit(e)}>
          <input name="nombre" type="text" placeholder="Nombre"></input>
          <input name="metrosCuadrados" type="text" placeholder="Metros Cuadrados"></input>
          <input name="direccion" type="text" placeholder="Direccion"></input>
          <input name="precioVenta" type="text" placeholder="Precio"></input>
          <button>Enviar</button>
          </form>
        </div>
      </div>
      </div>
        </>
    )
}