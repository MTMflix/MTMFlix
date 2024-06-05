import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar";
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
import MovieList from "./components/movies/MovieList";
//import GenreList from "./components/layout/GenreList";
import TopRatedList from "./components/layout/TopRatedList";
import TopRatedDetails from "./components/layout/TopRatedDetails";
import SearchResults from "./components/layout/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <div className="options">
          <OptionsTabs />
        </div>
       
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/top-rated" element={<TopRatedList />} />
          <Route path="/movies/:movieId" element={<TopRatedDetails />} />
          <Route path ="/search" element={<SearchResults />}/>
        </Routes>
        
        <Outlet />

      </div>
    </BrowserRouter>
      

  );
  
  }
          

export default App;