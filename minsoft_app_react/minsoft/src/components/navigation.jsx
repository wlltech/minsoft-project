import React from "react";
import './Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import logo from './logo.png';


function navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="navbar-brand" href="/">Café Minsoft</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Ventas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Usuarios <i class="fa fa-user" aria-hidden="true"><FaUserAlt /></i> </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">
                            Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}


export default navigation;