import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/navigation.jsx";
import Main from "./components/main.jsx";
import Sells from "./components/sells.jsx";
import Products from "./components/products.jsx";
import prueba from "./components/product-list.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
      <Router className="App-header">
        <Navigation />
        <Route path="/main" component={Main}/>
        <Route path="/products" component={Products}/>
        <Route path="/sells" component={Sells}/>
        <Route path="/pruebas" component={prueba}/>

      </Router>
  );
}

export default App;
