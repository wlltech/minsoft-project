import React, { useState, Fragment } from "react";
import './Sales.css';
import sales from './databased/sales.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FaUserCheck } from "react-icons/fa";
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';


export default function Sales(props) {

  // const initialState = "";
  // const[data, setData] =  useState()
  // const handleSale = (e) => {
  //   e.preventDefault()
  //   const sellerName = e.target.sellerName.value;
  //   const clientId = e.target.clientId.value;
  //   const clientName = e.target.clientName.value;
  //   const idProduct = e.target.idProduct.value;
  //   const amount = e.target.amountChecked;
  //   const idSell = e.target.idSell.value;
  //   const date = e.target.sellDate.value;
  //   const sellStatus = e.target.sellStatus.value;
  //   setData([{ sellerName, clientId, clientName, idProduct, amount, idSell, date, sellStatus }, ...data]);
  // }

  const salesList = sales;
  // useSales();    

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <div>
        <div className="container">
          <header className="header">
            <h2>Registro de Ventas</h2>
          </header>
          <div className="sale-state">
            <Button type="button" className="btn btn-new-sale" data-toggle="button" id="newSell">
              Nueva Venta
            </Button>
            <Button type="button" className="btn btn-search" data-toggle="button">
              Buscar
            </Button>
            <Button type="button" className="btn btn-actualizer" data-toggle="button" onClick={toggle}>
              Listar Ventas
            </Button>
          </div>
          <div className="sale-data" id="saleData">
            <div className="seller-label"> <label htmlFor="seller" className="col-form-label ">Vendedor: </label> </div>
            <select type="dropdown" className="seller form-control" id="seller" placeholder="Vendedor" autofocus>
              <option>Elija el vendedor</option>
            </select>
            <div className="client-label"><label htmlFor="client" className="col-form-label">Id. Cliente: </label> </div>
            <div className="client">
              <Input type="text" className="form-control" id="client" placeholder="Id. Cliente" />
            </div>
            <div className="name-label"><label htmlFor="name-client" className="col-form-label">Nombre Cliente: </label></div>
            <div className="name">
              <Input type="text" className="form-control" id="name-client" placeholder="Nombre del Cliente" />
            </div>
            <div className="product-label"><label htmlFor="id-product" className="col-form-label">Producto: </label></div>
            <select type="dropdown" className="product form-control" id="id-product" placeholder="Id. Producto">
              <option>Id. Producto</option>
            </select>
            <div className="amount-label"><label htmlFor="amount" className="col-form-label">Cantidad: </label></div>
            <div className="amount">
              <Input type="text" className="form-control" id="amount" placeholder="Cantidad" />
            </div>
            <div className="finished">
              <Button type="button" className="btn btn-actualizer" data-toggle="button" onClick="">
                Finalizar
              </Button>
            </div>
            <div className="save-product">
              <Button type="button" className="btn btn-actualizer" data-toggle="button">
                Agregar
              </Button>
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
              <div className="seller-label"> <label htmlFor="seller" className="seller-label">Vendedor </label><FaUserCheck /></div>
              <div className="seller"><input type="text" id="seller" className="form-control" /></div>
            </section>
            <div className="section-sell">
              <h5 className="sell-title">Descripción de la Venta </h5>
              <div className="wrapper">
                <Table className="table table-sm table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Valor Unitario</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr> */}
                    {/* <th scope="row">{initialState.idProduct}</th>
                    <td>{initialState.amount}</td>
                    <td>{initialState.unitPrice}</td>
                    <td>{initialState.totalPrice}</td>
                  </tr> */}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <footer className="footer">
          </footer>
        </div>
      </div>

      <div>
        <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Listado de Ventas</ModalHeader>
          <ModalBody>
            <Table striped>
              <thead>
                <tr>
                  <th>Id Venta</th>
                  <th>Fecha</th>
                  <th>Vendedor</th>
                  <th>Id Cliente</th>
                  <th>Nombre Cliente</th>
                  <th>Valor Total</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {
                  salesList.map(item => (
                    <tr>
                      <th scope="row">{item.idSale} </th>
                      <td>{item.saleDate}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.clientId}</td>
                      <td>{item.clientName}</td>
                      <td>{item.totalPrice}</td>
                      <td>{item.saleStatus}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>

  );
}


