import React, { useEffect, useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { Button, Form, FormGroup, Input } from 'reactstrap';
import saveSale from '../helpers/postSales';


export default function AddSale() {


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

    //Estado y eventos del Formulario
    const [sale, setSale] = useState({})
    const [dataSales, setDataSales] = useState({
        "clientId": "",
        "clientName": "",
        "sale": [],
        "saleDate": "",
        "saleStatus": "En proceso",
        "sellerName": "",
        "totalPrice":5000
    }
    )  //useState para los datos
const [productsToSale, setProductsToSale] = useState([])

const handleIndividualSaleChange = (event) => {
    const { name, value } = event.target
    setSale({ ...sale, [name]: value })
}

const handleIndividualSaleSubmit = (event) => {
    event.preventDefault()
    setProductsToSale([...productsToSale, sale])
    alert("Producto Agregado")
    event.target.reset()
}

const handleInputChange = (event) => {
    const { name, value } = event.target
    setDataSales({
        ...dataSales, [name]: value})
}

const onSubmit = async (event) => {
    event.preventDefault()
    console.log(productsToSale)
    const newSale = {
        "clientId": dataSales.clientId,
        "clientName": dataSales.clientName,
        "sale": productsToSale,
        "saleDate": dataSales.saleDate,
        "saleStatus": "En proceso",
        "sellerName": dataSales.sellerName,
        "totalPrice":5000,
    }
    setDataSales(newSale)
    alert("Venta agregada exitosamente")
    
    await saveSale(dataSales)

    event.target.reset()
}


const [selectSeller, setSelectSeller] = useState(sellers)


return (
    <>
        <div className="gridContainer">
            <div className="formOne" >
                <Form className="row" onSubmit={onSubmit}>
                    <FormGroup className="row mt-2">
                        <label htmlFor="saleDate" className="col-sm-4 control-label">Fecha: </label>
                        <div className="col-sm-8">
                            <Input type="date" className="form-control"
                                name="saleDate" autoComplete="off"
                                autoFocus required
                                onChange={handleInputChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="row mt-2">
                        <label htmlFor="seller" className="col-sm-4 control-label"><FaUserCheck /> Vendedor: </label>
                        <div className="col-sm-8">
                            <select placeholder="Seleccione el vendedor" type="select"
                                className="form-control custom-select"
                                name="sellerName" autoComplete="off"
                                autoFocus required
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
                                name="clientId" autoComplete="off"
                                autoFocus required
                                onChange={handleInputChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="row mt-2">
                        <label htmlFor="clientName" className="col-sm-4 control-label">Nombre del Cliente: </label>
                        <div className="col-sm-8">
                            <Input type="text" className="form-control col-sm-2"
                                name="clientName" autoComplete="off"
                                autoFocus required
                                onChange={handleInputChange}
                            />
                        </div>
                    </FormGroup>
                    <div className="container">
                        <Button type="submit" className="btn col-sm-6">
                            Finalizar
                        </Button>
                    </div>
                </Form>
            </div >
            <div className="formTwo">
                <Form className="col" onSubmit={handleIndividualSaleSubmit}>
                    <FormGroup className="row mt-2">
                        <label htmlFor="productName" className="col-sm-4 control-label">Producto: </label>
                        <div className="col-sm-8">
                            <Input type="text" className="form-control "
                                name="productName" autoComplete="off"
                                autoFocus required
                                onChange={handleIndividualSaleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="row mt-2">
                        <label htmlFor="unitPrice" className="col-sm-4 control-label">Precio Unitario: </label>
                        <div className="col-sm-8">
                            <Input type="number" className="form-control "
                                name="unitPrice" autoFocus
                                required placeholder="$" autoComplete="off"
                                onChange={handleIndividualSaleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="row mt-2">
                        <label htmlFor="amount" className="col-sm-4 control-label">Cantidad: </label>
                        <div className="col-sm-8">
                            <Input type="number" className="form-control "
                                name="amount" placeholder="#"
                                autoFocus required autoComplete="off"
                                onChange={handleIndividualSaleChange}
                            />
                        </div>
                    </FormGroup>
                    <div className="container">
                        <Button type="submit" className="btn col-sm-6 secondaryButton">
                            Añadir
                        </Button>
                    </div>
                </Form>
            </div>
        </div>


    </>
)
}
