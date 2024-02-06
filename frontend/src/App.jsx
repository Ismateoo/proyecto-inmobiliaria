import { useState } from "react";

import "./App.css";
import Login from "./componentes/Login/login";
import Nav from "./componentes/Nav/nav";
import Home from "./componentes/Home/home";

function App() {
  return (
    <>
      <div className="contenedor">
        <div className="main poppins-regular">
         {/* <Login/> */}
         <Nav/>
         <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
