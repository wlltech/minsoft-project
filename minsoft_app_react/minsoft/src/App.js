import React, {Component} from "react";
import Navigation from './components/navigation.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Navigation/>
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* </header> */} 
    </div>
  );
}

export default App;
