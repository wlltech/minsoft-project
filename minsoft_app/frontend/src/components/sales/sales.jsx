import React, { useState, Fragment, useEffect } from "react";
import './Sales.css';
import { Button } from 'reactstrap';
import { FaEdit } from "react-icons/fa";
import SearchSales from './salesSearch.jsx';
import AddSale from "./addSale";
import SalesTable from "./saleListAndEditStatus";




const productsTesting = [
  {
    "idProduct": 3,
    "productName": "Latte Chai",
    "unitPrice": 5000,
    "availability": "10"

  },
  {
    "id": 4,
    "fullName": "1002",
    "productName": "Cappuccino",
    "unitPrice": 10000,
    "availability": "3"
  }
]


export default function Sales() {


  // variable de prueba para modificar datos de venta
 

  //funciones para agregar venta (ingresan como props al addSale)
  // const [dataSales, setDataSale] = useState({})  //useState para los datos
  // const [productsToSale, setProductsToSale] = useState([])

  // const addSale = (dataSale) => { 
  //      //agrega datos al estado
  //   setDataSale({...dataSales, dataSale, sale:productsToSale}
  //   )
  //   console.log(dataSales)
  // }

  // const addProductsToSale = (products) => {
  //   setProductsToSale([...productsToSale, products]
  //     )
  //   console.log(productsToSale)
  // }

  //funcion para renderizar listado de ventas 
  const [listSales, setListSales] = useState(false)

  const onListSales = () => {
    setNewSale(false)
    setListSales(!listSales)
  }

  //funcion para renderizar nueva venta
  const [newSale, setNewSale] = useState(false)

  const onNewSales = () => {

    setListSales(false)
    setNewSale(!newSale)
  }

  //Función para modificar el estado de cada venta

  //useState para modal de listado de ventas 
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setNewSale(false);
    setListSales(false);
    setModal(!modal);
  }

  return (
    <Fragment>
      <h2>Registro de Ventas</h2>
      <div className="container mt-2">
        <div className="col-lg-12">
          <Button type="button" className="btn col-sm-4" data-toggle="button" id="newSell" onClick={onNewSales}>
            Nueva Venta
          </Button>
          <Button type="button" className="btn col-sm-3" data-toggle="button" onClick={toggle}>
            Buscar
          </Button>
          <Button type="button" className="btn col-sm-4" data-toggle="button" onClick={onListSales}>

            Listar Ventas
          </Button>
        </div>
        {/* Renderizar Formulario de Nueva Venta */}
      </div>
      <div>
        {newSale ? (<div className="container mt-2">
          <AddSale />
          {/* addSale={addSale} addProductsToSale={addProductsToSale} */}
        </div>) : ((<div></div>))}
      </div>
      {/* Renderizar Listado de Ventas */}
      <div>
        {listSales ?
          (<div><h2>Listado de Ventas </h2>
            <div className="wrapper mt-3">
              <SalesTable/>
            </div></div>) : (<div></div>)}
      </div>
      <div>
        {/* renderizar buscar */}
        {modal ?
          (<div>
            <div className="wrapper mt-3">
              <SearchSales toggle={toggle} modal={modal} />
            </div></div>) : (<div></div>)}
      </div>
    </Fragment>

  );
}


