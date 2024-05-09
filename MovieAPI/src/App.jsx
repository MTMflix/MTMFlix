import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar"
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1><Navbar/></h1>
        <h2><OptionsTabs/></h2>
        <h3><Dashboard /></h3>

      </div>
      
    );
  }
}

export default App
