import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/layout/Navbar";
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
import MovieList from "./components/movies/MovieList";
import { SearchContextProvider } from './components/layout/SearchContext'; 

function App() {
    return (
      <SearchContextProvider>
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
        </div> 
      </SearchContextProvider>
    );
  }

export default App;