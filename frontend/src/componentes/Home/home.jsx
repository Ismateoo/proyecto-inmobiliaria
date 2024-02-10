import Nav from "../Nav/nav";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="contenedor">
        <div className="main2">
        <Nav />
        <div className="contenedor__home">
          <h1>Bienvenidos a INMUEBLES SRL</h1>
          <p>Hola, Usuario</p>
        </div>
      </div>
      </div>
    </>
  );
}
