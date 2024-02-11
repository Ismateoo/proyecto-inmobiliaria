import Nav from "../Nav/nav";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Home() {
  const navigate = useNavigate()

  const cerrarSesion = () => {
    Cookies.remove('token')
    navigate('/login')
  }
  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1 className="poppins-bold">Bienvenidos a INMUEBLES SRL</h1>
          <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
      </div>
      </div>
    </>
  );
}
