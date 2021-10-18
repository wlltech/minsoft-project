import React, { useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { Button, Form, FormGroup, Input } from 'reactstrap';


export default function AddSale(props) {


    const sellers = [
        {
            name: "David",
            lastName: "González",
            userName: "David González",
            email: "david@david.com",
            rol: "Vendedor"
        },
        {
            name: "Luis",
            lastName: "Vargas",
            userName: "Luis Vargas",
            email: "david@david.com",
            rol: "Vendedor"
        },
    ]

    const initialFormState = {

    }
    //Estado y eventos del Formulario
    const [sale, setSale] = useState(initialFormState)


    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setSale({ ...sale, [name]: value, saleStatus:"despachada" })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.addSale(sale)
        //limpiar campos
        event.target.reset()
        console.log(sale)
    }

    const [selectSeller, setSelectSeller] = useState(sellers)


    return (

        <Form className="row" onSubmit={onSubmit}>
                <FormGroup className="row mt-2">
                <label htmlFor="saleDate" className="col-sm-4 control-label">Fecha: </label>
                <div className="col-sm-8">
                    <Input type="date" className="form-control"
                        name="saleDate" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="seller" className="col-sm-4 control-label"><FaUserCheck/> Vendedor: </label>
                <div className="col-sm-8">
                    <select placeholder="Seleccione el vendedor" type="select"
                        className="form-control custom-select" 
                        name="sellerName" autoFocus required 
                        onChange={handleInputChange}
                    >
                        <option>Seleccione el vendedor</option>
                        {selectSeller.map(items => (
                            <option>{items.userName}</option>
                        ))}
                    </select>
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="idClient" className="col-sm-4 control-label">Id. Cliente: </label>
                <div className="col-sm-8">
                    <Input type="text" className="form-control"
                        name="clientId" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="clientName" className="col-sm-4 control-label">Nombre del Cliente: </label>
                <div className="col-sm-8">
                    <Input type="text" className="form-control col-sm-2"
                        name="clientName" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="seller" className="col-sm-4 control-label">Producto: </label>
                <div className="col-sm-8">
                    <Input type="text" className="form-control "
                        name="description" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="Id. Producto" className="col-sm-4 control-label">Id. Producto: </label>
                <div className="col-sm-8">
                    <Input type="text" className="form-control "
                        name="idProduct" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <FormGroup className="row mt-2">
                <label htmlFor="seller" className="col-sm-4 control-label">Cantidad: </label>
                <div className="col-sm-8">
                    <Input type="number" className="form-control "
                        name="amount" placeholder="#" autoFocus required 
                        onChange={handleInputChange}
                    />
                </div>
            </FormGroup>
            <div className="container">
                <Button type="submit" className="btn col-sm-4" >
                    Finalizar
                </Button>
            </div>
        </Form>
    )
}
