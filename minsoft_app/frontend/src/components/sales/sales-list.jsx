import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { nanoid } from 'nanoid';
// import sales from './databased/sales.json';


export default function SalesTable(props) {

    console.log(props.saleDatas)

    return (
        <Table className="table table-sm table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Id. Venta</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Valor Unitario</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.saleDatas.map(sales => (
                        <tr key={nanoid()}>
                            {/* <th scope="row" >{sales.idSale}</th> */}
                            <td>{sales.description}</td>
                            <td>{sales.amount}</td>
                            <td>{sales.unitPrice}</td>
                            <td>{sales.totalPrice}</td>
                        </tr>
                    ))
                }


            </tbody>
        </Table>
    )
}