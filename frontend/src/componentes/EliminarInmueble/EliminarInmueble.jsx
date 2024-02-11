import "./eliminarInmueble.css"
import Nav from "../Nav/nav";
import useInmuebles from "../../../rule_user";
import { useEffect } from "react";

export default function EliminarInmueble() {
  const { eliminarInmueble, verInmuebles, inmuebles } = useInmuebles();

  useEffect(() => {
    verInmuebles();
  }, []);

  async function handleOnSumbit(e){
    e.preventDefault();
    const id = e.target["inmuebleID"].value;
    eliminarInmueble(id)
    alert(`El inmueble ${id} ha sido eliminado con exito`)
    verInmuebles();
  }

    return(
        <>
        <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Eliminar Inmueble</h1>

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
                <button>Eliminar</button>

            </form>
        </div>
      </div>
      </div>
        </>
    )
}