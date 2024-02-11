import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

export default function useInmuebles() {
  const navigate = useNavigate();
  const [inmuebles, setInmuebles] = useState([]);
  const [buscarInmueble, setBuscarInmueble] = useState([]);
  const [inmuebleFiltrado, setinmuebleFiltrado] = useState([]);
  const [informacion, setInformacion] = useState([]);

  const login = async (username, password) => {
    const response = await fetch("http://localhost:3001/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      Cookies.set("token", data.token, { expires: 7 });
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  const verInmuebles = async () => {
    const response = await fetch("http://localhost:3001/api/inmuebles", {
      headers: {
        autorizacion: Cookies.get("token"),
      },
    });
    const data = await response.json();
    setInmuebles(data);
  };

  const buscarPorId = async (id) => {
    const response = await fetch(`http://localhost:3001/api/inmuebles/${id}`, {
      headers: {
        autorizacion: Cookies.get("token"),
      },
    });
    const data = await response.json();
    setBuscarInmueble(data);
  };

  const crearInmueble = async (
    nombre,
    metroscuadrados,
    direccion,
    precioventa
  ) => {
    const response = await fetch("http://localhost:3001/api/inmuebles/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        autorizacion: Cookies.get("token"),
      },

      body: JSON.stringify({
        nombre,
        metroscuadrados,
        direccion,
        precioventa,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  const eliminarInmueble = async (id) => {
    const response = await fetch(
      `http://localhost:3001/api/inmuebles/eliminar/${id}`,
      {
        method: "DELETE",
        headers: {
          autorizacion: Cookies.get("token"),
        },
      }
    );
  };

  const editarInmueble = async (
    id,
    nombre,
    metroscuadrados,
    direccion,
    precioventa
  ) => {
    const response = await fetch(
      `http://localhost:3001/api/inmuebles/editar/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          autorizacion: Cookies.get("token"),
        },
        body: JSON.stringify({
          nombre,
          metroscuadrados,
          direccion,
          precioventa,
        }),
      }
    );
  };

  const filtrarInmueble = async (
    metroscuadrados,
    precioventa
  ) => {
    const response = await fetch("http://localhost:3001/api/inmuebles/filtro2",
    
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        autorizacion: Cookies.get("token"),
      },
      body: JSON.stringify({      
        metroscuadrados,
        precioventa,
      }),
    } )
    const data = await response.json();
    setinmuebleFiltrado(data)
  }

  const mostarInfo = async () => {
    const response = await fetch("http://localhost:3001/api/inmuebles/info",
    {
      headers: {     
        autorizacion: Cookies.get("token"),
      },
    })
    const data = await response.json();
    setInformacion(data.mensaje)
  }

  return {
    login,
    verInmuebles,
    inmuebles,
    buscarPorId,
    buscarInmueble,
    crearInmueble,
    eliminarInmueble,
    editarInmueble,
    inmuebleFiltrado,
    filtrarInmueble,
    mostarInfo,
    informacion
  };
}
