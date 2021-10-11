import React from "react";
import './Sells.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FaUserCheck } from "react-icons/fa";


function Sells() {
    setTimeout(() => console.log("Sells renderizado"), 2000)
    
    return (
        <div>
          <div className="container">
            <header className="header">
              <h2>Registro de Ventas</h2>
            </header>
            <div className="sale-state">
              <button type="button" className="btn btn-new-sale" data-toggle="button" id="newSell">
                Nueva Venta
              </button>
              <button type="button" className="btn btn-search" data-toggle="button">
                Buscar
              </button>
              <button type="button" className="btn btn-actualizer" data-toggle="button">
                Actualizar
              </button>
            </div>
            <div className="sale-data" id="saleData">
              <div className="seller-label"> <label htmlFor="seller" className="col-form-label ">Vendedor: </label> </div>
              <select type="dropdown" className="seller form-control" id="seller" placeholder="Vendedor" autofocus>
                <option>Elija el vendedor</option>
              </select>
              <div className="client-label"><label htmlFor="client" className="col-form-label">Id. Cliente: </label> </div>
              <div className="client">
                <input type="text" className="form-control" id="client" placeholder="Id. Cliente" />
              </div>
              <div className="name-label"><label htmlFor="name-client" className="col-form-label">Nombre Cliente: </label></div>
              <div className="name">
                <input type="text" className="form-control" id="name-client" placeholder="Nombre del Cliente" />
              </div>
              <div className="product-label"><label htmlFor="id-product" className="col-form-label">Producto: </label></div>
              <select type="dropdown" className="product form-control" id="id-product" placeholder="Id. Producto">
                <option>Id. Producto</option>
              </select>
              <div className="amount-label"><label htmlFor="amount" className="col-form-label">Cantidad: </label></div>
              <div className="amount">
                <input type="text" className="form-control" id="amount" placeholder="Cantidad" />
              </div>
              <div className="finished">
                <button type="button" className="btn btn-actualizer" data-toggle="button">
                  Finalizar
                </button>
              </div>
              <div className="save-product">
                <button type="button" className="btn btn-actualizer" data-toggle="button">
                  Agregar
                </button>
              </div>
            </div>
            <div className="data-factura">
              <section className="section-header">
                <h4 className="section-title">Café Minsoft</h4>
                <img className="logo1" src="./favicon.png" alt="logo" />
                <div className="date-label"> <label htmlFor="date" className="date-label">Fecha: </label></div>
                <div className="date"><input type="date" className="form-control" min="2021-10-01" max="2100-04-28" step={1} />
                </div>
                <div className="sell-id-label"> <label htmlFor="sell-id" className="date-label">Id. Venta </label></div>
                <div className="sell-id"><input type="text" id="sell-id" className="form-control" /></div>
                <div className="seller-label"> <label htmlFor="seller" className="seller-label">Vendedor </label><FaUserCheck/></div>
                <div className="seller"><input type="text" id="seller" className="form-control" /></div>
              </section>
              <div className="section-sell">
                <h5 className="sell-title">Descripción de la Venta </h5>
                <div className="wrapper">
                  <table className="table table-sm table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>20</td>
                        <td>$200</td>
                        <td>$4000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>20</td>
                        <td>$200</td>
                        <td>$4000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>20</td>
                        <td>$200</td>
                        <td>$4000</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>20</td>
                        <td>$200</td>
                        <td>$4000</td>
                      </tr>
                      <tr>
                        <th th scope="row">Total</th>
                        <td colSpan={2} />
                        <td>$200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer className="footer">
            </footer>
          </div>
        </div>
      );
    }


export default Sells;