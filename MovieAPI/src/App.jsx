import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar"
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
// import SearchResults from "./components/layout/SearchResults";


class App extends Component{
  render(){
    return (
      // <Router>
        <div className="App">
          <div id="home-page">
              <Navbar/>
            <div className="options">
              <OptionsTabs/>
            </div>
            <div className="dashboard">
              <Dashboard/>
            </div>
          </div>
          {/* <div id="results-page" className="hidden">
              <SearchResults/>
          </div> */}
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
