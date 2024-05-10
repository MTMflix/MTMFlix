import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar"
import OptionsTabs from "./components/layout/OptionsTabs";
// import SearchResults from "./components/layout/SearchResults";
// import SearchResults from "./components/layout/SearchResults";
import Dashboard from "./components/layout/Dashboard";

class App extends Component{
  render(){
    return (
      // <Router>
        <div className="App">
            <Navbar/>
          <div className="options">
            <OptionsTabs/>
          </div>
          <div className = "dashboard">
            <Dashboard/>
          </div>
          {/* <SearchResults results ={results}/> */}
        </div>
        /* <Routes>
          <Route
            path="/searchResults"
            element={<SearchResults/>}/>
        </Routes>
      </Router> */
    );
  }
}

export default App
