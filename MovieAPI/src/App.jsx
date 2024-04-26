import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import OptionsTabs from "./components/layout/OptionsTabs";

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Dashboard/>
       </div>
       <div className="container">
          <OptionsTabs/>
       </div>
    </div>
    );
  }
}

export default App
