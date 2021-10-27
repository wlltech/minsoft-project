import React, { useState, useEffect } from 'react';
import { Table, Button, ModalFooter, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import getSales from '../helpers/getSales';



export default function SearchSales(props) {
    const [dataSales, setDataSales] = useState(null)
    const [loading, setLoading] = useState(true)

  
    // useEffect para traer los datos con petición Get

    const updateDataSales = () => {
        getSales()
            .then((data) => {
                setDataSales(data)
            })
    };

    useEffect(() => {
        updateDataSales();
        setLoading(false)
    }, []);


    return (
        <>
            {loading ?
                (<div className="spinner-grow spinner-grow-lg" role="status">
                    <span className="sr-only"></span>
                </div>) : null

            }
            {dataSales ? (<div>
                <Modal isOpen={props.modal} fade={true} toggle={props.toggle}>
                    <ModalHeader className="justify-content-center">
                        <span><FaSearch /><Input placeholder="buscar" />
                        </span>
                    </ModalHeader>
                    <ModalBody>
                        <Table className="table table-sm table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id. Venta</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Vendedor</th>
                                    <th scope="col">Id. Cliente</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataSales.map(sales => (
                                        <tr key={sales._id}>
                                            <th scope="row" >{sales._id.substring(17, 24)}</th>
                                            <td>{sales.saleDate.substring(0, 10)}</td>
                                            <td>{sales.sellerName}</td>
                                            <td>{sales.clientId}</td>
                                            <td>{sales.clientName}</td>
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
            </div>) : null}
        </>
    )
}