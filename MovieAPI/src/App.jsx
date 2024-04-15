import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import Dashboard from "./components/layout/Dashboard"
import './App.css'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
    )
  };
};

export default App
