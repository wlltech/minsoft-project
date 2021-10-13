import React from "react";
import './products.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FaUserCheck } from "react-icons/fa";

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
      <div classname="container">
            
            <form data-reset="true" id="frmLogin" action="?c=Auth" data-success="successLogin" method="">
              <span classname="row">
                <div classname="col-sm-12">
                  <div classname="form-group">
                    <h2>Formulario | Nuevo Producto</h2>
                  </div>
                </div>
              </span>
              <span classname="col-sm-4">
                <div classname="form-group">
                  <label htmlfor="codigo">Código de Producto:</label>
                  <input type="number" min="{1}" max="{100}" classname="form-control col-sm-4" id="codigo" name="codigo" />
                </div>
              </span>
              <span classname="col-sm-4">
                <div classname="form-group">
                  <label htmlfor="nombre">Nombre del Producto:</label>
                  <input type="text" classname="form-control col-sm-4" id="nombre" name="nombre" />
                </div>
              </span>
              <span classname="col-sm-4">
                <div classname="form-group">
                  <label htmlfor="precio">Valor Unitario:</label>
                  <input type="number" classname="form-control col-sm-4" id="precio" name="precio" />
                </div>
              </span>
              <span classname="col-sm-4">
                <div classname="form-group">
                  <label htmlfor="existencia">Numero de Existencia:</label>
                  <input type="number" classname="form-control col-sm-4" id="existencia" name="existencia" />
                </div>
              </span>
              <span classname="col-sm-4">
                <label>Estado del Producto:</label>
                <div classname="form-group has-feedback">
                  <input type="radio" name="estado" id="estado" />Disponible
                  <input type="radio" name="estado" id="estado" />No disponible
                </div>
              </span>
              <span>
                <label>Imagen del producto</label>
                <input id="uploadImage1" type="file" name="Images" onchange="previewImage(1);" />
                <img id="uploadPreview1" width="{150}" height="{150}" src />
              </span>
              <span classname="row">
                <div classname="col-sm-6">
                  <button type="submit" classname="btn " id="boton-guardar">Guardar</button>
                  <button type="reset" classname="btn ">Editar</button>
                  <button href="index.html" type="item" classname="btn">Actualizar</button>
                  <button classname="btn " id="boton-cargar">Ver registros</button>
                </div>
                <hr classname="d-sm-none" />
              </span>
            </form>
            <br />
          </div>
        </div>
        );
  
      </div>
    );
  }
});