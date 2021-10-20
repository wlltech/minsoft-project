import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./components/navigation/navigation.jsx";
import Login from "./components/users/login.jsx";
import Sales from "./components/sales/sales.jsx";
import Products from "./components/products/products.jsx";
import List from "./components/products/product-list.jsx";
import GestionUsr from "./components/users/gestion-usuarios.jsx";
// import Auth from "./components/users/authentication.jsx";

import "./App.css";

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/sales" component={Sales}/>
        <Route path="/newproduct" component={Products}/>
        <Route path="/products-list" component={List}/>
        <Route path="/gestion-usuarios" component={GestionUsr}/>
        <Route path="*"><h1>404 Not found</h1></Route>
        </Switch>       
        {/* <Route path="/autenticacion" component={Auth}/> */}
      </Router>

  );
}

export default App;
