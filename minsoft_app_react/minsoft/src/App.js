import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/navigation.jsx";
import Main from "./components/main.jsx";
import Sales from "./components/sales.jsx";
import Products from "./components/products.jsx";
import prueba from "./components/product-list.jsx";

import "./App.css";

function App() {
  return (
      <Router className="App-header">
        <Navigation />
        <Route path="/main" component={Main}/>
        <Route path="/products" component={Products}/>
        <Route path="/sales" component={Sales}/>
        <Route path="/pruebas" component={prueba}/>
        <Route path="/" component={""}/>
      </Router>

  );
}

export default App;
