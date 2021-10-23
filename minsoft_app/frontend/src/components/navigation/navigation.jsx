import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import './Navigation.css';
import { FaUserAlt, FaSignOutAlt,FaSignInAlt } from "react-icons/fa";
import logo from './logo.png';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // let width = window.matchMedia('(width: 989px)').matches; //inutil en este caso pero permite un cambio en un tamaño exacto de pantalla devuelve true o false
    var width = window.innerWidth;
    const toggleWhenOpen = () => {
        if (width < 989) { setIsOpen(false) }
        console.log(width)
        // else {setIsOpen(!isOpen)}
    };

    return (
            <Navbar color="light" dark expand="lg" >
                <img src={logo} className="App-logo" alt="logo" />
                <NavbarBrand >Café Minsoft</NavbarBrand>
                <NavbarToggler onClick={toggle} >
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar className="row">
                    <Nav className="mr-auto col-md-8" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={toggleWhenOpen}>Inicio</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/newproduct" activeClassName="active" onClick={toggleWhenOpen}>Productos</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/products-list" activeClassName="active" onClick={toggleWhenOpen}>Lista de Productos</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/sales" activeClassName="active" onClick={toggleWhenOpen}>Ventas</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/gestion-usuarios" activeClassName="active" onClick={toggleWhenOpen}>Control de Usuarios</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="col-md-4" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Usuario <FaUserAlt /></NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Registrarse <FaSignInAlt/></NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Cerrar Sesión <FaSignOutAlt/></NavLink>
                        </NavItem>
                    </Nav >
                </Collapse>
            </Navbar>
    );
}


export default Navigation;