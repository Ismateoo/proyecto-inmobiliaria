import { useState } from "react";

import "./App.css";
import Login from "./componentes/Login/login";
import Nav from "./componentes/Nav/nav";

function App() {
  return (
    <>
      <div className="contenedor">
        <div className="main poppins-regular">
         {/* <Login/> */}
         <Nav/>
        </div>
      </div>
    </>
  );
}

export default App;
