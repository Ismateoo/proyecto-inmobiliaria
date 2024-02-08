import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();

  async function handleOnSumbit(e) {
    e.preventDefault();
    const username = e.target["username"].value;
    const password = e.target["password"].value;

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

    const data = await response.text();
    Cookies.set("token", data, { expires: 7 });

    if (response.ok) {
      navigate("/");
    } else {
      alert("salio mal");
    }
  }

  return (
    <div className="contenedor">
      <div className="contenedor__login">
        <div className="main">
          <h1 className="login__titulo">INMUEBLES SRL</h1>
          <form
            className="login__formulario"
            onSubmit={(e) => handleOnSumbit(e)}
          >
            <label htmlFor="" className="formulario__label">
              Nombre de Usuario
            </label>
            <input name="username" type="text" className="formulario__input" />
            <label htmlFor="" className="formulario__label">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              className="formulario__input"
            />
            <button className="formulario__input">Entar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
