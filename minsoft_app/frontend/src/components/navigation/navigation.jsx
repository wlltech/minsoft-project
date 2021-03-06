import React from "react";
import {Link } from "react-router-dom"
import './Navigation.css';
import { FaUserAlt } from "react-icons/fa";
import logo from './logo.png';

function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="navbar-brand">Café Minsoft</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/main">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/pruebas">Lista de Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/sales">Ventas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/gestion-usuarios">Usuarios <FaUserAlt /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/autenticacion">Usuarios <FaUserAlt /></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-secondary">
                            Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;