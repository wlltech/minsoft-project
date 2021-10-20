import React from "react";
import logo from "./logo.png";
import './login.css';
import {FormGroup} from "reactstrap";


function Main() {
    return(
        <div className="content">
        {/* <main className="container main"> */}
          <div className="logo1">
            <figure>
              <img className = "logo" src={logo} alt="logo" />
              <h1 className="caption">Café Minsoft</h1>
            </figure>
            <h4>Inicie sesión para continuar</h4>
          </div> 
          <form className="etiquetas">
          <FormGroup className="entradas">
            <label for="User" className="mt-2">Usuario</label>
            <input type="text" name="User" className="form-control mt-1"></input>
            </FormGroup>
          <FormGroup className="etiquetas">
            <label for="Password" className="mt-2">Contraseña</label>
          <div className="entradas">
            <input name="Password" className="form-control mt-1"></input>
          </div>
          </FormGroup>
          <div className="buttonlog">
            <button type="submit" className="btn btn-actualizer" data-toggle="button" >
              Ingresar
            </button>
          </div>
          <div className="forgot">
            <p>¿Olvido su contraseña? <a href="#">Click aqui</a>
            </p> 
          </div>
          <div className="register mt-2">
            <a href="registro.html">Registrar</a>
          </div>

          <FormGroup className="formGroupRadios">
            <div>
            <FormGroup className="form-check">
              <input 
                className="form-check-input"
                id="flexRadioDefault1"
                type="radio"
                value="1"
                name="flexRadioDefault"
              />
              <label for="flexRadioDefault1" className="form-check-label">
                Recordar Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form-check">
              <input
                className="form-check-input"
                id="radio2"
                type="radio"
                value="2"
              />
              <label for="radio2" className="form-check-label">
                Recordar Usuario
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form-check">
              <input
              className="form-check-input"
                id="radio3"
                type="radio"
                value="3"
              />
              <label for="radio3" className="form-check-label">
                Siempre preguntar por Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
          </FormGroup>
          </form>
      </div>
    );
  }

export default Main;