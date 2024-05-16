import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar"
import OptionsTabs from "./components/layout/OptionsTabs";
// import SearchResults from "./components/layout/SearchResults";
// import SearchResults from "./components/layout/SearchResults";
import Dashboard from "./components/layout/Dashboard";
import MovieList from "./components/movies/MovieList";

function App() {
  // console.log(process.env.REACT_APP_MOVIE_API_KEY);
    return (
    // <div>
    //   <h1>Environment Variables</h1>

    //   <p>{import.meta.env.VITE_MOVIE_API_KEY}</p>
    // </div>
      // <Router>
        <div className="App">
            <Navbar/>
          <div className="options">
            <OptionsTabs/>
          </div>
          <div className = "dashboard">
            <Dashboard/>
          </div>
          <div className="movies">
            <MovieList />
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

export default App
