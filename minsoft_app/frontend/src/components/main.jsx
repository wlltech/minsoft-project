import React from "react";
import './Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
              <h1 className="caption">Coffe Shop</h1>
            </figure>
            <h2>Inicie Sesión para Continuar</h2>
          </div>
          
          <div className="etiquetas">
            <label for="User">Usuario</label>
          </div>
          <div className="entradas">
            <input type="text" name="User"></input>
          </div>
          <div className="etiquetas">
            <label for="Password">Contraseña</label>
          </div>
          <div className="entradas">
            <input name="Password"></input>
          </div>
          <div className="buttonlog">
            <button type="button" className="btn btn-actualizer" data-toggle="button">
              Ingresar
            </button>
          </div>
          <div className="forgot">
            <p>¿Olvido su contraseña? <a href="#">Click aqui</a>
            </p> 
          </div>
          <div className="register">
            <a href="registro.html">Registrar</a>
          </div>

          <FormGroup className="formGroupRadios">
            <div>
            <FormGroup>
              <input
                id="radio1"
                type="radio"
                value="1"
              />
              <label for="radio1">
                Recordar Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup>
              <input
                id="radio2"
                type="radio"
                value="2"
              />
              <label for="radio2">
                Recordar Usuario
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup>
              <input
                id="radio3"
                type="radio"
                value="3"
              />
              <label for="radio3">
                Siempre preguntar por Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
          
          </FormGroup>
      </div>
    );
  }

export default Main;