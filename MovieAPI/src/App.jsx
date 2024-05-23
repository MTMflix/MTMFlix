import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/layout/Navbar";
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
import MovieList from "./components/movies/MovieList";
import GenreList from "./components/layout/GenreList";
import TopRatedList from "./components/layout/TopRatedList";

function App() {
  // console.log(process.env.REACT_APP_MOVIE_API_KEY);
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
          <div className="options">
            <OptionsTabs/>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/genres/:genreId" element={<GenreList />}/>
            <Route path="/top-rated" element={<TopRatedList />} />
          </Routes>
          <div className = "dashboard">
            <Dashboard/>
          </div>
          <div className="movies">
            <MovieList />
          </div>
        </div>
      </BrowserRouter>
    );
  }

export default App