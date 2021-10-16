import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/navigation.jsx";
import Main from "./components/main.jsx";
import Sales from "./components/sales.jsx";
import Products from "./components/products.jsx";
import List from "./components/product-list.jsx";
import GestionUsr from "./components/gestion-usuarios.jsx";
import Auth from "./components/login/authentication.jsx";

import "./App.css";

function App() {
  return (
      <Router>
        <Navigation />
        <Route path="/main" component={Main}/>
        <Route path="/products" component={Products}/>
        <Route path="/sales" component={Sales}/>
        <Route path="/pruebas" component={List}/>
        <Route path="/product-list" component={Products}/>
        <Route path="/gestion-usuarios" component={GestionUsr}/>
        <Route path="/autenticacion" component={Auth}/>
      </Router>

  );
}

export default App;
