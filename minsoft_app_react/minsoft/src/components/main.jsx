import React from "react";
import './Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FaUserAlt } from "react-icons/fa";
import logo from "./logo.png";


function Main() {
    return(
        <div className="content">
        {/* <main className="container main"> */}
          <div className="logo1">
            <figure>
              <img className = "logo" src={logo} alt="logo" />
              <h1 className="caption">Coffe Shop</h1>
            </figure>
            <h2>Inicie Sesión Para Continuar</h2>
          </div>
          {/* <span><input type="button" className="btn login" onclick="location.href='login.html'" defaultValue="Iniciar Sesión" /> </span> */}
          {/* <span><input type="button" className="btn login" onclick="location.href='gestion-productos.html'" defaultValue="Productos" /></span>
          <span> <input type="button" className="btn login" onclick="location.href='gestion-ventas.html'" defaultValue="Ventas" />
          </span>
          <span><input type="button" className="btn login" onclick="location.href='gestion-usuarios.html'" defaultValue="Actualizar" /></span> */}
        {/* </main> */}
      </div>
    );
  }

export default Main;