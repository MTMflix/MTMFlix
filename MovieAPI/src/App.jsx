import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar";
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
import MovieList from "./components/movies/MovieList";
//import GenreList from "./components/layout/GenreList";
import TopRatedList from "./components/layout/TopRatedList";
import TopRatedDetails from "./components/layout/TopRatedDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <div className="options">
          <OptionsTabs />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="movies">
          <MovieList />
        </div>
        <Routes>
          <Route path="/top-rated" element={<TopRatedList />} />
          <Route path="/movies/:movieId" element={<TopRatedDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
      

  );
  
  }
          

export default App;