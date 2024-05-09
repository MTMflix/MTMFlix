import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar"
// import Dashboard from "./components/layout/Dashboard";
import OptionsTabs from "./components/layout/OptionsTabs";
import SearchResults from "./components/layout/SearchResults";
// import SearchResults from "./components/layout/SearchResults";

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <OptionsTabs/>

          {/* <SearchResults results ={results}/> */}
        </div>
        <Routes>
          <Route
            path="/searchResults"
            element={<SearchResults/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App
