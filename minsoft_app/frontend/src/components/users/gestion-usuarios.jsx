import React from "react";

function GestionUsr() {
    return (
      <>
      <h2>Gestion de Usuarios</h2>
        <div className="container">
          <div className="sale-state"></div>
          <form className="form-group" name="selector">
            <label htmlFor="rol" className="mt-2" >Usuario</label>
            <input className="form-control mt-1" />
            <label htmlFor="rol" className="mt-3" >Seleccionar el rol</label>
            <select className="form-control mt-1" name="rol" id="rol">
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>

            <label htmlFor="rol" className="mt-3">Estado del usuario</label>

            <select className="form-control mt-1" name="estado" id="estado">
              <option>Pendiente</option>
              <option>Autorizado</option>
              <option>No Autorizado</option>
            </select>

            <button className="btn mt-4" type="button" id="btn" onclick="update()" >Actualizar</button>
          </form>
        </div>
        </>
        );
    };   
    export default GestionUsr;