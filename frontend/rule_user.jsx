import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

export default function useInmuebles(){
    const navigate = useNavigate();
    const [inmuebles, setInmuebles] = useState([])
    const [buscarInmueble, setBuscarInmueble] = useState([])

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
  }

  const verInmuebles = async () => {
    const response = await fetch("http://localhost:3001/api/inmuebles", {
        headers: {
            'autorizacion': Cookies.get('token')
        }
    })
    const data = await response.json(); 
    setInmuebles(data)       
  }

  const buscarPorId = async (id) =>{
    const response = await fetch(`http://localhost:3001/api/inmuebles/${id}`, {
        headers: {
            'autorizacion': Cookies.get('token')
        }
    })
    const data = await response.json();
    setBuscarInmueble(data)
  }




  return(
    {login, verInmuebles, inmuebles, buscarPorId, buscarInmueble}
  )
}