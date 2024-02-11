import "./nav.css";
import { useNavigate, Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="contenedor__nav">
      <div className="nav__item">
        <Link to={`/`}>
          <span>Home</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={`/api/inmuebles`}>
          <span>Ver Inmuebles</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={"/api/inmuebles/:id"}>
          <span>Buscar por Id</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={"/api/inmuebles/nuevo"}>
          <span>Crear Inmueble</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={`/api/inmuebles/editar/:id`}>
          <span>Editar Inmueble</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={`/api/inmuebles/eliminar/:id`}>
          <span>Eliminar Inmueble</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/api/inmuebles/filtro">
          <span>Filtrar Inmbuele</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/api/inmuebles/info">
          <span>Info</span>
        </Link>
      </div>
      <div className="nav__item">
        <Link to={`/`}>
          <span>Usuarios</span>
        </Link>
      </div>
    </div>
  );
}
