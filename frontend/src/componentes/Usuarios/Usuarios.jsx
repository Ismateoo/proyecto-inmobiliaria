import "./usuarios.css";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../Nav/nav";

export default function Usuarios() {
  return (
    <>
      <div className="contenedor">
        <div className="main2">
          <Nav />
          <div className="contenedor__home">
            <h1 className="poppins-bold">Menu Usuarios</h1>
            <div className="menu__usuarios">
              <div className="nav__item">
                <Link to={`/usuarios/registrarUsuario`}>
                  <span>Crear Usuarios</span>
                </Link>
              </div>
              <div className="nav__item">
                <Link to={`/usuarios/modificarUsuario/:id`}>
                  <span>Modificar Usuario</span>
                </Link>
              </div>
              <div className="nav__item">
                <Link to={`/usuarios/verUsuarios`}>
                  <span>Ver Usuarios</span>
                </Link>
              </div>
              <div className="nav__item">
                <Link to={`/usuarios/eliminarUsuarios/:id`}>
                  <span>Eliminar Usuarios</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
