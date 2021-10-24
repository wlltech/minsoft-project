import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { FaEdit } from "react-icons/fa";
import axios from "axios";

// import sales from './databased/sales.json';


export default function SalesTable() {

    const [dataSales, setDataSales] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect para traer los datos con petición Get
    useEffect(() => {
        axios.get("http://localhost:8080/api/sales")
            .then(response => {
                console.log(response.data)
                const data = response.data
                setDataSales(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ?
                (<div class="spinner-grow spinner-grow-lg" role="status">
                    <span class="sr-only">Loading...</span>
                </div>) : null

            }
            {dataSales ?
                (<Table className="table table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id. Venta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Vendedor</th>
                            <th scope="col">Id. Cliente</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Descripción
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataSales.map(sales => (
                                <tr key={sales._id}>
                                    <th scope="row" >{sales._id.substring(17, 24)}</th>
                                    <td>{sales.saleDate}</td>
                                    <td>{sales.sellerName}</td>
                                    <td>{sales.clientId}</td>
                                    <td>{sales.clientName}</td>
                                    <td>
                                        
                                        {sales.sale.map(items => (
                                            <tbody>
                                                <td scope="row">{items.productName}</td>
                                                <td>{items.amount}</td>
                                                <td>{items.unitPrice}</td>
                                            </tbody>
                                        ))}

                                    </td>
                                    {/* <td>{sales.productName}</td>
                                    <td>{sales.amount}</td>
                                    <td>{sales.unitPrice}</td> */}
                                    <td>{sales.unitPrice * sales.amount}</td>
                                    <td>{sales.saleStatus}</td>
                                    <td><Button ><FaEdit /></Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>) : null}
        </>
    )
}

