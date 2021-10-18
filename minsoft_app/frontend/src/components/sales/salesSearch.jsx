import React, { useState } from 'react';
import { Table, Button, ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaEdit } from "react-icons/fa";

// import sales from './databased/sales.json';


export default function SearchSales(props) {

    
    console.log(props.dataSales)

    return (
        <div>
            <Modal isOpen={props.modal} fade={true} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Listado de Ventas</ModalHeader>
                <ModalBody>
                    <Table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id. Venta</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Id. Cliente</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor Unitario</th>
                                <th scope="col">Total</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.dataSales.map(sales => (
                                    <tr key={sales.idSale}>
                                        <th scope="row" >{sales.idSale}</th>
                                        <td>{sales.saleDate}</td>
                                        <td>{sales.sellerName}</td>
                                        <td>{sales.clientId}</td>
                                        <td>{sales.clientName}</td>
                                        <td>{sales.productName}</td>
                                        <td>{sales.amount}</td>
                                        <td>{sales.unitPrice}</td>
                                        <td>{sales.totalPrice}</td>
                                        <td>{sales.saleStatus}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" onClick={props.toggle}>Cerrar</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}