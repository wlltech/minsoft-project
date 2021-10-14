import React from "react";
import './Sales.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function GestionUsr() {
    return (
        <div className="container">
         <header className="header">
            <h2>Gestion de Usuarios</h2>
          </header>
          <div className="sale-state"></div>
          <form className="form-group" name="selector">
            <label htmlFor="rol">Usuario</label>
            <input className="form-control" />
            <br />
            <br />
            <label htmlFor="rol">Seleccionar el rol</label>
            <br />
            <select className="form-control" name="rol" id="rol">
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>
            <br />
            <br />
            <label htmlFor="rol">Estado del usuario</label>
            <br />
            <select className="form-control" name="estado" id="estado">
              <option>Pendiente</option>
              <option>Autorizado</option>
              <option>No Autorizado</option>
            </select>
            <br />
            <br />
            <input type="button" id="btn" defaultValue="Update" onclick="update()" />
          </form>
        </div>
        );
    };   
    export default GestionUsr;