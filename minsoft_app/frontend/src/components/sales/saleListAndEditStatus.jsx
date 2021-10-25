import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { FaEdit } from "react-icons/fa";
import axios from "axios";



export default function SalesTable() {

    const [dataSales, setDataSales] = useState(null)
    const [loading, setLoading] = useState(true)

    

    // const baseURL = process.env.REACT_APP_BACKEND_URL
    const baseURL = "http://localhost:8080/api"     


    console.log(baseURL + " url ")
    // useEffect para traer los datos con petición Get
    useEffect(() => {
        axios.get(`${baseURL}/sales`)
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
                (<div className="spinner-grow spinner-grow-lg" role="status">
                    <span className="sr-only"></span>
                </div>) : null

            }
            {dataSales ?
                (<>
                    <Table className="table table-sm table-striped table-hover justify-content-center">
                        <tr>
                            <th scope="col">Id. Venta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Vendedor</th>
                            <th scope="col">Id. Cliente</th>
                            <th scope="col">Cliente</th>
                            <th scope="col" className="text-center">Descripción 
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center" >Precio</th>
                            </th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Modificar</th>
                        </tr>
                        <tbody>
                            {
                                dataSales.map(sales => (
                                    <tr key={sales._id}>
                                        <th scope="row">{sales._id.substring(17, 24)}</th>
                                        <td>{sales.saleDate.substring(0, 10)}</td>
                                        <td>{sales.sellerName}</td>
                                        <td>{sales.clientId}</td>
                                        <td>{sales.clientName}</td>
                                        <td >
                                            {sales.sale.map(items => (
                                                <tbody key={items._id}>
                                                    <td scope="row">{items.productName}---</td>
                                                    <td >---{items.amount}---</td>
                                                    <td >---${items.unitPrice}</td>
                                                </tbody>
                                            ))}

                                        </td>
                                        {/* <td>{sales.productName}</td>
                                    <td>{sales.amount}</td>
                                    <td>{sales.unitPrice}</td> */}
                                        <td>{sales.sale.map(items => (
                                            <tbody>
                                            <td scope="row">${items.unitPrice*items.amount}</td>
                                            </tbody>
                                            ))}
                                        </td>
                                        <td>{sales.saleStatus}</td>
                                        <td><Button ><FaEdit /></Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <div>

                    </div>
                </>) : null}

        </>
    )
}





