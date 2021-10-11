import React, { Component } from "react";
import Navigation from "./components/navigation.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  );
}

export default App;
