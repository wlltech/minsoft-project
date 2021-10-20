import React from "react";
import {Link, NavLink } from "react-router-dom"
import './Navigation.css';
import { FaUserAlt } from "react-icons/fa";
import logo from './logo.png';

function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="navbar-brand">Café Minsoft</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/newproduct" activeClassName="active">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/products-list" activeClassName="active">Lista de Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/sales" activeClassName="active">Ventas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/gestion-usuarios" activeClassName="active">Usuarios <FaUserAlt /></NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/autenticacion">Usuarios <FaUserAlt /></Link>
                        </li> */}
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