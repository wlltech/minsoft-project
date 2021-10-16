import React from "react";
import './Products.css';

 function Products() {
    return (

      <div className="container products">
            <form data-reset="true" id="frmLogin" action="?c=Auth" data-success="successLogin" method="">
              <span className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <h2>Formulario | Nuevo Producto</h2>
                  </div>
                </div>
              </span>
              <span className="col-sm-4">
                <div className="form-group">
                  <label htmlfor="codigo">Código de Producto:</label>
                  <input type="number" min="{1}" max="{100}" className="form-control col-sm-4" id="codigo" name="codigo" />
                </div>
              </span>
              <span className="col-sm-4">
                <div className="form-group">
                  <label htmlfor="nombre">Nombre del Producto:</label>
                  <input type="text" className="form-control col-sm-4" id="nombre" name="nombre" />
                </div>
              </span>
              <span className="col-sm-4">
                <div className="form-group">
                  <label htmlfor="precio">Valor Unitario:</label>
                  <input type="number" className="form-control col-sm-4" id="precio" name="precio" />
                </div>
              </span>
              <span className="col-sm-4">
                <div className="form-group">
                  <label htmlfor="existencia">Numero de Existencia:</label>
                  <input type="number" className="form-control col-sm-4" id="existencia" name="existencia" />
                </div>
              </span>
              <span className="col-sm-4">
                <label>Estado del Producto:</label>
                <div className="form-group has-feedback">
                  <input type="radio" name="estado" id="estado" />Disponible
                  <input type="radio" name="estado" id="estado" />No disponible
                </div>
              </span>
              <span>
                <label>Imagen del producto</label>
                <input id="uploadImage1" type="file" name="Images" onchange="previewImage(1);" />
                <img id="uploadPreview1" width="{150}" height="{150}" src />
              </span>
              <span className="row">
                <div className="col-sm-6">
                  <button type="submit" className="btn " id="boton-guardar">Guardar</button>
                  <button type="reset" className="btn ">Editar</button>
                  <button href="index.html" type="item" className="btn">Actualizar</button>
                  <button className="btn " id="boton-cargar">Ver registros</button>
                </div>
                <hr className="d-sm-none" />
              </span>
            </form>
            <br />
          </div>
        );
};

export default Products;