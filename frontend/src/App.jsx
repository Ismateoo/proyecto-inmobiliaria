import { useEffect, useState } from "react";
import "./App.css";
import Home from "./componentes/Home/home";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const t = Cookies.get("token");
    setToken(t);
    if(t == "" || t == undefined) {
      console.log("Se navega a login")
      navigate("/login")
    }  
  }, []);

  return (
    <>
      <div className="contenedor">
        <div className="main poppins-regular">
        {token != "" || token != undefined ? <Home /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
