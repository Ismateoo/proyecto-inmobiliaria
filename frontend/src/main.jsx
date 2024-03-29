import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Login from './componentes/Login/login.jsx'
import VerInmuebles from './componentes/VerInmuebles/VerInmuebles.jsx'
import FiltrarInmueble from './componentes/FiltarInmueble/FiltrarInmueble.jsx'
import Info from './componentes/Info/Info.jsx'
import BuscarPorId from './componentes/BuscarPorId/BuscarPorId.jsx'
import CrearInmueble from './componentes/CrearInmueble/CrearInmueble.jsx'
import EditarInmueble from './componentes/EditarInmueble/EditarInmueble.jsx'
import EliminarInmueble from './componentes/EliminarInmueble/EliminarInmueble.jsx'
import Usuarios from './componentes/Usuarios/Usuarios.jsx'
import CrearUsuarios from './componentes/CrearUsuarios/CrearUsuarios.jsx'
import ModificarUsuarios from './componentes/ModificarUsuarios/ModificarUsuarios.jsx'
import VerUsuarios from './componentes/VerUsuarios/VerUsuarios.jsx'
import EliminarUsuarios from './componentes/EliminarUsuarios/EliminarUsuarios.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/api/inmuebles",
    element: <VerInmuebles/>
  },

  {
    path: "/api/inmuebles/filtro",
    element: <FiltrarInmueble/>
  },

  {
    path: "/api/inmuebles/info",
    element: <Info/>
  },

  {
    path: "/api/inmuebles/:id",
    element: <BuscarPorId/>
  },

  {
    path: "/api/inmuebles/nuevo",
    element: <CrearInmueble/>
  },

  {
    path: "/api/inmuebles/editar/:id",
    element: <EditarInmueble/>
  },

  {
    path: "/api/inmuebles/eliminar/:id",
    element: <EliminarInmueble/>
  },

  {
    path: "/usuarios",
    element: <Usuarios/>
  },
  
  {
    path: "/usuarios/registrarUsuario",
    element: <CrearUsuarios/>
  },

  {
    path: "/usuarios/modificarUsuario/:id",
    element: <ModificarUsuarios/>
  },

  {
    path: "/usuarios/verUsuarios",
    element: <VerUsuarios/>
  },

  {
    path: "/usuarios/eliminarUsuarios/:id",
    element: <EliminarUsuarios/>
  },
  

  



  

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
