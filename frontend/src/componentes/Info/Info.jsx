import "./info.css"
import Nav from "../Nav/nav";
import useInmuebles from "../../../rule_user";
import { useEffect } from "react";

export default function Info() {
  const { informacion, mostarInfo } = useInmuebles();

  useEffect(() => {
    mostarInfo();
  }, []);
    return(
        <>
        <div className="contenedor">
          <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Información</h1>
            <p>{informacion}</p>
          </div>
        </div>
        </div>
      </>
    )
}