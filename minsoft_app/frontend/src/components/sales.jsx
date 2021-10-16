import React, { useState, Fragment } from "react";
import './Sales.css';
import sales from './databased/sales.json';
import { FaUserCheck, FaEdit } from "react-icons/fa";
import { nanoid } from 'nanoid';
import { Input, Button, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import SalesTable from './sales-list.jsx';


export default function Sales() {

  const [saleDatas, setSaleDatas]= useState(sales)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <h2>Registro de Ventas</h2>
      <div className="container mt-2">

        <div className="col-lg-12">
          <Button type="button" className="btn col-sm-4" data-toggle="button" id="newSell">
            Nueva Venta
          </Button>
          <Button type="button" className="btn col-sm-3" data-toggle="button">
            Buscar
          </Button>
          <Button type="button" className="btn col-sm-4" data-toggle="button" onClick={toggle}>
            Listar Ventas
          </Button>
        </div>
      </div>
      <div className="container mt-2">
        <Form className="row">
          <FormGroup className="row mt-2">
            <label htmlFor="idSale" className="col-sm-4 control-label">Código de Venta: </label>
            <div className="col-sm-8">
              <Input type="dropdown" className="form-control " name="idSale" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="saleDate" className="col-sm-4 control-label">Fecha: </label>
            <div className="col-sm-8">
              <Input type="date" className="form-control" name="saleDate" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="seller" className="col-sm-4 control-label"><FaUserCheck />Vendedor:  </label>
            <div className="col-sm-8">
              <Input type="dropdown" className="form-control " name="sellerName" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="idClient" className="col-sm-4 control-label">Id. Cliente: </label>
            <div className="col-sm-8">
              <Input type="text" className="form-control" name="idClient" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="clientName" className="col-sm-4 control-label">Nombre del Cliente: </label>
            <div className="col-sm-8">
              <Input type="text" className="form-control col-sm-2" name="clientName" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="seller" className="col-sm-4 control-label">Producto: </label>
            <div className="col-sm-8">
              <Input type="text" className="form-control " name="Product" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="Id. Producto" className="col-sm-4 control-label">Id. Producto: </label>
            <div className="col-sm-8">
              <Input type="text" className="form-control " name="idProduct" placeholder="" autoFocus />
            </div>
          </FormGroup>
          <FormGroup className="row mt-2">
            <label htmlFor="seller" className="col-sm-4 control-label">Cantidad: </label>
            <div className="col-sm-8">
              <Input type="number" className="form-control " name="amount" placeholder="#" autoFocus />
            </div>
          </FormGroup>
          <div className="container">
            <Button type="button" className="btn col-sm-4" data-toggle="button">
              Finalizar
            </Button>
          </div>
        </Form>
      </div>
      <div className="wrapper mt-3">
      <h2>Datos de la de Venta</h2>
      <SalesTable saleDatas={saleDatas}/>
      </div>
      <div>
        <Modal isOpen={modal} fade={false} toggle={toggle}>
          <ModalHeader toggle={toggle}>Listado de Ventas</ModalHeader>
          <ModalBody>
            <Table className="table-hover table-responsive">
              <thead>
                <tr>
                  <th>Id Venta</th>
                  <th>Fecha</th>
                  <th>Vendedor</th>
                  <th>Id Cliente</th>
                  <th>Nombre Cliente</th>
                  <th>Valor Total</th>
                  <th>Estado</th>
                  <th>Cambiar Estado</th>
                </tr>
              </thead>
              <tbody>
                {
                  saleDatas.map(item => (
                    <tr>
                      <th scope="row" key={nanoid()}>{item.idSale} </th>
                      <td>{item.saleDate}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.clientId}</td>
                      <td>{item.clientName}</td>
                      <td>{item.totalPrice}</td>
                      <td>{item.saleStatus}</td>
                      <td><Button><FaEdit /></Button></td>

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


