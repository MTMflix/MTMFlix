import React, { Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Dashboard/>
       </div>
    </div>
    );
  }
}

export default App
