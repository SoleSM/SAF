import React from 'react'
import { 

    BrowserRouter as Router,
    Routes,
    Route,
 }  from "react-router-dom";

import Home from '../views/home/Home';
import Info from '../views/informacion/Info';
import Login from '../views/login/Login';
import Register from '../views/registro/Register';


export default function Rutas  ()  {
  return (
  
    <Router>
      
        <Routes>
          <Route exact path="/Informacion" element={<Info/>}/>
          <Route exact path="/Registro" element={<Register/>}/>
          <Route exact path="/Iniciosesion" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
     
    </Router>
  

  )
}

